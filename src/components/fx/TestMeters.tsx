'use client';

import React from 'react';
import useInView from './useInView';

interface Meter {
  label: string;
  detail: string;
  value: number;
  display: string;
}

/** Lab test results whose bars fill up when scrolled into view. */
export default function TestMeters({ meters }: { meters: Meter[] }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref} className="space-y-6">
      {meters.map((m, i) => (
        <div key={m.label}>
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <span className="text-sm font-black uppercase text-slate-900">{m.label}</span>
              <span className="ml-2 text-xs text-slate-500">{m.detail}</span>
            </div>
            <span className="text-sm font-black text-green-600 tabular-nums whitespace-nowrap">{m.display}</span>
          </div>
          <div className="mt-2 h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="relative h-full rounded-full bg-gradient-to-r from-green-600 to-green-400 transition-[width] duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
              style={{ width: inView ? `${m.value}%` : '0%', transitionDelay: `${i * 150}ms` }}
            >
              <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] bg-[length:200%_100%] animate-[shimmerSlide_2.2s_linear_infinite]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
