import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy — PsychroStudio',
  description: 'Privacy Policy for PsychroStudio.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="eyebrow text-steel mb-4">Legal</p>
          <h1 className="head-xl text-ink text-4xl mb-4">Privacy Policy</h1>
          <p className="font-body text-steel text-sm mb-12">Last updated: April 2026</p>

          <div className="prose-content space-y-8 font-body text-slate text-sm leading-relaxed">
            {[
              {
                heading: '1. Who we are',
                body: 'PsychroStudio ("we", "us", "our") operates the website psychrostudio.com and the PsychroFlow web application. We are committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa.'
              },
              {
                heading: '2. Information we collect',
                body: 'We collect information you voluntarily provide when contacting us via our contact form (name, email address, message content). We may also collect anonymised usage data through analytics tools to understand how visitors use our platform. PsychroFlow itself operates entirely in your browser and does not transmit your calculations or project data to our servers.'
              },
              {
                heading: '3. How we use your information',
                body: 'Contact form submissions are used solely to respond to your enquiry. We do not sell, share, or rent your personal information to third parties. Anonymised analytics data is used only to improve the platform.'
              },
              {
                heading: '4. Data retention',
                body: 'Contact form submissions are retained for up to 12 months from the date of receipt. You may request deletion of your personal information at any time by emailing hello@psychrostudio.com.'
              },
              {
                heading: '5. Your rights (POPIA)',
                body: 'Under POPIA you have the right to access personal information we hold about you, request correction of inaccurate information, request deletion of your personal information, and object to processing of your personal information. To exercise any of these rights, contact us at hello@psychrostudio.com.'
              },
              {
                heading: '6. Third-party services',
                body: 'We use Formspree to process contact form submissions. Their privacy policy is available at formspree.io. We may use Vercel Analytics for anonymised performance monitoring.'
              },
              {
                heading: '7. Contact',
                body: 'For any privacy-related queries, contact us at hello@psychrostudio.com.'
              },
            ].map(s => (
              <div key={s.heading}>
                <h2 className="head-md text-ink text-base mb-2">{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
