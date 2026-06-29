import {
  ShieldCheck,
  FileText,
  BarChart3,
  Wallet,
  Landmark,
  Lock,
  ArrowRight,
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
      className="h-full w-full text-[#e0dceb] transition-all duration-500 group-hover:text-[#cd753a]"
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
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[12px] font-bold uppercase tracking-[3px] text-tertiary">
              FEATURES
            </span>
            <h2 className="text-4xl font-bold leading-tight text-text-primary md:text-[52px] md:leading-[1.1]">
              We Automate Finances
              <br />
              With Finwave
            </h2>
          </div>
          <button className="group flex items-center gap-2 rounded-md bg-transparent px-6 py-3 font-semibold text-text-primary transition-all hover:text-brand">
            View All Services
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            return (
              <div
                key={item.title}
                className="group relative h-[250px] overflow-hidden rounded-[16px] bg-[#f4f0f8] p-5 transition-all duration-500 hover:-translate-y-2 hover:bg-[#cd753a] hover:shadow-[0_25px_55px_rgba(57,47,131,.15)]"
              >
                {/* CONTENT */}
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-brand font-semibold group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-bold text-[#2a2456] group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[14px] leading-6 text-[#5e5675] transition-colors duration-300 group-hover:text-white/80">
                    {item.desc}
                  </p>

                  <div className="mt-6">
                    <button className="inline-flex items-center gap-3 text-sm font-semibold text-[#cd753a] transition-all duration-300 group-hover:text-white">
                      Learn More

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current transition-all duration-300 group-hover:border-[#cd753a] group-hover:bg-[#cd753a] group-hover:text-white">
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