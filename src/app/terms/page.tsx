import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ADU Alliance',
  description: 'ADU Alliance terms of service and website usage conditions.',
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-4xl mx-auto space-y-8 text-slate-300 text-sm leading-relaxed">
      <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">Terms of Service</h1>
      <p className="text-xs font-mono text-brand-amber">Last Updated: March 2026</p>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">1. Agreement to Terms</h2>
        <p>
          By accessing or using the website of ADU Alliance (adualliance.com), you agree to be bound by these Terms of Service and all applicable California construction and licensing regulations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">2. Contractor Licensing & Estimates</h2>
        <p>
          ADU Alliance operates under California State License Board (CSLB) General Contractor Class B License #1094821. Online cost estimators and preliminary pricing ranges provided on this site are for informational feasibility purposes; formal project contracts are finalized following on-site engineering and city plan check review.
        </p>
      </section>
    </div>
  );
}
