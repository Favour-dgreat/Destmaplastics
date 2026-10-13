import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Check, ChevronRight, Factory, MessageCircle, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '@/data/plasticsData';
import { CATEGORY_LABEL } from '@/components/products/categories';
import { swatchFor } from '@/components/products/swatches';
import ProductGallery from '@/components/products/ProductGallery';
import MotionReveal from '@/components/MotionReveal';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';
import { SITE, pageMetadata } from '@/lib/site';

type Props = { params: Promise<{ id: string }> };

const findProduct = (id: string) => PRODUCTS.find((p) => p.id === id);

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const product = findProduct((await params).id);
  if (!product) return {};
  const base = pageMetadata({
    title: `${product.name} — ${CATEGORY_LABEL[product.category]}`,
    description: `${product.tagline}. ${product.description}`.slice(0, 300),
    path: `/products/${product.id}`,
    keywords: [product.name, ...product.applications, `${CATEGORY_LABEL[product.category]} Nigeria`, 'Destma Plastic'],
  });
  const image = { url: encodeURI(product.image), alt: product.name };
  return { ...base, openGraph: { ...base.openGraph, images: [image] }, twitter: { ...base.twitter, images: [image] } };
}

function ProductSkeleton() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16">
      <div className="aspect-square rounded-3xl bg-slate-100 animate-pulse" />
      <div className="space-y-5">
        <div className="h-4 w-40 rounded bg-slate-100 animate-pulse" />
        <div className="h-14 w-3/4 rounded bg-slate-100 animate-pulse" />
        <div className="h-24 rounded bg-slate-100 animate-pulse" />
      </div>
    </div>
  );
}

// Every product is prerendered via generateStaticParams; Suspense keeps client navigations instant.
export default function ProductPage({ params }: Props) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetails params={params} />
    </Suspense>
  );
}

async function ProductDetails({ params }: Props) {
  const product = findProduct((await params).id);
  if (!product) notFound();

  const label = CATEGORY_LABEL[product.category];
  const gallery = [product.image, ...(product.secondaryImages ?? [])];
  const related = [
    ...PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category),
    ...PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category),
  ].slice(0, 3);
  const whatsappText = `Hello Destma Plastic, I'd like a quote for the ${product.name}.`;

  const specs = [
    ['Material', product.specs.material],
    ['Process', product.specs.process],
    ['Size / range', product.specs.range],
    ['Neck finish', product.specs.neck],
    ['Daily output', product.specs.dailyOutput],
    ['Minimum order', product.specs.moq],
  ].filter(([, v]) => v) as [string, string][];

  return (
    <div className="bg-white text-slate-900">
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: product.name, path: `/products/${product.id}` },
        ])}
      />

      <div className="bg-slate-50 border-b border-slate-200">
        <nav aria-label="Breadcrumb" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-green-600 truncate max-w-[60vw]" aria-current="page">{product.name}</span>
        </nav>
      </div>

      <article className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <MotionReveal direction="right" className="lg:sticky lg:top-28">
          <ProductGallery images={gallery} name={product.name} />
        </MotionReveal>

        <div>
          <MotionReveal direction="up">
            <div className="flex flex-wrap items-center gap-3">
              <Link href={`/products?category=${product.category}`} className="text-xs font-bold uppercase tracking-widest text-green-600 hover:text-green-800">
                {label}
              </Link>
              {product.badge && (
                <span className="px-3 py-1 rounded-full bg-[#03091e] text-white text-[10px] font-black uppercase tracking-wider">{product.badge}</span>
              )}
            </div>
            <h1 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">{product.name}</h1>
            <p className="mt-4 text-lg text-slate-600">{product.tagline}.</p>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" /> {product.specs.material.split(' (')[0]}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-[11px] font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5" /> Made to specification
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                MOQ on request
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="sheen flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-[#004EAB]/30 transition-colors fluid-button"
              >
                Request a quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp.replace('+', '')}?text=${encodeURIComponent(whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-green-600/30 transition-colors fluid-button"
              >
                <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
              </a>
            </div>
          </MotionReveal>

          <MotionReveal direction="up" delay={100}>
            <h2 className="mt-12 text-sm font-black uppercase tracking-widest">Specifications</h2>
            <dl className="mt-4 divide-y divide-slate-100 border-y border-slate-100 text-sm">
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-slate-500 shrink-0">{k}</dt>
                  <dd className="font-bold text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </MotionReveal>

          <MotionReveal direction="up" delay={150}>
            <h2 className="mt-10 text-sm font-black uppercase tracking-widest">Key features</h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-slate-600">
                  <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-sm font-black uppercase tracking-widest">Available colours</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.specs.colors.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-slate-200 text-xs font-medium text-slate-700">
                  <span className="w-5 h-5 rounded-full border border-slate-200" style={{ background: swatchFor(c) }} />
                  {c}
                </span>
              ))}
            </div>

            <h2 className="mt-10 text-sm font-black uppercase tracking-widest">Ideal for</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.applications.map((a) => (
                <span key={a} className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-medium text-slate-700">{a}</span>
              ))}
            </div>
          </MotionReveal>
        </div>
      </article>

      {/* Related products — internal links help both visitors and search engines */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">You may also need</h2>
            <Link href="/products" className="text-xs font-bold uppercase tracking-widest text-[#004EAB] hover:text-green-700 inline-flex items-center gap-1.5">
              All products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <MotionReveal key={p.id} direction="up" delay={i * 100} className="h-full">
                <Link
                  href={`/products/${p.id}`}
                  className="group flex h-full flex-col rounded-3xl bg-white border border-slate-200 overflow-hidden hover:border-green-400 hover:shadow-2xl hover:shadow-green-600/10 transition-all duration-500 fluid-card"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-b from-slate-50 to-white">
                    <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain p-8 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-green-600">{CATEGORY_LABEL[p.category]}</span>
                    <h3 className="mt-1.5 text-base font-black uppercase leading-snug">{p.name}</h3>
                    <p className="mt-1.5 text-sm text-slate-500">{p.tagline}</p>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
