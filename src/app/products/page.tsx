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

export const metadata = pageMetadata({
  title: 'Plastic Crates, Bottle Caps, Chairs & Stools',
  description:
    'Shop Destma Plastic products made in Lagos: 500kg-rated harvest crates, 38mm tamper-evident bottle caps, cosmetic flip-top caps, kids bear chairs, folding chairs, play stools and hydration flasks. Wholesale prices, delivery across Nigeria.',
  path: '/products',
  keywords: ['plastic crates Lagos', 'harvest crates for sale Nigeria', 'bottle caps supplier Nigeria', 'plastic chairs wholesale Lagos', 'kids plastic chairs', 'plastic stools Nigeria'],
});

const CUSTOM_STEPS = [
  { n: '01', title: 'Share your idea', body: 'Send a sketch, sample or drawing and your target volumes.' },
  { n: '02', title: '3D CAD & sample', body: 'We model the part and run a test shot for your approval.' },
  { n: '03', title: 'Your colour & logo', body: 'Pantone-matched masterbatch and in-mould logo embossing.' },
  { n: '04', title: 'Mass production', body: 'High-cavity runs with delivery anywhere in Nigeria.' },
];

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

      <Ticker items={['Harvest crates', 'Beverage closures', 'Kids chairs', 'Play stools', 'Hydration flasks', 'Cosmetic caps', 'Custom OEM moulds']} />

      <div id="catalogue" className="scroll-mt-24">
        {/* The fallback is the full, server-rendered grid, so every product is in the HTML for search engines */}
        <Suspense fallback={<ProductsExplorer />}>
          <ProductsExplorerFromUrl />
        </Suspense>
      </div>

      {/* ================= CUSTOM MOULDING (GREEN BAND) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a7f35] via-[#22923f] to-[#2aa54a] text-white">
        <div className="absolute -top-40 -right-20 w-[520px] h-[520px] rounded-full bg-white/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
            <MotionReveal direction="right">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-100">OEM & custom moulding</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                Don&apos;t see it? <br /> We&apos;ll mould it.
              </h2>
              <p className="mt-5 text-green-50/90 text-base leading-relaxed max-w-lg">
                From a new crate size to a branded bottle cap, our tool room takes your product from idea to
                thousands of units — in your colour, with your logo.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact?product=Custom%20Moulding"
                  className="sheen inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-green-800 hover:bg-green-50 text-xs font-black uppercase tracking-widest shadow-xl shadow-green-950/30 transition-colors fluid-button"
                >
                  Start a custom run <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/2348147235913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/40 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest transition-colors fluid-button"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </MotionReveal>

            <ol className="relative grid sm:grid-cols-2 gap-5">
              {CUSTOM_STEPS.map((s, i) => (
                <MotionReveal key={s.n} direction="up" delay={i * 120}>
                  <li className="group h-full rounded-2xl bg-white text-slate-900 p-6 shadow-xl shadow-green-950/20 fluid-card">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-green-600/20 group-hover:text-green-600 transition-colors duration-500">{s.n}</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 group-hover:scale-150 transition-transform duration-500" />
                    </div>
                    <h3 className="mt-3 text-base font-black uppercase">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{s.body}</p>
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
