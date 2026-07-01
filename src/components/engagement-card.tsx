export default function EngagementCard() {
    const engagements = [
        {
            number: "01",
            title: "Full Time Engagement",
            subheader: "Dedicated, embedded support",
            description:
                "A dedicated commitment where we work as an extension of your team, fully embedded in your day-to-day financial operations and long-term strategy.",
            points: [
                "Full-time weekly commitment",
                "Direct access & priority response",
                "Ideal for ongoing, complex needs",
            ],
        },
        {
            number: "02",
            title: "Hourly",
            subheader: "Depending upon scope of work",
            description:
                "Flexible, pay-as-you-go support scaled to the size and complexity of your project — perfect for focused engagements and shorter-term needs.",
            points: [
                "Billed by hours worked",
                "Scales with project scope",
                "Ideal for defined, one-off needs",
            ],
        },
    ];

    return (
        <section className="py-[90px] bg-[#f7f1eb]">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="mb-12 px-8">
                    <span className="mb-3 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
                        Engagement Models
                    </span>
                    <h2 className="max-w-[660px] text-[36px] font-bold leading-[1.1] text-[#1a1630]">
                        Ways We Can <br /> Work Together
                    </h2>
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
        </section>
    );
}