import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Templates — PsychroStudio',
  description: 'Professional engineering document templates for HVAC engineers.',
}

export default function TemplatesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center py-20">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-teal-primary mb-3">
            Coming Soon
          </span>
          <h1 className="head-md text-5xl font-bold text-teal-deeper mb-5">Template Library</h1>
          <p className="text-slate text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            A growing library of professional engineering templates is being prepared. 
            Check back soon — or sign up to be notified when it launches.
          </p>
          <Link href="/" className="text-teal-primary font-semibold hover:underline">← Back to home</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
