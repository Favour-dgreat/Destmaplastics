'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Zap, TrendingUp, CheckCircle, Box, Phone } from 'lucide-react';
import FeaturedProductsSlider from '@/components/FeaturedProductsSlider';
import MotionReveal from '@/components/MotionReveal';
import PageHero from '@/components/fx/PageHero';
import FloatingTiles from '@/components/fx/FloatingTiles';

interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  badge: string;
  spec: string;
}

const FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    id: 'crate',
    name: 'AgroMax™ 500kg Agricultural Harvest Crate',
    category: 'Logistics & Agro-Allied',
    image: '/images/1ONtk.jpg',
    badge: '500 KG Stacking Tested',
    spec: '100% Virgin Food-Grade HDPE • Airflow Ventilation Channels',
  },
  {
    id: 'closure',
    name: 'AeroSeal™ 38mm Tamper-Evident Closure',
    category: 'Beverage & Pharmaceuticals',
    image: '/images/LtNRt.jpg',
    badge: '12-Bar Pressure Seal',
    spec: 'Hermetic Leak-Proof Lip • Visual Break-Ring • 36k/hr Line Speed',
  },
  {
    id: 'chair',
    name: 'Comfort™ Ergonomic Bear Nursery Chair',
    category: 'Institutional & Education',
    image: '/images/HS4hb.jpg',
    badge: 'BPA-Free Shatterproof',
    spec: 'Heavy Impact Polypropylene • Splayed Anti-Topple Legs',
  },
  {
    id: 'stool',
    name: 'WonderStool™ Heavy Reinforced Stool',
    category: 'Commercial & Dining',
    image: '/images/fT56I.jpg',
    badge: '180 KG Center Load',
    spec: 'Internal Truss Ribbing Grid • Permanent In-Mould Graphics',
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const activeProd = FEATURED_PRODUCTS[selectedProduct];

  return (
    <div className="bg-[#03091e] text-white selection:bg-blue-600 selection:text-white">

      {/* =========================================================================
          HERO SECTION (FLOATING PRODUCT TILES)
         ========================================================================= */}
      <PageHero
        eyebrow="Quality • Strength • Value"
        lines={['Built tough.', 'Moulded *precise.*']}
        description="Crates that carry 500kg, closures that hold 12 bar, and chairs kids can't break — every product is moulded from food-grade virgin plastic on our own plant floor."
        actions={
          <>
            <Link
              href="/products"
              className="sheen inline-flex items-center gap-2 px-7 py-4 rounded-sm bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-[#004EAB]/40 transition-colors fluid-button"
            >
              Explore products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-sm border border-white/25 hover:border-green-400 hover:text-green-300 text-white text-xs font-bold uppercase tracking-widest transition-colors fluid-button"
            >
              Request a quote
            </Link>
          </>
        }
        aside={<FloatingTiles />}
      />

      {/* =========================================================================
          PRODUCTION LINES SHOWCASE SECTION
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden relative">
        <FeaturedProductsSlider />
      </section>

      {/* =========================================================================
          THE THREE PILLARS (BRAND GREEN BAND WITH WHITE CARDS)
         ========================================================================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a7f35] via-[#22923f] to-[#2aa54a] relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-white/10 blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <MotionReveal direction="up" delay={60} duration={750}>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-green-100">
                MANUFACTURING BENCHMARKS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
                Quality • Strength • Value
              </h2>
              <p className="mt-2 text-sm text-green-50/90">
                Formulated with virgin polymers and verified through stringent stress testing.
              </p>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Quality */}
            <MotionReveal direction="up" delay={120} duration={750} className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-green-950/20 space-y-4 fluid-card h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004EAB] border border-blue-100 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#004EAB]">STANDARD I</span>
                <h3 className="text-xl font-bold uppercase text-slate-900">Uncompromising Quality</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Strict virgin polymer pellets only. Food-grade certified HDPE and Polypropylene
                  ensure zero toxic migration, glass-smooth finishes, and zero structural burrs.
                </p>
              </div>
            </MotionReveal>

            {/* Strength */}
            <MotionReveal direction="up" delay={240} duration={750} className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-green-950/20 space-y-4 fluid-card h-full">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 border border-green-100 flex items-center justify-center font-bold">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">STANDARD II</span>
                <h3 className="text-xl font-bold uppercase text-slate-900">Superior Strength</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Engineered with internal cross-hatch load trusses and UV inhibitors. Stacking crates
                  withstand up to 500kg vertical load without buckling or stress-cracking.
                </p>
              </div>
            </MotionReveal>

            {/* Value */}
            <MotionReveal direction="up" delay={360} duration={750} className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-green-950/20 space-y-4 fluid-card h-full">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 border border-green-100 flex items-center justify-center font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">STANDARD III</span>
                <h3 className="text-xl font-bold uppercase text-slate-900">Unbeatable Factory Value</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Direct plant supply eliminates middlemen surcharges. Dependable 48-hour restocking
                  and high-volume contract fulfillment across Nigeria give commercial partners sustained margin advantages.
                </p>
              </div>
            </MotionReveal>

          </div>

        </div>
      </section>

      {/* =========================================================================
          B2B PROFORMA BANNER (WITH ANIMATED GREEN & YELLOW MOTION BORDER)
         ========================================================================= */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Animated Green & Yellow Glowing Border Frame with MotionReveal */}
          <MotionReveal direction="scale" delay={80} duration={800}>
            <div className="relative group p-[2.5px] rounded-[28px] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,200,83,0.25)]">
              
              {/* Ambient Green & Yellow Pulsing Halo Blur */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 via-amber-400/35 to-emerald-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Moving Green & Yellow Rotating Conic Gradient Beam */}
              <div className="absolute -inset-[150%] animate-spin-border bg-[conic-gradient(from_0deg_at_50%_50%,#00c853_0%,#ffab00_25%,#00c853_50%,#ffab00_75%,#00c853_100%)]"></div>

              {/* Inner Content Card (High-Tech Deep Sapphire / Navy Glass) */}
              <div className="relative bg-gradient-to-r from-[#03143d] via-[#051336] to-[#041238] rounded-[26px] p-10 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 z-10">
                <div className="space-y-3 max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Reachout to our Contact DESK</span>
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                    Ready to Order or Inquire About Our Services
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Connect directly with our factory contact desk for current inventory,
                    wholesale volume discounts, or custom OEM branding.
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-[#004EAB]/40 inline-flex items-center gap-2 rounded-xl border border-white/20 fluid-button"
                  >
                    <span>Send a Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </MotionReveal>

        </div>
      </section>

    </div>
  );
}
