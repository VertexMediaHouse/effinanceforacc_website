const projects = [
    {
        number: "01",
        image: "/assets/a.jpeg",
        title: "Strategic Finance Planning",
    },
    {
        number: "02",
        title: "Expert Advice for Consulting Success",
        image: "/assets/a.jpeg",
    },
    {
        number: "03",
        title: "Exploration and Investigation",
        image: "/assets/a.jpeg",
    },
    {
        number: "04",
        title: "Formulation of a Strategy",
        image: "/assets/a.jpeg",
    },
    {
        number: "05",
        title: "Preliminary Discussion",
        image: "/assets/a.jpeg",
    },
];

export default function CaseStudy() {
    return (
        <section className="py-[110px]">
            <div className="max-w-[1364px] mx-auto px-6">
                <div className="relative">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="sticky top-24 mb-10"
                            style={{
                                zIndex: index + 1,
                            }}
                        >
                            <div className="bg-[#edf5f4] rounded-[30px] p-0 overflow-hidden">

                                <div className="grid lg:grid-cols-[68%_32%]">

                                    {/* LEFT IMAGE */}
                                    <div className="relative">
                                        <img
                                            src={project.image}
                                            alt=""
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
                    text-[44px]
                    leading-[1.1]
                    font-bold
                    text-[#041b16]
                    mb-8
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
                                            Discover a moving experience like no other at
                                            Outgrid. We go beyond transporting items.
                                            Get rid of manual tracking.
                                        </p>

                                        <div className="space-y-4 mb-10">

                                            <div>
                                                <span className="font-bold text-[#041b16]">
                                                    Clients:
                                                </span>{" "}
                                                Josefin H. Smith
                                            </div>

                                            <div>
                                                <span className="font-bold text-[#041b16]">
                                                    Date:
                                                </span>{" "}
                                                23/09/2024
                                            </div>

                                            <div>
                                                <span className="font-bold text-[#041b16]">
                                                    Category:
                                                </span>{" "}
                                                Accounting, Finance
                                            </div>

                                            <div>
                                                <span className="font-bold text-[#041b16]">
                                                    Team:
                                                </span>{" "}
                                                Account Management
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
                                            See More Details →
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