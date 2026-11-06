import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ORANGE_COUNTY_CITIES } from '@/lib/data';
import { LOCATION_CONTENT } from '@/lib/location-content';

interface LocationPageProps { params: Promise<{ slug: string }> }
export function generateStaticParams() { return ORANGE_COUNTY_CITIES.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = ORANGE_COUNTY_CITIES.find(c => c.slug === slug);
  if (!city || !LOCATION_CONTENT[slug]) return {};
  const title = `ADU Builders & Planning in ${city.name} | ADU Alliance`;
  const description = `Explore ADU options in ${city.name}, local application resources and independent contractor connections. Start with a property assessment.`;
  const url = `https://adualliance.com/locations/${slug}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}
const services = [
  ['adu-design', 'Design and plans', 'Compare layouts and prepare property-specific drawings.'],
  ['adu-permits', 'Permit planning', 'Discuss application documents and agency corrections.'],
  ['detached-adu', 'Detached ADUs', 'Explore a separate backyard dwelling and the site work it needs.'],
  ['garage-conversion', 'Garage conversions', 'Review an existing structure before choosing a conversion layout.'],
  ['junior-adu', 'Junior ADUs', 'Explore a smaller unit within a qualifying single-family home.'],
];
export default async function CityLocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const city = ORANGE_COUNTY_CITIES.find(c => c.slug === slug);
  const content = LOCATION_CONTENT[slug];
  if (!city || !content) notFound();
  const isCommunity = slug === 'coto-de-caza';
  const url = `https://adualliance.com/locations/${slug}`;
  const assessment = `/free-feasibility?city=${slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: `ADU planning and contractor connections in ${city.name}`, url,
    provider: { '@id': 'https://adualliance.com/#organization' },
    areaServed: { '@type': isCommunity ? 'Place' : 'City', name: `${city.name}, California`, containedInPlace: { '@type': 'AdministrativeArea', name: 'Orange County, California' } },
    description: `ADU planning resources and independent contractor connections for homeowners in ${city.name}.`,
  };
  const breadcrumbs = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://adualliance.com/' },
    { '@type': 'ListItem', position: 2, name: 'Orange County locations', item: 'https://adualliance.com/locations' },
    { '@type': 'ListItem', position: 3, name: city.name, item: url },
  ] };
  const nearby = content.nearby.map(s => ORANGE_COUNTY_CITIES.find(c => c.slug === s)).filter((c): c is NonNullable<typeof c> => Boolean(c));
  const questions = [...content.questions,
    { q: `How does ADU Alliance help with my ${city.name} project?`, a: 'ADU Alliance connects homeowners with independent contractor partners. Your selected professional confirms the design, permit coordination and construction scope. You contract directly with the contractor; verify licensing, insurance and references before signing.' },
    { q: 'What should I bring to a property assessment?', a: 'Share the property address, your intended use, photographs and any existing plans. Include known access constraints, existing structures and utility information. A property assessment is an initial planning discussion; the responsible authority decides permit applications.' },
  ];
  return <div className="pilot-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, '\\u003c') }} />
    <header className="pilot-hero"><div><p className="text-brand-amber text-sm">{city.name} · {isCommunity ? 'Unincorporated Orange County' : 'Orange County, California'}</p><h1>ADU Builders &amp; Planning in {city.name}</h1><p>{content.intro}</p><Link href={assessment} className="pilot-button">Request a Property Assessment</Link><p className="text-sm">Connect with independent contractor partners. Project suitability and availability depend on your property.</p></div><div><img src="/images/localized/adu-planning-960.webp" srcSet="/images/localized/adu-planning-640.webp 640w, /images/localized/adu-planning-960.webp 960w, /images/localized/adu-planning-1280.webp 1280w" sizes="(max-width: 767px) 100vw, 50vw" alt="Backyard dwelling design inspiration, not a completed local project" width="2752" height="1536" fetchPriority="high" /><p className="text-xs text-slate-400 mt-3">Design inspiration. Suitability depends on your site and approvals.</p></div></header>
    <div className="pilot-sections"><section><h2>Your {city.name} Planning Authority</h2><div><p><strong>{content.authority}</strong></p><p>{isCommunity ? 'Coto de Caza is an unincorporated community. Confirm the county jurisdiction for your parcel.' : `Start with the City of ${city.name} for property-specific planning and building questions. Confirm the actual parcel jurisdiction if your mailing address differs from the city boundary.`}</p><a href={content.source}>Official {city.name} planning resource ↗</a><p className="text-sm">Resource checked 4 November 2026. Confirm current requirements and application materials with the authority.</p></div></section>
      {content.steps.map(step => <section key={step.title}><h2>{step.title}</h2><div><p>{step.text}</p></div></section>)}
      <section><h2>Compare ADU Options for Your Property</h2><div><p>Choose a service path that fits the building and space you have. Discuss the responsible professionals and the written scope before moving forward.</p><nav aria-label={`ADU services for ${city.name}`}>{services.map(([s, label, description]) => <Link href={`/services/${s}`} key={s}><strong>{label}</strong><span className="block text-sm">{description}</span></Link>)}</nav></div></section>
      <section><h2>From Property Review to a Written Scope</h2><div><p>Describe your goals and compare practical options before purchasing plans. Ask the selected contractor for an itemized proposal covering design, approvals, sitework, utilities, construction and finishes, including allowances and exclusions.</p><p>Confirm the current license, insurance, references and responsibility for each stage. Review and construction schedules depend on the property, document completeness and agency requirements.</p><Link href="/process">Explore the project process →</Link></div></section></div>
    <section className="pilot-faq"><h2>{city.name} ADU Questions</h2><div>{questions.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>
    <section className="pilot-resources"><h2>Explore Nearby Communities</h2><nav aria-label={`Communities near ${city.name}`}>{nearby.map(c => <Link key={c.slug} href={`/locations/${c.slug}`}>{c.name} →</Link>)}<Link href="/locations">All Orange County locations →</Link></nav><p>Each parcel follows its own responsible authority and application requirements.</p></section>
    <section className="pilot-final"><div><h2>Discuss Your {city.name} Property</h2><p>Share your address and goals to explore a suitable next step.</p></div><Link href={assessment} className="pilot-button">Request a Property Assessment</Link></section>
  </div>;
}
