'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav-dark border-b border-brand-borderDark transition-all">
      {/* Micro Trust Bar */}
      <div className="bg-black/60 text-slate-400 px-6 py-1 text-[11px] font-mono border-b border-brand-borderDark/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-brand-emerald flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> CA General Contractor (B) #1094821
            </span>
            <span className="text-slate-600">&bull;</span>
            <span>Orange County ADU Specialists</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Direct Planning Desk:</span>
            <a href="tel:6572984061" className="text-white hover:text-brand-amber font-bold">
              (657) 298-4061
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-black text-lg tracking-tighter shadow-sm">
            A<span className="text-brand-amber">A</span>
          </div>
          <div>
            <span className="font-black text-xl tracking-tighter text-white uppercase block leading-none">
              ADU ALLIANCE
            </span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
              Orange County Design-Build
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-slate-300">
          <Link href="/models" className="hover:text-white transition-colors">Models</Link>
          <Link href="/services/garage-conversion" className="hover:text-white transition-colors">Services</Link>
          <Link href="/process" className="hover:text-white transition-colors">Process</Link>
          <Link href="/calculator" className="hover:text-white transition-colors">Estimator</Link>
          <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:6572984061"
            className="text-xs font-mono font-bold text-slate-300 hover:text-white flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-brand-amber" /> (657) 298-4061
          </a>
          <Link
            href="/free-feasibility"
            className="px-5 py-2.5 bg-brand-amber hover:bg-brand-amberDark text-black font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-1"
          >
            Free Feasibility <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-brand-borderDark px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4 text-base font-semibold text-slate-300">
            <Link href="/models" onClick={() => setMenuOpen(false)} className="hover:text-white">Models</Link>
            <Link href="/services/garage-conversion" onClick={() => setMenuOpen(false)} className="hover:text-white">Services</Link>
            <Link href="/process" onClick={() => setMenuOpen(false)} className="hover:text-white">Process</Link>
            <Link href="/calculator" onClick={() => setMenuOpen(false)} className="hover:text-white">Estimator</Link>
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="hover:text-white">Projects</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">About</Link>
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:6572984061"
              className="py-3 bg-brand-black border border-brand-borderDark text-white text-center font-bold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-amber" /> Call (657) 298-4061
            </a>
            <Link
              href="/free-feasibility"
              onClick={() => setMenuOpen(false)}
              className="py-3 bg-brand-amber text-black text-center font-black text-xs uppercase tracking-wider rounded-xl shadow block"
            >
              Get Free Property Feasibility
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
