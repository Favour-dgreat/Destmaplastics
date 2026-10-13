'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  const productCategories = [
    { name: 'PET Preforms & Bottles', href: '/products?category=preforms' },
    { name: 'Pharmaceutical Bottles & Jars', href: '/products?category=pharma' },
    { name: 'Caps & Closures (28 / 38 / 44 mm)', href: '/products?category=closures' },
    { name: 'Lunch Boxes & Food Containers', href: '/products?category=food' },
    { name: 'Drinking Bottles', href: '/products?category=drinkware' },
    { name: 'Stools, Crates & Household', href: '/products?category=household' },
    { name: 'Kids Chairs', href: '/products?category=furniture' },
    { name: 'Custom Moulds • OEM • Private Label', href: '/products#catalogue' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#03091e]/90 backdrop-blur-md border-y border-white/20 text-white transition-all shadow-2xl">
      
      {/* =========================================================================
          DESKTOP BLUEPRINT GRID NAVIGATION (EXACT LAGUNA PRECISION LAYOUT)
          [ LOGO (Full Height) ] | [ TOP: Address | Phones | Hours ] | [ REQUEST A QUOTE ]
                                   [ BOTTOM: Navigation Links      ]
         ========================================================================= */}
      <div className="hidden lg:block w-full max-w-[1600px] mx-auto px-4 xl:px-8">
        <div className="border-x border-white/20 flex items-stretch h-[84px]">
          
          {/* ================= COLUMN 1: LOGO BLOCK (FULL HEIGHT) ================= */}
          <div className="shrink-0 border-r border-white/20 flex items-center px-6">
            <Link
              href="/"
              className="flex items-center gap-3.5 hover:opacity-95 transition-opacity group"
            >
              {/* Logo Emblem */}
              <div className="w-15 h-15 rounded-sm overflow-hidden bg-white p-0.5 border border-white/25 group-hover:border-white/50 transition-colors shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/images/DestmaPlastics.jpeg"
                  alt="Destma Plastic"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Laguna-Style Bold Industrial Typography */}
              <div className="flex flex-col">
                <span className="text-xl xl:text-2xl font-black tracking-widest text-white leading-none font-sans">
                  DESTMA
                </span>
                <span className="text-xl xl:text-2xl font-black tracking-widest text-green-500 leading-none font-sans uppercase mt-1">
                  PLASTIC 
                </span>
              </div>
            </Link>
          </div>

          {/* ================= COLUMN 2: MIDDLE (TWO HORIZONTAL ROWS) ================= */}
          <div className="flex-1 flex flex-col justify-between min-w-0">
            
            {/* --- TOP ROW: INDUSTRIAL UTILITY DATA (3 CELLS WITH VERTICAL DIVIDERS) --- */}
            <div className="h-[36px] border-b border-white/20 grid grid-cols-[1.5fr_1.3fr] xl:grid-cols-[1.5fr_1.3fr_0.8fr] items-stretch text-[11px] xl:text-xs font-medium text-slate-300">
              
              {/* Cell 1: Physical Plant Address */}
              <div className="border-r border-white/20 px-5 flex items-center text-slate-300">
                <span className="whitespace-nowrap">4 Nick-Chuks Street, Ikotun-Egbe Road, Lagos</span>
              </div>

              {/* Cell 2: Two Phone Numbers */}
              <div className="xl:border-r border-white/20 px-5 flex items-center justify-center gap-4 text-slate-300 whitespace-nowrap">
                <a href="https://wa.me/2348147235913" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +234 814 723 5913
                </a>
                <span className="hidden xl:inline text-white/25">•</span>
                <a href="tel:+2348162965729" className="hidden xl:inline hover:text-white transition-colors">
                  +234 816 296 5729
                </a>
              </div>

              {/* Cell 3: Plant Operations Hours */}
              <div className="hidden xl:flex px-5 items-center justify-end text-slate-300 whitespace-nowrap">
                <span>Mon–Sat  8:00–18:00</span>
              </div>

            </div>

            {/* --- BOTTOM ROW: NAVIGATION BAR (EVENLY DISTRIBUTED, NO VERTICAL DIVIDERS) --- */}
            <nav className="h-[46px] flex items-center justify-between px-6 xl:px-10">
              
              {/* Link 1: HOME */}
              <Link
                href="/"
                className={`text-xs xl:text-[13px] font-bold tracking-widest uppercase transition-colors relative py-1 ${
                  pathname === '/'
                    ? 'text-white font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#004EAB]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                HOME
              </Link>

              {/* Link 2: PRODUCTS ⌵ (WITH DROPDOWN) */}
              <div
                className="relative h-full flex items-center"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href="/products"
                  className={`flex items-center gap-1.5 text-xs xl:text-[13px] font-bold tracking-widest uppercase transition-colors py-1 ${
                    pathname === '/products'
                      ? 'text-white font-black after:absolute after:bottom-2 after:left-0 after:right-4 after:h-[2px] after:bg-[#004EAB]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>PRODUCTS</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
                </Link>

                {/* Dropdown Menu */}
                {productsOpen && (
                  <div className="absolute top-[42px] left-0 w-80 bg-[#03091e]/98 backdrop-blur-xl border border-white/20 shadow-2xl py-2 z-50 animate-scale-in">
                    <div className="px-4 py-2 border-b border-white/10 text-[10px] font-bold uppercase tracking-wider text-sky-400">
                      Product Catalogues & Moulds
                    </div>
                    {productCategories.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setProductsOpen(false)}
                        className="block px-4 py-2.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors font-medium border-l-2 border-transparent hover:border-[#004EAB]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Link 3: ABOUT US / COMPANY */}
              <Link
                href="/company"
                className={`text-xs xl:text-[13px] font-bold tracking-widest uppercase transition-colors relative py-1 ${
                  pathname === '/company'
                    ? 'text-white font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#004EAB]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ABOUT US
              </Link>

             

              {/* Link 6: CONTACTS */}
              <Link
                href="/contact"
                className={`text-xs xl:text-[13px] font-bold tracking-widest uppercase transition-colors relative py-1 ${
                  pathname === '/contact'
                    ? 'text-white font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#004EAB]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                CONTACT
              </Link>

            </nav>

          </div>

          {/* ================= COLUMN 3: REQUEST A QUOTE (FULL HEIGHT) ================= */}
          <div className="shrink-0 border-l border-white/20 flex items-center px-5 xl:px-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 xl:px-7 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-black tracking-widest text-xs xl:text-sm uppercase shadow-lg shadow-green-600/30 hover:shadow-green-500/40 border border-green-400/40 transition-all fluid-button"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET NAVIGATION BAR (< 1024px)
         ========================================================================= */}
      <div className="lg:hidden flex items-center justify-between h-16 px-4">
        
        {/* Mobile Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm overflow-hidden bg-white p-0.5 border border-white/20 flex items-center justify-center shrink-0">
            <img
              src="/images/DestmaPlastics.jpeg"
              alt="Destma Plastic"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider text-white leading-none">
              DESTMA <span className='text-green-500'>PLASTIC</span>
            </span>
            
          </div>
        </Link>

        {/* Mobile Quick Actions */}
        <div className="flex items-center gap-3">
        
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-200 hover:text-white border border-white/20 rounded-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer with fluid slide-down intro */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/20 bg-[#03091e] px-4 py-5 space-y-4 animate-fade-down">
          
          {/* Quick Nav Links */}
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm ${
                pathname === '/' ? 'bg-[#004EAB] text-white' : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm ${
                pathname === '/products' ? 'bg-[#004EAB] text-white' : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              PRODUCTS
            </Link>
            <Link
              href="/company"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm ${
                pathname === '/company' ? 'bg-[#004EAB] text-white' : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              ABOUT US
            </Link>
          
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 text-xs font-bold uppercase tracking-widest rounded-sm ${
                pathname === '/contact' ? 'bg-[#004EAB] text-white' : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Plant Metadata Card */}
          <div className="p-3.5 bg-white/5 border border-white/10 rounded-sm text-xs text-slate-300 space-y-2">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Plant Location</span>
              <span>4 Nick-Chuks Street, beside NNPC Filling Station, opposite The Synagogue, Ikotun-Egbe Road, Lagos, Nigeria</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Inquiries</span>
              <span> +234 814 723 5913 • +234 816 296 5729</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-bold">Operating Hours</span>
              <span>Mon–Sat  8:00–18:00</span>
            </div>
          </div>

          {/* Big CTA */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full py-3 text-center bg-[#004EAB] text-white font-black tracking-widest uppercase text-xs rounded-sm shadow-md fluid-button"
          >
            REQUEST A QUOTE
          </Link>

        </div>
      )}

    </header>
  );
}
