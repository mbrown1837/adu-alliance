import React from 'react';
import type { Metadata } from 'next';
import { EVO_MODELS, INTERIORS_GALLERY } from '@/lib/data';
import { ShieldCheck, Zap, Ruler, Bed, Bath, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ADU Floor Plans & Models | Orange County Turnkey Designs | ADU Alliance',
  description: 'Explore 5 pre-designed, permit-ready ADU floor plans in Orange County ranging from 350 sq ft studios to 800+ sq ft 2-bedroom homes. Fixed-price contracts from $149,000.',
  alternates: {
    canonical: 'https://adualliance.com/models',
  },
};

export default function ModelsPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
          ARCHITECTURAL FLOOR PLANS &bull; ORANGE COUNTY
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          Engineered for Living. <br />
          <span className="font-editorial italic font-normal text-slate-300 lowercase">
            Permit-ready by design.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Five precision-engineered floor plans designed specifically to satisfy California state setback laws and Orange County municipal building codes.
        </p>
      </div>

      {/* Models Grid */}
      <div className="space-y-16">
        {EVO_MODELS.map((model, idx) => (
          <div
            key={model.id}
            className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Media */}
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-black border border-brand-borderDark group">
              <img
                src={model.imageUrl}
                alt={`${model.name} Floor Plan`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-brand-amber font-bold border border-white/10">
                {model.dimensions}
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-amber uppercase tracking-wider font-bold">
                  {model.bedrooms} &bull; {model.bathrooms}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  {model.name}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {model.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-brand-black rounded-2xl border border-brand-borderDark font-mono text-center">
                <div>
                  <div className="text-xs text-slate-400">Sq Footage</div>
                  <div className="text-lg font-black text-white">{model.sqft}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Bedrooms</div>
                  <div className="text-lg font-black text-white">{model.bedrooms}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Baths</div>
                  <div className="text-lg font-black text-white">{model.bathrooms}</div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Specifications:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {model.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-amber shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="pt-4 border-t border-brand-borderDark/60 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-mono">Turnkey Base Package</div>
                  <div className="text-2xl font-mono font-black text-brand-amber">{model.priceFormatted}</div>
                </div>
                <Link
                  href={`/free-feasibility?model=${model.slug}`}
                  className="px-6 py-3 bg-white hover:bg-brand-amber text-black font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                >
                  Get Site Feasibility &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Standard Features Section */}
      <div className="p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
            WHAT IS ALWAYS INCLUDED
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            The ADU Alliance Standard
          </h2>
          <p className="text-sm text-slate-300">
            Every contract is 100% turnkey with zero hidden trade costs or change orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2">
            <h3 className="font-bold text-white text-base">Complete Architectural Set</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              3D blueprints, structural engineering calculations, and Title 24 energy compliance drawings ready for city submission.
            </p>
          </div>

          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2">
            <h3 className="font-bold text-white text-base">100% In-House Permitting</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We manage all city plan checks, correction notices, and building department fees directly until permit issuance.
            </p>
          </div>

          <div className="p-6 bg-brand-black rounded-2xl border border-brand-borderDark space-y-2">
            <h3 className="font-bold text-white text-base">Turnkey Ground-Up Build</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Foundation, framing, plumbing, 200A electrical subpanel, mini-split HVAC, quartz kitchens, and final keys.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="text-center p-12 bg-gradient-to-r from-brand-dark to-brand-black rounded-3xl border border-brand-borderDark space-y-6">
        <h2 className="text-3xl font-black uppercase text-white tracking-tight">
          Want a Custom Floor Plan for Your Lot?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto">
          Our architectural team can modify any pre-designed model or draft a 100% custom floor plan tailored to your lot dimensions.
        </p>
        <Link
          href="/free-feasibility"
          className="inline-block px-8 py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
        >
          Book Free 30-Min Property Walk &rarr;
        </Link>
      </div>
    </div>
  );
}
