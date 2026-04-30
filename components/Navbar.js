'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MONETISATION_ENABLED } from '@/lib/config'

const baseLinks = [
  { label: 'Apps',      href: '/apps/psychroflow' },
  { label: 'Templates', href: '/templates' },
  { label: 'Articles',  href: '/articles' },
  { label: 'Contact',   href: '/contact' },
]

const paidLinks = [
  { label: 'Pricing', href: '/pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = MONETISATION_ENABLED ? [...baseLinks, ...paidLinks] : baseLinks

  useEffect(() => {
    setScrolled(window.scrollY > 10)
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled
        ? 'bg-night/97 backdrop-blur-xl border-b border-rim/50 shadow-[0_1px_0_rgba(255,255,255,0.04)]'
        : 'bg-night/90 backdrop-blur-md border-b border-rim/30'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-7 h-7 rounded-md bg-sky flex items-center justify-center">
            <span className="font-display font-bold text-night text-xs">PS</span>
          </div>
          <span className="font-display font-bold text-snow text-[1.1rem] tracking-tight">
            Psychro<span className="text-sky">Studio</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.label} href={l.href}
              className="font-body text-sm text-snow2 hover:text-snow transition-colors duration-150 font-medium">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {MONETISATION_ENABLED && (
            <Link href="/login"
              className="font-body text-sm text-snow2 hover:text-snow transition-colors font-medium">
              Log in
            </Link>
          )}
          <a href="/psychroflow.html" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky hover:bg-skyD text-night
                       font-body font-bold text-xs rounded-md transition-all duration-150
                       hover:shadow-sky hover:-translate-y-px">
            {MONETISATION_ENABLED ? 'Try Free' : 'Launch App'}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
            </svg>
          </a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-snow2 hover:text-snow transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-night1 border-t border-rim px-6 py-4">
          {links.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block font-body text-sm text-snow2 py-3 border-b border-rim/40 last:border-none hover:text-snow">
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-4">
            {MONETISATION_ENABLED && (
              <Link href="/login" onClick={() => setOpen(false)}
                className="flex-1 py-2.5 text-center border border-rim rounded-md text-sm font-body text-snow2">
                Log in
              </Link>
            )}
            <a href="/psychroflow.html" target="_blank" rel="noopener noreferrer"
               onClick={() => setOpen(false)}
               className={`btn-primary text-center !text-xs !py-2.5 ${MONETISATION_ENABLED ? 'flex-1' : 'w-full'}`}>
              {MONETISATION_ENABLED ? 'Try Free →' : 'Launch PsychroFlow →'}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
