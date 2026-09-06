import React from 'react';
import { LADU_PROJECT_PLAN } from '@/lib/data';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LaduProcessTimeline() {
  return (
    <section id="process" className="py-24 px-6 bg-brand-dark border-y border-brand-borderDark">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header with LADU Value Proposition */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-brand-borderDark pb-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              PROCESS TRANSPARENCY &bull; LADU ROADMAP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              From Site Visit to Keys in <br />
              <span className="font-normal italic text-brand-amber">
                6 to 9 months.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Other builders hand you off between independent designers, permit expediters, and contractors. ADU Alliance coordinates all four inside a single transparent project plan with zero rejected permits.
            </p>
          </div>

          {/* Social Proof Box */}
          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2 shrink-0">
            <div className="flex items-center gap-2 text-brand-emerald font-mono font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-brand-emerald" /> 100% Permit Approval
            </div>
            <div className="text-2xl font-mono font-black text-white">Zero Rejected Permits</div>
            <div className="text-xs text-slate-400 font-mono">Over 200+ Projects Completed in SoCal</div>
          </div>
        </div>

        {/* 6-Phase Visual Gantt / Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LADU_PROJECT_PLAN.map((item) => (
            <div
              key={item.phase}
              className="p-8 bg-brand-black rounded-3xl border border-brand-borderDark space-y-4 hover:border-brand-amber/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-brand-amber bg-brand-dark px-2.5 py-1 rounded-md border border-brand-borderDark">
                    PHASE {item.phase}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.timeline}</span>
                </div>

                <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-borderDark/60 flex items-center gap-2 text-xs font-mono text-slate-300">
                <Clock className="w-3.5 h-3.5 text-brand-amber" />
                <span>Est. Duration: <strong>{item.duration}</strong></span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Milestone Tracker Portal Teaser */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-brand-black via-brand-dark to-brand-black rounded-3xl border border-brand-borderDark flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              DIGITAL CLIENT PORTAL
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              Watch your ADU come to life
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Your personal homeowner dashboard tracks every milestone from initial survey to move-in day with live city plan check logs and weekly job-site photo reports.
            </p>
          </div>

          <a
            href="#assessment"
            className="px-7 py-3.5 bg-white hover:bg-brand-amber text-black font-bold text-xs uppercase tracking-wider rounded-full shrink-0 shadow transition-all"
          >
            Start with Free Lot Walk &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
