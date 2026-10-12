'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

const TILES = [
  { src: '/images/1ONtk.jpg', alt: 'Harvest crate', className: 'top-0 left-[6%] w-[52%] rotate-[-6deg]', depth: 26, float: 'animate-float-slow' },
  { src: '/images/HS4hb.jpg', alt: 'Kids bear chair', className: 'top-[8%] right-0 w-[40%] rotate-[7deg]', depth: 14, float: 'animate-float-reverse-slow' },
  { src: '/images/LtNRt.jpg', alt: 'Bottle closure', className: 'bottom-[4%] left-0 w-[36%] rotate-[5deg]', depth: 36, float: 'animate-float-gentle' },
  { src: '/images/fT56I.jpg', alt: 'Reinforced stool', className: 'bottom-0 right-[8%] w-[46%] rotate-[-4deg]', depth: 20, float: 'animate-float-slow' },
];

/** Product photos floating on white tiles that drift with the cursor at different depths. */
export default function FloatingTiles() {
  const ref = useRef<HTMLDivElement>(null);

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
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="relative mx-auto w-full max-w-[520px] aspect-square"
    >
      <div className="absolute inset-[12%] rounded-full border border-dashed border-white/15 animate-spin-slower" />
      <div className="absolute inset-[28%] rounded-full bg-green-500/20 blur-3xl" />
      {TILES.map((t) => (
        <div
          key={t.src}
          className={`absolute ${t.className} transition-transform duration-500 ease-out`}
          style={{ translate: `calc(var(--px, 0) * ${t.depth}px) calc(var(--py, 0) * ${t.depth}px)` }}
        >
          <div className={`${t.float} rounded-3xl bg-white p-3 shadow-2xl shadow-black/40 ring-1 ring-white/50`}>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white">
              <Image src={t.src} alt={t.alt} fill sizes="260px" className="object-contain p-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
