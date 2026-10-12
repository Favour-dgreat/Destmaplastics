'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Recycle, ShieldCheck, X } from 'lucide-react';
import type { Product } from '@/data/plasticsData';
import { swatchFor } from './swatches';

interface QuickViewProps {
  product: Product;
  label: string;
  onClose: () => void;
}

export default function QuickView({ product, label, onClose }: QuickViewProps) {
  const gallery = [product.image, ...(product.secondaryImages ?? [])];
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const specs = [
    ['Material', product.specs.material],
    ['Size / Volume', product.specs.capacityOrSize],
    ['Load / Pressure', product.specs.stackingLoad],
    ['Temperature', product.specs.temperatureRange],
    ['Minimum Order', product.specs.moq],
  ].filter(([, v]) => v) as [string, string][];

  // Portal to <body> so the dialog sits above the sticky header's stacking context
  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-label={product.name}>
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-[#03091e]/70 backdrop-blur-sm animate-fade-in cursor-default" />

      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white text-slate-900 rounded-t-3xl sm:rounded-3xl shadow-2xl animate-modal-in">
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:rotate-90 transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Gallery */}
          <div className="bg-gradient-to-br from-slate-50 to-green-50/60 p-6 sm:p-8 md:sticky md:top-0 md:self-start">
            <div className="relative aspect-square rounded-2xl bg-white shadow-inner overflow-hidden ring-1 ring-slate-100">
              <Image key={gallery[shown]} src={gallery[shown]} alt={product.name} fill sizes="(max-width: 768px) 100vw, 480px" className="object-contain p-6 animate-scale-in" />
            </div>
            {gallery.length > 1 && (
              <div className="mt-4 flex gap-3">
                {gallery.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setShown(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`relative w-20 h-20 rounded-xl bg-white overflow-hidden border-2 transition-all duration-300 ${
                      shown === i ? 'border-green-500 scale-105 shadow-lg shadow-green-500/20' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="80px" className="object-contain p-1.5" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 sm:p-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-green-600">{label}</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase leading-tight">{product.name}</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{product.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {product.specs.foodGrade && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[11px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" /> Food grade
                </span>
              )}
              {product.specs.recyclable && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[11px] font-bold uppercase tracking-wider">
                  <Recycle className="w-3.5 h-3.5" /> Recyclable
                </span>
              )}
            </div>

            <dl className="mt-6 divide-y divide-slate-100 border-y border-slate-100 text-sm">
              {specs.map(([k, v], i) => (
                <div key={k} className="flex justify-between gap-6 py-3 animate-fade-up opacity-0" style={{ animationDelay: `${150 + i * 60}ms` }}>
                  <dt className="text-slate-500 shrink-0">{k}</dt>
                  <dd className="font-bold text-right">{v}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-6 text-xs font-black uppercase tracking-widest text-slate-900">Key features</h3>
            <ul className="mt-3 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm text-slate-600">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-xs font-black uppercase tracking-widest text-slate-900">Colours</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.specs.colors.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-slate-200 text-xs font-medium text-slate-700">
                  <span className="w-5 h-5 rounded-full border border-slate-200" style={{ background: swatchFor(c) }} />
                  {c}
                </span>
              ))}
            </div>

            <h3 className="mt-6 text-xs font-black uppercase tracking-widest text-slate-900">Used for</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700">{a}</span>
              ))}
            </div>

            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="sheen mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest transition-colors"
            >
              Request a quote for this product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    ,
    document.body
  );
}
