import { MetadataRoute } from 'next';
import { ORANGE_COUNTY_CITIES, ADU_SERVICES } from '@/lib/data';
import { getPublishedPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adualliance.com';

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/projects`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/models`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/process`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/calculator`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/free-feasibility`, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = ADU_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    changeFrequency: 'weekly',
    priority: s.slug === 'garage-conversion' ? 0.95 : 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = ORANGE_COUNTY_CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    changeFrequency: 'weekly',
    priority: city.isPriority ? 0.85 : 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getPublishedPosts()
    .filter((post) => !post.noIndex)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [...coreRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
