import { useEffect, useRef } from "react";

const industryProjects = [
    {
        number: "01",
        image: "https://plus.unsplash.com/premium_photo-1661375173523-e53501f99674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZSUyMGluJTIwSGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Healthcare Finance",
        description:
            "We modernized bookkeeping, payroll, and financial reporting for a growing healthcare practice, improving accuracy and operational efficiency.",
        category: "Healthcare",
        client: "Medical Practice",
        date: "2025",
    },
    {
        number: "02",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "eCommerce Growth",
        description:
            "Our accounting team streamlined inventory reconciliation, sales tax reporting, and cash flow management for a fast-growing online retailer.",
        category: "eCommerce",
        client: "Retail Brand",
        date: "2025",
    },
    {
        number: "03",
        image: "https://images.unsplash.com/photo-1732812608429-67bd0ff463ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Real Estate",
        description:
            "We delivered accurate financial reporting and cash flow planning, helping a real estate firm make smarter investment decisions.",
        category: "Real Estate",
        client: "Property Group",
        date: "2025",
    },
    {
        number: "04",
        image: "https://plus.unsplash.com/premium_photo-1663100163323-bcc8b597ce4b?q=80&w=1521&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Manufacturing",
        description:
            "We simplified payroll, compliance, and financial reporting, allowing the business to reduce errors and improve operational control.",
        category: "Manufacturing",
        client: "Industrial Company",
        date: "2025",
    },
    {
        number: "05",
        image: "https://plus.unsplash.com/premium_photo-1661290329923-4791c3f43dba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmluYW5jZSUyMGluJTIwc3RhcnR1cHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Startup Success",
        description:
            "Our financial planning and investor-ready reporting helped a startup strengthen its financial foundation and prepare for growth.",
        category: "Technology",
        client: "SaaS Startup",
        date: "2025",
    },
];

const STICKY_TOP = 96;
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

          const prevEl = cards[i - 1];
          if (!prevEl) continue;

          const prevRect = prevEl.getBoundingClientRect();

          const isActive =
            Math.abs(distanceFromStickyTop) < 2 ||
            (rect.top <= STICKY_TOP + 2 &&
              rect.top >= STICKY_TOP - window.innerHeight);

          if (!isActive) continue;

          const prevHeight = prevEl.offsetHeight;
          const scrolledPastPrev = -prevRect.top;
          const progressIntoCurrent = 1 - scrolledPastPrev / prevHeight;

          if (progressIntoCurrent < SNAP_THRESHOLD) {
            const targetY = window.scrollY + prevRect.top - STICKY_TOP;

            isSnappingRef.current = true;

            window.scrollTo({
              top: targetY,
              behavior: "smooth",
            });

            lastYRef.current = targetY;

            setTimeout(() => {
              isSnappingRef.current = false;
            }, SNAP_LOCK_MS);
          }

          break;
        }
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-[110px] bg-[#f7f1eb]">
      <div className="max-w-[1364px] mx-auto px-6">

        <div className="mb-14 grid gap-10 lg:grid-cols-[720px_1fr] items-end px-10">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              SUCCESS STORIES
            </span>

            <h2 className="max-w-[720px] text-[42px] font-bold leading-[1.08] text-[#1a1630]">
              Delivering Measurable Results
              <br />
              Across Industries
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[420px] text-[20px] leading-7 text-[#6b6480]">
              Discover how Effinanceforacc helps businesses improve financial
              performance through accurate accounting, strategic planning, and
              reliable financial management.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-10">
          {industryProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="sticky top-24"
              style={{ zIndex: index + 1 }}
            >
              <div className="bg-white/70 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-lg">
                <div className="grid lg:grid-cols-[68%_32%]">

                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[640px] object-cover"
                    />

                    <div className="absolute top-5 left-5 w-[42px] h-[42px] rounded-lg bg-[#eb862a] text-white text-sm font-bold flex items-center justify-center">
                      {project.number}
                    </div>
                  </div>

                  <div className="px-14 py-16 flex flex-col justify-center">

                    <h3 className="text-[38px] leading-[1.2] font-bold text-[#041b16] mb-6">
                      {project.title}
                    </h3>

                    <p className="text-[#6e7676] leading-8 mb-10">
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
                          Type:
                        </span>{" "}
                        {project.date}
                      </div>

                      <div>
                        <span className="font-bold text-[#041b16]">
                          Industry:
                        </span>{" "}
                        {project.category}
                      </div>
                    </div>

                    <button
                      className="max-w-fit text-white px-6 py-3 rounded-md font-bold text-[15px] flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #884c76 0%, #a35765 50%, #f38c24 100%)",
                      }}
                    >
                      Read Case Study
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