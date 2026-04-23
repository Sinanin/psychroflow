import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Pricing — PsychroStudio',
  description: 'Simple, transparent pricing for every HVAC engineer. Individual apps, template library, or the full Studio bundle.',
}

function Check({ muted }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${muted ? 'text-steel' : 'text-skyD'}`}
         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
    </svg>
  )
}

function Cross() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-steel/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  )
}

function PlanCard({ tag, tagColor, title, subtitle, price, period, note, features, cta, ctaHref, highlighted, badge, newTab }) {
  return (
    <div className={`relative flex flex-col rounded-lg p-7 ${
      highlighted
        ? 'bg-night border-2 border-rim text-white shadow-deep'
        : 'bg-white border border-surface1 shadow-card'
    }`}>
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand rounded-full
                        text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap">
          {badge}
        </div>
      )}
      <div className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 self-start
        ${tagColor || (highlighted ? 'bg-brand/30 text-sky' : 'bg-sky/10 text-skyD')}`}>
        {tag}
      </div>
      <h3 className={`head-md text-xl font-bold mb-0.5 ${highlighted ? 'text-white' : 'text-ink'}`}>{title}</h3>
      {subtitle && <p className={`text-xs mb-5 ${highlighted ? 'text-white/45' : 'text-steel'}`}>{subtitle}</p>}

      <div className="mb-6 mt-2">
        {price === 'Free' ? (
          <span className={`head-md text-4xl font-bold ${highlighted ? 'text-white' : 'text-ink'}`}>Free</span>
        ) : (
          <>
            <span className={`head-md text-4xl font-bold ${highlighted ? 'text-white' : 'text-ink'}`}>
              R{price}
            </span>
            <span className={`text-sm ml-1 ${highlighted ? 'text-white/45' : 'text-slate'}`}>/month</span>
          </>
        )}
        {note && <p className={`text-xs mt-1 ${highlighted ? 'text-white/35' : 'text-steel'}`}>{note}</p>}
      </div>

      <ul className="space-y-2.5 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className={`flex items-start gap-2.5 text-sm ${
            f.included === false
              ? 'opacity-40'
              : highlighted ? 'text-white/80' : 'text-ink'
          }`}>
            {f.included === false ? <Cross /> : <Check muted={!highlighted} />}
            {f.text}
          </li>
        ))}
      </ul>

      <a href={ctaHref || '/login'}
         {...(newTab ? { target:"_blank", rel:"noopener noreferrer" } : {})}
         className={`block w-full py-3 text-center font-semibold rounded-xl text-sm transition-colors duration-200
           ${highlighted
             ? 'bg-brand hover:bg-brand-dark text-white shadow-sky'
             : 'bg-night hover:bg-night2 text-white'
           }`}>
        {cta}
      </a>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <header className="bg-night tex relative pt-28 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-sky mb-4">Pricing</span>
          <h1 className="head-md text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Pay for what you use
          </h1>
          <p className="text-white/55 text-xl max-w-xl mx-auto leading-relaxed">
            Individual apps, the template library, or the full Studio bundle.
            Every tier has a clear scope — no hidden features behind paywalls.
          </p>
        </div>
      </header>

      <main className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* ── INDIVIDUAL APPS ────────────────────────────────────── */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-skyD mb-2">Individual Apps</span>
              <h2 className="head-md text-3xl md:text-4xl font-bold text-ink">Pick the tool you need</h2>
            </div>

            {/* PsychroFlow */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-sky/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-skyD" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="head-md text-xl font-bold text-ink">PsychroFlow</h3>
                  <p className="text-slate text-xs">Psychrometric Analysis Tool</p>
                </div>
                <span className="ml-2 px-2.5 py-1 bg-sky/10 text-skyD text-xs font-bold rounded-full uppercase tracking-wide">Live</span>
              </div>

              <div className="grid md:grid-cols-3 gap-5 overflow-visible pt-3">
                <PlanCard
                  tag="Free"
                  title="PsychroFlow Basic"
                  subtitle="No account required"
                  price="Free"
                  features={[
                    { text: '7 psychrometric process types' },
                    { text: 'Interactive chart' },
                    { text: 'Altitude correction (ICAO)' },
                    { text: 'Basic results display' },
                    { text: 'PDF export', included: false },
                    { text: 'Project save & history', included: false },
                  ]}
                  cta="Launch Free →"
                  ctaHref="/psychroflow.html"
                  newTab={true}
                />
                <PlanCard
                  tag="Pro"
                  badge="Most Popular"
                  title="PsychroFlow Pro"
                  subtitle="For practising engineers"
                  price="149"
                  period="/month"
                  note="or R1,490/year — save 17%"
                  highlighted
                  features={[
                    { text: 'Everything in Free' },
                    { text: 'PDF export (consulting report format)' },
                    { text: 'Save & manage projects' },
                    { text: 'Multiple analysis per project' },
                    { text: 'Priority email support' },
                    { text: 'Early access to new features' },
                  ]}
                  cta="Start Pro Trial →"
                  ctaHref="/login"
                />
                <PlanCard
                  tag="Team"
                  title="PsychroFlow Team"
                  subtitle="For consultancies & firms"
                  price="399"
                  period="/month"
                  note="Up to 5 seats · R79/seat extra"
                  features={[
                    { text: 'Everything in Pro' },
                    { text: 'Up to 5 user seats' },
                    { text: 'Shared project workspace' },
                    { text: 'Team admin dashboard' },
                    { text: 'Annual invoice for accounting' },
                    { text: 'Dedicated support' },
                  ]}
                  cta="Contact for Team Plan"
                  ctaHref="/contact"
                />
              </div>
            </div>

            {/* DuctFlow */}
            <div className="mt-8 p-7 rounded-lg border border-surface1 bg-white/60 opacity-70">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-muted2/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-steel" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
                  </svg>
                </div>
                <div>
                  <h3 className="head-md text-xl font-bold text-ink">DuctFlow</h3>
                  <p className="text-slate text-xs">Duct Sizing & Pressure Drop</p>
                </div>
                <span className="ml-2 px-2.5 py-1 bg-muted2/10 text-steel text-xs font-bold rounded-full uppercase tracking-wide">Coming Soon</span>
              </div>
              <p className="text-slate text-sm mb-4">
                DuctFlow pricing will mirror PsychroFlow — Free, Pro (R149/month), and Team (R399/month) — launching alongside the app.
                Subscribe to be notified when it launches.
              </p>
              <a href="/contact"
                 className="inline-flex items-center gap-2 text-skyD font-semibold text-sm hover:underline">
                Notify me when DuctFlow launches →
              </a>
            </div>
          </div>

          {/* ── TEMPLATE LIBRARY ───────────────────────────────────── */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-skyD mb-2">Template Library</span>
              <h2 className="head-md text-3xl md:text-4xl font-bold text-ink">Engineering documents, ready to use</h2>
              <p className="text-slate mt-3 max-w-xl mx-auto text-sm">
                A growing library of HVAC and project management templates. Access the library standalone
                or as part of a bundle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <PlanCard
                tag="Basic"
                title="Templates Basic"
                subtitle="Read-only access"
                price="99"
                note="or R990/year — save 17%"
                features={[
                  { text: 'Full template library (20+ documents)' },
                  { text: 'PDF format only' },
                  { text: 'New templates monthly' },
                  { text: 'HVAC Design collection' },
                  { text: 'Commissioning collection' },
                  { text: 'Editable Word/Excel formats', included: false },
                ]}
                cta="Get Templates Basic →"
                ctaHref="/login"
              />
              <PlanCard
                tag="Pro"
                badge="Best Value"
                title="Templates Pro"
                subtitle="Editable formats included"
                price="179"
                note="or R1,790/year — save 17%"
                highlighted
                features={[
                  { text: 'Everything in Templates Basic' },
                  { text: 'Editable Word & Excel formats' },
                  { text: 'All 3 template collections' },
                  { text: 'Project Management collection' },
                  { text: 'Priority new template requests' },
                  { text: 'Email support' },
                ]}
                cta="Get Templates Pro →"
                ctaHref="/login"
              />
            </div>
          </div>

          {/* ── BUNDLES ─────────────────────────────────────────────── */}
          <div>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-skyD mb-2">Bundles</span>
              <h2 className="head-md text-3xl md:text-4xl font-bold text-ink">Everything you need, together</h2>
              <p className="text-slate mt-3 max-w-xl mx-auto text-sm">
                Bundles combine apps and templates at a meaningful saving versus buying separately.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 overflow-visible pt-3">
              <PlanCard
                tag="Bundle"
                title="Apps Bundle"
                subtitle="PsychroFlow Pro + DuctFlow Pro"
                price="249"
                note="Save R49/month vs buying separately"
                features={[
                  { text: 'PsychroFlow Pro (all features)' },
                  { text: 'DuctFlow Pro on launch' },
                  { text: 'PDF export across both apps' },
                  { text: 'Save & manage projects' },
                  { text: 'Priority support' },
                  { text: 'Template library', included: false },
                ]}
                cta="Get Apps Bundle →"
                ctaHref="/login"
              />
              <PlanCard
                tag="Bundle"
                badge="Most Popular"
                title="Studio Bundle"
                subtitle="All apps + Templates Pro"
                price="349"
                note="Save R128/month vs buying separately"
                highlighted
                features={[
                  { text: 'PsychroFlow Pro (all features)' },
                  { text: 'DuctFlow Pro on launch' },
                  { text: 'Full template library' },
                  { text: 'Editable Word & Excel formats' },
                  { text: 'All future apps included' },
                  { text: 'Priority email support' },
                ]}
                cta="Get Studio Bundle →"
                ctaHref="/login"
              />
              <PlanCard
                tag="Bundle"
                title="Studio Team"
                subtitle="Studio Bundle · 5 seats"
                price="799"
                note="Up to 5 seats · R89/seat extra"
                features={[
                  { text: 'Everything in Studio Bundle' },
                  { text: 'Up to 5 user seats' },
                  { text: 'Shared project workspace' },
                  { text: 'Team admin dashboard' },
                  { text: 'Annual invoice for accounting' },
                  { text: 'Dedicated onboarding call' },
                ]}
                cta="Contact for Studio Team"
                ctaHref="/contact"
              />
            </div>
          </div>

          {/* Comparison note */}
          <div className="bg-white rounded-lg border border-surface1 p-8 max-w-3xl mx-auto">
            <h3 className="head-md text-xl font-bold text-ink mb-4 text-center">Not sure which plan?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center text-sm">
              {[
                { who: 'Solo engineer doing psychrometric analysis', rec: 'PsychroFlow Pro', price: 'R149/mo' },
                { who: 'Consultant needing analysis + project docs', rec: 'Studio Bundle', price: 'R349/mo' },
                { who: 'Engineering firm with multiple users', rec: 'Studio Team', price: 'R799/mo' },
              ].map(r => (
                <div key={r.who} className="p-4 rounded-xl bg-surface border border-surface1">
                  <p className="text-slate text-xs mb-2 leading-relaxed">{r.who}</p>
                  <p className="font-bold text-ink text-sm">{r.rec}</p>
                  <p className="text-skyD text-xs font-semibold mt-0.5">{r.price}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-slate text-xs">
              Still not sure?{' '}
              <Link href="/contact" className="text-skyD font-semibold hover:underline">
                Send us a message →
              </Link>
            </p>
          </div>

          {/* Annual note */}
          <div className="text-center">
            <p className="text-slate text-sm">
              All plans available annually at <span className="font-semibold text-ink">17% saving</span>.
              Annual plans include a tax invoice. All prices exclude VAT.{' '}
              <Link href="/contact" className="text-skyD font-semibold hover:underline">Questions? Contact us →</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
