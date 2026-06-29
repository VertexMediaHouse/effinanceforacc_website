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
    <section className="bg-white py-24">
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
            <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <div className="relative h-14 w-14">
                <div
                  className="h-14 w-14 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#F4B321 0deg 108deg, #0F7B6C 108deg 360deg)",
                  }}
                >
                  <div className="absolute inset-[7px] rounded-full bg-white" />
                </div>
              </div>

              <div>
                <h3 className="text-4xl font-bold leading-none text-[#183534]">
                  30%
                </h3>
                <p className="mt-1 text-sm text-[#7A8383]">
                  Tax Conversion Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#2F8F83]">
              Why Choose Our Services
            </span>

            <h2 className="max-w-[650px] text-[52px] font-bold leading-[1.05] text-[#183534]">
              The Future Of Financial
              <br />
              Service Place
            </h2>

            <p className="mt-5 max-w-[650px] text-lg font-medium text-[#5A6262]">
              Finance Aescover A Moving Experience Like No Other At Outgrid.
              We Going Beyond Merely.
            </p>

            <p className="mt-6 max-w-[700px] text-[15px] leading-8 text-[#7A8383]">
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
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8E4E1]">
                      <Icon
                        size={18}
                        className="text-[#2F8F83]"
                      />
                    </div>

                    <span className="font-semibold text-[#183534]">
                      {feature.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <button className="mt-10 flex items-center gap-2 rounded-md bg-[#F4B321] px-8 py-4 font-semibold text-[#183534] transition hover:bg-[#e7aa1d]">
              Take Our Service
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}