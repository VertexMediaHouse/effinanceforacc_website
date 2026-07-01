import { CalendarClock, Users, Handshake } from "lucide-react";

const models = [
  {
    icon: CalendarClock,
    title: "Monthly Services",
    description:
      "Ongoing bookkeeping, payroll, financial reporting, and accounting support to keep your business organized year-round.",
  },
  {
    icon: Users,
    title: "Dedicated Accountant",
    description:
      "Work with a dedicated accounting professional who understands your business and provides personalized financial support.",
  },
  {
    icon: Handshake,
    title: "Advisory Services",
    description:
      "Expert guidance for tax planning, cash flow management, budgeting, and strategic financial decision-making.",
  },
];

export default function EngagementModel() {
  return (
    <section className="bg-[#ffffff] py-24">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Header */}
        <div className="mb-14 grid gap-10 lg:grid-cols-[720px_1fr] items-end px-10">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              HOW WE WORK
            </span>

            <h2 className="max-w-[720px] text-[42px] font-bold leading-[1.08] text-[#1a1630]">
              Flexible Solutions
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[420px] text-[20px] leading-7 text-[#6b6480]">
              Choose the level of accounting support that fits your business today and scales as you grow.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {models.map((model, index) => {
            const Icon = model.icon;

            return (
              <div
                key={index}
                className="group rounded-[20px] border border-[#F4B321] bg-white/70 p-10 backdrop-blur-lg transition-all duration-300"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white transition-colors duration-300">
                  <Icon
                    size={28}
                    className="text-[#F4B321]"
                  />
                </div>

                <h3 className="mb-4 text-[24px] font-bold text-[#183534]">
                  {model.title}
                </h3>

                <p className="text-[16px] leading-[1.7] text-[#6E7676]">
                  {model.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}