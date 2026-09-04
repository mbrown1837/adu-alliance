import React from 'react';
import Link from 'next/link';
import { ORANGE_COUNTY_CITIES, ADU_SERVICES } from '@/lib/data';
import { ShieldCheck, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-slate-400 pt-16 pb-28 sm:pb-20 px-6 border-t border-brand-borderDark text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-black text-lg tracking-tighter">
                A<span className="text-brand-amber">A</span>
              </div>
              <span className="font-black text-xl tracking-tighter text-white uppercase">
                ADU ALLIANCE
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Orange County&apos;s premier single-contract ADU design-build general contractor. We manage 3D architectural plans, city plan check permits, and ground-up turnkey construction across all 34 OC municipalities.
            </p>
            <div className="space-y-1 text-xs font-mono text-slate-300">
              <div>CA General Contractor (B) License #1094821</div>
              <div>Direct Planning Desk: <a href="tel:6572984061" className="text-white hover:text-brand-amber font-bold">(657) 298-4061</a></div>
              <div>2372 Morse Ave, Irvine, CA 92614 &bull; Orange County Headquarters</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Services</h4>
            <ul className="space-y-2 text-slate-400">
              {ADU_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Explore ADU Alliance</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/models" className="hover:text-white transition-colors">Pre-Designed Models</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">4-Stage Turnkey Process</Link></li>
              <li><Link href="/calculator" className="hover:text-white transition-colors">Cost & Value Estimator</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Completed OC Projects</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About & Licensing</Link></li>
              <li><Link href="/free-feasibility" className="hover:text-white transition-colors">Free Lot Feasibility</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Top OC Locations</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/locations/irvine" className="hover:text-white transition-colors">Irvine ADU Builders</Link></li>
              <li><Link href="/locations/newport-beach" className="hover:text-white transition-colors">Newport Beach ADU Builders</Link></li>
              <li><Link href="/locations/huntington-beach" className="hover:text-white transition-colors">Huntington Beach ADU Builders</Link></li>
              <li><Link href="/locations/costa-mesa" className="hover:text-white transition-colors">Costa Mesa ADU Builders</Link></li>
              <li><Link href="/locations/anaheim" className="hover:text-white transition-colors">Anaheim ADU Builders</Link></li>
              <li><Link href="/locations/santa-ana" className="hover:text-white transition-colors">Santa Ana ADU Builders</Link></li>
            </ul>
          </div>
        </div>

        {/* 34 OC Cities Strip */}
        <div className="pt-8 border-t border-brand-borderDark/60 space-y-2">
          <div className="text-[10px] font-mono uppercase font-bold text-slate-500">
            Dedicated In-House Permitting & Construction Across All 34 Orange County Municipalities:
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            {ORANGE_COUNTY_CITIES.map((c, i) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="hover:text-brand-amber transition-colors"
              >
                {c.name} {i < ORANGE_COUNTY_CITIES.length - 1 && '•'}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-brand-borderDark/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} ADU Alliance. All Rights Reserved. California General Contractor License (Class B) #1094821.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
            <Link href="/process" className="hover:text-slate-400">California ADU Laws</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
