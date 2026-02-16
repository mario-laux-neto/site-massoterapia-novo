import { MetadataRoute } from 'next'

// ADICIONE ESSA LINHA AQUI EMBAIXO 👇
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.marialauxmasso.com.br',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}