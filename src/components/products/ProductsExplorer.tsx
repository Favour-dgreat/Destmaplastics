'use client';

import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, Search, X } from 'lucide-react';
import { PRODUCTS, type Product } from '@/data/plasticsData';
import TiltCard from '@/components/fx/TiltCard';
import QuickView from './QuickView';
import { swatchFor } from './swatches';
import { CATEGORIES, CATEGORY_LABEL } from './categories';

export default function ProductsExplorer({ initialCategory = 'all' }: { initialCategory?: string }) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<Product | null>(null);

  // Sliding pill behind the active filter
  const barRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  useLayoutEffect(() => {
    const measure = () => {
      const btn = barRef.current?.querySelector<HTMLButtonElement>(`[data-cat="${category}"]`);
      if (btn) setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [category]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (!q || `${p.name} ${p.tagline} ${p.description}`.toLowerCase().includes(q))
    );
  }, [category, query]);

  return (
    <section className="relative bg-white text-slate-900 bg-dots-light">
      {/* Sticky filter bar */}
      <div className="sticky top-16 lg:top-[84px] z-30 bg-white/85 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="min-w-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-1 px-1">
            <div ref={barRef} className="relative inline-flex items-center gap-1 p-1 rounded-full bg-slate-100 border border-slate-200">
              <span
                aria-hidden
                className="absolute top-1 bottom-1 rounded-full bg-green-600 shadow-lg shadow-green-600/30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ left: pill.left, width: pill.width }}
              />
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  data-cat={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`relative z-10 px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
                    category === c.id ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <label className="relative md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-white border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/15 transition-all"
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            )}
          </label>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex items-end justify-between mb-8">
          <p className="text-sm text-slate-500">
            Showing <span key={filtered.length} className="inline-block font-black text-slate-900 animate-scale-in">{filtered.length}</span>{' '}
            {filtered.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center animate-fade-up">
            <p className="text-xl font-black uppercase text-slate-900">No products match “{query}”</p>
            <p className="text-sm text-slate-500 mt-2">Try another word, or ask us about a custom mould.</p>
          </div>
        ) : (
          // Re-keying on the filter replays the staggered entrance each time
          <div key={`${category}-${query}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p, i) => (
              <div key={p.id} className="animate-pop-in" style={{ animationDelay: `${i * 70}ms` }}>
                <TiltCard className="group rounded-3xl bg-white border border-slate-200 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.25)] hover:shadow-[0_30px_60px_-20px_rgba(22,163,74,0.35)] hover:border-green-400 transition-[box-shadow,border-color] duration-500 flex flex-col overflow-hidden">
                  <button
                    onClick={() => setActive(p)}
                    className="relative block w-full aspect-[4/3] bg-gradient-to-b from-slate-50 to-white overflow-hidden text-left"
                    aria-label={`Quick view ${p.name}`}
                  >
                    <div className="absolute inset-x-10 bottom-6 h-6 rounded-[50%] bg-slate-900/10 blur-xl transition-all duration-700 group-hover:inset-x-16 group-hover:bg-slate-900/5" />
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-8 mix-blend-multiply transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-translate-y-2 group-hover:-rotate-2"
                    />
                    {p.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#03091e] text-white text-[10px] font-black uppercase tracking-wider">
                        {p.badge}
                      </span>
                    )}
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-600 text-white text-[11px] font-bold uppercase tracking-wider opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <Eye className="w-3.5 h-3.5" /> Quick view
                    </span>
                  </button>

                  <div className="p-6 flex flex-col flex-1 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-green-600">{CATEGORY_LABEL[p.category]}</span>
                    <h3 className="mt-1.5 text-lg font-black uppercase leading-snug text-slate-900">
                      <Link href={`/products/${p.id}`} className="hover:text-green-700 transition-colors">
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.tagline}</p>

                    <div className="mt-5 mb-6 flex items-center justify-between gap-4">
                      <div className="flex -space-x-1.5" aria-label="Available colours">
                        {p.specs.colors.map((c) => (
                          <span
                            key={c}
                            title={c}
                            className="w-6 h-6 rounded-full ring-2 ring-white shadow-sm border border-slate-200 transition-transform duration-300 hover:-translate-y-1 hover:z-10"
                            style={{ background: swatchFor(c) }}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 text-right">{p.specs.material.split(" (")[0]}</span>
                    </div>

                    <div className="mt-auto pt-5 border-t border-slate-100 flex items-center gap-3">
                      <Link
                        href={`/contact?product=${encodeURIComponent(p.name)}`}
                        className="sheen flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest transition-colors"
                      >
                        Inquire <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href={`/products/${p.id}`}
                        className="px-4 py-3 rounded-xl border border-slate-200 text-slate-700 hover:border-green-500 hover:text-green-700 text-xs font-bold uppercase tracking-widest transition-colors"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        )}
      </div>

      {active && <QuickView product={active} label={CATEGORY_LABEL[active.category]} onClose={() => setActive(null)} />}
    </section>
  );
}
