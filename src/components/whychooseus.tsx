"use client";

import { ArrowRight, ShieldCheck, PieChart, Box, Layers } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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
    <section className="overflow-hidden bg-[#EDF5F4] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mb-14 grid gap-10 lg:grid-cols-[480px_1fr]">
          <div>
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[2px] text-[#2F8F83]">
              Discover Our Services
            </span>

            <h2 className="max-w-[500px] text-[52px] font-bold leading-[1.05] text-[#183534]">
              We Provide Financial Solutions To Grow Business
            </h2>
          </div>

          <div className="flex items-start lg:justify-end">
            <p className="max-w-[600px] text-[14px] leading-7 text-[#6E7676]">
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
                  <div className="group flex h-[330px] flex-col rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Icon */}
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EDF5F4]">
                      <Icon
                        size={24}
                        className="text-[#2F8F83]"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-[22px] font-bold leading-7 text-[#183534]">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-8 text-[14px] leading-7 text-[#6E7676]">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-auto">
                      <button className="flex h-10 w-10 items-center justify-center rounded border border-[#DCE6E3] transition-all duration-300 group-hover:border-[#2F8F83] group-hover:bg-[#2F8F83] group-hover:text-white">
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