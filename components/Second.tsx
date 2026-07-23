import Image from "next/image";

const stats = [
  {
    value: "1M+",
    label: "Campaigns Executed",
  },
  {
    value: "1K+",
    label: "Happy Clients",
  },
  {
    value: "500+",
    label: "Solutions",
  },
  {
    value: "1B+",
    label: "Impressions",
  },
];

export default function Second() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-8 lg:grid-cols-12">
        {/* Left */}
        <div className="lg:col-span-4">
          <h2 className="max-w-md text-[58px] font-bold leading-[1.05] tracking-[-2px] text-black">
            What can you expect from us?
          </h2>

          <p className="mt-10 max-w-lg text-[21px] leading-[1.7] text-[#111]">
            We create <strong>campaigns</strong> that look great and work even
            better, with consistency you can rely on.
            <br />
            <span className="font-semibold text-[#C88A2C]">
              Ritz Media World
            </span>
            <span className="text-[#C88A2C]">
              {" "}
              , your advertising partner in Noida.
            </span>
          </p>

          <button className="mt-10 rounded-md border border-[#C88A2C] px-14 py-5 text-xl font-medium text-black transition-all duration-300 hover:bg-[#C88A2C] hover:text-white">
            Click to know more
          </button>
        </div>

        {/* Center Image */}
        <div className="flex justify-center lg:col-span-4">
          <Image
            src="https://images.unsplash.com/photo-1532007271951-c487760934ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVsYnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Bulb"
            width={520}
            height={520}
            className="object-contain"
          />
        </div>

        {/* Right Stats */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 border-l border-t border-gray-300">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`
                  flex h-[220px] flex-col items-center justify-center
                  ${
                    index % 2 === 0
                      ? "border-r border-gray-300"
                      : ""
                  }
                  ${
                    index < 2
                      ? "border-b border-gray-300"
                      : ""
                  }
                `}
              >
                <h3 className="text-4xl font-extrabold leading-none tracking-tight text-[#08154D]">
                  {item.value}
                </h3>

                <p className="mt-5 text-center text-[24px] font-medium text-black">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}