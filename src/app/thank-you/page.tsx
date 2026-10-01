import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request Received | ADU Alliance',
  description: 'Thank you for contacting ADU Alliance. Your request has been successfully received.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <div className="p-4 bg-brand-dark rounded-full border border-brand-amber/30 animate-pulse">
            <CheckCircle2 className="w-16 h-16 text-brand-amber shrink-0" strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight">
            Request <span className="font-normal italic text-brand-amber">Received</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Thank you for reaching out to ADU Alliance. Our planning desk has received your property details. A specialized ADU expert will review your lot parameters and contact you shortly.
          </p>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-amber transition-colors duration-300"
          >
            Return to Homepage
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 bg-transparent border border-brand-borderDark text-white font-bold text-sm uppercase tracking-widest rounded-full hover:border-brand-amber transition-colors duration-300 flex items-center justify-center gap-2"
          >
            View Our Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}