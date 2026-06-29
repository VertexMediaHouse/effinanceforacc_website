export default function ServicesTopServices() {
  return (
    <section className="bg-[#0e6655] px-[60px] pb-[80px] relative overflow-hidden">
      <div 
        className="absolute top-[-80px] right-[260px] w-[300px] h-[300px] rounded-full bg-[#f5a800] z-0"
        style={{ clipPath: 'ellipse(150px 300px at 150px 0)' }}
      ></div>
      <div className="flex items-start gap-[60px] relative z-10 pt-[90px]">
        <div className="flex-none w-[340px]">
          <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#f5a800] mb-[14px] text-left">Top Services</p>
          <h2 className="text-[38px] font-extrabold text-white leading-[1.2] mb-[18px]">Spotlight Features<br/>For All Solution</h2>
          <p className="text-[14px] text-white/70 leading-[1.7] mb-[34px]">Scover A Moving Experience Like No Other Atter Area OutgridWe Go Eyond Merely Transporting Item Manual Tracking Spreadsheets.</p>
          <button className="inline-flex items-center gap-[10px] border-[1.5px] border-white/50 text-white text-[14px] font-semibold px-[24px] py-[12px] rounded-[8px] bg-transparent hover:bg-white/10 transition-colors">
            Let's Make A Talk &nbsp;→
          </button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-[20px]">
          <div className="bg-white/95 rounded-[14px] p-[28px_24px]">
            <div className="flex items-center gap-[14px] mb-[14px]">
              <div className="w-[44px] h-[44px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[30px] h-[30px] text-[#1a7a65]">
                  <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0d1b2a]">Insurance Tax</h3>
            </div>
            <p className="text-[14px] text-[#6b7280] leading-[1.65]">Phasellus nec sem inee justo pellente aeysque facilisiquam ola consequat massa quis enam pretium urpis etter arcu.</p>
          </div>
          <div className="bg-white/95 rounded-[14px] p-[28px_24px]">
            <div className="flex items-center gap-[14px] mb-[14px]">
              <div className="w-[44px] h-[44px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[30px] h-[30px] text-[#1a7a65]">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0d1b2a]">Tax File Return</h3>
            </div>
            <p className="text-[14px] text-[#6b7280] leading-[1.65]">Phasellus nec sem inee justo pellente aeysque facilisiquam ola consequat massa quis enam pretium urpis etter arcu.</p>
          </div>
          <div className="bg-white/95 rounded-[14px] p-[28px_24px]">
            <div className="flex items-center gap-[14px] mb-[14px]">
              <div className="w-[44px] h-[44px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[30px] h-[30px] text-[#1a7a65]">
                  <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0d1b2a]">Low Interest Rate</h3>
            </div>
            <p className="text-[14px] text-[#6b7280] leading-[1.65]">Phasellus nec sem inee justo pellente aeysque facilisiquam ola consequat massa quis enam pretium urpis etter arcu.</p>
          </div>
          <div className="bg-white/95 rounded-[14px] p-[28px_24px]">
            <div className="flex items-center gap-[14px] mb-[14px]">
              <div className="w-[44px] h-[44px] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[30px] h-[30px] text-[#1a7a65]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0d1b2a]">100% Secure</h3>
            </div>
            <p className="text-[14px] text-[#6b7280] leading-[1.65]">Phasellus nec sem inee justo pellente aeysque facilisiquam ola consequat massa quis enam pretium urpis etter arcu.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
