import React from 'react';
import { Phone, Mail, Map } from 'lucide-react';

export default function ContactCards() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 w-full bg-brand-black border-t border-brand-borderDark relative z-10">
      <div className="max-w-7xl mx-auto space-y-12 text-center relative z-20">
         <p className="text-slate-300 text-sm max-w-3xl mx-auto font-medium">
           Feel free to reach out to us for any inquiries, consultation requests, or general ADU-related discussions. Our knowledgeable team of experts is ready to assist you.
         </p>
         
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 shadow-xl rounded-xl p-8 flex flex-col items-center justify-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
               <Phone className="w-8 h-8 text-brand-amber" strokeWidth={1.5} />
               <h3 className="text-gray-900 font-black tracking-widest text-sm uppercase">Call Us</h3>
               <a href="tel:6572984061" className="text-black font-medium hover:text-brand-amber transition-colors">(657) 298-4061</a>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 shadow-xl rounded-xl p-8 flex flex-col items-center justify-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
               <Mail className="w-8 h-8 text-brand-amber" strokeWidth={1.5} />
               <h3 className="text-gray-900 font-black tracking-widest text-sm uppercase">Email Us</h3>
               <a href="mailto:info@adualliance.com" className="text-black font-medium hover:text-brand-amber transition-colors">info@adualliance.com</a>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 shadow-xl rounded-xl p-8 flex flex-col items-center justify-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
               <Map className="w-8 h-8 text-brand-amber" strokeWidth={1.5} />
               <h3 className="text-gray-900 font-black tracking-widest text-sm uppercase">Address</h3>
               <span className="text-black font-medium">Orange County, CA</span>
            </div>
         </div>
      </div>
    </section>
  );
}