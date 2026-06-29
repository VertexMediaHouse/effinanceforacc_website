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
    <section className="w-full bg-[#EDF5F4] py-10">
      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-[1.5px] text-[#2F8F83]">
              Working Projects
            </span>

            <h2 className="mb-3 text-4xl font-bold leading-tight text-[#183534]">
              Our Stories of Financial Achievement
            </h2>

            <p className="max-w-3xl text-sm leading-7 text-[#6E7676]">
              Discover a moving experience like no other at Outgrid. We go
              beyond merely transporting items.
              <br />
              Get rid of manual tracking spreadsheets, and get an accurate
              view.
            </p>
          </div>

          <button className="flex h-fit items-center gap-2 rounded-md border border-[#C6D7D3] bg-white px-6 py-3 text-sm font-semibold text-[#183534] transition hover:bg-[#f8fdfc]">
            Contact With Us
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="grid gap-4 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <div className="rounded-2xl bg-white p-6">
            <div className="space-y-5">
              {projects.map((project, index) => (
                <div key={index}>
                  <span
                    className={`inline-block rounded px-2 py-1 text-[10px] font-semibold uppercase ${
                      project.active
                        ? "bg-[#0F7B6C] text-white"
                        : "bg-[#EAF4F2] text-[#0F7B6C]"
                    }`}
                  >
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-lg leading-7 text-[#183534]">
                    {project.title}
                  </h3>

                  {index !== projects.length - 1 && (
                    <div className="mt-5 border-b border-[#E7ECEB]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Project Card */}
          <div className="overflow-hidden rounded-2xl bg-white">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Financial Team"
                className="h-[430px] w-full object-cover"
              />

              {/* Bottom CTA Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <button className="w-full rounded-md bg-[#2F8F83] py-4 text-sm font-semibold text-white transition hover:bg-[#26786e]">
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