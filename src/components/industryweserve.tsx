import { useState } from "react";

export default function IndustryWeServe() {
  const projects = [
    {
      category: "Finance Audit",
      title: "Strategic planning execution",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      category: "Leadership",
      title: "Leadership executive coaching",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      category: "Business Growth",
      title: "Empowered leadership journey",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    },
    {
      category: "Consulting",
      title: "Solution for each & every challenges",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#FDF8F4] py-20">
      <div className="mx-auto max-w-7xl px-2">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#885b67]">
              Industry we serve
            </span>

            <h2 className="mb-3 text-4xl font-bold leading-tight text-[#1a1630]">
              Our Stories of Financial Achievement
            </h2>

            <p className="max-w-3xl text-sm leading-7 text-[#6b6480]">
              Discover a moving experience like no other at Outgrid. We go
              beyond merely transporting items.
              <br />
              Get rid of manual tracking spreadsheets, and get an accurate
              view.
            </p>
          </div>

          <button
            className="text-white px-6 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#a35765]/30"
            style={{
              background:
                "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
            }}
          >
            Take Our Services
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <div className="rounded-2xl border border-[#e8e5f4] bg-white p-6 shadow-sm">
            <div className="space-y-5">
              {projects.map((project, index) => {
                const active = activeIndex === index;

                return (
                  <div key={index}>
                    <button
                      onClick={() => setActiveIndex(index)}
                      className="w-full text-left"
                    >
                      <span
                        className={`inline-block rounded px-2 py-1 text-[10px] font-semibold uppercase transition-all ${active
                            ? "border border-[#cd753a]/20 bg-[#cd753a]/10 text-[#cd753a]"
                            : "border border-[#e8e5f4] bg-[#F8F7FF] text-[#885b67]"
                          }`}
                      >
                        {project.category}
                      </span>

                      <h3
                        className={`mt-3 rounded-r pl-3 text-lg leading-7 transition-all ${active
                            ? "border-l-[3px] border-[#cd753a] font-semibold text-[#1a1630]"
                            : "border-l-[3px] border-transparent text-[#6b6480] hover:text-[#1a1630]"
                          }`}
                      >
                        {project.title}
                      </h3>
                    </button>

                    {index !== projects.length - 1 && (
                      <div className="mt-5 border-b border-[#e8e5f4]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Card */}
          <div className="overflow-hidden rounded-2xl border border-[#f0e6dd] bg-white p-7 shadow-[0_4px_24px_rgba(57,47,131,0.06)]">
            <div className="relative">
              <img
                key={activeIndex}
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="h-[430px] w-full rounded-xl object-cover transition-all duration-500"
              />

              <div className="absolute bottom-4 left-4 right-4">
                <button className="w-full rounded-md bg-[#cd753a] py-4 text-sm font-semibold text-white transition hover:bg-[#b8662f]">
                  See More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}