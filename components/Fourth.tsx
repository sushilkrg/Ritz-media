
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Sikka",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop",
  },
  {
    name: "TDI",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop",
  },
  {
    name: "Maasters",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop",
  },
  {
    name: "Landmark",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop",
  },
  {
    name: "ACE",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop",
  },
];

export default function Fourth() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto flex max-w-[1600px] flex-col px-4 md:flex-row md:items-center">
        {/* Header */}
        <div className="flex items-center justify-between md:min-w-[280px] md:justify-start">
          <h2 className="text-2xl font-bold leading-tight text-black md:text-[36px] md:leading-[1.1]">
            Brands That
            <br />
            Trust Us
          </h2>

          {/* Desktop Divider + Arrow */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-16 h-48 w-px bg-gray-300" />
            <ChevronRight
              size={30}
              strokeWidth={1.5}
              className="-ml-[2px] text-gray-300"
            />
          </div>
        </div>

        {/* Logos + Button */}
        <div className="mt-8 flex flex-col md:mt-0 md:flex-1">
          {/* Horizontal logos */}
          <div className="flex items-center gap-6 overflow-x-auto pb-2 md:justify-evenly md:overflow-visible">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex h-24 w-28 flex-shrink-0 items-center justify-center md:h-36 md:w-44"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={180}
                  height={90}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Show More */}
          <div className="mt-6 flex justify-center md:justify-end">
            <Link
              href="#"
              className="text-base font-medium underline underline-offset-4 text-black transition hover:text-[#C88A2C] md:text-[20px]"
            >
              Show more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}