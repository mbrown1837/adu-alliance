import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ADU_SERVICES, EVO_MODELS } from '@/lib/data';
import { ShieldCheck, CheckCircle2, Clock, Phone, ArrowRight, DollarSign, FileCheck, Layers, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import GhlLeadForm from '@/components/GhlLeadForm';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ADU_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = ADU_SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} in Orange County, CA | ADU Alliance`,
    description: `${service.description.slice(0, 150)} Guaranteed municipal permits across 34 OC cities. Call (657) 298-4061 for lot assessment.`,
    alternates: {
      canonical: `https://adualliance.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Orange County ADU Alliance`,
      description: service.description,
      url: `https://adualliance.com/services/${service.slug}`,
      images: [{ url: service.imageUrl, alt: service.title }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = ADU_SERVICES.find((s) => s.slug === slug);

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
      telephone: '+1-657-298-4061',
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
        name: 'Services',
        item: 'https://adualliance.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://adualliance.com/services/${service.slug}`,
      },
    ],
  };

  const serviceCostBreakdown = [
    { item: 'Architectural Plans & Structural Engineering', range: '$6,000 - $9,500', note: 'Includes Title 24 energy calculations & 3D renderings' },
    { item: 'Municipal Plan Check & City Permit Fees', range: '$2,500 - $5,000', note: 'Exempt from school impact fees if under 500 sq ft' },
    { item: 'Plumbing Trenching & Sewer Utility Connection', range: '$8,000 - $18,000', note: 'Independent subpanel & dedicated water tie-in' },
    { item: 'Structural Foundation & Framing Scope', range: '$35,000 - $85,000', note: 'Engineered slab pour or garage envelope retrofit' },
    { item: 'Interior Finishes, Kitchen & Bath Turnkey', range: '$28,000 - $55,000', note: 'Quartz counters, mini-split HVAC & custom cabinetry' },
  ];

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 sm:space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
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
              <div className="text-xs text-slate-400">City Permits</div>
              <div className="text-xl font-black text-white">100% In-House</div>
            </div>
            <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark col-span-2 sm:col-span-1">
              <div className="text-xs text-slate-400">Contractor License</div>
              <div className="text-xl font-black text-brand-emerald">Class B Alliance</div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#assessment"
              className="inline-block px-8 py-4 bg-brand-amber hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-full shadow transition-all"
            >
              Get Free Feasibility for This Scope &rarr;
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark shadow-2xl">
          <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* 2026 Line-Item Cost Breakdown Table */}
      <div className="p-6 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            2026 COST BREAKDOWN &bull; LINE-ITEM TRANSPARENCY
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Estimated Line-Item Costs for {service.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Real budget allocations across architectural drawings, city permit fees, utility trenching, and turnkey construction in Orange County.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-brand-borderDark text-brand-amber uppercase font-bold">
                <th className="py-3 px-4">Cost Component</th>
                <th className="py-3 px-4">Typical Range</th>
                <th className="py-3 px-4">Key Details & Code Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-borderDark/60">
              {serviceCostBreakdown.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-4 font-bold text-white font-sans">{row.item}</td>
                  <td className="py-3.5 px-4 text-brand-amber font-bold">{row.range}</td>
                  <td className="py-3.5 px-4 text-slate-400 font-sans">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Features & Scope Detail Cards */}
      <div className="p-6 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            SCOPE SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            What's Included in Your Single-Contract Scope
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.features.map((feature, i) => (
            <div key={i} className="p-5 bg-brand-black rounded-2xl border border-brand-borderDark flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-bold text-sm block">{feature}</strong>
                <span className="text-xs text-slate-400">Full architectural compliance and licensed Class B construction oversight.</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Live GHL Assessment Hub */}
      <div id="assessment" className="space-y-6 pt-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Request Your {service.title} Quote
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Get exact line-item estimates and municipal permit review details for your property within 1 business day.
          </p>
        </div>
        <GhlLeadForm minHeight="920px" />
      </div>

    </div>
  );
}
