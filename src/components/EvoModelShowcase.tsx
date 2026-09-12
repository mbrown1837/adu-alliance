import React from 'react';
import { EVO_MODELS, INTERIORS_GALLERY } from '@/lib/data';
import { ArrowRight, Zap, ShieldCheck, Flame, Sun } from 'lucide-react';

export default function EvoModelShowcase() {
  const specs = [
    { title: 'All Electric', subtitle: 'Heat pump HVAC', desc: 'Ultra-efficient ductless heating & AC.', icon: Zap },
    { title: 'Steel Frame', subtitle: 'Structural core', desc: 'Precision engineered structural steel framing.', icon: ShieldCheck },
    { title: 'Fire Ready', subtitle: 'Noncombustible', desc: 'Class-A fire-resistant exterior cladding & roof.', icon: Flame },
    { title: 'Solar Ready', subtitle: 'Prewired', desc: 'Prewired for solar integration & battery storage.', icon: Sun },
  ];

  return (
    <section id="models" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-black space-y-16 sm:space-y-24">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        
        {/* Part 1: Model Grid */}
        <div className="space-y-10 sm:space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-brand-borderDark pb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
                100% ON-SITE STICK-BUILT &bull; 0% PREFAB
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white mt-1">
                Custom Architectural Layout Concepts
              </h2>
            </div>
            <a href="#assessment" className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white shrink-0">
              Get Custom Layout Estimate &rarr;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVO_MODELS.map((model, idx) => (
              <div
                key={model.id}
                className={`relative rounded-2xl sm:rounded-3xl overflow-hidden bg-brand-dark border border-brand-borderDark group flex flex-col justify-end min-h-[300px] sm:min-h-[360px] ${
                  idx === 0 ? 'lg:col-span-2 min-h-[320px] sm:min-h-[420px]' : ''
                }`}
              >
                <img
                  src={model.imageUrl}
                  alt={`${model.name} ADU`}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent" />

                <div className="relative z-10 p-5 sm:p-8 space-y-3">
                  <h3 className="font-black uppercase text-white tracking-tight text-xl sm:text-2xl lg:text-3xl leading-[1.1] mb-2">
                    {model.name}
                  </h3>

                  <div className="flex flex-col items-start gap-4">
                    <p className="text-sm font-semibold text-slate-200">
                      From <span className="font-mono text-brand-amber font-bold">{model.priceFormatted}</span> &nbsp;&bull;&nbsp; {model.sqft} sq ft
                    </p>
                    <a
                      href="#assessment"
                      className="px-5 py-2.5 border border-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-brand-amber hover:text-black hover:border-brand-amber transition-colors"
                    >
                      Layout Details &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Living & Interiors Editorial Gallery */}
        <div id="interiors" className="space-y-12 sm:space-y-16 pt-8 sm:pt-12 border-t border-brand-borderDark">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              ARCHITECTURAL FINISHES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white">
              Living & Interiors
            </h2>
            <p className="text-xs sm:text-base text-slate-300">
              Every unit is designed to feel like home from day one. Warm finishes, smart layouts, and natural light throughout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INTERIORS_GALLERY.map((item, idx) => (
              <div key={idx} className="space-y-3 group">
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-brand-dark border border-brand-borderDark">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Built for California Specs */}
        <div className="p-6 sm:p-12 bg-brand-dark rounded-2xl sm:rounded-3xl border border-brand-borderDark space-y-8 sm:space-y-10">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              PRECISION PERFORMANCE
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-white">
              Built for California
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Fire-resistant, climate-ready, and solar-compatible infrastructure engineered for Orange County climate and code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specs.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="p-5 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-brand-amber">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white uppercase text-base tracking-tight mt-2">{s.title}</h4>
                  <div className="text-xs font-mono text-brand-amber font-semibold">{s.subtitle}</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
