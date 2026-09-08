import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ADU_SERVICES } from '@/lib/data';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Layers, DollarSign, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ADU Services in Orange County, CA | Turnkey Design, Permits & Build',
  description: 'Explore full-service accessory dwelling unit solutions in Orange County: custom architectural plans, 100% in-house city permits, detached builds, and garage conversions.',
  alternates: {
    canonical: 'https://adualliance.com/services',
  },
};

export default function ServicesIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Orange County ADU Design-Build Services',
    provider: {
      '@type': 'GeneralContractor',
      name: 'ADU Alliance',
      telephone: '+1-657-298-4061',
      url: 'https://adualliance.com',
    },
    areaServed: 'Orange County, CA',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ADU Construction Services',
      itemListElement: ADU_SERVICES.map((s, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
          url: `https://adualliance.com/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <div className="bg-brand-canvas text-brand-main min-h-screen pt-28 sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-20">
        
        {/* Hero Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            SINGLE-SOURCE ACCOUNTABILITY &bull; ALL 34 ORANGE COUNTY CITIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
            Turnkey ADU Services <br />
            <span className="font-normal italic text-brand-amber">in Orange County</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            One contract covers your entire project: custom site-specific architectural drawings, in-house municipal plan checks, and licensed general contracting from foundation to final inspection.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="space-y-12">
          {ADU_SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-brand-dark border border-brand-borderDark hover:border-brand-amber/50 transition-all shadow-xl"
              >
                {/* Image */}
                <div className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-black ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/85 text-brand-amber font-mono text-xs font-bold rounded-lg border border-white/10 shadow">
                    {service.number}. {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono uppercase text-brand-amber font-bold block">
                      {service.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-borderDark">
                    <span className="text-xs font-mono text-slate-400">
                      Typical Timeline: <strong className="text-white font-sans">{service.turnaroundTime}</strong>
                    </span>
                    <Link
                      href={`/services/${service.slug}`}
                      className="px-5 py-2.5 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-1"
                    >
                      Explore {service.title} &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8 shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              PLANNING MATRIX
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Compare Orange County ADU Options
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Find the right match based on budget, backyard space, and primary family or rental goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-brand-borderDark text-brand-amber uppercase font-bold">
                  <th className="py-4 px-4">ADU Type</th>
                  <th className="py-4 px-4">Typical Size</th>
                  <th className="py-4 px-4">Turnaround</th>
                  <th className="py-4 px-4">Cost Efficiency</th>
                  <th className="py-4 px-4">Primary Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-borderDark/60">
                <tr>
                  <td className="py-4 px-4 font-bold text-white font-sans">Detached Backyard ADU</td>
                  <td className="py-4 px-4">350 - 1,200 sq ft</td>
                  <td className="py-4 px-4">6 - 9 Months</td>
                  <td className="py-4 px-4">Moderate ($280 - $380/sqft)</td>
                  <td className="py-4 px-4 font-sans text-slate-200">Maximum privacy & highest rental valuation</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white font-sans">Garage to ADU Conversion</td>
                  <td className="py-4 px-4">380 - 450 sq ft</td>
                  <td className="py-4 px-4">3 - 5 Months</td>
                  <td className="py-4 px-4 text-brand-emerald font-bold">Highest ($210 - $270/sqft)</td>
                  <td className="py-4 px-4 font-sans text-slate-200">Uses existing slab/roof; zero yard lost</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-white font-sans">Junior ADU (JADU)</td>
                  <td className="py-4 px-4">Up to 500 sq ft</td>
                  <td className="py-4 px-4">2 - 4 Months</td>
                  <td className="py-4 px-4 text-brand-emerald font-bold">Very High</td>
                  <td className="py-4 px-4 font-sans text-slate-200">Exempt from school fees; interior conversion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-brand-black via-brand-dark to-brand-black rounded-3xl border border-brand-borderDark flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              FREE PROPERTY FEASIBILITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Ready to explore your lot's potential?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get an exact setback analysis and preliminary budget for your property within 1 business day.
            </p>
          </div>

          <Link
            href="/free-feasibility"
            className="px-8 py-4 bg-brand-amber hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all shrink-0"
          >
            Request Free Assessment &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}
