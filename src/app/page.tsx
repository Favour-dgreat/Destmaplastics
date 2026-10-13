import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Boxes, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import FeaturedProductsSlider from '@/components/FeaturedProductsSlider';
import MotionReveal from '@/components/MotionReveal';
import PageHero from '@/components/fx/PageHero';
import FloatingTiles from '@/components/fx/FloatingTiles';
import CountUp from '@/components/fx/CountUp';
import TiltCard from '@/components/fx/TiltCard';
import { INDUSTRIES, SERVICES, STATS } from '@/data/company';

const PILLARS = [
  { icon: ShieldCheck, label: 'Quality', title: 'Consistent product standards', body: 'Approved PET, HDPE and PP resins, in-process checks and inspection against agreed specifications before anything is released.' },
  { icon: Sparkles, label: 'Flexibility', title: 'Standard & custom requirements', body: 'Choose from our standard range or bring a sample, drawing or mould — colour, closure, branding and format are made to order.' },
  { icon: TrendingUp, label: 'Value', title: 'Efficient manufacturing focus', body: '53 machines across 9 production lines give scalable output and reliable supply for repeat orders and growing demand.' },
];

const FACTORY_PHOTOS = [
  { src: '/images/catalogue/factory-blow-moulding-team.jpg', alt: 'Destma technicians on the PET bottle blowing line', label: 'PET bottle blowing line', className: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/catalogue/factory-material-loading.jpg', alt: 'Operator loading resin into a hopper dryer', label: 'Material loading' },
  { src: '/images/catalogue/factory-preform-injection.jpg', alt: 'Yongliang PET preform injection machine', label: 'Preform injection' },
  { src: '/images/catalogue/factory-production-detail.jpg', alt: 'Close-up of a blow moulding machine in production', label: 'Production detail' },
  { src: '/images/catalogue/factory-finishing-line.jpg', alt: 'Finishing and packaging line', label: 'Finishing & packaging' },
  { src: '/images/catalogue/factory-machine-operator.jpg', alt: 'Operator at an injection moulding machine', label: 'Injection moulding' },
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <PageHero
        eyebrow="Destma Global • Lagos, Nigeria"
        lines={['Built tough.', 'Moulded *precise.*']}
        description="53 machines turning PET, HDPE and PP into preforms, bottles, pharmaceutical containers, caps, lunch boxes and household products — about 1.55 million pieces a day, made to your specification."
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

      {/* ================= CAPACITY STRIP ================= */}
      <section className="relative border-b border-slate-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { el: <CountUp to={STATS.machines} />, label: 'Installed machines' },
            { el: <CountUp to={STATS.lines} />, label: 'Production lines' },
            { el: <CountUp to={1.55} decimals={2} suffix="M" />, label: 'Pieces per day' },
            { el: <><span>≈</span><CountUp to={STATS.piecesPerYearM} suffix="M" /></>, label: 'Pieces per year' },
          ].map((s, i) => (
            <MotionReveal key={s.label} direction="up" delay={i * 90}>
              <div className="border-l-4 border-green-500 pl-5">
                <div className="text-4xl sm:text-5xl font-black text-slate-900">{s.el}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500">{s.label}</div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* ================= PRODUCT SHOWCASE (WHITE) ================= */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden relative">
        <FeaturedProductsSlider />
      </section>

      {/* ================= QUALITY • FLEXIBILITY • VALUE (GREEN) ================= */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1a7f35] via-[#22923f] to-[#2aa54a] relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-white/10 blur-[120px] pointer-events-none"></div>
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal direction="up" delay={60} duration={750}>
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-green-100">Built around reliable production</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">Quality • Strength • Value</h2>
              <p className="mt-2 text-sm text-green-50/90">
                A Nigeria-based manufacturer serving businesses that need dependable plastic products and components.
              </p>
            </div>
          </MotionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <MotionReveal key={p.label} direction="up" delay={120 + i * 120} duration={750} className="h-full">
                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-green-950/20 space-y-4 fluid-card h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 border border-green-100 flex items-center justify-center">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-green-600">{p.label}</span>
                  <h3 className="text-xl font-bold uppercase text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES (WHITE) ================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">8 sectors</span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-black uppercase tracking-tight">Industries we serve</h2>
            </div>
            <p className="text-slate-500 max-w-md">
              Packaging, consumer and industrial markets — solutions developed around your application, material, size, colour and design.
            </p>
          </MotionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind, i) => (
              <MotionReveal key={ind.title} direction="up" delay={(i % 4) * 90} className="h-full">
                <TiltCard className="group overflow-hidden rounded-3xl border border-slate-200 bg-white hover:border-green-400 hover:shadow-2xl hover:shadow-green-600/10 transition-[border-color,box-shadow] duration-500">
                  <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-50 to-white">
                    <Image src={ind.image} alt={ind.title} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-contain p-5 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-green-600 text-white text-xs font-black flex items-center justify-center">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-5 border-t border-slate-100">
                    <h3 className="text-sm font-black uppercase">{ind.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{ind.body}</p>
                  </div>
                </TiltCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACTORY (LIGHT) ================= */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          <MotionReveal direction="right">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">From resin to finished product</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
              Real machines. <br /> <span className="text-green-600">Real people.</span>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              Injection moulding, PET preform injection, PET bottle blowing and HDPE blow moulding — all under one roof
              in Ikotun-Egbe, Lagos, with KONZA, Haitian and Yongliang machines and a team behind every order.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <div key={s.title} className="rounded-2xl bg-white border border-slate-200 p-4 hover:border-green-400 transition-colors">
                  <Boxes className="w-5 h-5 text-green-600" />
                  <div className="mt-2 text-sm font-black uppercase">{s.title}</div>
                </div>
              ))}
            </div>
            <Link
              href="/company"
              className="sheen mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-[#004EAB]/30 transition-colors fluid-button"
            >
              See our capability <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionReveal>

          <div className="grid sm:grid-cols-3 sm:grid-rows-3 gap-4 sm:h-[560px]">
            {FACTORY_PHOTOS.map((p, i) => (
              <MotionReveal key={p.src} direction="scale" delay={i * 100} className={`relative h-56 sm:h-auto ${p.className ?? ''}`}>
                <div className="group relative h-full rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03091e]/70 via-transparent to-transparent" />
                  <span className="absolute left-4 bottom-4 px-3 py-1 rounded-full bg-white/90 text-[10px] font-black uppercase tracking-widest text-slate-900">{p.label}</span>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA (WHITE, ANIMATED BORDER) ================= */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <MotionReveal direction="scale" delay={80} duration={800}>
            <div className="relative group p-[2.5px] rounded-[28px] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,200,83,0.25)]">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 via-amber-400/35 to-emerald-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute -inset-[150%] animate-spin-border bg-[conic-gradient(from_0deg_at_50%_50%,#00c853_0%,#ffab00_25%,#00c853_50%,#ffab00_75%,#00c853_100%)]"></div>
              <div className="relative bg-gradient-to-r from-[#03143d] via-[#051336] to-[#041238] rounded-[26px] p-10 sm:p-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 z-10">
                <div className="space-y-3 max-w-2xl">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>Start with a clear brief</span>
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">Bring your mould, sample or product requirement</h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Send your product, quantity and destination — our team will work with you to produce to specification.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-[#004EAB]/40 inline-flex items-center gap-2 rounded-xl border border-white/20 fluid-button"
                  >
                    <span>Request a quote</span>
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
