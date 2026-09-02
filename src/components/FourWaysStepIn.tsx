import React from 'react';
import { ENTRY_PATHWAYS } from '@/lib/data';
import { MapPin, Video, Phone, BookOpen, ArrowRight } from 'lucide-react';

export default function FourWaysStepIn() {
  const icons = [MapPin, Video, Phone, BookOpen];

  return (
    <section id="entry-ways" className="py-24 px-6 bg-brand-dark border-y border-brand-borderDark">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
            CHOOSE YOUR ENTRY PATHWAY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            Four Ways to <span className="font-editorial italic font-normal text-slate-300 lowercase">Step In</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Pick the exact path that fits where you are today — whether exploring initial zoning, ready to walk your lot, or requesting an architectural quote.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENTRY_PATHWAYS.map((opt, idx) => {
            const Icon = icons[idx] || MapPin;

            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl border transition-all flex flex-col justify-between ${
                  opt.popular
                    ? 'bg-brand-black border-brand-amber shadow-2xl'
                    : 'bg-brand-black/60 border-brand-borderDark hover:border-slate-600'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        opt.popular ? 'bg-brand-amber text-black' : 'bg-brand-dark text-slate-400 border border-brand-borderDark'
                      }`}
                    >
                      {opt.badge}
                    </span>
                    <Icon className={`w-5 h-5 ${opt.popular ? 'text-brand-amber' : 'text-slate-400'}`} />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-white tracking-tight">{opt.title}</h3>
                    <p className="text-xs font-mono text-brand-amber mt-1">{opt.subtitle}</p>
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">{opt.description}</p>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-brand-borderDark">
                  <a
                    href="#assessment"
                    className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      opt.popular
                        ? 'bg-brand-amber hover:bg-brand-amberDark text-black'
                        : 'bg-white/10 hover:bg-white text-white hover:text-black border border-white/20'
                    }`}
                  >
                    {opt.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
