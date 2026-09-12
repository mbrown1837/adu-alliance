import { MetadataRoute } from 'next';
import { ORANGE_COUNTY_CITIES, ADU_SERVICES } from '@/lib/data';

const STATIC_BLOG_POSTS: { slug: string; modified: string }[] = [
  {
    "slug": "adu-design-regulations-in-ca-2026-complete-guide",
    "modified": "2026-01-21"
  },
  {
    "slug": "adu-size-limits-in-orange-county-2026-full-guide",
    "modified": "2026-05-06"
  },
  {
    "slug": "ultimate-guide-adu-regulations-california-2026",
    "modified": "2026-05-06"
  },
  {
    "slug": "new-adu-rules-california-2026-expert-guide",
    "modified": "2026-01-14"
  },
  {
    "slug": "zero-hassle-adu-permit-california-2026-guide",
    "modified": "2026-01-13"
  },
  {
    "slug": "new-adu-rules-california-2026-guide-property-value",
    "modified": "2026-01-12"
  },
  {
    "slug": "new-adu-laws-california-2026-in-orange-county",
    "modified": "2026-05-06"
  },
  {
    "slug": "adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide",
    "modified": "2026-05-06"
  },
  {
    "slug": "2026-best-adu-builders-near-me-in-orange-county",
    "modified": "2026-01-08"
  },
  {
    "slug": "adu-home-builders-backyard-cash-solutions-in-orange-county",
    "modified": "2026-01-07"
  },
  {
    "slug": "adu-builders-in-orange-county-90-days-dream-units",
    "modified": "2026-01-06"
  },
  {
    "slug": "adu-construction-near-me-in-orange-county",
    "modified": "2026-05-06"
  },
  {
    "slug": "la-500sqft-garage-adu-cost-breakdown",
    "modified": "2026-01-03"
  },
  {
    "slug": "what-is-adu-construction-guide-for-homeowners-2026",
    "modified": "2026-05-06"
  },
  {
    "slug": "adu-construction-in-california-permits-tips-2026",
    "modified": "2025-12-30"
  },
  {
    "slug": "free-adu-consultation-for-homeowners-in-orange-county",
    "modified": "2025-12-31"
  },
  {
    "slug": "7-mistakes-you-are-making-and-how-to-fix-them",
    "modified": "2025-12-20"
  },
  {
    "slug": "affordable-adu-designs-in-carolina",
    "modified": "2025-12-11"
  },
  {
    "slug": "cost-breakdown-of-affordable-garage-conversion-adus",
    "modified": "2025-12-09"
  },
  {
    "slug": "affordable-adu-garage-conversion-in-orange-county",
    "modified": "2026-01-27"
  },
  {
    "slug": "affordable-adu-in-orange-county",
    "modified": "2026-01-29"
  },
  {
    "slug": "above-garage-adu",
    "modified": "2026-05-06"
  },
  {
    "slug": "guide-to-adu-garage-conversion",
    "modified": "2025-11-24"
  },
  {
    "slug": "adu-permits-orange-county",
    "modified": "2025-11-22"
  },
  {
    "slug": "california-adu-laws-2025",
    "modified": "2025-11-20"
  },
  {
    "slug": "adu-orange-county",
    "modified": "2026-01-29"
  },
  {
    "slug": "adu-contractor-orange-county",
    "modified": "2025-11-18"
  },
  {
    "slug": "ab-462-adu-laws-2025-in-orange-county",
    "modified": "2025-11-15"
  },
  {
    "slug": "orange-county-adu-laws-2025",
    "modified": "2025-11-13"
  },
  {
    "slug": "detached-adus-2025-orange-county",
    "modified": "2025-11-12"
  },
  {
    "slug": "adu-construction-orange-county",
    "modified": "2025-11-11"
  },
  {
    "slug": "garage-conversion-vs-new-adu-construction-which-is-better-for-your-orange-county-property",
    "modified": "2025-11-10"
  },
  {
    "slug": "adu-garage-conversion-cost-in-orange-county",
    "modified": "2026-01-29"
  },
  {
    "slug": "above-garage-adu-vs-detached-adu-in-orange-county",
    "modified": "2025-11-03"
  },
  {
    "slug": "orange-county-adu-permits-sb-543",
    "modified": "2026-05-06"
  },
  {
    "slug": "adu-garage-conversions-in-orange-county",
    "modified": "2026-02-04"
  },
  {
    "slug": "the-ultimate-guide-to-adu-garage-conversions-everything-orange-county-homeowners-need-to-succeed",
    "modified": "2025-10-30"
  },
  {
    "slug": "looking-for-affordable-adu-options-here-are-10-things-orange-county-homeowners-should-know-about-costs",
    "modified": "2025-10-30"
  },
  {
    "slug": "adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too",
    "modified": "2025-10-30"
  },
  {
    "slug": "adu-construction-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-housing-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "basement-adu-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "detached-adu-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-adu-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-architecture-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "granny-flats-in-fallbrook",
    "modified": "2026-01-29"
  },
  {
    "slug": "adu-designing-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-living-unit-in-fallbrook",
    "modified": "2024-07-08"
  },
  {
    "slug": "adu-installer-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adu-construction-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-garage-conversion-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-contractors-in-fallbrook",
    "modified": "2026-01-27"
  },
  {
    "slug": "affordable-adu-builders-in-fallbrook",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adu-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-living-unit-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "nudes-trade-telegram",
    "modified": "2026-05-05"
  },
  {
    "slug": "adult-movies-telegram-link",
    "modified": "2026-05-06"
  },
  {
    "slug": "inspiring-adu-designers-in-laguna-woods",
    "modified": "2024-06-05"
  },
  {
    "slug": "granny-flats-in-chula-vista",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-construction-in-laguna-woods",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-garage-conversion-cost-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-grant-of-san-diego",
    "modified": "2026-01-28"
  },
  {
    "slug": "affordable-dwelling-unit-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-apartments-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "top-adu-installer-in-la-habra",
    "modified": "2024-06-05"
  },
  {
    "slug": "affordable-junior-adus-in-la-habra",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-meaning-in-la-habra",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-designers-in-la-habra",
    "modified": "2024-06-05"
  },
  {
    "slug": "front-yard-adu-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "backyard-adu-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-construction-in-la-habra",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-housing-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-adu-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "coronado-adu-development",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-builder-in-la-habra",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-architect-near-me-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-what-does-adu-stand-for-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "chula-vista-adu-zoning",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-attached-to-garage-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "carlsbad-adu-regulations",
    "modified": "2026-01-27"
  },
  {
    "slug": "attached-garage-adu-conversion-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "jadu-garage-conversion-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-meaning-in-carlsbad",
    "modified": "2026-01-28"
  },
  {
    "slug": "above-garage-adu-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-adu-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-to-adu-conversion-cost-in-orange-county",
    "modified": "2026-01-28"
  },
  {
    "slug": "garage-conversion-adu-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-meaning-in-garden-grove",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-meaning-in-dana-point",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-meaning-in-fountain-valley",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-meaning-in-costa-mesa",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-meaning-in-huntington-beach",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-real-estate-in-san-diego-county-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "2023-adu-laws-in-chula-vista",
    "modified": "2026-01-28"
  },
  {
    "slug": "2023-adu-laws-in-carlsbad",
    "modified": "2024-06-05"
  },
  {
    "slug": "2023-adu-laws-in-del-mar",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-el-cajon",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-encinitas",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-poway",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-san-diego",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-santee",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-solana-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-oceanside",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-national-city",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-lemon-grove",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-la-mesa-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-laws-in-imperial-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-meaning-in-irvine",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-designers-in-irvine",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-meaning-in-brea",
    "modified": "2026-01-28"
  },
  {
    "slug": "garage-conversion-adu-in-la-habra",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-construction-in-irvine",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-in-irvine",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractor-in-irvine",
    "modified": "2026-05-06"
  },
  {
    "slug": "accessory-dwelling-units-in-irvine",
    "modified": "2026-01-27"
  },
  {
    "slug": "affordable-adu-builder-in-irvine",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-in-irvine",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-installer-in-irvine",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adus-in-irvine",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-adu-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-installer-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "2023-adu-laws-in-san-diego-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "accessory-dwelling-units-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-designers-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-garage-conversion-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-construction-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-contractor-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-in-fullerton",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-construction-in-garden-grove",
    "modified": "2024-06-05"
  },
  {
    "slug": "accessory-dwelling-units-in-garden-grove",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adus-in-garden-grove",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-designers-in-garden-grove",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-in-garden-grove",
    "modified": "2026-01-28"
  },
  {
    "slug": "adu-installer-in-garden-grove",
    "modified": "2026-01-26"
  },
  {
    "slug": "adu-builder-in-garden-grove",
    "modified": "2026-01-27"
  },
  {
    "slug": "adu-contractor-in-garden-grove",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-installer-in-orange",
    "modified": "2026-05-06"
  },
  {
    "slug": "adu-installer-in-cypress",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-installer-in-brea",
    "modified": "2026-05-06"
  },
  {
    "slug": "adu-designers-in-cypress",
    "modified": "2024-06-05"
  },
  {
    "slug": "affordable-accessory-dwelling-unit-in-orange-county-ca",
    "modified": "2026-01-27"
  },
  {
    "slug": "garage-conversion-adu-in-mission-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-installer-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-builder-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractor-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-construction-in-orange",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-contractor-in-orange",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-installer-in-mission-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-builder-in-mission-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "basement-adu-in-cypress",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-in-mission-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "affordable-adu-contractor-in-mission-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-contractor-in-mission-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-architecture-in-fountain-valley",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-fountain-valley",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-designers-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-construction-in-fountain-valley",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-building-codes-in-buena-park",
    "modified": "2026-01-29"
  },
  {
    "slug": "adu-general-contractor-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-building-codes-in-cypress",
    "modified": "2024-06-05"
  },
  {
    "slug": "top-adu-contractor-in-brea",
    "modified": "2026-01-27"
  },
  {
    "slug": "adu-building-codes-in-orange-county",
    "modified": "2026-01-27"
  },
  {
    "slug": "adu-builders-in-cypress",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-in-dana-point",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-builders-in-dana-point",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-dana-point",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-adu-in-cypress",
    "modified": "2024-06-05"
  },
  {
    "slug": "orange-county-adu",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adu-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-in-cypress-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-near-me-in-costa-mesa",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adu-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adu-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "green-custom-adu-designs-in-orange-county",
    "modified": "2026-01-29"
  },
  {
    "slug": "modern-custom-adu-designs-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "custom-adu-design-consultation-in-orange-county",
    "modified": "2026-01-27"
  },
  {
    "slug": "top-rated-custom-adu-designer-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "basement-adu-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "affordable-custom-adu-designs-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "basement-adu-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "custom-adu-designs-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "modular-adu-construction-trends-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-contractor-in-costa-mesa",
    "modified": "2024-06-05"
  },
  {
    "slug": "basement-adu-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "accessory-dwelling-units-in-costa-mesa",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-in-costa-mesa",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-costa-mesa",
    "modified": "2024-06-05"
  },
  {
    "slug": "legal-adu-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-near-me-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "top-adu-builders-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-builders-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-unit-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-contractor-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-permitting-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-housing-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-housing-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractor-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-contractor-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "convert-your-garage-to-an-adu-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-garage-conversion-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-contractor-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractor-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-near-me-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-near-me-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-adu-builder-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-near-me-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-near-me-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-brea",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-near-me-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-near-me-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-near-me-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-near-me-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builder-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-in-buena-park",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-ideas-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-ideas-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "benefits-of-adus",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-ideas-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "jadu-construction-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "jadu-construction-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-regulatory-assistance-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-consultation-services-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-permitting-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-architecture-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-designing-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "modular-accessory-dwelling-unit-in-westminster",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-garage-conversion-plans-in-westminster",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-remodeling-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-construction-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "2-car-garage-adu-conversion-in-westminster",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-regulatory-assistance-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-in-westminster",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-consultation-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "cost-to-convert-garage-to-adu-in-westminster",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-westminster",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-meaning-in-westminster",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-permitting-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-in-aliso-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-builders-near-me-in-aliso-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-designing-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-architecture-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-construction-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-house-cost-in-aliso-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-remodeling-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "granny-apartments-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "granny-apartments-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-property-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-near-me-in-aliso-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-property-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-in-aliso-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-requirements-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "granny-flat-floor-plan-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-requirements-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-adu-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "granny-flat-adu-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "mastring-adu-floor-plan-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-adu-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "aliso-viejo-adu-information",
    "modified": "2024-06-05"
  },
  {
    "slug": "granny-flats-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-layouts-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "spectacular-adu-blueprints-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "cost-per-square-foot-addition-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-house-meaning-in-aliso-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-housing-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adu-requirements-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-adu-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-in-huntington-beach",
    "modified": "2024-06-05"
  },
  {
    "slug": "average-cost-to-convert-garage-to-adu-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "granny-flats-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-housing-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-contractors-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-adu-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "unlocking-the-adu-conversion-cost-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu-in-anaheim",
    "modified": "2024-06-05"
  },
  {
    "slug": "discover-garage-conversion-adu-cost-in-yorba-linda",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-house-in-aliso-viejo",
    "modified": "2026-01-29"
  },
  {
    "slug": "property-adu-in-aliso-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "the-granny-flats",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-adu-requirements-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-in-real-estate-in-aliso-viejo",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-adu",
    "modified": "2024-06-05"
  },
  {
    "slug": "50-frequently-asked-questions-about-adu",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-garage-adu",
    "modified": "2024-06-05"
  },
  {
    "slug": "convert-a-garage-to-a-jadu",
    "modified": "2024-06-05"
  },
  {
    "slug": "above-garage-adu-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-real-estate-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "best-garage-conversion-adu",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-addition",
    "modified": "2024-06-05"
  },
  {
    "slug": "property-adu",
    "modified": "2024-06-05"
  },
  {
    "slug": "converting-a-garage-into-an-adu-in-california",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-garage-conversion-costs",
    "modified": "2024-06-05"
  },
  {
    "slug": "junior-adu-in-santa-ana",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-living-unit-in-orange-county-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-garage-conversion-cost",
    "modified": "2024-06-05"
  },
  {
    "slug": "affordable-dwelling-units-adus-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-apartments-in-orange-county-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "front-yard-adu-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-housing-in-orange-county-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "backyard-adu-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-for-rent-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "detached-adus-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-adu-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "local-adu-architect-in-orange-county-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "what-does-adu-stand-for-in-orange-county-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "what-is-adu-in-orange-county-ca",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-attached-to-garage",
    "modified": "2024-06-05"
  },
  {
    "slug": "attached-garage-adu-conversion",
    "modified": "2024-06-05"
  },
  {
    "slug": "jadu-garage-conversion",
    "modified": "2024-06-05"
  },
  {
    "slug": "above-garage-adu-in-santa-ana",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-adu-in-orange-county",
    "modified": "2024-06-05"
  },
  {
    "slug": "garage-conversion-adu",
    "modified": "2024-06-05"
  },
  {
    "slug": "adu-real-estate",
    "modified": "2024-06-05"
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adualliance.com';
  const currentDate = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/models`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/process`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/calculator`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/free-feasibility`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = ADU_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: s.slug === 'garage-conversion' ? 0.95 : 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = ORANGE_COUNTY_CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: city.isPriority ? 0.85 : 0.75,
  }));

  const blogRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    ...STATIC_BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];

  return [...coreRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
