import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <>
      <nav className="bg-[#0e6655] sticky top-0 z-50 flex items-center justify-between px-[60px] h-[72px]">
        <div className="flex items-center gap-[10px]">
          <div className="w-[40px] h-[40px] rounded-full bg-white/15 flex items-center justify-center border-2 border-white/40">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-[22px] h-[22px]">
              <path d="M3 17l4-8 4 4 3-6 4 10" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="19" cy="5" r="2" fill="white" stroke="none" />
            </svg>
          </div>
          <span className="text-white text-[20px] font-bold tracking-[-0.3px]">Finwave</span>
        </div>
        <div className="flex items-center gap-[36px]">
          <Link to="/" className="text-white/90 text-[15px] font-medium flex items-center gap-[4px] hover:text-white">
            Home <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-[12px] h-[12px] opacity-70"><path d="M2 4l4 4 4-4" /></svg>
          </Link>
          <Link to="/services" className="text-white/90 text-[15px] font-medium flex items-center gap-[4px] hover:text-white">
            Service <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-[12px] h-[12px] opacity-70"><path d="M2 4l4 4 4-4" /></svg>
          </Link>
          <a href="#" className="text-white/90 text-[15px] font-medium flex items-center gap-[4px] hover:text-white">
            Pages <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-[12px] h-[12px] opacity-70"><path d="M2 4l4 4 4-4" /></svg>
          </a>
          <a href="#" className="text-white/90 text-[15px] font-medium flex items-center gap-[4px] hover:text-white">
            Elements <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-[12px] h-[12px] opacity-70"><path d="M2 4l4 4 4-4" /></svg>
          </a>
          <a href="#" className="text-white/90 text-[15px] font-medium flex items-center gap-[4px] hover:text-white">
            Blog <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-[12px] h-[12px] opacity-70"><path d="M2 4l4 4 4-4" /></svg>
          </a>
          <a href="#" className="text-white/90 text-[15px] font-medium flex items-center gap-[4px] hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-[24px]">
          <a href="#" className="text-white/90 text-[15px] font-medium flex items-center gap-[6px]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px]"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>
            Log In
          </a>
          <a href="#" className="bg-white/15 text-white border border-white/30 px-[22px] py-[10px] rounded-[6px] text-[15px] font-semibold flex items-center gap-[8px] hover:bg-white/25 transition-colors">
            Get Started &nbsp;→
          </a>
        </div>
      </nav>

      <section className="bg-[#0e6655] min-h-[620px] relative overflow-hidden flex items-end px-[60px]">
        {/* Dashed circles decorations */}
        <div className="absolute top-[-60px] right-[200px] w-[520px] h-[520px] rounded-full border-[1.5px] border-dashed border-white/20 pointer-events-none"></div>
        <div className="absolute top-[20px] right-[260px] w-[380px] h-[380px] rounded-full border-[1.5px] border-dashed border-white/10 pointer-events-none"></div>

        {/* Yellow arc */}
        <div className="absolute bottom-[-10px] right-[240px] w-[280px] h-[280px] rounded-full bg-[#f5a800] z-10" style={{ clipPath: 'ellipse(140px 280px at 140px 280px)' }}></div>

        <div className="relative z-20 pt-[100px] pb-[60px] max-w-[580px]">
          <p className="text-white/65 text-[13px] font-semibold tracking-[1.5px] uppercase mb-[20px]">Online Banking Process</p>
          <h1 className="text-[64px] font-normal leading-[1.08] text-white mb-0">Core <strong className="font-extrabold">Transactions<br />With Digital</strong></h1>
          
          <div className="flex items-center gap-[32px] my-[28px]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[44px] h-[44px] rounded-full bg-white/12 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] text-white">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className="text-[22px] font-extrabold text-[#f5a800] leading-none">15K</div>
                <div className="text-[12px] text-white/70 font-medium mt-[2px]">Daily Active Users</div>
              </div>
            </div>
            
            <div className="flex items-center gap-[12px]">
              <div className="w-[44px] h-[44px] rounded-full bg-white/12 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] text-white">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div className="text-[22px] font-extrabold text-[#f5a800] leading-none">36%</div>
                <div className="text-[12px] text-white/70 font-medium mt-[2px]">Daily Transactions</div>
              </div>
            </div>
          </div>
          
          <p className="text-white/75 text-[15px] leading-[1.65] mb-[30px] max-w-[470px]">A good strategy is a strate awer gew gyaw that can successfully leaders their fondert business in a more developed direction.</p>
          <a href="#" className="inline-flex items-center gap-[10px] bg-[#f5a800] text-[#0d1b2a] text-[15px] font-bold px-[28px] py-[14px] rounded-[8px] hover:bg-[#e09a00] transition-colors">
            Open An Account &nbsp;→
          </a>
        </div>

        {/* Phone mockup */}
        <div className="absolute right-[60px] bottom-0 z-20 w-[420px] flex items-end">
          <div className="w-[280px] h-auto bg-white rounded-[36px] shadow-[0_30px_80px_rgba(0,0,0,0.35)] overflow-hidden border-[8px] border-[#1a1a1a] relative">
            <div className="w-[100px] h-[26px] bg-[#1a1a1a] rounded-b-[16px] mx-auto"></div>
            
            <div className="pt-[12px] px-[16px] pb-0 bg-[#f0f8f6]">
              <div className="flex justify-between items-start mb-[8px]">
                <div>
                  <div className="text-[10px] text-[#6b7280] mb-[2px]">Total Balance</div>
                  <div className="text-[22px] font-extrabold text-[#0d1b2a] mb-[12px]">$521,985.00</div>
                </div>
                <div className="text-[18px] text-[#9ca3af] pt-[4px]">···</div>
              </div>
              <div className="text-[10px] text-[#9ca3af] mb-[10px]">Credit</div>
              
              <div className="bg-white rounded-[12px] mt-[8px]">
                {/* Transactions */}
                {[
                  { name: 'YouTube', time: '16:30 PM', amount: '-$60.00', type: 'Credit', bg: '#ff0000', icon: <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><rect x="2" y="2" width="20" height="20" rx="4"/><polygon points="10,8 16,12 10,16" fill="white"/></svg> },
                  { name: 'GitHub', time: '11:00 AM', amount: '-$10.00', type: 'Credit', bg: '#1a1a1a', icon: <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
                  { name: 'Dribbble Pro', time: '10:30 AM', amount: '-$145.00', type: 'Cash', bg: '#ea4c89', icon: <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke="white" fill="none" strokeWidth="1.5"/></svg> },
                  { name: 'Food', time: '07:30 AM', amount: '-$50.00', type: 'Cash', bg: '#f59e0b', icon: <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="1.5"/></svg> },
                  { name: 'Shopping', time: '07:00 PM', amount: '-$145.00', type: 'Credit', bg: '#1a1a1a', icon: <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/></svg> }
                ].map((tx, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-[8px_12px] ${idx < 4 ? 'border-b border-[#f3f4f6]' : ''}`}>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[14px]" style={{ background: tx.bg }}>
                        {tx.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-[#0d1b2a]">{tx.name}</div>
                        <div className="text-[9px] text-[#6b7280]">{tx.time}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#0d1b2a]">{tx.amount}</div>
                      <div className="text-[9px] text-[#6b7280] text-right">{tx.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-around items-center py-[10px] bg-white border-t border-[#f3f4f6]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[#f5a800]"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[#6b7280]"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[#6b7280]"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px] text-[#6b7280]"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
