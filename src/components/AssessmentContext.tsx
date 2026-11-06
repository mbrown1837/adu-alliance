'use client';

import { useEffect, useState } from 'react';

import { ENQUIRY_CITIES as cities, ENQUIRY_SERVICES as services } from '@/lib/enquiry-context';

export default function AssessmentContext() {
  const [context, setContext] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const city = params.get('city') || '';
    const service = params.get('service') || '';
    const models: Record<string,string> = {compact:'Studio layout concept',studio:'Studio and office concept',one:'One-bedroom concept',two:'Two-bedroom concept',twoplus:'Two-bedroom plus flex concept'};
    const projects: Record<string,string> = {'compact-living':'Compact living inspiration','backyard-home':'Backyard relationship inspiration','independent-space':'Independent living inspiration','exterior-character':'Exterior character inspiration'};
    const model = params.get('model') || '';
    const project = params.get('project') || '';
    const area = params.get('sqft') || '';
    const areaNumber = Number(area);
    const parts = [
      Object.hasOwn(cities, city) ? cities[city] : '',
      Object.hasOwn(services, service) ? services[service] : '',
      Object.hasOwn(models, model) ? models[model] : '',
      Object.hasOwn(projects, project) ? projects[project] : '',
      /^\d{1,6}(\.\d{1,2})?$/.test(area) && areaNumber > 0 ? 'Planning area: '+areaNumber.toLocaleString()+' sq ft (not an approved size)' : '',
    ].filter(Boolean);
    setContext(parts.join(' — '));
  }, []);

  if (!context) return null;

  async function copyContext() {
    try {
      await navigator.clipboard.writeText(context);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section aria-label="Your selected project" className="p-5 rounded-xl border border-brand-borderDark bg-brand-dark text-left space-y-3">
      <h2 className="text-lg font-bold text-white">Your selected project</h2>
      <p className="text-base text-slate-200">{context}</p>
      <p className="text-sm text-slate-300">Please include these details when completing the assessment so the planning desk knows what you are exploring.</p>
      <button type="button" onClick={copyContext} className="min-h-12 px-5 py-3 rounded-lg bg-brand-amber text-black font-bold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Copy project details</button>
      <p role="status" className="text-sm text-slate-300">{copied ? 'Project details copied. You can paste them into the assessment.' : ''}</p>
    </section>
  );
}
