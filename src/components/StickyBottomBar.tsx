'use client';

import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { trackPhoneCallClick } from '@/lib/gtm';

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-xl border-t border-brand-borderDark px-4 sm:px-6 py-3 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left Headline (Desktop) */}
        <div className="hidden sm:block">
          <div className="text-sm font-bold text-white tracking-tight">
            Orange County ADU Design-Build Alliance
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Single-contract design, permits, and construction across all 34 OC cities.
          </div>
        </div>

        {/* Mobile Action Bar */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-2">
          <a
            href="tel:6572984061"
            onClick={() => trackPhoneCallClick('6572984061', 'MobileStickyBar')}
            className="flex-1 sm:flex-none py-2.5 px-3 bg-brand-black border border-brand-borderDark rounded-full text-xs font-mono font-bold text-white hover:border-brand-amber transition-colors flex items-center justify-center gap-1.5 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-brand-amber shrink-0" />
            <span>(657) 298-4061</span>
          </a>

          <Link
            href="/free-feasibility"
            className="flex-1 sm:flex-none py-2.5 px-4 bg-brand-amber hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center justify-center gap-1 shrink-0 text-center"
          >
            Get Free Feasibility <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>

      </div>
    </div>
  );
}
