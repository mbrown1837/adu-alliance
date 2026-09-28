/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 300,
  async headers() {
    return [

      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.evoadu.com' },
      { protocol: 'https', hostname: 'evoadu.com' },
      { protocol: 'https', hostname: 'www.adubuildlosangeles.com' },
      { protocol: 'https', hostname: 'adubuildlosangeles.com' },
      { protocol: 'https', hostname: 'aduresourcecenter.com' },
      { protocol: 'https', hostname: 'www.ladu.co' },
      { protocol: 'https', hostname: 'ladu.co' },
      { protocol: 'https', hostname: 'adualliance.com' },
      { protocol: 'https', hostname: 'cms.adualliance.com' },
      { protocol: 'https', hostname: 'cdn.marblism.com' },
    ],
  },
  async redirects() {
    return [
      {
            "source": "/blog/:path*",
            "destination": "/",
            "permanent": false
      },
      {
            "source": "/garage-conversion-adu-in-huntington-beach/",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-huntington-beach",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/granny-apartments-in-huntington-beach/",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/granny-apartments-in-huntington-beach",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/ab-462-adu-laws-2025-in-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/ab-462-adu-laws-2025-in-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/above-garage-adu-in-san-diego-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/above-garage-adu-in-san-diego-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-irvine/",
            "destination": "/locations/irvine",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-irvine",
            "destination": "/locations/irvine",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-huntington-beach/",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-huntington-beach",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/adu-education/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-education",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/california-adu-laws-2025/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/california-adu-laws-2025",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/junior-adu-construction-in-fallbrook/",
            "destination": "/services/junior-adu",
            "permanent": true
      },
      {
            "source": "/junior-adu-construction-in-fallbrook",
            "destination": "/services/junior-adu",
            "permanent": true
      },
      {
            "source": "/junior-adus-in-garden-grove/",
            "destination": "/locations/garden-grove",
            "permanent": true
      },
      {
            "source": "/junior-adus-in-garden-grove",
            "destination": "/locations/garden-grove",
            "permanent": true
      },
      {
            "source": "/looking-for-affordable-adu-options-here-are-10-things-orange-county-homeowners-should-know-about-costs/",
            "destination": "/calculator",
            "permanent": true
      },
      {
            "source": "/looking-for-affordable-adu-options-here-are-10-things-orange-county-homeowners-should-know-about-costs",
            "destination": "/calculator",
            "permanent": true
      },
      {
            "source": "/orange-county-adu-laws-2025/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/orange-county-adu-laws-2025",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/carlsbad/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/carlsbad",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/services/adu-remodeling/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/services/adu-remodeling",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/2023-adu-laws-in-chula-vista/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/2023-adu-laws-in-chula-vista",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/2023-adu-laws-in-san-diego-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/2023-adu-laws-in-san-diego-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/2026-best-adu-builders-near-me-in-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/2026-best-adu-builders-near-me-in-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/50-frequently-asked-questions-about-adu/",
            "destination": "/about",
            "permanent": true
      },
      {
            "source": "/50-frequently-asked-questions-about-adu",
            "destination": "/about",
            "permanent": true
      },
      {
            "source": "/7-mistakes-you-are-making-and-how-to-fix-them/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/7-mistakes-you-are-making-and-how-to-fix-them",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/above-garage-adu-in-santa-ana/",
            "destination": "/locations/santa-ana",
            "permanent": true
      },
      {
            "source": "/above-garage-adu-in-santa-ana",
            "destination": "/locations/santa-ana",
            "permanent": true
      },
      {
            "source": "/above-garage-adu-vs-detached-adu-in-orange-county/",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/above-garage-adu-vs-detached-adu-in-orange-county",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/above-garage-adu/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/above-garage-adu",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/accessory-dwelling-units-in-garden-grove/",
            "destination": "/locations/garden-grove",
            "permanent": true
      },
      {
            "source": "/accessory-dwelling-units-in-garden-grove",
            "destination": "/locations/garden-grove",
            "permanent": true
      },
      {
            "source": "/adu-apartments-in-orange-county-ca/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-apartments-in-orange-county-ca",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-architecture-in-fallbrook/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/adu-architecture-in-fallbrook",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/adu-attached-to-garage-in-san-diego-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-attached-to-garage-in-san-diego-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-brea/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-brea",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-fullerton",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-garden-grove/",
            "destination": "/locations/garden-grove",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-garden-grove",
            "destination": "/locations/garden-grove",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-mission-viejo/",
            "destination": "/locations/mission-viejo",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-mission-viejo",
            "destination": "/locations/mission-viejo",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-aliso-viejo/",
            "destination": "/locations/aliso-viejo",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-aliso-viejo",
            "destination": "/locations/aliso-viejo",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-buena-park/",
            "destination": "/locations/buena-park",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-buena-park",
            "destination": "/locations/buena-park",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-cypress/",
            "destination": "/locations/cypress",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-cypress",
            "destination": "/locations/cypress",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-orange-county-90-days-dream-units/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-orange-county-90-days-dream-units",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-builders-near-me-in-aliso-viejo/",
            "destination": "/locations/aliso-viejo",
            "permanent": true
      },
      {
            "source": "/adu-builders-near-me-in-aliso-viejo",
            "destination": "/locations/aliso-viejo",
            "permanent": true
      },
      {
            "source": "/adu-construction-in-california-permits-tips-2026/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-construction-in-california-permits-tips-2026",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-construction-in-fullerton",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/adu-construction-in-fullerton/",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/adu-construction-near-me-in-orange-county/",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/adu-construction-near-me-in-orange-county",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/adu-construction-orange-county/",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/adu-construction-orange-county",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/adu-contractor-in-irvine",
            "destination": "/locations/irvine",
            "permanent": true
      },
      {
            "source": "/adu-contractor-in-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-contractor-in-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-contractor-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-contractor-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-contractors-in-anaheim/",
            "destination": "/locations/anaheim",
            "permanent": true
      },
      {
            "source": "/adu-contractors-in-anaheim",
            "destination": "/locations/anaheim",
            "permanent": true
      },
      {
            "source": "/adu-contractors-in-huntington-beach/",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/adu-contractors-in-huntington-beach",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/adu-designers-in-orange-county/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/adu-designers-in-orange-county",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/adu-designing-in-fallbrook/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/adu-designing-in-fallbrook",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-costs/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-costs",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-in-brea/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-in-brea",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-in-fullerton/",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-in-fullerton",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-plans-in-westminster/",
            "destination": "/locations/westminster",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-plans-in-westminster",
            "destination": "/locations/westminster",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversions-in-orange-county/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversions-in-orange-county",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/adu-home-builders-backyard-cash-solutions-in-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-home-builders-backyard-cash-solutions-in-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-housing-in-brea/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/adu-housing-in-brea",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-el-cajon/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-el-cajon",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-imperial-beach/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-imperial-beach",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-la-mesa-ca/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-la-mesa-ca",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-lemon-grove/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-lemon-grove",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-national-city/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-national-city",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-oceanside/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-oceanside",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-san-diego/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-san-diego",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-brea/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-brea",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-carlsbad/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-carlsbad",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-dana-point/",
            "destination": "/locations/dana-point",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-dana-point",
            "destination": "/locations/dana-point",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-fountain-valley/",
            "destination": "/locations/fountain-valley",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-fountain-valley",
            "destination": "/locations/fountain-valley",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-huntington-beach/",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-huntington-beach",
            "destination": "/locations/huntington-beach",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-irvine/",
            "destination": "/locations/irvine",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-irvine",
            "destination": "/locations/irvine",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-la-habra/",
            "destination": "/locations/la-habra",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-la-habra",
            "destination": "/locations/la-habra",
            "permanent": true
      },
      {
            "source": "/adu-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-permits-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-permits-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-what-does-adu-stand-for-in-san-diego-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-what-does-adu-stand-for-in-san-diego-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/affordable-adu-builder-in-irvine",
            "destination": "/locations/irvine",
            "permanent": true
      },
      {
            "source": "/affordable-adu-builders-in-fallbrook/",
            "destination": "/calculator",
            "permanent": true
      },
      {
            "source": "/affordable-adu-builders-in-fallbrook",
            "destination": "/calculator",
            "permanent": true
      },
      {
            "source": "/affordable-adu-garage-conversion-in-orange-county/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/affordable-adu-garage-conversion-in-orange-county",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/affordable-adu-in-orange-county/",
            "destination": "/calculator",
            "permanent": true
      },
      {
            "source": "/affordable-adu-in-orange-county",
            "destination": "/calculator",
            "permanent": true
      },
      {
            "source": "/aliso-viejo-adu-information/",
            "destination": "/locations/aliso-viejo",
            "permanent": true
      },
      {
            "source": "/aliso-viejo-adu-information",
            "destination": "/locations/aliso-viejo",
            "permanent": true
      },
      {
            "source": "/average-cost-to-convert-garage-to-adu-in-yorba-linda/",
            "destination": "/locations/yorba-linda",
            "permanent": true
      },
      {
            "source": "/average-cost-to-convert-garage-to-adu-in-yorba-linda",
            "destination": "/locations/yorba-linda",
            "permanent": true
      },
      {
            "source": "/basement-adu-in-cypress/",
            "destination": "/locations/cypress",
            "permanent": true
      },
      {
            "source": "/basement-adu-in-cypress",
            "destination": "/locations/cypress",
            "permanent": true
      },
      {
            "source": "/best-adu-builder-in-brea/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/best-adu-builder-in-brea",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/best-adu-builder-in-mission-viejo/",
            "destination": "/locations/mission-viejo",
            "permanent": true
      },
      {
            "source": "/best-adu-builder-in-mission-viejo",
            "destination": "/locations/mission-viejo",
            "permanent": true
      },
      {
            "source": "/best-adu-contractor-in-fullerton/",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/best-adu-contractor-in-fullerton",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/best-adu-contractor-in-mission-viejo/",
            "destination": "/locations/mission-viejo",
            "permanent": true
      },
      {
            "source": "/best-adu-contractor-in-mission-viejo",
            "destination": "/locations/mission-viejo",
            "permanent": true
      },
      {
            "source": "/best-adu-contractor-in-orange",
            "destination": "/locations/orange",
            "permanent": true
      },
      {
            "source": "/best-adu-contractor-in-orange/",
            "destination": "/locations/orange",
            "permanent": true
      },
      {
            "source": "/best-adu-contractors-in-fallbrook/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/best-adu-contractors-in-fallbrook",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/blogs/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/blogs",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/contact-us/",
            "destination": "/free-feasibility",
            "permanent": true
      },
      {
            "source": "/contact-us",
            "destination": "/free-feasibility",
            "permanent": true
      },
      {
            "source": "/convert-a-garage-to-a-jadu/",
            "destination": "/services/junior-adu",
            "permanent": true
      },
      {
            "source": "/convert-a-garage-to-a-jadu",
            "destination": "/services/junior-adu",
            "permanent": true
      },
      {
            "source": "/cost-breakdown-of-affordable-garage-conversion-adus/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/cost-breakdown-of-affordable-garage-conversion-adus",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/cost-per-square-foot-addition-in-yorba-linda/",
            "destination": "/locations/yorba-linda",
            "permanent": true
      },
      {
            "source": "/cost-per-square-foot-addition-in-yorba-linda",
            "destination": "/locations/yorba-linda",
            "permanent": true
      },
      {
            "source": "/detached-adus-2025-orange-county/",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/detached-adus-2025-orange-county",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-contractor-in-orange-county/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-contractor-in-orange-county",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-anaheim/",
            "destination": "/locations/anaheim",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-anaheim",
            "destination": "/locations/anaheim",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-brea/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-brea",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-fullerton/",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-fullerton",
            "destination": "/locations/fullerton",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-garden-grove/",
            "destination": "/locations/garden-grove",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-garden-grove",
            "destination": "/locations/garden-grove",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-orange-county/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu-in-orange-county",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-conversion-adu",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-conversion-vs-new-adu-construction-which-is-better-for-your-orange-county-property/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-conversion-vs-new-adu-construction-which-is-better-for-your-orange-county-property",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-to-adu-conversion-cost-in-orange-county/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/garage-to-adu-conversion-cost-in-orange-county",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/granny-flat-floor-plan-in-yorba-linda/",
            "destination": "/locations/yorba-linda",
            "permanent": true
      },
      {
            "source": "/granny-flat-floor-plan-in-yorba-linda",
            "destination": "/locations/yorba-linda",
            "permanent": true
      },
      {
            "source": "/granny-flats-in-anaheim/",
            "destination": "/locations/anaheim",
            "permanent": true
      },
      {
            "source": "/granny-flats-in-anaheim",
            "destination": "/locations/anaheim",
            "permanent": true
      },
      {
            "source": "/guide-to-adu-garage-conversion",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/guide-to-adu-garage-conversion/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/jadu-garage-conversion/",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/jadu-garage-conversion",
            "destination": "/services/garage-conversion",
            "permanent": true
      },
      {
            "source": "/junior-adu-in-santa-ana/",
            "destination": "/locations/santa-ana",
            "permanent": true
      },
      {
            "source": "/junior-adu-in-santa-ana",
            "destination": "/locations/santa-ana",
            "permanent": true
      },
      {
            "source": "/junior-adu-requirements-in-yorba-linda",
            "destination": "/locations/yorba-linda",
            "permanent": true
      },
      {
            "source": "/la-500sqft-garage-adu-cost-breakdown/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/la-500sqft-garage-adu-cost-breakdown",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/local-adu-architect-in-orange-county-ca/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/local-adu-architect-in-orange-county-ca",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/locations/la-palma/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/locations/la-palma",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/modern-custom-adu-designs-in-orange-county/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/modern-custom-adu-designs-in-orange-county",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/new-adu-laws-california-2026-in-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/new-adu-laws-california-2026-in-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/new-adu-rules-california-2026-expert-guide/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/new-adu-rules-california-2026-expert-guide",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/new-adu-rules-california-2026-guide-property-value/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/new-adu-rules-california-2026-guide-property-value",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/property-adu-in-aliso-viejo/",
            "destination": "/locations/aliso-viejo",
            "permanent": true
      },
      {
            "source": "/property-adu-in-aliso-viejo",
            "destination": "/locations/aliso-viejo",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/chula-vista/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/chula-vista",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/coronado/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/coronado",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/del-mar/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/del-mar",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/el-cajon/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/el-cajon",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/encinitas/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/encinitas",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/escondido/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/escondido",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/fallbrook/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/fallbrook",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/imperial-beach/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/imperial-beach",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/la-mesa/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/la-mesa",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/san-marcos/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/san-marcos",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/san-diego-county/adu-architecture/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/san-diego-county/adu-architecture",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/services/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/services",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/services/adu-architecture/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/services/adu-architecture",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/services/adu-construction/",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/services/adu-construction",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/services/adu-consultation/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/services/adu-consultation",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/services/adu-designing/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/services/adu-designing",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/services/adu-permitting/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/services/adu-permitting",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/services/adu-regulatory-assistance/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/services/adu-regulatory-assistance",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/top-adu-builders-in-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/top-adu-builders-in-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/top-adu-contractor-in-brea/",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/top-adu-contractor-in-brea",
            "destination": "/locations/brea",
            "permanent": true
      },
      {
            "source": "/top-rated-custom-adu-designer-in-orange-county/",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/top-rated-custom-adu-designer-in-orange-county",
            "destination": "/services/adu-design",
            "permanent": true
      },
      {
            "source": "/ultimate-guide-adu-regulations-california-2026/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/ultimate-guide-adu-regulations-california-2026",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/what-is-adu-construction-guide-for-homeowners-2026/",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/what-is-adu-construction-guide-for-homeowners-2026",
            "destination": "/services/detached-adu",
            "permanent": true
      },
      {
            "source": "/what-is-adu-in-orange-county-ca/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/what-is-adu-in-orange-county-ca",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/wp-content/uploads/2023/06/adu-new-free-estimate-image.jpg",
            "destination": "/free-feasibility",
            "permanent": true
      },
      {
            "source": "/zero-hassle-adu-permit-california-2026-guide/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/zero-hassle-adu-permit-california-2026-guide",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-cost-in-orange-county",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-garage-conversion-cost-in-orange-county/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/orange-county-adu-permits-sb-543",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/orange-county-adu-permits-sb-543/",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide",
            "destination": "/services/adu-construction/",
            "permanent": true
      },
      {
            "source": "/adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide/",
            "destination": "/services/adu-construction/",
            "permanent": true
      }
];
  },
};

export default nextConfig;