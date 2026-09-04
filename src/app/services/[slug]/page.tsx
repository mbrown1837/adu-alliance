import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ADU_SERVICES, EVO_MODELS } from '@/lib/data';
import { ShieldCheck, CheckCircle2, Clock, Phone, ArrowRight, DollarSign, FileCheck, Layers } from 'lucide-react';
import Link from 'next/link';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ADU_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = ADU_SERVICES.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} in Orange County, CA | ADU Alliance`,
    description: `${service.description.slice(0, 160)} Call (657) 298-4061 for a free property feasibility assessment.`,
    alternates: {
      canonical: `https://adualliance.com/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = ADU_SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} - Orange County`,
    provider: {
      '@type': 'GeneralContractor',
      name: 'ADU Alliance',
      telephone: '+16572984061',
      url: 'https://adualliance.com',
      priceRange: '$149,000 - $350,000',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2372 Morse Ave',
        addressLocality: 'Irvine',
        addressRegion: 'CA',
        postalCode: '92614',
        addressCountry: 'US',
      },
    },
    areaServed: 'Orange County, California',
    description: service.description,
  };

  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-brand-amber text-xs font-mono font-bold uppercase tracking-wider">
            <span>Service {service.number} &bull; {service.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
            {service.title} in Orange County.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {service.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-brand-borderDark font-mono">
            <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
              <div className="text-xs text-slate-400">Typical Timeline</div>
              <div className="text-xl font-black text-brand-amber">{service.turnaroundTime}</div>
            </div>
            <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
              <div className="text-xs text-slate-400">Permit Guarantee</div>
              <div className="text-xl font-black text-brand-emerald">100% Pass</div>
            </div>
            <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark col-span-2 sm:col-span-1">
              <div className="text-xs text-slate-400">Contract Scope</div>
              <div className="text-xl font-black text-white">Turnkey</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark shadow-xl">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Features & Scope List */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            WHAT IS INCLUDED IN THIS SCOPE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Turnkey Deliverables & Engineering
          </h2>
          <p className="text-sm text-slate-300">
            One single contract covering all phases with zero surprise change-orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feat, i) => (
            <div
              key={i}
              className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-amber/10 text-brand-amber flex items-center justify-center shrink-0 font-mono font-bold text-sm">
                0{i + 1}
              </div>
              <p className="text-sm text-white font-medium leading-relaxed pt-1">
                {feat}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sibling Services Navigation */}
      <div className="space-y-6">
        <div className="border-b border-brand-borderDark pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
            OTHER DESIGN-BUILD SERVICES
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
            Explore All 5 Core ADU Scopes
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADU_SERVICES.filter((s) => s.slug !== service.slug).map((sibling) => (
            <Link
              key={sibling.id}
              href={`/services/${sibling.slug}`}
              className="p-6 bg-brand-dark rounded-2xl border border-brand-borderDark hover:border-brand-amber transition-all space-y-2 group block"
            >
              <span className="text-xs font-mono text-brand-amber font-bold">Service {sibling.number}</span>
              <h4 className="text-base font-bold text-white group-hover:text-brand-amber transition-colors">
                {sibling.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2">
                {sibling.tagline}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Lead Generation CTA */}
      <div className="text-center p-12 bg-gradient-to-r from-brand-dark to-brand-black rounded-3xl border border-brand-borderDark space-y-6">
        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
          Request a Feasibility Review for {service.title}
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          We evaluate your property setbacks, existing utilities, and municipal zoning rules within 24 hours. Free 30-minute consultation with our licensed builders.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href={`/free-feasibility?service=${service.slug}`}
            className="px-8 py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
          >
            Get Free {service.title} Plan &rarr;
          </Link>
          <a
            href="tel:+16572984061"
            className="px-8 py-4 bg-brand-black hover:bg-brand-dark text-white border border-brand-borderDark font-bold text-xs uppercase tracking-wider rounded-full transition-all"
          >
            Call (657) 298-4061
          </a>
        </div>
      </div>
    </div>
  );
}
