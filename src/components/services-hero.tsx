import TextType from "./TextType";

export default function HomeHero() {
  return (
    <div className="relative min-h-[810px] lg:min-h-[640px] overflow-hidden bg-[#c97a3d]/5 flex items-center">

      {/* Base background */}
      <div className="absolute inset-0 bg-[#f7f1eb]" />

      {/* Soft Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 15%, rgba(201,122,61,.12), transparent 45%), linear-gradient(180deg,#f7f1eb 0%,#f3ece5 100%)",
        }}
      />

      {/* Patterns */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
                    linear-gradient(
                        45deg,
                        rgba(0,0,0,.12) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(0,0,0,.12) 50%,
                        rgba(0,0,0,.12) 75%,
                        transparent 75%,
                        transparent
                    )`,
          backgroundSize: "120px 120px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `
                    linear-gradient(
                        -45deg,
                        rgba(0,0,0,.12) 25%,
                        transparent 25%,
                        transparent 50%,
                        rgba(0,0,0,.12) 50%,
                        rgba(0,0,0,.12) 75%,
                        transparent 75%,
                        transparent
                    )`,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.18" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" fill="white" />
        </svg>
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 55%, rgba(0,0,0,.05) 100%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-15 mt-[35px] max-w-[1320px] mx-auto w-full px-6 lg:px-8 flex items-center">

        <section className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">

          {/* LEFT CONTENT — FIXED CENTERING */}
          <div className="flex-1 max-w-[540px] flex flex-col justify-center">

            <div className="text-[#8a4726] text-xs font-bold tracking-[0.15em] uppercase mb-4">
              OUR SERVICES
            </div>

            <h1 className="text-[40px] md:text-[48px] lg:text-[51px] leading-[1.15] font-extrabold text-[#1f1f1f] mb-4">
              We Provide <br></br>Best Serives<br/>
            <TextType
              text={["Bookkeeping", "Tax Preparation", "Payroll Management", "Financial Reporting", "Audit Support"]}
              typingSpeed={80}
              pauseDuration={800}
              showCursor
              cursorCharacter="|"
              className="text-[#e18231]"
              />
              </h1>


            <p className="text-[15px] leading-[1.6] text-[#1f1f1f]/80 mb-6 max-w-[480px]">
              From bookkeeping and reconciliations to month-end close and
              CPA-ready financial statements, our team handles the full range
              of accounting work so you don't have to.
            </p>

            <button
              className="max-w-fit text-white px-6 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
              }}
            >
              View Our Services
            </button>
          </div>

          {/* RIGHT CONTENT — FIXED IMAGE + DOODLES */}
          <div className="flex-[1.1] relative h-[600px] flex items-center justify-center">
            {/* IMAGE — FIXED BOTTOM GAP */}
            <div className="relative w-full h-full flex items-end justify-center">
              <img
                src="assets/homehero.png"
                alt=""
                className="w-[90%] max-h-[610px] object-contain object-bottom"
              />
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}