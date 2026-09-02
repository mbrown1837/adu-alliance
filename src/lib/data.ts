import { ADUService, ADUModel, CaseStudy, CityInfo, TeamMember, FaqItem, BlogPost } from './types';

// ==========================================
// 1. BASE STRUCTURE: ADU BUILD LA 5 SERVICES
// ==========================================
export const ADU_SERVICES: ADUService[] = [
  {
    id: 'adu-design',
    number: '01',
    title: 'ADU Plans & Architectural Design',
    slug: 'adu-design',
    category: 'Architecture & Engineering',
    tagline: 'Custom 3D Drawings Engineered for Faster City Approvals',
    description: 'Work directly with dedicated ADU architects who understand Orange County municipal zoning. We craft site-specific 3D floor plans, structural engineering calculations, and Title 24 energy compliance sets that maximize your usable yard space and rental ROI.',
    imageUrl: 'https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FADU%2FModern_ADU_in_suburban_backyard_202607271417.jpeg&w=3840&q=75',
    features: [
      'Custom 3D exterior & interior rendering walkthroughs',
      'Structural engineering calculations (Title 24 compliant)',
      'Site plan mapping for setbacks, easements & utilities',
      'Optimized for natural light, privacy & rental value',
    ],
    turnaroundTime: '2 to 4 Weeks',
  },
  {
    id: 'adu-permits',
    number: '02',
    title: 'ADU Permits & City Approvals',
    slug: 'adu-permits',
    category: 'Municipal Permitting',
    tagline: '100% In-House Permit Expediting Across All 34 OC Cities',
    description: 'Our in-house permit team submits directly to your local building department (Irvine, Newport Beach, Anaheim, Santa Ana, Costa Mesa, etc.). We manage all plan check reviews, city comments, and correction notices until your building permit is fully issued.',
    imageUrl: 'https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FADU%2FModern_ADU_in_suburban_backyard_202607271417_2.jpeg&w=3840&q=75',
    features: [
      'Direct submissions to all Orange County building departments',
      'Prompt resolution of city plan check correction notices',
      'HOA architectural review and compliance coordination',
      'Guaranteed permit approval with zero contractor handoffs',
    ],
    turnaroundTime: '6 to 12 Weeks (City Dependent)',
  },
  {
    id: 'detached-adu',
    number: '03',
    title: 'Detached ADU Construction',
    slug: 'detached-adu',
    category: 'Ground-Up Construction',
    tagline: 'Custom Standalone Backyard Homes & Guest Cottages',
    description: 'Build a private, standalone dwelling in your backyard. From compact 380 sq ft studios to spacious 1,200 sq ft 2-bedroom luxury residences, our licensed craftsmen handle excavation, foundation, framing, plumbing, electrical, and turnkey luxury finishes.',
    imageUrl: 'https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FADU%2FModern_ADU_in_backyard_202607271417.jpeg&w=3840&q=75',
    features: [
      'Engineered slab or raised foundation & structural framing',
      'Independent utility connections & separate subpanel',
      'Designer kitchens, quartz countertops & walk-in showers',
      'Dedicated project manager on-site through final inspection',
    ],
    turnaroundTime: '3 to 5 Months Build Time',
  },
  {
    id: 'garage-conversion',
    number: '04',
    title: 'Garage to ADU Conversion',
    slug: 'garage-conversion',
    category: 'Conversion Specialist',
    tagline: 'Transform Existing Footprint for Maximum Cash Flow',
    description: 'Convert your underutilized 2-car garage into a legal, permitted 1-bedroom or studio rental unit. Because the existing foundation and framing are utilized, garage conversions offer the fastest timeline and highest cash-on-cash rental return in Orange County.',
    imageUrl: 'https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FADU%2FModern_ADU_in_backyard_202607271417_2.jpeg&w=3840&q=75',
    features: [
      'Zero yard space sacrificed & existing envelope repurposed',
      'No replacement parking required under California state law',
      'Plumbing trenching, soundproof insulation & drywalled interior',
      'Typical rental returns of $2,200 to $2,800/month in OC',
    ],
    turnaroundTime: '10 to 14 Weeks Build Time',
  },
  {
    id: 'junior-adu',
    number: '05',
    title: 'Junior ADU (JADU) & Attached Extensions',
    slug: 'junior-adu',
    category: 'Interior & Attached',
    tagline: 'Create Living Space Within or Attached to Primary Home',
    description: 'Create a compliant Junior ADU (up to 500 sq ft) within your existing home footprint or build an attached suite extension. Ideal for aging parents, college students, or private rental income with lower upfront construction investment.',
    imageUrl: 'https://www.adubuildlosangeles.com/_next/image?url=%2Fimages%2Fnew-images%2FADU%2FModern_ADU_in_backyard_202607271417_3.jpeg&w=3840&q=75',
    features: [
      'Up to 500 sq ft space with private exterior entrance',
      'Efficiency kitchen & full private bathroom',
      'Seamless architectural blending with main residence',
      'Fastest municipal permit approval pathway',
    ],
    turnaroundTime: '8 to 12 Weeks Build Time',
  },
];

// ==========================================
// 2. VISUAL POLISH & MODEL EXPERIENCE: EVO
// ==========================================
export const EVO_MODELS: ADUModel[] = [
  {
    id: 'compact',
    name: 'Compact',
    slug: 'compact',
    sqft: 350,
    startingPrice: 145800,
    priceFormatted: '$145,800',
    dimensions: 'Studio · 1 Bath · 350 sq ft',
    bedrooms: 'Studio',
    bathrooms: '1 Bath',
    imageUrl: 'https://www.evoadu.com/assets/images/Home_Pic_2_Compact_Home.jpg',
    tagline: 'Smart, efficient living space',
    description: 'A compact studio layout that maximizes every square inch. Full kitchen, private bathroom, and ample built-in storage.',
    features: ['Full-size kitchen with quartz counters', 'Standing-seam metal roof', 'Mini-split heat pump HVAC', 'Vaulted ceiling with LED lighting'],
  },
  {
    id: 'studio',
    name: 'Studio',
    slug: 'studio',
    sqft: 430,
    startingPrice: 157920,
    priceFormatted: '$157,920',
    dimensions: 'Studio + Office · 1 Bath · 430 sq ft',
    bedrooms: 'Studio + Nook',
    bathrooms: '1 Bath',
    imageUrl: 'https://www.evoadu.com/assets/images/Home_Pic_3_Studio_Home.jpg',
    tagline: 'Studio living with dedicated office niche',
    description: 'Generous open floor plan featuring a dedicated work-from-home office nook, full designer bath, and floor-to-ceiling windows.',
    features: ['Dedicated workspace with built-ins', 'Frameless glass walk-in shower', 'High-efficiency Low-E windows', 'All-electric solar-ready'],
  },
  {
    id: 'one',
    name: 'One',
    slug: 'one',
    sqft: 560,
    startingPrice: 179680,
    priceFormatted: '$179,680',
    dimensions: '1 Bed · 1 Bath · 560 sq ft',
    bedrooms: '1 Bedroom',
    bathrooms: '1 Bath',
    imageUrl: 'https://www.evoadu.com/assets/images/Home_Pic_4_One_Home.jpg',
    tagline: 'Our signature one-bedroom retreat',
    description: 'Private master bedroom sanctuary with walk-in closet, expansive open-plan living and dining, and luxury oak cabinetry throughout.',
    features: ['Private bedroom with walk-in closet', 'Full kitchen island with bar seating', 'In-unit washer/dryer closet', 'Exterior fiber-cement cladding'],
  },
  {
    id: 'two',
    name: 'Two',
    slug: 'two',
    sqft: 715,
    startingPrice: 203050,
    priceFormatted: '$203,050',
    dimensions: '2 Bed · 1 Bath · 715 sq ft',
    bedrooms: '2 Bedrooms',
    bathrooms: '1 Bath',
    imageUrl: 'https://www.evoadu.com/assets/images/Home_Pic_5_Two_Home.jpg',
    tagline: 'Spacious two-bedroom living',
    description: 'Two separate bedrooms on opposite sides for complete sound privacy. Ideal for rental income or multi-generational families.',
    features: ['Two full independent bedrooms', 'Generous living room with glass sliders', 'Steel-framed structural core', 'All-electric heating & cooling'],
  },
  {
    id: 'two-plus',
    name: 'Two+',
    slug: 'two-plus',
    sqft: 800,
    startingPrice: 238000,
    priceFormatted: '$238,000',
    dimensions: '2 Bed · 2 Bath · 800 sq ft',
    bedrooms: '2 Bedrooms',
    bathrooms: '2 Baths',
    imageUrl: 'https://www.evoadu.com/assets/images/Home_Pic_6_TwoPlus_Home.jpg',
    tagline: 'Dual master suites with luxury finishes',
    description: 'Two complete master suites, each with private en-suite bathroom. The ultimate high-yield investment or luxury guest house.',
    features: ['Dual private master suites with en-suite baths', 'Chef kitchen with custom oak cabinetry', 'Smart home energy monitoring', 'Solar-ready prewired infrastructure'],
  },
];

export const INTERIORS_GALLERY = [
  {
    title: 'Open living, seamlessly connected',
    description: 'Living room, kitchen, and dining flow together in one bright, airy space. Custom oak cabinetry and built-in storage keep everything organized.',
    imageUrl: 'https://www.evoadu.com/assets/images/Home_Pic_12_Living_Home.jpg',
  },
  {
    title: 'Bedrooms that feel like a retreat',
    description: 'Vaulted wood ceilings, warm natural light, and a full walk-in closet. A private sanctuary designed for rest and comfort.',
    imageUrl: 'https://www.evoadu.com/assets/images/Interior_1.jpg',
  },
  {
    title: 'Cozy evenings, elevated spaces',
    description: 'Vaulted ceilings with recessed lighting create a warm, inviting atmosphere. Generous proportions make every moment feel relaxed.',
    imageUrl: 'https://www.evoadu.com/assets/images/Living_2.jpg',
  },
  {
    title: 'A workspace that works for you',
    description: 'Thoughtfully proportioned spaces with built-in shelving and abundant natural light. Perfect for a home office or quiet reading corner.',
    imageUrl: 'https://www.evoadu.com/assets/images/Interior_3.jpg',
  },
  {
    title: 'Modern living, thoughtfully designed',
    description: 'Clean lines, integrated appliances, and sun-drenched interiors. A space that feels open, bright, and ready to live in.',
    imageUrl: 'https://www.evoadu.com/assets/images/Living_3.jpg',
  },
  {
    title: 'Rest, reimagined',
    description: 'Soaring vaulted ceilings, warm wood tones, and generous built-in wardrobe storage. A bedroom designed to feel spacious, calm, and yours.',
    imageUrl: 'https://www.evoadu.com/assets/images/Home_Pic_13_Bedroom_Home.jpg',
  },
];

// ==========================================
// 3. PROCESS TRANSPARENCY: LADU GANTT & PHASES
// ==========================================
export const LADU_PROJECT_PLAN = [
  {
    phase: '01',
    title: 'Free Site Visit & Feasibility',
    timeline: 'Week 0',
    duration: '30-Minute Lot Walk',
    desc: 'An in-house engineer walks your property, measures exact setbacks, locates sewer lines, and confirms municipal zoning parameters.',
  },
  {
    phase: '02',
    title: 'Design & 3D Drafting',
    timeline: 'Weeks 1–4',
    duration: '4 Weeks',
    desc: 'Custom architectural plan drafting, structural calculations, and Title 24 energy compliance tailored to your household goals.',
  },
  {
    phase: '03',
    title: 'City Permits & Approvals',
    timeline: 'Weeks 5–14',
    duration: '6 to 10 Weeks',
    desc: 'We handle 100% of planning submissions and correction responses with your local OC city department until approved.',
  },
  {
    phase: '04',
    title: 'Financing Lock',
    timeline: 'Weeks 14–16',
    duration: '2 Weeks',
    desc: 'We assist with construction loans, HELOCs, HEA, or CalHFA $40,000 grant distributions.',
  },
  {
    phase: '05',
    title: 'Turnkey Construction',
    timeline: 'Weeks 16–32',
    duration: '4 to 5 Months',
    desc: 'Foundation, framing, MEP rough-in, luxury interior finishes, and weekly photo/video progress reports.',
  },
  {
    phase: '06',
    title: 'Final Inspection & Keys',
    timeline: 'Week 32+',
    duration: 'Move-In Ready',
    desc: 'Final municipal inspector sign-off, certificate of occupancy, and walkthrough key handover.',
  },
];

// ==========================================
// 4. LEAD MAGNETS & MULTIPLE ENTRY POINTS: ARC
// ==========================================
export const ENTRY_PATHWAYS = [
  {
    badge: 'WE COME TO YOU',
    title: 'On-Premise Lot Walk',
    subtitle: 'Free 30-Minute Property Feasibility',
    description: 'An ADU specialist walks your Orange County property, checks setbacks, sewer depth, and maps out your options on the spot.',
    cta: 'Schedule On-Site Walk',
    href: '/estimate?type=site-walk',
    popular: true,
  },
  {
    badge: 'SKIP THE DRIVE',
    title: 'Video Consultation',
    subtitle: 'Zoom with a Senior Planner',
    description: 'Share your property screen on Zoom. Get instant setback readouts, 3D model recommendations, and budget ranges.',
    cta: 'Book Video Call',
    href: '/estimate?type=video-call',
    popular: false,
  },
  {
    badge: 'QUICK & EASY',
    title: 'Phone Consultation',
    subtitle: '15-Minute Expert Q&A',
    description: 'Prefer to talk? Call our Irvine planning desk directly for immediate answers on costs, city permits, and ROI.',
    cta: 'Call (657) 298-4061',
    href: 'tel:6572984061',
    popular: false,
  },
  {
    badge: 'INSTANT DOWNLOAD',
    title: '2026 OC ADU Guide',
    subtitle: '28-Page Comprehensive PDF',
    description: 'Line-item cost tables, city permit timelines, floor plans, and rental comps across all 34 Orange County cities.',
    cta: 'Download Free PDF',
    href: '/estimate?type=guide-download',
    popular: false,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Marcus Vance',
    role: 'Principal Architectural Designer',
    experience: '16+ Years in California Residential Architecture',
    imageUrl: 'https://aduresourcecenter.com/images/team/dani.webp',
    credentials: 'AIA Associate · LEED AP · 300+ California Permits Approved',
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Permitting & City Plan Check',
    experience: '12+ Years with Southern California Building Departments',
    imageUrl: 'https://aduresourcecenter.com/images/team/Anahita-K.webp',
    credentials: 'Ex-Municipal Plan Checker · Orange County Permitting Specialist',
  },
  {
    name: 'Carlos Mendez',
    role: 'Senior Project Captain & General Contractor',
    experience: '18+ Years Turnkey Construction Management',
    imageUrl: 'https://aduresourcecenter.com/images/team/Emin.webp',
    credentials: 'CA General Contractor Class B #1094821 · OSHA 30 Certified',
  },
];

// ==========================================
// 5. PROOF & CASE STUDIES
// ==========================================
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'echo-park-garage',
    title: 'The Newport Beach Garage Transformation',
    location: 'Newport Beach, CA',
    type: 'Garage Conversion ADU',
    sqft: 420,
    cost: '$125K All-In Scope',
    permitWeeks: '9 Weeks Permit',
    rentalIncome: '$2,600 / month',
    beforeImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-1/before.jpg',
    afterImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-1/after.jpg',
    description: 'A cluttered detached 2-car garage converted into a bright, contemporary 1-bedroom ADU with vaulted ceilings, custom oak cabinetry, and full in-unit laundry.',
    highlights: [
      'Approved through city plan check in 9 weeks',
      'Currently producing $2,600/month in passive rental income',
      'Estimated $150,000+ added property equity',
    ],
  },
  {
    id: 'silver-lake-studio',
    title: 'The Irvine Modern Detached Studio',
    location: 'Irvine, CA (Woodbridge)',
    type: 'Detached Backyard ADU',
    sqft: 560,
    cost: '$185K All-In Scope',
    permitWeeks: '11 Weeks Permit',
    rentalIncome: '$2,850 / month',
    beforeImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-2/before.jpg',
    afterImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-2/after.jpg',
    description: 'Ground-up custom detached 1-bedroom ADU featuring floor-to-ceiling sliding glass doors, mini-split climate control, and a private landscaped patio.',
    highlights: [
      '100% City of Irvine permit approval with zero revisions',
      'Turnkey single contract: design, foundation to final keys',
      'Built for aging parents with zero-threshold accessible shower',
    ],
  },
];

export const TRUST_PILLARS = [
  {
    number: '01',
    title: 'Licensed General Contractor (B)',
    description: 'ADU Alliance holds an active California General Contractor (B) license #1094821 with comprehensive general liability and workers compensation coverage.',
  },
  {
    number: '02',
    title: '200+ ADUs Completed in Southern California',
    description: 'Our portfolio spans detached backyard builds, garage conversions, JADUs, and attached extensions across every major Orange County municipality.',
  },
  {
    number: '03',
    title: '15+ Years ADU-Exclusive Focus',
    description: 'Many contractors treat ADUs as a side gig. We focus exclusively on ADU design, permitting, and construction every single day.',
  },
  {
    number: '04',
    title: 'Transparent, Fixed-Price Contracts',
    description: 'We do not use open-ended billing or surprise change-orders. Each scope starts with clear, itemized pricing covering architecture, permits, and construction.',
  },
  {
    number: '05',
    title: 'In-House Permit Management Across 34 Cities',
    description: 'We submit and manage permits directly with Irvine, Newport Beach, Anaheim, Santa Ana, Huntington Beach, and local building departments to prevent avoidable delays.',
  },
  {
    number: '06',
    title: 'Single-Source Design-Build Accountability',
    description: 'One team, one contract, and one dedicated project manager from initial lot assessment through final city inspection and key handover.',
  },
];

export const ORANGE_COUNTY_CITIES: CityInfo[] = [
  {
    name: 'Irvine',
    slug: 'irvine',
    county: 'Orange County',
    population: '310,000',
    avgRent: '$2,800 - $3,600/mo',
    permitTurnaroundWeeks: '8 - 14 wks',
    keyZoningNotes: 'Allows up to 1,200 sq ft detached ADU + 500 sq ft JADU. 4ft rear/side setbacks strictly enforced. HOA aesthetic rules must comply with AB 1033.',
    isPriority: true,
  },
  {
    name: 'Newport Beach',
    slug: 'newport-beach',
    county: 'Orange County',
    population: '85,000',
    avgRent: '$3,200 - $4,500/mo',
    permitTurnaroundWeeks: '10 - 16 wks',
    keyZoningNotes: 'Coastal zone properties require Coastal Commission exemption review. High rental demand. Pre-engineered plans expedite city plan check.',
    isPriority: true,
  },
  {
    name: 'Costa Mesa',
    slug: 'costa-mesa',
    county: 'Orange County',
    population: '111,000',
    avgRent: '$2,500 - $3,400/mo',
    permitTurnaroundWeeks: '6 - 12 wks',
    keyZoningNotes: 'Very ADU-friendly municipal process. Fast turnaround on garage conversions and junior ADUs (JADUs).',
    isPriority: true,
  },
  {
    name: 'Huntington Beach',
    slug: 'huntington-beach',
    county: 'Orange County',
    population: '198,000',
    avgRent: '$2,600 - $3,500/mo',
    permitTurnaroundWeeks: '8 - 14 wks',
    keyZoningNotes: 'Allows up to 16-18ft height limits for detached single-story. Excellent rental yields near beach corridors.',
    isPriority: true,
  },
  {
    name: 'Anaheim',
    slug: 'anaheim',
    county: 'Orange County',
    population: '346,000',
    avgRent: '$2,300 - $3,100/mo',
    permitTurnaroundWeeks: '7 - 12 wks',
    keyZoningNotes: 'City of Anaheim Planning Dept offers expedited review for standard pre-engineered floor plans.',
    isPriority: true,
  },
  {
    name: 'Santa Ana',
    slug: 'santa-ana',
    county: 'Orange County',
    population: '310,000',
    avgRent: '$2,200 - $2,900/mo',
    permitTurnaroundWeeks: '8 - 13 wks',
    keyZoningNotes: 'High demand for multi-generational housing and rental units. Large lots accommodate maximum 1,200 sq ft builds.',
    isPriority: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'General ADU',
    question: 'How do I know what I can legally build on my Orange County property?',
    answer: 'Before any architectural design begins, our team conducts a free property feasibility review. We analyze your lot dimensions, municipal setbacks (typically 4ft rear/side in OC), existing main house footprint, utility tie-in locations, and your city specific zoning rules. We confirm exactly what is buildable before you spend a single dollar.',
  },
  {
    category: 'Permits & HOA',
    question: 'Can my Orange County HOA prevent me from building an ADU?',
    answer: 'No. Under California law (AB 68, SB 13, and AB 1033), Homeowners Associations cannot prohibit the construction of an ADU or JADU on single-family lots. While HOAs can enforce reasonable architectural guidelines (such as matching exterior paint tones or roof tile aesthetics), state law prevents them from blocking compliant builds.',
  },
  {
    category: 'Costs & Taxes',
    question: 'Will building an ADU trigger a full reassessment of my primary home’s property taxes?',
    answer: 'No. Under California Prop 13, adding an ADU triggers only a "partial blended reassessment" on the newly constructed square footage itself. Your primary home retains its existing protected tax valuation. Typically, an ADU adds $900 to $1,800/year in property taxes, which is vastly offset by $2,200 to $3,800+/month in rental income.',
  },
  {
    category: 'Process',
    question: 'Does ADU Alliance handle everything, or will I need to hire separate architects and subcontractors?',
    answer: 'We handle the entire project under one single contract. Our in-house team oversees feasibility, 3D architectural drawings, structural engineering, city plan check permits, and turnkey ground-up construction. You have one dedicated project manager and one accountable point of contact from kickoff to keys.',
  },
  {
    category: 'Timelines',
    question: 'How long does the complete ADU process take from start to finish?',
    answer: 'Typical projects in Orange County complete in 6 to 9 months total: 2 to 4 weeks for architectural design, 8 to 14 weeks for city plan check permit issuance, and 3 to 5 months for physical construction. Garage conversions can complete even faster (3 to 4 months total).',
  },
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Orange County ADU Laws 2026: Complete Homeowner Guide to Setbacks, Permits & AB 1033',
    slug: 'orange-county-adu-laws-2026-guide',
    excerpt: 'Everything Orange County homeowners need to know about updated 2026 ADU regulations, detached height allowances, HOA rules, and expedited municipal plan check.',
    content: `
      <h2>The 2026 California & Orange County ADU Landscape</h2>
      <p>Building an Accessory Dwelling Unit (ADU) in Orange County has never been more financially lucrative or legally streamlined. Thanks to recent legislative updates including AB 1033, California homeowners have unprecedented rights to construct secondary residences for passive rental income, multi-generational family living, or high-value equity gains.</p>
    `,
    date: 'February 2026',
    author: 'Elena Rostova (Permit Director)',
    featuredImage: 'https://www.evoadu.com/assets/images/Home_Pic_4_One_Home.jpg',
    category: 'Regulations & Permits',
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'Garage Conversion in Orange County: Complete 2026 Cost & ROI Breakdown',
    slug: 'garage-conversion-cost-orange-county-2026',
    excerpt: 'Real project scope, line-item budgets, city permit fees, and timeline expectations for converting a 2-car garage in Irvine, Newport Beach, and Anaheim.',
    content: `
      <h2>Why Garage Conversions Are the #1 ROI Home Improvement in Southern California</h2>
      <p>Converting a standard 2-car garage into a legal, permitted 1-bedroom rental unit represents the highest cash-on-cash return in residential real estate.</p>
    `,
    date: 'January 2026',
    author: 'Carlos Mendez (General Contractor)',
    featuredImage: 'https://www.adubuildlosangeles.com/images/before_and_after/collection-1/after.jpg',
    category: 'Costs & Pricing',
    readTime: '5 min read',
  },
];
