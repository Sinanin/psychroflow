import { articles } from '@/lib/articles'
import { MONETISATION_ENABLED } from '@/lib/config'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

/* ─── App mockup — clean engineering UI, not retro terminal ── */
function AppPreview() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-deep border border-rim bg-night1">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3 bg-night2 border-b border-rim">
        <div className="flex items-center gap-2.5">
          <div className="live-dot w-2 h-2 rounded-full bg-sky flex-shrink-0"/>
          <span className="font-body text-snow2 text-xs font-medium">PsychroFlow — Cooling Coil Analysis</span>
        </div>
        <span className="font-body text-snow3 text-xs">Alt: 1,753 m · 82.5 kPa</span>
      </div>

      <div className="grid grid-cols-5">
        {/* Chart */}
        <div className="col-span-3 p-5 border-r border-rim">
          <svg viewBox="0 0 280 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Neutral grid */}
            {[0,1,2,3,4,5].map(i => (
              <line key={`h${i}`} x1="28" y1={15+i*30} x2="270" y2={15+i*30}
                stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            ))}
            {[0,1,2,3,4,5,6].map(i => (
              <line key={`v${i}`} x1={28+i*36} y1="10" x2={28+i*36} y2="175"
                stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            ))}
            {/* Saturation curve — blue, not green */}
            <path d="M28,172 C55,158 85,132 115,100 C145,68 175,38 205,18"
              fill="none" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5"/>
            {/* RH lines */}
            {[0.2, 0.12, 0.06].map((o, i) => (
              <path key={i}
                d={`M28,172 C55,165 85,148 115,122 C145,96 175,${68-i*16} 240,${44-i*14}`}
                fill="none" stroke={`rgba(56,189,248,${o})`} strokeWidth="1" strokeDasharray="4 3"/>
            ))}
            {/* Process line — clean white */}
            <line x1="200" y1="52" x2="108" y2="118"
              stroke="#F1F5F9" strokeWidth="1.8" strokeLinecap="round"/>
            {/* Arrow head */}
            <polygon points="108,118 116,108 100,110" fill="#F1F5F9"/>
            {/* State points */}
            <circle cx="200" cy="52" r="5" fill="#080E1A" stroke="#38BDF8" strokeWidth="2"/>
            <circle cx="108" cy="118" r="5" fill="#080E1A" stroke="#38BDF8" strokeWidth="2"/>
            {/* Labels — white, readable */}
            <text x="207" y="50" fill="rgba(241,245,249,0.75)" fontSize="7.5" fontFamily="inherit">OA 34.0°C</text>
            <text x="68" y="132" fill="rgba(241,245,249,0.75)" fontSize="7.5" fontFamily="inherit">SA 13.0°C</text>
            {/* Axis */}
            {['10','15','20','25','30','35'].map((t, i) => (
              <text key={t} x={40+i*36} y="188" fill="rgba(255,255,255,0.25)" fontSize="7" textAnchor="middle">{t}</text>
            ))}
            <text x="10" y="95" fill="rgba(255,255,255,0.25)" fontSize="7" textAnchor="middle" transform="rotate(-90,10,95)">W g/kg</text>
          </svg>
        </div>

        {/* Results panel */}
        <div className="col-span-2 p-4 flex flex-col gap-1">
          <p className="font-body text-snow3 text-xs font-semibold tracking-widest uppercase mb-2">Results</p>
          {[
            { k: 'Q Total',  v: '28.4 kW' },
            { k: 'Q Sens',   v: '22.1 kW' },
            { k: 'Q Lat',    v: '6.3 kW'  },
            { k: 'SHR',      v: '0.781'   },
            { k: 'Flow',     v: '2.8 m³/s'},
            { k: 'BF',       v: '0.142'   },
          ].map(r => (
            <div key={r.k} className="flex justify-between items-center py-1.5 border-b border-rim/50">
              <span className="font-body text-snow3 text-xs">{r.k}</span>
              <span className="font-body text-sky text-sm font-semibold">{r.v}</span>
            </div>
          ))}
          <div className="mt-3 pt-3 border-t border-rim">
            <p className="font-body text-snow3 text-xs font-semibold tracking-widest uppercase mb-2">Conditions</p>
            <p className="font-body text-snow2 text-xs leading-relaxed">OA 34.0°C · 65% RH</p>
            <p className="font-body text-snow2 text-xs leading-relaxed">SA 13.0°C · 95% RH</p>
          </div>
        </div>
      </div>

      {/* Status bar */}
      <div className="px-5 py-2.5 bg-night2 border-t border-rim flex items-center gap-6">
        {['ASHRAE 55', 'ICAO Atmosphere', 'Altitude Corrected'].map(t => (
          <span key={t} className="font-body text-snow3 text-xs">{t}</span>
        ))}
      </div>
    </div>
  )
}

/* ═════════════════════════════════════════════════════════════
   PAGE
═════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ══ HERO — dark navy ══════════════════════════════════ */}
      <section className="tex relative bg-night overflow-hidden min-h-screen flex items-center px-6 py-32">
        <div className="grid-lines absolute inset-0 z-0"/>
        {/* Ambient glow — subdued */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-sky opacity-[0.05] blur-[120px] pointer-events-none"/>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div className="min-w-0">
              <div className="rise r1 flex items-center gap-2.5 mb-8">
                <div className="live-dot w-1.5 h-1.5 rounded-full bg-sky flex-shrink-0"/>
                <span className="eyebrow text-snow3">Precision HVAC Engineering Tools</span>
              </div>

              <h1 className="rise r2 head-xl text-snow mb-6"
                  style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}>
                Engineering<br/>
                Intelligence<br/>
                <span className="text-sky">for HVAC<br/>Professionals</span>
              </h1>

              <p className="rise r3 font-body text-snow2 text-lg leading-relaxed mb-10 max-w-md font-light">
                Professional psychrometric analysis, curated document templates,
                and deep technical knowledge — built by a working engineer.
              </p>

              <div className="rise r4 flex flex-wrap gap-3 mb-12">
                <a href="/psychroflow.html" target="_blank" rel="noopener noreferrer"
                   className="btn-primary">
                  Launch PsychroFlow Free →
                </a>
                {MONETISATION_ENABLED && (
                  <Link href="/templates" className="btn-ghost-dark">
                    Browse Templates
                  </Link>
                )}
              </div>

              {/* Stats — clean, no border gimmicks */}
              <div className="rise r4 flex items-center gap-8">
                {[
                  { n: '7',    l: 'Process types' },
                  { n: '20+',  l: 'Templates'     },
                  { n: 'ICAO', l: 'Altitude model' },
                ].map(s => (
                  <div key={s.l} className="border-l border-rim2 pl-5">
                    <div className="head-md text-snow text-2xl">{s.n}</div>
                    <div className="font-body text-snow3 text-xs mt-0.5 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* App preview */}
            <div className="rise r3 hidden lg:block min-w-0">
              <AppPreview />
            </div>
          </div>
        </div>
      </section>

      {/* ══ STANDARDS — slim dark strip ═══════════════════════ */}
      <div className="bg-night2 border-y border-rim py-4 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2 items-center">
          {['ASHRAE Standards', 'ECSA Recognised', 'SANS Compliant', 'ICAO Atmosphere Model', 'BSL-3 Validated'].map((s, i) => (
            <div key={s} className="flex items-center gap-4">
              {i > 0 && <span className="text-rim2 hidden sm:inline text-xs">·</span>}
              <span className="eyebrow text-snow3">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ APPS — light ═════════════════════════════════════ */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="eyebrow text-steel mb-3">The App Suite</p>
            <h2 className="head-xl text-ink" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              Purpose-built for<br/>engineers
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* PsychroFlow — standout dark card on light section */}
            <div className="tex relative rounded-xl overflow-hidden bg-night shadow-deep">
              <div className="grid-lines absolute inset-0 opacity-50"/>
              <div className="relative z-10 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-night2 border border-rim flex items-center justify-center">
                      <svg className="w-5 h-5 text-sky" viewBox="0 0 20 20" fill="none">
                        <path d="M2 13C3.5 9.5 5 7.5 6.5 7.5S9.5 11.5 11 11.5 14 7.5 15.5 7.5 18 9.5 19 13"
                          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="2" y1="16" x2="18" y2="16" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="head-md text-snow text-xl">PsychroFlow</h3>
                      <p className="eyebrow text-snow3 mt-0.5">Psychrometric Analysis</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky/10 border border-sky/30">
                    <div className="live-dot w-1.5 h-1.5 rounded-full bg-sky"/>
                    <span className="font-body text-sky text-xs font-semibold">Live</span>
                  </div>
                </div>

                <p className="font-body text-snow2 text-sm leading-relaxed mb-6">
                  Plot air treatment processes on an interactive psychrometric chart. Cooling coil,
                  heating, humidification, HRV, air mixing — with ICAO altitude correction.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-7">
                  {['7 process types', 'ICAO altitude model', 'PDF export', 'Quick Start wizard'].map(f => (
                    <div key={f} className="flex items-center gap-2 px-3 py-2 rounded-md bg-night2 border border-rim">
                      <div className="w-1 h-1 rounded-full bg-sky flex-shrink-0"/>
                      <span className="font-body text-snow2 text-xs">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href="/psychroflow.html" target="_blank" rel="noopener noreferrer"
                     className="btn-primary flex-1 text-center !block">
                    Launch App →
                  </a>
                  <Link href="/apps/psychroflow"
                     className="btn-ghost-dark !px-4 text-sm text-center">
                    Details
                  </Link>
                </div>
                <p className="font-body text-snow3 text-xs text-center mt-3">
                  Free to use · No account required
                </p>
              </div>
            </div>

            {/* DuctFlow */}
            <div className="rounded-xl bg-white border border-surface1 p-8 flex flex-col shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-surface1 flex items-center justify-center">
                    <svg className="w-5 h-5 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="head-md text-ink text-xl">DuctFlow</h3>
                    <p className="eyebrow text-steel mt-0.5">Duct Sizing & Pressure Drop</p>
                  </div>
                </div>
                <span className="eyebrow text-steel px-3 py-1.5 rounded-full border border-surface1 bg-surface">
                  In Dev
                </span>
              </div>

              <p className="font-body text-slate text-sm leading-relaxed mb-6 flex-1">
                Design and size ductwork systems with automatic pressure drop calculations,
                velocity checks, and full friction loss summaries.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-7">
                {['Equal friction method', 'Velocity reduction', 'Pressure drop calc', 'Duct schedule export'].map(f => (
                  <div key={f} className="flex items-center gap-2 px-3 py-2 rounded-md bg-surface border border-surface1">
                    <div className="w-1 h-1 rounded-full bg-steel flex-shrink-0"/>
                    <span className="font-body text-slate text-xs">{f}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-sky/5 border border-sky/20 mb-5">
                <p className="font-body text-ink2 text-xs font-semibold mb-1">Early access — 50% off launch price</p>
                <p className="font-body text-slate text-xs leading-relaxed">Register interest and lock in half price on launch.</p>
              </div>
              <Link href="/contact" className="btn-dark text-center !block">
                Register Interest →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TEMPLATES — dark ════════════════════════════════ */}
      <section className="tex relative bg-night py-24 px-6">
        <div className="grid-lines absolute inset-0 opacity-50"/>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div className="mb-14 lg:mb-0">
              <p className="eyebrow text-snow3 mb-3">Template Library</p>
              <h2 className="head-xl text-snow mb-6" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
                Stop building<br/>from scratch
              </h2>
              <p className="font-body text-snow2 text-lg leading-relaxed mb-4 font-light">
                A growing library of professional engineering document templates —
                structured, immediately editable, built from real project work.
              </p>
              <div className="border-l-2 border-sky pl-4 mb-8">
                <p className="font-body text-snow2 text-sm leading-relaxed">
                  Every template has been used on real HVAC and containment lab
                  projects — not generated from a textbook.
                </p>
              </div>
              <Link href="/templates" className="btn-primary">
                Browse Templates →
              </Link>
            </div>

            <div className="space-y-3">
              {[
                { n: '01', label: 'HVAC Design',       items: 'Design Basis · Load Summaries · Equipment Schedules', count: '7' },
                { n: '02', label: 'Commissioning',      items: 'Pre-Comm Checklists · TAB Reports · Pressure Cascades', count: '6' },
                { n: '03', label: 'Project Management', items: 'RFI Logs · Submittal Register · Handover Docs',        count: '5' },
              ].map(cat => (
                <div key={cat.n}
                     className="lift flex items-center gap-5 p-5 rounded-lg bg-night2 border border-rim cursor-pointer">
                  <span className="font-body text-snow3 text-xs font-medium w-6 flex-shrink-0">{cat.n}</span>
                  <div className="flex-1 border-l border-rim pl-4">
                    <div className="font-body text-snow font-semibold text-sm mb-0.5">{cat.label}</div>
                    <div className="font-body text-snow3 text-xs leading-relaxed">{cat.items}</div>
                  </div>
                  <span className="font-body text-sky text-sm font-semibold flex-shrink-0">{cat.count}</span>
                </div>
              ))}
              <p className="font-body text-snow3 text-xs text-right pt-1">
                + 1–2 new templates added monthly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOUNDER — mid-dark ══════════════════════════════ */}
      <section className="bg-night2 border-y border-rim py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-5 mb-6">
            <div className="w-0.5 h-20 bg-sky flex-shrink-0 mt-1 opacity-60"/>
            <blockquote className="head-lg text-snow italic"
                        style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.75rem)' }}>
              "I built PsychroStudio because I was tired of doing the same psychrometric
              calculations from scratch on every project."
            </blockquote>
          </div>
          <div className="pl-5">
            <p className="font-body text-snow2 text-sm leading-relaxed mb-4 max-w-2xl font-light">
              PsychroStudio is built by a mechanical engineer with 7+ years of HVAC design and
              commissioning experience — including BSL-3 containment laboratory facilities and
              complex cleanroom environments. Every tool and template reflects real project experience.
            </p>
            <span className="eyebrow text-snow3">Founder · Mechanical Engineer · ECSA</span>
          </div>
        </div>
      </section>

      {/* ══ ARTICLES — light ════════════════════════════════ */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow text-steel mb-3">Knowledge Base</p>
              <h2 className="head-xl text-ink" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
                Technical articles
              </h2>
            </div>
            <Link href="/articles"
              className="font-body text-skyD text-sm font-semibold hover:underline hidden md:inline">
              All articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <Link key={a.slug} href={`/articles/${a.slug}`}
                className="lift group flex flex-col rounded-xl border border-surface1 bg-white overflow-hidden shadow-card">
                {/* Card header — dark for strong contrast */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-night border-b border-surface1">
                  <span className="font-body text-snow3 text-xs font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="eyebrow text-sky">{a.category}</span>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="head-md text-ink text-base leading-snug mb-4 group-hover:text-skyD transition-colors flex-1">
                    {a.title}
                  </h3>
                  <div className="flex items-center justify-between pt-3 border-t border-surface1">
                    <span className="font-body text-steel text-xs font-medium">{a.read}</span>
                    <span className="font-body text-skyD text-sm font-bold">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden text-center mt-8">
            <Link href="/articles"
              className="font-body text-skyD text-sm font-semibold hover:underline">
              All articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ PRICING TEASER — dark ═══════════════════════════ */}
      <section id="pricing" className="tex relative bg-night py-24 px-6">
        <div className="grid-lines absolute inset-0 opacity-50"/>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="eyebrow text-snow3 mb-3">Pricing</p>
            <h2 className="head-xl text-snow" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}>
              Pay for what<br/>you use
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'PsychroFlow Pro', price: 'R149', period: '/mo', desc: 'Full app, PDF export, project saving', href: '/pricing' },
              { label: 'Studio Bundle',   price: 'R349', period: '/mo', desc: 'All apps + full template library',     href: '/pricing', featured: true },
              { label: 'Templates Pro',   price: 'R179', period: '/mo', desc: '20+ editable engineering documents',   href: '/pricing' },
            ].map(p => (
              <Link key={p.label} href={p.href}
                className={`lift group flex flex-col rounded-xl p-6 border transition-colors ${
                  p.featured
                    ? 'bg-night2 border-sky/40'
                    : 'bg-night2 border-rim hover:border-rim2'
                }`}>
                {p.featured && (
                  <p className="eyebrow text-sky mb-3">Most Popular</p>
                )}
                <h3 className="head-md text-snow text-lg mb-2">{p.label}</h3>
                <p className="font-body text-snow3 text-xs leading-relaxed mb-5 flex-1 font-light">{p.desc}</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="head-md text-snow text-3xl">{p.price}</span>
                  <span className="font-body text-snow3 text-sm">{p.period}</span>
                </div>
                <div className={`py-2.5 rounded-lg text-center text-sm font-body font-semibold transition-colors ${
                  p.featured
                    ? 'bg-sky text-night group-hover:bg-skyD'
                    : 'bg-night3 text-snow border border-rim group-hover:border-rim2'
                }`}>
                  Get Started →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/pricing"
              className="font-body text-snow2 text-sm hover:text-snow transition-colors">
              View all plans, bundles & annual options →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ FAQ — light ══════════════════════════════════════ */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <p className="eyebrow text-steel mb-3">FAQ</p>
            <h2 className="head-xl text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Common questions
            </h2>
          </div>
          {[
            { q: 'Does PsychroFlow handle altitude correction?',
              a: "Yes — PsychroFlow uses the ICAO standard atmosphere model to automatically correct all psychrometric calculations for your project's elevation. Just enter your altitude in metres." },
            { q: 'Can I export results to PDF?',
              a: "Yes. Every analysis generates a clean, professional PDF report ready to include directly in design submissions — with process inputs, calculated results, and the psychrometric chart." },
            { q: 'What standards do the templates follow?',
              a: "Templates are written with ASHRAE, SANS, and ECSA standards in mind, reflecting real-world HVAC practice. Built for professional use on actual projects." },
            { q: 'Is PsychroFlow free to use?',
              a: "Yes — PsychroFlow is currently free to use with no account required. The Pro subscription adds PDF export, project saving, and future advanced features." },
            { q: 'Do I need to install anything?',
              a: "No. PsychroFlow runs entirely in your browser. Nothing to download — works on any modern device." },
          ].map(({ q, a }) => (
            <details key={q} className="group border-b border-surface1 py-5 cursor-pointer">
              <summary className="flex justify-between items-center list-none font-body font-semibold text-ink text-sm select-none">
                {q}
                <span className="head-md text-xl text-skyD ml-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 font-body text-slate text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ══ FINAL CTA — dark ════════════════════════════════ */}
      <section className="tex relative bg-night py-32 px-6 overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-40"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[250px] rounded-full bg-sky opacity-[0.06] blur-[80px]"/>
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="head-xl text-snow mb-5" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)' }}>
            Ready to work<br/>
            <span className="text-sky">smarter?</span>
          </h2>
          <p className="font-body text-snow2 text-xl mb-10 max-w-md mx-auto leading-relaxed font-light">
            Start with PsychroFlow free. No account needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/psychroflow.html" target="_blank" rel="noopener noreferrer"
               className="btn-primary !px-8 !py-4 !text-base">
              Try PsychroFlow Free →
            </a>
            {MONETISATION_ENABLED && (
              <Link href="/pricing" className="btn-ghost-dark !px-8 !py-4 !text-base">
                View Plans
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
