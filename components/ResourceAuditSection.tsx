import { Download, ArrowRight } from "lucide-react";

export default function ResourceAuditSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT CARD */}

          <div className="bg-[#F7F7F7] p-12">
            <p className="uppercase text-[#C98A27] text-[18px] font-medium tracking-wide mb-5">
              FREE RESOURCE
            </p>

            <h2 className="text-[40px] font-bold text-black leading-[1.08] mb-8">
              Brand Impact Report 2026
            </h2>

            <p className="text-[#2F2F2F] text-[20px] leading-10 mb-10">
              Get exclusive insights into real estate trends, strategies, and
              ROI benchmarks for 2026.
            </p>

            <ul className="space-y-7 mb-12">
              <li className="flex items-center gap-4 text-[20px] text-[#111]">
                <span className="w-3 h-3 rounded-full bg-black"></span>
                Industry benchmarks for real estate marketing ROI
              </li>

              <li className="flex items-center gap-4 text-[20px] text-[#111]">
                <span className="w-3 h-3 rounded-full bg-black"></span>
                Proven strategies for UHNI audience targeting
              </li>

              <li className="flex items-center gap-4 text-[20px] text-[#111]">
                <span className="w-3 h-3 rounded-full bg-black"></span>
                2026 digital and print advertising trends
              </li>

              <li className="flex items-center gap-4 text-[20px] text-[#111]">
                <span className="w-3 h-3 rounded-full bg-black"></span>
                Case studies with measurable results
              </li>
            </ul>

            {/* Input */}

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your phone (e.g., +91 9220516777)"
                className="flex-1 h-16 border border-gray-300 rounded-md px-6 text-lg outline-none focus:border-[#C98A27]"
              />

              <button className="bg-[#C98A27] hover:bg-[#b97c22] text-white px-10 rounded-md font-semibold text-xl flex items-center gap-3 transition">
                Free Download
                <Download size={22} />
              </button>
            </div>

            <p className="mt-6 text-[#777] text-lg">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          {/* RIGHT CARD */}

          <div className="relative border border-[#D9D9D9] p-12 overflow-hidden">
            <h2 className="text-[40px] font-bold leading-[1.08] text-black">
              Or Get a Free <span className="text-[#C98A27]">Brand Audit</span>
            </h2>

            <p className="text-[20px] text-[#2F2F2F] leading-10 mt-8 max-w-xl">
              Let our experts analyze your current brand positioning and provide
              actionable recommendations.
            </p>

            <ul className="space-y-6 mt-8">
              {[
                "Comprehensive brand analysis",
                "Competitor positioning review",
                "Growth opportunity identification",
                "Customized strategy roadmap",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-black text-[20px] font-normal leading-[32px]"
                >
                  <span className="w-3 h-3 rounded-full bg-black flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}

            <div className="mt-8 inline-block">
              <button className="flex items-center gap-5 text-[22px] font-semibold text-black">
                Request A Free Audit
                <ArrowRight size={28} />
              </button>

              <div className="border-b border-black mt-3 w-full"></div>
            </div>

            {/* Image */}

            <img
              src="/images/audit.png"
              alt=""
              className="absolute bottom-0 right-0 w-[330px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
