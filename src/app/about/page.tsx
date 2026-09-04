import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Award, CheckCircle2, Phone, MapPin, Building2, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About ADU Alliance | Orange County's Premier ADU Builders",
  description: "Learn about ADU Alliance, Orange County's dedicated accessory dwelling unit design-build general contractor (CSLB Licensed Builder Network). Over 200+ completed projects, single-contract accountability, and 100% city permit guarantee.",
  alternates: {
    canonical: 'https://adualliance.com/about',
  },
};

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'ADU Alliance',
    url: 'https://adualliance.com/about',
    telephone: '+16572984061',
    priceRange: '$149,000 - $350,000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2372 Morse Ave',
      addressLocality: 'Irvine',
      addressRegion: 'CA',
      postalCode: '92614',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.6846,
      longitude: -117.8265,
    },
    description: "Orange County's dedicated ADU design-build contractor specializing in turnkey accessory dwelling units and garage conversions under CSLB License Verified CSLB Alliance.",
  };

  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <div className="max-w-4xl space-y-6">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
          ABOUT ADU ALLIANCE &bull; ORANGE COUNTY SPECIALISTS
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          We Only Build ADUs. <br />
          <span className="font-editorial italic font-normal text-slate-300 lowercase">
            One team, one fixed price, one point of accountability.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          ADU Alliance is an Orange County design-build general contractor focused exclusively on Accessory Dwelling Units. We do not remodel kitchens or add commercial rooms; every blueprint we draw, every permit we expedite, and every foundation we pour is dedicated to crafting beautiful, high-value backyard homes.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-brand-borderDark font-mono">
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Completed ADUs</div>
            <div className="text-2xl font-black text-brand-amber">200+</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">ADU Focus</div>
            <div className="text-2xl font-black text-white">15+ Yrs</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Permit Pass Rate</div>
            <div className="text-2xl font-black text-brand-emerald">100%</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">License</div>
            <div className="text-2xl font-black text-white">Licensed Builder Network</div>
          </div>
        </div>
      </div>

      {/* Why Specialization Matters */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            THE SPECIALIST ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            Why Working with an ADU-Only Builder Protects Your Investment
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Building an ADU is fundamentally different from a room addition or bathroom remodel. It involves complex municipal setbacks, independent utility trenching (sewer, water, 200A electrical), Title 24 energy calculations, and fire separation codes across 34 different Orange County cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-bold text-white text-lg">Zero Contractor Finger-Pointing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When architects and general contractors work separately, errors in drawings lead to costly change orders on site. At ADU Alliance, our in-house architectural drafting team and master building crews operate under one single contract.
            </p>
          </div>

          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-bold text-white text-lg">In-House Permit Expediting</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We know what plan checkers in Irvine, Newport Beach, Anaheim, Santa Ana, and Costa Mesa flag before drawings are submitted. We resolve municipal comments promptly to ensure your permit is issued without avoidable delays.
            </p>
          </div>

          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-3">
            <div className="w-10 h-10 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-bold text-white text-lg">Guaranteed Fixed-Price Contracts</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We do not use open-ended cost-plus billing. Every ADU Alliance project starts with an itemized, fixed-price contract that locks in design, engineering, permitting, and construction costs from day one.
            </p>
          </div>
        </div>
      </div>

      {/* CSLB Verification & Authority Box */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-brand-black via-brand-dark to-brand-black rounded-3xl border border-brand-borderDark grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-brand-emerald font-mono font-bold text-xs uppercase tracking-wider">
            <ShieldCheck className="w-5 h-5 text-brand-emerald" /> State Verified Licensing
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            Pre-Vetted CSLB Licensed Builder Alliance
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every accessory dwelling unit designed and built through ADU Alliance is contracted directly with pre-vetted California General Contractors (Class B) licensed in good standing by the California State License Board (CSLB). All builder partners maintain active commercial liability insurance and comprehensive workers compensation coverage.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300 pt-2">
            <span>✓ Pre-Vetted CSLB Builders (Class B)</span>
            <span>✓ Fully Bonded & Insured Partners</span>
            <span>✓ Active Workers Comp</span>
            <span>✓ 100% California Code Compliant</span>
          </div>
        </div>

        <div className="lg:col-span-4 flex lg:justify-end">
          <Link
            href="/free-feasibility"
            className="w-full lg:w-auto px-8 py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all text-center"
          >
            Check Your Lot Feasibility &rarr;
          </Link>
        </div>
      </div>

      {/* Headquarters & Service Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-4">
          <h3 className="text-xl font-bold uppercase text-white tracking-tight">Orange County Office</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Our central office is located in Irvine, California. We coordinate site assessments, city submissions, and job-site inspections daily across all 34 municipalities in the county.
          </p>
          <div className="space-y-2 text-xs font-mono text-slate-300 pt-2 border-t border-brand-borderDark">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-amber" />
              <span>2372 Morse Ave, Irvine, CA 92614</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-amber" />
              <a href="tel:+16572984061" className="text-brand-amber hover:underline">
                (657) 298-4061
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-amber" />
              <span>Mon - Sat: 7:30 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-4">
          <h3 className="text-xl font-bold uppercase text-white tracking-tight">Our 100% Permit Guarantee</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We conduct rigorous pre-feasibility reviews before submitting architectural plans. If we determine that your property cannot legally accommodate an ADU under local setback and utility constraints, we tell you upfront before you invest in plan checks.
          </p>
          <div className="p-4 bg-brand-black rounded-2xl border border-brand-borderDark text-xs text-slate-400">
            🔒 <strong>Zero Rejected Permits:</strong> 100% of the plan sets approved by our team have secured building permits through Orange County municipal departments.
          </div>
        </div>
      </div>

      {/* Final Lead Funnel */}
      <div className="text-center p-12 bg-gradient-to-r from-brand-dark to-brand-black rounded-3xl border border-brand-borderDark space-y-6">
        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
          Ready to Add Real Living Space & Property Value?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Book a free 30-minute on-premise feasibility walk with our licensed builders. We map out buildable square footage, setbacks, and ballpark budgets on the spot.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/free-feasibility"
            className="px-8 py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
          >
            Request Free Lot Feasibility Plan &rarr;
          </Link>
          <a
            href="tel:+16572984061"
            className="px-8 py-4 bg-brand-black hover:bg-brand-dark text-white border border-brand-borderDark font-bold text-xs uppercase tracking-wider rounded-full transition-all"
          >
            Call Us: (657) 298-4061
          </a>
        </div>
      </div>
    </div>
  );
}
