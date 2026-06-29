import { Link } from "react-router-dom";

export default function IndustriesHero() {
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
          <Link to="/industries" className="text-white/90 text-[15px] font-medium flex items-center gap-[4px] hover:text-white">
            Industries <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-[12px] h-[12px] opacity-70"><path d="M2 4l4 4 4-4" /></svg>
          </Link>
          <a href="#" className="text-white/90 text-[15px] font-medium flex items-center gap-[4px] hover:text-white">
            Pages <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-[12px] h-[12px] opacity-70"><path d="M2 4l4 4 4-4" /></svg>
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

      <section className="bg-[#0e6655] min-h-[500px] relative overflow-hidden flex items-center px-[60px]">
        {/* Dashed circles decorations */}
        <div className="absolute top-[-60px] right-[200px] w-[520px] h-[520px] rounded-full border-[1.5px] border-dashed border-white/20 pointer-events-none"></div>
        <div className="absolute top-[20px] right-[260px] w-[380px] h-[380px] rounded-full border-[1.5px] border-dashed border-white/10 pointer-events-none"></div>

        {/* Yellow arc */}
        <div className="absolute bottom-[-10px] right-[240px] w-[280px] h-[280px] rounded-full bg-[#f5a800] z-10" style={{ clipPath: 'ellipse(140px 280px at 140px 280px)' }}></div>

        <div className="relative z-20 pt-[60px] pb-[60px] max-w-[680px]">
          <p className="text-white/65 text-[13px] font-semibold tracking-[1.5px] uppercase mb-[20px]">Sectors We Empower</p>
          <h1 className="text-[64px] font-normal leading-[1.08] text-white mb-0">Transforming <strong className="font-extrabold">Industries<br />Worldwide</strong></h1>
          
          <p className="text-white/75 text-[16px] leading-[1.65] mt-[24px] mb-[30px] max-w-[540px]">We provide tailored financial and operational solutions that drive growth, efficiency, and innovation across various diverse sectors.</p>
          <a href="#" className="inline-flex items-center gap-[10px] bg-[#f5a800] text-[#0d1b2a] text-[15px] font-bold px-[28px] py-[14px] rounded-[8px] hover:bg-[#e09a00] transition-colors">
            Explore Case Studies &nbsp;→
          </a>
        </div>
      </section>
    </>
  );
}
