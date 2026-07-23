import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const brands = [
  {
    name: "Sikka",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "TDI",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Maasters",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Landmark",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ACE",
    logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Fourth() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-[1600px] items-center">
        {/* Left Heading */}
        <div className="flex min-w-[280px] items-center">
          <div>
            <h2 className="text-[36px] font-bold leading-[1.1] text-black">
              Brands That
              <br />
              Trust Us
            </h2>
          </div>

          {/* Divider */}
          <div className="ml-16 h-48 w-px bg-gray-300" />

          {/* Arrow */}
          <ChevronRight
            size={30}
            strokeWidth={1.5}
            className="-ml-[2px] text-gray-300"
          />
        </div>

        {/* Logos */}
        <div className="flex flex-1 items-center justify-evenly">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-36 w-44 items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={90}
                className="object-contain"
              />
            </div>
          ))}

          <Link
            href="#"
            className="text-[20px] font-medium underline underline-offset-4 text-black hover:text-[#C88A2C]"
          >
            Show more
          </Link>
        </div>
      </div>
    </section>
  );
}