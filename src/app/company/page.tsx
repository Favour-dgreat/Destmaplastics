import React from 'react';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/site';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, CheckCircle2, ClipboardCheck, FileText, FlaskConical, Ruler, ShieldCheck } from 'lucide-react';
import PageHero from '@/components/fx/PageHero';
import CountUp from '@/components/fx/CountUp';
import TiltCard from '@/components/fx/TiltCard';
import Ticker from '@/components/fx/Ticker';
import ScrollTimeline from '@/components/fx/ScrollTimeline';
import TestMeters from '@/components/fx/TestMeters';
import MotionReveal from '@/components/MotionReveal';
import { APPROACH, CAPACITY_BY_APPLICATION, MACHINE_GROUPS, MACHINES, PARTNERSHIP, QA_WORKFLOW, STATS, TESTS } from '@/data/company';

export const metadata = pageMetadata({
  title: 'About Us — 53-Machine Plastic Manufacturing Plant in Lagos',
  description:
    'Destma Plastic runs 53 injection, PET preform, PET blowing and HDPE blow moulding machines in Ikotun-Egbe, Lagos — about 1.55 million pieces a day of bottles, preforms, closures, containers and household products.',
  path: '/company',
  keywords: ['plastic manufacturing company Lagos', 'plastic factory in Lagos', 'PET preform injection Nigeria', 'blow moulding company Nigeria', 'injection moulding Lagos'],
});

const GLANCE = [
  { label: 'Location', value: 'Ikotun-Egbe, Lagos, Nigeria' },
  { label: 'Core process', value: 'Injection, blow & compression moulding' },
  { label: 'Customer focus', value: 'B2B / Industrial' },
  { label: 'Materials', value: 'PET • HDPE • PP' },
];

const TIMELINE = [
  { stat: 'PET • HDPE • PP', ...QA_WORKFLOW[0] },
  { stat: '4 processes', ...QA_WORKFLOW[1] },
  { stat: 'In-line', ...QA_WORKFLOW[2] },
  { stat: 'Visual & dimensional', ...QA_WORKFLOW[3] },
  { stat: 'Packed & identified', ...QA_WORKFLOW[4] },
  { stat: 'Lagos to market', ...QA_WORKFLOW[5] },
];

const TEST_ICONS = [FlaskConical, ShieldCheck, Ruler];

const maxShare = Math.max(...CAPACITY_BY_APPLICATION.map((c) => c.share));
const CAPACITY_METERS = CAPACITY_BY_APPLICATION.map((c) => ({
  label: c.label,
  detail: c.detail,
  value: (c.share / maxShare) * 100,
  display: `${c.perDay.toLocaleString('en-US')} / day · ${c.share}%`,
}));

export default function CompanyPage() {
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/company' }])} />
      <PageHero
        crumb="About us"
        eyebrow="Destma Global • Ikotun-Egbe, Lagos"
        lines={['Engineering plastic', 'solutions for *industry.*']}
        description="Destma Plastic is a Nigeria-based plastic manufacturer serving businesses that need dependable plastic products and components — built on industrial injection moulding and a production-focused approach to quality and consistency."
        image="/images/catalogue/factory-blow-moulding-team.jpg"
        actions={
          <>
            <Link
              href="/contact"
              className="sheen inline-flex items-center gap-2 px-7 py-4 rounded-sm bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-[#004EAB]/40 transition-colors fluid-button"
            >
              Talk to our team <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-sm border border-white/25 hover:border-green-400 hover:text-green-300 text-white text-xs font-bold uppercase tracking-widest transition-colors fluid-button"
            >
              See our machines
            </a>
          </>
        }
        aside={
          <div className="grid grid-cols-2 gap-4">
            {[
              { el: <CountUp to={STATS.machines} />, label: 'Installed machines' },
              { el: <CountUp to={STATS.lines} />, label: 'Production lines' },
              { el: <CountUp to={1.55} decimals={2} suffix="M" />, label: 'Pieces per day' },
              { el: <><span>≈</span><CountUp to={STATS.piecesPerYearM} suffix="M" /></>, label: 'Pieces per year' },
            ].map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md p-5 sm:p-6 hover:bg-white/15 hover:border-green-400/60 transition-colors"
                style={{ animation: `float-gentle ${5 + i}s ease-in-out ${i * 0.4}s infinite` }}
              >
                <div className="text-2xl sm:text-3xl xl:text-4xl font-black text-white whitespace-nowrap">{s.el}</div>
                <div className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-300">{s.label}</div>
                <div className="mt-4 h-1 w-10 rounded-full bg-green-400" />
              </div>
            ))}
          </div>
        }
      />

      <Ticker items={['Quality', 'Strength', 'Value', 'Injection moulding', 'PET processing', 'Blow moulding', 'Custom moulds', 'Made in Lagos']} />

      {/* ================= WHO WE ARE (WHITE) ================= */}
      <section className="relative overflow-hidden bg-white text-slate-900">
        <div className="absolute inset-0 bg-dots-light [mask-image:linear-gradient(to_bottom,transparent,#000_30%,#000_70%,transparent)]" />
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <MotionReveal direction="right" className="relative h-[420px] sm:h-[520px]">
            <div className="absolute top-0 left-0 w-[74%] h-[64%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
              <Image src="/images/catalogue/factory-real-production.jpg" alt="Blow moulding machine on the Destma production floor" fill sizes="(max-width: 1024px) 74vw, 480px" className="object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="absolute bottom-0 right-0 w-[58%] h-[52%] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 rotate-[4deg] hover:rotate-0 transition-transform duration-700 animate-float-gentle border-4 border-white">
              <Image src="/images/catalogue/factory-material-loading.jpg" alt="Operator loading resin into a hopper dryer" fill sizes="(max-width: 1024px) 58vw, 360px" className="object-cover" />
            </div>
            <div className="absolute bottom-[14%] left-[4%] rounded-2xl bg-green-600 text-white px-5 py-4 shadow-xl shadow-green-600/30 animate-float-slow">
              <div className="text-3xl font-black"><CountUp to={53} /></div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-green-100">Machines, one roof</div>
            </div>
          </MotionReveal>

          <div>
            <MotionReveal direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">Who we are</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
                Built around <br />
                <span className="text-green-600">reliable production.</span>
              </h2>
            </MotionReveal>
            <MotionReveal direction="up" delay={120}>
              <p className="mt-6 text-base text-slate-600 leading-relaxed">
                Our core manufacturing capability is industrial injection moulding, alongside PET preform injection,
                PET bottle blowing and HDPE blow moulding. The platform supports PET preforms and bottles, HDPE
                containers, injection-moulded caps and closures, food packaging, lunch boxes and customer-specific
                plastic products.
              </p>
              <dl className="mt-8 grid sm:grid-cols-2 gap-4">
                {GLANCE.map((g) => (
                  <div key={g.label} className="rounded-2xl border border-slate-200 p-4">
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-green-600">{g.label}</dt>
                    <dd className="mt-1 text-sm font-black text-slate-900">{g.value}</dd>
                  </div>
                ))}
              </dl>
            </MotionReveal>
          </div>
        </div>

        {/* Manufacturing approach */}
        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          <MotionReveal direction="up">
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-slate-900 mb-6">Our manufacturing approach</h3>
          </MotionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPROACH.map((a, i) => (
              <MotionReveal key={a.title} direction="up" delay={i * 100} className="h-full">
                <TiltCard className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-400 hover:shadow-xl hover:shadow-green-600/10 transition-[border-color,box-shadow] duration-500">
                  <span className="w-11 h-11 rounded-full bg-[#03091e] text-white text-sm font-black flex items-center justify-center group-hover:bg-green-600 transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-4 text-lg font-black uppercase text-green-600">{a.title}</h4>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{a.body}</p>
                </TiltCard>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MACHINES (LIGHT) ================= */}
      <section id="capabilities" className="scroll-mt-28 bg-slate-50 text-slate-900 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <MotionReveal direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">Manufacturing capability</span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight">53 machines. 9 lines.</h2>
            </div>
            <p className="text-slate-500 max-w-md">
              Integrated manufacturing across PET preform injection, PET bottle blowing, HDPE blow moulding and injection moulding.
            </p>
          </MotionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {MACHINE_GROUPS.map((g, i) => (
              <MotionReveal key={g.label} direction="up" delay={i * 100} className="h-full">
                <TiltCard className="group overflow-hidden rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 hover:border-green-400 hover:shadow-2xl hover:shadow-green-600/10 transition-[border-color,box-shadow] duration-500">
                  <div className="text-5xl sm:text-6xl font-black text-green-600"><CountUp to={g.count} /></div>
                  <div className="mt-2 text-sm font-black uppercase">{g.label}</div>
                  <span className="mt-5 block h-1 w-10 rounded-full bg-green-500 group-hover:w-20 transition-all duration-500" />
                </TiltCard>
              </MotionReveal>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
            <MotionReveal direction="up">
              <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-[0_30px_70px_-40px_rgba(15,23,42,0.35)]">
                <div className="px-6 py-4 bg-[#03091e] text-white text-xs font-black uppercase tracking-widest">Installed machines & daily capacity</div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[620px]">
                    <thead>
                      <tr className="text-left text-[11px] uppercase tracking-wider text-slate-500 border-b border-slate-200">
                        <th className="px-6 py-3 font-bold">Production line</th>
                        <th className="px-3 py-3 font-bold">Machine</th>
                        <th className="px-3 py-3 font-bold text-center">Qty</th>
                        <th className="px-3 py-3 font-bold">Main product</th>
                        <th className="px-6 py-3 font-bold text-right">Per day</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {MACHINES.map((m) => (
                        <tr key={`${m.line}-${m.machine}`} className="hover:bg-green-50/60 transition-colors">
                          <td className="px-6 py-3 font-bold">{m.line}</td>
                          <td className="px-3 py-3 text-slate-600">{m.machine}</td>
                          <td className="px-3 py-3 text-center font-black">{m.qty}</td>
                          <td className="px-3 py-3 text-slate-600">{m.product}</td>
                          <td className="px-6 py-3 text-right font-black tabular-nums">{m.daily.toLocaleString('en-US')}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-green-50 font-black">
                        <td className="px-6 py-3" colSpan={2}>Total installed equipment</td>
                        <td className="px-3 py-3 text-center">{STATS.machines}</td>
                        <td className="px-3 py-3" />
                        <td className="px-6 py-3 text-right tabular-nums">{STATS.piecesPerDay.toLocaleString('en-US')}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <p className="px-6 py-4 text-[11px] text-slate-400 border-t border-slate-100">
                  Capacity is an installed-machine estimate; actual output depends on mould, cavitation, cycle time, product weight and shift pattern.
                </p>
              </div>
            </MotionReveal>

            <MotionReveal direction="left" delay={100}>
              <div className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-8 shadow-[0_30px_70px_-40px_rgba(15,23,42,0.35)]">
                <span className="text-xs font-black uppercase tracking-widest text-slate-900">Capacity by application</span>
                <p className="mt-1 mb-7 text-xs text-slate-500">Share of {STATS.piecesPerDay.toLocaleString('en-US')} pieces per day</p>
                <TestMeters meters={CAPACITY_METERS} />
              </div>
              <div className="mt-6 relative h-48 rounded-3xl overflow-hidden">
                <Image src="/images/catalogue/factory-konza-line.jpg" alt="Row of KONZA injection moulding machines" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                <span className="absolute left-4 bottom-4 px-3 py-1 rounded-full bg-white/90 text-[10px] font-black uppercase tracking-widest">Injection moulding platform</span>
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ================= QUALITY WORKFLOW (GREEN) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a7f35] via-[#22923f] to-[#1f8a3a] text-white">
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-[130px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <MotionReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-100">Quality assurance workflow</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight">From resin to delivery</h2>
            <p className="mt-4 text-green-50/90">Controlled manufacturing from material preparation to customer supply.</p>
          </MotionReveal>
          <ScrollTimeline steps={TIMELINE} />
        </div>
      </section>

      {/* ================= TESTING & COMPLIANCE (WHITE) ================= */}
      <section id="quality" className="scroll-mt-28 bg-white text-slate-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-start">
          <MotionReveal direction="right">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">Compliance, materials & testing</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.05]">
              Engineered for <br /> <span className="text-green-600">consistency.</span>
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed max-w-lg">
              Approved PET, HDPE and PP resins are selected for each product and application, with grades chosen for
              the end use — food contact, pharmaceutical or general. Relevant certifications, registrations, test
              reports and product-specific compliance documentation are available according to product, application
              and customer requirements.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              {[
                { icon: Award, label: 'Certifications' },
                { icon: FileText, label: 'Registrations' },
                { icon: ClipboardCheck, label: 'Test reports' },
                { icon: ShieldCheck, label: 'Compliance files' },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-2.5 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold">
                  <d.icon className="w-4 h-4 text-green-600" /> {d.label}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="sheen inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#004EAB] hover:bg-[#003d87] text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-[#004EAB]/30 transition-colors fluid-button"
              >
                Request a quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-slate-200 hover:border-green-500 hover:text-green-700 text-slate-800 text-xs font-bold uppercase tracking-widest transition-colors fluid-button"
              >
                View products
              </Link>
            </div>
          </MotionReveal>

          <div className="space-y-4">
            {TESTS.map((t, i) => {
              const Icon = TEST_ICONS[i];
              return (
                <MotionReveal key={t.title} direction="left" delay={i * 120}>
                  <div className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 hover:border-green-400 hover:shadow-xl hover:shadow-green-600/10 transition-all duration-500">
                    <span className="w-14 h-14 shrink-0 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white group-hover:rotate-[-8deg] transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </span>
                    <div>
                      <h3 className="text-lg font-black uppercase">{t.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">{t.body}</p>
                      <span className="mt-3 inline-block px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-600">{t.applies}</span>
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
            <MotionReveal direction="up" delay={360}>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Consistency', 'Dimensions', 'Appearance', 'Traceability', 'Product conformity'].map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {f}
                  </span>
                ))}
              </div>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* ================= WHY DESTMA (LIGHT) ================= */}
      <section className="bg-slate-50 border-t border-slate-200 text-slate-900">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <MotionReveal direction="up" className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-green-600">Why choose Destma Plastic</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black uppercase tracking-tight">A partner for quality & value</h2>
          </MotionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PARTNERSHIP.map((p, i) => (
              <MotionReveal key={p.title} direction="up" delay={(i % 3) * 100} className="h-full">
                <div className="h-full rounded-3xl bg-white border border-slate-200 p-7 hover:border-green-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-600/10 transition-all duration-500">
                  <span className="text-4xl font-black text-green-600/20">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-lg font-black uppercase">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{p.body}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
