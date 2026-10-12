'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Palette, Check, Sparkles, Sliders, Shield, ArrowRight } from 'lucide-react';

interface ColorCustomizerProps {
  onOpenCustomQuote: (customDetails: string) => void;
}

export default function ColorCustomizer({ onOpenCustomQuote }: ColorCustomizerProps) {
  const models = [
    {
      id: 'crate',
      name: 'AgroMax Stacking Crate',
      image: '/images/1ONtk.jpg',
      baseColorHue: 'hue-rotate(0deg)',
      material: 'Virgin HDPE Copolymer',
      recommendedFor: 'Commercial Farms & Supermarkets'
    },
    {
      id: 'chair',
      name: 'Toddler Bear Chair',
      image: '/images/HS4hb.jpg',
      baseColorHue: 'hue-rotate(0deg)',
      material: 'BPA-Free Polypropylene',
      recommendedFor: 'Schools, Nurseries & Playrooms'
    },
    {
      id: 'cap',
      name: 'Tamper-Evident Closure',
      image: '/images/LtNRt.jpg',
      baseColorHue: 'hue-rotate(0deg)',
      material: 'Food-Grade PP / HDPE',
      recommendedFor: 'Bottlers, Juices & Pharmaceuticals'
    },
    {
      id: 'stool',
      name: 'Reinforced WonderStool',
      image: '/images/fT56I.jpg',
      baseColorHue: 'hue-rotate(0deg)',
      material: 'Impact Copolymer PP',
      recommendedFor: 'Classrooms, Events & Homes'
    }
  ];

  const colorSwatches = [
    { name: 'Destma Royal Blue', hex: '#0052cc', filterClass: 'hue-rotate(200deg) saturate(1.8)' },
    { name: 'Emerald Eco Green', hex: '#00b140', filterClass: 'hue-rotate(90deg) saturate(1.7)' },
    { name: 'Canary Agro Yellow', hex: '#facc15', filterClass: 'hue-rotate(0deg) saturate(1.2)' },
    { name: 'Signal Flame Red', hex: '#ef4444', filterClass: 'hue-rotate(330deg) saturate(2)' },
    { name: 'Pitch Midnight Black', hex: '#1e293b', filterClass: 'grayscale(1) brightness(0.4)' },
    { name: 'Pristine Arctic White', hex: '#f8fafc', filterClass: 'grayscale(1) brightness(1.7)' },
    { name: 'Sunset Amber Orange', hex: '#f97316', filterClass: 'hue-rotate(25deg) saturate(1.9)' },
    { name: 'Bubblegum Blossom Pink', hex: '#ec4899', filterClass: 'hue-rotate(290deg) saturate(1.8)' },
  ];

  const finishes = [
    { id: 'gloss', name: 'Ultra-High Gloss Mirror', desc: 'Vibrant shine, easy-wipe hygienic surface' },
    { id: 'matte', name: 'Anti-Scratch Matte Satin', desc: 'Diffused reflection, hides scuffs and transport rubs' },
    { id: 'textured', name: 'Micro-Textured Industrial', desc: 'Superior tactical grip for cold and wet hands' },
  ];

  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedColor, setSelectedColor] = useState(colorSwatches[0]);
  const [selectedFinish, setSelectedFinish] = useState(finishes[0]);
  const [customLogoBranding, setCustomLogoBranding] = useState(true);

  const handleApplyColorway = () => {
    const details = `${selectedModel.name} in custom ${selectedColor.name} with ${selectedFinish.name} finish ${
      customLogoBranding ? 'and In-Mould Logo Imprint' : ''
    }`;
    onOpenCustomQuote(details);
  };

  return (
    <section id="customizer" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[160px] opacity-15 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: selectedColor.hex }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>OEM & Masterbatch Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Destma Interactive{' '}
            <span className="bg-gradient-to-r from-blue-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Color & Finish Studio
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Customize our high-performance moulds with your exact corporate brand Pantone, 
            tailored surface finishes, and permanent in-mould logo embossing.
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 3D Product Canvas (White Theme Studio) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-50 border border-slate-200/90 p-6 sm:p-10 relative shadow-xl flex flex-col justify-between">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full border border-slate-300 shadow-sm"
                  style={{ backgroundColor: selectedColor.hex }}
                ></span>
                <span className="text-sm font-bold text-slate-900">{selectedColor.name}</span>
              </div>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                {selectedFinish.name}
              </span>
            </div>

            {/* Visual Canvas with Studio Drop Shadow */}
            <div className="relative my-8 h-80 sm:h-96 w-full rounded-2xl bg-white flex items-center justify-center overflow-hidden border border-slate-200/80 shadow-inner">
              
              {/* Product Visual */}
              <div
                className="relative w-full h-full p-8 flex items-center justify-center transition-all duration-500"
                style={{
                  filter: selectedColor.filterClass,
                }}
              >
                <Image
                  src={selectedModel.image}
                  alt={selectedModel.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-contain p-6 drop-shadow-2xl"
                />
              </div>

              {/* In-Mould Logo Preview Overlay if toggled */}
              {customLogoBranding && (
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-300 text-xs font-bold text-amber-800 flex items-center gap-1.5 shadow-md">
                  <Shield className="w-3.5 h-3.5 text-amber-600" />
                  <span>Your Brand Logo Imprinted</span>
                </div>
              )}

              {/* Live Spec Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-700 shadow-sm">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Resin Formula</span>
                <span className="font-extrabold text-slate-900">{selectedModel.material}</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 font-medium">
                <span>Minimum Run: </span>
                <strong className="text-slate-900">Custom Masterbatch from 500 units</strong>
              </div>
              <button
                onClick={handleApplyColorway}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/20"
              >
                <span>Request Run In This Color</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Controls Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Step 1: Select Model */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                <span>1. Select Mould Silhouette</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {models.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m)}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                      selectedModel.id === m.id
                        ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {m.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Color Swatch */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" />
                <span>2. Choose Masterbatch Color</span>
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                {colorSwatches.map((color) => {
                  const isSelected = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`relative flex flex-col items-center p-2 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 scale-105 shadow-md'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                      }`}
                      title={color.name}
                    >
                      <div
                        className="w-8 h-8 rounded-full shadow-inner flex items-center justify-center border border-black/10"
                        style={{ backgroundColor: color.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow-md stroke-[3]" />}
                      </div>
                      <span className="text-[10px] text-slate-700 font-bold mt-1 text-center line-clamp-1">
                        {color.name.split(' ')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Finish & Logo Add-ons */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>3. Surface Texture & OEM Labelling</span>
              </div>
              
              <div className="space-y-2 mb-4">
                {finishes.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFinish(f)}
                    className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      selectedFinish.id === f.id
                        ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <div>
                      <div className="font-bold">{f.name}</div>
                      <div className="text-[11px] text-slate-500">{f.desc}</div>
                    </div>
                    {selectedFinish.id === f.id && <Check className="w-4 h-4 text-amber-600" />}
                  </button>
                ))}
              </div>

              {/* Logo Emboss Toggle */}
              <label className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                <span className="text-xs font-bold text-slate-800">Add In-Mould Company Logo (IML)</span>
                <input
                  type="checkbox"
                  checked={customLogoBranding}
                  onChange={(e) => setCustomLogoBranding(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-0 accent-blue-600"
                />
              </label>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
