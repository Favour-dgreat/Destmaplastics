import React from 'react';

/** Endless green ticker band. */
export default function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative bg-green-600 text-white border-y border-green-500 overflow-hidden py-4 select-none">
      <div className="animate-marquee-slow" style={{ animationDuration: '32s' }}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 text-sm sm:text-base font-black uppercase tracking-[0.2em] whitespace-nowrap">
            {item}
            <span className="w-2 h-2 rounded-full bg-white/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
