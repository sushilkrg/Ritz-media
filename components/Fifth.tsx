"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "We plan and create content that attracts, educates and nurtures your audience, building brand authority, engagement and high-quality leads.",
    button: "Explore Digital Marketing",
  },
  {
    id: "02",
    title: "Creative Service",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Creative campaigns designed to make your brand memorable across every touchpoint.",
    button: "Explore Creative Service",
  },
  {
    id: "03",
    title: "Print Advertisement",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Print advertising solutions that increase brand awareness and audience engagement.",
    button: "Explore Print",
  },
  {
    id: "04",
    title: "Radio Advertisement",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Reach local audiences effectively through radio advertising campaigns.",
    button: "Explore Radio",
  },
  {
    id: "05",
    title: "Content Marketing",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    description:
      "High-quality content that builds trust and improves search visibility.",
    button: "Explore Content",
  },
  {
    id: "06",
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Modern, fast and scalable websites tailored to your business.",
    button: "Explore Web Development",
  },
  {
    id: "07",
    title: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    description:
      "Connect with creators that amplify your brand message.",
    button: "Explore Influencer",
  },
  {
    id: "08",
    title: "Celebrity Endorsement",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Partner with celebrities to elevate brand recognition.",
    button: "Explore Celebrity",
  },
];

export default function Fifth() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <h2 className="text-6xl font-bold text-black">
          Choose Your Brand Journey
        </h2>

        <p className="mt-5 text-2xl text-gray-700">
          Tailored growth programmes engineered for the industries and audiences
          most.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Menu */}
          <div>
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActive(index)}
                className="group flex w-full items-center py-6 text-left"
              >
                <span
                  className={`mr-4 text-3xl ${
                    active === index
                      ? "text-black"
                      : "text-gray-300"
                  }`}
                >
                  {service.id}
                </span>

                <div className="flex flex-1 items-center">
                  <h3
                    className={`text-5xl font-bold transition ${
                      active === index
                        ? "text-black"
                        : "text-gray-300 group-hover:text-gray-500"
                    }`}
                  >
                    {service.title}
                  </h3>

                  {active === index && (
                    <div className="ml-8 h-px flex-1 bg-gray-300" />
                  )}
                </div>
              </button>
            ))}

            <p className="mt-12 text-xl text-black">
              Not sure which path fits your brand?{" "}
              <a
                href="#"
                className="font-semibold underline underline-offset-4"
              >
                Let&apos;s discuss your unique needs
              </a>
            </p>
          </div>

          {/* Right Content */}
          <div>
            <Image
              src={services[active].image}
              alt={services[active].title}
              width={700}
              height={450}
              className="w-full rounded object-cover"
            />

            <p className="mt-8 text-xl leading-10 text-gray-700">
              {services[active].description}
            </p>

            <button className="mt-10 rounded border border-[#D89A2D] px-10 py-5 text-lg font-semibold transition text-black hover:bg-[#D89A2D] hover:text-white">
              {services[active].button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}