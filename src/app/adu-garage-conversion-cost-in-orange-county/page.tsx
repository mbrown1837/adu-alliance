import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Clock, Calendar, ArrowRight, DollarSign, Calculator } from 'lucide-react';
import FeasibilityForm from '@/components/FeasibilityForm';

export const metadata: Metadata = {
  title: 'ADU Garage Conversion Cost in Orange County (2026 Guide) | ADU Alliance',
  description: 'Complete 2026 line-item cost breakdown for converting a garage into an ADU in Orange County, CA. Real budgets, permit fees, plumbing, and timeline facts.',
  alternates: {
    canonical: 'https://adualliance.com/adu-garage-conversion-cost-in-orange-county',
  },
};

export default function GarageConversionCostGuide() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ADU Garage Conversion Cost in Orange County: The Real Numbers for Homeowners (2026)',
    description: 'Complete line-item cost breakdown for converting a 2-car garage into a legal ADU in Orange County.',
    author: {
      '@type': 'Organization',
      name: 'ADU Alliance Technical Team',
      url: 'https://adualliance.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ADU Alliance',
    },
    datePublished: '2025-11-07',
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
          <span>Cost Breakdown &bull; Garage Conversion Specialist</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight">
          ADU Garage Conversion Cost in Orange County: The Real Numbers for Homeowners
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
          <ShieldCheck className="w-4 h-4 text-brand-amber" /> Direct Answer: What Does a Garage Conversion Cost in Orange County?
        </div>
        <p className="text-sm text-slate-200 leading-relaxed font-medium">
          In 2026, converting a standard 2-car garage (380 to 450 sq ft) into a permitted living unit in Orange County typically costs between <strong>$95,000 and $150,000</strong> all-in. Because the existing concrete slab, walls, and roof structure are utilized, garage conversions cost 40% to 50% less than ground-up detached construction.
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2 border-t border-brand-borderDark/60">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>Typical Timeline:</strong> 8 to 12 weeks for city plan checks; 10 to 14 weeks for physical construction.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>No Parking Replacement:</strong> Under California state law, Orange County cities cannot require replacement parking for garage conversions.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
            <span><strong>Added Home Equity:</strong> A permitted garage conversion in Orange County adds an average of $150,000 to $200,000 in immediate appraised value.</span>
          </li>
        </ul>
      </div>

      {/* Line-Item Cost Table */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold uppercase text-white tracking-tight">
          Line-Item Cost Breakdown for Orange County
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300 border border-brand-borderDark rounded-2xl overflow-hidden">
            <thead className="bg-brand-dark text-white font-mono uppercase text-xs">
              <tr>
                <th className="p-4 border-b border-brand-borderDark">Project Phase / Component</th>
                <th className="p-4 border-b border-brand-borderDark">Typical Cost Range</th>
                <th className="p-4 border-b border-brand-borderDark">Scope Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-borderDark/60 bg-brand-black">
              <tr>
                <td className="p-4 font-bold text-white">3D Architectural Plans & Engineering</td>
                <td className="p-4 font-mono text-brand-amber">$6,000 - $9,500</td>
                <td className="p-4">Site plan, Title 24 energy calculations, structural notes</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">City Plan Check & Permit Fees</td>
                <td className="p-4 font-mono text-brand-amber">$2,500 - $5,000</td>
                <td className="p-4">Paid directly to city building & safety department</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Demolition, Wall Framing & Siding</td>
                <td className="p-4 font-mono text-brand-amber">$16,000 - $24,000</td>
                <td className="p-4">Infill garage door opening, framing interior walls, drywall</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Plumbing Trenching & Sewer Hookup</td>
                <td className="p-4 font-mono text-brand-amber">$12,000 - $20,000</td>
                <td className="p-4">Under-slab trenching to tie bathroom/kitchen into main sewer</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Electrical Subpanel & Full Wiring</td>
                <td className="p-4 font-mono text-brand-amber">$9,000 - $15,000</td>
                <td className="p-4">Dedicated 100A subpanel, LED recessed lights, circuits</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">HVAC Ductless Mini-Split System</td>
                <td className="p-4 font-mono text-brand-amber">$4,500 - $7,500</td>
                <td className="p-4">High-efficiency heat pump for heating and cooling</td>
              </tr>
              <tr>
                <td className="p-4 font-bold text-white">Designer Kitchen, Bath & Finishes</td>
                <td className="p-4 font-mono text-brand-amber">$28,000 - $45,000</td>
                <td className="p-4">Quartz countertops, custom oak cabinets, shower, flooring</td>
              </tr>
              <tr className="bg-brand-dark font-bold text-white">
                <td className="p-4">Total Turnkey Budget Range</td>
                <td className="p-4 font-mono text-brand-emerald text-base">$95,000 - $149,000</td>
                <td className="p-4">Complete move-in ready with Certificate of Occupancy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Embedded Feasibility Form */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            FREE PROPERTY ASSESSMENT
          </span>
          <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Check Your Garage Conversion Feasibility
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Tell us about your property. We verify setbacks, existing sewer depth, and municipal zoning within 24 hours.
          </p>
        </div>
        <FeasibilityForm />
      </div>

      {/* Internal Links & Resources */}
      <div className="pt-6 border-t border-brand-borderDark space-y-4">
        <h4 className="text-sm font-bold uppercase text-white tracking-wider">Related Orange County ADU Guides:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <Link href="/services/garage-conversion" className="p-4 bg-brand-dark rounded-xl border border-brand-borderDark text-slate-300 hover:text-brand-amber transition-colors">
            &rarr; <strong>Garage Conversion Services:</strong> Explore our turnkey design-build scopes.
          </Link>
          <Link href="/calculator" className="p-4 bg-brand-dark rounded-xl border border-brand-borderDark text-slate-300 hover:text-brand-amber transition-colors">
            &rarr; <strong>ADU Cost Calculator:</strong> Estimate square footage and finish tier budgets.
          </Link>
        </div>
      </div>
    </article>
  );
}
