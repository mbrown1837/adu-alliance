'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function FeasibilityForm() {
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

  if (submitted) {
    return (
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
    );
  }

  return (
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
  );
}
