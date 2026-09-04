'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CalculatorPage() {
  const [sqft, setSqft] = useState(560);
  const [tier, setTier] = useState(2);

  const tierLabels: Record<number, string> = {
    1: 'Standard Build (Clean & Efficient)',
    2: 'Premium Craft (Quartz + Oak)',
    3: 'Luxury Architectural (High-End Finishes)',
  };

  const costPerSqft: Record<number, number> = { 1: 290, 2: 330, 3: 385 };
  const equityPerSqft: Record<number, number> = { 1: 460, 2: 520, 3: 600 };

  const totalCost = Math.round((sqft * costPerSqft[tier]) / 1000) * 1000;
  const totalEquity = Math.round((sqft * equityPerSqft[tier]) / 1000) * 1000;

  let timeline = '6 to 8 Months';
  if (sqft <= 450) {
    timeline = '5 to 6 Months';
  } else if (sqft > 750) {
    timeline = '7 to 9 Months';
  }

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

      {/* Interactive Calculator Card */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold text-white">
              <span>ADU Floor Area:</span>
              <span className="font-mono text-brand-amber text-lg font-black">{sqft} sq ft</span>
            </div>
            <input
              type="range"
              min={350}
              max={1200}
              step={50}
              value={sqft}
              onChange={(e) => setSqft(parseInt(e.target.value))}
              className="w-full h-2 bg-brand-black rounded-lg appearance-none cursor-pointer accent-brand-amber"
            />
            <div className="flex justify-between text-xs text-slate-400 font-mono">
              <span>350 sq ft (Studio)</span>
              <span>1,200 sq ft (2BR Max)</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-bold text-white">
              <span>Finish Quality Tier:</span>
              <span className="font-mono text-brand-amber text-sm font-bold">{tierLabels[tier]}</span>
            </div>
            <input
              type="range"
              min={1}
              max={3}
              step={1}
              value={tier}
              onChange={(e) => setTier(parseInt(e.target.value))}
              className="w-full h-2 bg-brand-black rounded-lg appearance-none cursor-pointer accent-brand-amber"
            />
          </div>

          <div className="p-5 bg-brand-black rounded-2xl border border-brand-borderDark text-xs text-slate-300 space-y-2">
            <div className="font-bold text-white">💡 What is included in this estimate?</div>
            <p className="text-slate-400 leading-relaxed">
              Every ADU Alliance contract includes 3D architectural plans, structural engineering calculations, 100% city permit management, site excavation, concrete foundation, structural framing, 200A electrical subpanel, plumbing, HVAC, and turnkey interior finishes.
            </p>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-6 p-8 bg-brand-black rounded-2xl border border-brand-borderDark flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="space-y-1 border-b border-brand-borderDark/60 pb-4">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Estimated Turnkey Build Cost</div>
              <div className="text-4xl sm:text-5xl font-mono font-black text-brand-amber">${totalCost.toLocaleString()}</div>
              <div className="text-xs text-slate-400">Fixed-price single contract from design to keys</div>
            </div>

            <div className="space-y-1 border-b border-brand-borderDark/60 pb-4">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Estimated Property Value Added</div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-brand-emerald">${totalEquity.toLocaleString()}+</div>
              <div className="text-xs text-slate-400">Immediate appraisal equity increase in Orange County</div>
            </div>

            <div className="space-y-1">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Turnkey Timeline to Completion</div>
              <div className="text-2xl font-mono font-black text-white">{timeline}</div>
              <div className="text-xs text-slate-400">From site assessment through final certificate of occupancy</div>
            </div>
          </div>

          <Link
            href={`/free-feasibility?sqft=${sqft}`}
            className="w-full py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full text-center shadow transition-all block"
          >
            Get Custom Itemized Budget &rarr;
          </Link>
        </div>
      </div>

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
