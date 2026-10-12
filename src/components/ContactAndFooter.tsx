'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactAndFooter() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: 'Agro Crates',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New Destma Website Enquiry:*
- Name: ${formData.name}
- Company: ${formData.company || 'N/A'}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Interest: ${formData.interest}
- Message: ${formData.message}`;

    window.open(`https://wa.me/2348147235913?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      {/* Contact Section (White Theme) */}
      <section id="contact" className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-blue-100/60 blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get In Touch With Sales</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Connect With Our{' '}
                  <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600 bg-clip-text text-transparent">
                    Engineering Team
                  </span>
                </h2>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  Have a specific dimension requirement, custom mould idea, or volume procurement contract? 
                  Our technical sales consultants are ready to assist with rapid quotations and engineering specs.
                </p>

                {/* Contact Channels */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Direct Telephone & WhatsApp</div>
                      <a href="tel:+2348147235913" className="text-sm font-bold text-slate-900 hover:text-blue-600">
                        +234 814 723 5913 / +234 803 000 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Official Enquiries & RFPs</div>
                      <a href="mailto:info@destmaplastics.com" className="text-sm font-bold text-slate-900 hover:text-emerald-600">
                        orders@destmaplastics.com / info@destmaplastics.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Factory & Manufacturing Complex</div>
                      <div className="text-sm font-bold text-slate-900">
                        Destma Industrial Park, Lagos-Ibadan Expressway Corridor, Nigeria
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-bold uppercase">Manufacturing Operations</div>
                      <div className="text-sm font-bold text-slate-900">
                        Plant: 24/7 Continuous Extrusion & Injection • Sales Desk: Mon - Sat 8:00 AM - 6:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Request an Official B2B Proforma / Quote</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6 font-medium">
                Fill in your details below and our dispatch coordinator will respond within 2 hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-50 border border-emerald-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-slate-900">Inquiry Forwarded Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
                    Your request was routed to our commercial team. A specialist has also been notified via WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chief Babatunde Adeleke"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Agro-Venture Farms Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +234 803 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. procurement@agro-venture.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Primary Product Line Of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-bold"
                    >
                      <option value="Agro & Logistics Crates">Agro & Logistics Crates (500kg Load)</option>
                      <option value="Bottling Caps & Closures">Beverage & Tamper-Evident Closures (38mm / 28mm)</option>
                      <option value="Kids Seating & School Furniture">Kids Bear Chairs & School Furniture</option>
                      <option value="Reinforced Stools & Household Storage">Reinforced WonderStools & Storage Bins</option>
                      <option value="Sports Drinkware & Water Bottles">ProSport Water Bottles & Drinkware</option>
                      <option value="Custom OEM Tooling & Mould Engineering">Custom OEM Tooling & Dedicated Moulds</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                      Estimated Order Volume & Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Need 1,500 harvest crates delivered to Ibadan by next week in custom yellow..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-500 font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Chat With Plant Sales</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Comprehensive SEO Footer */}
      <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            
            {/* Col 1 & 2: Brand Identity */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white p-0.5 border border-white/20">
                  <Image
                    src="/images/DestmaPlastics.jpeg"
                    alt="Destma Plastic Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xl font-black text-white">
                    <span className="text-blue-400">DESTMA </span>
                    <span className="text-emerald-400">PLASTIC</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                    QUALITY • STRENGTH • VALUE
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-6">
                Nigeria’s benchmark manufacturer of heavy-duty agricultural crates, precision beverage closures, 
                shatter-proof children seating, and consumer plastic products. 100% recyclable virgin polymer formulation.
              </p>
              
              {/* Quality Standards Badges */}
              <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-emerald-300">
                  ISO 9001:2015
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-blue-300">
                  SON Certified
                </span>
                <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-amber-300">
                  100% Recyclable
                </span>
              </div>
            </div>

            {/* Col 3: Products */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Product Catalog</h4>
              <ul className="space-y-2">
                <li><a href="#products" className="hover:text-white transition-colors">AgroMax Harvest Crates</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">AeroSeal Tamper Closures</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Toddler Bear Chairs</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">ProFold Folding Chairs</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">WonderStools (IML Graphic)</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">ProSport Hydration Flasks</a></li>
              </ul>
            </div>

            {/* Col 4: Capabilities */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Engineering & OEM</h4>
              <ul className="space-y-2">
                <li><a href="#lab" className="hover:text-white transition-colors">Quality Testing Lab</a></li>
                <li><a href="#customizer" className="hover:text-white transition-colors">Custom Color Studio</a></li>
                <li><a href="#calculator" className="hover:text-white transition-colors">B2B Volume Estimator</a></li>
                <li><a href="#sustainability" className="hover:text-white transition-colors">Closed-Loop Recycling</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Custom Mould Prototyping</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">In-Mould Labelling (IML)</a></li>
              </ul>
            </div>

            {/* Col 5: Nationwide Coverage */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Delivery Corridors</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Lagos & Ogun Hub (24h)</li>
                <li>Ibadan & Oyo Valley (24-48h)</li>
                <li>Abuja FCT & North-Central</li>
                <li>Kano, Kaduna & North-West</li>
                <li>Port Harcourt & South-South</li>
                <li>West Africa Export (ECOWAS)</li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div>
              © 2026 Destma Plastic Limited. All rights reserved. Quality • Strength • Value.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Supply</a>
              <a href="#" className="hover:text-slate-300">ISO Documentation</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
