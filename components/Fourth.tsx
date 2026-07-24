
import Image from "next/image";
import Link from "next/link";

interface Brand {
  name: string;
  logo: string;
  width?: number;
  height?: number;
}

const BRANDS: Brand[] = [
  { name: "Sikka", logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop", width: 120, height: 50 },
  { name: "TDI", logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop", width: 120, height: 50 },
  { name: "Maasters Infra", logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop", width: 120, height: 50 },
  { name: "Landmark", logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop", width: 120, height: 50 },
  { name: "ACE", logo: "https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?q=80&w=1228&auto=format&fit=crop", width: 120, height: 50 },
];

export default function BrandsTrustUs() {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        
        {/* Left Side Header */}
        <div className="relative flex items-center justify-between w-full md:w-auto md:min-w-[180px] pr-0 md:pr-8">
          <h2 className="text-3xl md:text-3xl font-bold text-black tracking-tight leading-snug">
            Brands That <br className="hidden sm:inline" />
            Trust Us
          </h2>

          {/* Vertical Divider Line with Right Arrow Accent (Visible on desktop) */}
          <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gray-200">
            <span className="absolute top-1/2 -translate-y-1/2 left-0 w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-gray-300" />
          </div>
        </div>

        {/* Brand Logos Grid / Carousel */}
        <div className="w-full flex-1 overflow-x-auto scrollbar-none py-2">
          <div className="flex items-center justify-between min-w-[650px] md:min-w-0 gap-6 lg:gap-10">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="relative flex items-center justify-center h-16 w-28 lg:w-36 opacity-80"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={brand.width || 120}
                  height={brand.height || 50}
                  className="object-contain max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Action Link */}
        <div className="w-full md:w-auto text-right md:pl-4">
          <Link
            href="#"
            className="text-sm font-semibold text-black underline underline-offset-4 hover:text-gray-600 transition-colors whitespace-nowrap"
          >
            Show more
          </Link>
        </div>

      </div>
    </section>
  );
}