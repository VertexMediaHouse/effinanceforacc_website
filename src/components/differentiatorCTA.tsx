export default function DifferentiatorCTA(){
  return (
    <section 
      className="relative w-full text-white py-16 overflow-hidden rounded-2xl shadow-xl"
      style={{
        background: "linear-gradient(120deg, #303183 15%, #884c76 50%, #a35765 75%, #f38c24 100%)"
      }}
    >
      {/* Background subtle glowing shapes to complement the gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-3xl top-[-120px] left-[-100px]" />
        <div className="absolute w-80 h-80 bg-[#f38c24] rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8 text-left">
        {/* Left Side: Header Content */}
        <div className="max-w-2xl mx-2">
          {/* Small label - picked up light orange/white tone from the gradient */}
          <p className="uppercase tracking-widest text-xs font-bold text-white mb-3">
            We help you on every step of the journey
          </p>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white">
            Get Started Today &amp; Boost Revenue With Finwave
          </h1>
        </div>

        {/* Right Side: CTA Button */}
        <div className="flex-shrink-0 mx-2">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 bg-white hover:bg-orange-50 text-[#a35765] font-bold px-7 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            Get Started Today
            <span className="text-xl leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};