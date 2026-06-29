import Navbar from "./navbar";

export default function AboutHero() {
  return (
    <>
      <Navbar />

      <section className="bg-[#0e6655] min-h-[500px] relative overflow-hidden flex items-center px-[60px]">
        {/* Dashed circles decorations */}
        <div className="absolute top-[-60px] right-[200px] w-[520px] h-[520px] rounded-full border-[1.5px] border-dashed border-white/20 pointer-events-none"></div>
        <div className="absolute top-[20px] right-[260px] w-[380px] h-[380px] rounded-full border-[1.5px] border-dashed border-white/10 pointer-events-none"></div>

        {/* Yellow arc */}
        <div className="absolute bottom-[-10px] right-[240px] w-[280px] h-[280px] rounded-full bg-[#f5a800] z-10" style={{ clipPath: 'ellipse(140px 280px at 140px 280px)' }}></div>

        <div className="relative z-20 pt-[60px] pb-[60px] max-w-[680px]">
          <p className="text-white/65 text-[13px] font-semibold tracking-[1.5px] uppercase mb-[20px]">About Our Company</p>
          <h1 className="text-[64px] font-normal leading-[1.08] text-white mb-0">Discover <strong className="font-extrabold">Who We Are<br />& What We Do</strong></h1>
          
          <p className="text-white/75 text-[16px] leading-[1.65] mt-[24px] mb-[30px] max-w-[540px]">We are a team of dedicated financial professionals committed to empowering your business with innovative strategies and expert guidance.</p>
          <a href="#" className="inline-flex items-center gap-[10px] bg-[#f5a800] text-[#0d1b2a] text-[15px] font-bold px-[28px] py-[14px] rounded-[8px] hover:bg-[#e09a00] transition-colors">
            Meet The Team &nbsp;→
          </a>
        </div>
      </section>
    </>
  );
}
