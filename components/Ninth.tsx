"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    title: "Creative Meets Performance",
    content:
      "As a trusted digital marketing company, Ritz Media World delivers SEO services, social media marketing, website design, Google Ads, branding, AI-powered creatives, and performance marketing strategies that help businesses improve rankings, boost engagement, and generate leads.",
  },
  {
    title: "SEO & Website Growth",
    content:
      "We optimize your website for search engines and user experience to drive qualified organic traffic.",
  },
  {
    title: "Social Media Marketing",
    content:
      "Build stronger customer relationships through engaging social campaigns across all platforms.",
  },
  {
    title: "Creative Branding Solutions",
    content:
      "We create memorable brand identities that help your business stand out from competitors.",
  },
  {
    title: "AI-Powered Marketing Campaigns",
    content:
      "Leverage AI-driven insights and automation to improve campaign performance and ROI.",
  },
];

export default function Ninth() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="text-lg uppercase tracking-wide text-[#C88A2C]">
            OUR BENEFITS
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight lg:text-4xl text-black">
            Grow Your Business with
            <br />
            A Leading Digital Marketing
            <br />
            Agency
          </h2>

          <div className="mt-12 space-y-8">
            {benefits.map((item, index) => {
              const open = active === index;

              return (
                <div key={item.title}>
                  <button
                    onClick={() => setActive(open ? -1 : index)}
                    className="flex w-full items-center gap-5 text-left"
                  >
                    {open ? (
                      <Minus
                        className="text-[#C88A2C]"
                        size={22}
                      />
                    ) : (
                      <Plus
                        className="text-[#C88A2C]"
                        size={22}
                      />
                    )}

                    <span
                      className={`text-2xl font-medium ${
                        open
                          ? "text-[#C88A2C]"
                          : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>

                  {open && (
                    <p className="mt-6 ml-11 max-w-xl text-xl leading-10 text-gray-700">
                      {item.content}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <div
            className="overflow-hidden"
            style={{
              clipPath:
                "polygon(22% 0%,100% 0%,100% 100%,70% 100%,70% 52%,22% 100%,0% 78%,48% 30%)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
              alt="Benefits"
              width={700}
              height={850}
              className="h-[720px] w-[650px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}