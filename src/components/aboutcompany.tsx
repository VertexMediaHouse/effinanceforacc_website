import {
  Award,
  BadgeCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function AboutCompany() {
  const features = [
    {
      icon: Award,
      title: "CPA-reviewed accuracy",
    },
    {
      icon: FileText,
      title: "Monthly financial reports",
    },
    {
      icon: BadgeCheck,
      title: "GAAP-compliant books",
    },
    {
      icon: ShieldCheck,
      title: "Bank-grade data security",
    },
  ];

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-7xl px-2">
        <div className="grid items-center gap-16 lg:grid-cols-[500px_1fr]">
          {/* Left Image Block */}
          <div className="relative">
            <div className="overflow-hidden rounded-[14px]">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Effinanceforacc accounting team reviewing financial statements"
                className="h-[600px] w-full object-cover"
              />
            </div>

            {/* Floating Stat Card */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 border border-border">
              <div className="relative h-14 w-14">
                <div
                  className="h-14 w-14 rounded-full bg-brand flex items-center justify-center text-white font-bold"
                >
                  <div className="absolute inset-[4px] rounded-full border border-white/20" />
                </div>
              </div>

              <div>
                <h3 className="text-4xl font-bold leading-none text-text-primary">
                  98%
                </h3>
                <p className="mt-1 text-sm text-text-secondary font-medium">
                  On-Time Close Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-accent">
              About{" "}
              <span className="bg-gradient-to-r from-[#884c76] via-[#a35765] to-[#f38c24] bg-clip-text text-transparent">
                Effinance For Acc
              </span>
            </span>

            <h2 className="max-w-[650px] text-[52px] font-bold leading-[1.05] text-text-primary">
              Bookkeeping Built For
              <br />
              US Accounting Standards
            </h2>

            <p className="mt-5 max-w-[650px] text-lg font-medium text-text-secondary">
              Effinanceforacc Handles The Books So You Can Run The Business.<br/>
              Accurate, On Time, Every Single Month.
            </p>

            <p className="mt-6 max-w-[700px] text-[15px] leading-8 text-text-secondary">
              We're an outsourced finance and accounting team built
              specifically for US-based businesses and accounting firms.
              From day-to-day bookkeeping and reconciliations to month-end
              close and CPA-ready financial statements, our team works as an
              extension of yours, in your timezone, on your software.
            </p>

            {/* Feature Grid */}
            <div className="mt-5 grid gap-y-6 gap-x-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-surface py-2.5 px-4 rounded-lg border border-border"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border">
                      <Icon
                        size={18}
                        className="text-brand"
                      />
                    </div>

                    <span className="font-semibold text-brand text-[15px]">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button
              className="text-white mt-8 px-8 py-5 rounded-md font-bold text-[15px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#a35765]/30"
              style={{
                background:
                  "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
              }}
            >
              Schedule A Consultation
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
        </div>
      </div>
    </section>
  );
} 