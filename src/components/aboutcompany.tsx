import {
  ArrowRight,
  Award,
  BadgeCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function AboutCompany() {
  const features = [
    {
      icon: Award,
      title: "Trusted by thousands",
    },
    {
      icon: FileText,
      title: "Weekly generate reports",
    },
    {
      icon: BadgeCheck,
      title: "Certificate awarded",
    },
    {
      icon: ShieldCheck,
      title: "Secure payment process",
    },
  ];

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[500px_1fr]">
          {/* Left Image Block */}
          <div className="relative">
            <div className="overflow-hidden rounded-[14px]">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
                alt="Financial Consultant"
                className="h-[600px] w-full object-cover"
              />
            </div>

            {/* Floating Stat Card */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-brand border border-border">
              <div className="relative h-14 w-14">
                <div
                  className="h-14 w-14 rounded-full bg-brand flex items-center justify-center text-white font-bold"
                >
                  <div className="absolute inset-[4px] rounded-full border border-white/20" />
                </div>
              </div>

              <div>
                <h3 className="text-4xl font-bold leading-none text-text-primary">
                  30%
                </h3>
                <p className="mt-1 text-sm text-text-secondary font-medium">
                  Tax Conversion Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-accent">
              Why Choose Our Services
            </span>

            <h2 className="max-w-[650px] text-[52px] font-bold leading-[1.05] text-text-primary">
              The Future Of Financial
              <br />
              Service Place
            </h2>

            <p className="mt-5 max-w-[650px] text-lg font-medium text-text-secondary">
              Finance Aescover A Moving Experience Like No Other At Outgrid.
              We Going Beyond Merely.
            </p>

            <p className="mt-6 max-w-[700px] text-[15px] leading-8 text-text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation dolore magna
              aliqua ullamco laboris.
            </p>

            {/* Feature Grid */}
            <div className="mt-10 grid gap-y-6 gap-x-12 sm:grid-cols-2">
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
            <button className="mt-10 flex items-center gap-2 rounded-md bg-accent px-8 py-4 font-semibold text-[#b86630] shadow-brand transition hover:-translate-y-0.5 hover:bg-[#b86630] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent">
              Take Our Service
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}