import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | ADU Alliance',
  description: 'ADU Alliance privacy policy and data protection practices for Orange County homeowners.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-4xl mx-auto space-y-8 text-slate-300 text-sm leading-relaxed">
      <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">Privacy Policy</h1>
      <p className="text-xs font-mono text-brand-amber">Last Updated: March 2026</p>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">1. Information We Collect</h2>
        <p>
          When you request a property feasibility assessment, floor plan brochure, or consultation on adualliance.com, we collect contact information including your name, email address, phone number, and parcel address or ZIP code.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">2. How We Use Your Information</h2>
        <p>
          We use your submitted property information exclusively to assess lot feasibility, zoning bylaws, municipal setback requirements, and provide requested estimates. We do not sell, rent, or lease your personal information to third-party marketers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white uppercase">3. Contact Us</h2>
        <p>
          If you have any questions regarding our privacy policy, contact us at info@adualliance.com or visit our Orange County headquarters at 2372 Morse Ave, Irvine, CA 92614.
        </p>
      </section>
    </div>
  );
}
