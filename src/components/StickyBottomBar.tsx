'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { trackPhoneCallClick } from '@/lib/gtm';

export default function StickyBottomBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once the user scrolls down past the hero (250px)
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Floating Contact Bar"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-xl border-t border-brand-borderDark px-4 sm:px-6 py-3 shadow-2xl transition-all duration-300 ease-in-out transform ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
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

        {/* Action Bar & Controls */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-2">
          <a
            href="tel:9498229561"
            onClick={() => trackPhoneCallClick('9498229561', 'MobileStickyBar')}
            className="flex-1 sm:flex-none py-2.5 px-3 bg-brand-black border border-brand-borderDark rounded-full text-xs font-mono font-bold text-white hover:border-brand-amber transition-colors flex items-center justify-center gap-1.5 shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-brand-amber shrink-0" />
            <span>(949) 822-9561</span>
          </a>

          <Link
            href="/free-feasibility"
            className="flex-1 sm:flex-none py-2.5 px-4 bg-brand-amber hover:bg-white text-black font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center justify-center gap-1 shrink-0 text-center"
          >
            Get Free Feasibility <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-brand-black flex items-center justify-center shrink-0 ml-1"
            aria-label="Collapse sticky bar"
            title="Collapse"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
