
const KNOWLEDGE_BASE = `# EFFINANCE FORACC LLP — KNOWLEDGE BASE
Effinance Foracc LLP is a global accounting outsourcing company (est. 2022, Ahmedabad, India) serving SMBs and CPA/bookkeeping firms in North America.
Services: Accounting Management, Bookkeeping (General, CPA Write-Up, Reports), Advisory, Tax Prep & Planning (Forms 1040/1065/1120-S/1120, Cost Segregation, Schedule C→S-Corp), Part-time Virtual CFO, Budgeting & Forecasting, Bank/Card Reconciliation, AP/AR, Payroll, MIS Reporting.
Founder: Arpit Shah, Licensed CPA (State Board of Montana, USA), 7 yrs experience.
Software: Corvee, Forecastr, TaxDome, Xero, QuickBooks, Bill.com, Sage, Sage Intacct, Odoo.
Data security: 256-bit SSL, NDAs, limited access, secure exchange, virus protection, end-to-end tracking (no extra cost).
Contact: arpit.shah@effinanceforacc.com | +91 97259 46540 | www.effinanceforacc.com | B-812, Titanium City Center, Satellite, Ahmedabad 380015.
Pricing: tailored packages — clients pay only for services they need; recommend a quick consultation for a quote.`;

const SYSTEM_PROMPT = `You are the assistant for Effinance Foracc LLP. Answer ONLY from the knowledge base; speak as "we"/"Effinance".
- Warm, concise, professional. 2–5 sentences.
- Outside the knowledge base (specific pricing numbers, personalized tax/legal advice, unrelated topics): say you can't answer directly and offer a quick consultation.
- For pricing: packages are tailored — invite them to book a consultation.
- On buying intent: point them to the "Share your details" button in the chat; don't invent a form.
- Never invent services, numbers, or facts.

=== KNOWLEDGE BASE ===
${KNOWLEDGE_BASE}
=== END ===`;

function cors(env: Env, req: Request) {
  const allowed = (env.ALLOWED_ORIGIN || "*").trim();
  const origin = req.headers.get("Origin") || "";
  return {
    "Access-Control-Allow-Origin": allowed === "*" ? "*" : allowed === origin ? origin : allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}
const json = (d: unknown, s: number, h: Record<string, string>) =>
  new Response(JSON.stringify(d), { status: s, headers: { "Content-Type": "application/json", ...h } });

export interface Env {
  OPENAI_API_KEY: string;
  OPENAI_MODEL?: string;
  ALLOWED_ORIGIN?: string;
  LEAD_WEBHOOK_URL?: string;
}

type Msg = { role: "user" | "assistant"; content: string };

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const headers = cors(env, request);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
    if (request.method !== "POST") return json({ error: "Method not allowed" }, 405, headers);
    const { pathname } = new URL(request.url);
    if (pathname === "/api/chat") return chat(request, env, headers);
    if (pathname === "/api/lead") return lead(request, env, headers);
    return json({ error: "Not found" }, 404, headers);
  },
};

async function chat(request: Request, env: Env, headers: Record<string, string>) {
  if (!env.OPENAI_API_KEY) return json({ error: "Server not configured." }, 500, headers);
  let body: { messages?: Msg[] };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid body." }, 400, headers);
  }
  const msgs = (body.messages || [])
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 4000) }));
  if (!msgs.length) return json({ error: "No message." }, 400, headers);

  const upstream = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${env.OPENAI_API_KEY}` },
    body: JSON.stringify({
      model: env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0.3,
      stream: true,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...msgs],
    }),
  });
  if (!upstream.ok || !upstream.body) return json({ error: "Assistant unavailable." }, 502, headers);

  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body!.getReader();
      const dec = new TextDecoder();
      const enc = new TextEncoder();
      let buf = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          const lines = buf.split("\n");
          buf = lines.pop() || "";
          for (const line of lines) {
            const t = line.trim();
            if (!t.startsWith("data:")) continue;
            const data = t.slice(5).trim();
            if (data === "[DONE]") return controller.close();
            try {
              const text = JSON.parse(data).choices?.[0]?.delta?.content;
              if (text) controller.enqueue(enc.encode(text));
            } catch {}
          }
        }
      } finally {
        controller.close();
      }
    },
  });
  return new Response(stream, { headers: { ...headers, "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
}

async function lead(request: Request, env: Env, headers: Record<string, string>) {
  let b: { name?: string; email?: string; note?: string };
  try {
    b = await request.json();
  } catch {
    return json({ error: "Invalid body." }, 400, headers);
  }
  const name = String(b.name || "").trim().slice(0, 120);
  const email = String(b.email || "").trim().slice(0, 200);
  const note = String(b.note || "").trim().slice(0, 1000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return json({ error: "Name and valid email required." }, 400, headers);

  const rec = { name, email, note, ts: new Date().toISOString() };
  if (env.LEAD_WEBHOOK_URL)
    await fetch(env.LEAD_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(rec) }).catch(() => {});
  return json({ ok: true }, 200, headers);
}