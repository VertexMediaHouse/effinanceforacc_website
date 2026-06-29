const industryProjects = [
    {
        number: "01",
        image: "/assets/a.jpeg",
        title: "Real Estate: Streamlined Property Management",
        description: "Discover how our financial planning tools helped a leading real estate firm optimize their cash flow and streamline property acquisitions.",
        category: "Real Estate, Investment",
        client: "Horizon Realty Group",
        date: "12/08/2024",
    },
    {
        number: "02",
        image: "/assets/n.jpeg",
        title: "Healthcare: Optimizing Operational Budgets",
        description: "We implemented a cost-effective budget tracking system for a regional hospital network, reducing administrative overhead by 25%.",
        category: "Healthcare, Finance",
        client: "CarePlus Medical Centers",
        date: "05/11/2024",
    },
    {
        number: "03",
        image: "/assets/s.jpeg",
        title: "Chauffeur Services: Dynamic Pricing Models",
        description: "Our strategic financial planning enabled a premium chauffeur service to implement dynamic pricing, boosting their profit margins.",
        category: "Transportation, Pricing",
        client: "Elite Drive Co.",
        date: "28/01/2025",
    },
    {
        number: "04",
        image: "/assets/a.jpeg",
        title: "Education: Transparent Funding Allocation",
        description: "We restructured the funding allocation model for a large university, ensuring transparency and efficient resource distribution.",
        category: "Education, Strategy",
        client: "Global Tech University",
        date: "14/03/2025",
    },
    {
        number: "05",
        image: "/assets/n.jpeg",
        title: "Landscaping: Seasonal Cash Flow Predictability",
        description: "Our consultants helped a landscaping company smooth out seasonal revenue dips by establishing a robust cash flow forecasting system.",
        category: "Landscaping, Forecasting",
        client: "GreenScape Solutions",
        date: "09/06/2025",
    },
];

export default function IndustriesCaseStudies() {
    return (
        <section className="py-[110px] bg-[#f9fafb]">
            <div className="max-w-[1364px] mx-auto px-6">
                <div className="text-center mb-[80px]">
                    <h2 className="text-[48px] font-bold text-[#041b16] mb-[20px]">Industry Case Studies</h2>
                    <p className="text-[18px] text-[#6e7676] max-w-[600px] mx-auto">
                        Explore how we've helped businesses across various sectors achieve exceptional results through tailored strategies.
                    </p>
                </div>
                
                <div className="relative">
                    {industryProjects.map((project, index) => (
                        <div
                            key={index}
                            className="sticky top-24 mb-10"
                            style={{
                                zIndex: index + 1,
                            }}
                        >
                            <div className="bg-[#edf5f4] rounded-[30px] p-0 overflow-hidden shadow-lg border border-white/50">

                                <div className="grid lg:grid-cols-[68%_32%]">

                                    {/* LEFT IMAGE */}
                                    <div className="relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="
                    w-full
                    h-[640px]
                    object-cover
                  "
                                        />

                                        <div
                                            className="
                    absolute
                    top-5
                    left-5
                    w-[42px]
                    h-[42px]
                    rounded-lg
                    bg-[#006d5b]
                    text-white
                    text-sm
                    font-bold
                    flex
                    items-center
                    justify-center
                  "
                                        >
                                            {project.number}
                                        </div>
                                    </div>

                                    {/* RIGHT CONTENT */}
                                    <div
                                        className="
                  px-14
                  py-16
                  flex
                  flex-col
                  justify-center
                "
                                    >
                                        <h3
                                            className="
                    text-[38px]
                    leading-[1.2]
                    font-bold
                    text-[#041b16]
                    mb-6
                  "
                                        >
                                            {project.title}
                                        </h3>

                                        <p
                                            className="
                    text-[#6e7676]
                    leading-8
                    mb-10
                  "
                                        >
                                            {project.description}
                                        </p>

                                        <div className="space-y-4 mb-10 text-[15px]">

                                            <div>
                                                <span className="font-bold text-[#041b16]">
                                                    Client:
                                                </span>{" "}
                                                {project.client}
                                            </div>

                                            <div>
                                                <span className="font-bold text-[#041b16]">
                                                    Date:
                                                </span>{" "}
                                                {project.date}
                                            </div>

                                            <div>
                                                <span className="font-bold text-[#041b16]">
                                                    Category:
                                                </span>{" "}
                                                {project.category}
                                            </div>

                                        </div>

                                        <button
                                            className="
                    w-fit
                    bg-[#ffb000]
                    text-black
                    font-semibold
                    px-8
                    py-4
                    rounded-xl
                    hover:bg-[#f5a800]
                    transition
                  "
                                        >
                                            Read Full Case Study →
                                        </button>

                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
