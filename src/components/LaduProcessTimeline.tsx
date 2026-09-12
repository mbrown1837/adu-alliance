import React from 'react';
import { LADU_PROJECT_PLAN } from '@/lib/data';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function LaduProcessTimeline() {
  return (
    <section id="process" className="py-24 px-6 bg-brand-dark border-y border-brand-borderDark relative overflow-hidden force-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-amber/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Header with LADU Value Proposition */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-brand-borderDark pb-8">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" />
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

        {/* Interconnected 4-Phase Roadmap Track */}
        <div className="relative">
          {/* Connecting Rope / Line Track (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[3px] bg-gradient-to-r from-brand-amber via-brand-amber/80 to-brand-amber/40 z-0 shadow-[0_0_12px_rgba(255,172,0,0.5)]" />

          {/* 4-Phase Grid: 4-in-1 row on LG, 2x2 on MD, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {LADU_PROJECT_PLAN.map((item, index) => {
              const stepNumber = String(index + 1).padStart(2, '0');
              const isLast = index === LADU_PROJECT_PLAN.length - 1;

              return (
                <div
                  key={item.phase}
                  className="group relative p-7 bg-brand-black/90 rounded-3xl border border-brand-borderDark hover:border-brand-amber transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Node Header & Rope Anchor Indicator */}
                    <div className="flex items-center justify-between">
                      {/* Step Number Node */}
                      <div className="w-11 h-11 rounded-2xl bg-brand-dark border-2 border-brand-amber flex items-center justify-center font-mono font-black text-brand-amber text-sm shadow-[0_0_15px_rgba(255,172,0,0.2)] group-hover:bg-brand-amber group-hover:text-black transition-colors duration-300">
                        {stepNumber}
                      </div>

                      {/* Connector Arrow (Visible between items on LG) */}
                      {!isLast && (
                        <div className="hidden lg:flex items-center text-brand-amber/60 group-hover:text-brand-amber transition-colors">
                          <ArrowRight className="w-4 h-4 translate-x-1 group-hover:translate-x-2 transition-transform" />
                        </div>
                      )}

                      <span className="text-xs font-mono text-slate-400 bg-brand-dark px-3 py-1 rounded-full border border-brand-borderDark/80">
                        {item.timeline}
                      </span>
                    </div>

                    {/* Phase Badge & Title */}
                    <div>
                      <span className="text-xs font-mono font-bold tracking-widest text-brand-amber uppercase block mb-1">
                        {item.phase}
                      </span>
                      <h3 className="text-xl font-bold uppercase text-white tracking-tight group-hover:text-brand-amber transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer Duration Badge */}
                  <div className="pt-4 mt-6 border-t border-brand-borderDark/80 flex items-center justify-between text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-amber" />
                      <span>Duration: <strong className="text-white">{item.duration}</strong></span>
                    </div>
                    <Check className="w-4 h-4 text-brand-emerald opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Milestone Tracker Portal Teaser */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-brand-black via-brand-dark to-brand-black rounded-3xl border border-brand-borderDark flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-amber/5 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 max-w-xl relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-amber" />
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
            href="/free-feasibility"
            className="px-7 py-4 bg-brand-amber hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-full shrink-0 shadow-lg transition-all transform hover:scale-105 relative z-10 flex items-center gap-2"
          >
            Start with Free Lot Walk <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
