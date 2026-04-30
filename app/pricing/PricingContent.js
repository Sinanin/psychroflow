import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

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

function PlanCard({ tag, title, subtitle, price, note, features, cta, ctaHref, highlighted, badge, newTab }) {
  return (
    <div className={`relative flex flex-col rounded-xl p-7 ${
      highlighted ? 'bg-night text-white shadow-deep' : 'bg-white border border-surface1 shadow-card'
    } ${badge ? 'mt-5' : ''}`}>
      {badge && (
        <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 px-4 py-1.5 bg-sky rounded-full
                        text-night text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-sky">
          {badge}
        </div>
      )}
      <div className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 self-start
        ${highlighted ? 'bg-sky/20 text-sky' : 'bg-sky/10 text-skyD'}`}>
        {tag}
      </div>
      <h3 className={`head-md text-xl mb-0.5 ${highlighted ? 'text-white' : 'text-ink'}`}>{title}</h3>
      {subtitle && <p className={`text-xs mb-5 ${highlighted ? 'text-snow3' : 'text-steel'}`}>{subtitle}</p>}
      <div className="mb-6 mt-2">
        {price === 'Free' ? (
          <span className={`head-md text-4xl ${highlighted ? 'text-white' : 'text-ink'}`}>Free</span>
        ) : (
          <>
            <span className={`head-md text-4xl ${highlighted ? 'text-white' : 'text-ink'}`}>R{price}</span>
            <span className={`text-sm ml-1 ${highlighted ? 'text-snow3' : 'text-steel'}`}>/month</span>
          </>
        )}
        {note && <p className={`text-xs mt-1 ${highlighted ? 'text-snow3' : 'text-steel'}`}>{note}</p>}
      </div>
      <ul className="space-y-2.5 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className={`flex items-start gap-2.5 text-sm ${
            f.included === false ? 'opacity-40' : highlighted ? 'text-snow' : 'text-ink'
          }`}>
            {f.included === false ? <Cross /> : <Check muted={!highlighted} />}
            {f.text}
          </li>
        ))}
      </ul>
      <a href={ctaHref || '/login'}
         {...(newTab ? { target:'_blank', rel:'noopener noreferrer' } : {})}
         className={`block w-full py-3 text-center font-semibold rounded-xl text-sm font-body transition-colors duration-200
           ${highlighted ? 'bg-sky hover:bg-skyD text-night shadow-sky' : 'bg-night hover:bg-night2 text-white'}`}>
        {cta}
      </a>
    </div>
  )
}

export default function PricingContent() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <header className="bg-night pt-28 pb-16 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="eyebrow text-snow3 mb-4">Pricing</p>
          <h1 className="head-xl text-snow mb-5" style={{fontSize:'clamp(2.8rem,5vw,4rem)'}}>Pay for what you use</h1>
          <p className="font-body text-snow2 text-xl font-light max-w-xl mx-auto">
            Individual apps, the template library, or the full Studio bundle.
          </p>
        </div>
      </header>
      <main className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* Individual Apps */}
          <div>
            <div className="text-center mb-10">
              <p className="eyebrow text-steel mb-2">Individual Apps</p>
              <h2 className="head-xl text-ink" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Pick the tool you need</h2>
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <h3 className="head-md text-ink text-xl">PsychroFlow</h3>
                <span className="eyebrow text-skyD px-3 py-1 rounded-full border border-sky/30 bg-sky/10">Live</span>
              </div>
              <div className="grid md:grid-cols-3 gap-5 overflow-visible pt-3">
                <PlanCard tag="Free" title="PsychroFlow Basic" subtitle="No account required" price="Free"
                  features={[
                    {text:'7 psychrometric process types'},{text:'Interactive chart'},{text:'ICAO altitude correction'},
                    {text:'Basic results display'},{text:'PDF export',included:false},{text:'Project save & history',included:false},
                  ]} cta="Launch Free →" ctaHref="/psychroflow.html" newTab={true}/>
                <PlanCard tag="Pro" badge="Most Popular" title="PsychroFlow Pro" subtitle="For practising engineers"
                  price="149" note="or R1,490/year — save 17%" highlighted
                  features={[
                    {text:'Everything in Free'},{text:'PDF export (consulting format)'},{text:'Save & manage projects'},
                    {text:'Multiple analyses per project'},{text:'Priority email support'},{text:'Early access to new features'},
                  ]} cta="Start Pro Trial →" ctaHref="/login"/>
                <PlanCard tag="Team" title="PsychroFlow Team" subtitle="For consultancies & firms"
                  price="399" note="Up to 5 seats · R79/seat extra"
                  features={[
                    {text:'Everything in Pro'},{text:'Up to 5 user seats'},{text:'Shared project workspace'},
                    {text:'Team admin dashboard'},{text:'Annual invoice'},{text:'Dedicated support'},
                  ]} cta="Contact for Team Plan" ctaHref="/contact"/>
              </div>
            </div>
          </div>

          {/* Templates */}
          <div>
            <div className="text-center mb-10">
              <p className="eyebrow text-steel mb-2">Template Library</p>
              <h2 className="head-xl text-ink" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Engineering documents, ready to use</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto overflow-visible pt-3">
              <PlanCard tag="Basic" title="Templates Basic" subtitle="Read-only access" price="99"
                note="or R990/year — save 17%"
                features={[
                  {text:'Full template library (20+ docs)'},{text:'PDF format only'},{text:'New templates monthly'},
                  {text:'HVAC Design collection'},{text:'Commissioning collection'},{text:'Editable Word/Excel',included:false},
                ]} cta="Get Templates Basic →" ctaHref="/login"/>
              <PlanCard tag="Pro" badge="Best Value" title="Templates Pro" subtitle="Editable formats included"
                price="179" note="or R1,790/year — save 17%" highlighted
                features={[
                  {text:'Everything in Templates Basic'},{text:'Editable Word & Excel formats'},
                  {text:'All 3 template collections'},{text:'Project Management collection'},
                  {text:'Priority new template requests'},{text:'Email support'},
                ]} cta="Get Templates Pro →" ctaHref="/login"/>
            </div>
          </div>

          {/* Bundles */}
          <div>
            <div className="text-center mb-10">
              <p className="eyebrow text-steel mb-2">Bundles</p>
              <h2 className="head-xl text-ink" style={{fontSize:'clamp(2rem,4vw,3rem)'}}>Everything together</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 overflow-visible pt-3">
              <PlanCard tag="Bundle" title="Apps Bundle" subtitle="PsychroFlow Pro + DuctFlow Pro"
                price="249" note="Save R49/month vs buying separately"
                features={[
                  {text:'PsychroFlow Pro (all features)'},{text:'DuctFlow Pro on launch'},
                  {text:'PDF export across both apps'},{text:'Save & manage projects'},
                  {text:'Priority support'},{text:'Template library',included:false},
                ]} cta="Get Apps Bundle →" ctaHref="/login"/>
              <PlanCard tag="Bundle" badge="Most Popular" title="Studio Bundle" subtitle="All apps + Templates Pro"
                price="349" note="Save R128/month vs buying separately" highlighted
                features={[
                  {text:'PsychroFlow Pro (all features)'},{text:'DuctFlow Pro on launch'},
                  {text:'Full template library'},{text:'Editable Word & Excel formats'},
                  {text:'All future apps included'},{text:'Priority email support'},
                ]} cta="Get Studio Bundle →" ctaHref="/login"/>
              <PlanCard tag="Bundle" title="Studio Team" subtitle="Studio Bundle · 5 seats"
                price="799" note="Up to 5 seats · R89/seat extra"
                features={[
                  {text:'Everything in Studio Bundle'},{text:'Up to 5 user seats'},
                  {text:'Shared project workspace'},{text:'Team admin dashboard'},
                  {text:'Annual invoice'},{text:'Dedicated onboarding call'},
                ]} cta="Contact for Studio Team" ctaHref="/contact"/>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-white rounded-xl border border-surface1 p-8 max-w-3xl mx-auto shadow-card">
            <h3 className="head-md text-ink text-xl mb-5 text-center">Not sure which plan?</h3>
            <div className="grid md:grid-cols-3 gap-5 text-center text-sm">
              {[
                {who:'Solo engineer doing psychrometric analysis',rec:'PsychroFlow Pro',price:'R149/mo'},
                {who:'Consultant needing analysis + project docs',rec:'Studio Bundle',price:'R349/mo'},
                {who:'Engineering firm with multiple users',rec:'Studio Team',price:'R799/mo'},
              ].map(r => (
                <div key={r.who} className="p-4 rounded-xl bg-surface border border-surface1">
                  <p className="font-body text-steel text-xs mb-2 leading-relaxed">{r.who}</p>
                  <p className="font-body font-bold text-ink text-sm">{r.rec}</p>
                  <p className="font-body text-skyD text-xs font-semibold mt-0.5">{r.price}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 font-body text-steel text-xs">
              Still not sure?{' '}
              <Link href="/contact" className="text-skyD font-semibold hover:underline">Contact us →</Link>
            </p>
          </div>

          <div className="text-center">
            <p className="font-body text-steel text-sm">
              All plans available annually at <span className="font-semibold text-ink">17% saving</span>.
              Annual plans include a tax invoice. All prices exclude VAT.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
