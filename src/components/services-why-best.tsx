export default function ServicesWhyBest() {
  return (
    <section className="bg-white px-[60px] py-[80px] flex items-center gap-[80px]">
      <div className="flex-none w-[480px] relative">
        <div 
          className="absolute top-[20px] left-[20px] right-[20px] bottom-[20px] rounded-[12px]" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0,150,120,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,120,0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        ></div>
        
        <div className="w-full h-[420px] bg-gradient-to-br from-[#e8f5f2] to-[#d0ebe4] rounded-[16px] flex items-center justify-center relative overflow-hidden text-[#1a7a65] text-[13px] font-medium text-center p-[20px]">
          <div className="text-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[52px] h-[52px] opacity-35 mx-auto">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <div className="mt-[8px] text-[12px] text-[#9ca3af]">Image Placeholder</div>
          </div>
        </div>

        {/* Finance Rate badge */}
        <div className="absolute bottom-[30px] left-[-20px] bg-white rounded-[10px] px-[16px] py-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-[10px]">
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="#f5a800" strokeWidth="2">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
            <polyline points="16 7 22 7 22 13"/>
          </svg>
          <span className="text-[11px] font-semibold text-[#0d1b2a]">Finance Rate</span>
          <span className="text-[11px] font-bold bg-[#22c55e] text-white px-[7px] py-[2px] rounded-[4px]">78%</span>
        </div>

        {/* Arrow decoration */}
        <div className="absolute top-[40px] right-[30px] text-[#0d1b2a] text-[28px] -rotate-[20deg] font-bold">
          <svg viewBox="0 0 60 30" width="60" height="30" fill="none" stroke="#0d1b2a" strokeWidth="2.5" strokeLinecap="round">
            <path d="M55 5 C30 5 10 15 5 25"/>
            <path d="M5 25 L12 22 M5 25 L8 32"/>
          </svg>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#1a7a65] mb-[14px] text-left">Why We Are The Best</p>
        <h2 className="text-[38px] font-extrabold leading-[1.15] mb-[18px] text-[#0d1b2a]">Efficient Banking Solutions<br/>In One Stations</h2>
        <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-[28px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        
        <ul className="list-none mb-[34px] flex flex-col gap-[12px]">
          <li className="flex items-center gap-[12px] text-[15px] font-medium text-[#0d1b2a]">
            <span className="w-[24px] h-[24px] rounded-full bg-[#1a7a65] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" className="w-[12px] h-[12px]"><polyline points="2 6 5 9 10 3"/></svg>
            </span>
            Powerful database store
          </li>
          <li className="flex items-center gap-[12px] text-[15px] font-medium text-[#0d1b2a]">
            <span className="w-[24px] h-[24px] rounded-full bg-[#1a7a65] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" className="w-[12px] h-[12px]"><polyline points="2 6 5 9 10 3"/></svg>
            </span>
            Easy to access all projects
          </li>
          <li className="flex items-center gap-[12px] text-[15px] font-medium text-[#0d1b2a]">
            <span className="w-[24px] h-[24px] rounded-full bg-[#1a7a65] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5" className="w-[12px] h-[12px]"><polyline points="2 6 5 9 10 3"/></svg>
            </span>
            Effortless courier allocation
          </li>
        </ul>
        <a href="#" className="inline-flex items-center gap-[10px] bg-[#f5a800] text-[#0d1b2a] text-[15px] font-bold px-[28px] py-[14px] rounded-[8px] hover:bg-[#e09a00] transition-colors">
          Take Our Service &nbsp;→
        </a>
      </div>
    </section>
  );
}
