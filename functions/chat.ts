import { OpenAI } from 'openai';
import { KNOWLEDGE_BASE } from './knowledgebase';

interface Env {
  OPENAI_API_KEY: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `You are the official website assistant for Effinance Foracc LLP, an accounting outsourcing firm.
Answer ONLY using the context below. If the answer isn't in the context, say you're not certain and offer to connect the visitor with the team via email (arpit.shah@effinanceforacc.com) or phone (+91 97259 46540).
NEVER state specific pricing or fees — offer a consultation instead.
If the user asks for a quote, consultation, or callback, end your reply with the exact marker [[LEAD_FORM]].

Context:
${KNOWLEDGE_BASE}`;

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// POST /chat  — Pages Functions route by filename, so this file must live at
// functions/chat.ts. The API key is read from env (a Cloudflare secret) and
// never reaches the browser.
export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.OPENAI_API_KEY) {
    return json({ error: 'OPENAI_API_KEY is not configured on Cloudflare' }, 500);
  }

  // Accept either the full turn history { messages: [...] } or a single
  // { message: "..." }, so the frontend can send conversation context.
  let history: ChatMessage[] = [];
  try {
    const body = (await request.json()) as {
      messages?: ChatMessage[];
      message?: string;
    };
    if (Array.isArray(body.messages)) {
      history = body.messages
        .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
        .map((m) => ({ role: m.role, content: m.content.trim() }))
        .filter((m) => m.content.length > 0);
    } else if (typeof body.message === 'string' && body.message.trim()) {
      history = [{ role: 'user', content: body.message.trim() }];
    }
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  if (history.length === 0) {
    return json({ error: 'Message is required' }, 400);
  }

  const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...history],
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

// Friendly response for GET/other methods hitting /chat.
export const onRequestGet: PagesFunction<Env> = async () =>
  json({ error: 'Method not allowed' }, 405);