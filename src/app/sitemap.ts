import { MetadataRoute } from 'next';
import { ORANGE_COUNTY_CITIES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adualliance.com';
  const currentDate = new Date().toISOString();

  // Core Static Money Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/models`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-feasibility`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // 34 Orange County Location Hubs
  const locationRoutes: MetadataRoute.Sitemap = ORANGE_COUNTY_CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: city.isPriority ? 0.85 : 0.7,
  }));

  return [...coreRoutes, ...locationRoutes];
}
