import Link from 'next/link';
import { PILOT_CONTENT } from '@/lib/pilot-content';
export default function PilotPage({ index }: { index: number }) {
 const page = PILOT_CONTENT[index];
 const linkLabels: Record<string, string> = {
   '/services/adu-design': 'ADU design and plans', '/services/adu-permits': 'Permit planning',
   '/services/garage-conversion': 'Garage conversion', '/services/detached-adu': 'Detached ADUs',
   '/services/junior-adu': 'Junior ADUs', '/models': 'Layout concepts', '/process': 'Project process',
   '/locations': 'Orange County locations', '/locations/irvine': 'Irvine',
   '/locations/garden-grove': 'Garden Grove', '/locations/newport-beach': 'Newport Beach',
   '/locations/tustin': 'Tustin',
 };
 const assessmentHref = index === 2 ? '/free-feasibility?city=irvine' : index === 0 ? '/free-feasibility' : '/free-feasibility?service=' + page.route.split('/').pop();
 const url = 'https://adualliance.com' + page.route;
 const schema = index === 0 ? null : {
   '@context':'https://schema.org', '@type':'Service',
   name: index === 2 ? 'ADU planning and contractor connections in Irvine' : page.h1,
   url, provider:{'@id':'https://adualliance.com/#organization'},
   areaServed: index === 2 ? {'@type':'City',name:'Irvine'} : {'@type':'AdministrativeArea',name:'Orange County, California'}
 };
 const breadcrumbs = {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[
   {'@type':'ListItem',position:1,name:'Home',item:'https://adualliance.com/'},
   {'@type':'ListItem',position:2,name:index===2?'Locations':'Services',item:'https://adualliance.com/'+(index===2?'locations':'services')},
   {'@type':'ListItem',position:3,name:index===2?'Irvine':index===3?'Garage Conversion':'ADU Design',item:url}
 ]};
 return <div className="pilot-page">
 {schema && <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(breadcrumbs)}}/></>}
 <header className="pilot-hero"><div><h1>{page.h1}</h1><p>{page.intro}</p><Link href={assessmentHref} className="pilot-button">{page.cta}</Link></div><img src="/images/localized/adu-planning-960.webp" srcSet="/images/localized/adu-planning-640.webp 640w, /images/localized/adu-planning-960.webp 960w, /images/localized/adu-planning-1280.webp 1280w" sizes="(max-width: 767px) 100vw, 50vw" alt="Backyard ADU design inspiration" width="2752" height="1536" fetchPriority="high" /></header>
 <div className="pilot-sections">{page.sections.map(([heading,text])=><section key={heading}><h2>{heading}</h2><div><p>{text}</p>{heading==='Compare ADU Services'&&<nav aria-label="ADU services">{[['ADU design and plans','adu-design'],['Permit planning','adu-permits'],['Detached ADUs','detached-adu'],['Garage conversions','garage-conversion'],['Junior ADUs','junior-adu']].map(([name,slug])=><Link key={slug} href={'/services/'+slug}>{name}<span aria-hidden="true"> →</span></Link>)}</nav>}{heading==='Explore Orange County Locations'||heading==='Find Local Planning Information'?<nav aria-label="Orange County locations">{[['Irvine','irvine'],['Garden Grove','garden-grove'],['Newport Beach','newport-beach']].map(([name,slug])=><Link key={slug} href={'/locations/'+slug}>{name} →</Link>)}</nav>:null}</div></section>)}</div>
 {index===2&&<section className="pilot-resources"><h2>Official Irvine Resources</h2><p>Sources checked 4 November 2026. Confirm current requirements with the city.</p><a href="https://www.cityofirvine.gov/building-permits-and-inspections/project-constructing-accessory-dwelling-unit-adu">City of Irvine ADU application guidance →</a><a href="https://www.cityofirvine.gov/building-permits-and-inspections/pre-approved-adu-plans-program">Irvine standard-plan program and availability →</a></section>}
 <section className="pilot-resources"><h2>Explore Related Pages</h2><nav aria-label="Related pages">{page.links.filter(href => href !== page.route && !href.startsWith('/free-feasibility')).map(href => <Link key={href} href={href}>{linkLabels[href] || 'Explore your options'}</Link>)}</nav></section>
 <section className="pilot-faq"><h2>Your Questions, Answered</h2><div>{page.faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</div></section>
 <section className="pilot-final"><div><h2>{page.cta}</h2><p>Share your property and goals to discuss the next step.</p></div><Link href={assessmentHref} className="pilot-button">{page.cta}</Link></section>
 </div>;
}
