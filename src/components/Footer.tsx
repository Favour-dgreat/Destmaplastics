import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, AtSign, MapPin, Phone, Mail } from 'lucide-react';
import { SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-[#03091e] text-white border-t border-white/15 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-20 h-20 rounded-sm overflow-hidden bg-white/10 p-1 border border-white/20 group-hover:border-white/40 transition-colors">
                <Image
                  src="/images/DestmaPlastics.jpeg"
                  alt="Destma Plastic Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-widest text-white leading-none font-sans">
                  DESTMA <span className="text-[#00c853]">PLASTIC</span>
                </span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em] mt-1">
                  Quality | Strength | Value
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              Plastic packaging and moulded products from 53 machines in Ikotun-Egbe, Lagos — PET preforms and
              bottles, pharmaceutical containers, caps and closures, lunch boxes and household products, made to your specification.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black tracking-widest uppercase transition-all shadow-lg shadow-[#004EAB]/30 fluid-button"
              >
                <span>Request A Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Links with fluid hover slide */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Home Page</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Product Catalogue</Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">About Us & Machinery</Link>
              </li>
              <li>
                <Link href="/company#capabilities" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Plant Equipment</Link>
              </li>
              <li>
                <Link href="/company#quality" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Quality Assurance Lab</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:translate-x-1.5 transition-all duration-200 inline-block">Commercial Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span>4 Nik-Chuks St, Egbe, Lagos 102213, Lago</span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 group-hover:text-white transition-colors" />
                <span>
                  <a href="https://wa.me/2348147235913" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    +234 814 723 5913 (WhatsApp)
                  </a>
                  <span className="text-white/25"> • </span>
                  <a href="tel:+2348162965729" className="hover:text-white transition-colors">
                    +234 816 296 5729
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:support@destmaplastics.com" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">
                  support@destmaplastics.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <AtSign className="w-4 h-4 text-emerald-400 shrink-0 group-hover:text-white transition-colors" />
                <span className="flex flex-wrap gap-x-3">
                  <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Instagram {SITE.social.instagram.handle}
                  </a>
                  <a href={SITE.social.tiktok.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    TikTok {SITE.social.tiktok.handle}
                  </a>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Principles */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Destma Plastic Limited. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 uppercase font-semibold tracking-wider text-[11px]">
            <span>Quality</span>
            <span className="text-white/20">•</span>
            <span>Strength</span>
            <span className="text-white/20">•</span>
            <span>Value</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
