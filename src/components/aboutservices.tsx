import TiltedCard from "./TiltedCard";
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
    title: "Tax Compliance",
    desc: "US federal and state tax filings prepared and reviewed for accuracy.",
  },
  {
    icon: FileText,
    title: "Bookkeeping",
    desc: "Daily transaction recording and reconciliations kept fully up to date.",
  },
  {
    icon: BarChart3,
    title: "Month-End Close",
    desc: "Timely close cycles with CPA-ready financial statements every month.",
  },
  {
    icon: Wallet,
    title: "Accounts Payable",
    desc: "Vendor bills tracked, approved and paid on a consistent schedule.",
  },
  {
    icon: Landmark,
    title: "Accounts Receivable",
    desc: "Invoicing and collections managed to keep your cash flow steady.",
  },
  {
    icon: Lock,
    title: "Payroll Support",
    desc: "Payroll processing and recordkeeping handled accurately each cycle.",
  },
];

function CornerShape() {
  return (
    <svg
      viewBox="0 0 150 80"
      className="h-full w-full text-[#f3eff8] transition-all duration-500 group-hover:text-[#cd753a]"
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
      <div className="mx-auto max-w-7xl px-2">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[12px] font-bold uppercase tracking-[3px] text-tertiary">
              OUR SERVICES
            </span>
            <h2 className="text-3xl font-bold leading-tight text-text-primary md:text-[42px] md:leading-[1.1]">
              Accounting & Bookkeeping
              <br />
              for US Businesses and Firms
            </h2>
          </div>
          <p className="max-w-[550px] text-[20px] leading-7 text-[#cd753a] font-medium md:text-left">
            From daily bookkeeping to month-end close, we manage the
            numbers so you can focus on running your business.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-2">
          {features.map((item, index) => {
            return (
              <TiltedCard
                key={item.title}
                containerHeight="225px"
                containerWidth="100%"
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-[#ece6f3] bg-white p-8 shadow-[0_10px_35px_rgba(20,20,43,0.08)] transition-all duration-300 group-hover:border-[#cd753a]/30 group-hover:shadow-[0_20px_50px_rgba(20,20,43,0.12)] pointer-events-auto">
                    {/* CONTENT */}
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-lg font-bold text-[#2a2456] transition-colors duration-300 group-hover:text-white">
                          {item.title}
                        </h3>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface font-semibold text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      <p className="text-[14px] leading-6 text-[#5e5675] transition-colors duration-300 group-hover:text-white/80">
                        {item.desc}
                      </p>

                      <div className="mt-6">
                        <button
                          className="group/btn inline-flex items-center gap-3 text-sm font-semibold text-[#cd753a] transition-all duration-300 hover:text-[#b95d20]"
                        >
                          Learn More

                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current transition-all duration-300 group-hover/btn:bg-[#cd753a] group-hover/btn:text-white group-hover/btn:translate-x-1">
                            →
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* DECORATION */}
                    <div className="pointer-events-none absolute -bottom-3 -right-2 h-24 w-36 opacity-70">
                      <CornerShape />
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </section >
  );
}