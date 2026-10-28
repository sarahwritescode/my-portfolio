

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E3EBDD] bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          Sarah<span className="text-lime-600">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-lime-700"
            >
              {link.name}
            </Link>
          ))}
          <a
  href="/resume.pdf"
  download="Sarah-Khatun-Resume.pdf"
  className="inline-flex items-center gap-2 rounded-lg bg-lime-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-lime-800"
>
  Download Resume
</a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-lime-50 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-[#E3EBDD] bg-white px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-600 transition hover:text-lime-700"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Sarah-Khatun-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-lime-700 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-lime-800"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
