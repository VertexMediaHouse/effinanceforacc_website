export default function EngagementCard() {
  const engagements = [
    {
      number: "01",
      title: "Monthly Accounting",
      subheader: "Ongoing financial support",
      description:
        "Comprehensive monthly accounting services designed to keep your books accurate, your finances organized, and your business compliant year-round.",
      points: [
        "Bookkeeping & reconciliations",
        "Payroll & financial reporting",
        "Dedicated accounting support",
      ],
    },
    {
      number: "02",
      title: "Project Services",
      subheader: "One-time accounting projects",
      description:
        "Need help with a specific financial task? We deliver expert support for cleanup projects, tax preparation, system setup, and financial consulting.",
      points: [
        "Bookkeeping cleanup",
        "Tax planning & compliance",
        "Financial consulting",
      ],
    },
  ];

  return (
    <section className="bg-[#f7f1eb] py-14 sm:py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <div className="mb-10 lg:mb-14 grid gap-6 lg:gap-10 lg:grid-cols-[700px_1fr] items-end">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              SERVICE PLANS
            </span>

            <h2 className="max-w-[700px] text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight lg:leading-[1.08] text-[#1a1630]">
              Choose Your
              <br className="hidden sm:block" />
              Service Plan
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <p className="max-w-[460px] text-[15px] sm:text-[17px] lg:text-[20px] leading-7 text-[#6b6480]">
              Flexible accounting services designed to match your business
              needs, budget, and long-term growth goals.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {engagements.map((item, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-[#ece7e3] bg-white p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Gradient */}
              <div
                className="absolute left-0 top-0 h-1 w-full rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(90deg,#884c76 0%,#a35765 50%,#f38c24 100%)",
                }}
              />

              {/* Number */}
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eb862a] text-sm font-bold text-white">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-[#041b16]">
                {item.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-3 text-xs font-bold uppercase tracking-[2px] text-[#885b67]">
                {item.subheader}
              </p>

              {/* Description */}
              <p className="mt-5 text-[15px] leading-7 text-[#6e7676]">
                {item.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] leading-7 text-[#1a1630]"
                  >
                    <span
                      className="mt-[10px] h-2 w-2 flex-shrink-0 rounded-full"
                      style={{
                        background:
                          "linear-gradient(135deg,#884c76 0%,#f38c24 100%)",
                      }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg,#884c76 0%,#a35765 50%,#f38c24 100%)",
                }}
              >
                Get Started

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-4 w-4"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}