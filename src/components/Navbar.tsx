"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Calculators",
      links: [
        { name: "Crosswind Calculator", href: "/" },
        { name: "Density Altitude", href: "/density-altitude" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Manual Calculation", href: "/manual-guide" },
        { name: "Aircraft Limits", href: "/aircraft-limits" },
      ],
    },
    {
      title: "Guides",
      links: [
        { name: "How to Calculate XW", href: "/guides/how-to-calculate-crosswind" },
        { name: "Landing Techniques", href: "/guides/crosswind-landing-techniques" },
        { name: "POH Limits Explained", href: "/guides/understanding-poh-limits" },
        { name: "Density Altitude Impact", href: "/guides/density-altitude-impact" },
        { name: "The Clock Method", href: "/guides/mastering-the-clock-method" },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
          <Image 
            src="/assets/logo/logo-horizontal-dark.svg" 
            alt="Crosswind Calculator" 
            width={180} 
            height={40} 
            className="h-8 w-auto group-hover:scale-105 transition-transform"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div 
              key={item.title}
              className="relative py-4"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1">
                {item.title}
                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeDropdown === item.title && (
                <div className="absolute top-full left-0 w-56 glass p-2 rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            className="md:hidden text-slate-400 px-2 py-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-6">
              {navItems.map((item) => (
                <div key={item.title} className="space-y-3">
                  <div className="text-sm font-semibold text-white uppercase tracking-wider">{item.title}</div>
                  <div className="pl-4 space-y-3 border-l border-white/10">
                    {item.links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-slate-400 hover:text-cyan-400 transition-colors py-1"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
