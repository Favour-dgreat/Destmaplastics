'use client';

import React from 'react';
import { TESTIMONIALS } from '@/data/plasticsData';
import { Star, Building2, Truck, Sprout, Wine, GraduationCap, ShoppingBag } from 'lucide-react';

export default function TestimonialsAndClients() {
  const industries = [
    { icon: Sprout, name: 'Commercial Agriculture & Farms' },
    { icon: Wine, name: 'Bottling & Beverage Plants' },
    { icon: ShoppingBag, name: 'FMCG & Supermarket Logistics' },
    { icon: GraduationCap, name: 'Schools & Daycare Chains' },
    { icon: Truck, name: 'Interstate Transport & Freight' },
    { icon: Building2, name: 'Hospitality & Event Rental Firms' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Industries Marquee Banner */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Trusted by 500+ Enterprises Across West Africa
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-20">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-emerald-50 group-hover:text-emerald-600 flex items-center justify-center mb-2 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-slate-700 leading-tight">
                  {ind.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Client Voices:{' '}
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
              Proven In The Field
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
            From industrial fruit plantations to high-speed carbonated beverage bottling lines, 
            see how Destma Plastic powers leading African brands.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all shadow-md"
            >
              <div>
                {/* Rating & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                    {t.tag}
                  </span>
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center font-black text-white text-sm shadow">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">{t.author}</div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {t.role}, <span className="text-emerald-700 font-bold">{t.company}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
