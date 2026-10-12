import React, { Suspense } from 'react';
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageHero from '@/components/fx/PageHero';
import MotionReveal from '@/components/MotionReveal';
import ContactForm from '@/components/contact/ContactForm';
import OpenStatus from '@/components/contact/OpenStatus';

export const metadata = {
  title: 'Contact Us',
  description:
    'Call, WhatsApp or email the Destma Plastic sales desk for wholesale pricing, proforma invoices, factory visits and custom moulding.',
};

const QUICK = [
  { icon: Phone, label: 'Call sales', value: '+234 803 337 8620', href: 'tel:+2348033378620' },
  { icon: MessageCircle, label: 'WhatsApp us', value: 'Chat with the desk', href: 'https://wa.me/234800337862', external: true },
  { icon: Mail, label: 'Email', value: 'info@destmaplastics.com', href: 'mailto:info@destmaplastics.com' },
];

const NEXT_STEPS = [
  'We confirm stock, colours and delivery date',
  'You receive a proforma invoice with volume pricing',
  'Goods are loaded and delivered by our own fleet',
];

function FormSkeleton() {
  return <div className="h-[720px] rounded-3xl bg-slate-100 animate-pulse" />;
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      <PageHero
        crumb="Contact"
        eyebrow="Sales desk • replies within 2 hours"
        lines={["Let's make", 'something *solid.*']}
        description="Bulk orders, proforma invoices, factory visits or a brand-new mould — talk to the people who run the plant."
        aside={
          <div className="space-y-4">
            {QUICK.map((q, i) => (
              <a
                key={q.label}
                href={q.href}
                {...(q.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md p-5 hover:bg-white hover:border-white transition-all duration-500 hover:-translate-x-2"
                style={{ animation: `float-gentle ${5 + i}s ease-in-out ${i * 0.5}s infinite` }}
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-green-500 text-white flex items-center justify-center group-hover:bg-green-600 group-hover:rotate-[-10deg] transition-all duration-500">
                  <q.icon className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-green-600 transition-colors">{q.label}</span>
                  <span className="block text-base font-bold text-white group-hover:text-slate-900 truncate transition-colors">{q.value}</span>
                </span>
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </a>
            ))}
          </div>
        }
      />

      {/* ================= FORM + INFO (WHITE) ================= */}
      <section className="relative bg-slate-50 text-slate-900">
        <div className="absolute inset-0 bg-dots-light [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <MotionReveal direction="up" className="lg:col-span-7">
            <Suspense fallback={<FormSkeleton />}>
              <ContactForm />
            </Suspense>
          </MotionReveal>

          <MotionReveal direction="left" delay={150} className="lg:col-span-5 lg:sticky lg:top-28">
            <aside className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a7f35] via-[#22923f] to-[#2aa54a] text-white p-7 sm:p-10 shadow-2xl shadow-green-900/20">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-100">Plant desk</span>
                  <OpenStatus />
                </div>

                <ul className="mt-8 space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-green-100" />
                    <div>
                      <span className="block text-sm font-black uppercase">Main plant & warehouse</span>
                      <span className="block mt-1 text-sm text-green-50/90">4 Nick-Chuks Street, beside NNPC Filling Station, opposite The Synagogue, Ikotun-Egbe Road, Lagos, Nigeria</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="w-5 h-5 shrink-0 mt-0.5 text-green-100" />
                    <div className="text-sm">
                      <a href="tel:+234800337862" className="block font-bold hover:underline underline-offset-4">+234 (0) 800 DESTMA <span className="font-normal text-green-100">· toll-free</span></a>
                      <a href="tel:+2348033378620" className="block mt-1 font-bold hover:underline underline-offset-4">+234 803 337 8620 <span className="font-normal text-green-100">· wholesale</span></a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="w-5 h-5 shrink-0 mt-0.5 text-green-100" />
                    <div className="text-sm">
                      <span className="block font-bold">Monday – Saturday, 8:00 AM – 6:00 PM</span>
                      <span className="block mt-1 text-green-50/80">24-hour shifts run for contract production.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-100">What happens next</span>
                  <ol className="mt-5 space-y-4">
                    {NEXT_STEPS.map((step, i) => (
                      <li key={step} className="group flex items-center gap-4">
                        <span className="w-9 h-9 shrink-0 rounded-full bg-white text-green-700 text-sm font-black flex items-center justify-center group-hover:scale-110 transition-transform">
                          {i + 1}
                        </span>
                        <span className="text-sm text-white">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </aside>
          </MotionReveal>
        </div>
      </section>

      {/* ================= MAP ================= */}
      <section className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <MotionReveal direction="scale">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <iframe
                title="Destma Plastic plant location"
                src="https://www.google.com/maps?q=4+Nick-Chuks+Street,+Ikotun-Egbe+Road,+Ikotun,+Lagos,+Nigeria&z=16&output=embed"
                className="absolute inset-0 w-full h-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute left-4 bottom-4 sm:left-8 sm:bottom-8 max-w-xs rounded-2xl bg-white/95 backdrop-blur p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <span className="relative flex w-10 h-10 items-center justify-center rounded-full bg-green-600 text-white">
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ring-pulse" />
                    <MapPin className="relative w-5 h-5" />
                  </span>
                  <div>
                    <span className="block text-sm font-black uppercase text-slate-900">Visit the plant</span>
                    <span className="block text-xs text-slate-500">4 Nick-Chuks St, beside NNPC, Ikotun-Egbe Rd</span>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=4+Nick-Chuks+Street,+Ikotun-Egbe+Road,+Ikotun,+Lagos,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#004EAB] hover:text-green-700 transition-colors"
                >
                  Get directions <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>
    </div>
  );
}
