"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, TrendingUp, Users, Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const stories = [
  {
    category: "Luxury Real Estate",
    title: "Digital Advertising",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    description:
      "Our digital advertising case studies showcase how smart targeting, compelling creatives, and data-driven optimisation translate into real business outcomes. Explore how brands across sectors achieved higher visibility, stronger engagement, and measurable conversions through strategic, performance-focused campaigns.",
    stats: [
      {
        value: "250%",
        label: "Increase in qualified leads",
        icon: TrendingUp,
      },
      {
        value: "85%",
        label: "Target audience reach",
        icon: Users,
      },
      {
        value: "40%",
        label: "Conversion rate",
        icon: Globe,
      },
    ],
  },
];

export default function Seventh() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-lg uppercase tracking-wide text-[#C88A2C]">
              Proven Results
            </p>

            <h2 className="mt-2 text-6xl font-bold text-black">
              Success Stories That Inspire
            </h2>

            <p className="mt-5 text-2xl text-gray-700">
              Real challenges. Creative solutions. Measurable results
            </p>
          </div>

          <div className="hidden gap-4 lg:flex">
            <button className="story-prev flex h-12 w-12 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition">
              <ArrowLeft className="h-6 w-6 stroke-current" />
            </button>

            <button className="story-next flex h-12 w-12 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition">
              <ArrowRight className="h-6 w-6 stroke-current" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".story-prev",
            nextEl: ".story-next",
          }}
          slidesPerView={1}
          className="mt-14"
        >
          {stories.map((story) => (
            <SwiperSlide key={story.title}>
              <div className="grid gap-10 lg:grid-cols-2">
                {/* Left Image */}
                <div>
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={850}
                    height={650}
                    className="h-[580px] w-full object-cover"
                  />
                </div>

                {/* Right */}
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-[20px] font-medium text-[#C88A2C]">
                      {story.category}
                    </span>

                    <h3 className="mt-5 text-5xl font-semibold text-black">
                      {story.title}
                    </h3>

                    <p className="mt-8 text-[22px] leading-10 text-gray-700">
                      {story.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-16 grid grid-cols-3 border-t border-gray-200">
                    {story.stats.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className={`flex flex-col items-center py-10 text-center ${
                            index !== 2 ? "border-r border-gray-200" : ""
                          }`}
                        >
                          <Icon
                            size={34}
                            strokeWidth={1.5}
                            className="text-[#C88A2C]"
                          />

                          <h4 className="mt-5 text-3xl md:text-5xl font-bold text-black">
                            {item.value}
                          </h4>

                          <p className="mt-4 text-xl text-gray-700">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
