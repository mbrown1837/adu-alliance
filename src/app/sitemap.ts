import { MetadataRoute } from 'next';
import { ORANGE_COUNTY_CITIES, ADU_SERVICES } from '@/lib/data';

async function fetchAllPostSlugs() {
  const allPosts: any[] = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    try {
      const res = await fetch(`https://cms.adualliance.com/wp-json/wp/v2/posts?per_page=50&page=${page}&_fields=slug,modified`, {
        next: { revalidate: 3600 },
      });
      if (!res.ok) break;
      const posts = await res.json();
      if (posts.length === 0) break;
      allPosts.push(...posts);
      const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
      hasMore = page < totalPages;
      page++;
    } catch {
      break;
    }
  }
  return allPosts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://adualliance.com';
  const currentDate = new Date();

  // Fetch live blog posts for dynamic sitemap
  const fetchedPosts = await fetchAllPostSlugs();

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
      priority: 0.85,
    },
    ...fetchedPosts.map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  return [...coreRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
