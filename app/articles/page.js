import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { articles } from '@/lib/articles'

export const metadata = {
  title: 'Articles — PsychroStudio',
  description: 'Technical articles and design guides for HVAC engineers. Psychrometrics, BSL-3 containment, system design, and more.',
}

export default function ArticlesPage() {
  const [featured, ...rest] = articles

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* Header */}
      <header className="bg-night tex relative pt-28 pb-20 px-6">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-sky mb-4">
            Knowledge Base
          </span>
          <h1 className="head-md text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Written by engineers,<br/>for engineers
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
            Technical deep-dives on psychrometrics, HVAC system design, and containment
            facilities — grounded in real project experience.
          </p>
        </div>
      </header>

      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Featured article */}
          <Link href={`/articles/${featured.slug}`}
            className="lift group block mb-10 rounded-lg border-2 border-rim/20 bg-white overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 bg-night2/10 text-skyD text-xs font-bold rounded-full uppercase tracking-wide">
                  {featured.category}
                </span>
                <span className="text-steel text-xs">{featured.read} · {featured.date}</span>
              </div>
              <h2 className="head-md text-2xl md:text-3xl font-bold text-ink mb-3 leading-snug
                             group-hover:text-skyD transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate leading-relaxed text-sm mb-5 max-w-2xl">{featured.intro}</p>
              <span className="inline-flex items-center gap-1.5 text-skyD font-semibold text-sm
                               group-hover:gap-3 transition-all duration-200">
                Read article →
              </span>
            </div>
          </Link>

          {/* Remaining articles */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map(article => (
              <Link key={article.slug} href={`/articles/${article.slug}`}
                className="lift group block p-7 rounded-lg border border-surface1 bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-skyD">
                    {article.category}
                  </span>
                  <span className="text-steel text-xs">{article.read}</span>
                </div>
                <h2 className="head-md text-lg font-bold text-ink mb-3 leading-snug
                               group-hover:text-skyD transition-colors">
                  {article.title}
                </h2>
                <p className="text-slate text-sm leading-relaxed mb-5 line-clamp-3">{article.intro}</p>
                <span className="inline-flex items-center gap-1.5 text-skyD font-semibold text-xs
                                 group-hover:gap-3 transition-all duration-200">
                  Read article →
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 p-8 rounded-lg bg-night text-center">
            <h3 className="head-md text-2xl font-bold text-white mb-3">
              Put the knowledge to work
            </h3>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
              Every concept in these articles can be explored live in PsychroFlow — no account required.
            </p>
            <a href="/psychroflow.html"
                   target="_blank"
                   rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-night2 hover:bg-night2-dark
                          text-white font-semibold rounded-xl transition-colors shadow-sky">
              Launch PsychroFlow Free →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
