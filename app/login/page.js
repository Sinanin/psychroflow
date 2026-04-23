import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Log In — PsychroStudio',
  description: 'Sign in to your PsychroStudio account.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-night flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-sm">
          <div className="text-center mb-10">
            <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center mx-auto mb-5">
              <span className="font-display font-bold text-night text-sm">PS</span>
            </div>
            <h1 className="head-xl text-snow text-3xl mb-2">Sign in</h1>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky/10 border border-sky/30 mt-3">
              <svg className="w-3.5 h-3.5 text-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="font-body text-sky text-xs font-semibold">Authentication launching soon</span>
            </div>
          </div>

          <div className="bg-night2 rounded-xl border border-rim p-8 text-center">
            <p className="font-body text-snow2 text-sm leading-relaxed mb-6">
              Account management is being set up. For now, PsychroFlow is fully free to use
              with no account required.
            </p>
            <div className="space-y-3">
              <a href="/psychroflow.html" target="_blank" rel="noopener noreferrer"
                 className="btn-primary w-full text-center block">
                Launch PsychroFlow Free →
              </a>
              <Link href="/contact"
                className="btn-ghost-dark w-full text-center block">
                Get notified when accounts launch
              </Link>
            </div>
          </div>

          <p className="font-body text-snow3 text-xs text-center mt-6">
            <Link href="/" className="hover:text-snow2 transition-colors">← Back to home</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
