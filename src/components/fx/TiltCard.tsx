'use client';

import React, { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
  style?: React.CSSProperties;
}

/** Card that leans toward the cursor in 3D, with a soft glare that follows the pointer. */
export default function TiltCard({ children, className = '', max = 8, style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${(0.5 - y) * max}deg`);
      el.style.setProperty('--ry', `${(x - 0.5) * max}deg`);
      el.style.setProperty('--gx', `${x * 100}%`);
      el.style.setProperty('--gy', `${y * 100}%`);
      el.style.setProperty('--glare', '1');
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--glare', '0');
  };

  return (
    <div style={{ perspective: '1200px', ...style }} className="h-full">
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        className={`relative h-full transition-transform duration-300 ease-out will-change-transform ${className}`}
        style={{ transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))', transformStyle: 'preserve-3d' }}
      >
        {children}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300"
          style={{
            opacity: 'var(--glare, 0)',
            background: 'radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255,255,255,0.35), transparent 55%)',
          }}
        />
      </div>
    </div>
  );
}
