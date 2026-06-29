export default function ServicesClients() {
  return (
    <section className="px-[60px] py-[50px] border-t border-[#e5e7eb]">
      <p className="text-center text-[15px] text-[#6b7280] mb-[32px]">
        We've worked on over <strong className="text-[#0d1b2a]">200 projects</strong> with <strong className="text-[#0d1b2a]">150+</strong> clients
      </p>
      <div className="flex justify-between items-center">
        <div className="text-[18px] font-black italic opacity-50 grayscale flex items-center gap-[5px]">
          ⬢HANKOOK
        </div>
        <div className="text-[17px] font-extrabold opacity-50 grayscale flex items-center gap-[5px]">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="1.5"/>
          </svg>
          motorola
        </div>
        <div className="text-[17px] font-bold opacity-50 grayscale">
          sodex<span className="text-[13px]">✱</span>o
        </div>
        <div className="text-[16px] font-extrabold tracking-[1px] opacity-50 grayscale flex items-center gap-[5px]">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          VERTIV
        </div>
        <div className="text-[16px] font-extrabold tracking-[1px] opacity-50 grayscale">
          AUSTRIAN ➤
        </div>
        <div className="text-[16px] font-extrabold tracking-[2px] opacity-50 grayscale">
          OMRON
        </div>
      </div>
    </section>
  );
}
