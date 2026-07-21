import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const API_BASE = import.meta.env.VITE_CHAT_API ?? ""; // e.g. https://effinance-chatbot.<sub>.workers.dev
const GREETING =
    "Hi! I'm the Effinance assistant. Ask me about bookkeeping, tax, virtual CFO, or advisory services — or share your details and our team will reach out.";

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
    const [input, setInput] = useState("");
    const [sending, setSending] = useState(false);
    const [showLead, setShowLead] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, open, showLead]);
    useEffect(() => {
        if (open && !showLead) inputRef.current?.focus();
    }, [open, showLead]);

    async function send(e?: React.FormEvent) {
        e?.preventDefault();
        const text = input.trim();
        if (!text || sending) return;
        const history = [...messages, { role: "user", content: text } as Msg];
        setMessages([...history, { role: "assistant", content: "" }]);
        setInput("");
        setSending(true);
        try {
            const res = await fetch(`${API_BASE}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text }),   // ← your server wants { message }
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            let reply: string = data.reply ?? "";          // ← your server returns { reply }
            const wantsLead = reply.includes("[[LEAD_FORM]]");
            reply = reply.replace("[[LEAD_FORM]]", "").trim();

            setMessages((p) => {
                const c = [...p];
                c[c.length - 1] = { role: "assistant", content: reply || "Sorry, could you rephrase that?" };
                return c;
            });
            if (wantsLead) setShowLead(true);
        } catch {
            setMessages((p) => {
                const c = [...p];
                c[c.length - 1] = {
                    role: "assistant",
                    content: "I'm having trouble connecting. Please try again, or email arpit.shah@effinanceforacc.com.",
                };
                return c;
            });
        } finally {
            setSending(false);
            inputRef.current?.focus();
        }
    }

    return (
        <div className="fixed bottom-5 right-5 z-[2147483000] font-sans text-[15px] text-[#16211f]">
            {open && (
                <div className="absolute bottom-[68px] right-0 flex h-[560px] max-h-[calc(100vh-108px)] w-[380px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(11,46,42,0.28)]">
                    {/* Header */}
                    <header className="flex items-center justify-between border-b-2 border-[#c9a24b] bg-[#0b2e2a] px-4 py-3.5 text-white">
                        <div className="flex items-center gap-3">
                            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#c9a24b] text-sm font-bold text-[#0b2e2a]">
                                EF
                            </span>
                            <div>
                                <p className="text-[15px] font-semibold leading-tight">Effinance Foracc</p>
                                <p className="text-xs text-white/70">Accounting &amp; tax outsourcing</p>
                            </div>
                        </div>
                        <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-lg px-2 text-2xl hover:bg-white/10">
                            ×
                        </button>
                    </header>

                    {/* Messages */}
                    <div ref={scrollRef} className="flex flex-1 flex-col gap-2.5 overflow-y-auto bg-[#f5f3ec] p-4">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`max-w-[82%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 ${m.role === "user"
                                        ? "rounded-br-[4px] bg-[#0b2e2a] text-white"
                                        : "rounded-bl-[4px] bg-[#eef1ee] text-[#16211f]"
                                        }`}
                                >
                                    {m.content || (sending ? <TypingDots /> : "")}
                                </div>
                            </div>
                        ))}
                        {showLead && <LeadForm onClose={() => setShowLead(false)} />}
                    </div>

                    {/* Composer */}
                    {!showLead && (
                        <div className="border-t border-[#e3e6e2] bg-white px-3 pb-3 pt-2">
                            <button
                                onClick={() => setShowLead(true)}
                                className="px-0.5 pb-2 pt-1 text-[13px] font-semibold text-[#a9862f] hover:underline"
                            >
                                Share your details
                            </button>
                            <form onSubmit={send} className="flex items-end gap-2">
                                <textarea
                                    ref={inputRef}
                                    rows={1}
                                    value={input}
                                    disabled={sending}
                                    placeholder="Ask about our services…"
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            send();
                                        }
                                    }}
                                    className="max-h-[120px] flex-1 resize-none rounded-xl border border-[#e3e6e2] px-3 py-2.5 focus:border-[#0b2e2a] focus:outline-none focus:ring-2 focus:ring-[#0b2e2a]/15"
                                />
                                <button
                                    type="submit"
                                    disabled={sending || !input.trim()}
                                    aria-label="Send"
                                    className="h-10 w-10 flex-none rounded-xl bg-[#0b2e2a] text-xl text-white hover:bg-[#123f39] disabled:opacity-40"
                                >
                                    ↑
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            )}

            <button
                onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Minimize chat" : "Open chat"}
                className={`inline-flex h-[52px] items-center justify-center rounded-full bg-[#0b2e2a] font-semibold text-white shadow-[0_8px_24px_rgba(11,46,42,0.28)] transition hover:-translate-y-px hover:bg-[#123f39] ${open ? "w-[52px] text-2xl" : "gap-2 px-6 text-[15px]"
                    }`}
            >
                {open ? "×" : "Chat with us"}
            </button>
        </div>
    );
}

function TypingDots() {
    return (
        <span className="inline-flex gap-1 py-0.5">
            {[0, 1, 2].map((i) => (
                <span
                    key={i}
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5e6e6a]"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}
        </span>
    );
}

function LeadForm({ onClose }: { onClose: () => void }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");
    const [state, setState] = useState<"idle" | "sending" | "done">("idle");
    const [error, setError] = useState("");

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (state === "sending") return;
        if (!name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter your name and a valid email.");
            return;
        }
        setState("sending");
        try {
            const res = await fetch(`${API_BASE}/api/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, note }),
            });
            if (!res.ok) throw new Error();
            setState("done");
        } catch {
            setState("idle");
            setError("Something went wrong. Please try again.");
        }
    }

    if (state === "done")
        return (
            <div className="flex flex-col items-center gap-1 rounded-2xl border border-[#e3e6e2] bg-white p-4 text-center">
                <p className="font-bold text-[#0b2e2a]">Thanks, {name.split(" ")[0]}!</p>
                <p className="text-sm text-[#5e6e6a]">Our team will reach out to {email} shortly.</p>
                <button onClick={onClose} className="mt-1 rounded-lg border border-[#e3e6e2] px-4 py-2 font-semibold text-[#0b2e2a]">
                    Back to chat
                </button>
            </div>
        );

    const field =
        "rounded-[10px] border border-[#e3e6e2] px-3 py-2.5 focus:border-[#0b2e2a] focus:outline-none focus:ring-2 focus:ring-[#0b2e2a]/15";

    return (
        <form onSubmit={submit} className="flex flex-col gap-2.5 rounded-2xl border border-[#e3e6e2] bg-white p-3.5">
            <div className="flex items-center justify-between">
                <p className="font-semibold text-[#0b2e2a]">Let's talk</p>
                <button type="button" onClick={onClose} aria-label="Cancel" className="text-xl text-[#5e6e6a]">
                    ×
                </button>
            </div>
            <input className={field} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            <input className={field} type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            <textarea className={`${field} resize-none`} rows={2} placeholder="What do you need help with? (optional)" value={note} onChange={(e) => setNote(e.target.value)} />
            {error && <p className="text-[13px] text-[#b3261e]">{error}</p>}
            <button
                type="submit"
                disabled={state === "sending"}
                className="rounded-[10px] bg-[#c9a24b] py-2.5 font-bold text-[#0b2e2a] hover:bg-[#a9862f] hover:text-white disabled:opacity-60"
            >
                {state === "sending" ? "Sending…" : "Request a callback"}
            </button>
        </form>
    );
}