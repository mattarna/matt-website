import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matteoarnaboldi.com';
  const locales = ['it', 'en'];
  const lastModified = new Date();

  return locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/self-destruct`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]);
}

