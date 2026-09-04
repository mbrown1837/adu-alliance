'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CostEstimator() {
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
  );
}
