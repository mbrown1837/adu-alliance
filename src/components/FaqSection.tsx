'use client';

import React, { useState } from 'react';
import { FAQS } from '@/lib/data';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-brand-dark border-t border-brand-borderDark">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            Everything you need to know
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Answers regarding zoning eligibility, prefab construction, permits, and financing.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-brand-black rounded-2xl border border-brand-borderDark overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-slate-300 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-brand-borderDark/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
