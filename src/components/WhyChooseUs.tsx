import React from 'react';
import { TRUST_PILLARS } from '@/lib/data';
import { ShieldCheck, Award, FileCheck2, Scale, Building2, Layers } from 'lucide-react';

export default function WhyChooseUs() {
  const icons = [ShieldCheck, Award, FileCheck2, Scale, Building2, Layers];

  return (
    <section className="py-24 px-6 bg-brand-dark border-t border-brand-borderDark">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
            WHY ADU ALLIANCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            The ADU Specialists <br />
            <span className="font-editorial italic font-normal text-slate-300 lowercase">
              Orange County Homeowners Trust
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            As an experienced ADU contractor, we work with city reviewers, site constraints, and Title 24 code details every day so your project avoids common delays.
          </p>
        </div>

        {/* 6-Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx] || ShieldCheck;

            return (
              <div
                key={pillar.number}
                className="bg-brand-black rounded-3xl p-8 border border-brand-borderDark space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-black text-brand-amber bg-brand-dark px-3 py-1 rounded-lg border border-brand-borderDark">
                      {pillar.number}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-white tracking-tight">{pillar.title}</h3>
                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
