import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaXTwitter, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa6";
import { FiMail, FiPhone} from "react-icons/fi";

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Blogs", href: "/blogs" },
    { label: "Web Stories", href: "/web-stories" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ];

  const services = [
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Print Advertising", href: "/services/print-advertising" },
    { label: "Radio Advertising", href: "/services/radio-advertising" },
    { label: "Creative Services", href: "/services/creative-services" },
    { label: "Content Marketing", href: "/services/content-marketing" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Celebrity Endorsements", href: "/services/celebrity-endorsements" },
    { label: "Influencer Marketing", href: "/services/influencer-marketing" },
  ];

  const socialLinks = [
    { Icon: FaFacebookF, href: "#", label: "Facebook" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaXTwitter, href: "#", label: "Twitter / X" },
    { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { Icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#0a1033] text-gray-300 text-sm font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        
        {/* Left Column - Contact Info */}
        <div className="w-full lg:w-1/4 p-8 lg:p-10 bg-[#080d2b] flex flex-col justify-between space-y-8 border-r border-slate-800/50">
          <div className="space-y-6">
            {/* Logo */}
            <div>
              <Image
                src="https://ritzmediaworld.com/logo/rmw.logo.png" // Replace with your actual logo image path
                alt="RITZ MEDIA WORLD"
                width={160}
                height={60}
                className="w-40 h-auto"
              />
            </div>

            {/* Address */}
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base mb-2">Address</h4>
              <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                402 – 404,<br />
                4th floor Corporate Park,<br />
                Tower A1 Sector 142,<br />
                Noida
              </p>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base mb-2">Email us</h4>
              <a
                href="mailto:info@ritzmediaworld.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white text-xs md:text-sm transition-colors"
              >
                <div className="p-2 border border-slate-700/80 rounded-md bg-[#0a1033]">
                  <FiMail className="w-4 h-4 text-gray-300" />
                </div>
                info@ritzmediaworld.com
              </a>
            </div>

            {/* Call Us */}
            <div className="space-y-1">
              <h4 className="text-white font-bold text-base mb-2">Call us</h4>
              <div className="flex items-start gap-3">
                <div className="p-2 border border-slate-700/80 rounded-md bg-[#0a1033] mt-0.5">
                  <FiPhone className="w-4 h-4 text-gray-300" />
                </div>
                <div className="text-xs md:text-sm text-gray-300 space-y-0.5">
                  <p>+91 9220516777</p>
                  <p>+91 7290002168</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Content, Links, Rating, Badges */}
        <div className="w-full lg:w-3/4 p-8 lg:p-10 flex flex-col justify-between space-y-10">
          
          {/* Top Intro Text */}
          <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-4xl">
            Accelerate your journey to success with result-oriented solutions for
            Digital Advertising, Social Media Management, SEO, and Compelling
            Content backed by more than 17 years of advertising wisdom with a
            wide array of clients across all industries across the Indian
            subcontinent.
          </p>

          {/* Links & Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">Quick Links</h3>
              <ul className="space-y-2.5 text-xs md:text-sm">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="text-[10px] text-gray-400">•</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-white font-bold text-base mb-4">Services</h3>
              <ul className="space-y-2.5 text-xs md:text-sm">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="hover:text-white transition-colors flex items-center gap-2"
                    >
                      <span className="text-[10px] text-gray-400">•</span> {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Google Rating & Social Icons */}
            <div className="space-y-6">
              {/* Google Reviews */}
              <div className="flex items-center gap-3">
                {/* Official Google G Logo SVG */}
                <svg className="w-10 h-10 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <div>
                  <div className="text-xs md:text-sm font-medium text-gray-200">
                    Google reviews
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-white leading-none">
                      5.0
                    </span>
                    <div className="flex text-amber-400 text-sm tracking-widest">
                      ★★★★★
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pt-1">
                {socialLinks.map(({ Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-md bg-[#131b46] flex items-center justify-center text-gray-300 hover:bg-[#1e2a6b] hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Partner Badges */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6">
            <Image
              src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9zb2Z0JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" // Replace with actual path
              alt="INS Member"
              width={100}
              height={40}
              className="h-10 w-auto object-contain bg-white p-1 rounded"
            />
            <Image
              src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9zb2Z0JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" // Replace with actual path
              alt="Meta Business Partner"
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9zb2Z0JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" // Replace with actual path
              alt="Google Partner"
              width={100}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <Image
              src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWljcm9zb2Z0JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" // Replace with actual path
              alt="MSME Certified"
              width={110}
              height={40}
              className="h-10 w-auto object-contain bg-white p-1 rounded"
            />
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-400 pt-2">
            © 2026 <strong className="text-white font-bold">RITZ Media World</strong>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;