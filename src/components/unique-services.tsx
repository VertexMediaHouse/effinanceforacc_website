import { useState, useEffect, useRef } from "react";
import {
  Calculator,
  FileSpreadsheet,
  Briefcase,
  FileSignature,
  TrendingUp,
  BrushCleaning
} from "lucide-react";

const servicesData = [
  {
    id: "accounting",
    title: "Accounting and bookkeeping",
    description: "Our professional outsourcing services streamline your financial operations, reduce overhead costs, and ensure absolute compliance.",
    sectionLabel: "Core Accounting & Bookkeeping Services",
    bullets: [
      { label: "Daily Transaction Categorization", detail: "Recording income, expenses, and bank activities accurately." },
      { label: "Bank & Credit Card Reconciliation", detail: "Matching internal books with bank statements monthly." },
      { label: "Payroll Processing", detail: "Calculating wages, managing deductions, and filing payroll taxes." },
      { label: "Tax Compliance Support", detail: "Preparing accurate financial data for seamless year-end tax filing." },
      { label: "Accounts Payable (AP) Management", detail: "Processing vendor invoices and scheduling timely payments." },
      { label: "Accounts Receivable (AR) Management", detail: "Issuing client invoices and tracking outstanding balances." },
    ],
    icon: Calculator,
    color: "#e65c00",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cleanup",
    title: "Clean Up Financial Records",
    description: "Restore accuracy and organization to your financial records by correcting errors, reconciling accounts, and bringing overdue books up to date.",
    sectionLabel: "Financial Records Clean-Up Services",
    bullets: [
      {
        label: "Transaction Reclassification",
        detail: "Correct misclassified income, expenses, assets, liabilities, and equity transactions."
      },
      {
        label: "Duplicate & Error Correction",
        detail: "Identify and remove duplicate entries, fix posting errors, and eliminate inconsistencies."
      },
      {
        label: "Account Reconciliation",
        detail: "Reconcile bank accounts, credit cards, loans, and other balance sheet accounts to ensure accuracy."
      },
      {
        label: "Reporting & Tax Readiness",
        detail: "Prepare clean, reconciled financial records that are ready for financial reporting, audits, and tax filing."
      }
    ],
    icon: BrushCleaning,
    color: "#2f855a",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cfo",
    title: "Virtual CFO Services",
    description: "Get executive-level financial strategy without the full-time cost. Our virtual CFOs drive growth through data-driven leadership.",
    sectionLabel: "Virtual CFO Services",
    bullets: [
      {
        label: "Financial Modeling & Forecasting",
        detail: "Building dynamic projections to predict cash flow runway, revenue targets, and scalability hurdles."
      },
      {
        label: "Cash Flow Optimization",
        detail: "Implementing working capital management strategies to maximize liquidity and control burn rates."
      },
      {
        label: "Tax Optimization Planning",
        detail: "Aligning corporate restructuring and investment decisions with proactive tax-minimisation strategies."
      },
      {
        label: "Budgeting & Strategic Planning",
        detail: "Developing budgets, setting financial goals, and providing strategic insights to support sustainable business growth."
      },
    ],
    icon: Briefcase,
    color: "#884c76",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "statements",
    title: "Financial Statement Preparation",
    description: "Properly structured financial statements provide the foundation for smart decisions, compliance, and growth opportunities.",
    sectionLabel: "Financial Statement Preparation",
    bullets: [
      {
        label: "Tax Readiness",
        detail: "Properly formatted financial statements integrate seamlessly with your annual tax return preparation."
      },
      {
        label: "Business Valuation",
        detail: "Structured financials are mandatory if you plan to sell, merge, or value your company."
      },
      {
        label: "Custom Financials",
        detail: "We also prepare customized financial statements for bank loan applications and annual reporting requirements."
      },
      {
        label: "Management & Compliance Reporting",
        detail: "Prepare accurate financial statements for management, investors, lenders, and regulatory compliance requirements."
      },
    ],
    icon: FileSpreadsheet,
    color: "#a35765",
    image: "https://images.unsplash.com/photo-1579532582937-16c108930bf6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tax",
    title: "Tax Preparation and Planning",
    description: "Minimize your tax liability with proactive planning across entity structure, investments, and income strategies.",
    sectionLabel: "Tax Preparation and Planning",
    bullets: [
      { label: "Entity Structuring", detail: "Optimizing business setups (e.g., S-Corp vs. LLC) to lower self-employment taxes." },
      { label: "Retirement Optimization", detail: "Maximizing pre-tax contributions to 401(k)s, IRAs, or Defined Benefit plans." },
      { label: "Investment Timing", detail: "Harvesting capital losses to offset capital gains." },
      { label: "Income Shifting", detail: "Moving income to family members in lower tax brackets." },
      { label: "Document Review", detail: "Analyzing W-2s, 1099s, K-1s, and receipts." },
      { label: "Form Execution", detail: "Preparing federal, state, and local tax returns." },
      { label: "Credit Maximization", detail: "Identifying missed deductions and industry-specific tax credits." },
    ],
    icon: FileSignature,
    color: "#e65c00",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "budgeting",
    title: "Budgeting and Financial Forecasting",
    description: "Look into the future of your finances with data-driven budgets and predictive models designed for growth.",
    sectionLabel: "Business Budget Preparation",
    bullets: [
      { label: "Annual & Periodic Budgets", detail: "Prepare annual, quarterly, and monthly operating budgets." },
      { label: "Sales Forecasting", detail: "Estimate future sales based on historical trends, market conditions, and business goals." },
      { label: "Cash Flow Projections", detail: "Project future cash inflows and outflows." },
      { label: "Working Capital Improvements", detail: "Recommend working capital improvements." },
      { label: "Budget vs. Actuals Analysis", detail: "Compare actual financial results with the approved budget." },
    ],
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
    <section className="bg-orange-50/40 py-14 md:py-20 lg:py-24 relative" ref={containerRef} id="services">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-12">

        <div className="mb-10 lg:mb-14 grid gap-6 lg:gap-10 lg:grid-cols-[720px_1fr] items-end">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              What We Do
            </span>
            <h2 className="max-w-[720px] text-2xl sm:text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight lg:leading-[1.08] text-[#1a1630]">
              Comprehensive Accounting & Financial Solutions
            </h2>
          </div>
          <p className="max-w-[600px] text-sm sm:text-base leading-7 text-[#6b6480]">
            Effinanceforacc delivers end-to-end accounting and financial
            support for US-based and international businesses alike.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative">

          {/* Sticky Left Visual Container */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <div className="sticky top-24 h-[500px] xl:h-[560px] w-full rounded-2xl overflow-hidden shadow-xl border border-orange-100 bg-white transition-all duration-700">

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
                      <h3 className="text-white text-2xl sm:text-3xl font-bold mb-4 leading-tight">
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
                  id={service.id}
                  data-index={index}
                  className={`service-section py-12 sm:py-16 lg:py-24 px-5 sm:px-6 lg:px-8rounded-2xl transition-all duration-500 flex flex-col justify-center origin-top ${isActive
                    ? 'opacity-100 bg-white shadow-xl shadow-orange-900/5 scale-[1.01] border border-orange-100/50'
                    : 'opacity-40 lg:opacity-30 scale-100'
                    }`}
                >
                  {/* Mobile-only visual layout */}
                  <div className="lg:hidden w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 relative">                    <img src={service.image} className="w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div
                      className="absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{ background: `linear-gradient(135deg, ${service.color} 0%, #f38c24 100%)` }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>

                  <span className={`text-4xl sm:text-5xl font-black mb-4 block font-mono transition-colors duration-300 ${isActive ? 'text-[#f38c24]/20' : 'text-slate-900/5'}`}>
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                    {service.title}
                  </h3>
                  {service.sectionLabel && (
                    <p className="text-xs font-bold uppercase tracking-widest text-[#e65c00] mb-3">
                      {service.sectionLabel}
                    </p>
                  )}

                  <ul className="flex flex-col gap-3 max-w-xl">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-orange-500 to-amber-400"></span>
                        <span className="text-[15px] sm:text-sm text-slate-700 leading-7">
                          <span className="font-semibold text-slate-900">{bullet.label}:</span>{" "}
                          {bullet.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
