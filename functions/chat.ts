import { OpenAI } from 'openai';

interface Env {
  OPENAI_API_KEY: string;
  ASSETS: { fetch: typeof fetch };
}

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

async function getChunks(openai: OpenAI, request: Request, env: Env): Promise<Chunk[]> {
  if (cachedChunks) return cachedChunks;
  if (cacheError) throw new Error(cacheError);

  // public/knowledgebase.md is served as a static asset by Pages — fetch it
  // through the ASSETS binding rather than the filesystem.
  const assetUrl = new URL('/knowledgebase.md', request.url);
  const assetRes = await env.ASSETS.fetch(new Request(assetUrl.toString()));
  if (!assetRes.ok) {
    cacheError = `Knowledge base file not found at ${assetUrl.pathname}`;
    throw new Error(cacheError);
  }

  const raw = await assetRes.text();
  const sections = splitByHeaders(raw);

  const chunks: Chunk[] = [];
  for (const section of sections) {
    const embedding = await embed(openai, section.content);
    chunks.push({ heading: section.heading, content: section.content, embedding });
  }
  cachedChunks = chunks;
  return chunks;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// functions/chat.ts -> POST /chat  (Pages Functions routes by filename + HTTP method,
// so there's no need to manually check event.httpMethod).
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const apiKey = env.OPENAI_API_KEY;
  if (!apiKey) {
    return json({ error: 'OPENAI_API_KEY is not configured on Cloudflare' }, 500);
  }

  let userMessage: string | undefined;
  try {
    const body = (await request.json()) as { message?: string };
    userMessage = body.message?.trim();
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }
  if (!userMessage) {
    return json({ error: 'Message is required' }, 400);
  }

  const openai = new OpenAI({ apiKey });

  try {
    const chunks = await getChunks(openai, request, env);
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
    return json({ reply });
  } catch (err) {
    console.error('Chat function error:', err);
    return json(
      { error: err instanceof Error ? err.message : 'LLM request failed' },
      500
    );
  }
};

// Optional: friendly response for GET/other methods hitting /chat.
export const onRequestGet: PagesFunction<Env> = async () =>
  json({ error: 'Method not allowed' }, 405);