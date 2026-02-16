import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Proteção padrão para pastas internas
    },
    sitemap: 'https://www.marialauxmasso.com.br/sitemap.xml',
  }
}