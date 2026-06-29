export default function ServicesTestimonials() {
  const StarIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] text-[#f5a800]">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );

  return (
    <section className="bg-white px-[60px] py-[90px]">
      <div className="flex gap-[80px]">
        <div className="flex-none w-[360px]">
          <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#1a7a65] mb-[14px] text-left">Our Testimonials</p>
          <h2 className="text-[36px] font-extrabold text-[#0d1b2a] leading-[1.2] mb-[16px]">Don't Believe Us?<br/>People Talk About It</h2>
          <p className="text-[14px] text-[#6b7280] leading-[1.7] mb-[28px]">Iscover A Moving Experience Like No Other At Transp Orting Items.Get Rid Of Manual Tracking Um Dolor Seay Wrongave Orem Ipsum.</p>
          <a href="#" className="inline-flex items-center gap-[10px] bg-[#f5a800] text-[#0d1b2a] text-[15px] font-bold px-[28px] py-[14px] rounded-[8px] hover:bg-[#e09a00] transition-colors">
            Check Our Reviews &nbsp;→
          </a>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-[20px]">
          {[
            { name: "Robert Johnson", role: "Product Manager" },
            { name: "Sarah Williams", role: "CEO & Founder" },
            { name: "Michael Chen", role: "Financial Advisor" },
            { name: "Emily Davis", role: "Business Owner" }
          ].map((author, i) => (
            <div key={i} className="bg-[#eef5f4] rounded-[14px] p-[24px]">
              <div className="flex gap-[3px] mb-[12px]">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="text-[14px] text-[#6b7280] leading-[1.7] mb-[18px]">Finance cover a moving experience like no other at Outgrid merely transporting items get rid of manual tracking.</p>
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#e8f5f2] to-[#d0ebe4] flex items-center justify-center text-[16px] overflow-hidden text-[#1a7a65] font-medium min-w-[40px]">👤</div>
                <div>
                  <div className="text-[14px] font-bold text-[#0d1b2a]">{author.name}</div>
                  <div className="text-[12px] text-[#6b7280]">{author.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
