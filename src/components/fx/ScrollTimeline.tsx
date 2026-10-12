'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Step {
  title: string;
  body: string;
  stat: string;
}

/** Vertical timeline whose line fills, and whose steps light up, as you scroll through it. */
export default function ScrollTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const p = (anchor - rect.top) / rect.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <ol ref={ref} className="relative">
      {/* Track + fill */}
      <span aria-hidden className="absolute left-[23px] sm:left-1/2 top-2 bottom-2 w-[3px] -translate-x-1/2 rounded-full bg-white/20" />
      <span
        aria-hidden
        className="absolute left-[23px] sm:left-1/2 top-2 w-[3px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)] origin-top"
        style={{ height: `calc((100% - 1rem) * ${progress})` }}
      />

      {steps.map((s, i) => {
        const lit = progress >= (i + 0.35) / steps.length;
        const left = i % 2 === 0;
        return (
          <li key={s.title} className="relative grid sm:grid-cols-2 gap-6 sm:gap-16 pl-16 sm:pl-0 pb-14 last:pb-0">
            <span
              className={`absolute left-[23px] sm:left-1/2 top-1 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-sm font-black transition-all duration-700 ${
                lit ? 'bg-white text-green-700 scale-100 shadow-xl shadow-green-950/30' : 'bg-green-800/60 text-white/60 scale-75 border border-white/20'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
              {lit && <span className="absolute inset-0 rounded-full border-2 border-white animate-ring-pulse" />}
            </span>

            <div
              className={`${left ? 'sm:col-start-1 sm:text-right sm:pr-6' : 'sm:col-start-2 sm:pl-6'} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                lit ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-6'
              }`}
            >
              <span className="text-3xl sm:text-4xl font-black text-white">{s.stat}</span>
              <h3 className="mt-1 text-lg font-black uppercase text-white">{s.title}</h3>
              <p className={`mt-2 text-sm text-green-50/85 leading-relaxed max-w-md ${left ? 'sm:ml-auto' : ''}`}>{s.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
