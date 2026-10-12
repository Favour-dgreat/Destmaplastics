'use client';

import React, { useMemo, useState } from 'react';
import confetti from 'canvas-confetti';
import { ArrowRight, Check, Send } from 'lucide-react';
import { PRODUCTS } from '@/data/plasticsData';

const BASE_OPTIONS = [...PRODUCTS.map((p) => p.name), 'Custom Moulding', 'Something else'];

function Field({
  label,
  type = 'text',
  required,
  value,
  onChange,
  textarea,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, '-');
  const shared =
    'peer w-full rounded-xl border border-slate-200 bg-white px-4 pt-6 pb-2.5 text-sm text-slate-900 placeholder-transparent transition-all focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/15';
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} rows={4} placeholder=" " value={value} onChange={(e) => onChange(e.target.value)} className={`${shared} resize-none`} />
      ) : (
        <input id={id} type={type} required={required} placeholder=" " value={value} onChange={(e) => onChange(e.target.value)} className={shared} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 transition-all duration-200 peer-placeholder-shown:top-[1.05rem] peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-green-600"
      >
        {label}
        {required && ' *'}
      </label>
    </div>
  );
}

export default function ContactForm({ initialProduct = null }: { initialProduct?: string | null }) {
  const fromUrl = initialProduct;

  // A product linked from the catalogue is pre-selected, even if it isn't in the list
  const options = useMemo(
    () => (fromUrl && !BASE_OPTIONS.includes(fromUrl) ? [fromUrl, ...BASE_OPTIONS] : BASE_OPTIONS),
    [fromUrl]
  );

  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [products, setProducts] = useState<string[]>(fromUrl ? [fromUrl] : []);
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [key]: v }));
  const toggle = (name: string) =>
    setProducts((prev) => (prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Destma Plastics Website Enquiry:*
- Name: ${form.name}
- Company: ${form.company || 'N/A'}
- Phone: ${form.phone}
- Email: ${form.email}
- Products: ${products.length ? products.join(', ') : 'Not specified'}
- Message: ${form.message}`;

    window.open(`https://wa.me/2348147235913?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const colors = ['#16a34a', '#4ade80', '#004EAB', '#ffffff'];
      confetti({ particleCount: 90, spread: 75, origin: { x: 0.35, y: 0.6 }, colors });
      setTimeout(() => confetti({ particleCount: 60, spread: 100, origin: { x: 0.65, y: 0.55 }, colors }), 220);
    }
  };

  if (sent) {
    return (
      <div className="rounded-3xl bg-white border border-slate-200 p-10 sm:p-14 text-center shadow-[0_30px_70px_-30px_rgba(15,23,42,0.3)] animate-scale-in">
        <svg viewBox="0 0 60 60" className="draw-check w-20 h-20 mx-auto" fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="30" cy="30" r="26" />
          <path d="M18 31l8 8 16-17" />
        </svg>
        <h3 className="mt-6 text-2xl font-black uppercase text-slate-900">Message on its way!</h3>
        <p className="mt-3 text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          WhatsApp has opened with your details filled in — just tap send. Our sales desk usually replies as soon as possible
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 hover:border-green-500 hover:text-green-700 text-slate-700 text-xs font-bold uppercase tracking-widest transition-colors"
        >
          Send another enquiry <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.3)]"
    >
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">Request a quote</span>
      <h2 className="mt-2 text-2xl sm:text-3xl font-black uppercase text-slate-900">Tell us what you need</h2>
      <p className="mt-2 text-sm text-slate-500">We&apos;ll come back with wholesale pricing as soon as possible.</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <Field label="Full name" required value={form.name} onChange={set('name')} />
        <Field label="Company" value={form.company} onChange={set('company')} />
        <Field label="Phone / WhatsApp" type="tel" required value={form.phone} onChange={set('phone')} />
        <Field label="Email" type="email" required value={form.email} onChange={set('email')} />
      </div>

      <fieldset className="mt-7">
        <legend className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Which products? <span className="normal-case tracking-normal font-medium text-slate-400">(pick any)</span>
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {options.map((name) => {
            const on = products.includes(name);
            return (
              <button
                key={name}
                type="button"
                onClick={() => toggle(name)}
                aria-pressed={on}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-xs font-semibold transition-all duration-300 active:scale-95 ${
                  on
                    ? 'bg-green-600 border-green-600 text-white shadow-md shadow-green-600/30'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-green-400 hover:text-green-700'
                }`}
              >
                <span className={`grid place-items-center transition-all duration-300 ${on ? 'w-3.5 opacity-100' : 'w-0 opacity-0'}`}>
                  <Check className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                {name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7">
        <Field label="Quantities, delivery city, colours or branding…" textarea value={form.message} onChange={set('message')} />
      </div>

      <button
        type="submit"
        className="sheen group mt-7 w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-[#004EAB] hover:bg-[#003d87] text-white text-xs sm:text-sm font-black uppercase tracking-widest shadow-xl shadow-[#004EAB]/30 transition-colors fluid-button"
      >
        <Send className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12" />
        Send enquiry via WhatsApp
      </button>
      <p className="mt-3 text-center text-[11px] text-slate-400">Opens WhatsApp with your details filled in.</p>
    </form>
  );
}
