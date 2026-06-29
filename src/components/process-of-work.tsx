export default function ProcessOfWork() {
  const steps = [
    {
      number: "01",
      title: "Online Application",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      number: "02",
      title: "Pick A Plan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      number: "03",
      title: "Compare Quotes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      number: "04",
      title: "Sign Your Contract",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    }
  ];

  return (
    <section className="bg-[#0e6655] py-28 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        {/* Header */}
        <span className="block text-[#f5a800] text-[13px] font-bold tracking-[1.5px] uppercase mb-4">
          WE HELP YOU ON EVERY STEP OF THE JOURNEY
        </span>
        <h2 className="text-[48px] font-bold text-white mb-20 leading-[1.2]">
          We Make Simple Process<br/>To Get Good Results
        </h2>

        {/* Steps Container */}
        <div className="relative mt-12">
          {/* Connecting Dashed Line */}
          <div className="absolute top-[80px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#1a7f6b] z-0 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-white text-[14px] font-bold uppercase tracking-[1px] mb-2">
                  STEP
                </span>
                
                {/* Number with Shadow */}
                <div className="text-[56px] font-extrabold text-white leading-none mb-6 drop-shadow-[0_8px_8px_rgba(0,0,0,0.25)]">
                  {step.number}
                </div>

                {/* Dot on the line */}
                <div className="w-[12px] h-[12px] rounded-full bg-[#f5a800] border-[2px] border-[#0e6655] outline outline-[2px] outline-[#f5a800] mb-8 relative z-10"></div>

                {/* Content */}
                <h3 className="text-white text-[20px] font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-white/80 text-[14px] leading-[1.8] max-w-[280px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
