import React from 'react';
import type { Metadata } from 'next';
import { LADU_PROJECT_PLAN } from '@/lib/data';
import { ShieldCheck, Clock, FileCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Turnkey ADU Process & California Laws 2026 | Orange County | ADU Alliance',
  description: 'Learn how ADU Alliance takes your Orange County ADU project from site feasibility to move-in keys in 6 to 9 months under California SB 9 and AB 1033.',
  alternates: {
    canonical: 'https://adualliance.com/process',
  },
};

export default function ProcessPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
          PROCESS TRANSPARENCY &bull; 6 TO 9 MONTHS
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          From Site Visit to Keys. <br />
          <span className="font-normal italic text-brand-amber">
            One team, one single contract.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Traditional contractors hand you off between separate architects, permit expediters, and trade crews. ADU Alliance coordinates all four inside a single transparent project plan with a 100% permit approval guarantee.
        </p>
      </div>

      {/* 4-Stage Breakdown */}
      <div className="space-y-12">
        {LADU_PROJECT_PLAN.map((stage) => (
          <div
            key={stage.phase}
            className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-3 space-y-2">
              <span className="text-xs font-mono font-bold text-brand-amber bg-brand-black px-3 py-1.5 rounded-md border border-brand-borderDark inline-block">
                {stage.phase}
              </span>
              <div className="text-3xl font-mono font-black text-white">{stage.timeline}</div>
              <div className="text-xs text-slate-400 font-mono">Est. Duration: {stage.duration}</div>
            </div>

            <div className="lg:col-span-6 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {stage.name}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {stage.desc}
              </p>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end">
              <div className="p-4 bg-brand-black rounded-2xl border border-brand-borderDark text-xs font-mono text-slate-300 space-y-1 w-full lg:w-auto text-center">
                <div className="text-brand-emerald font-bold">✓ 100% Guaranteed</div>
                <div className="text-slate-400">Fixed Milestone Delivery</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* California 2026 Laws Breakdown */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            LEGAL FRAMEWORK &bull; CALIFORNIA 2026
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            California State ADU Laws Homeowners Must Know
          </h2>
          <p className="text-sm text-slate-300">
            Recent California legislation (AB 68, SB 13, and AB 1033) has made ADU permitting faster and legally protected across Orange County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-3">
            <h3 className="font-bold text-white text-lg">60-Day Mandatory Approval</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Under California government code, local city building departments must act on compliant ADU permit applications within 60 days of complete submission.
            </p>
          </div>

          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-3">
            <h3 className="font-bold text-white text-lg">HOA Restrictions Prohibited</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Under Assembly Bill 670, Homeowners Associations cannot prohibit or unreasonably restrict the construction of ADUs or Junior ADUs on single-family properties.
            </p>
          </div>

          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-3">
            <h3 className="font-bold text-white text-lg">4-Foot Setback Mandate</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cities cannot require more than 4-foot side and rear setbacks for detached ADUs up to 16-18 feet in height, maximizing your yard usability.
            </p>
          </div>

          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-3">
            <h3 className="font-bold text-white text-lg">No Replacement Parking Required</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When converting an existing garage into an ADU, California law prohibits cities from requiring replacement off-street parking spaces in almost all Orange County zones.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="text-center p-12 bg-gradient-to-r from-brand-dark to-brand-black rounded-3xl border border-brand-borderDark space-y-6">
        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
          Find Out What You Can Build on Your Lot
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          We review your lot dimensions, setbacks, and city zoning bylaws before you spend a dollar.
        </p>
        <Link
          href="/free-feasibility"
          className="inline-block px-8 py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
        >
          Request Free Feasibility Assessment &rarr;
        </Link>
      </div>
    </div>
  );
}
