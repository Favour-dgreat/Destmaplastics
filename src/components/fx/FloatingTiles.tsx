'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Photo = { src: string; alt: string };

/** Tile slots: position, parallax depth and float animation. */
const SLOTS = [
  { className: 'top-0 left-[6%] w-[52%] rotate-[-6deg]', depth: 26, float: 'animate-float-slow' },
  { className: 'top-[8%] right-0 w-[40%] rotate-[7deg]', depth: 14, float: 'animate-float-reverse-slow' },
  { className: 'bottom-[4%] left-0 w-[36%] rotate-[5deg]', depth: 36, float: 'animate-float-gentle' },
  { className: 'bottom-0 right-[8%] w-[46%] rotate-[-4deg]', depth: 20, float: 'animate-float-slow' },
];

/** Three batches of four different products; batch[n][slot] fills each tile. */
const BATCHES: Photo[][] = [
  [
    { src: '/images/products/crates/yellow-ventilated-crate.jpg', alt: 'Yellow ventilated plastic crate' },
    { src: '/images/catalogue/drinking-bottles.jpg', alt: 'Pink flip-lid sports bottles' },
    { src: '/images/catalogue/pet-bottle-preform.jpg', alt: 'PET bottle with preform and cap' },
    { src: '/images/products/stools/square-printed-stool-red.jpg', alt: 'Red square printed stool' },
  ],
  [
    { src: '/images/catalogue/pharma-bottles.jpg', alt: 'Pharmaceutical bottles in six colours' },
    { src: '/images/products/closures/screw-caps-four-colours.jpg', alt: 'Screw caps in blue, black, white and green' },
    { src: '/images/products/drinkware/large-bottles-with-handle.jpg', alt: 'Large drinking bottles with carry handle' },
    { src: '/images/catalogue/lunch-boxes.jpg', alt: 'Lunch boxes in blue, pink and yellow' },
  ],
  [
    { src: '/images/products/furniture/kids-bear-chair-pink.jpg', alt: 'Pink kids bear chair' },
    { src: '/images/catalogue/pet-preforms.jpg', alt: 'PET preforms in six colours' },
    { src: '/images/products/closures/blue-screw-cap.jpg', alt: 'Blue screw cap' },
    { src: '/images/catalogue/stools.jpg', alt: 'Pink and yellow household stools' },
  ],
];

const INTERVAL = 4500; // ms each batch stays on screen
const STAGGER = 140; // ms between tiles changing, for a ripple effect

/** Product photos floating on white tiles that drift with the cursor and rotate through three batches. */
export default function FloatingTiles() {
  const ref = useRef<HTMLDivElement>(null);
  const [batch, setBatch] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!document.hidden) setBatch((b) => (b + 1) % BATCHES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--px', `${(e.clientX - rect.left) / rect.width - 0.5}`);
    el.style.setProperty('--py', `${(e.clientY - rect.top) / rect.height - 0.5}`);
  };

  const reset = () => {
    ref.current?.style.setProperty('--px', '0');
    ref.current?.style.setProperty('--py', '0');
  };

  return (
    <div className="mx-auto w-full max-w-[520px]">
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => {
          reset();
          setPaused(false);
        }}
        className="relative w-full aspect-square"
      >
        <div className="absolute inset-[12%] rounded-full border border-dashed border-white/15 animate-spin-slower" />
        <div className="absolute inset-[28%] rounded-full bg-green-500/20 blur-3xl" />
        {SLOTS.map((slot, i) => (
          <div
            key={i}
            className={`absolute ${slot.className} transition-transform duration-500 ease-out`}
            style={{ translate: `calc(var(--px, 0) * ${slot.depth}px) calc(var(--py, 0) * ${slot.depth}px)` }}
          >
            <div className={`${slot.float} rounded-3xl bg-white p-3 shadow-2xl shadow-black/40 ring-1 ring-white/50`}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
                {BATCHES.map((photos, b) => {
                  const shown = b === batch;
                  return (
                    <Image
                      key={photos[i].src}
                      src={photos[i].src}
                      alt={shown ? photos[i].alt : ''}
                      aria-hidden={!shown}
                      fill
                      sizes="260px"
                      priority={b === 0}
                      className="object-contain p-2 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        opacity: shown ? 1 : 0,
                        transform: shown ? 'scale(1) rotate(0deg)' : 'scale(0.86) rotate(-4deg)',
                        transitionDelay: `${i * STAGGER}ms`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Batch indicator — click to jump */}
      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Product showcase">
        {BATCHES.map((_, b) => (
          <button
            key={b}
            role="tab"
            aria-selected={b === batch}
            aria-label={`Show product set ${b + 1}`}
            onClick={() => setBatch(b)}
            className={`h-2 rounded-full transition-all duration-500 ${b === batch ? 'w-8 bg-green-400' : 'w-2 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}
