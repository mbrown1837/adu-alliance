import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ORANGE_COUNTY_CITIES, EVO_MODELS, LADU_PROJECT_PLAN } from '@/lib/data';
import { ShieldCheck, MapPin, Clock, CheckCircle2, Phone, Home, Building2, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import GhlLeadForm from '@/components/GhlLeadForm';

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ORANGE_COUNTY_CITIES.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = ORANGE_COUNTY_CITIES.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `ADU Builders in ${city.name}, CA | Turnkey Design & Permits | ADU Alliance`,
    description: `Turnkey ADU builder in ${city.name}, Orange County. Guaranteed ${city.name} city permits, 4-ft setbacks, custom floor plans, and fixed-price construction from $149,000. Call (657) 298-4061.`,
    alternates: {
      canonical: `https://adualliance.com/locations/${city.slug}`,
    },
    openGraph: {
      title: `ADU Builders in ${city.name}, CA | ADU Alliance`,
      description: `Turnkey design, municipal permits, and ground-up ADU construction in ${city.name}, California.`,
      url: `https://adualliance.com/locations/${city.slug}`,
    },
  };
}

export default async function CityLocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const city = ORANGE_COUNTY_CITIES.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  // City-specific HomeAndConstructionBusiness & Breadcrumbs JSON-LD schema
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `ADU Alliance - ${city.name} ADU Builders`,
    url: `https://adualliance.com/locations/${city.slug}`,
    telephone: '+1-657-298-4061',
    priceRange: '$149,000 - $350,000',
    image: 'https://www.evoadu.com/assets/images/Home_Pic_5_Two_Home.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2372 Morse Ave',
      addressLocality: 'Irvine',
      addressRegion: 'CA',
      postalCode: '92614',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6839,
      longitude: -117.8384,
    },
    areaServed: [city.name, 'Orange County'],
    description: `Premier design-build ADU general contractor network serving homeowners in ${city.name}, California. Custom 3D architectural plans, 100% in-house municipal plan check expediting, and ground-up construction.`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://adualliance.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://adualliance.com/#locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${city.name} ADU Builders`,
        item: `https://adualliance.com/locations/${city.slug}`,
      },
    ],
  };

  const localFaqs = [
    {
      q: `What are the ADU rear and side setback requirements in ${city.name}?`,
      a: `Under California state law (AB 68 and Govt Code 65852.2), ${city.name} cannot mandate more than 4-foot rear and side setbacks for detached single-story ADUs up to 16–18 feet in height. Garage conversions within existing footprints require 0-foot additional setback.`,
    },
    {
      q: `Do I need to replace garage parking when converting a garage into an ADU in ${city.name}?`,
      a: `No. Under California state legislation, when a garage, carport, or covered parking structure is converted into an ADU in ${city.name}, the city cannot require replacement off-street parking spaces.`,
    },
    {
      q: `How long does building department permit approval take in ${city.name}?`,
      a: `Permit plan check timelines in ${city.name} typically average ${city.permitTurnaroundWeeks}. ADU Alliance handles all initial plan submissions, city comments, Title 24 energy calculations, and correction notices in-house until permit issuance.`,
    },
    {
      q: `Are ADUs under 500 sq ft exempt from school impact fees in ${city.name}?`,
      a: `Yes! Under updated 2026 California ADU regulations, secondary dwelling units measuring under 500 square feet are completely exempt from local school impact development fees across all Orange County school districts.`,
    },
  ];

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 sm:space-y-24">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-2 text-brand-amber text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-4 h-4" />
          <span>{city.name}, California &bull; Municipal ADU Design-Build Hub</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          ADU Builders in {city.name}. <br />
          <span className="font-normal italic text-brand-amber">
            Turnkey design, 100% city permits & build.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          Looking to build a detached backyard home or convert a garage in {city.name}? ADU Alliance provides a single-source design-build contract covering architecture, structural engineering, {city.name} building department plan check, and ground-up construction.
        </p>

        {/* 2026 AEO Direct Answer Passage Box for Google AI Overviews */}
        <div className="p-6 bg-brand-dark rounded-2xl border border-brand-amber/40 space-y-2 shadow-lg">
          <span className="text-xs font-mono font-bold text-brand-amber uppercase tracking-wider block">
            DIRECT ANSWER &bull; 2026 {city.name.toUpperCase()} ADU LAWS & PERMITS
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
            Under California state law (AB 1033 & AB 68), single-family residential lots in {city.name} are entitled to construct a detached ADU up to 1,200 sq ft with 4-foot rear and side setbacks, or convert an existing garage with zero replacement parking required. Municipal plan check review in {city.name} averages <strong>{city.permitTurnaroundWeeks}</strong>.
          </p>
        </div>

        {/* City Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono">
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Permit Turnaround</div>
            <div className="text-xl font-black text-brand-amber">{city.permitTurnaroundWeeks}</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Jurisdiction</div>
            <div className="text-xl font-black text-white">{city.county}</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark col-span-2 sm:col-span-1">
            <div className="text-xs text-slate-400">Contractor Alliance</div>
            <div className="text-xl font-black text-brand-emerald">Class B Network</div>
          </div>
        </div>
      </div>

      {/* City Specific Zoning Card */}
      <div className="p-6 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            LOCAL MUNICIPAL GUIDELINES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Building an ADU in {city.name}: Zoning & Setback Details
          </h2>
        </div>

        <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
          <p>
            <strong>City Zoning Overview:</strong> {city.keyZoningNotes}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            State housing laws mandate that local building departments in {city.name} process ADU applications ministerially without discretionary public hearings. Homeowners can build up to a 1,200 sq ft detached unit, a garage conversion, or an attached JADU.
          </p>
        </div>
      </div>

      {/* 5 Models Preview */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-borderDark pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              PERMIT-READY FOR {city.name.toUpperCase()} LOTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-white mt-1">
              Featured ADU Floor Plans
            </h2>
          </div>
          <Link href="/models" className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white">
            View all 5 models &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVO_MODELS.slice(0, 3).map((model) => (
            <div
              key={model.id}
              className="p-6 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-brand-black relative">
                  <img src={model.imageUrl} alt={model.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold uppercase text-white">{model.name}</h3>
                <p className="text-xs text-slate-400">{model.dimensions}</p>
              </div>

              <div className="pt-4 border-t border-brand-borderDark flex items-center justify-between">
                <span className="font-mono font-bold text-brand-amber">{model.priceFormatted}</span>
                <Link
                  href={`/free-feasibility?city=${city.slug}&model=${model.slug}`}
                  className="px-4 py-2 bg-white text-black font-bold text-xs uppercase rounded-full hover:bg-brand-amber transition-all"
                >
                  Lot Check &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local FAQs Section */}
      <div className="p-6 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            LOCAL FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            {city.name} ADU Permitting & Construction Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {localFaqs.map((faq, idx) => (
            <div key={idx} className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-3">
              <div className="flex items-start gap-2 text-white font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sibling Cities in Orange County */}
      <div className="p-6 sm:p-10 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
        <h3 className="text-lg font-bold uppercase text-white tracking-tight">
          Other Orange County Communities We Serve
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 text-xs">
          {ORANGE_COUNTY_CITIES.filter((c) => c.slug !== city.slug)
            .slice(0, 18)
            .map((otherCity) => (
              <Link
                key={otherCity.slug}
                href={`/locations/${otherCity.slug}`}
                className="p-3 bg-brand-black rounded-xl border border-brand-borderDark text-slate-300 hover:text-white hover:border-brand-amber transition-all text-center"
              >
                {otherCity.name}
              </Link>
            ))}
        </div>
      </div>

      {/* Live GHL Assessment Embed Card */}
      <div id="assessment" className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Get Your Free {city.name} ADU Feasibility Report
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us about your property. We verify parcel setbacks, utility tie-ins, and {city.name} building department approval steps within 1 business day.
          </p>
        </div>
        <GhlLeadForm minHeight="920px" />
      </div>

    </div>
  );
}
