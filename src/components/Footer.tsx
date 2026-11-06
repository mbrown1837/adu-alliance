import React from 'react';
import Link from 'next/link';
import { ORANGE_COUNTY_CITIES, ADU_SERVICES } from '@/lib/data';
import { ShieldCheck, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-slate-400 pt-16 pb-28 sm:pb-20 px-6 border-t border-brand-borderDark text-sm force-dark">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo-transparent.png"
                alt="ADU Alliance Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-black text-xl tracking-tighter text-white uppercase">
                ADU ALLIANCE
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              ADU Alliance connects Orange County homeowners with independent contractor partners for ADU planning, design, permitting and construction. Construction contracts are made directly with the selected contractor.
            </p>
            <div className="space-y-1 text-sm font-mono text-slate-300">
              <div>Independent Contractor Matching Network</div>
              <div>Direct Planning Desk: <a href="tel:9498229561" className="text-white hover:text-brand-amber font-bold">(949) 822-9561</a></div>
              <div className="text-brand-amber font-bold">Focused on Orange County</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-sm tracking-wider">Services</h4>
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
            <h4 className="font-bold text-white uppercase text-sm tracking-wider">Explore ADU Alliance</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/models" className="hover:text-white transition-colors">Layout Concepts</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Project Process</Link></li>
              <li><Link href="/calculator" className="hover:text-white transition-colors">Budget Scenario Calculator</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">ADU Design Inspiration</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Educational Guides</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About the Network</Link></li>
              <li><Link href="/free-feasibility" className="hover:text-white transition-colors">Property Assessment</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase text-sm tracking-wider">Top OC Locations</h4>
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
          <div className="text-sm font-bold text-slate-300 font-mono uppercase font-bold text-slate-400">
            Explore Orange County Cities and Communities:
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-300">
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
        <div className="pt-6 border-t border-brand-borderDark/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-mono">
          <div>
            &copy; {new Date().getFullYear()} ADU Alliance. All Rights Reserved. Independent Contractor Matching Network.
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/locations" className="hover:text-white">Service Areas</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}