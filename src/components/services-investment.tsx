export default function ServicesInvestment() {
  return (
    <>
      <section className="bg-white px-[60px] py-[90px] flex items-start gap-[80px]">
        <div className="flex-shrink-0 w-[460px]">
          <div className="bg-[#eef5f4] rounded-[20px] p-[24px] relative overflow-hidden">
            {/* arch bg deco */}
            <div className="absolute bottom-0 right-0 opacity-[0.15]">
              <svg viewBox="0 0 160 160" width="160" height="160" fill="none" stroke="#1a7a65" strokeWidth="2">
                <path d="M160 160 A80 80 0 0 0 80 80"/>
                <path d="M160 160 A120 120 0 0 0 40 40"/>
                <path d="M160 160 A60 60 0 0 0 100 100"/>
              </svg>
            </div>
            <div className="bg-white rounded-[28px] border-[6px] border-[#1a1a1a] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full relative z-[1]">
              <div className="bg-[#f0f8f6] pt-[16px] px-[20px] pb-[12px]">
                <div className="text-[10px] text-[#6b7280] mb-[2px]">Spent this day</div>
                <div className="flex justify-between items-center">
                  <div className="text-[24px] font-extrabold text-[#0d1b2a]">$259.75</div>
                  <div className="border border-[#e5e7eb] rounded-[6px] text-[11px] py-[3px] px-[10px] text-[#6b7280] flex items-center gap-[4px]">Week <span>▼</span></div>
                </div>
              </div>
              <div className="relative pt-[10px] px-[20px] pb-[4px] h-[100px] flex items-end">
                <div className="bg-[#f5a800] text-white text-[9px] font-bold py-[2px] px-[6px] rounded-[4px] absolute top-[10px] left-[38%]">Sun%</div>
                <svg viewBox="0 0 300 60" className="w-full h-[70px]">
                  <polyline points="0,50 30,48 60,45 90,20 120,40 150,15 180,35 210,42 240,40 270,44 300,46" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="90" y1="0" x2="90" y2="60" stroke="#f5a800" strokeWidth="1.5" strokeDasharray="3,3"/>
                  <circle cx="90" cy="20" r="5" fill="#f5a800" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div className="flex justify-between px-[20px] pb-[8px]">
                <span className="text-[9px] text-[#6b7280]">Sun</span>
                <span className="text-[9px] text-[#6b7280]">Mon</span>
                <span className="text-[9px] text-[#f5a800] font-bold">Tue</span>
                <span className="text-[9px] text-[#6b7280]">Wed</span>
                <span className="text-[9px] text-[#6b7280]">Thu</span>
                <span className="text-[9px] text-[#6b7280]">Fri</span>
                <span className="text-[9px] text-[#6b7280]">Sat</span>
              </div>
              <div className="text-[12px] font-bold text-[#0d1b2a] pt-[10px] px-[20px] pb-[8px] flex justify-between">
                <span>Available cards</span>
                <span className="text-[#1a7a65] font-medium">View all</span>
              </div>
              <div className="bg-[#0e6655] mx-[16px] mb-[10px] rounded-[10px] py-[14px] px-[16px] flex items-center justify-between">
                <div>
                  <span className="text-[16px] font-extrabold text-white">98,500</span>
                  <span className="text-[10px] font-medium ml-[4px] text-white/65">USD</span>
                </div>
                <span className="text-[10px] text-white/65">...4141</span>
              </div>
              <div className="bg-[#f8fafb] mx-[16px] mb-[10px] rounded-[10px] py-[14px] px-[16px] flex items-center justify-between">
                <div>
                  <span className="text-[16px] font-extrabold text-[#0d1b2a]">76,280</span>
                  <span className="text-[10px] font-medium ml-[4px] text-[#6b7280]">EUR</span>
                </div>
                <span className="flex items-center gap-[6px]">
                  <span className="text-[10px] text-[#6b7280]">...8345</span>
                  <span className="text-[10px] font-bold text-[#1a66ff] tracking-[0.5px]">VISA</span>
                </span>
              </div>
              <div className="h-[14px]"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 pt-[20px]">
          <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#1a7a65] mb-[14px] text-left">Investment Solutions</p>
          <h2 className="text-[38px] font-extrabold text-[#0d1b2a] leading-[1.15] mb-[18px]">Your One Stop To All<br/>Finance Consulting Needs</h2>
          <p className="text-[15px] text-[#6b7280] leading-[1.7] mb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-[#fff8ec] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] text-[#f5a800]"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <span className="text-[15px] font-semibold text-[#0d1b2a]">Trusted by thousands</span>
            </div>
            <div className="flex items-center gap-[14px]">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-[#fff8ec] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] text-[#f5a800]"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <span className="text-[15px] font-semibold text-[#0d1b2a]">Weekly generate reports</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right side second image */}
        {/* <div className="flex justify-end px-[60px] pb-[80px] -mt-[40px]">
          <div className="bg-gradient-to-br from-[#e8f5f2] to-[#d0ebe4] rounded-[20px] w-[380px] h-[360px] flex items-center justify-center relative overflow-hidden text-[#1a7a65] text-[13px] font-medium text-center p-[20px] ml-auto mt-[40px]">
            <div className="text-center relative z-10">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[48px] h-[48px] opacity-30 mx-auto">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <div className="mt-[8px] text-[12px] text-[#9ca3af]">Image Placeholder</div>
            </div>
            arch decoration inside
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-25">
              <svg viewBox="0 0 280 140" width="280" height="140" fill="none" stroke="#0e6655" strokeWidth="4">
                <path d="M10 140 A130 130 0 0 1 270 140"/>
                <path d="M40 140 A100 100 0 0 1 240 140"/>
                <path d="M70 140 A70 70 0 0 1 210 140"/>
              </svg>
            </div>
          </div>
        </div> */}
    </>
  );
}
