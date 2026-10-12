'use client';

import React, { useState } from 'react';
import { Recycle, Leaf, BatteryCharging, RotateCw, CheckCircle2 } from 'lucide-react';

export default function SustainabilitySection() {
  const [cratesInUse, setCratesInUse] = useState(500);

  // 1 Destma returnable crate lasts ~7 years and replaces roughly 60 single-use cartons/year = 420 cartons over lifespan
  const singleUseCartonsAvoided = cratesInUse * 420;
  const treesSaved = Math.round(singleUseCartonsAvoided / 160);
  const carbonAvoidedKg = Math.round(singleUseCartonsAvoided * 0.85);

  const pillars = [
    {
      icon: Recycle,
      title: '100% Circular Polymers',
      description: 'Zero composite fillers or unrecyclable laminations. Every crate, chair, and closure is engineered for mono-material recycling at end-of-life.',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      icon: RotateCw,
      title: 'End-of-Life Buyback Credit',
      description: 'We buy back broken or retired Destma crates from our commercial partners, regrinding them into durable secondary utility pallets and industrial parts.',
      color: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      icon: BatteryCharging,
      title: 'All-Electric High Efficiency',
      description: 'Our presses utilize variable-frequency servo motors and regenerative clamping hydraulics, consuming 40% less electrical power per kilogram processed.',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      icon: Leaf,
      title: 'Zero-Waste Factory Policy',
      description: '100% of sprues, runners, and start-up cycle trimmings are re-pelletized in-line, ensuring zero plastic scrap leaves our factory gates for local landfills.',
      color: 'text-teal-700 bg-teal-50 border-teal-200'
    }
  ];

  return (
    <section id="sustainability" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background radial eco glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-100/40 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5" />
            <span>Circular Economy & Sustainability</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Pioneering Responsible,{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Zero-Waste Plastics
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Durable, reusable plastic containers are the cornerstone of modern sustainable logistics. 
            By replacing flimsy single-use paper and fragile packaging, we save thousands of trees every year.
          </p>
        </div>

        {/* Circular Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{pillar.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>ISO 14001 Compliant</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Eco-Impact Calculator */}
        <div className="rounded-3xl p-1 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 shadow-xl">
          <div className="rounded-[22px] bg-white p-6 sm:p-10 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Environmental Impact Simulator
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  How Much Waste Does Your Fleet Prevent?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                  Adjust the slider to see how switching from throwaway corrugated boxes to returnable 
                  Destma AgroMax crates reduces deforestation and plastic landfill tonnage over their 7-year life cycle.
                </p>

                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-700">Number of Destma Crates in Service</span>
                    <span className="text-sm font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                      {cratesInUse.toLocaleString()} Crates
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="10000"
                    step="50"
                    value={cratesInUse}
                    onChange={(e) => setCratesInUse(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-1">
                    <span>50 Crates</span>
                    <span>10,000 Crates</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                    {singleUseCartonsAvoided.toLocaleString()}
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Single-Use Boxes Avoided</div>
                  <div className="text-[10px] text-slate-500 mt-1 font-medium">Replaced by returnable crates</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-teal-600">
                    {treesSaved.toLocaleString()}
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Trees Conserved</div>
                  <div className="text-[10px] text-slate-500 mt-1 font-medium">From unharvested cardboard</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-blue-600">
                    {(carbonAvoidedKg / 1000).toFixed(1)} MT
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">CO₂ Emissions Cut</div>
                  <div className="text-[10px] text-slate-500 mt-1 font-medium">Transport & manufacturing</div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
