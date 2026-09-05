import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Clock, Calendar, ArrowRight, DollarSign } from 'lucide-react';
import FeasibilityForm from '@/components/FeasibilityForm';

export const metadata: Metadata = {
  title: 'ADU Construction Cost Per Square Foot in Orange County (2026 Guide) | ADU Alliance',
  description: 'The real truth about ADU construction cost per square foot in Orange County for 2026. Why lowball $150/sq ft quotes fail and realistic line-item budgets.',
  alternates: {
    canonical: 'https://adualliance.com/adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide',
  },
};

export default function ADUCostPerSqftGuide() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ADU Construction Cost Per Square Foot in 2026: Orange County Guide',
    description: 'Realistic construction cost per square foot ranges for custom detached ADUs, garage conversions, and junior ADUs in Orange County.',
    author: {
      '@type': 'Organization',
      name: 'ADU Alliance Technical Team',
      url: 'https://adualliance.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADU Alliance',
    },
    datePublished: '2026-01-09',
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
          <span>Financial Reality &bull; Cost Per Square Foot Analysis</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
          The Real Truth About ADU Construction Cost Per Square Foot in 2026
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-y border-brand-borderDark/60 py-3">
          <span>Updated March 2026</span>
          <span>&bull;</span>
          <span>7 Min Read</span>
          <span>&bull;</span>
          <span>By ADU Alliance Technical Team</span>
        </div>
      </header>

      {/* AEO Key Takeaways Box */}
      <div className="p-6 sm:p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-amber flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-amber" /> Direct Answer: What Is the Real Cost Per Sq Ft to Build an ADU in Orange County?
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-medium">
          In 2026, realistic turnkey ADU construction in Orange County ranges from <strong>$280 to $385 per square foot</strong> for ground-up detached builds, and <strong>$210 to $270 per square foot</strong> for garage conversions. Online advertisements claiming &quot;$150/sq ft&quot; almost universally exclude mandatory costs like concrete foundation pours, architectural engineering, city permit fees, trenching, and utility connections.
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-brand-borderDark/60">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>Smaller Units Cost More Per Sq Ft:</strong> A 400 sq ft ADU still requires a full kitchen, bathroom, and utility hookups, spreading fixed costs over less space.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>Turnkey vs Shell Pricing:</strong> Ensure bids include MEP engineering, Title 24 compliance, city plan check fees, and complete interior finishes.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>Fixed-Price Single Contract:</strong> ADU Alliance locks scope and line-item costs before construction begins to prevent surprise change-orders.</span>
          </li>
        </ul>
      </div>

      {/* Comparison Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
          Square Footage Cost Comparison Across ADU Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-center">
          <div className="p-6 bg-brand-dark rounded-2xl border border-brand-borderDark space-y-2">
            <div className="text-xs text-slate-400">Garage Conversion</div>
            <div className="text-2xl font-black text-brand-amber">$210 - $270 / sq ft</div>
            <div className="text-[11px] text-slate-400">Total: $95K - $149K</div>
          </div>
          <div className="p-6 bg-brand-dark rounded-2xl border border-brand-borderDark space-y-2">
            <div className="text-xs text-slate-400">Standard Detached (1BR)</div>
            <div className="text-2xl font-black text-white">$290 - $340 / sq ft</div>
            <div className="text-[11px] text-slate-400">Total: $165K - $210K</div>
          </div>
          <div className="p-6 bg-brand-dark rounded-2xl border border-brand-borderDark space-y-2">
            <div className="text-xs text-slate-400">Luxury Architectural (2BR)</div>
            <div className="text-2xl font-black text-brand-emerald">$340 - $385 / sq ft</div>
            <div className="text-[11px] text-slate-400">Total: $220K - $290K</div>
          </div>
        </div>
      </div>

      {/* Embedded Feasibility Form */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            ACCURATE PROPERTY ESTIMATE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Get an Itemized Budget for Your Property
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us about your property. We verify setbacks, existing sewer depth, and municipal zoning within 24 hours.
          </p>
        </div>
        <FeasibilityForm />
      </div>

      {/* Related Links */}
      <div className="pt-6 border-t border-brand-borderDark space-y-4">
        <h4 className="text-sm font-bold uppercase text-white tracking-wider">Related Budgeting Tools:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/calculator" className="p-4 bg-brand-dark rounded-xl border border-brand-borderDark text-slate-300 hover:text-brand-amber transition-colors">
            &rarr; <strong>Interactive ADU Cost Calculator:</strong> Adjust square footage and finish tiers live.
          </Link>
          <Link href="/models" className="p-4 bg-brand-dark rounded-xl border border-brand-borderDark text-slate-300 hover:text-brand-amber transition-colors">
            &rarr; <strong>Pre-Designed Models:</strong> Explore starting prices from $149,000.
          </Link>
        </div>
      </div>
    </article>
  );
}
