'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ContactPage() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <header className="bg-night pt-28 pb-16 px-6">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <p className="eyebrow text-snow3 mb-4">Contact</p>
          <h1 className="head-xl text-snow mb-4" style={{fontSize:'clamp(2.8rem,5vw,4rem)'}}>
            Get in touch
          </h1>
          <p className="font-body text-snow2 text-lg font-light">
            Questions about pricing, plans, or technical support — we respond to every message.
          </p>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10">

            {/* Left */}
            <div className="md:col-span-2 space-y-5">
              <div className="p-6 rounded-xl bg-white border border-surface1 shadow-card">
                <div className="w-10 h-10 rounded-lg bg-sky/10 border border-sky/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-skyD" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                  </svg>
                </div>
                <h3 className="head-md text-ink text-base mb-1">Email us</h3>
                <p className="font-body text-steel text-xs mb-3">Respond within 24 hours on business days.</p>
                <a href="mailto:hello@psychrostudio.com" className="font-body text-skyD font-semibold text-sm hover:underline">
                  hello@psychrostudio.com
                </a>
              </div>

              <div className="p-6 rounded-xl bg-white border border-surface1 shadow-card">
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2]/10 border border-[#0A66C2]/20 flex items-center justify-center mb-4">
                  <svg className="w-4.5 h-4.5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="head-md text-ink text-base mb-1">LinkedIn</h3>
                <p className="font-body text-steel text-xs mb-3">Follow for HVAC insights and updates.</p>
                <a href="https://www.linkedin.com/company/psychrostudio" target="_blank" rel="noopener noreferrer"
                   className="font-body text-[#0A66C2] font-semibold text-sm hover:underline">
                  PsychroStudio on LinkedIn →
                </a>
              </div>

              <div className="p-6 rounded-xl bg-sky/5 border border-sky/20">
                <h3 className="head-md text-ink text-sm mb-2">Team plans & custom pricing</h3>
                <p className="font-body text-slate text-xs leading-relaxed">
                  Procuring for a firm or institution? Use the form and mention your seat count.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl border border-surface1 p-8 shadow-card">
                <h2 className="head-lg text-ink text-2xl mb-6">Send a message</h2>

                {status === 'success' ? (
                  <div className="py-16 text-center">
                    <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                      </svg>
                    </div>
                    <h3 className="head-md text-ink text-xl mb-2">Message sent</h3>
                    <p className="font-body text-slate text-sm mb-6">We'll get back to you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')}
                      className="font-body text-skyD text-sm font-semibold hover:underline">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block eyebrow text-ink mb-2">Name</label>
                        <input type="text" name="name" required placeholder="Your name"
                          className="w-full px-4 py-3 rounded-lg border border-surface1 bg-surface text-ink text-sm
                                     focus:outline-none focus:border-skyD focus:ring-2 focus:ring-sky/20
                                     placeholder-steel transition-colors font-body"/>
                      </div>
                      <div>
                        <label className="block eyebrow text-ink mb-2">Email</label>
                        <input type="email" name="email" required placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-lg border border-surface1 bg-surface text-ink text-sm
                                     focus:outline-none focus:border-skyD focus:ring-2 focus:ring-sky/20
                                     placeholder-steel transition-colors font-body"/>
                      </div>
                    </div>

                    <div>
                      <label className="block eyebrow text-ink mb-2">Subject</label>
                      <select name="subject"
                        className="w-full px-4 py-3 rounded-lg border border-surface1 bg-surface text-ink text-sm
                                   focus:outline-none focus:border-skyD focus:ring-2 focus:ring-sky/20 transition-colors font-body">
                        <option value="">Select a topic</option>
                        <option value="pricing">Pricing & plans</option>
                        <option value="team">Team or enterprise plan</option>
                        <option value="technical">Technical support</option>
                        <option value="template">Template request</option>
                        <option value="ductflow">DuctFlow launch notification</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block eyebrow text-ink mb-2">Message</label>
                      <textarea name="message" required rows={5} placeholder="Tell us what you need..."
                        className="w-full px-4 py-3 rounded-lg border border-surface1 bg-surface text-ink text-sm
                                   focus:outline-none focus:border-skyD focus:ring-2 focus:ring-sky/20
                                   placeholder-steel transition-colors resize-none font-body"/>
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm font-body bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button type="submit" disabled={status === 'sending'}
                      className="w-full py-3.5 bg-sky hover:bg-skyD disabled:opacity-60 disabled:cursor-not-allowed
                                 text-night font-body font-bold rounded-lg transition-colors text-sm
                                 hover:shadow-sky">
                      {status === 'sending' ? 'Sending...' : 'Send Message →'}
                    </button>

                    <p className="font-body text-steel text-xs text-center">
                      We respond within 24 hours on business days.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
