"use client";

import { ArrowRight, ShieldCheck, PieChart, Box, Layers } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";



export default function whychooseus() {
  const services = [
    {
      icon: PieChart,
      title: "Expertise in Strategic Financial Guidance",
      description:
        "I am life text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: ShieldCheck,
      title: "Expertise in Strategic Financial Guidance",
      description:
        "I am life text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Box,
      title: "Expertise in Strategic Financial Guidance",
      description:
        "I am life text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: Layers,
      title: "Expertise in Strategic Financial Guidance",
      description:
        "I am life text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: PieChart,
      title: "Expertise in Strategic Financial Guidance",
      description:
        "I am life text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mb-14 grid gap-10 lg:grid-cols-[480px_1fr]">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#885b67]">
              Discover Our Services
            </span>

            <h2 className="max-w-[500px] text-[52px] font-bold leading-[1.05] text-[#1a1630]">
              We Provide Financial Solutions To Grow Business
            </h2>
          </div>

          <div className="flex items-start lg:justify-end">
            <p className="max-w-[600px] text-[14px] leading-7 text-[#6b6480]">
              Discover a moving experience like no other at Outgrid. We go
              beyond merely transporting items and spreadsheets and get an
              accurate view. Discover a moving experience at Outgrid. We go
              beyond merely.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            loop={true}
            speed={900}
            className="!overflow-visible "
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <SwiperSlide
                  key={index}
                  className="!w-[360px] lg:!w-[380px]"
                >
                  <div className="group flex h-[330px] flex-col rounded-2xl bg-[#F8F7FF] p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(57,47,131,0.08)] border border-transparent hover:border-l-4 hover:border-l-[#cd753a]">
                    {/* Icon */}
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-white border border-[#e8e5f4]">
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
                    <p className="mb-8 text-[14px] leading-7 text-[#6b6480]">
                      {service.description}
                    </p>

                    {/* Arrow / Counter */}
                    <div className="mt-auto flex justify-between items-end">
                      <span className="text-[#392f83] font-bold text-2xl opacity-20 group-hover:opacity-100 transition-opacity">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <button className="flex h-10 w-10 items-center justify-center rounded border border-[#e8e5f4] transition-all duration-200 group-hover:border-[#392f83] group-hover:bg-[#392f83] group-hover:text-white text-[#1a1630]">
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </div>
    </section>
  );
}