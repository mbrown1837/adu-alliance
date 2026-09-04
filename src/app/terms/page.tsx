import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | ADU Alliance',
  description: 'ADU Alliance terms of service and California contractor matching network disclosures.',
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-4xl mx-auto space-y-8 text-slate-300 text-sm leading-relaxed">
      <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">Terms of Service</h1>
      <p className="text-xs font-mono text-brand-amber">Last Updated: March 2026</p>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">1. Agreement to Terms</h2>
        <p>
          By accessing or using the website of ADU Alliance (adualliance.com), you agree to be bound by these Terms of Service, all applicable state and federal laws, and acknowledge the nature of our referral and architectural feasibility services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">2. Contractor Matching & Independent Licensing Disclosure</h2>
        <p>
          ADU Alliance functions as a homeowner resource, preliminary feasibility platform, and contractor matching network connecting property owners with independent, pre-vetted California General Contractors (Class B) licensed by the California State License Board (CSLB).
        </p>
        <p>
          All construction contracts, formal bids, architectural certifications, municipal building permits, and project warranties are entered into and executed directly between the property owner and the assigned licensed California General Contractor. ADU Alliance does not directly contract construction services and operates strictly in compliance with California Business and Professions Code regulations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">3. Preliminary Feasibility & Cost Estimators</h2>
        <p>
          Online cost calculators, square footage estimations, and ballpark project figures provided on this website are intended for preliminary financial and planning feasibility only. Actual project costs, municipal permit fees, and timelines are determined through formal on-site structural engineering, utility mapping, and city plan check review conducted by licensed builder partners.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">4. Communications Consent (TCPA Compliance)</h2>
        <p>
          By submitting your contact information and property details via our online assessment forms, you provide consent for ADU Alliance and our verified local builder partners to contact you via phone, email, or SMS text messaging regarding your accessory dwelling unit project. You may opt out of communications at any time by replying STOP.
        </p>
      </section>
    </div>
  );
}
