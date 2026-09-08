import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] flex flex-col justify-end pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 overflow-hidden bg-brand-black text-white">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/localized/adu_asset_7b7dec0f36.jpeg"
          alt="Modern ADU built by ADU Alliance"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/75 to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
        
        {/* Main Pitch */}
        <div className="space-y-5 sm:space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-mono text-brand-amber backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse shrink-0" />
            <span className="truncate">ORANGE COUNTY’S DEDICATED DESIGN-BUILD CONTRACTOR</span>
          </div>

          <h1 className="font-black uppercase tracking-tighter text-white leading-[0.98] text-4xl sm:text-6xl md:text-7xl lg:text-8xl break-words">
            ADU Builders <br />
            <span className="text-slate-300 font-normal italic text-brand-amber tracking-normal">
              Orange County
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            We only build ADUs. One contract covers custom 3D design, in-house municipal permits across all 34 OC cities, and ground-up turnkey construction.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <a
              href="#assessment"
              className="w-full sm:w-auto px-7 py-4 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow-glow transition-all flex items-center justify-center gap-2 text-center"
            >
              Get a Free Property Assessment <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-full backdrop-blur-md transition-all text-center"
            >
              See Completed Projects
            </a>
          </div>
        </div>

        {/* 4 Trust Stats Bar (Mobile Optimized 2x2 Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-brand-dark/90 border border-brand-borderDark backdrop-blur-xl shadow-2xl">
          <div className="space-y-0.5">
            <div className="text-2xl sm:text-4xl font-mono font-black text-white">200+</div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200">ADUs Completed</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden sm:block">Across Southern California</div>
          </div>

          <div className="space-y-0.5 sm:border-l sm:border-brand-borderDark/80 sm:pl-6">
            <div className="text-2xl sm:text-4xl font-mono font-black text-brand-amber">15+ Years</div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200">ADU-Exclusive Focus</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden sm:block">Dedicated specialist team</div>
          </div>

          <div className="space-y-0.5 border-t border-brand-borderDark/60 lg:border-t-0 sm:border-l sm:border-brand-borderDark/80 pt-3 lg:pt-0 sm:pl-6">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl sm:text-4xl font-mono font-black text-white">4.9 / 5</span>
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-brand-amber text-brand-amber shrink-0" />
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200">Google Rating</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden sm:block">194+ Verified Client Reviews</div>
          </div>

          <div className="space-y-0.5 border-t border-brand-borderDark/60 lg:border-t-0 sm:border-l sm:border-brand-borderDark/80 pt-3 lg:pt-0 sm:pl-6">
            <div className="text-2xl sm:text-4xl font-mono font-black text-brand-emerald flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-brand-emerald shrink-0" /> Class B
            </div>
            <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200">Licensed & Insured</div>
            <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono hidden sm:block">Verified CSLB Licensed Network</div>
          </div>
        </div>

      </div>
    </section>
  );
}
