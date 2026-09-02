'use client';

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-xl border-t border-brand-borderDark px-6 py-3.5 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Headline */}
        <div className="hidden sm:block">
          <div className="text-sm font-bold text-white tracking-tight">
            Orange County ADU Design-Build Specialists
          </div>
          <div className="text-xs text-slate-400 font-mono">
            One contract covers design, permits, and construction across all 34 OC cities.
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-3">
          <a
            href="tel:6572984061"
            className="sm:hidden text-xs font-mono font-bold text-slate-300 hover:text-white flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-brand-amber" /> (657) 298-4061
          </a>
          <a
            href="#assessment"
            className="px-6 py-2.5 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-1.5 ml-auto sm:ml-0"
          >
            Get Free Assessment <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
