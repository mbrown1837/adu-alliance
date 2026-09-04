'use client';

import React, { useState } from 'react';
import { ShieldCheck, Phone, MapPin, CheckCircle2, Clock } from 'lucide-react';

export default function FreeFeasibilityPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/info@adualliance.com', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        form.reset();
      })
      .catch(() => {
        setLoading(false);
        setSubmitted(true);
      });
  };

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
          Our licensed California Class B builders review your lot dimensions, setbacks, utilities, and municipal zoning bylaws within 24 hours.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Form Card */}
        <div className="lg:col-span-7 p-8 sm:p-12 bg-brand-dark rounded-3xl border border-brand-borderDark relative">
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-brand-amber to-brand-amberLight rounded-t" />

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-brand-black rounded-2xl border border-brand-borderDark">
              <div className="w-12 h-12 rounded-full bg-brand-emerald/20 text-brand-emerald flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold uppercase text-white">Feasibility Request Received!</h3>
              <p className="text-sm text-slate-300">
                Thank you! A senior Orange County ADU specialist is analyzing your property setbacks and will contact you within 24 hours with a custom feasibility plan.
              </p>
              <a
                href="tel:+16572984061"
                className="inline-block px-6 py-3 bg-white text-black font-bold text-xs uppercase rounded-full tracking-wider mt-4"
              >
                Or Call Us Now: (657) 298-4061
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New ADU Lot Feasibility Request (Free Feasibility Page)" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Sarah Jenkins"
                    className="w-full h-12 px-4 rounded-xl bg-brand-black border border-brand-borderDark text-white placeholder-slate-500 focus:outline-none focus:border-brand-amber"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(949) 555-0192"
                      className="w-full h-12 px-4 rounded-xl bg-brand-black border border-brand-borderDark text-white placeholder-slate-500 focus:outline-none focus:border-brand-amber"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="sarah@example.com"
                      className="w-full h-12 px-4 rounded-xl bg-brand-black border border-brand-borderDark text-white placeholder-slate-500 focus:outline-none focus:border-brand-amber"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Property Address or ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    placeholder="2372 Morse Ave, Irvine, CA 92614"
                    className="w-full h-12 px-4 rounded-xl bg-brand-black border border-brand-borderDark text-white placeholder-slate-500 focus:outline-none focus:border-brand-amber"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Preferred ADU Type
                  </label>
                  <select
                    name="project_type"
                    className="w-full h-12 px-4 rounded-xl bg-brand-black border border-brand-borderDark text-white focus:outline-none focus:border-brand-amber"
                  >
                    <option value="Detached ADU (Ground Up)">Detached ADU (Ground Up Backyard Build)</option>
                    <option value="Garage Conversion">Garage to ADU Conversion</option>
                    <option value="Attached ADU / Home Addition">Attached ADU / Home Addition</option>
                    <option value="Junior ADU (JADU)">Junior ADU (JADU Inside Main Home)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-brand-amber hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow font-mono"
              >
                {loading ? 'Submitting Feasibility Request...' : 'Get My Free Lot Feasibility Plan →'}
              </button>

              <div className="text-center text-xs text-slate-400">
                🔒 100% Confidential. No sales pressure. Zero spam ever.
              </div>
            </form>
          )}
        </div>

        {/* Right Authority Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 bg-brand-dark rounded-3xl border border-brand-borderDark space-y-6">
            <h3 className="text-xl font-bold uppercase text-white tracking-tight">
              What Happens Next?
            </h3>

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
            <h4 className="text-sm font-bold uppercase text-white tracking-wider">Direct Contact</h4>
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
