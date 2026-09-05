import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import FeasibilityForm from '@/components/FeasibilityForm';

export const metadata: Metadata = {
  title: 'ADU Orange County Laws & Regulations (2026 Guide) | ADU Alliance',
  description: 'Complete guide to Orange County ADU laws, SB 9, AB 1033 condo sales, 4-foot setbacks, and expedited municipal plan check for California homeowners.',
  alternates: {
    canonical: 'https://adualliance.com/adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too',
  },
};

export default function ADULawsOrangeCountyGuide() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ADU Orange County: Why Everyone Is Talking About New Laws (And You Should Too)',
    description: 'Complete analysis of updated California ADU legislation, municipal zoning setbacks, and HOA rights for Orange County homeowners.',
    author: {
      '@type': 'Organization',
      name: 'ADU Alliance Technical Team',
      url: 'https://adualliance.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADU Alliance',
    },
    datePublished: '2025-09-21',
    dateModified: '2026-03-01',
  };

  return (
    <article className="py-16 sm:py-24 px-6 max-w-4xl mx-auto space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="space-y-6">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-amber">
          <span>California Legislation &bull; Orange County Municipal Zoning</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
          ADU Orange County: Why Everyone Is Talking About New Laws (And You Should Too)
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-y border-brand-borderDark/60 py-3">
          <span>Updated March 2026</span>
          <span>&bull;</span>
          <span>6 Min Read</span>
          <span>&bull;</span>
          <span>By ADU Alliance Technical Team</span>
        </div>
      </header>

      {/* AEO Key Takeaways Box */}
      <div className="p-6 sm:p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-amber flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-amber" /> Direct Answer: What Changed in Orange County ADU Laws?
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-medium">
          Recent California state legislation (including Assembly Bill 1033, Senate Bill 9, and AB 68) has transformed accessory dwelling units in Orange County into an expedited property right. Homeowners can now construct detached ADUs up to 1,200 sq ft, convert garages without replacing parking, build despite HOA restrictions, and in qualifying jurisdictions, explore separate condominium conveyance under AB 1033.
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-brand-borderDark/60">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>AB 1033 Condo Sales:</strong> Cities can allow ADUs to be sold separately from the primary home as condominiums.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>Mandatory 60-Day Approvals:</strong> Orange County cities must approve compliant plan sets within 60 days of complete application.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>4-Foot Setback Cap:</strong> Cities cannot mandate more than 4-foot rear or side setbacks for detached ADUs up to 16-18 feet high.</span>
          </li>
        </ul>
      </div>

      {/* Legislative Details */}
      <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
          1. AB 1033: Selling Your ADU as a Separate Condominium
        </h2>
        <p>
          Historically, ADUs in California could only be rented or used for family living, never sold independently. Assembly Bill 1033 empowers local municipalities to opt-in and allow property owners to deed-restrict and sell an ADU separately from the main home as a condominium unit, opening unprecedented homeownership and equity creation options across Orange County.
        </p>

        <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
          2. Assembly Bill 670: Complete HOA Preemption
        </h2>
        <p>
          Many of Orange County&apos;s most desirable neighborhoods (including Woodbridge in Irvine, master-planned developments in Mission Viejo, and coastal communities in Newport Beach) are governed by strict Homeowners Associations. AB 670 explicitly invalidates any CC&R restriction that outright prohibits or unreasonably restricts ADU construction. While associations may request reasonable aesthetic harmonization (such as paint shade or roof tile matching), they cannot deny compliant plan sets.
        </p>
      </div>

      {/* Embedded Feasibility Form */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            FREE ZONING VERIFICATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Check Your Parcel Setbacks & Legal Eligibility
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us about your property. We verify setbacks, existing sewer depth, and municipal zoning within 24 hours.
          </p>
        </div>
        <FeasibilityForm />
      </div>

      {/* Related Links */}
      <div className="pt-6 border-t border-brand-borderDark space-y-4">
        <h4 className="text-sm font-bold uppercase text-white tracking-wider">Explore Next Steps:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/process" className="p-4 bg-brand-dark rounded-xl border border-brand-borderDark text-slate-300 hover:text-brand-amber transition-colors">
            &rarr; <strong>4-Stage Turnkey Process:</strong> See how we take your build from lot walk to keys.
          </Link>
          <Link href="/models" className="p-4 bg-brand-dark rounded-xl border border-brand-borderDark text-slate-300 hover:text-brand-amber transition-colors">
            &rarr; <strong>Floor Plans & Models:</strong> Browse 5 pre-designed California-compliant units.
          </Link>
        </div>
      </div>
    </article>
  );
}
