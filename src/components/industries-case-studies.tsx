"use client";

import { useEffect, useRef } from "react";

const industryProjects = [
    { number: "01", image: "/assets/a.jpeg", title: "Real Estate: Streamlined Property Management", description: "Discover how our financial planning tools helped a leading real estate firm optimize their cash flow and streamline property acquisitions.", category: "Real Estate, Investment", client: "Horizon Realty Group", date: "12/08/2024" },
    { number: "02", image: "/assets/n.jpeg", title: "Healthcare: Optimizing Operational Budgets", description: "We implemented a cost-effective budget tracking system for a regional hospital network, reducing administrative overhead by 25%.", category: "Healthcare, Finance", client: "CarePlus Medical Centers", date: "05/11/2024" },
    { number: "03", image: "/assets/s.jpeg", title: "Chauffeur Services: Dynamic Pricing Models", description: "Our strategic financial planning enabled a premium chauffeur service to implement dynamic pricing, boosting their profit margins.", category: "Transportation, Pricing", client: "Elite Drive Co.", date: "28/01/2025" },
    { number: "04", image: "/assets/a.jpeg", title: "Education: Transparent Funding Allocation", description: "We restructured the funding allocation model for a large university, ensuring transparency and efficient resource distribution.", category: "Education, Strategy", client: "Global Tech University", date: "14/03/2025" },
    { number: "05", image: "/assets/n.jpeg", title: "Landscaping: Seasonal Cash Flow Predictability", description: "Our consultants helped a landscaping company smooth out seasonal revenue dips by establishing a robust cash flow forecasting system.", category: "Landscaping, Forecasting", client: "GreenScape Solutions", date: "09/06/2025" },
];

const STICKY_TOP = 96; // matches top-24 (24 * 4px)
const SNAP_THRESHOLD = 0.25;
const SNAP_LOCK_MS = 600;

export default function IndustriesCaseStudies() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isSnappingRef = useRef(false);
    const lastYRef = useRef(0);
    const tickingRef = useRef(false);

    useEffect(() => {
        lastYRef.current = window.scrollY;

        const handleScroll = () => {
            if (isSnappingRef.current || tickingRef.current) return;
            tickingRef.current = true;

            requestAnimationFrame(() => {
                tickingRef.current = false;

                const currentY = window.scrollY;
                const goingUp = currentY < lastYRef.current;
                lastYRef.current = currentY;

                if (!goingUp) return;

                const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

                for (let i = cards.length - 1; i >= 1; i--) {
                    const el = cards[i];
                    if (!el) continue;
                    const rect = el.getBoundingClientRect();
                    const distanceFromStickyTop = rect.top - STICKY_TOP;

                    // Card is currently stuck (rect.top ~ STICKY_TOP) and we're
                    // scrolling up. Check how far we are into its range by
                    // looking at the previous card's bottom relative to viewport.
                    const prevEl = cards[i - 1];
                    if (!prevEl) continue;
                    const prevRect = prevEl.getBoundingClientRect();

                    // Only relevant if this card is the one currently "active" (stuck)
                    const isActive =
                        Math.abs(distanceFromStickyTop) < 2 ||
                        (rect.top <= STICKY_TOP + 2 && rect.top >= STICKY_TOP - window.innerHeight);

                    if (!isActive) continue;

                    // How much of the previous card's height has scrolled past.
                    // prevRect.top is negative and grows toward 0 as we scroll up
                    // through the current (this) card's sticky range.
                    const prevHeight = prevEl.offsetHeight;
                    const scrolledPastPrev = -prevRect.top; // how far prev card's top is above viewport
                    const progressIntoCurrent = 1 - scrolledPastPrev / prevHeight;

                    if (progressIntoCurrent < SNAP_THRESHOLD) {
                        const targetY = window.scrollY + prevRect.top - STICKY_TOP;
                        isSnappingRef.current = true;
                        window.scrollTo({ top: targetY, behavior: "smooth" });
                        lastYRef.current = targetY;
                        setTimeout(() => {
                            isSnappingRef.current = false;
                        }, SNAP_LOCK_MS);
                    }
                    break;
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="py-[110px] bg-[#f7f1eb]">
            <div className="max-w-[1364px] mx-auto px-6">
                <div className="mb-14 grid gap-10 lg:grid-cols-[720px_1fr] items-end px-10">
                    <div>
                        <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
                            Why Choose Us
                        </span>
                        <h2 className="max-w-[720px] text-[42px] font-bold leading-[1.08] text-[#1a1630]">
                            Financial Solutions <br /> That Help Your Business Grow
                        </h2>
                    </div>
                    <div className="flex items-end lg:justify-end">
                        <p className="max-w-[420px] text-[20px] leading-7 text-[#6b6480]">
                            Explore how we've helped businesses across various sectors achieve exceptional results through tailored strategies.
                        </p>
                    </div>
                </div>

                <div className="relative flex flex-col gap-10">
                    {industryProjects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => { cardRefs.current[index] = el }}
                            className="sticky top-24"
                            style={{ zIndex: index + 1 }}
                        >
                            <div className="bg-white/70 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-lg">
                                <div className="grid lg:grid-cols-[68%_32%]">
                                    <div className="relative">
                                        <img src={project.image} alt={project.title} className="w-full h-[640px] object-cover" />
                                        <div className="absolute top-5 left-5 w-[42px] h-[42px] rounded-lg bg-[#eb862a] text-white text-sm font-bold flex items-center justify-center">
                                            {project.number}
                                        </div>
                                    </div>
                                    <div className="px-14 py-16 flex flex-col justify-center">
                                        <h3 className="text-[38px] leading-[1.2] font-bold text-[#041b16] mb-6">{project.title}</h3>
                                        <p className="text-[#6e7676] leading-8 mb-10">{project.description}</p>
                                        <div className="space-y-4 mb-10 text-[15px]">
                                            <div><span className="font-bold text-[#041b16]">Client:</span> {project.client}</div>
                                            <div><span className="font-bold text-[#041b16]">Date:</span> {project.date}</div>
                                            <div><span className="font-bold text-[#041b16]">Category:</span> {project.category}</div>
                                        </div>
                                        <button
                                            className="max-w-fit text-white px-6 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                            style={{ background: "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)" }}
                                        >
                                            Read Full Case Study.
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
