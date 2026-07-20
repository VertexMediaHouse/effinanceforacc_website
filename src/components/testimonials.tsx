import { Quote } from "lucide-react";

export default function Testimonial() {
    const testimonials = [
        {
            name: "Lateshia",
            role: "Atlanta, USA",
            review:
                "It has been a pleasure working with Effinance Foracc. From the initial meeting to date, it has been an outstanding experience. Arpit is very patient, professional, and knowledgeable. I highly recommend him and his team for all your accounting and bookkeeping needs.",
        },
        {
            name: "Michael",
            role: "Accounting Firm",
            review:
                "We've had an excellent experience working with the Effinance team. The quality of the bookkeeping has been consistently accurate, the staff is responsive and easy to work with, and they've always been receptive to feedback and process improvements.",
        },
        {
            name: "Sai",
            role: "Texas, USA",
            review:
                "I've been working with Arpit for both my business and personal accounting needs, and his support has been exceptional. Beyond accurate bookkeeping, he provides valuable guidance on debt reduction and financial planning. His professionalism, honesty, and responsiveness make him someone I highly recommend.",
        },
        {
            name: "Dr. Yudi",
            role: "Texas, USA",
            review:
                "Working with Mr. Arpit Shah has been an incredible experience. He has completely taken the stress out of my finances. His expertise, attention to detail, and professionalism ensure everything is handled accurately and in my best interest. He is truly a valuable partner for financial peace of mind.",
        },
    ];

    return (
        <section className="w-full bg-[#FDF8F4] py-20" id="Reviews">
            <div className="mx-auto max-w-7xl px-2">
                <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center">
                        <span className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#885b67]">
                            Client Testimonials
                        </span>

                        <h2 className="mb-5 text-[44px] font-bold leading-[1.1] text-[#1a1630]">
                            Trusted by Businesses
                            <br />
                            Across the United States
                        </h2>

                        <p className="mb-8 max-w-sm text-[15px] leading-7 text-[#6b6480]">
                            Our clients trust Effinance Foracc for reliable
                            bookkeeping, accounting, tax support, and financial
                            guidance. Their success stories reflect our
                            commitment to accuracy, professionalism, and
                            long-term partnerships.
                        </p>
                    </div>

                    {/* Right Grid */}
                    <div className="grid gap-4 md:grid-cols-2">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-[#f1e8df] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05),0_2px_8px_rgba(205,117,58,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e9d7c9] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08),0_6px_18px_rgba(205,117,58,0.08)]"
                            >
                                {/* Stars */}
                                <div className="mb-5 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="h-4 w-4 fill-[#cd753a]"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.922-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.196-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review */}
                                <p className="mb-6 text-[14px] leading-7 text-[#6b6480]">
                                    "{item.review}"
                                </p>

                                {/* User */}
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#884c76] to-[#f38c24] text-lg font-bold text-white">
                                        {item.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-bold text-[#1a1630]">
                                            {item.name}
                                        </h4>

                                        <p className="text-sm text-[#885b67]">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Quote Icon */}
                                <Quote
                                    fill="#f0e6dd"
                                    stroke="#f0e6dd"
                                    strokeWidth={1.5}
                                    className="absolute bottom-3 right-5 h-20 w-20 opacity-60"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}