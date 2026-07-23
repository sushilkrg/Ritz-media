"use client"

import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const awards = [
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    title:
      "Best Creative Agency (Real Estate) in Delhi/NCR By Big FM",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    title:
      "Best Real Estate Podcast In India - HT Smartcast Podmasters Awards 2025",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    title:
      "Most Trusted Agency in Delhi/NCR – The Economic Times (2024)",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    title:
      "Excellence in Digital Marketing Innovation",
  },
];

export default function AwardSection() {
  return (
    <section className="relative overflow-hidden bg-[#101120] py-24">
     
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="flex justify-between items-start mb-14">

          <div>
            <p className="text-yellow-500 uppercase tracking-wider text-lg font-medium">
              Achievement Awards
            </p>

            <h2 className="text-6xl font-bold text-white mt-3 leading-tight">
              Awards & Company Recognitions
            </h2>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex gap-4 mt-8">
            <button className="award-prev w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition">
              <ArrowLeft size={24} />
            </button>

            <button className="award-next w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 transition">
              <ArrowRight size={24} />
            </button>
          </div>

        </div>

        {/* Cards */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".award-prev",
            nextEl: ".award-next",
          }}
          spaceBetween={28}
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
          {awards.map((award, index) => (
            <SwiperSlide key={index}>

              <div className="relative border border-yellow-500/40 bg-[#18192a] overflow-hidden">

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white rounded-full px-5 py-2 flex items-center gap-2 z-20 shadow-lg">

                  <Sparkles
                    size={18}
                    className="text-yellow-500 fill-yellow-500"
                  />

                  <span className="text-orange-500 font-medium">
                    Excellence
                  </span>

                </div>

                {/* Image */}
                <div className="h-[390px] overflow-hidden">

                  <img
                    src={award.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* Footer */}
                <div className="bg-[#352d2a] px-6 py-6">

                  <h3 className="text-white text-xl font-medium leading-relaxed">
                    {award.title}
                  </h3>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}