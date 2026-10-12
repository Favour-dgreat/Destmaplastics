import React from 'react';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Factory, Flame, ShieldCheck, TrendingUp, Truck, Zap } from 'lucide-react';
import PageHero from '@/components/fx/PageHero';
import CountUp from '@/components/fx/CountUp';
import TiltCard from '@/components/fx/TiltCard';
import Ticker from '@/components/fx/Ticker';
import ScrollTimeline from '@/components/fx/ScrollTimeline';
import TestMeters from '@/components/fx/TestMeters';
import MotionReveal from '@/components/MotionReveal';

export const metadata = pageMetadata({
  title: 'About Us — Plastic Injection Moulding Plant in Lagos',
  description:
    'Destma Plastic runs an injection moulding plant in Ikotun-Egbe, Lagos, with presses up to 1,200 tonnes, robotic part handling and an in-house quality lab. Every product is food-grade virgin plastic.',
  path: '/company',
  keywords: ['plastic injection moulding company Lagos', 'plastic factory in Lagos', 'plastic manufacturing plant Nigeria'],
});

const PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Certified Quality',
    body: 'Only pure, food-grade virgin HDPE and PP. Every resin is tested for melt flow, chemical resistance and non-toxic safety.',
  },
  {
    icon: Zap,
    title: 'Structural Strength',
    body: 'Reinforced rib grids, load-bearing corner trusses and UV inhibitors that stand up to tropical sun, drops and heavy stacking.',
  },
  {
    icon: TrendingUp,
    title: 'Commercial Value',
    body: 'Factory-direct pricing cuts distributor markups by up to 35%, with 48-hour restocking to keep your supply moving.',
  },
];

const PROCESS = [
  { stat: '100%', title: 'Virgin resin in', body: 'Prime food-grade HDPE and polypropylene pellets arrive and are checked before they ever reach a hopper — no fillers, no scrap.' },
  { stat: '1,200T', title: 'Moulded under pressure', body: 'Hydraulic and servo-electric presses with up to 1,200 tonnes of clamping force shape every crate, cap and chair.' },
  { stat: '±0.05mm', title: 'Precision tooling', body: 'Hot-runner moulds and robotic part pickers hold tight tolerances shot after shot, with zero sprue waste.' },
  { stat: '500kg', title: 'Tested in our lab', body: 'Each batch is crushed, dropped and pressure-tested before it is cleared for packing.' },
  { stat: '48hr', title: 'Out the gate', body: 'Our own fleet hauls full loads to Lagos, Ibadan, Abuja, Kano and Port Harcourt.' },
];

const MACHINES = [
  { icon: Factory, title: 'High-tonnage presses', body: 'Clamping force up to 1,200 metric tonnes for large structural crates and multi-cavity moulds.' },
  { icon: Cpu, title: 'Automated robotics', body: 'Servo 3-axis robots handle rapid part removal and automated in-mould labelling.' },
  { icon: Flame, title: 'Hot-runner systems', body: 'Temperature-controlled valve-gate moulds that eliminate plastic sprue waste.' },
  { icon: Truck, title: 'Nationwide freight', body: 'A dedicated fleet hauling full trailer loads across Nigeria’s major cities.' },
];

const TESTS = [
  { label: 'Compression', detail: 'static crate stacking load', value: 100, display: '500 kg' },
  { label: 'Drop impact', detail: 'cold-temperature drop test', value: 100, display: '−5 °C' },
  { label: 'Seal pressure', detail: 'beverage closure retention', value: 100, display: '12 bar' },
  { label: 'Colour match', detail: 'spectrophotometer check', value: 100, display: 'Every batch' },
];

export default function CompanyPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/company' }])} />
      <PageHero
        crumb="About us"
        eyebrow="Ikotun-Egbe, Lagos"
        lines={['Plastic that', 'works *harder.*']}
        description="Destma Plastic is a heavy-duty injection moulding plant. We engineer food-grade, long-lasting plastic products that keep Nigeria’s farms, bottling lines, schools and homes running."
        image="/images/industrial_moulding_hero.jpg"
        actions={
          <>
            <Link
              href="/contact"
              className="sheen inline-flex items-center gap-2 px-7 py-4 rounded-sm bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-[#004EAB]/40 transition-colors fluid-button"
            >
              Book a factory visit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-sm border border-white/25 hover:border-green-400 hover:text-green-300 text-white text-xs font-bold uppercase tracking-widest transition-colors fluid-button"
            >
              See our machinery
            </a>
          </>
        }
        aside={
          <div className="grid grid-cols-2 gap-4">
            {[
              { el: <CountUp to={120000} suffix="+" />, label: 'Units moulded every month' },
              { el: <CountUp to={1200} suffix="T" />, label: 'Maximum clamping force' },
              { el: <><span>±</span><CountUp to={0.05} decimals={2} suffix="mm" /></>, label: 'Tooling tolerance' },
              { el: <CountUp to={100} suffix="%" />, label: 'Virgin polymer, zero scrap' },
            ].map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md p-5 sm:p-6 hover:bg-white/15 hover:border-green-400/60 transition-colors"
                style={{ animation: `float-gentle ${5 + i}s ease-in-out ${i * 0.4}s infinite` }}
              >
                <div className="text-2xl sm:text-3xl xl:text-4xl font-black text-white whitespace-nowrap">{s.el}</div>
                <div className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-300">{s.label}</div>
                <div className="mt-4 h-1 w-10 rounded-full bg-green-400" />
              </div>
            ))}
          </div>
        }
      />

      <Ticker items={['Quality', 'Strength', 'Value', 'Food-grade certified', 'Made in Nigeria', '100% virgin polymer']} />

      {/* ================= OUR STORY (WHITE) ================= */}
      <section className="relative overflow-hidden bg-white text-slate-900">
        <div className="absolute inset-0 bg-dots-light [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Photo collage */}
          <MotionReveal direction="right" className="relative h-[420px] sm:h-[520px]">
            <div className="absolute top-0 left-0 w-[72%] h-[70%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
              <Image src="/images/industrial_moulding_hero.jpg" alt="Injection moulding machines on the Destma plant floor" fill sizes="(max-width: 1024px) 70vw, 480px" className="object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="absolute bottom-0 right-0 w-[56%] h-[56%] rounded-3xl bg-white p-4 shadow-2xl shadow-slate-900/20 rotate-[4deg] hover:rotate-0 transition-transform duration-700 animate-float-gentle">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image src="/images/cAnbr.jpg" alt="Stack of Destma harvest crates" fill sizes="(max-width: 1024px) 56vw, 360px" className="object-contain" />
              </div>
            </div>
            <div className="absolute bottom-[18%] left-[6%] rounded-2xl bg-green-600 text-white px-5 py-4 shadow-xl shadow-green-600/30 animate-float-slow">
              <div className="text-3xl font-black"><CountUp to={35} suffix="%" /></div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-green-100">Average savings, factory direct</div>
            </div>
          </MotionReveal>

          <div>
            <MotionReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">Who we are</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                Made in Nigeria, <br />
                <span className="text-green-600">built to last.</span>
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={120}>
              <p className="mt-6 text-base text-slate-600 leading-relaxed">
                From our plant on Ikotun-Egbe Road in Lagos, we run heavy-tonnage Haitian hydraulic and servo-electric
                injection presses capable of continuous, high-cavity production.
              </p>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Whether it&apos;s an AgroMax™ crate that survives rough rural roads or an AeroSeal™ closure sealing a
                bottling line, we mould with certified virgin resin only — never fillers or degraded scrap.
              </p>
            </MotionReveal>

            <div className="mt-10 grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
              {PILLARS.map((p, i) => (
                <MotionReveal key={p.title} direction="up" delay={200 + i * 100} className="h-full">
                  <TiltCard className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-green-400 hover:shadow-xl hover:shadow-green-600/10 transition-[border-color,box-shadow] duration-500">
                    <span className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white group-hover:rotate-[-8deg] transition-all duration-500">
                      <p.icon className="w-5 h-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-black uppercase">{p.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{p.body}</p>
                  </TiltCard>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PELLET TO PALLET (GREEN) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a7f35] via-[#22923f] to-[#1f8a3a] text-white">
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-[130px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <MotionReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-100">How it&apos;s made</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight">From pellet to pallet</h2>
            <p className="mt-4 text-green-50/90">Scroll to follow a Destma product from raw resin to your warehouse.</p>
          </MotionReveal>
          <ScrollTimeline steps={PROCESS} />
        </div>
      </section>

      {/* ================= MACHINERY (WHITE) ================= */}
      <section id="capabilities" className="scroll-mt-28 bg-slate-50 text-slate-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <MotionReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">Plant machinery</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight">On our plant floor</h2>
            </div>
            <p className="text-slate-500 max-w-md">High-speed injection moulding with robotic sprue pickers, chillers and our own delivery fleet.</p>
          </MotionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MACHINES.map((m, i) => (
              <MotionReveal key={m.title} direction="up" delay={i * 110} className="h-full">
                <TiltCard className="group overflow-hidden rounded-3xl bg-white border border-slate-200 p-7 hover:border-green-400 hover:shadow-2xl hover:shadow-green-600/10 transition-[border-color,box-shadow] duration-500">
                  <span className="absolute -right-6 -top-6 text-[110px] font-black leading-none text-slate-100 group-hover:text-green-50 transition-colors duration-500 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="relative w-14 h-14 rounded-2xl bg-[#03091e] text-white flex items-center justify-center group-hover:bg-green-600 group-hover:scale-110 transition-all duration-500">
                    <m.icon className="w-6 h-6" />
                  </span>
                  <h3 className="relative mt-8 text-lg font-black uppercase">{m.title}</h3>
                  <p className="relative mt-2 text-sm text-slate-500 leading-relaxed">{m.body}</p>
                  <span className="relative mt-6 block h-1 w-0 rounded-full bg-green-500 group-hover:w-16 transition-all duration-500" />
                </TiltCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUALITY LAB (WHITE) ================= */}
      <section id="quality" className="scroll-mt-28 bg-white text-slate-900 border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <MotionReveal direction="right">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">Quality assurance lab</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
              Every batch, <br /> tested to break.
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed max-w-lg">
              Nothing leaves the plant until it passes static compression, cold-drop impact, seal-pressure and colour
              checks in our in-house lab.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="sheen inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-[#004EAB]/30 transition-colors fluid-button"
              >
                Request a quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-slate-200 hover:border-green-500 hover:text-green-700 text-slate-800 text-xs font-bold uppercase tracking-widest transition-colors fluid-button"
              >
                View products
              </Link>
            </div>
          </MotionReveal>

          <MotionReveal direction="left" delay={100}>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.3)]">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-slate-900">Batch test sheet</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" /> All passed
                </span>
              </div>
              <TestMeters meters={TESTS} />
            </div>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
