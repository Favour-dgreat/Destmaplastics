'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, PhoneCall, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'The 3 Pillars', href: '#pillars' },
    { name: 'Quality Lab', href: '#lab' },
    { name: 'Color Studio', href: '#customizer' },
    { name: 'Quote Estimator', href: '#calculator' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 text-white text-xs py-2 px-4 text-center relative z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-white/20 text-white backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping"></span>
              Plant Operating 24/7
            </span>
            <span className="hidden sm:inline font-medium text-blue-50">
              High-Precision Injection Moulding • Quality • Strength • Value
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold ml-auto">
            <a
              href="tel:+2348147235913"
              className="flex items-center gap-1.5 text-white hover:text-amber-200 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
              <span>+234 814 723 5913</span>
            </a>
            <span className="text-white/40 hidden md:inline">|</span>
            <span className="hidden md:inline text-amber-200 font-semibold">
              ⚡ Guaranteed 48-Hour Dispatch Across Nigeria
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (White Theme) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-blue-900/5 py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white shadow-md p-0.5 border border-slate-200 group-hover:scale-105 transition-transform">
              <Image
                src="/images/DestmaPlastics.jpeg"
                alt="Destma Plastic Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0052cc]">
                  DESTMAS
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-[#00b140] tracking-wider">
                  PLASTIC
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] tracking-widest uppercase font-extrabold text-slate-500">
                <span className="text-[#0052cc]">Quality</span>
                <span>•</span>
                <span className="text-[#00b140]">Strength</span>
                <span>•</span>
                <span className="text-[#f59e0b]">Value</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50/70 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Bulk Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation (White Theme) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Slide Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white border-l border-slate-200 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white p-0.5 border border-slate-200">
                    <Image
                      src="/images/DestmaPlastics.jpeg"
                      alt="Destma Plastic Logo"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <span className="font-black text-[#0052cc] text-base">DESTMA </span>
                    <span className="font-black text-[#00b140] text-base">PLASTIC</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-bold text-base transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 font-bold text-white shadow-lg shadow-blue-900/15"
              >
                <span>Instant B2B Quote</span>
              </button>
              <a
                href="https://wa.me/2348147235913?text=Hello%20Destma%20Plastics,%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-sm"
              >
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
