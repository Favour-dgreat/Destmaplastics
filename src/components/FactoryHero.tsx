import React from 'react';
import Image from 'next/image';
import MotionReveal from '@/components/MotionReveal';

/** Cinematic factory-photo hero with four frosted stat boxes. */
export default function FactoryHero({ actions }: { actions: React.ReactNode }) {
  return (
    <>
        {/* =========================================================================
            HERO SECTION (MATCHING USER REFERENCE IMAGE: LAGUNA PRECISION MACHINING)
            Cinematic industrial background, bold condensed headline, 4 frosted metric bins
           ========================================================================= */}
        <section className="relative min-h-[640px] lg:min-h-[720px] flex flex-col justify-between pt-16 pb-12 lg:pt-24 lg:pb-14 overflow-hidden border-b border-white/15">

          {/* Full-Bleed High-Tech Industrial Injection Factory Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/industrial_moulding_hero.jpg"
              alt="Precision Industrial Plastic Injection Moulding Plant"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            {/* Deep Industrial Sapphire & Cyan Atmospheric Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#03091e]/95 via-[#051336]/80 to-[#03091e]/85"></div>
            <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply"></div>
          </div>

          {/* Hero Content (Left-Aligned, Bold, Condensed Headline) */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
            <div className="max-w-4xl space-y-6 text-left">




              {/* Main Headline with fluid scroll entrance */}
              <MotionReveal direction="up" delay={60} duration={800}>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.03]">
                  PRECISION MANUFACTURING <br />
                  OF COMPLEX COMPONENTS
                </h1>
              </MotionReveal>

              {/* Action Buttons with fluid hover motion */}
              <MotionReveal direction="up" delay={180} duration={800}>
                <div className="flex flex-wrap items-center gap-4 pt-2">{actions}</div>
              </MotionReveal>

            </div>
          </div>

          {/* =====================================================================
              HAIRLINE DIVIDER & 4 FROSTED GLASS STAT BINS (EXACTLY LIKE REFERENCE)
             ===================================================================== */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 lg:mt-16">

            {/* Crisp Full-Width Hairline Rule */}
            <div className="border-t border-white/20 mb-6"></div>

            {/* 4 Frosted Glass Stat Bins with cascading staggered intro */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              {/* Box 1 */}
              <MotionReveal direction="up" delay={80} duration={700}>
                <div className="bg-white/15 backdrop-blur-md border border-white/15 rounded-xl p-5 hover:border-blue-400/50 transition-colors fluid-card h-full">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    High-Volume Production
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    120,000+ units per month <br />
                    <span className="text-slate-400">continuous automated shifts</span>
                  </p>
                </div>
              </MotionReveal>

              {/* Box 2 */}
              <MotionReveal direction="up" delay={180} duration={700}>
                <div className="bg-white/15 backdrop-blur-md border border-white/15 rounded-xl p-5 hover:border-blue-400/50 transition-colors fluid-card h-full">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Quality
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    tolerances up to ±0.05 mm <br />
                    <span className="text-slate-400">electric mould tooling</span>
                  </p>
                </div>
              </MotionReveal>

              {/* Box 3 */}
              <MotionReveal direction="up" delay={280} duration={700}>
                <div className="bg-white/15 backdrop-blur-md border border-white/15 rounded-xl p-5 hover:border-blue-400/50 transition-colors fluid-card h-full">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Strength
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    meets demanding food-grade <br />
                    <span className="text-slate-400">& ISO 9001 standards</span>
                  </p>
                </div>
              </MotionReveal>

              {/* Box 4 */}
              <MotionReveal direction="up" delay={380} duration={700}>
                <div className="bg-white/15 backdrop-blur-md border border-white/15 rounded-xl p-5 hover:border-blue-400/50 transition-colors fluid-card h-full">
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Value for your Money
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-medium">
                    save up to 35% through <br />
                    <span className="text-slate-400">direct plant supply</span>
                  </p>
                </div>
              </MotionReveal>

            </div>

          </div>

        </section>
    </>
  );
}
