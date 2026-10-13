import React, { Suspense } from 'react';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import FactoryHero from '@/components/FactoryHero';
import Ticker from '@/components/fx/Ticker';
import MotionReveal from '@/components/MotionReveal';
import ProductsExplorer from '@/components/products/ProductsExplorer';
import ProductsExplorerFromUrl from '@/components/products/ProductsExplorerFromUrl';
import Image from 'next/image';
import TiltCard from '@/components/fx/TiltCard';
import { CUSTOM_PROCESS, MATERIALS, SERVICES } from '@/data/company';

export const metadata = pageMetadata({
  title: 'PET Preforms, Bottles, Caps & Plastic Containers',
  description:
    'Destma Plastic makes PET preforms, PET bottles (100 mL–2 L+), pharmaceutical bottles, HDPE jars, 28/38/44 mm caps and closures, lunch boxes, drinking bottles, stools and crates in Lagos — standard ranges or made to your specification.',
  path: '/products',
  keywords: ['PET preforms Lagos', 'PET bottles manufacturer Nigeria', 'pharmaceutical bottles Nigeria', 'bottle caps supplier Nigeria', '28mm 38mm 44mm closures', 'lunch boxes manufacturer Lagos', 'plastic crates Lagos', 'HDPE containers Nigeria'],
});

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Products', path: '/products' }])} />
      <FactoryHero
        actions={
          <>
            <a
              href="#catalogue"
              className="px-8 py-4 bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black tracking-widest uppercase transition-all shadow-xl shadow-[#004EAB]/50 flex items-center gap-2 fluid-button rounded-sm"
            >
              <span>BROWSE CATALOGUE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact?product=Custom%20Moulding"
              className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-widest uppercase transition-all border border-white/20 backdrop-blur-md fluid-button rounded-sm"
            >
              <span>NEED A CUSTOM MOULD?</span>
            </Link>
          </>
        }
      />

      <Ticker items={['PET preforms', 'PET bottles', 'Pharmaceutical bottles', 'Caps & closures', 'Lunch boxes', 'Drinking bottles', 'Crates & stools', 'OEM • ODM • Private label']} />

      <div id="catalogue" className="scroll-mt-24">
        {/* The fallback is the full, server-rendered grid, so every product is in the HTML for search engines */}
        <Suspense fallback={<ProductsExplorer />}>
          <ProductsExplorerFromUrl />
        </Suspense>
      </div>

      {/* ================= MATERIAL & PROCESS GUIDE ================= */}
      <section className="bg-slate-50 border-t border-slate-200 text-slate-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <MotionReveal direction="up" className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">By material & process</span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-black uppercase tracking-tight">Match the material to the job</h2>
            <p className="mt-4 text-slate-500">Typical strengths are general material characteristics — final selection depends on your application and the approved specification.</p>
          </MotionReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {MATERIALS.map((m, i) => (
              <MotionReveal key={m.code} direction="up" delay={i * 120} className="h-full">
                <TiltCard className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 hover:border-green-400 hover:shadow-2xl hover:shadow-green-600/10 transition-[border-color,box-shadow] duration-500">
                  <div className="relative aspect-[16/10] bg-gradient-to-b from-white to-slate-50">
                    <Image src={m.image} alt={`${m.code} ${m.title}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-7 border-t border-slate-100 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-black text-slate-900">{m.code}</span>
                      <span className="text-sm font-bold text-green-600">{m.title}</span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600">{m.strengths}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {m.uses.map((u) => (
                        <span key={u} className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">{u}</span>
                      ))}
                    </div>
                  </div>
                  <div className="px-7 py-4 bg-[#03091e] text-white text-xs font-bold uppercase tracking-widest">
                    <span className="text-green-400">Process: </span>{m.process}
                  </div>
                </TiltCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CUSTOM MOULDING (GREEN BAND) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a7f35] via-[#22923f] to-[#2aa54a] text-white">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <MotionReveal direction="right">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-100">OEM • ODM • Private label</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                Built to your <br /> specification.
              </h2>
              <p className="mt-5 text-green-50/90 text-base leading-relaxed max-w-lg">
                From product concept to finished packaging — bring an approved mould, a product sample, a drawing or a
                written specification, and we&apos;ll take it from there.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 max-w-lg">
                {SERVICES.map((sv) => (
                  <li key={sv.title} className="rounded-xl bg-white/10 border border-white/20 px-4 py-3">
                    <span className="block text-sm font-black uppercase">{sv.title}</span>
                    <span className="block mt-1 text-xs text-green-50/80 leading-relaxed">{sv.body}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?product=Custom%20Moulding"
                  className="sheen inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-green-800 hover:bg-green-50 text-xs font-black uppercase tracking-widest shadow-xl shadow-green-950/30 transition-colors fluid-button"
                >
                  Start a custom run <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/2348147235913?text=Hello%20Destma%20Plastic%2C%20I%27d%20like%20to%20discuss%20a%20custom%20product."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/40 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest transition-colors fluid-button"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </MotionReveal>

            <ol className="relative grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {CUSTOM_PROCESS.map((s, i) => (
                <MotionReveal key={s.title} direction="up" delay={i * 100}>
                  <li className="group h-full rounded-2xl bg-white text-slate-900 p-6 shadow-xl shadow-green-950/20 fluid-card">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-green-600/20 group-hover:text-green-600 transition-colors duration-500">{String(i + 1).padStart(2, '0')}</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 group-hover:scale-150 transition-transform duration-500" />
                    </div>
                    <h3 className="mt-3 text-base font-black uppercase">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{s.body}</p>
                    <span className="mt-4 inline-block px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider">{s.tag}</span>
                  </li>
                </MotionReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
