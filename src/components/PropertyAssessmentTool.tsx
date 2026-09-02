'use client';

import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export default function PropertyAssessmentTool() {
  const [step, setStep] = useState(1);
  const [aduType, setAduType] = useState('Detached Backyard Build');
  const [city, setCity] = useState('Irvine');
  const [yardCondition, setYardCondition] = useState('Flat grass / dirt backyard');
  const [goal, setGoal] = useState('Passive Rental Income');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section id="assessment" className="py-24 px-6 bg-brand-black border-t border-brand-borderDark relative">
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 rounded-full text-xs font-mono font-semibold text-brand-amber border border-white/15">
            <Sparkles className="w-3.5 h-3.5" /> FREE, NO-OBLIGATION REVIEW
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            Want to know what you can build on <br />
            <span className="font-editorial italic font-normal text-slate-300 lowercase">your lot?</span>
          </h2>
          <p className="text-sm text-slate-400">
            Tell us about your property. We confirm your ADU options, setback allowances, and share realistic budget ranges within 1 business day.
          </p>
        </div>

        {/* 3-Step Wizard Container */}
        <div className="bg-brand-dark border border-brand-borderDark rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between border-b border-brand-borderDark pb-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? 'bg-brand-amber text-black' : 'bg-brand-black text-slate-500'}`}>
                1
              </span>
              <span className={step >= 1 ? 'text-white font-bold' : 'text-slate-500'}>Scope & City</span>
            </div>
            <div className="w-8 h-px bg-brand-borderDark hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? 'bg-brand-amber text-black' : 'bg-brand-black text-slate-500'}`}>
                2
              </span>
              <span className={step >= 2 ? 'text-white font-bold' : 'text-slate-500'}>Lot Details</span>
            </div>
            <div className="w-8 h-px bg-brand-borderDark hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${step >= 3 ? 'bg-brand-amber text-black' : 'bg-brand-black text-slate-500'}`}>
                3
              </span>
              <span className={step >= 3 ? 'text-white font-bold' : 'text-slate-500'}>Contact Info</span>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleNext} className="space-y-6">
              
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-3">
                      Select Desired ADU Scope:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Detached Backyard Build',
                        'Garage to ADU Conversion',
                        'Junior ADU (JADU)',
                        'Attached Home Extension',
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setAduType(t)}
                          className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                            aduType === t
                              ? 'bg-brand-amber text-black border-brand-amber shadow'
                              : 'bg-brand-black border-brand-borderDark text-slate-300 hover:border-slate-600'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-2">
                      Select Orange County Municipality:
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-brand-black border border-brand-borderDark rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-amber"
                    >
                      <option value="Irvine">Irvine, CA</option>
                      <option value="Newport Beach">Newport Beach, CA</option>
                      <option value="Costa Mesa">Costa Mesa, CA</option>
                      <option value="Huntington Beach">Huntington Beach, CA</option>
                      <option value="Anaheim">Anaheim, CA</option>
                      <option value="Santa Ana">Santa Ana, CA</option>
                      <option value="Fullerton">Fullerton, CA</option>
                      <option value="Mission Viejo">Mission Viejo, CA</option>
                      <option value="Other OC City">Other Orange County Municipality</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow transition-all flex items-center gap-2"
                    >
                      Next Step: Lot Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-3">
                      Current Lot / Structure Condition:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Flat grass / dirt backyard',
                        'Detached 2-car garage in place',
                        'Sloped / hillside lot',
                        'Attached garage / interior space',
                      ].map((cond) => (
                        <button
                          key={cond}
                          type="button"
                          onClick={() => setYardCondition(cond)}
                          className={`p-4 rounded-2xl border text-left text-xs font-bold transition-all ${
                            yardCondition === cond
                              ? 'bg-brand-amber text-black border-brand-amber shadow'
                              : 'bg-brand-black border-brand-borderDark text-slate-300 hover:border-slate-600'
                          }`}
                        >
                          {cond}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 font-bold mb-3">
                      Primary ADU Goal:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['Passive Rental Income', 'Housing Aging Parents / Kids', 'Private Studio / Office'].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setGoal(g)}
                          className={`p-3.5 rounded-2xl border text-left text-xs font-bold transition-all ${
                            goal === g
                              ? 'bg-white text-black border-white shadow'
                              : 'bg-brand-black border-brand-borderDark text-slate-300 hover:border-slate-600'
                          }`}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-mono text-slate-400 hover:text-white"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow transition-all flex items-center gap-2"
                    >
                      Next Step: Contact Info <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="p-4 bg-brand-black rounded-2xl border border-brand-borderDark text-xs text-slate-300">
                    <span className="font-mono font-bold text-brand-amber block mb-1">SELECTED CONFIGURATION:</span>
                    {aduType} in {city} ({yardCondition}) for {goal}.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-brand-black border border-brand-borderDark rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-amber"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(657) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-brand-black border border-brand-borderDark rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-amber"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">Property Street Address (or Parcel #) *</label>
                    <input
                      type="text"
                      required
                      placeholder="123 Example St, Irvine, CA 92618"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-brand-black border border-brand-borderDark rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-amber"
                    />
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-mono text-slate-400 hover:text-white"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow transition-all flex items-center gap-2"
                    >
                      Get Free Property Assessment &rarr;
                    </button>
                  </div>
                </div>
              )}

            </form>
          ) : (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-brand-emerald mx-auto" />
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                Assessment Request Confirmed!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. Our Orange County planning team is currently evaluating your lot dimensions and local city zoning records. We will follow up within 1 business day.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
