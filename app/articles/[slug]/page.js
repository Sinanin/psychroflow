import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getArticle, articles } from '@/lib/articles'

export function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | PsychroStudio`,
    description: article.intro,
  }
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  // Related articles (exclude current)
  const related = articles.filter(a => a.slug !== article.slug).slice(0, 2)

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      {/* ── Article header ── */}
      <header className="bg-night tex relative pt-28 pb-16 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link href="/articles"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium mb-8 transition-colors">
            ← All Articles
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-night2/25 border border-rim/40 mb-5">
            <span className="text-sky text-xs font-bold uppercase tracking-widest">{article.category}</span>
          </div>
          <h1 className="head-md text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-5">
            {article.title}
          </h1>
          <p className="text-white/55 text-lg leading-relaxed mb-8 max-w-2xl">{article.intro}</p>
          <div className="flex items-center gap-5 text-white/35 text-xs font-medium uppercase tracking-widest">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.read}</span>
            <span>·</span>
            <span>PsychroStudio</span>
          </div>
        </div>
      </header>

      {/* ── Article body ── */}
      <main className="px-6 py-16">
        <div className="max-w-3xl mx-auto">

          {/* Sticky TOC hint + share */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-surface1">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 rounded-full bg-night2"/>
              <span className="text-slate text-sm font-medium">PsychroStudio Knowledge Base</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-night2/8 border border-rim/20">
              <svg className="w-3.5 h-3.5 text-skyD" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
              </svg>
              <span className="text-skyD text-xs font-semibold">{article.read}</span>
            </div>
          </div>

          {/* The article content */}
          <article
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* PsychroFlow CTA — contextual */}
          <div className="mt-14 p-7 rounded-lg border border-rim/25 bg-night2/5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex-1">
                <div className="head-md text-lg font-bold text-ink mb-1.5">
                  Try the calculations yourself
                </div>
                <p className="text-slate text-sm leading-relaxed">
                  PsychroFlow lets you plot every process described in this article on an interactive
                  psychrometric chart — with altitude correction built in.
                </p>
              </div>
              <a href="/psychroflow.html"
                   target="_blank"
                   rel="noopener noreferrer"
                 className="flex-shrink-0 px-5 py-3 bg-night2 hover:bg-night2-dark text-white
                            text-sm font-semibold rounded-xl transition-colors text-center shadow-sky">
                Launch PsychroFlow →
              </a>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10 pt-8 border-t border-surface1">
            <Link href="/articles"
              className="inline-flex items-center gap-2 text-skyD font-semibold text-sm hover:underline">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </main>

      {/* ── Related articles ── */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-white border-t border-surface1">
          <div className="max-w-3xl mx-auto">
            <h2 className="head-md text-2xl font-bold text-ink mb-7">More from the knowledge base</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {related.map(r => (
                <Link key={r.slug} href={`/articles/${r.slug}`}
                  className="lift block p-6 rounded-xl border border-surface1 bg-surface group">
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-skyD mb-2">
                    {r.category}
                  </span>
                  <h3 className="head-md text-base font-bold text-ink leading-snug mb-3
                                 group-hover:text-skyD transition-colors">
                    {r.title}
                  </h3>
                  <span className="text-steel text-xs">{r.read}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
