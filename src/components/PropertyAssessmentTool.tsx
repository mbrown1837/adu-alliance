'use client';

import React from 'react';
import { Sparkles, ShieldCheck, Clock, Phone, CheckCircle2 } from 'lucide-react';
import GhlLeadForm from '@/components/GhlLeadForm';

export default function PropertyAssessmentTool() {
  return (
    <section id="assessment" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-black border-t border-brand-borderDark relative">
      <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[11px] sm:text-xs font-mono font-semibold text-brand-amber border border-white/15">
            <Sparkles className="w-3.5 h-3.5" /> FREE, NO-OBLIGATION REVIEW
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white leading-tight">
            Want to know what you can build on <br />
            <span className="font-normal italic text-brand-amber">your lot?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Tell us about your property. We confirm your ADU options, municipal setback allowances across Orange County, and share realistic budget ranges within 1 business day.
          </p>
        </div>

        {/* Live GoHighLevel Assessment Embed */}
        <div className="space-y-4">
          <GhlLeadForm minHeight="950px" />

          {/* Micro Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-brand-emerald">
              <ShieldCheck className="w-4 h-4 text-brand-emerald" /> 100% Confidential
            </span>
            <span className="hidden sm:inline text-slate-600">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-amber" /> 24-Hour Response
            </span>
            <span className="hidden sm:inline text-slate-600">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-slate-300" /> Direct Planning Desk: <a href="tel:6572984061" className="text-white hover:text-brand-amber font-bold font-sans">(657) 298-4061</a>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
