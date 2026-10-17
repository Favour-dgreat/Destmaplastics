import React, { Suspense } from 'react';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';
import { SITE, pageMetadata } from '@/lib/site';
import { BRIEF_ITEMS } from '@/data/company';
import { ArrowUpRight, AtSign, Clock, Mail, MapPin, MessageCircle, Phone, Truck } from 'lucide-react';
import PageHero from '@/components/fx/PageHero';
import MotionReveal from '@/components/MotionReveal';
import ContactForm from '@/components/contact/ContactForm';
import ContactFormFromUrl from '@/components/contact/ContactFormFromUrl';
import OpenStatus from '@/components/contact/OpenStatus';

export const metadata = pageMetadata({
  title: 'Contact Us — Get Wholesale Prices',
  description:
    'Call 0816 296 5729 or WhatsApp 0814 723 5913 for wholesale plastic crates, bottle caps and chairs. Visit us at 4 Nick-Chuks Street, Ikotun-Egbe Road, Lagos. Open Monday–Saturday, 8am–6pm.',
  path: '/contact',
  keywords: ['plastic company contact Lagos', 'plastic manufacturer Ikotun', 'wholesale plastic supplier Lagos'],
});

const QUICK = [
  { icon: Phone, label: 'Call sales', value: '+234 816 296 5729', href: 'tel:+2348162965729' },
  { icon: MessageCircle, label: 'WhatsApp us', value: 'Chat with the desk', href: 'https://wa.me/2348147235913', external: true },
  { icon: Mail, label: 'Email', value: 'support@destmaplastics.com', href: 'mailto:support@destmaplastics.com' },
];

// Order workflow from the 2026/2027 catalogue
const NEXT_STEPS = [
  'Requirement — share application, quantity and specification',
  'Technical review — material, format and process aligned to your brief',
  'Sample / mould — sample approval and tooling where needed',
  'Production & QC — controlled production, inspection and delivery',
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
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
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromUrl />
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
                      <span className="block mt-1 text-sm text-green-50/90">4 Nik-Chuks St, Egbe, Lagos 102213, Lagos/span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="w-5 h-5 shrink-0 mt-0.5 text-green-100" />
                    <div className="text-sm">
                      <a href="https://wa.me/2348147235913" target="_blank" rel="noopener noreferrer" className="block font-bold hover:underline underline-offset-4">+234 814 723 5913 <span className="font-normal text-green-100">· WhatsApp</span></a>
                      <a href="tel:+2348162965729" className="block mt-1 font-bold hover:underline underline-offset-4">+234 816 296 5729 <span className="font-normal text-green-100">· calls</span></a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="w-5 h-5 shrink-0 mt-0.5 text-green-100" />
                    <div className="text-sm">
                      <span className="block font-bold">Monday – Saturday, 8:00 AM – 6:00 PM</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Truck className="w-5 h-5 shrink-0 mt-0.5 text-green-100" />
                    <div className="text-sm">
                      <span className="block font-bold">Nationwide & export</span>
                      <span className="block mt-1 text-green-50/80">Lagos-based, with access to the Apapa and Tin Can Island ports and road links for nationwide distribution.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <AtSign className="w-5 h-5 shrink-0 mt-0.5 text-green-100" />
                    <div className="text-sm flex flex-wrap gap-x-5 gap-y-1">
                      <a href={SITE.social.instagram.url} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline-offset-4">
                        Instagram {SITE.social.instagram.handle}
                      </a>
                      <a href={SITE.social.tiktok.url} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline underline-offset-4">
                        TikTok {SITE.social.tiktok.handle}
                      </a>
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

                <div className="mt-8 pt-8 border-t border-white/20">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-100">What to send us</span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {BRIEF_ITEMS.map((b) => (
                      <span key={b} className="px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold">{b}</span>
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-green-50/80">The clearer the brief, the faster the technical review.</p>
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
