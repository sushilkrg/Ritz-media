"use client";

import { useState } from "react";
import { Quote, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const textTestimonials = [
  {
    text: "To me, advertising my brand was merely a means to ensure my elongated presence in the market. Thanks to Ritz Media World, my advertisements not only ensured my brand's sustenance but have also got me a great number of quality leads.",
    name: "Madhusudan Ghee",
    designation: "Managing Director",
  },
  {
    text: "If there is one thing serving as a full service digital agency for more than a decade taught us, it has to be the value of relationships. Therefore, our relationship with our clients is both a priority and a point of pride to us.",
    name: "FAIRFOX - EON",
    designation: "Marketing Head",
  },
  {
    text: "They not only make sure that they deliver on their promises, but also educate you on what exactly is needed to be done for your brand, thereby preventing you from under or over spending your precious money.",
    name: "Eldeco Group",
    designation: "Managing Director",
  },
  {
    text: "Ritz Media World consistently exceeded our expectations with their creativity and professionalism.",
    name: "ABC Builders",
    designation: "Director",
  },
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"text" | "video">("text");

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <p className="text-lg font-medium uppercase tracking-wide text-[#C58B2C]">
          CLIENTS TESTIMONIALS
        </p>

        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-2xl font-bold lg:text-4xl text-black">
            What Our Clients Say
          </h2>

          <p className="max-w-2xl text-xl text-gray-700">
            Don&apos;t just take our word for it – hear from the brands we&apos;ve
            helped transform.
          </p>
        </div>

        {/* Tabs */}

        <div className="mt-10 flex items-center gap-5">

          <button
            onClick={() => setActiveTab("text")}
            className={`rounded-md px-8 py-4 text-lg font-medium transition ${
              activeTab === "text"
                ? "bg-[#C58B2C] text-white"
                : "text-black"
            }`}
          >
            Text Tutorial
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`rounded-md px-8 py-4 text-lg font-medium transition ${
              activeTab === "video"
                ? "bg-[#C58B2C] text-white"
                : "text-black"
            }`}
          >
            Video Tutorial
          </button>

        </div>

        {/* TEXT TAB */}

        {activeTab === "text" && (
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
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
            className="mt-12 pb-16"
          >
            {textTestimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-[420px] flex-col justify-between rounded-md bg-white p-12 shadow-md">

                  {/* Testimonial */}

                  <p
                    className="overflow-hidden text-[18px] leading-10 text-gray-700"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 6,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {item.text}
                  </p>

                  {/* Footer */}

                  <div className="flex items-end justify-between">

                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-lg text-gray-600">
                        {item.designation}
                      </p>
                    </div>

                    <Quote
                      size={75}
                      strokeWidth={1.5}
                      className="rotate-180 text-gray-200"
                    />

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* VIDEO TAB */}

        {activeTab === "video" && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative h-[380px] overflow-hidden rounded-lg bg-gray-200"
              >
                <img
                  src="/images/video-thumbnail.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
                    <Play
                      className="ml-1 fill-black text-black"
                      size={32}
                    />
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}