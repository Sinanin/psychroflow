import { articles } from '@/lib/articles'

export default function sitemap() {
  const base = 'https://psychrostudio.com'
  const now = new Date().toISOString()

  const staticRoutes = [
    { url: base,                            lastModified: now, priority: 1.0,  changeFrequency: 'weekly'  },
    { url: `${base}/apps/psychroflow`,      lastModified: now, priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${base}/templates`,             lastModified: now, priority: 0.8,  changeFrequency: 'weekly'  },
    { url: `${base}/articles`,              lastModified: now, priority: 0.8,  changeFrequency: 'weekly'  },
    { url: `${base}/contact`,               lastModified: now, priority: 0.5,  changeFrequency: 'yearly'  },
  ]

  const articleRoutes = articles.map(({ slug }) => ({
    url: `${base}/articles/${slug}`,
    lastModified: now,
    priority: 0.85,
    changeFrequency: 'monthly',
  }))

  return [...staticRoutes, ...articleRoutes]
}
