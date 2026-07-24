"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    category: "Digital Marketing",
    title: "Digital marketing strategies that drive growth",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    points: [
      "SEO (Search Engine Optimization)",
      "PPC (Google Ads) Services",
      "Social Media Management",
      "ORM (Online Reputation Management)",
    ],
  },
  {
    category: "Creative Services",
    title: "Creative design solutions that elevate brands",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
    points: [
      "Branding & Identity Development",
      "Graphic Design",
      "Logo Design",
      "Print Advertising Design",
    ],
  },
  {
    category: "Print Advertising",
    title: "Print advertising campaigns that maximize impact",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    points: [
      "Ad Placement",
      "Copywriting",
      "Ad Scheduling",
      "Cost Negotiation",
    ],
  },
];

export default function Sixth() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* Heading */}

        <span className="text-[#C88A2C] uppercase tracking-wider">
          What We Do
        </span>

        <div className="mt-2 flex items-end justify-between">
          <div>
            <h2 className="text-6xl font-bold text-black">
              360° Brand Elevation Services
            </h2>

            <p className="mt-4 max-w-5xl text-xl leading-10 text-gray-700">
              Our in-house team masters the entire spectrum of digital
              marketing, from strategy and creative development to
              sophisticated campaigns. Our in-house team masters the entire spectrum
            </p>
          </div>

          <div className="hidden gap-3 lg:flex">
            <button className="service-prev rounded-full border p-3 ">
              <ArrowLeft size={22} className="text-black"/>
            </button>

            <button className="service-next rounded-full border p-3">
              <ArrowRight size={22} className="text-black"/>
            </button>
          </div>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".service-prev",
            nextEl: ".service-next",
          }}
          spaceBetween={28}
          slidesPerView={2.7}
          className="mt-16"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2.2,
            },
            1440: {
              slidesPerView: 2.6,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.title}>
              <article>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={650}
                  height={430}
                  className="h-[390px] w-full object-cover"
                />

                <div className="bg-white px-10 py-8 shadow-sm">
                  <span className="text-xl text-[#C88A2C]">
                    {service.category}
                  </span>

                  <h3 className="mt-3 text-3xl font-semibold leading-tight text-black">
                    {service.title}
                  </h3>

                  <ul className="mt-8 space-y-3 text-xl text-black">
                    {service.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>

                  <Link
                    href="#"
                    className="mt-8 inline-block text-black text-xl font-semibold underline underline-offset-4"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}