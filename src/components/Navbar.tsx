'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav-dark border-b border-brand-borderDark transition-all">
      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo-transparent.png"
            alt="ADU Alliance Logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
          />
          <div>
            <span className="font-black text-xl tracking-tighter text-white uppercase block leading-none">
              ADU ALLIANCE
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-6 lg:gap-7 text-xs font-bold uppercase tracking-wider text-slate-300">
          <Link href="/models" className="hover:text-white transition-colors">Layouts</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
          <Link href="/process" className="hover:text-white transition-colors">Process</Link>
          <Link href="/calculator" className="hover:text-white transition-colors">Estimator</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Guides</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <a
            href="tel:9498229561"
            className="hidden 2xl:flex text-sm font-mono font-bold text-slate-300 hover:text-white items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-brand-amber" /> (949) 822-9561
          </a>
          <Link
            href="/free-feasibility"
            className="px-5 py-2.5 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-1"
          >
            Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-3 text-white"
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="xl:hidden bg-brand-dark border-b border-brand-borderDark px-6 py-6 space-y-4">
          <nav id="mobile-navigation" className="flex flex-col gap-4 text-base font-semibold text-slate-300">
            <Link href="/models" onClick={() => setMenuOpen(false)} className="hover:text-white">Models</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-white">Services</Link>
            <Link href="/locations" onClick={() => setMenuOpen(false)} className="hover:text-white">Locations</Link>
            <Link href="/process" onClick={() => setMenuOpen(false)} className="hover:text-white">Process</Link>
            <Link href="/calculator" onClick={() => setMenuOpen(false)} className="hover:text-white">Estimator</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="hover:text-white">Projects</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-white">Guides</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">About</Link>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:9498229561"
              className="py-3 bg-brand-black border border-brand-borderDark text-white text-center font-bold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-amber" /> Call (949) 822-9561
            </a>
            <Link
              href="/free-feasibility"
              onClick={() => setMenuOpen(false)}
              className="py-3 bg-brand-amber text-black text-center font-black text-xs uppercase tracking-wider rounded-xl shadow block"
            >
              Request Property Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
