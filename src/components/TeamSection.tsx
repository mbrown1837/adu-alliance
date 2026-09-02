import React from 'react';
import { TEAM_MEMBERS } from '@/lib/data';

export default function TeamSection() {
  return (
    <section className="py-24 px-6 bg-brand-black">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-amber font-bold">
            IN-HOUSE ACCOUNTABILITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            The Specialists Behind <br />
            <span className="font-editorial italic font-normal text-slate-300 lowercase">
              200+ California ADUs
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            We don’t outsource your plans to third parties or pass you off to random subcontractors. Meet the dedicated in-house designers, permit directors, and licensed builders managing your project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-brand-dark rounded-3xl border border-brand-borderDark p-6 sm:p-8 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-brand-borderDark">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] font-mono uppercase bg-brand-amber text-black px-2.5 py-0.5 rounded font-bold">
                      {member.experience}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-white tracking-tight">{member.name}</h3>
                  <p className="text-xs font-mono text-brand-amber mt-1">{member.role}</p>
                  <p className="text-xs text-slate-400 mt-2 font-mono">{member.credentials}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
