import React from 'react';
import type { Metadata } from 'next';
import CostEstimator from '@/components/CostEstimator';

export const metadata: Metadata = {
  title: 'ADU Cost & Home Value Estimator 2026 | Orange County | ADU Alliance',
  description: 'Estimate the cost of building an accessory dwelling unit in Orange County, CA. Interactive pricing calculator covering 350 to 1,200 sq ft builds, home equity added, and permit timelines.',
  alternates: {
    canonical: 'https://adualliance.com/calculator',
  },
};

export default function CalculatorPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
          FINANCIAL TRANSPARENCY &bull; ORANGE COUNTY
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          ADU Cost & Home Value Estimator. <br />
          <span className="font-editorial italic font-normal text-slate-300 lowercase">
            Real data, zero guesswork.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Estimate your complete turnkey build investment, immediate home equity addition, and construction timeline across Orange County.
        </p>
      </div>

      {/* Interactive Client Calculator Component */}
      <CostEstimator />

      {/* Financial Facts FAQ Section */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            ORANGE COUNTY FINANCIAL FACTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            How ADUs Impact Property Taxes & Grants
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2">
            <h3 className="font-bold text-white text-base">California Prop 13 Protection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Adding an ADU does NOT trigger a reassessment of your primary house. Only the newly constructed square footage is assessed at current value, typically adding only $900 - $1,600/year to your total tax bill.
            </p>
          </div>

          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2">
            <h3 className="font-bold text-white text-base">CalHFA $40,000 ADU Grant</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              California Housing Finance Agency provides up to $40,000 in non-repayable grants toward pre-development costs (permits, architectural design, engineering) for qualifying homeowners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
