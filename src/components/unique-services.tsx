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
    color: "#0F7B6C",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "ap-ar",
    title: "Accounts Receivable & Payable",
    description: "Optimize your cash flow. We manage your invoices, track outstanding payments, and ensure your bills are paid on time, giving you complete visibility into your working capital.",
    icon: ArrowRightLeft,
    color: "#F4B321",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "statements",
    title: "Financial Statement Preparation",
    description: "Gain deep insights into your business performance. We prepare accurate, timely financial statements including balance sheets, income statements, and cash flow reports.",
    icon: FileSpreadsheet,
    color: "#2F8F83",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cfo",
    title: "Virtual CFO Services",
    description: "Get executive-level financial strategy without the full-time cost. Our virtual CFOs provide high-level forecasting, strategy formulation, and financial leadership to drive growth.",
    icon: Briefcase,
    color: "#183534",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tax",
    title: "Tax Preparation Planning",
    description: "Minimize your tax liability with proactive planning. We navigate complex tax codes to ensure compliance while maximizing your deductions and keeping more of your hard-earned revenue.",
    icon: FileSignature,
    color: "#0F7B6C",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "budgeting",
    title: "Budgeting & Forecasting",
    description: "Look into the future of your finances. We build robust budgets and predictive models that help you plan for expansion, manage risks, and make informed strategic decisions.",
    icon: TrendingUp,
    color: "#F4B321",
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
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const rect = (section as HTMLElement).getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-[#EDF5F4] py-24 relative" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-[#0F7B6C] text-[12px] font-bold uppercase tracking-[2px] block mb-4">
            What We Do
          </span>
          <h2 className="text-[48px] font-bold text-[#183534] leading-[1.1] max-w-2xl mx-auto">
            Comprehensive Financial Solutions
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sticky Left Visual Container */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="sticky top-[120px] h-[600px] w-full rounded-[30px] overflow-hidden shadow-2xl transition-all duration-700">
              
              {servicesData.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeIndex === index;
                
                return (
                  <div 
                    key={service.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${isActive ? 'scale-100' : 'scale-110'}`}
                    />
                    
                    {/* Overlay Graphic */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-12">
                      <div 
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg backdrop-blur-md"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon size={36} className="text-white" />
                      </div>
                      <h3 className="text-white text-4xl font-bold mb-4 leading-tight">
                        {service.title}
                      </h3>
                      <div className="flex gap-2 items-center">
                        <div className="w-12 h-1 bg-white rounded-full"></div>
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
          <div className="w-full lg:w-1/2 py-10">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;

              return (
                <div 
                  key={service.id}
                  className={`service-section min-h-[600px] flex flex-col justify-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30 lg:opacity-50'}`}
                >
                  {/* Mobile-only visual */}
                  <div className="lg:hidden w-full h-[250px] rounded-2xl overflow-hidden mb-8 relative">
                    <img src={service.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: service.color }}>
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>

                  <span className="text-6xl font-black text-[#183534]/10 mb-6 block font-serif">
                    0{index + 1}
                  </span>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-[#183534] mb-8 leading-[1.1]">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-[#6E7676] leading-[1.8] max-w-xl">
                    {service.description}
                  </p>

                  <div className="mt-12">
                    <button className="flex items-center gap-4 text-[#183534] font-bold text-lg group">
                      <span className="border-b-2 border-[#F4B321] pb-1 transition-colors group-hover:border-[#0F7B6C]">
                        Explore This Service
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white border border-[#DCE6E3] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0F7B6C] group-hover:border-[#0F7B6C] group-hover:text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
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
