import Link from 'next/link'
import { MONETISATION_ENABLED } from '@/lib/config'

export default function Footer() {
  const year = new Date().getFullYear()

  const platformLinks = [
    { label: 'Templates', href: '/templates' },
    { label: 'Articles',  href: '/articles'  },
    ...(MONETISATION_ENABLED ? [
      { label: 'Pricing',   href: '/pricing'   },
      { label: 'Log in',    href: '/login'     },
    ] : []),
    { label: 'Contact',   href: '/contact'   },
  ]

  return (
    <footer className="bg-night border-t border-rim py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-rim">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 rounded-md bg-sky flex items-center justify-center">
                <span className="font-display font-bold text-night text-xs">PS</span>
              </div>
              <span className="font-display font-bold text-snow text-lg tracking-tight">
                Psychro<span className="text-sky">Studio</span>
              </span>
            </div>
            <p className="font-body text-snow3 text-sm leading-relaxed max-w-xs mb-5 font-light">
              Engineering intelligence for HVAC professionals.
              Built by a working engineer — not a software company.
            </p>
            <a href="https://www.linkedin.com/company/psychrostudio"
               target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-rim
                          bg-night2 hover:border-rim2 transition-colors text-sm font-body text-snow2">
              <svg className="w-4 h-4 text-[#5B9BD5]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow on LinkedIn
            </a>
            <div className="flex items-center gap-2 mt-4">
              <div className="live-dot w-1.5 h-1.5 rounded-full bg-sky"/>
              <span className="font-body text-snow3 text-xs">All systems operational</span>
            </div>
          </div>

          <div>
            <p className="eyebrow text-snow3 mb-4">Apps</p>
            <ul className="space-y-2.5">
              <li>
                <a href="/psychroflow.html" target="_blank" rel="noopener noreferrer"
                   className="font-body text-snow2 text-sm hover:text-snow transition-colors">
                  PsychroFlow
                </a>
              </li>
              <li><span className="font-body text-snow3 text-sm">DuctFlow (soon)</span></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-snow3 mb-4">Platform</p>
            <ul className="space-y-2.5">
              {platformLinks.map(l => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="font-body text-snow2 text-sm hover:text-snow transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-4">
            <p className="font-body text-snow3 text-xs">© {year} PsychroStudio. All rights reserved.</p>
            <Link href="/privacy" className="font-body text-snow3 text-xs hover:text-snow2 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <a href="mailto:hello@psychrostudio.com"
             className="font-body text-snow3 text-xs hover:text-snow2 transition-colors">
            hello@psychrostudio.com
          </a>
        </div>
      </div>
    </footer>
  )
}
