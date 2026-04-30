import { MONETISATION_ENABLED } from '@/lib/config'
import { notFound } from 'next/navigation'

// Dynamically import the real pricing page
import PricingContent from './PricingContent'

export const metadata = {
  title: 'Pricing — PsychroStudio',
  description: 'Simple, transparent pricing for every HVAC engineer.',
}

export default function PricingPage() {
  if (!MONETISATION_ENABLED) notFound()
  return <PricingContent />
}
