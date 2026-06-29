import { ArrowRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Alva Edison",
            role: "Market Researcher",
            image: "https://i.pravatar.cc/80?img=12",
        },
        {
            name: "Kristin Watson",
            role: "WordPress Developer",
            image: "https://i.pravatar.cc/80?img=32",
        },
        {
            name: "Jacob Jones",
            role: "Web Designer",
            image: "https://i.pravatar.cc/80?img=15",
        },
        {
            name: "Merry Jiucy",
            role: "UI Designer",
            image: "https://i.pravatar.cc/80?img=68",
        },
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#0E766E]">
                            Our Testimonials
                        </span>

                        <h2 className="mb-5 text-[44px] font-bold leading-[1.1] text-[#122B2A]">
                            Don’t Believe Us?
                            <br />
                            People Talk About It
                        </h2>

                        <p className="mb-8 max-w-sm text-[15px] leading-7 text-[#6E7676]">
                            Discover a moving experience like no other. At Transp
                            Offering Transit, Cost And Manual Tracking On Driver
                            Stay Worrying Over Own Ipsum.
                        </p>

                        <button className="flex w-fit items-center gap-2 rounded-md bg-[#F8B322] px-6 py-3 text-sm font-semibold text-[#122B2A] transition hover:bg-[#e8a51d]">
                            Check Our Reviews
                            <ArrowRight size={16} />
                        </button>
                    </div>

                    {/* Right Grid */}
                    <div className="grid gap-4 md:grid-cols-2">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-2xl bg-[#EDF5F4] p-7"
                            >
                                {/* Stars */}
                                <div className="mb-5 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="h-4 w-4 fill-[#FDB515]"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.196-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="mb-6 text-[14px] leading-7 text-[#6E7676]">
                                    “Discover a moving experience like no other and
                                    provide accurate solutions beyond merely clicking.”
                                </p>

                                {/* User */}
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-12 w-12 rounded-full object-cover"
                                    />

                                    <div>
                                        <h4 className="text-lg font-bold text-[#0E766E]">
                                            {item.name}
                                        </h4>

                                        <p className="text-sm text-[#7A8383]">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Large Quote */}
                                <Quote
                                    fill="white"
                                    stroke="white"
                                    strokeWidth={1.5}
                                    className="absolute bottom-3 right-5 h-20 w-20 opacity-80"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}