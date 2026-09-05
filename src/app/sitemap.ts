import { MetadataRoute } from 'next';
import { ORANGE_COUNTY_CITIES, ADU_SERVICES, MOCK_BLOG_POSTS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adualliance.com';
  const currentDate = new Date().toISOString();

  // Core Foundation Money Pages
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
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
      priority: 0.85,
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
      priority: 0.95,
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

  // 5 Core Service Pages
  const serviceRoutes: MetadataRoute.Sitemap = ADU_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: s.slug === 'garage-conversion' ? 0.95 : 0.85,
  }));

  // 34 Orange County Location Hubs
  const locationRoutes: MetadataRoute.Sitemap = ORANGE_COUNTY_CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: city.isPriority ? 0.85 : 0.75,
  }));

  // Blog Routes
  const blogRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...MOCK_BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    // Preserved High-Ranking GSC Guides
    {
      url: `${baseUrl}/adu-garage-conversion-cost-in-orange-county`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/orange-county-adu-permits-sb-543`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  return [...coreRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
