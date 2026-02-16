import { MetadataRoute } from 'next'

// ADICIONE ESSA LINHA AQUI TAMBÉM 👇
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://www.marialauxmasso.com.br/sitemap.xml',
  }
}