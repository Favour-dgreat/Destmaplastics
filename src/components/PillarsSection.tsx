'use client';

import React, { useState } from 'react';
import { ShieldCheck, Zap, TrendingUp, Check, Play, RotateCcw, Sparkles, Award } from 'lucide-react';

export default function PillarsSection() {
  const [activeTest, setActiveTest] = useState<'drop' | 'stack' | 'uv' | 'thermal'>('drop');
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [simComplete, setSimComplete] = useState(false);

  const labTests = {
    drop: {
      name: 'Drop Impact Resistance Test',
      standard: 'ASTM D5276 / ISO 2248',
      parameter: '3.0m Drop on Reinforced Concrete (Full 25kg Payload)',
      result: 'PASSED (0 Fractures, 100% Structural Rebound)',
      stressRating: '99.4%',
      description: 'Tests elasticity and molecular cross-linking under sudden dynamic shock. Our high-density copolymer formulation dissipates shockwaves through radial perimeter ribbing.',
      icon: '💥',
      accent: 'border-blue-300 text-blue-700 bg-blue-50',
    },
    stack: {
      name: '500kg Heavy Compression Test',
      standard: 'ISO 12048 / DIN 55440',
      parameter: '5,000 N Continuous Vertical Tonnage for 72 Hours',
      result: 'PASSED (< 0.72% Deflection, Corner Pillars Rigid)',
      stressRating: '99.8%',
      description: 'Simulates 10 loaded agricultural crates stacked inside a refrigerated transit truck navigating Nigerian highway conditions.',
      icon: '🏗️',
      accent: 'border-emerald-300 text-emerald-700 bg-emerald-50',
    },
    uv: {
      name: '2,000-Hour Xenon Arc UV Test',
      standard: 'ASTM G155 Accelerated Weathering',
      parameter: 'Continuous UV-A 340nm Exposure at 65°C Black Panel Temp',
      result: 'PASSED (Delta E < 1.2, Zero Surface Chalking)',
      stressRating: '98.9%',
      description: 'Guarantees that crates and outdoor seating will not become brittle, snap, or fade under relentless West African equatorial sunshine.',
      icon: '☀️',
      accent: 'border-amber-300 text-amber-700 bg-amber-50',
    },
    thermal: {
      name: 'Extreme Thermal Shock Test',
      standard: 'ISO 16750-4 Climatic Cycling',
      parameter: '-30°C Deep Cold Room to +85°C Hot-Wash Sterilization',
      result: 'PASSED (Zero Warping, Full Hermetic Seal Retention)',
      stressRating: '99.6%',
      description: 'Ensures beverage caps, produce crates, and sports flasks survive freezing cold-chains and industrial steam sanitization loops.',
      icon: '❄️',
      accent: 'border-cyan-300 text-cyan-700 bg-cyan-50',
    },
  };

  const runSimulation = () => {
    setIsRunningSim(true);
    setSimComplete(false);
    setTimeout(() => {
      setIsRunningSim(false);
      setSimComplete(true);
    }, 1400);
  };

  const currentTest = labTests[activeTest];

  return (
    <section id="pillars" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute top-1/3 left-[-15%] w-96 h-96 rounded-full bg-blue-100/60 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 rounded-full bg-emerald-100/60 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span>The Destma Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            The Three Pillars of{' '}
            <span className="bg-gradient-to-r from-blue-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Destma Excellence
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Every product we mould is benchmarked against rigorous global standards to deliver supreme durability,
            precision ergonomics, and unmatched wholesale economics.
          </p>
        </div>

        {/* The 3 Pillars Cards (White Theme) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Quality */}
          <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-blue-400/30 to-blue-50 shadow-xl shadow-blue-500/5 hover:shadow-2xl transition-all duration-300">
            <div className="h-full rounded-[22px] bg-white p-8 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-md shadow-blue-600/30 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-blue-600 mb-1">
                  Pillar I
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Uncompromising Quality</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Engineered using 100% prime virgin resins and state-of-the-art robotic injection presses. 
                  Every mould is micrometer-calibrated to guarantee tight tolerances, zero flashing, and pure organoleptic neutrality for food and beverages.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500 font-bold uppercase">Inspection Pass Rate</span>
                  <span className="text-2xl font-black text-blue-600">99.92%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full w-[99.92%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Strength */}
          <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-emerald-400/30 to-emerald-50 shadow-xl shadow-emerald-500/5 hover:shadow-2xl transition-all duration-300">
            <div className="h-full rounded-[22px] bg-white p-8 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white mb-6 shadow-md shadow-emerald-600/30 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8" />
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-1">
                  Pillar II
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Superior Strength</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Formulated to survive severe rough-handling, rugged logistics transport, and continuous stacking.
                  Incorporating high-impact elastomers and cross-hatch truss geometry that eliminates warping, sagging, or brittle fractures.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500 font-bold uppercase">Crate Stacking Tonnage</span>
                  <span className="text-2xl font-black text-emerald-600">500+ KG</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-500 h-full w-[95%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Value */}
          <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-amber-400/30 to-amber-50 shadow-xl shadow-amber-500/5 hover:shadow-2xl transition-all duration-300">
            <div className="h-full rounded-[22px] bg-white p-8 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center text-white mb-6 shadow-md shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-amber-600 mb-1">
                  Pillar III
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Unbeatable Value</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Direct factory-to-warehouse wholesale pricing without middlemen markups.
                  High-speed multi-cavity moulds and lean manufacturing give our B2B partners superior profit margins, fast ROI, and quick 48h restocking.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-500 font-bold uppercase">Average Margin Advantage</span>
                  <span className="text-2xl font-black text-amber-600">+35%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 h-full w-[88%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Quality Lab Simulator Section (White Theme) */}
        <div id="lab" className="mt-24 rounded-3xl bg-[#f8fbff] border border-blue-100 p-6 sm:p-10 shadow-xl shadow-blue-900/5 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Verification Hub</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                Destma Quality Engineering Lab Simulator
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-xl font-medium">
                Simulate real stress laboratory benchmarks on Destma polymer products. Test drop impact, heavy stacking compression, and equatorial UV weathering.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runSimulation}
                disabled={isRunningSim}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all disabled:opacity-50"
              >
                {isRunningSim ? (
                  <>
                    <RotateCcw className="w-4 h-4 animate-spin" />
                    <span>Executing Test Run...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Run Simulated Benchmark</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Test Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
            {(['drop', 'stack', 'uv', 'thermal'] as const).map((key) => {
              const item = labTests[key];
              const isSelected = activeTest === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTest(key);
                    setSimComplete(false);
                  }}
                  className={`p-4 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-white border-blue-500 shadow-md shadow-blue-500/10'
                      : 'bg-white/80 border-slate-200 hover:bg-white text-slate-600'
                  }`}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className={`text-sm font-bold ${isSelected ? 'text-blue-700' : 'text-slate-800'}`}>
                    {item.name}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 truncate">{item.standard}</div>
                </button>
              );
            })}
          </div>

          {/* Simulation Output Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  <span>Test Specification</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-blue-600 font-extrabold">{currentTest.standard}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{currentTest.name}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">{currentTest.description}</p>
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 uppercase font-bold">Test Parameters</div>
                  <div className="text-sm font-bold text-slate-900 mt-1">{currentTest.parameter}</div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Verification Status</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                    </span>
                    <span className="text-sm font-black text-emerald-700">
                      {isRunningSim ? 'Testing in progress...' : 'CERTIFIED PASS'}
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <div className="text-xs font-bold text-slate-500">Structural Integrity Score</div>
                    <div className="text-3xl font-black text-slate-900 mt-1">
                      {isRunningSim ? '...' : currentTest.stressRating}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-700 font-semibold flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Verified by Destma Metrology Unit</span>
                </div>
              </div>

            </div>

            {/* Simulated Live Alert Banner */}
            {simComplete && (
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold flex items-center gap-2 animate-bounce">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Simulation completed! Results confirm 100% adherence to {currentTest.standard} criteria.</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
