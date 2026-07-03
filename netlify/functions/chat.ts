import type { Handler } from '@netlify/functions';
import fs from 'fs';
import path from 'path';
import { OpenAI } from 'openai';

interface Chunk {
  heading: string;
  content: string;
  embedding: number[];
}

// Cache across warm invocations so we don't re-embed on every request.
let cachedChunks: Chunk[] | null = null;
let cacheError: string | null = null;

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

async function embed(openai: OpenAI, text: string): Promise<number[]> {
  const res = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return res.data[0].embedding;
}

async function getChunks(openai: OpenAI): Promise<Chunk[]> {
  if (cachedChunks) return cachedChunks;
  if (cacheError) throw new Error(cacheError);

  // Bundled knowledge base file — included at deploy time via included_files (see netlify.toml).
  const kbPath = path.resolve(__dirname, 'knowledgebase.md');
  if (!fs.existsSync(kbPath)) {
    cacheError = `Knowledge base file not found at ${kbPath}`;
    throw new Error(cacheError);
  }
  const raw = fs.readFileSync(kbPath, 'utf-8');
  const sections = splitByHeaders(raw);

  const chunks: Chunk[] = [];
  for (const section of sections) {
    const embedding = await embed(openai, section.content);
    chunks.push({ heading: section.heading, content: section.content, embedding });
  }
  cachedChunks = chunks;
  return chunks;
}

export const handler: Handler = async (event: { httpMethod: string; body: any; }) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'OPENAI_API_KEY is not configured on Netlify' }) };
  }

  let userMessage: string | undefined;
  try {
    const body = JSON.parse(event.body || '{}');
    userMessage = body.message?.trim();
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }
  if (!userMessage) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Message is required' }) };
  }

  const openai = new OpenAI({ apiKey });

  try {
    const chunks = await getChunks(openai);
    const queryEmbedding = await embed(openai, userMessage);
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
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    console.error('Chat function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err instanceof Error ? err.message : 'LLM request failed' }),
    };
  }
};