import { ArrowRight } from "lucide-react";


export default function IndustryWeServe() {
  const projects = [
    {
      category: "Finance Audit",
      title: "Strategic planning execution",
      active: true,
    },
    {
      category: "Finance Audit",
      title: "Leadership executive coaching",
    },
    {
      category: "Finance Audit",
      title: "Empowered leadership journey",
    },
    {
      category: "Finance Audit",
      title: "Solution for each & every challenges",
    },
  ];

  return (
    <section className="w-full bg-[#FDF8F4] py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#885b67]">
              Moving Projects
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

          <button className="bg-[#cd753a] hover:bg-[#b8662f] transition-all duration-300 text-white shadow-lg shadow-[#cd753a]/30 font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-3">
            Contact With Us
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <div className="rounded-2xl bg-[#FDF8F4] p-6 border border-[#e8e5f4]">
            <div className="space-y-5">
              {projects.map((project, index) => (
                <div key={index}>
                  <span
                    className={`inline-block rounded px-2 py-1 text-[10px] font-semibold uppercase ${
                      project.active
                        ? "bg-[#FDF8F4] text-[#cd753a] border border-[#e8e5f4]"
                        : "bg-[rgba(205,117,58,0.10)] text-[#cd753a] border border-[rgba(205,117,58,0.25)]"
                    }`}
                  >
                    {project.category}
                  </span>

                  <h3 className={`mt-3 text-lg leading-7 font-medium ${
                    project.active
                      ? "text-[#1a1630] font-semibold pl-3 border-l-[3px] border-[#cd753a] bg-[#FDF8F4] rounded-r"
                      : "text-[#6b6480]"
                  }`}>
                    {project.title}
                  </h3>

                  {index !== projects.length - 1 && (
                    <div className="mt-5 border-b border-[#e8e5f4]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Project Card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#FFFFFF] border border-[#f0e6dd] p-7 shadow-[0_4px_24px_rgba(57,47,131,0.06)]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Financial Team"
                className="h-[430px] w-full object-cover"
              />

              {/* Bottom CTA Overlay */}
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