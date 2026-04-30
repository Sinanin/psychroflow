/**
 * PsychroStudio — Feature Flags
 *
 * Controls visibility of monetisation features site-wide.
 * Set NEXT_PUBLIC_MONETISATION_ENABLED=true in .env.local
 * and in Vercel Environment Variables when ready to activate.
 *
 * Until then: pricing page, login, templates, and all paid CTAs
 * are completely hidden from the live site.
 */
export const MONETISATION_ENABLED =
  process.env.NEXT_PUBLIC_MONETISATION_ENABLED === 'true'

/**
 * When monetisation is disabled:
 * - Pricing page returns 404
 * - Login page returns 404
 * - Templates page shows "coming soon"
 * - All "Get Started" / "Log in" CTAs are hidden
 * - Pricing section on homepage is replaced with a waitlist CTA
 * - Navbar hides Pricing and Log in
 */
