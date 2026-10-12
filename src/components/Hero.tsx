'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Sparkles, Box, CheckCircle2, Factory, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const [activeHeroTab, setActiveHeroTab] = useState<'crates' | 'closures' | 'furniture'>('crates');

  const heroShowcases = {
    crates: {
      title: 'AgroMax™ Heavy-Duty Stacking Crate',
      tagline: '500kg Load Rated • Harvest & Cold-Chain Logistics',
      image: '/images/1ONtk.jpg',
      stat: '500 KG',
      statLabel: 'Static Stacking Load',
      resin: 'Virgin HDPE (Food-Grade)',
      link: '#products',
      features: ['Ventilated side walls', 'Anti-slip interlocking base', 'UV Stabilized']
    },
    closures: {
      title: 'AeroSeal™ Precision Tamper-Evident Closures',
      tagline: 'Hermetic Leak-Proof Sealing • 12-Bar Pressure Rated',
      image: '/images/LtNRt.jpg',
      stat: '12 BAR',
      statLabel: 'Gas Retention Seal',
      resin: 'Polypropylene Copolymer',
      link: '#products',
      features: ['Zero-leak linerless seal', 'Instant visual break ring', '36k/hr line speed']
    },
    furniture: {
      title: 'Destma Comfort™ Ergonomic Bear Chair',
      tagline: 'Shatter-Resistant Child Seating • Non-Toxic Polymers',
      image: '/images/HS4hb.jpg',
      stat: '90 KG',
      statLabel: 'Tested Child Safety Load',
      resin: 'BPA-Free Pure Polypropylene',
      link: '#products',
      features: ['Anti-tip splayed legs', 'Glossy wipe-clean finish', 'Stackable up to 12']
    }
  };

  const current = heroShowcases[activeHeroTab];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28 bg-gradient-to-b from-white via-[#f4f8ff] to-[#edf4fe]">
      {/* Dynamic Background Light Fields & Droplet Glows (Matching Logo: Blue, Green, Gold) */}
      <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-blue-400/15 blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-400/15 blur-[120px] pointer-events-none animate-float"></div>
      <div className="absolute bottom-[0%] left-[25%] w-[450px] h-[450px] rounded-full bg-amber-400/10 blur-[130px] pointer-events-none"></div>

      {/* Subtle Dot Grid Backdrop */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Brand Core */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Chip with Logo Colors */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 shadow-sm backdrop-blur-md mb-6">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                Direct-From-Manufacturer • West Africa’s Leading Plastics Innovator
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-950">
              Engineering{' '}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                High-Precision
              </span>{' '}
              Plastics with{' '}
              <span className="relative whitespace-nowrap">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                  Zero Compromise
                </span>
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-emerald-500 opacity-90"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 9.5C50 2 150 2 198 9.5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
              At <strong className="text-slate-900 font-extrabold">Destma Plastic</strong>, we bring unmatched durability and precision to 
              industrial harvest crates, leak-proof closures, ergonomic seating, and premium household essentials. 
              Built on three unbreakable pillars:{' '}
              <span className="text-blue-600 font-bold">Quality</span>,{' '}
              <span className="text-emerald-600 font-bold">Strength</span>, and{' '}
              <span className="text-amber-600 font-bold">Value</span>.
            </p>

            {/* Key Assurance Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Virgin & Food-Grade Resins</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Heavy Impact & Drop Tested</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Factory className="w-4 h-4 text-amber-600" />
                <span>Custom OEM Tooling & In-Mould Labelling</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#products"
                className="flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-base shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Product Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-base shadow-sm hover:border-emerald-500 transition-all"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Interactive Bulk Estimator</span>
              </button>
            </div>

            {/* Quick Micro Stat Ticker */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 w-full grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">50M+</div>
                <div className="text-xs font-semibold text-slate-500">Products Delivered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">48+</div>
                <div className="text-xs font-semibold text-slate-500">Robotic Presses</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-600">99.9%</div>
                <div className="text-xs font-semibold text-slate-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Showcase (White Theme) */}
          <div className="lg:col-span-5 relative">
            {/* Category Quick Select Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 mb-4 shadow-sm">
              <button
                onClick={() => setActiveHeroTab('crates')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeHeroTab === 'crates'
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Agro Crates
              </button>
              <button
                onClick={() => setActiveHeroTab('closures')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeHeroTab === 'closures'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Bottling Closures
              </button>
              <button
                onClick={() => setActiveHeroTab('furniture')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeHeroTab === 'furniture'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Kids & Seating
              </button>
            </div>

            {/* Showcase Main Display Card with Crisp White Depth */}
            <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-blue-500/20 via-slate-200 to-white shadow-2xl shadow-blue-900/10">
              <div className="relative rounded-[22px] bg-white p-6 sm:p-8 border border-slate-200/80 overflow-hidden">
                {/* Ambient Radial Spotlight */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl pointer-events-none"></div>

                {/* Top Card Bar */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    <Box className="w-3.5 h-3.5 text-blue-600" />
                    <span>Featured Engineering</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  </div>
                </div>

                {/* Showcase Product Visual */}
                <div className="relative w-full h-64 sm:h-72 my-4 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:border-blue-200 transition-all">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  {/* Floating Metric Overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-md">
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                      {current.statLabel}
                    </div>
                    <div className="text-lg font-black text-emerald-600">{current.stat}</div>
                  </div>

                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md">
                    100% Recyclable
                  </div>
                </div>

                {/* Details & Specs */}
                <div className="mt-4 relative z-10">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">{current.tagline}</p>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                        Material Grade
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800">
                        {current.resin}
                      </span>
                    </div>

                    <a
                      href="#products"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xl shadow-slate-300/60 z-20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-black text-lg shadow-sm">
                ✓
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">ISO 9001:2015 Assured</div>
                <div className="text-[11px] font-medium text-slate-500">Zero-Defect Quality Protocol</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
