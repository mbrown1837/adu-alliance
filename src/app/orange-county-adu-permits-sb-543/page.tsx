import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Clock, Calendar, ArrowRight, FileCheck } from 'lucide-react';
import FeasibilityForm from '@/components/FeasibilityForm';

export const metadata: Metadata = {
  title: 'Orange County ADU Permits & SB 543 Guide | ADU Alliance',
  description: 'What California Senate Bill 543 means for Orange County ADU permits. 15-day initial review period, pre-approved plan check sets, and city approval timelines.',
  alternates: {
    canonical: 'https://adualliance.com/orange-county-adu-permits-sb-543',
  },
};

export default function OrangeCountyPermitsSB543Page() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Orange County ADU Permits in 15 Days? Here's What SB 543 Means for Your Project",
    description: 'Detailed analysis of SB 543, expedited 15-day review periods, and Orange County city building permit processes.',
    author: {
      '@type': 'Organization',
      name: 'ADU Alliance Technical Team',
      url: 'https://adualliance.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADU Alliance',
    },
    datePublished: '2025-10-31',
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
          <span>Permitting Regulations &bull; SB 543 Expedited Review</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
          Orange County ADU Permits in 15 Days? What SB 543 Means for Your Project
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-y border-brand-borderDark/60 py-3">
          <span>Updated March 2026</span>
          <span>&bull;</span>
          <span>5 Min Read</span>
          <span>&bull;</span>
          <span>By ADU Alliance Technical Team</span>
        </div>
      </header>

      {/* AEO Key Takeaways Box */}
      <div className="p-6 sm:p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-amber flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-amber" /> Direct Answer: Does SB 543 Guarantee an ADU Permit in 15 Days?
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-medium">
          No. Senate Bill 543 establishes a <strong>15-day initial review period</strong> for local building departments to review pre-approved or standard plan sets; it does not guarantee final permit issuance in 15 days. While this significantly speeds up initial comments, comprehensive city plan check, utility verification, and engineering sign-off typically require 60 to 90 days across most Orange County municipalities.
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-brand-borderDark/60">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>Pre-Checked Plan Sets:</strong> Utilizing pre-engineered architectural drawings minimizes plan check corrections.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>Ministerial Review:</strong> ADUs are reviewed ministerially without public hearings or discretionary neighbor approval.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>ADU Alliance Guarantee:</strong> We manage all municipal submissions directly, maintaining a 100% approval pass rate.</span>
          </li>
        </ul>
      </div>

      {/* Deep Content */}
      <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
        <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
          How Orange County Cities Handle Plan Check Reviews
        </h2>
        <p>
          Each city in Orange County operates its own Building and Safety division. While California state law mandates a maximum 60-day action window, cities such as Irvine, Newport Beach, Anaheim, and Costa Mesa handle submissions with different document submittal portals, correction response workflows, and grading requirements.
        </p>
        <p>
          At ADU Alliance, our in-house plan check team prepares fully coordinated structural, MEP, and Title 24 calculation packages that strictly adhere to local guidelines, preventing avoidable plan check rejections.
        </p>
      </div>

      {/* Embedded Feasibility Form */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            FREE PERMIT FEASIBILITY
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Check Your City Permit Timeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us about your property. We verify setbacks, existing sewer depth, and municipal zoning within 24 hours.
          </p>
        </div>
        <FeasibilityForm />
      </div>

      {/* Related Links */}
      <div className="pt-6 border-t border-brand-borderDark space-y-4">
        <h4 className="text-sm font-bold uppercase text-white tracking-wider">Explore Permitting Services:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/services/adu-permits" className="p-4 bg-brand-dark rounded-xl border border-brand-borderDark text-slate-300 hover:text-brand-amber transition-colors">
            &rarr; <strong>In-House City Permitting:</strong> Explore our 100% guaranteed approval services.
          </Link>
          <Link href="/process" className="p-4 bg-brand-dark rounded-xl border border-brand-borderDark text-slate-300 hover:text-brand-amber transition-colors">
            &rarr; <strong>4-Stage Turnkey Process:</strong> See how we navigate from lot walk to keys.
          </Link>
        </div>
      </div>
    </article>
  );
}
