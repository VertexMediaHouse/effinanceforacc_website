import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { OpenAI } from 'openai';

// --- ESM-safe __dirname ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Adjust this path if you place the file elsewhere.
const kbPath = path.resolve(__dirname, '../src/assets/knowledgebase.md');

interface Chunk {
  heading: string;
  content: string;
  embedding: number[];
}

let chunks: Chunk[] = [];
let loadError: string | null = null;
let ready = false;

// Split the knowledge base by "## " headers.
function splitByHeaders(raw: string): { heading: string; content: string }[] {
  const sections = raw.split(/\n(?=## )/g).filter((s) => s.trim().length > 0);
  return sections.map((section) => ({
    heading: section.split('\n')[0].replace(/^##\s*/, '').trim(),
    content: section.trim(),
  }));
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

async function embed(text: string): Promise<number[]> {
  const res = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return res.data[0].embedding;
}

async function init() {
  try {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not set. Check your .env file.');
    }
    if (!fs.existsSync(kbPath)) {
      throw new Error(`Knowledge base file not found at: ${kbPath}`);
    }
    const raw = await fs.promises.readFile(kbPath, 'utf-8');
    const sections = splitByHeaders(raw);
    console.log(`Found ${sections.length} knowledge base sections. Embedding...`);

    chunks = [];
    for (const section of sections) {
      const embedding = await embed(section.content);
      chunks.push({ heading: section.heading, content: section.content, embedding });
    }
    ready = true;
    console.log(`Knowledge base ready (${chunks.length} chunks embedded).`);
  } catch (e) {
    loadError = e instanceof Error ? e.message : String(e);
    console.error('Failed to init knowledge base:', loadError);
  }
}

const initPromise = init();

app.get('/health', (_req, res) => {
  res.json({ ok: !loadError, ready, loadError, chunkCount: chunks.length });
});

app.post('/chat', async (req, res) => {
  await initPromise;
  if (loadError) return res.status(500).json({ error: loadError });
  if (!ready) return res.status(503).json({ error: 'Still initializing, try again shortly.' });

  const userMessage: string | undefined = req.body?.message?.trim();
  if (!userMessage) return res.status(400).json({ error: 'Message is required' });

  try {
    const queryEmbedding = await embed(userMessage);
    const scored = chunks
      .map((c) => ({ ...c, score: cosineSimilarity(queryEmbedding, c.embedding) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    const contextText = scored.map((c) => c.content).join('\n\n---\n\n');

    const systemPrompt = `You are the official website assistant for Effinance Foracc LLP, an accounting outsourcing firm.
Answer ONLY using the context below. If the answer isn't in the context, say you're not certain and offer to connect the visitor with the team via email (arpit.shah@effinanceforacc.com) or phone (+91 97259 46540).
NEVER state specific pricing or fees — offer a consultation instead.
If the user asks for a quote, consultation, or callback, end your reply with the exact marker [[LEAD_FORM]].

Context:
${contextText}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userMessage },
      ],
      temperature: 0.2,
    });

    const reply = completion.choices[0]?.message?.content?.trim() || '';
    res.json({ reply });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: 'LLM request failed' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Chat server listening on http://localhost:${PORT}`));