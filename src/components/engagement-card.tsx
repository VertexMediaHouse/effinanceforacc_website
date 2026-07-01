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
        <section className="py-24 bg-[#f7f1eb]">
            <div className="max-w-[1280px] mx-20 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="mb-12 px-8">
                        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
                            SERVICE PLANS
                        </span>

                        <h2 className="max-w-[660px] text-[36px] font-bold leading-[1.1] text-[#1a1630]">
                            Choose Your
                            <br />
                            Service Plan
                        </h2>
                    </div>
                    <div className="mb-12 px-8 flex items-end">
                        <p className="mt-5 max-w-[520px] text-[18px] leading-7 text-[#6b6480]">
                            Flexible accounting services designed to match your business needs and growth goals.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 px-8">
                    {engagements.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white/70 backdrop-blur-2xl rounded-2xl shadow-lg overflow-hidden flex flex-col p-10 min-h-[460px]"
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-1"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
                                }}
                            />

                            <div className="w-[38px] h-[38px] rounded-lg bg-[#eb862a] text-white text-sm font-bold flex items-center justify-center mb-6">
                                {item.number}
                            </div>

                            <h3 className="text-[28px] leading-[1.15] font-bold text-[#041b16] mb-2">
                                {item.title}
                            </h3>

                            <p className="text-[13px] font-semibold uppercase tracking-[1px] text-[#885b67] mb-5">
                                {item.subheader}
                            </p>

                            <p className="text-[15px] text-[#6e7676] leading-7 mb-8">
                                {item.description}
                            </p>

                            <ul className="space-y-3 mb-10">
                                {item.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-[14px] text-[#1a1630]"
                                    >
                                        <span
                                            className="mt-[6px] w-[5px] h-[5px] rounded-full flex-shrink-0"
                                            style={{
                                                background:
                                                    "linear-gradient(135deg, #884c76 0%, #f38c24 100%)",
                                            }}
                                        />
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="mt-auto max-w-fit text-white px-6 py-3 rounded-md font-bold text-[14px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                style={{
                                    background:
                                        "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
                                }}
                            >
                                Get Started
                            </button>

                        </div>
                    ))}
                </div>

            </div>
        </section >
    );
}