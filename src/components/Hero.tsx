import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end pt-36 pb-20 px-6 overflow-hidden bg-brand-black text-white">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FHero%2FModern_ADU_in_suburban_backyard_202607271433.jpeg&w=3840&q=75"
          alt="Modern ADU built by ADU Alliance"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        
        {/* Main Pitch */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-brand-amber backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span>ORANGE COUNTY’S DEDICATED DESIGN-BUILD CONTRACTOR</span>
          </div>

          <h1 className="font-black uppercase tracking-tighter text-white leading-[0.95] text-5xl sm:text-7xl lg:text-8xl">
            ADU Builders <br />
            <span className="text-slate-300 font-editorial italic font-normal lowercase tracking-normal">
              Orange County
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
            We only build ADUs. One contract covers custom 3D design, in-house municipal permits across all 34 OC cities, and ground-up turnkey construction.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#assessment"
              className="px-8 py-4 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow-glow transition-all flex items-center gap-2"
            >
              Get a Free Property Assessment <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-full backdrop-blur-md transition-all"
            >
              See Completed Projects
            </a>
          </div>
        </div>

        {/* 4 Trust Stats Bar (ADU Build LA Gold Standard) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-brand-dark/80 border border-brand-borderDark backdrop-blur-xl shadow-2xl">
          <div className="border-r border-brand-borderDark/80 last:border-0 pr-4">
            <div className="text-3xl sm:text-4xl font-mono font-black text-white">200+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">ADUs Completed</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">Across Southern California</div>
          </div>

          <div className="border-r border-brand-borderDark/80 last:border-0 pr-4 pl-0 sm:pl-4">
            <div className="text-3xl sm:text-4xl font-mono font-black text-brand-amber">15+ Years</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">ADU-Exclusive Focus</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">Dedicated specialist team</div>
          </div>

          <div className="border-r border-brand-borderDark/80 last:border-0 pr-4 pl-0 sm:pl-4">
            <div className="flex items-center gap-1.5">
              <span className="text-3xl sm:text-4xl font-mono font-black text-white">4.9 / 5</span>
              <Star className="w-4 h-4 fill-brand-amber text-brand-amber" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">Google Rating</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">194+ Verified Client Reviews</div>
          </div>

          <div className="pl-0 sm:pl-4">
            <div className="text-3xl sm:text-4xl font-mono font-black text-brand-emerald flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-brand-emerald" /> Class B
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1">Licensed & Insured</div>
            <div className="text-[11px] text-slate-400 font-mono mt-0.5">Verified CSLB Licensed Network</div>
          </div>
        </div>

      </div>
    </section>
  );
}
