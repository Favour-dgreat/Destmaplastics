import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SplitHeadline from './SplitHeadline';
import Pellets from './Pellets';

interface PageHeroProps {
  crumb?: string;
  eyebrow: string;
  lines: string[];
  description: string;
  image?: string;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
}

/** Dark cinematic hero shared by the inner pages. */
export default function PageHero({ crumb, eyebrow, lines, description, image, actions, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#03091e] text-white">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03091e] via-[#03091e]/90 to-[#03091e]/50" />
        </div>
      )}
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-green-500/15 blur-[140px] animate-pulse-glow-soft pointer-events-none" />
      <div className="absolute -bottom-48 right-0 w-[560px] h-[560px] rounded-full bg-[#004EAB]/30 blur-[150px] pointer-events-none" />
      <Pellets />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
        {crumb && (
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 animate-fade-in">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-green-400">{crumb}</span>
          </nav>
        )}

        <div className={`grid gap-12 items-center ${aside ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''}`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[11px] font-bold uppercase tracking-[0.2em] animate-fade-up">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-green-400" />
              </span>
              {eyebrow}
            </div>

            <SplitHeadline
              lines={lines}
              delay={150}
              className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[1.02]"
            />

            <p
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl opacity-0 animate-fade-up"
              style={{ animationDelay: '650ms' }}
            >
              {description}
            </p>

            {actions && (
              <div className="mt-8 flex flex-wrap items-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
                {actions}
              </div>
            )}
          </div>

          {aside && (
            <div className="opacity-0 animate-scale-in" style={{ animationDelay: '400ms' }}>
              {aside}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
        <span className="w-5 h-8 rounded-full border-2 border-slate-500 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-green-400 animate-scroll-cue" />
        </span>
      </div>
    </section>
  );
}
