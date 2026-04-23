import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'PsychroFlow — Psychrometric Analysis Tool | PsychroStudio',
  description:
    'Professional psychrometric chart tool for HVAC engineers. Calculate air properties, cooling, heating, humidification, HRV and air mixing — with altitude correction.',
}

const features = [
  {
    title: 'Interactive Psychrometric Chart',
    desc:  'All air treatment processes plotted in real time on a professional, interactive chart.',
  },
  {
    title: '7 Process Types',
    desc:  'Cooling coil, heating, humidification, dehumidification, evaporative cooling, HRV, and air mixing.',
  },
  {
    title: 'Altitude Correction',
    desc:  'ICAO standard atmosphere model adjusts all calculations automatically for your project elevation.',
  },
  {
    title: 'PDF Export',
    desc:  'Generate a clean, professional analysis report with a single click — ready to include in design submissions.',
  },
  {
    title: 'Quick Start Wizard',
    desc:  'Enter supply air conditions and the wizard pre-configures the analysis so you can start immediately.',
  },
  {
    title: 'Runs in Your Browser',
    desc:  'No installation, no download. Works on any device with a modern browser.',
  },
]

export default function PsychroFlowPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <Link href="/" className="text-teal-primary text-sm font-medium hover:underline mb-8 block">
            ← Back to PsychroStudio
          </Link>

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="px-3 py-1 bg-teal-primary/10 text-teal-primary text-xs font-bold rounded-full uppercase tracking-wide">
                Live
              </span>
              <span className="text-slate text-sm">Free to use · No account required</span>
            </div>
            <h1 className="head-md text-5xl md:text-6xl font-bold text-teal-deeper mb-5">
              PsychroFlow
            </h1>
            <p className="text-slate text-xl leading-relaxed max-w-2xl">
              Professional psychrometric analysis in your browser. Plot air treatment processes,
              calculate system loads, and export results — instantly.
            </p>
          </div>

          {/* Launch CTA card */}
          <div className="bg-night tex relative rounded-lg p-10 mb-14 text-center">
            <div className="relative z-10">
              <h2 className="head-md text-3xl font-bold text-white mb-3">Ready to start?</h2>
              <p className="text-white/55 mb-8 max-w-md mx-auto">
                The full app runs in your browser. No account required to get started.
              </p>
              <a
                href="/psychroflow.html"
                   target="_blank"
                   rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-teal-primary hover:bg-teal-dark
                           text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-lg"
              >
                Launch PsychroFlow →
              </a>
            </div>
          </div>

          {/* Features grid */}
          <h2 className="head-md text-2xl font-bold text-teal-deeper mb-6">What&apos;s included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map(f => (
              <div key={f.title} className="p-6 rounded-xl border border-surface1 bg-white">
                <div className="w-2 h-2 rounded-full bg-teal-primary mb-3" />
                <h3 className="font-semibold text-teal-deeper mb-2 text-sm">{f.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pro upsell */}
          <div className="mt-10 p-6 rounded-xl border border-teal-primary/30 bg-teal-primary/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="font-semibold text-teal-deeper mb-1">Upgrade to Pro</div>
                <p className="text-slate text-sm">Get full access to the template library, future apps, and priority support.</p>
              </div>
              <Link
                href="/login"
                className="flex-shrink-0 px-5 py-2.5 bg-teal-primary hover:bg-teal-dark text-white
                           text-sm font-semibold rounded-lg transition-colors duration-150 text-center"
              >
                View Plans →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
