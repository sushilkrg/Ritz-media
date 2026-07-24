"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function BrandResourceSection() {
  const [phone, setPhone] = useState("");

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle download logic here
    console.log("Phone submitted for download:", phone);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Card: Brand Impact Report */}
        <div className="bg-[#f7f7f7] rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-gray-100">
          <div>
            {/* Tagline */}
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#c59238]">
              Free Resource
            </span>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mt-2 mb-4 leading-tight">
              Brand Impact Report 2026
            </h2>

            {/* Subtitle */}
            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
              Get exclusive insights into real estate and lifestyle brand marketing
              trends, strategies, and ROI benchmarks for 2026.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8">
              {[
                "Industry benchmarks for real estate marketing ROI",
                "Proven strategies for UHNI audience targeting",
                "2026 digital and print advertising trends",
                "Case studies with measurable results",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base text-gray-800">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Area */}
          <div>
            <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-3">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone (e.g., +91 9220516777)"
                className="flex-1 px-4 py-3 text-sm rounded-md border text-black border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#c59238] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c59238] hover:bg-[#b0812f] text-white text-sm font-semibold rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                <span>Free Download</span>
                {/* Download Icon */}
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Right Card: Brand Audit */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-4 leading-tight">
              Or Get a Free{" "}
              <span className="text-[#c59238]">Brand Audit</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
              Let our experts analyze your current brand positioning and provide
              actionable recommendations.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8 max-w-lg">
              {[
                "Comprehensive brand analysis",
                "Competitor positioning review",
                "Growth opportunity identification",
                "Customized strategy roadmap",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-sm sm:text-base text-gray-800">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Link & Image Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4">
            <a
              href="#audit"
              className="group inline-flex items-center gap-3 text-sm sm:text-base font-semibold text-black border-b-2 border-black pb-1 hover:text-[#c59238] hover:border-[#c59238] transition-colors"
            >
              <span>Request A Free Audit</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Arch-shaped Image Element */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 self-end -mb-6 -mr-6 sm:-mb-8 sm:-mr-8 flex-shrink-0">
              <div className="w-full h-full rounded-t-full overflow-hidden border-t-2 border-l-2 border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1777906626046-407d486d3e44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D" 
                  alt="Brand Audit Analytics Chart"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}