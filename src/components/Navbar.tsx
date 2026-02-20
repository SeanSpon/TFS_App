"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/software", label: "Software" },
  { href: "/features", label: "Features" },
  { href: "/reseller", label: "Become a Reseller" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Book a Demo" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top utility bar */}
        <div className="hidden md:flex justify-end items-center py-2 text-sm border-b border-white/10 gap-6">
          <a href="tel:+15022378401" className="hover:text-gold transition-colors">
            (502) 237-8401
          </a>
          <a href="mailto:support@taxfeedersoftware.com" className="hover:text-gold transition-colors">
            support@taxfeedersoftware.com
          </a>
        </div>

        {/* Main nav */}
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tax Feeder Software"
              width={44}
              height={44}
              className="rounded-full"
              priority
            />
            <span className="text-xl font-bold tracking-tight">
              Tax Feeder<span className="text-gold"> Software</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 bg-gold hover:bg-gold-light text-navy font-semibold px-5 py-2.5 rounded-md text-sm transition-colors"
            >
              Free Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 mx-3 bg-gold text-navy font-semibold px-5 py-2.5 rounded-md text-sm text-center"
            >
              Free Demo
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
