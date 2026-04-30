import { Syne, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const siteUrl = 'https://psychrostudio.com'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PsychroStudio — Engineering Intelligence for HVAC Professionals',
    template: '%s | PsychroStudio',
  },
  description: 'Professional psychrometric analysis tools, engineering document templates, and technical knowledge for HVAC engineers worldwide.',
  keywords: ['psychrometric chart', 'HVAC engineering tools', 'psychrometric analysis', 'HVAC design templates', 'BSL-3 lab design', 'duct sizing'],
  verification: {
    google: '<meta name="google-site-verification" content="R9pYnnaHzlqow_TTPT_V6yqD9jV7FUdHPKgzDHpgR8w" />',
},
  authors: [{ name: 'PsychroStudio' }],
  creator: 'PsychroStudio',
  publisher: 'PsychroStudio',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'PsychroStudio',
    title: 'PsychroStudio — Engineering Intelligence for HVAC Professionals',
    description: 'Professional psychrometric analysis, curated engineering templates, and technical knowledge — built by a working HVAC engineer.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PsychroStudio — Engineering Intelligence for HVAC Professionals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PsychroStudio — Engineering Intelligence for HVAC Professionals',
    description: 'Professional psychrometric analysis and HVAC engineering tools.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PsychroStudio',
  url: siteUrl,
  description: 'Professional psychrometric analysis tools and engineering document templates for HVAC professionals.',
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '149',
    priceCurrency: 'ZAR',
    priceValidUntil: '2027-12-31',
  },
  provider: {
    '@type': 'Organization',
    name: 'PsychroStudio',
    url: siteUrl,
    sameAs: ['https://www.linkedin.com/company/psychrostudio'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-surface text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
