import {
  Users,
  BadgeCheck,
  Receipt,
  CalendarCheck2,
  Building2,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

export default function WhyChooseUs() {
const services = [
  {
    icon: Users,
    title: "Dedicated Bookkeeping Team",
    description:
      "A consistent team handles your books every month, working inside your existing software so nothing gets lost in handoffs.",
  },
  {
    icon: BadgeCheck,
    title: "GAAP-Aligned Accounting",
    description:
      "Every entry and statement follows US GAAP standards, so your books stay audit-ready and CPA-friendly year round.",
  },
  {
    icon: Receipt,
    title: "Accounts Payable & Receivable",
    description:
      "Vendor bills, client invoices, and collections tracked and reconciled on a consistent monthly schedule.",
  },
  {
    icon: CalendarCheck2,
    title: "Month-End Close Process",
    description:
      "A structured close cycle delivers accurate, finalized financial statements on time, every single month.",
  },
  {
    icon: Building2,
    title: "Built for US Accounting Firms",
    description:
      "We work as a back-office extension for accounting firms managing multiple clients, scaling capacity without scaling headcount.",
  },
];

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Header */}
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
              Reliable bookkeeping, accurate reporting, and dedicated financial support
              for US businesses and accounting firms.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={24}
          loop
          freeMode
          allowTouchMove
          grabCursor
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false, // Left → Right
          }}
          className="!overflow-visible"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <SwiperSlide
                key={index}
                className="!w-[360px] lg:!w-[380px]"
              >
                <div className="group flex h-[330px] flex-col rounded-2xl border border-[#e8e5f4] border-l-4 border-l-transparent bg-[#F8F7FF] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-l-[#cd753a] hover:shadow-[0_15px_40px_rgba(57,47,131,0.10)]">
                  {/* Icon */}
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl border border-[#e8e5f4] bg-white transition-colors duration-300 group-hover:border-[#cd753a]/30">
                    <Icon
                      size={24}
                      className="text-[#392f83]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-[22px] font-bold leading-7 text-[#1a1630]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="flex-1 text-[14px] leading-7 text-[#6b6480]">
                    {service.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#392f83] opacity-20 transition-opacity duration-300 group-hover:opacity-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}