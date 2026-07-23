"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Services", href: "#" },
  { name: "Our Work", href: "#" },
  { name: "Company", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://ritzmediaworld.com/logo/rmw.logo.png"
            alt="Logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-semibold text-white transition hover:text-yellow-400"
            >
              {item.name}
            </Link>
          ))}

          <button className="rounded-md bg-[#C78C28] px-8 py-3 font-semibold text-white transition hover:bg-[#B57B1E]">
            Free Consulting
          </button>

          <button className="text-white">
            <Menu size={34} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden text-white">
          <Menu size={32} />
        </button>
      </nav>
    </header>
  );
}