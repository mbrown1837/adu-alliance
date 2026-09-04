import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ORANGE_COUNTY_CITIES, EVO_MODELS, LADU_PROJECT_PLAN } from '@/lib/data';
import { ShieldCheck, MapPin, Clock, CheckCircle2, Phone, Home, Building2 } from 'lucide-react';
import Link from 'next/link';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ORANGE_COUNTY_CITIES.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const city = ORANGE_COUNTY_CITIES.find((c) => c.slug === params.slug);
  if (!city) return {};

  return {
    title: `ADU Builders in ${city.name}, CA | Turnkey Design & Permits | ADU Alliance`,
    description: `Turnkey ADU builder in ${city.name}, Orange County. 100% guaranteed city permits, custom floor plans, and fixed-price construction from $149,000. Call (657) 298-4061.`,
    alternates: {
      canonical: `https://adualliance.com/locations/${city.slug}`,
    },
  };
}

export default function CityLocationPage({ params }: LocationPageProps) {
  const city = ORANGE_COUNTY_CITIES.find((c) => c.slug === params.slug);

  if (!city) {
    notFound();
  }

  // City-specific LocalBusiness JSON-LD schema
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: `ADU Alliance - ${city.name} ADU Builders`,
    url: `https://adualliance.com/locations/${city.slug}`,
    telephone: '+16572984061',
    priceRange: '$149,000 - $350,000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: [city.name, 'Orange County'],
    description: `Premier design-build ADU general contractor serving homeowners in ${city.name}, California.`,
  };

  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Hero Section */}
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-2 text-brand-amber text-xs font-mono font-bold uppercase tracking-wider">
          <MapPin className="w-4 h-4" />
          <span>{city.name}, California &bull; Municipal ADU Services</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          ADU Builders in {city.name}. <br />
          <span className="font-editorial italic font-normal text-slate-300 lowercase">
            Turnkey design, 100% city permits & build.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          Looking to build a detached backyard home or convert a garage in {city.name}? ADU Alliance provides a single-source design-build contract covering architecture, structural engineering, {city.name} building department plan check, and ground-up construction.
        </p>

        {/* City Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-borderDark font-mono">
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Permit Turnaround</div>
            <div className="text-xl font-black text-brand-amber">{city.permitTurnaroundWeeks}</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Jurisdiction</div>
            <div className="text-xl font-black text-white">{city.county}</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark col-span-2 sm:col-span-1">
            <div className="text-xs text-slate-400">Contractor License</div>
            <div className="text-xl font-black text-brand-emerald">Class B #1094821</div>
          </div>
        </div>
      </div>

      {/* City Specific Zoning Card */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            LOCAL MUNICIPAL GUIDELINES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Building an ADU in {city.name}: What You Need to Know
          </h2>
        </div>

        <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark text-sm text-slate-300 leading-relaxed space-y-3">
          <p>
            <strong>City Zoning Summary:</strong> {city.keyZoningNotes}
          </p>
          <p className="text-xs text-slate-400">
            Under California state laws (SB 9, AB 68, and AB 1033), single-family and multi-family residential lots in {city.name} are entitled to construct detached accessory dwelling units up to 1,200 sq ft with 4-foot rear and side setbacks.
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
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-white mt-1">
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

      {/* Sibling Cities in Orange County */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
        <h3 className="text-xl font-bold uppercase text-white tracking-tight">
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

      {/* Local Feasibility CTA Card */}
      <div className="text-center p-12 bg-gradient-to-r from-brand-dark to-brand-black rounded-3xl border border-brand-borderDark space-y-6">
        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
          Ready to Build an ADU in {city.name}?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Schedule a free 30-minute on-premise property assessment with our licensed builders. We confirm setbacks, utility lines, and exact buildable dimensions.
        </p>
        <Link
          href={`/free-feasibility?city=${city.slug}`}
          className="inline-block px-8 py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
        >
          Book Free {city.name} Lot Feasibility Walk &rarr;
        </Link>
      </div>
    </div>
  );
}
