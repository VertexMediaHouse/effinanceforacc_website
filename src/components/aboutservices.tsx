import {
  ShieldCheck,
  FileText,
  BarChart3,
  Wallet,
  Landmark,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Insurance Tax",
    desc: "Strategic tax planning and insurance structuring that minimizes liabilities.",
  },
  {
    icon: FileText,
    title: "Tax File Return",
    desc: "Accurate monthly, quarterly and annual tax filings without stress.",
  },
  {
    icon: BarChart3,
    title: "Audit & Assurance",
    desc: "Financial reporting you can trust with transparent insights.",
  },
  {
    icon: Wallet,
    title: "Financial Planning",
    desc: "Cash flow forecasting and growth-focused financial roadmaps.",
  },
  {
    icon: Landmark,
    title: "Cash Flow",
    desc: "Track every dollar with automated reporting and forecasting.",
  },
  {
    icon: Lock,
    title: "Secure Money",
    desc: "Enterprise-grade systems protecting your financial data.",
  },
];

function CornerShape() {
  return (
    <svg
      viewBox="0 0 150 80"
      className="h-full w-full text-[#C7D9D5] transition-all duration-500 group-hover:text-[#F6B318]"
      fill="none"
    >
      <path
        d="M55.8635 28.8563L5.07903 72.9805C2.28574 75.4075 4.00216 80 7.70251 80H146C148.209 80 150 78.2091 150 76V7.92083C150 4.4673 145.918 2.63688 143.339 4.93419L97.1412 46.0924C95.8612 47.2327 93.9969 47.4307 92.506 46.5845L60.4614 28.397C58.9864 27.5599 57.1438 27.7439 55.8635 28.8563Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutServices() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="text-[12px] font-semibold uppercase tracking-[4px] text-[#006d5b]">
            Features
          </span>

          <h2 className="mt-4 text-[42px] font-bold leading-[1.1] text-[#041B16]">
            We Automate Finances
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative h-[250px] overflow-hidden rounded-[16px] bg-[#EDF5F4] p-5 transition-all duration-500 hover:-translate-y-2 hover:bg-[#00473B] hover:shadow-[0_25px_55px_rgba(0,71,59,.15)]"
              >
                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:bg-[#F6B318]">
                      <Icon
                        size={22}
                        strokeWidth={2.2}
                        className="text-[#00473B]"
                      />
                    </div>

                    <h3 className="text-[20px] font-bold leading-tight text-[#041B16] transition-colors duration-300 group-hover:text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[14px] leading-6 text-[#667878] transition-colors duration-300 group-hover:text-white/80">
                    {item.desc}
                  </p>

                  <div className="mt-6">
                    <button className="inline-flex items-center gap-3 text-sm font-semibold text-[#00473B] transition-all duration-300 group-hover:text-white">
                      Learn More

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current transition-all duration-300 group-hover:border-[#F6B318] group-hover:bg-[#F6B318] group-hover:text-[#041B16]">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* DECORATION */}
                <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-36 opacity-70">
                  <CornerShape />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}