import type { BlogPostData } from './blog';

/** First approved ADU Alliance guide. Publication authorized 7 November 2026. */
export const B1_TAX_POST: BlogPostData = {
  slug: 'orange-county-adu-property-taxes-prop-13-guide',
  status: 'published',
  publishedAt: '2026-11-07',
  title: 'How an ADU Affects Property Taxes in Orange County',
  excerpt: 'An ADU generally adds taxable value without resetting the assessment of your unaffected home. Learn how valuation, hypothetical tax calculations and supplemental bills fit together.',
  category: 'Taxes & Finance',
  readTime: '6 min read',
  seoTitle: 'ADU Property Taxes in Orange County: Prop 13 & Bills',
  seoDescription: 'Learn how new ADU construction affects assessed value in Orange County, how supplemental bills work, and which county office handles each question.',
  noIndex: false,
  featuredImage: {
    url: '/images/blog/adu-property-tax-guide.webp',
    alt: 'Illustration of a main home and backyard ADU for a property-tax planning guide',
    caption: 'Illustrative ADU planning image; not a completed ADU Alliance project.',
    width: 1536,
    height: 1024,
  },
  author: {
    type: 'Organization',
    name: 'ADU Alliance',
    role: 'Educational planning resources',
    bio: 'ADU Alliance publishes planning information for Orange County homeowners exploring ADUs and independent contractor connections.',
    avatarUrl: '/images/logo-transparent.png',
  },
  tableOfContents: [
    { id: 'prop-13', title: 'Does an ADU reset your existing assessment?', level: 2 },
    { id: 'assessed-value', title: 'Construction cost and assessed value differ', level: 2 },
    { id: 'county-roles', title: 'Which county office handles what?', level: 2 },
    { id: 'tax-example', title: 'A hypothetical annual tax example', level: 2 },
    { id: 'supplemental-bills', title: 'How supplemental bills work', level: 2 },
    { id: 'planning-checklist', title: 'A practical planning checklist', level: 2 },
  ],
  content: `
<p><strong>Building an ADU generally does not cause your unaffected existing home and land to be reassessed at today's market value.</strong> Instead, taxable new construction adds a new assessed-value component. That can increase your property taxes and lead to separate supplemental bills.</p>
<p>The distinction matters when you plan an Orange County ADU: your construction budget, the Assessor's valuation and the tax bill are three different things. This guide explains the general framework, not the assessment or tax liability for a particular property.</p>

<h2 id="prop-13">Does an ADU reset your existing assessment?</h2>
<p>The <a href="https://boe.ca.gov/proptaxes/new-construction/">California Board of Equalization's new-construction guidance</a> distinguishes the newly constructed portion from the remainder of a property. A new base-year value is established for taxable new construction; the base-year value of the unaffected remainder is not changed by that construction alone.</p>
<p>That does not freeze your existing assessment forever. Orange County's <a href="https://ocassessor.gov/real-property-assessments/proposition-13">Proposition 13 explanation</a> describes annual inflation adjustments to the factored base-year value, capped at 2%. Its <a href="https://www.ocassessor.gov/news-information/glossary-terms">assessment glossary</a> also explains why taxable value can sometimes rise by more than 2%, including after a temporary reduction in value. A separate ownership change can have its own assessment consequences.</p>
<p>Keep the scope of the work clear. An ADU addition is different from a project that also rebuilds or substantially rehabilitates part of the main home. Ask the Assessor how the actual work affects the existing and new components rather than assuming every part of the old assessment stays untouched.</p>

<h2 id="assessed-value">Construction cost and assessed value differ</h2>
<p>The <a href="https://www.boe.ca.gov/proptaxes/newconstructionproperty.htm">BOE's valuation guidance</a> explains that the added market value of new construction does not necessarily equal its construction cost. Do not treat a contractor's invoice as a guaranteed assessment.</p>
<p>Converting a garage can also be assessable even when the building's footprint does not grow. BOE includes conversion to living space among its examples of new construction. Ask how your specific conversion and any retained improvements will be valued; there is no automatic tax-free conversion rule.</p>
<p>Orange County's <a href="https://www.ocassessor.gov/real-property-assessments/building-something-new">Building Something New?</a> page distinguishes taxable additions and rehabilitation from ordinary maintenance and repairs. Keep plans, permits, project descriptions and cost records so you can explain what changed.</p>

<h2 id="county-roles">Which county office handles what?</h2>
<p>Send your question to the office responsible for it. The <a href="https://boe.ca.gov/proptaxes/faqs/ptbi.htm">BOE's property-tax bill FAQ</a> separates the roles:</p>
<ul>
<li><strong>Assessor:</strong> establishes assessed value and handles assessment, exemption and exclusion questions.</li>
<li><strong>Auditor-Controller:</strong> computes taxes. Orange County's <a href="https://ocauditor.gov/about/central-accounting/property-tax-accounting/">Property Tax Accounting office</a> calculates rates, applies them to assessed value and adds direct charges to determine liability.</li>
<li><strong>Treasurer-Tax Collector:</strong> mails tax bills and collects payment. Contact this office about a bill, payment or delinquency.</li>
</ul>
<p>Orange County describes the general property-tax rate as 1% plus voter-approved bonded debt. The total bill may also include separate direct charges and special taxes. Review your parcel's bill rather than using a countywide percentage as a promise. Ask the named taxing agency about a direct charge or special-tax item; the example below does not model those charges.</p>

<h2 id="tax-example">A hypothetical annual tax example</h2>
<p><strong>These are invented inputs to show arithmetic, not an Orange County rate quote or an estimate for your ADU.</strong> Assume an existing assessed value of $450,000, an added taxable ADU value of $220,000 and an illustrative total ad valorem rate of 1.05%. Hold the other inputs constant for this comparison.</p>
<table>
<caption>Illustrative annual ad valorem tax only; direct charges and special taxes excluded</caption>
<thead><tr><th scope="col">Component</th><th scope="col">Assumed assessed value</th><th scope="col">Assumed rate</th><th scope="col">Annual tax</th></tr></thead>
<tbody>
<tr><th scope="row">Existing home and land</th><td>$450,000</td><td>1.05%</td><td>$4,725</td></tr>
<tr><th scope="row">Added ADU value</th><td>$220,000</td><td>1.05%</td><td>$2,310</td></tr>
<tr><th scope="row">Combined property</th><td>$670,000</td><td>1.05%</td><td>$7,035</td></tr>
</tbody>
</table>
<p>The illustrative increase is $220,000 × 0.0105 = <strong>$2,310 per year</strong>, equivalent to $192.50 per month for budgeting. That monthly equivalent is not a payment schedule. The $220,000 is an assumed assessed-value addition, not an assumed construction price.</p>
<p>This simplified comparison leaves out exemptions, annual value adjustments, supplemental-bill proration, direct charges and special taxes. It does not calculate rental-income taxes, depreciation, capital gains or financing costs.</p>

<h2 id="supplemental-bills">How supplemental bills work</h2>
<p>A supplemental assessment addresses a taxable value change between annual rolls. The <a href="https://www.boe.ca.gov/proptaxes/supplemental-assessment/">BOE's supplemental assessment guide</a> explains that the tax adjustment takes effect on the first day of the month after the event.</p>
<p>For one completion event, the usual pattern described in <a href="https://www.octreasurer.gov/page/computation-supplemental-taxes">Orange County's computation guide</a> is:</p>
<ul>
<li><strong>January through May:</strong> two supplemental bills: one for the remaining applicable months through June 30, and another for the following full fiscal year.</li>
<li><strong>June:</strong> one bill for the full fiscal year beginning July 1. There is no supplemental assessment for the fiscal year ending that June.</li>
<li><strong>July through December:</strong> one bill for the applicable remaining months of that fiscal year, ending June 30.</li>
</ul>
<p>One bill is not the same as one installment. Follow the payment and delinquency dates printed on each bill. Multiple completion or ownership events can produce additional supplemental bills.</p>
<h3>Which completion date counts?</h3>
<p>BOE describes completion in terms of when the property is available for use and explains that the Assessor exercises judgment. Do not assume your contractor's last invoice automatically establishes that date. Construction still in progress on January 1 can also be assessed before final completion.</p>
<h3>Does your mortgage account cover it?</h3>
<p><a href="https://www.octreasurer.gov/Top5DOs">Orange County warns that most lenders do not pay supplemental bills.</a> Check with your lender about your impound or escrow arrangements. Keep the regular annual bill and supplemental bills together, and confirm who will pay each one.</p>

<h2 id="planning-checklist">A practical planning checklist</h2>
<ol>
<li><strong>Find your current documents.</strong> Keep the annual bill and assessment notice, parcel number, planned scope and any later supplemental notices.</li>
<li><strong>Separate the assumptions.</strong> Record construction costs, an assumed assessment increase and a tax-rate assumption independently. Replace assumptions with agency information when available.</li>
<li><strong>Allow for billing timing.</strong> Plan a reserve for supplemental bills without assuming a particular mailing date or that your lender will pay them.</li>
<li><strong>Ask about the whole project.</strong> Include garage conversion, demolition or main-home alterations when speaking to the Assessor.</li>
<li><strong>Keep income-tax advice separate.</strong> Discuss rental income, deductions and a future sale with an appropriately qualified tax adviser.</li>
</ol>
<p>For the construction side of your plan, compare <a href="/services/adu-design">design deliverables</a> and <a href="/services/adu-permits">permit responsibilities</a>. Our <a href="/calculator">budget scenario calculator</a> uses your own construction inputs; it is not a property-tax calculator.</p>
<p>To discuss your property and project stage, <a href="/free-feasibility">request a property assessment</a>. ADU Alliance provides planning information and independent contractor connections. The county offices determine assessment and tax matters; an ADU planning discussion does not establish your tax liability.</p>
`,
  sources: [
    { title: 'California BOE: Survey Topic — New Construction', url: 'https://boe.ca.gov/proptaxes/new-construction/', note: 'Newly constructed portion versus unaffected remainder.' },
    { title: 'California BOE: New Construction', url: 'https://www.boe.ca.gov/proptaxes/newconstructionproperty.htm', note: 'Added market value, conversion examples, completion and work in progress.' },
    { title: 'Orange County Assessor: Proposition 13', url: 'https://ocassessor.gov/real-property-assessments/proposition-13', note: 'Factored base-year value and annual inflation adjustment.' },
    { title: 'Orange County Assessor: Glossary of Terms', url: 'https://www.ocassessor.gov/news-information/glossary-terms', note: 'General rate and exceptions to a simple 2% taxable-value assumption.' },
    { title: 'Orange County Assessor: Building Something New?', url: 'https://www.ocassessor.gov/real-property-assessments/building-something-new', note: 'Taxable improvements versus maintenance and repair.' },
    { title: 'California BOE: Property Tax Bill FAQ', url: 'https://boe.ca.gov/proptaxes/faqs/ptbi.htm', note: 'County department responsibilities.' },
    { title: 'Orange County Auditor-Controller: Property Tax Accounting', url: 'https://ocauditor.gov/about/central-accounting/property-tax-accounting/', note: 'Rates, assessed value and direct charges.' },
    { title: 'California BOE: Supplemental Assessment', url: 'https://www.boe.ca.gov/proptaxes/supplemental-assessment/', note: 'Effective month and supplemental assessment framework.' },
    { title: 'Orange County Treasurer-Tax Collector: Computation of Supplemental Taxes', url: 'https://www.octreasurer.gov/page/computation-supplemental-taxes', note: 'One or two bills; June rolls into the next fiscal year.' },
    { title: 'Orange County Treasurer-Tax Collector: Top 5 Payment Dos and Don’ts', url: 'https://www.octreasurer.gov/Top5DOs', note: 'Supplemental bills and lender payment responsibility.' },
  ],
  faq: [
    { question: 'Will building an ADU reset the assessed value of my whole property?', answer: 'Generally, taxable new construction adds a new assessed-value component without resetting the base-year value of the unaffected remainder. Separate ownership changes or work to the main home may have additional consequences.' },
    { question: 'Is the ADU assessment always equal to my construction cost?', answer: 'No. The Assessor determines the added taxable market value. Construction cost is not a guaranteed assessed-value amount.' },
    { question: 'What happens if my ADU is completed in June?', answer: 'For one supplemental completion event in June, the usual result is one supplemental bill for the full fiscal year beginning July 1, rather than a bill for the fiscal year ending that June.' },
    { question: 'Will my mortgage lender automatically pay supplemental taxes?', answer: 'Do not assume so. Orange County warns that most lenders do not pay supplemental bills. Confirm the arrangement with your lender and follow the dates on the bill.' },
  ],
};
