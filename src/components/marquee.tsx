export default function Marquee() {
  const logos = [
    "Syncrely",
    "DevWise",
    "Proline",
    "Knight Frank",
    "Vertex",
    "FinancePro",
  ];

  return (
    <section className="border-t border-black/5 py-10 overflow-hidden max-w-[1400px] mx-20 px-6 lg:px-12">
      <div className="flex items-center">
        {/* LEFT COLUMN - 50% */}
        <div className="w-1/2 flex items-center gap-4">
          <div className="w-12 h-12 bg-btn-dark rounded-full flex justify-center items-center text-white shadow-[0_0_0_4px_rgba(0,0,0,0.05)]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>

          <p className="text-sm text-secondary-text max-w-[220px] leading-[1.4]">
            Our application downloads reach to 10 thousand.
          </p>
        </div>

        {/* RIGHT COLUMN - 50% */}
        <div className="w-1/2 overflow-hidden relative">
          <div
            className="flex items-center gap-16 w-max"
            style={{
              animation: "marquee3d 15s linear infinite",
              transformStyle: "preserve-3d",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="text-xl font-bold whitespace-nowrap opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 hover:-rotate-6 cursor-pointer"
                style={{
                  transform: "perspective(1000px) rotateY(-18deg)",
                }}
              >
                {logo}
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes marquee3d {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}