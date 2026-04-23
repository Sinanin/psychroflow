import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = { title: 'Page Not Found — PsychroStudio' }

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-night flex items-center justify-center px-6 py-32">
        <div className="text-center max-w-lg">
          <div className="font-display font-bold text-[8rem] leading-none text-night2 mb-2 select-none">
            404
          </div>
          <h1 className="head-xl text-snow text-4xl mb-4">Page not found</h1>
          <p className="font-body text-snow2 text-lg leading-relaxed mb-10 font-light">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary text-center">
              Back to home
            </Link>
            <a href="/psychroflow.html" target="_blank" rel="noopener noreferrer"
               className="btn-ghost-dark text-center">
              Launch PsychroFlow →
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
