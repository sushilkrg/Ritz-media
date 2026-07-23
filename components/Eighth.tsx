import Image from "next/image";
import { Play } from "lucide-react";

export default function Eighth() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1600px] px-6">
        <div className="relative overflow-hidden">
          {/* Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
            alt="Marketing Office"
            width={1600}
            height={900}
            className="h-[780px] w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {/* Top Text */}
            <h3 className="text-[70px] font-light uppercase tracking-[0.35em] text-white">
              MORE THAN JUST
            </h3>

            {/* Main Heading */}
            <h1
              className="mt-2 font-serif text-[180px] leading-none"
              style={{ color: "#B88A2A" }}
            >
              Marketing
            </h1>

            {/* Play Button */}
            <button className="mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl transition duration-300 hover:scale-110">
              <Play
                className="ml-1 fill-black text-black"
                size={34}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}