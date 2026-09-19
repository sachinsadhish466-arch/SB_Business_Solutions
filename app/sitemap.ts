import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sbbusinesssolutions.com';
  const sections = ['', '#about', '#services', '#ai-solutions', '#industries', '#tech-stack', '#portfolio', '#process', '#blog', '#careers', '#contact'];
  return sections.map((s) => ({
    url: `${base}/${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: s === '' ? 1 : 0.8,
  }));
}
