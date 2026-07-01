import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide comprehensive bookkeeping, accounting, payroll, tax preparation, financial reporting, and back-office support for US businesses and accounting firms.",
  },
  {
    question: "How does the onboarding process work?",
    answer:
      "Our onboarding includes a discovery call, secure document collection, software access setup, and a dedicated bookkeeping team assigned within 48 hours.",
  },
  {
    question: "What pricing models are available?",
    answer:
      "Choose from flat monthly pricing, transaction-based plans, or customized packages based on your firm's size and bookkeeping requirements.",
  },
  {
    question: "How secure is my data?",
    answer:
      "Your data is protected using bank-level encryption, role-based access, secure cloud infrastructure, and regular security monitoring.",
  },
  {
    question: "Do you support multiple currencies?",
    answer:
      "Yes. We manage multi-currency bookkeeping and reconciliation while maintaining accurate exchange rate records.",
  },
  {
    question: "Can I integrate with my existing ERP?",
    answer:
      "Absolutely. We work with QuickBooks, Xero, NetSuite, Zoho Books, Sage, and many other accounting and ERP platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftFaqs = faqData.filter((_, index) => index % 2 === 0);
  const rightFaqs = faqData.filter((_, index) => index % 2 === 1);
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-2">
        <div className="mb-14 grid gap-10 lg:grid-cols-[720px_1fr] items-end">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              Frequently Asked Questions
            </span>

            <h2 className="max-w-[720px] text-[42px] font-bold leading-[1.08] text-[#1a1630]">
              Everything You Need To Know <br /> About Our Services
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[420px] text-[20px] leading-7 text-[#6b6480]">
              Find answers to the most common questions about our bookkeeping,
              accounting, onboarding process, pricing, and ongoing support.
            </p>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {leftFaqs.map((item) => {
              const index = faqData.indexOf(item);

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[12px] border bg-white transition-all duration-300 ${openIndex === index
                    ? "border-[#cd753a] shadow-[0_18px_45px_rgba(205,117,58,0.12)]"
                    : "border-[#ebe7f3] shadow-[0_8px_30px_rgba(20,20,43,0.05)] hover:shadow-[0_14px_35px_rgba(20,20,43,0.08)]"
                    }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between px-7 py-6 text-left"
                  >
                    <h3 className="pr-6 text-base font-bold leading-8 text-[#1a1630]">
                      {item.question}
                    </h3>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${openIndex === index
                        ? "rotate-180 bg-[#cd753a] text-white"
                        : "bg-[#F8F7FF] text-[#392f83]"
                        }`}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#f2edf8] px-8 py-7">
                          <p className="text-[16px] leading-8 text-[#6b6480]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">
            {rightFaqs.map((item) => {
              const index = faqData.indexOf(item);

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[12px] border bg-white transition-all duration-300 ${openIndex === index
                    ? "border-[#cd753a] shadow-[0_18px_45px_rgba(205,117,58,0.12)]"
                    : "border-[#ebe7f3] shadow-[0_8px_30px_rgba(20,20,43,0.05)] hover:shadow-[0_14px_35px_rgba(20,20,43,0.08)]"
                    }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between px-7 py-6 text-left"
                  >
                    <h3 className="pr-6 text-base font-bold leading-8 text-[#1a1630]">
                      {item.question}
                    </h3>

                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${openIndex === index
                        ? "rotate-180 bg-[#cd753a] text-white"
                        : "bg-[#F8F7FF] text-[#392f83]"
                        }`}
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#f2edf8] px-8 py-7">
                          <p className="text-[16px] leading-8 text-[#6b6480]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}