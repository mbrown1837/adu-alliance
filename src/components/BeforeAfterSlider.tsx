'use client';

import React, { useState } from 'react';
import { CASE_STUDIES } from '@/lib/data';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<Record<string, number>>({
    'echo-park-garage': 50,
    'silver-lake-studio': 50,
  });

  const handleSliderChange = (id: string, val: number) => {
    setSliderPos((prev) => ({ ...prev, [id]: val }));
  };

  return (
    <section id="projects" className="py-24 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-borderDark pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              PROVEN RESULTS &bull; REAL SOCAL PROJECTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white mt-1">
              ADU Projects Built Across <br />
              <span className="font-editorial italic font-normal text-slate-300 lowercase">
                Orange County
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            See how our dedicated team handles real Orange County lots, city plan check timelines, and fixed budgets throughout the county.
          </p>
        </div>

        {/* 2 Interactive Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {CASE_STUDIES.map((cs) => {
            const pos = sliderPos[cs.id] || 50;

            return (
              <div
                key={cs.id}
                className="bg-brand-dark rounded-3xl border border-brand-borderDark p-6 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                {/* Interactive Split Slider Container */}
                <div className="space-y-2">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden select-none bg-black border border-brand-borderDark">
                    {/* AFTER Image */}
                    <img
                      src={cs.afterImage}
                      alt={`${cs.title} After`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono font-bold bg-brand-emerald text-black rounded-md shadow z-10">
                      AFTER
                    </span>

                    {/* BEFORE Image (Clipped) */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                    >
                      <img
                        src={cs.beforeImage}
                        alt={`${cs.title} Before`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-mono font-bold bg-black/80 text-white rounded-md shadow z-10">
                        BEFORE
                      </span>
                    </div>

                    {/* Divider Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 pointer-events-none"
                      style={{ left: `${pos}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-2xl flex items-center justify-center text-black font-bold text-xs">
                        ↔
                      </div>
                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pos}
                      onChange={(e) => handleSliderChange(cs.id, Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                      aria-label="Drag slider to compare before and after"
                    />
                  </div>

                  <div className="text-center text-[11px] font-mono text-slate-500">
                    &larr; Drag slider to reveal full transformation &rarr;
                  </div>
                </div>

                {/* Case Details */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-brand-borderDark pb-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase bg-brand-black px-2 py-0.5 rounded font-bold text-brand-amber border border-brand-borderDark">
                        {cs.type}
                      </span>
                      <h3 className="font-bold font-display text-xl text-white mt-1.5">{cs.title}</h3>
                      <p className="text-xs text-slate-400">{cs.location} &bull; {cs.sqft} sq ft</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 font-mono">Scope Budget</div>
                      <div className="text-lg font-mono font-black text-brand-amber">{cs.cost}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono py-2 bg-brand-black rounded-xl border border-brand-borderDark px-4">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Permit Duration</span>
                      <strong className="text-white">{cs.permitWeeks}</strong>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Monthly Cash Flow</span>
                      <strong className="text-brand-emerald">{cs.rentalIncome}</strong>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{cs.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
