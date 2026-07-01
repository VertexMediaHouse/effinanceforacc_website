import { useState, useEffect, useRef } from "react";
import {
  Calculator,
  ArrowRightLeft,
  FileSpreadsheet,
  Briefcase,
  FileSignature,
  TrendingUp
} from "lucide-react";

const servicesData = [
  {
    id: "accounting",
    title: "Accounting and bookkeeping",
    description: "Maintain flawless financial records with our comprehensive accounting and bookkeeping services. We ensure your ledgers are always up-to-date, accurate, and compliant with all regulations.",
    icon: Calculator,
    color: "#e65c00",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ap-ar",
    title: "Accounts Receivable & Payable",
    description: "Optimize your cash flow. We manage your invoices, track outstanding payments, and ensure your bills are paid on time, giving you complete visibility into your working capital.",
    icon: ArrowRightLeft,
    color: "#f38c24",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "statements",
    title: "Financial Statement Preparation",
    description: "Gain deep insights into your business performance. We prepare accurate, timely financial statements including balance sheets, income statements, and cash flow reports.",
    icon: FileSpreadsheet,
    color: "#a35765",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cfo",
    title: "Virtual CFO Services",
    description: "Get executive-level financial strategy without the full-time cost. Our virtual CFOs provide high-level forecasting, strategy formulation, and financial leadership to drive growth.",
    icon: Briefcase,
    color: "#884c76",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tax",
    title: "Tax Preparation Planning",
    description: "Minimize your tax liability with proactive planning. We navigate complex tax codes to ensure compliance while maximizing your deductions and keeping more of your hard-earned revenue.",
    icon: FileSignature,
    color: "#e65c00",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "budgeting",
    title: "Budgeting & Forecasting",
    description: "Look into the future of your finances. We build robust budgets and predictive models that help you plan for expansion, manage risks, and make informed strategic decisions.",
    icon: TrendingUp,
    color: "#f38c24",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
  }
];

export default function UniqueServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const sections = containerRef.current.querySelectorAll('.service-section');
      const scrollMid = window.scrollY + window.innerHeight / 3.5;
      let closestIdx = 0;
      let minDist = Infinity;
      sections.forEach((section, idx) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        const sectionCenter = rect.top + window.scrollY + rect.height / 2;
        const dist = Math.abs(scrollMid - sectionCenter);
        if (dist < minDist) {
          minDist = dist;
          closestIdx = idx;
        }
      });
      setActiveIndex(closestIdx);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="bg-orange-50/40 py-24 relative" ref={containerRef}>
      <div className="max-w-[1400px] mx-24 px-6">

        <div className="mb-14 grid gap-10 lg:grid-cols-[720px_1fr] items-end">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              What We Do
            </span>
            <h2 className="max-w-[720px] text-[42px] font-bold leading-[1.08] text-[#1a1630]">
              Comprehensive Financial Solutions
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 relative">

          {/* Sticky Left Visual Container */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="sticky top-[120px] h-[460px] w-full rounded-2xl overflow-hidden shadow-xl border border-orange-100 bg-white transition-all duration-700">

              {servicesData.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={service.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${isActive ? 'scale-100' : 'scale-105'}`}
                    />

                    {/* Overlay Graphic */}
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-12">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg backdrop-blur-sm"
                        style={{ background: `linear-gradient(135deg, ${service.color} 0%, #f38c24 100%)` }}
                      >
                        <Icon size={28} className="text-white" />
                      </div>
                      <h3 className="text-white text-3xl font-bold mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <div className="flex gap-2 items-center">
                        <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
                        <span className="text-white/80 font-mono tracking-widest text-sm">
                          0{index + 1} / 06
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Scrolling Right Content */}
          <div className="w-full lg:w-1/2 lg:pt-0 lg:pb-12 flex flex-col gap-12">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.id}
                  data-index={index}
                  // Increased padding from py-16 to py-24 to increase right card height by 15%+
                  className={`service-section py-24 px-4 lg:px-8 rounded-2xl transition-all duration-500 flex flex-col justify-center origin-top ${isActive
                      ? 'opacity-100 bg-white shadow-xl shadow-orange-900/5 scale-[1.01] border border-orange-100/50'
                      : 'opacity-40 lg:opacity-30 scale-100'
                    }`}
                >
                  {/* Mobile-only visual layout */}
                  <div className="lg:hidden w-full h-[240px] rounded-2xl overflow-hidden mb-6 relative">
                    <img src={service.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{ background: `linear-gradient(135deg, ${service.color} 0%, #f38c24 100%)` }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>

                  <span className={`text-5xl font-black mb-4 block font-mono transition-colors duration-300 ${isActive ? 'text-[#f38c24]/20' : 'text-slate-900/5'}`}>
                    0{index + 1}
                  </span>

                  <h3 className="text-3xl font-bold text-slate-900 mb-5 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                    {service.description}
                  </p>

                  <div className="mt-8">
                    <button className="flex items-center gap-4 font-bold text-base group text-slate-800">
                      <span className={`border-b-2 pb-1 transition-colors duration-300 ${isActive ? 'border-[#f38c24]' : 'border-transparent group-hover:border-slate-400'}`}>
                        Explore This Service
                      </span>
                      <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive
                          ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-transparent shadow-sm'
                          : 'bg-white border-slate-200 group-hover:border-[#f38c24] text-slate-700'
                        }`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
