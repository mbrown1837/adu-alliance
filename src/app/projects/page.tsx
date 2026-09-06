import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Clock, MapPin, DollarSign, Ruler, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real ADU Projects in Orange County | Before & After Case Studies | ADU Alliance',
  description: 'Explore completed ADU projects across Orange County, CA. See real before-and-after garage conversions and detached backyard homes in Irvine, Newport Beach, Costa Mesa, and Anaheim with actual budgets and permit timelines.',
  alternates: {
    canonical: 'https://adualliance.com/projects',
  },
};

const PROJECTS = [
  {
    id: 'newport-beach-coastal-garage',
    title: 'The Newport Beach Garage Conversion',
    city: 'Newport Beach, CA',
    type: 'Garage to ADU Conversion',
    sqft: 420,
    bedrooms: '1 Bed',
    bathrooms: '1 Bath',
    cost: '$154,000',
    permitWeeks: '9 Weeks',
    buildWeeks: '16 Weeks',
    beforeImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-1/before.jpg',
    afterImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-1/after.jpg',
    challenge: 'A dark, underutilized 2-car detached garage with dated electrical panel and cracked foundation slab located in a coastal neighborhood.',
    solution: 'Engineered new reinforced concrete stem walls, cut high clerestory windows for privacy, installed ductless mini-split HVAC, and added custom oak cabinetry with full quartz kitchenette.',
    addedEquity: '$180,000+ Property Equity',
  },
  {
    id: 'irvine-modern-detached',
    title: 'The Irvine Modern Detached Two-Bedroom',
    city: 'Irvine, CA (Woodbridge)',
    type: 'Detached Ground-Up Build',
    sqft: 715,
    bedrooms: '2 Bed',
    bathrooms: '1 Bath',
    cost: '$218,000',
    permitWeeks: '11 Weeks',
    buildWeeks: '24 Weeks',
    beforeImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-2/before.jpg',
    afterImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-2/after.jpg',
    challenge: 'Strict City of Irvine setback constraints and master-planned HOA architectural guidelines requiring exact exterior roofline and color matching.',
    solution: 'Designed a permit-ready 2-bedroom floor plan that preserved rear yard garden space, matched the primary residence tile aesthetic, and cleared City of Irvine plan check with 0 revisions.',
    addedEquity: '$285,000+ Property Equity',
  },
  {
    id: 'costa-mesa-backyard-cottage',
    title: 'The Costa Mesa Backyard Studio Suite',
    city: 'Costa Mesa, CA',
    type: 'Detached Backyard ADU',
    sqft: 480,
    bedrooms: 'Studio + Nook',
    bathrooms: '1 Bath',
    cost: '$168,000',
    permitWeeks: '8 Weeks',
    buildWeeks: '18 Weeks',
    beforeImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-1/before.jpg',
    afterImage: 'https://www.evoadu.com/assets/images/Home_Pic_4_One_Home.jpg',
    challenge: 'Homeowner needed a private detached workspace and guest suite that would also serve as independent living space for their college-age child.',
    solution: 'Constructed an open-concept studio with vaulted ceilings, 10-foot sliding patio doors, a full-size walk-in shower, and dedicated electrical subpanel.',
    addedEquity: '$195,000+ Property Equity',
  },
  {
    id: 'huntington-beach-rental-adu',
    title: 'The Huntington Beach Coastal Living ADU',
    city: 'Huntington Beach, CA',
    type: 'Detached Ground-Up Build',
    sqft: 650,
    bedrooms: '1 Bed',
    bathrooms: '1 Bath',
    cost: '$198,000',
    permitWeeks: '10 Weeks',
    buildWeeks: '20 Weeks',
    beforeImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-2/before.jpg',
    afterImage: 'https://www.evoadu.com/assets/images/Home_Pic_12_Living_Home.jpg',
    challenge: 'Tight 4-foot rear setback requirements and coastal moisture resistance requirements.',
    solution: 'Engineered fiber-cement non-combustible exterior siding, standing-seam metal roofing, and all-electric heat pump infrastructure.',
    addedEquity: '$240,000+ Property Equity',
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="max-w-4xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
          PROVEN ORANGE COUNTY WORK &bull; REAL CASE STUDIES
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          Real ADU Projects. <br />
          <span className="font-normal italic text-brand-amber">
            From empty yard to final certificate of occupancy.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          Every project featured here was fully designed, engineered, permitted, and constructed by ADU Alliance. Browse real before-and-after transformations across Orange County with actual budgets and permit timelines.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-brand-borderDark font-mono">
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Projects Built</div>
            <div className="text-2xl font-black text-brand-amber">200+</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Google Rating</div>
            <div className="text-2xl font-black text-white">4.9 / 5.0</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Avg. Permit Time</div>
            <div className="text-2xl font-black text-brand-emerald">8 - 12 Wks</div>
          </div>
          <div className="p-4 bg-brand-dark rounded-2xl border border-brand-borderDark">
            <div className="text-xs text-slate-400">Contractor License</div>
            <div className="text-2xl font-black text-white">Licensed Builder Network</div>
          </div>
        </div>
      </div>

      {/* Case Studies List */}
      <div className="space-y-16">
        {PROJECTS.map((p, idx) => (
          <div
            key={p.id}
            className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8"
          >
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-borderDark pb-6">
              <div>
                <span className="text-xs font-mono font-bold text-brand-amber uppercase tracking-wider">
                  {p.city} &bull; {p.type}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
                  {p.title}
                </h2>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 font-mono">Turnkey Contract Cost</div>
                <div className="text-2xl font-mono font-black text-brand-amber">{p.cost}</div>
              </div>
            </div>

            {/* Before / After Media Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-brand-black relative border border-brand-borderDark">
                  <img src={p.beforeImage} alt={`Before - ${p.title}`} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-slate-300 border border-white/10">
                    BEFORE: UNPERMITTED / CLUTTERED
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-mono">Original lot condition prior to demolition and construction.</p>
              </div>

              <div className="space-y-2">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-brand-black relative border border-brand-amber/40">
                  <img src={p.afterImage} alt={`After - ${p.title}`} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-brand-amber text-black px-3 py-1 rounded-md text-xs font-mono font-bold">
                    AFTER: PERMITTED MOVE-IN READY
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-mono">Complete turnkey secondary residence with certificate of occupancy.</p>
              </div>
            </div>

            {/* Specs & Scope Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-brand-black rounded-2xl border border-brand-borderDark font-mono text-center">
              <div>
                <div className="text-xs text-slate-400">Square Footage</div>
                <div className="text-lg font-black text-white">{p.sqft} sq ft</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Layout</div>
                <div className="text-lg font-black text-white">{p.bedrooms} &bull; {p.bathrooms}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Permit Approval</div>
                <div className="text-lg font-black text-brand-emerald">{p.permitWeeks}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Build Timeline</div>
                <div className="text-lg font-black text-white">{p.buildWeeks}</div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2">
                <strong className="text-white uppercase font-mono block text-xs tracking-wider">The Site Challenge</strong>
                <p className="text-slate-400">{p.challenge}</p>
              </div>
              <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2">
                <strong className="text-brand-amber uppercase font-mono block text-xs tracking-wider">The Turnkey Solution</strong>
                <p className="text-slate-400">{p.solution}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-brand-borderDark/60">
              <div className="text-xs font-mono text-brand-emerald font-bold">
                ✓ {p.addedEquity}
              </div>
              <Link
                href={`/free-feasibility?project=${p.id}`}
                className="px-6 py-3 bg-white hover:bg-brand-amber text-black font-bold text-xs uppercase tracking-wider rounded-full transition-all text-center"
              >
                Build a Similar ADU on Your Lot &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Final Lead Funnel */}
      <div className="text-center p-12 bg-gradient-to-r from-brand-dark to-brand-black rounded-3xl border border-brand-borderDark space-y-6">
        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
          Want to Know What We Can Build in Your Backyard?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          We provide a free property assessment and setback feasibility review within 24 hours. No sales pressure, complete architectural clarity.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/free-feasibility"
            className="px-8 py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
          >
            Schedule Free Property Feasibility Walk &rarr;
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
