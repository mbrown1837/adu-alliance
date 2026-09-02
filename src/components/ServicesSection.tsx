import React from 'react';
import { ADU_SERVICES } from '@/lib/data';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-brand-dark border-y border-brand-borderDark">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-borderDark pb-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
              WHAT WE DO &bull; SINGLE-CONTRACT EXECUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              ADU Services from an <br />
              <span className="font-editorial italic font-normal text-slate-300 lowercase">
                Orange County Design-Build Team
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              From feasibility through final inspection, one dedicated contractor handles your full scope so timelines and construction quality stay clear.
            </p>
          </div>

          <a
            href="#assessment"
            className="px-6 py-3 bg-white hover:bg-brand-amber text-black font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center gap-2 shrink-0"
          >
            Get a Free Assessment <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5 Services Cards */}
        <div className="space-y-10">
          {ADU_SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl bg-brand-black border border-brand-borderDark hover:border-slate-700 transition-all"
              >
                {/* Image */}
                <div className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-dark ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 text-brand-amber font-mono text-xs font-bold rounded-lg border border-white/10">
                    {service.number}. {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono uppercase text-brand-amber font-bold">
                      {service.tagline}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-borderDark">
                    <span className="text-xs font-mono text-slate-400">
                      Turnaround: <strong className="text-white font-sans">{service.turnaroundTime}</strong>
                    </span>
                    <a
                      href="#assessment"
                      className="text-xs font-bold uppercase tracking-wider text-brand-amber hover:text-white flex items-center gap-1 transition-colors"
                    >
                      Get Quote for This Scope &rarr;
                    </a>
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
