# PsychroStudio — Project Context

## What this is
PsychroStudio is a commercial SaaS platform for HVAC engineering tools.
The flagship tool is **PsychroFlow**, an interactive browser-based psychrometric
chart calculator. A second tool, **DuctSizer**, is scoped but not yet built.

Solo-maintained side project. Time budget is roughly 8–10 hours per month, so
prefer small, self-contained, reviewable changes over large refactors.

## Stack
- Next.js 14.2.3, App Router
- React 18
- Tailwind CSS 3.3
- Hosted on Vercel, repo is `Sinanin/psychroflow`
- No backend yet. Supabase + Stripe are Phase 2 and are NOT configured.

## Working rules
- Make targeted edits. Do NOT regenerate whole files unless I explicitly ask.
- `psychroflow.html` is ~3,300 lines. Never rewrite it in full. Locate the
  relevant block and edit only that.
- Always show me the diff before I commit. I review in GitHub Desktop.
- If a change touches more than three files, stop and explain the plan first.
- Ask before adding any new npm dependency. I want the dependency list to stay small.
- Run `npm run build` after any non-trivial change and confirm it passes.

## Hard constraints
- **Do not enable monetisation.** `MONETISATION_ENABLED` is driven by
  `NEXT_PUBLIC_MONETISATION_ENABLED` and must stay `false`. Pricing, login, and
  paid CTAs are hidden site-wide. Never flip this flag or hardcode it to true.
- **No ASHRAE content.** Do not copy, paraphrase, or embed text, tables, or data
  from ASHRAE Handbooks or any other copyrighted standard into this codebase or
  into any content file. All knowledge-layer content must be originally authored.
  Calculations come from PsychroFlow's own engine.
- Do not commit secrets. `.env.local` is local only.

## Design system
- Fonts are wired through CSS variables in `app/layout.js`:
  `--font-display` and `--font-body`, exposed in Tailwind as `font-display`
  and `font-body`. Use those classes, not raw font names.
- Colours live in `tailwind.config.js` under `theme.extend.colors`.
  Use the named tokens (`night`, `night1`, `rim`, `snow`, `ink`, etc.),
  never raw hex in components.

## Known outstanding work
- `app/page.js` (homepage) — needs to be built out with substantial supporting
  SEO content alongside the tool CTA. This is the blocker on closing SEO Phase 1.
- `/templates/[slug]` detail page — does not exist. Eight templates are defined
  in `lib/templates.js` but there is no detail route.
- Formspree contact form still has a placeholder form ID.
- No OG image exists (only an instructions file).
- `psychroflow.html` should eventually be split into modules. Not yet — flag it,
  don't start it unprompted.

## Content
- Articles are defined in `articles.js`.
- Contact email is `hello@psychrostudio.com` (Zoho).
- Analytics: Google Search Console (verification tag) and Microsoft Clarity
  (inline script in `app/layout.js`). GA4 is not installed.

## Deployment
- I commit and push via GitHub Desktop.
- Vercel auto-deploys. Prefer changes that can be checked on a preview
  deployment before hitting production.
