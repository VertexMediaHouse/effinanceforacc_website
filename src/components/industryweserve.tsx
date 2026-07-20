import { useState } from "react";
import { Link } from "react-router-dom";

export default function IndustryWeServe() {
const projects = [
  {
    category: "Real Estate",
    title: "Property-level bookkeeping with class & location tracking",
    image: "/assets/industry-1.jpg",
    imageKeyword: "commercial real estate office property management",
  },
  {
    category: "E-Commerce",
    title: "Multi-channel accounting with inventory & sales tax management",
    image: "/assets/industry-2.jpg",
    imageKeyword: "ecommerce warehouse online retail fulfillment",
  },
  {
    category: "Healthcare",
    title: "HIPAA-conscious financial management & insurance reconciliation",
    image: "/assets/industry-3.jpg",
    imageKeyword: "modern healthcare clinic medical administration",
  },
  {
    category: "Chauffeur Services",
    title: "Vehicle expense tracking & driver payment management",
    image: "/assets/industry-4.jpg",
    imageKeyword: "luxury chauffeur service executive transportation",
  }
];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#FDF8F4] py-20">
      <div className="mx-auto max-w-7xl px-2">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#885b67]">
              Industries We Serve
            </span>

            <h2 className="mb-3 text-4xl font-bold leading-tight text-[#1a1630]">
              Trusted Accounting & Finance Solutions
            </h2>

            <p className="max-w-3xl text-sm leading-7 text-[#6b6480]">
              Effinanceforacc partners with businesses across the US and
              abroad to simplify accounting, ensure compliance, and drive
              financial clarity.
              <br />
              Say goodbye to manual spreadsheets — get accurate, real-time
              financial insight.
            </p>
          </div>

          <Link to="/industries">
          <button
            className="text-white px-6 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#a35765]/30"
            style={{
              background:
                "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
            }}
          >
            Explore Our Industries
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
              </Link>
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
                className="h-[550px] w-full rounded-xl object-cover transition-all duration-500"
              />

              <div className="absolute bottom-4 left-4 right-4">
                <Link to="/industries#case-studies">
                  <button className="w-full rounded-md bg-[#cd753a] py-4 text-sm font-semibold text-white transition hover:bg-[#b8662f]">
                    See More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}