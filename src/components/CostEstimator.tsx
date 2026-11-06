'use client';
import { useId, useState } from 'react';
import Link from 'next/link';
const money = (n: number) => new Intl.NumberFormat('en-US', {style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
export default function CostEstimator() {
 const id = useId();
 const [area,setArea] = useState('');
 const [lowRate,setLowRate] = useState('');
 const [highRate,setHighRate] = useState('');
 const [allowance,setAllowance] = useState('');
 const [contingency,setContingency] = useState('');
 const values = [area,lowRate,highRate,allowance,contingency];
 const numbers = values.map(Number);
 const [sqft,low,high,extra,percent] = numbers;
 const complete = values.every(value=>value.trim()!=='');
 const inputsValid = complete && numbers.every(Number.isFinite) && sqft>0 && low>0 && high>=low && extra>=0 && percent>=0 && percent<=100;
 const lower = (sqft*low+extra)*(1+percent/100);
 const upper = (sqft*high+extra)*(1+percent/100);
 const valid = inputsValid && Number.isFinite(lower) && Number.isFinite(upper);
 const fields = [
 {key:'area',label:'Planned floor area (sq ft)',value:area,set:setArea,min:1,help:'A planning input, not a statement of permitted area.'},
 {key:'low',label:'Your low construction rate ($ / sq ft)',value:lowRate,set:setLowRate,min:0.01,help:'Use your own research or a scoped proposal.'},
 {key:'high',label:'Your high construction rate ($ / sq ft)',value:highRate,set:setHighRate,min:0.01,help:'Enter a rate equal to or greater than your low assumption.'},
 {key:'allowance',label:'Other project allowances ($)',value:allowance,set:setAllowance,min:0,help:'Costs outside your rates. Enter 0 if none; avoid double counting.'},
 {key:'contingency',label:'Your contingency assumption (%)',value:contingency,set:setContingency,min:0,help:'Applied to construction plus allowances. Enter 0 if none; maximum 100%.'},
 ];
 return <section aria-label="ADU budget worksheet" className="grid lg:grid-cols-2 gap-8 lg:gap-12 border-t border-brand-borderDark pt-10"><div className="space-y-6"><h2>Your Planning Inputs</h2><p>No market rates are prefilled. Enter every field to calculate a scenario.</p>{fields.map(f=><div key={f.key}><label htmlFor={id+f.key} className="block text-base font-semibold mb-2">{f.label}</label><input id={id+f.key} type="number" inputMode="decimal" min={f.min} max={f.key==='contingency'?100:undefined} step="any" value={f.value} onChange={e=>f.set(e.target.value)} aria-describedby={id+f.key+'-help'} className="w-full min-h-12 p-3 text-base bg-brand-black text-white border border-slate-500 rounded-md focus:outline focus:outline-2 focus:outline-brand-amber" /><p id={id+f.key+'-help'} className="mt-2">{f.help}</p></div>)}</div>
 <div className="bg-brand-dark p-6 sm:p-8 rounded-lg self-start lg:sticky lg:top-28"><h2>Your Scenario Range</h2><div aria-live="polite" aria-atomic="true">{valid?<><p className="!text-3xl !text-brand-amber font-bold break-words my-5">{money(lower)} – {money(upper)}</p><p>Based entirely on your entered values. A budget scenario, not a quote or recommended allowance.</p><dl className="text-base text-slate-300 space-y-4 mt-6"><div><dt>Construction subtotal</dt><dd>{money(sqft*low)} – {money(sqft*high)}</dd></div><div><dt>Other allowances</dt><dd>{money(extra)}</dd></div><div><dt>Contingency</dt><dd>{percent}% of each subtotal plus allowances</dd></div></dl></>:<p className="my-5">{complete?'Check your inputs: area and rates must be greater than zero, high rate must be at least low rate, allowances cannot be negative, and contingency must be between 0% and 100%.':'Enter area, both rates, allowances and contingency to see the range. Use 0 for an allowance or contingency you are excluding.'}</p>}</div><div className="border-t border-brand-borderDark mt-7 pt-6"><h3 className="text-lg font-semibold mb-3">The calculation</h3><p>(Area × your rate + other allowances) × (1 + contingency ÷ 100).</p><p className="mt-4">Only entered costs are included. This worksheet does not estimate rent, equity, taxes, finance charges or completion dates.</p></div><Link href={valid?'/free-feasibility?sqft='+sqft:'/free-feasibility'} className="pilot-button">Discuss Your Project Scope</Link></div></section>;
}
