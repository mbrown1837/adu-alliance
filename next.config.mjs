/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.evoadu.com' },
      { protocol: 'https', hostname: 'evoadu.com' },
      { protocol: 'https', hostname: 'www.adubuildlosangeles.com' },
      { protocol: 'https', hostname: 'adubuildlosangeles.com' },
      { protocol: 'https', hostname: 'aduresourcecenter.com' },
      { protocol: 'https', hostname: 'www.ladu.co' },
      { protocol: 'https', hostname: 'ladu.co' },
      { protocol: 'https', hostname: 'adualliance.com' },
    ],
  },
  async redirects() {
    return [
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/ab-462-adu-laws-2025-in-orange-county",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/above-garage-adu-in-san-diego-county/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/above-garage-adu-in-san-diego-county",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-builder-in-orange-county",
            "destination": "/",
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-education",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/california-adu-laws-2025/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/california-adu-laws-2025",
            "destination": "/process",
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/orange-county-adu-laws-2025",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/carlsbad/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/carlsbad",
            "destination": "/",
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/2023-adu-laws-in-chula-vista",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/2023-adu-laws-in-san-diego-county/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/2023-adu-laws-in-san-diego-county",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/2026-best-adu-builders-near-me-in-orange-county/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/2026-best-adu-builders-near-me-in-orange-county",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/7-mistakes-you-are-making-and-how-to-fix-them",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/above-garage-adu",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-apartments-in-orange-county-ca",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-attached-to-garage-in-san-diego-county",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-builders-in-orange-county-90-days-dream-units",
            "destination": "/",
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-construction-in-california-permits-tips-2026",
            "destination": "/process",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-contractor-in-orange-county",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-contractor-orange-county/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-contractor-orange-county",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-home-builders-backyard-cash-solutions-in-orange-county",
            "destination": "/",
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-el-cajon",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-imperial-beach/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-imperial-beach",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-la-mesa-ca/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-la-mesa-ca",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-lemon-grove/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-lemon-grove",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-national-city/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-national-city",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-oceanside/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-oceanside",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-san-diego/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-laws-in-san-diego",
            "destination": "/process",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-meaning-in-carlsbad",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-orange-county",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-permits-orange-county/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-permits-orange-county",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/adu-what-does-adu-stand-for-in-san-diego-county/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/adu-what-does-adu-stand-for-in-san-diego-county",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/best-adu-contractors-in-fallbrook",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/blogs/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/blogs",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/local-adu-architect-in-orange-county-ca",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/locations/la-palma/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/locations/la-palma",
            "destination": "/",
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/new-adu-laws-california-2026-in-orange-county",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/new-adu-rules-california-2026-expert-guide/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/new-adu-rules-california-2026-expert-guide",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/new-adu-rules-california-2026-guide-property-value/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/new-adu-rules-california-2026-guide-property-value",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/chula-vista",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/coronado/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/coronado",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/del-mar/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/del-mar",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/el-cajon/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/el-cajon",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/encinitas/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/encinitas",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/escondido/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/escondido",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/fallbrook/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/fallbrook",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/imperial-beach/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/imperial-beach",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/la-mesa/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/la-mesa",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/san-marcos/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/san-deigo-county/san-marcos",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/services",
            "destination": "/",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/services/adu-consultation",
            "destination": "/",
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/services/adu-permitting",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/services/adu-regulatory-assistance/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/services/adu-regulatory-assistance",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/top-adu-builders-in-orange-county/",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/top-adu-builders-in-orange-county",
            "destination": "/",
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
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/ultimate-guide-adu-regulations-california-2026",
            "destination": "/process",
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
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/what-is-adu-in-orange-county-ca",
            "destination": "/",
            "permanent": true
      },
      {
            "source": "/wp-content/uploads/2023/06/adu-new-free-estimate-image.jpg",
            "destination": "/free-feasibility",
            "permanent": true
      },
      {
            "source": "/zero-hassle-adu-permit-california-2026-guide/",
            "destination": "/process",
            "permanent": true
      },
      {
            "source": "/zero-hassle-adu-permit-california-2026-guide",
            "destination": "/process",
            "permanent": true
      }
];
  },
};

export default nextConfig;
