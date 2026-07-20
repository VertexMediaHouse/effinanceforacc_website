import React, { useState, useRef, useEffect, type CSSProperties, type JSX } from 'react';
import { MessageSquare, X, RotateCcw } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface Position {
    x: number;
    y: number;
}

// Point this at your local server for now.
// When you deploy to Netlify, change this to '/.netlify/functions/chat'.
const CHAT_ENDPOINT = import.meta.env.DEV
    ? 'http://localhost:4000/chat'
    : '/chat';

function renderMessageContent(content: string): JSX.Element {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        if (/\|.*\|/.test(line) && i + 1 < lines.length && /^\s*\|?\s*[-:]+\s*\|/.test(lines[i + 1])) {
            const tableLines = [line, lines[i + 1]];
            i += 2;
            while (i < lines.length && /\|/.test(lines[i])) {
                tableLines.push(lines[i]);
                i++;
            }
            const headerCells = tableLines[0].split('|').filter(Boolean).map((c) => c.trim());
            const rows = tableLines.slice(2).map((row) => row.split('|').filter(Boolean).map((c) => c.trim()));
            elements.push(
                <table key={`t-${i}`} style={tableStyle}>
                    <thead>
                        <tr>{headerCells.map((cell, idx) => <th key={idx} style={thStyle}>{cell}</th>)}</tr>
                    </thead>
                    <tbody>
                        {rows.map((row, rid) => (
                            <tr key={rid}>{row.map((cell, cid) => <td key={cid} style={tdStyle}>{cell}</td>)}</tr>
                        ))}
                    </tbody>
                </table>
            );
        } else {
            const parts = line.split(/(\*\*[^*]+\*\*)/g);
            elements.push(
                <p key={`p-${i}`} style={pStyle}>
                    {parts.map((part, idx) =>
                        /^\*\*.*\*\*$/.test(part) ? <strong key={idx}>{part.slice(2, -2)}</strong> : part
                    )}
                </p>
            );
            i++;
        }
    }
    return <>{elements}</>;
}

const bubbleStyle: CSSProperties = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    background: "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
    boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    transition: 'transform 0.2s',
    zIndex: 9999,
    border: 'none',
};

const windowStyleBase: CSSProperties = {
    position: 'fixed',
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.6)',
    boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9999,
};

const headerStyle: CSSProperties = {
    padding: '14px 16px',
    background: 'linear-gradient(135deg, #1a1a4d, #2d1b4e)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'move',
    flexShrink: 0,
};

const messageContainerStyle: CSSProperties = {
    flex: 1,
    padding: '12px 16px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
};

const inputContainerStyle: CSSProperties = {
    padding: '10px 12px',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    gap: '8px',
    alignItems: 'flex-end',
    flexShrink: 0,
};

const textareaStyle: CSSProperties = {
    flex: 1,
    resize: 'none',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '8px 10px',
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '1.4',
    maxHeight: '100px',
    overflowY: 'auto',
};

const userBubble: CSSProperties = {
    alignSelf: 'flex-end',
    background: 'linear-gradient(135deg, #c9622a, #e8955a)',
    color: '#fff',
    borderRadius: '16px',
    padding: '8px 12px',
    margin: '4px 0',
    maxWidth: '80%',
    borderBottomRightRadius: '4px',
};

const assistantBubble: CSSProperties = {
    alignSelf: 'flex-start',
    background: '#fff',
    color: '#1a1a4d',
    borderRadius: '16px',
    padding: '8px 12px',
    margin: '4px 0',
    maxWidth: '85%',
    borderBottomLeftRadius: '4px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
};

const tableStyle: CSSProperties = { width: '100%', borderCollapse: 'collapse', margin: '8px 0', fontSize: '13px' };
const thStyle: CSSProperties = { borderBottom: '2px solid #1a1a4d', padding: '4px 8px', textAlign: 'left', background: 'rgba(26,26,77,0.05)' };
const tdStyle: CSSProperties = { borderBottom: '1px solid #ddd', padding: '4px 8px' };
const pStyle: CSSProperties = { margin: '4px 0' };

const iconButtonStyle: CSSProperties = {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    marginLeft: '8px',
    display: 'flex',
    alignItems: 'center',
};

const sendButtonStyle: CSSProperties = {
    padding: '8px 14px',
    background: 'linear-gradient(135deg, #c9622a, #e8955a)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    flexShrink: 0,
};

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [position, setPosition] = useState<Position>({ x: 24, y: 24 }); // now means: distance from right/bottom  
    const size = { width: 380, height: 560 };

    const dragStart = useRef<{ x: number; y: number } | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const onMouseDownHeader = (e: React.MouseEvent) => {
        dragStart.current = { x: e.clientX + position.x, y: e.clientY + position.y };
        window.addEventListener('mousemove', onMouseMoveHeader);
        window.addEventListener('mouseup', onMouseUpHeader);
    };
    const onMouseMoveHeader = (e: MouseEvent) => {
        if (!dragStart.current) return;
        setPosition({
            x: dragStart.current.x - e.clientX,
            y: dragStart.current.y - e.clientY,
        });
    };

    const onMouseUpHeader = () => {
        dragStart.current = null;
        window.removeEventListener('mousemove', onMouseMoveHeader);
        window.removeEventListener('mouseup', onMouseUpHeader);
    };

    const sendMessage = async () => {
        if (!inputValue.trim() || isTyping) return;
        const userMsg: Message = { role: 'user', content: inputValue.trim() };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);
        try {
            const response = await fetch(CHAT_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg.content }),
            });
            if (!response.ok) {
                const txt = await response.text();
                throw new Error(`Server ${response.status}: ${txt}`);
            }
            const data = await response.json();
            const cleanReply = (data.reply || '').replace('[[LEAD_FORM]]', '').trim();
            setMessages((prev) => [...prev, { role: 'assistant', content: cleanReply }]);
        } catch (err) {
            console.error('Chat error:', err);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Sorry, something went wrong connecting to the assistant. Please try again shortly.' },
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {!isOpen && (
                <button
                    style={bubbleStyle}
                    onClick={() => setIsOpen(true)}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    aria-label="Open chat"
                >
                    <MessageSquare size={28} strokeWidth={2} />
                </button>
            )}

            {isOpen && (
                <div
                    style={{
                        ...windowStyleBase,
                        right: position.x,
                        bottom: position.y,
                        width: size.width,
                        height: Math.min(size.height, window.innerHeight - 48), // 48px margin top/bottom
                        maxHeight: '85vh',
                    }}
                >
                    <div style={headerStyle} onMouseDown={onMouseDownHeader}>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '15px' }}>Effinance Foracc</div>
                            <div style={{ fontSize: '11px', opacity: 0.8 }}>Ask us about tax, bookkeeping & accounting</div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <button onClick={() => setMessages([])} style={iconButtonStyle} title="Reset" aria-label="Reset chat">
                                <RotateCcw size={16} />
                            </button>
                            <button onClick={() => setIsOpen(false)} style={iconButtonStyle} title="Close" aria-label="Close chat">
                                <X size={18} />
                            </button>
                        </div>
                    </div>

                    <div style={messageContainerStyle}>
                        {messages.length === 0 && (
                            <div style={{ color: '#666', fontSize: '13px', margin: 'auto', textAlign: 'center', padding: '0 20px' }}>
                                Hi! Ask me anything about Effinance Foracc's tax, bookkeeping, or accounting services.
                            </div>
                        )}
                        {messages.map((msg, idx) => (
                            <div key={idx} style={msg.role === 'user' ? userBubble : assistantBubble}>
                                {msg.role === 'assistant' ? renderMessageContent(msg.content) : msg.content}
                            </div>
                        ))}
                        {isTyping && (
                            <div style={assistantBubble}>
                                <span style={{ opacity: 0.6 }}>Typing…</span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={inputContainerStyle}>
                        <textarea
                            rows={1}
                            style={textareaStyle}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    sendMessage();
                                }
                            }}
                            placeholder="Type your message..."
                            disabled={isTyping}
                        />
                        <button onClick={sendMessage} disabled={isTyping || !inputValue.trim()} style={sendButtonStyle}>
                            {isTyping ? '…' : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;