import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Phone, Clock } from 'lucide-react';
import FeasibilityForm from '@/components/FeasibilityForm';

export const metadata: Metadata = {
  title: 'Free ADU Property Feasibility Review | Orange County | ADU Alliance',
  description: 'Request a free 30-minute accessory dwelling unit lot feasibility assessment in Orange County, CA. We evaluate setbacks, utility connections, and city zoning rules before you spend a dollar.',
  alternates: {
    canonical: 'https://adualliance.com/free-feasibility',
  },
};

export default function FreeFeasibilityPage() {
  return (
    <div className="py-16 sm:py-24 px-6 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4 text-center mx-auto">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-amber">
          FREE 30-MINUTE PROPERTY ASSESSMENT &bull; ZERO OBLIGATION
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
          Check Your Lot Feasibility. <br />
          <span className="font-editorial italic font-normal text-slate-300 lowercase">
            Know what you can build before spending a dollar.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Our licensed California builders review your lot dimensions, setbacks, utilities, and municipal zoning bylaws within 24 hours.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form Card */}
        <div className="lg:col-span-7 p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark relative">
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-brand-amber to-brand-amberLight rounded-t" />
          <FeasibilityForm />
        </div>

        {/* Right Authority Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
            <h2 className="text-xl font-bold uppercase text-white tracking-tight">
              What Happens Next?
            </h2>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-brand-amber/20 text-brand-amber font-mono font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <strong className="text-white block">Lot Review (Within 24 Hours)</strong>
                  Our architectural planning team checks your parcel setbacks, easements, and city zoning.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-brand-amber/20 text-brand-amber font-mono font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <strong className="text-white block">Itemized Scope & Pricing</strong>
                  You receive a clear breakdown of buildable square footage, model recommendations, and budget.
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-brand-amber/20 text-brand-amber font-mono font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <strong className="text-white block">Optional Free Lot Walk</strong>
                  A licensed builder visits your property in person to confirm utility hookups and soil conditions.
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-4">
            <h3 className="text-sm font-bold uppercase text-white tracking-wider">Direct Planning Desk</h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-amber" />
                <span>2372 Morse Ave, Irvine, CA 92614</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-amber" />
                <a href="tel:+16572984061" className="text-brand-amber font-mono font-bold hover:underline">
                  (657) 298-4061
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-amber" />
                <span>Monday - Saturday: 7:30 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
