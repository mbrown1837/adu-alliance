import React from 'react';
import Link from 'next/link';
import { ORANGE_COUNTY_CITIES } from '@/lib/data';
import { ShieldCheck, Phone, MapPin } from 'lucide-react';

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
              Orange County&apos;s premier single-contract ADU design-build firm. We manage architectural plans, city plan check permits, and ground-up turnkey construction across all 34 OC cities.
            </p>
            <div className="space-y-1 text-xs font-mono text-slate-300">
              <div>CA General Contractor (B) License #1094821</div>
              <div>Direct Phone: <a href="tel:6572984061" className="text-white hover:text-brand-amber">(657) 298-4061</a></div>
              <div>Irvine, CA 92618 &bull; Orange County Headquarters</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-white">ADU Architectural Design</a></li>
              <li><a href="#services" className="hover:text-white">City Permits & Approvals</a></li>
              <li><a href="#services" className="hover:text-white">Detached ADU Construction</a></li>
              <li><a href="#services" className="hover:text-white">Garage to ADU Conversions</a></li>
              <li><a href="#services" className="hover:text-white">Junior ADUs (JADU)</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Models & Living</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#models" className="hover:text-white">Compact (350 sq ft)</a></li>
              <li><a href="#models" className="hover:text-white">Studio (430 sq ft)</a></li>
              <li><a href="#models" className="hover:text-white">One (560 sq ft)</a></li>
              <li><a href="#models" className="hover:text-white">Two (715 sq ft)</a></li>
              <li><a href="#interiors" className="hover:text-white">Living & Interiors</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider">Orange County</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#assessment" className="hover:text-white">Irvine ADUs</a></li>
              <li><a href="#assessment" className="hover:text-white">Newport Beach ADUs</a></li>
              <li><a href="#assessment" className="hover:text-white">Costa Mesa ADUs</a></li>
              <li><a href="#assessment" className="hover:text-white">Huntington Beach ADUs</a></li>
              <li><a href="#assessment" className="hover:text-white">Anaheim ADUs</a></li>
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
              <span key={i} className="hover:text-white transition-colors">
                {c.name} {i < ORANGE_COUNTY_CITIES.length - 1 && '•'}
              </span>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-brand-borderDark/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} ADU Alliance LLC. All Rights Reserved. CA General Contractor License #1094821.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Zoning Guide</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
