import { useEffect, useRef } from "react";

const industryProjects = [
  {
    number: "01",
    image:
      "https://images.unsplash.com/photo-1732812608429-67bd0ff463ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Real Estate",
    description:
      "Key QuickBooks accounting practices for property management, rental income, asset tracking, and financial reporting.",
    category: "Real Estate",
    client: "Industry Best Practices",
    date: "2023",
    points: [
      "Set up Class/Location tracking for every property to monitor profitability.",
      "Maintain separate liability accounts for security deposits and escrow funds.",
      "Track fixed assets, renovations, and depreciation accurately.",
      "Reconcile rental income, CAM charges, and bank statements monthly.",
    ],
  },
  {
    number: "02",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "E-Commerce",
    description:
      "Essential QuickBooks practices for online stores handling multiple sales channels and payment gateways.",
    category: "E-Commerce",
    client: "Industry Best Practices",
    date: "2024",
    points: [
      "Integrate Shopify, Amazon, Etsy, and payment platforms with QuickBooks.",
      "Track merchant fees and reconcile net deposits correctly.",
      "Manage inventory and Cost of Goods Sold (COGS) accurately.",
      "Handle multi-state sales tax obligations using QuickBooks Sales Tax.",
    ],
  },
  {
    number: "03",
    image:
      "https://plus.unsplash.com/premium_photo-1661375173523-e53501f99674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZSUyMGluJTIwSGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Healthcare",
    description:
      "Accounting best practices for healthcare providers using QuickBooks while maintaining compliance.",
    category: "Healthcare",
    client: "Industry Best Practices",
    date: "2023",
    points: [
      "Keep patient billing data HIPAA compliant and securely managed.",
      "Track insurance reimbursements and reconcile EOBs carefully.",
      "Use Class/Location tracking for providers and departments.",
      "Categorize licensing, malpractice insurance, and compliance costs correctly.",
    ],
  },
  {
    number: "04",
    image:
    "/assets/chauffeur.png",
    title: "Chauffeur Services",
    description:
      "Financial management essentials for transportation businesses operating multiple vehicles and drivers.",
    category: "Transportation",
    client: "Industry Best Practices",
    date: "2025",
    points: [
      "Track expenses separately for each vehicle using Class/Location.",
      "Record employee wages, contractor payments, and commissions accurately.",
      "Reconcile income from direct bookings and third-party platforms.",
      "Monitor fuel, tolls, mileage, and vehicle tax deductions.",
    ],
  },
  {
    number: "05",
    image:
      "/assets/education.png",
    title: "Education",
    description:
      "QuickBooks accounting practices for educational institutions, grants, and tuition management.",
    category: "Education",
    client: "Industry Best Practices",
    date: "2024",
    points: [
      "Track tuition, grants, donations, and government funding separately.",
      "Manage restricted and unrestricted funds for compliance.",
      "Record scholarships and fee waivers using dedicated accounts.",
      "Set up recurring invoices and deferred revenue for installment tuition.",
    ],
  },
  {
    number: "06",
    image:
      "/assets/landscape.png",
    title: "Landscaping",
    description:
      "Project-based accounting best practices for landscaping and maintenance businesses.",
    category: "Landscaping",
    client: "Industry Best Practices",
    date: "2023",
    points: [
      "Job Costing: Track direct expenses like field labor, fuel, plants, and dump fees per project to ensure profitability.",
      "Seasonal Cash Flow: Build a 12-month cash forecast to save busy-season profits for slow winter months when expenses continue.",
      "Equipment & Assets: Monitor vehicle and mower depreciation or use fast write-offs like Section 179 for new gear purchases.",
      "Service-Specific Chart of Accounts: Separate income and costs by distinct lines such as maintenance, design, and hardscaping.",
    ],
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
    <section className="py-[110px] bg-[#f7f1eb]" id="Case-studies">
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
              className="sticky top-16"
              style={{ zIndex: index + 1 }}
            >
              <div className="bg-white/70 backdrop-blur-2xl rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-[68%_32%]">

                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 sm:h-72 md:h-96 lg:h-[640px] object-cover"
                    />

                    <div className="absolute top-5 left-5 w-[42px] h-[42px] rounded-lg bg-[#eb862a] text-white text-sm font-bold flex items-center justify-center">
                      {project.number}
                    </div>
                  </div>

                  <div className="px-5 py-6 sm:px-8 sm:py-8 lg:px-14 lg:py-16 flex flex-col justify-center">

                    <h3 className="text-2xl sm:text-3xl lg:text-[38px] leading-tight font-bold text-[#041b16] mb-4 lg:mb-6">
                      {project.title}
                    </h3>

                    <p className="text-[15px] text-[#6e7676] leading-7 mb-6 lg:mb-8">
                      {project.description}
                    </p>

                    <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8 lg:mb-10">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-[#eb862a] shrink-0" />
                          <span className="text-[#6e7676] leading-7">{point}</span>
                        </li>
                      ))}
                    </ul>

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