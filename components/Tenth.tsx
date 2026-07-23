"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const journey = [
  {
    year: "2008",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    title: "Foundation",
    description:
      "Ritz Media World launched with a mission to reimagine brand communication for India's growth markets.",
  },
  {
    year: "2012",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    title: "Innovation Leadership",
    description:
      "Pioneered centrespread storytelling in Hindustan Times, setting new creative benchmarks for print.",
  },
  {
    year: "2016",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    title: "Digital Expansion",
    description:
      "Scaled into 360° digital marketing, unifying performance, content and automation for premium brands.",
  },
  {
    year: "2020",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    title: "National Growth",
    description:
      "Expanded operations across India with integrated branding, creative and digital marketing solutions.",
  },
];

export default function Tenth() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 flex items-start justify-between">

          <div>
            <p className="uppercase tracking-wide text-[#C58B2C]">
              OUR JOURNEY
            </p>

            <h2 className="mt-3 text-5xl font-bold text-black">
              17 Years of Brand Excellence
            </h2>

            <p className="mt-5 max-w-4xl text-xl text-gray-700">
              From pioneering print innovations to 360° digital mastery,
              our journey reflects our commitment to excellence.
            </p>
          </div>

          {/* Navigation */}
          <div className="hidden gap-3 lg:flex">

            <button className="journey-prev flex h-12 w-12 items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition">
              <ArrowLeft size={22} />
            </button>

            <button className="journey-next flex h-12 w-12 items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition">
              <ArrowRight size={22} />
            </button>

          </div>
        </div>

        {/* Swiper */}

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".journey-prev",
            nextEl: ".journey-next",
          }}
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {journey.map((item) => (
            <SwiperSlide key={item.year}>
              <div className="relative">

                {/* Timeline Line */}

                <div className="absolute left-0 right-0 top-8 h-[2px] bg-gray-300"></div>

                {/* Year */}

                <div className="relative z-10 mx-auto inline-block bg-white px-4 text-5xl font-bold text-black">
                  {item.year}
                </div>

                {/* Circle Image */}

                <div className="relative z-10 mx-auto mt-10 flex h-52 w-52 items-center justify-center rounded-full border border-gray-300 bg-white">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={180}
                    className="h-44 w-44 rounded-full object-cover"
                  />

                </div>

                {/* Text */}

                <div className="mt-10 text-center">

                  <h3 className="text-3xl font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-lg leading-9 text-gray-700">
                    {item.description}
                  </p>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}