'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Support and Quick Contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <span className="mr-3 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white text-xs font-bold border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:inline-block">
        Chat with Destma on WhatsApp
      </span>

      <a
        href="https://wa.me/2348147235913?text=Hello%20Destma%20Plastic%2C%20I%27m%20on%20your%20website%20and%20would%20like%20to%20make%20an%20enquiry."
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Direct WhatsApp Contact"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-40"></span>
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 relative z-10" />
      </a>
    </aside>
  );
}
