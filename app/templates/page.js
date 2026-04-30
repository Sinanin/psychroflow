import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { MONETISATION_ENABLED } from '@/lib/config'

export const metadata = {
  title: 'Templates — PsychroStudio',
  description: 'Professional engineering document templates for HVAC engineers.',
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <header className="bg-night pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow text-snow3 mb-4">Template Library</p>
          <h1 className="head-xl text-snow mb-5" style={{fontSize:'clamp(2.8rem,5vw,4rem)'}}>
            Engineering templates
          </h1>
          <p className="font-body text-snow2 text-lg font-light max-w-xl mx-auto">
            Professional, immediately editable documents built from real HVAC project practice.
          </p>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {MONETISATION_ENABLED ? (
            <div className="text-center py-16">
              <p className="font-body text-steel mb-6">Template library coming soon.</p>
              <Link href="/pricing" className="btn-dark">View Pricing →</Link>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-sky/10 border border-sky/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                </svg>
              </div>
              <h2 className="head-xl text-ink text-3xl mb-4">In Development</h2>
              <p className="font-body text-slate text-lg leading-relaxed mb-4 max-w-lg mx-auto">
                A library of 20+ professional HVAC engineering templates is being prepared —
                Design Basis documents, commissioning checklists, TAB reports, and more.
              </p>
              <p className="font-body text-steel text-sm mb-8">
                Register your interest to be notified when the library launches.
                Early access subscribers receive a founding member discount.
              </p>
              <Link href="/contact" className="btn-dark">
                Register Interest →
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
