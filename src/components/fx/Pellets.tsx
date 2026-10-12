import React from 'react';

/*
 * Floating "resin pellets" — the raw material every Destma product starts as.
 * Positions are fixed (not random) so the server and client render identically.
 */
const PELLETS = [
  { top: '12%', left: '62%', size: 18, kind: 'solid', color: 'bg-green-400', anim: 'a', dur: 14, delay: 0 },
  { top: '24%', left: '84%', size: 44, kind: 'ring', color: 'border-white/25', anim: 'b', dur: 18, delay: 1 },
  { top: '58%', left: '72%', size: 12, kind: 'solid', color: 'bg-white/70', anim: 'a', dur: 11, delay: 2 },
  { top: '70%', left: '90%', size: 26, kind: 'solid', color: 'bg-green-500/80', anim: 'b', dur: 16, delay: 0.5 },
  { top: '38%', left: '54%', size: 8, kind: 'solid', color: 'bg-sky-300/70', anim: 'a', dur: 9, delay: 3 },
  { top: '80%', left: '58%', size: 60, kind: 'ring', color: 'border-green-400/30', anim: 'a', dur: 22, delay: 1.5 },
  { top: '8%', left: '40%', size: 10, kind: 'solid', color: 'bg-white/40', anim: 'b', dur: 13, delay: 2.5 },
  { top: '46%', left: '96%', size: 14, kind: 'solid', color: 'bg-[#004EAB]', anim: 'a', dur: 12, delay: 4 },
];

export default function Pellets({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {PELLETS.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${p.kind === 'ring' ? `border-2 ${p.color}` : `${p.color} shadow-[0_0_20px_rgba(74,222,128,0.35)]`}`}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `pellet-drift-${p.anim} ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
