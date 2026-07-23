import Image from "next/image";
import { BadgeCheck, Presentation, Rows3 } from "lucide-react";

const features = [
  {
    icon: <BadgeCheck size={42} strokeWidth={1.5} className="text-[#D89A2D]" />,
    title: "Global Reach\nLocal Alignment",
    description:
      "A global mindset aligned with regional market realities.",
  },
  {
    icon: <Presentation size={42} strokeWidth={1.5} className="text-[#D89A2D]" />,
    title: "Outcome-Focused\nExecution",
    description:
      "Experienced teams driving solutions based on business objectives.",
  },
  {
    icon: <Rows3 size={42} strokeWidth={1.5} className="text-[#D89A2D]" />,
    title: "Creative Integrity",
    description:
      "Building work that respects brand identity and long-term credibility.",
  },
];

export default function Third() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1550px] border border-gray-200 bg-white">
        {/* Top Features */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-10 py-12 text-center"
            >
              <div className="mb-5">{item.icon}</div>

              <h3 className="whitespace-pre-line text-[26px] font-semibold leading-tight text-[#08153E]">
                {item.title}
              </h3>

              <p className="mt-5 max-w-sm text-[18px] leading-8 text-gray-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlYW18ZW58MHx8MHx8fDA%3D"
            alt="Our Team"
            width={1550}
            height={850}
            className="h-auto w-full object-cover"
          />

          {/* Play Button */}
          <button className="absolute left-1/2 top-1/2 flex h-18 w-18 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}