import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HCD_ADU_GUIDE, SERVICE_CONTENT, SERVICE_IMAGE } from '@/lib/service-content';

interface Props { params: Promise<{ slug: string }> }
export function generateStaticParams() { return SERVICE_CONTENT.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const {slug}=await params; const s=SERVICE_CONTENT.find(item=>item.slug===slug);
 if(!s)return {};
 const url='https://adualliance.com/services/'+s.slug;
 return {title:s.title,description:s.description,alternates:{canonical:url},openGraph:{title:s.title,description:s.description,url,images:[{url:'https://adualliance.com'+SERVICE_IMAGE,alt:'ADU design inspiration'}]}};
}
export default async function ServicePage({params}:Props) {
 const {slug}=await params; const s=SERVICE_CONTENT.find(item=>item.slug===slug); if(!s)notFound();
 const url='https://adualliance.com/services/'+s.slug, cta='/free-feasibility?service='+encodeURIComponent(s.slug);
 const schema={'@context':'https://schema.org','@type':'Service','@id':url+'#service',url,name:s.name+' Planning in Orange County',serviceType:'ADU planning and independent contractor connections',description:s.description,provider:{'@id':'https://adualliance.com/#organization'},areaServed:{'@type':'AdministrativeArea',name:'Orange County, California'}};
 const crumbs={'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:'https://adualliance.com/'},{'@type':'ListItem',position:2,name:'Services',item:'https://adualliance.com/services'},{'@type':'ListItem',position:3,name:s.name,item:url}]};
 const list=(items:string[])=><ul className="list-disc pl-5 space-y-3 text-slate-300 leading-7">{items.map(t=><li key={t}>{t}</li>)}</ul>;
 return <div className="pilot-page">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(crumbs)}}/>
 <nav aria-label="Breadcrumb" className="!flex-row flex-wrap gap-x-4 !mt-0 !mb-6"><Link href="/" className="!text-sm">Home</Link><Link href="/services" className="!text-sm">ADU services</Link><span aria-current="page" className="py-3 text-sm text-slate-300">{s.name}</span></nav>
 <header className="pilot-hero"><div><p className="!text-sm uppercase tracking-widest !text-amber-400">Orange County · Property-first planning</p><h1>{s.name} in Orange County</h1><p>{s.intro}</p><Link href={cta} className="pilot-button">Discuss Your Project Scope</Link><p className="!text-sm mt-4">Planning guidance and independent contractor connections. Confirm availability and your written scope before commissioning work.</p></div>
 <figure><img src={SERVICE_IMAGE} srcSet="/images/localized/adu-planning-640.webp 640w, /images/localized/adu-planning-960.webp 960w, /images/localized/adu-planning-1280.webp 1280w" sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1240px) 50vw, 600px" width={2752} height={1536} loading="eager" fetchPriority="high" alt="Backyard ADU design inspiration with an outdoor living area"/><figcaption className="text-sm text-slate-400 mt-3">Design inspiration; not a documented completed ADU Alliance project or an approved plan.</figcaption></figure></header>
 <div className="pilot-sections">
 <section><h2>When to Consider This Option</h2><div><p>{s.fit}</p></div></section>
 <section><h2>Deliverables to Agree in Writing</h2><div><p>Use these points to compare proposals. They are scope questions, rather than a promise that every item is included.</p><div className="mt-5">{list(s.deliverables)}</div></div></section>
 <section><h2>Exclusions and Conditions to Check</h2><div>{list(s.exclusions)}</div></section>
 <section><h2>Start with These Property Questions</h2><div>{list(s.questions)}</div></section>
 <section><h2>How to Compare the Cost Scope</h2><div><p>{s.cost}</p></div></section>
 <section><h2>Who Is Responsible for the Work?</h2><div><p>{s.responsibility}</p><p className="mt-4">Before signing, check current contractor licensing, insurance, references and written responsibilities. ADU Alliance does not sign the construction agreement on the homeowner&apos;s behalf.</p><a href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx" className="inline-block text-amber-400 underline mt-4">Check a contractor with California CSLB</a></div></section>
 <section><h2>What Happens After You Enquire?</h2><div><p>{s.next}</p><p className="mt-4">An initial enquiry is not a formal quote, structural assessment or permit approval. Agree any site visit, professional review, costs and timing before proceeding.</p></div></section>
 </div>
 {s.slug==='junior-adu'&&<section className="pilot-resources"><h2>Official JADU Guidance</h2><p>Definition and layout guidance checked against California HCD&apos;s March 2026 ADU Handbook on 4 November 2026. Confirm current requirements and the proposed classification with the responsible authority.</p><a href={HCD_ADU_GUIDE}>California HCD ADU and JADU Handbook</a></section>}
 <section className="pilot-resources"><h2>Compare Related Services</h2><nav aria-label="Related ADU services">{SERVICE_CONTENT.filter(item=>item.slug!==s.slug).map(item=><Link key={item.slug} href={'/services/'+item.slug}>{item.name}</Link>)}</nav></section>
 <section className="pilot-resources"><h2>Find Local Planning Information</h2><p>Explore the responsible authority and local planning questions. Service availability should be confirmed for your property.</p><nav aria-label="Selected Orange County locations">{s.cities.map(city=><Link key={city} href={'/locations/'+city}>{city.split('-').map(part=>part.charAt(0).toUpperCase()+part.slice(1)).join(' ')}</Link>)}<Link href="/locations">All Orange County locations</Link></nav></section>
 <section className="pilot-faq"><h2>Your Questions, Answered</h2><div>{s.faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
 <section className="pilot-final"><div><h2>Discuss Your Next Step</h2><p>Share your property, goals and existing-plan status to start a scope-focused conversation.</p></div><Link href={cta} className="pilot-button">Request a Property Assessment</Link></section>
 </div>;
}
