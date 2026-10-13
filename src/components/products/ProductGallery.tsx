'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [shown, setShown] = useState(0);

  return (
    <div>
      <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-slate-50 to-green-50/60 border border-slate-200 overflow-hidden">
        <Image
          key={images[shown]}
          src={images[shown]}
          alt={shown === 0 ? name : `${name} — view ${shown + 1}`}
          fill
          priority={shown === 0}
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-contain p-10 mix-blend-multiply animate-scale-in"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setShown(i)}
              aria-label={`Show image ${i + 1} of ${name}`}
              className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white overflow-hidden border-2 transition-all duration-300 ${
                shown === i ? 'border-green-500 scale-105 shadow-lg shadow-green-500/20' : 'border-slate-200 opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={src} alt="" fill sizes="96px" className="object-contain p-2" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
