'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '@/data/plasticsData';

interface ProductImageItem {
  id: string;
  image: string;
  href: string;
  alt: string;
}

const PRODUCT_IMAGES: ProductImageItem[] = PRODUCTS.filter((p) => p.category !== 'furniture').map((p) => ({
  id: p.id,
  image: p.image,
  href: `/products/${p.id}`,
  alt: p.name,
}));

export default function FeaturedProductsSlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef<boolean>(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const scrollSpeed = 50; // Smooth 50 pixels per second crawl

    const step = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (!isPausedRef.current && el) {
        el.scrollLeft += scrollSpeed * delta;

        // Since we render 3 duplicated sets of items,
        // when scroll reaches 1 full set width, seamlessly wrap back!
        const singleSetWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= singleSetWidth) {
          el.scrollLeft -= singleSetWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += singleSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const handleManualScroll = (direction: 'left' | 'right') => {
    isPausedRef.current = true;
    if (scrollContainerRef.current) {
      const amount = direction === 'left' ? -480 : 480;
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
    // Resume auto-scroll after manual smooth scroll finishes
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 1200);
  };

  return (
    <div className="relative w-full">
      {/* Section Header Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-widest mb-2">
            <span>PET • HDPE • PP product range</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-slate-900 tracking-tight">
            What we make
          </h2>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-end">
          {/* Manual Scroll Controls */}
          <div className="flex items-center gap-2 mr-2">
            <button
              onClick={() => handleManualScroll('left')}
              aria-label="Previous product"
              className="w-11 h-11 rounded-full bg-white hover:bg-green-50 border border-slate-200 text-slate-700 flex items-center justify-center transition-all hover:border-green-500 hover:text-green-600 active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              aria-label="Next product"
              className="w-11 h-11 rounded-full bg-white hover:bg-green-50 border border-slate-200 text-slate-700 flex items-center justify-center transition-all hover:border-green-500 hover:text-green-600 active:scale-95 shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-[#004EAB]/30"
          >
            <span>VIEW FULL CATALOG</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Auto-Scrolling Continuous Image Showcase */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => { isPausedRef.current = true; }}
        onMouseLeave={() => { isPausedRef.current = false; }}
        onTouchStart={() => { isPausedRef.current = true; }}
        onTouchEnd={() => { isPausedRef.current = false; }}
        className="relative w-full overflow-x-auto py-4 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Continuous conveyor track */}
        <div className="flex items-center gap-6 sm:gap-8 px-4 w-max">
          {/* 3 identical sets of images for 100% seamless, infinite loop */}
          {[...PRODUCT_IMAGES, ...PRODUCT_IMAGES, ...PRODUCT_IMAGES].map((item, idx) => (
            <Link
              key={`${item.id}-${idx}`}
              href={item.href}
              aria-label={item.alt}
              className="group relative block w-[320px] sm:w-[400px] md:w-[460px] lg:w-[500px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] shrink-0 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-200/60 p-6 sm:p-8 transition-all duration-500 hover:scale-[1.025] hover:-translate-y-2 hover:border-green-500 hover:shadow-[0_25px_60px_-10px_rgba(34,146,63,0.3)] focus:outline-none overflow-hidden cursor-pointer"
            >
              {/* Product Image ONLY (Large, High-Resolution, Centered) */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 400px, 500px"
                  className="object-contain p-4 group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Arrow on Hover (Indicating Clickable Action) */}
              <div className="absolute top-5 right-5 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#004EAB] text-white flex items-center justify-center shadow-2xl border border-white/30 opacity-0 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-green-600 transition-all duration-300">
                <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
