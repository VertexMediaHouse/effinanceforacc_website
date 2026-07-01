export default function ProcessOfWork() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We learn about your business, financial goals, and current accounting challenges to recommend the right solution.",
    },
    {
      number: "02",
      title: "Custom Proposal",
      description:
        "Receive a tailored service plan with clear pricing, timelines, and the accounting services that best fit your business.",
    },
    {
      number: "03",
      title: "Onboarding",
      description:
        "Our team securely collects your financial data, sets up your accounts, and ensures a smooth transition.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      description:
        "We handle your bookkeeping, payroll, tax, and financial reporting while providing continuous expert guidance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] py-28">
      <div className="mx-auto max-w-[1400px] px-6">

        {/* Header */}
        <div className="mb-14 grid gap-10 lg:grid-cols-[720px_1fr] items-end px-10">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              OUR PROCESS
            </span>

            <h2 className="max-w-[720px] text-[42px] font-bold leading-[1.08] text-[#1a1630]">
              Process That Can Be Trusted
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[420px] text-[20px] leading-7 text-[#6b6480]">
              A simple, transparent process designed to keep your finances accurate, compliant, and ready for growth.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="relative mt-12">

          {/* Dashed Line */}
          <div className="absolute left-[10%] right-[10%] top-[115px] hidden h-px border-t border-dashed border-[#1a7f6b] md:block"></div>

          <div className="relative z-10 grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">

                <span className="mb-2 text-[14px] font-bold uppercase tracking-[1px] text-[#202020]">
                  STEP
                </span>

                <span className="mb-6 text-[56px] font-extrabold leading-none text-black">
                  {step.number}
                </span>

                <div className="relative z-10 mb-8 h-3 w-3 rounded-full border-2 border-[#0e6655] bg-[#c97a3d] outline outline-2 outline-[#f5a800]"></div>

                <h3 className="mb-4 text-[20px] font-bold text-black">
                  {step.title}
                </h3>

                <p className="max-w-[280px] text-[14px] leading-[1.8] text-black">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}