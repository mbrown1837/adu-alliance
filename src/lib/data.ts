import { ADUService, ADUModel, CaseStudy, CityInfo, FaqItem, BlogPost } from './types';

// ==========================================
// 1. BASE STRUCTURE: 5 CORE DESIGN-BUILD SERVICES
// ==========================================
export const ADU_SERVICES: ADUService[] = [
  {
    id: 'adu-design',
    number: '01',
    title: 'ADU Plans & Architectural Design',
    slug: 'adu-design',
    category: 'Architecture & Engineering',
    tagline: 'Custom 3D Drawings Engineered for Faster City Approvals',
    description: 'Work directly with dedicated ADU architects who understand Orange County municipal zoning. We craft site-specific 3D floor plans, structural engineering calculations, and Title 24 energy compliance sets that maximize your usable yard space and property value.',
    imageUrl: '/images/localized/adu_asset_c71c9d8975.jpeg',
    features: [
      'Custom 3D exterior & interior rendering walkthroughs',
      'Structural engineering calculations (Title 24 compliant)',
      'Site plan mapping for setbacks, easements & utilities',
      'Optimized for natural light, privacy & property value',
    ],
    turnaroundTime: '2 to 4 Weeks',
  },
  {
    id: 'adu-permits',
    number: '02',
    title: 'ADU Permits & City Approvals',
    slug: 'adu-permits',
    category: 'Municipal Permitting',
    tagline: 'Plan Check Support Across Orange County',
    description: 'Discuss permit-document preparation, submission and agency corrections with your selected professional. The responsible authority decides the application.',
    imageUrl: '/images/localized/adu_asset_23f3e83858.jpeg',
    features: [
      'Direct submissions to all Orange County building departments',
      'Prompt resolution of city plan check correction notices',
      'HOA architectural review and compliance coordination',
      'Permit documentation and plan-check coordination',
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
    description: 'Build a private, standalone dwelling in your backyard. From compact 350 sq ft studios to spacious 1,200 sq ft 2-bedroom luxury residences, our licensed craftsmen handle excavation, foundation, framing, plumbing, electrical, and turnkey luxury finishes.',
    imageUrl: '/images/localized/adu_asset_d6555d69cf.jpeg',
    features: [
      'Engineered slab or raised foundation & structural framing',
      'Independent utility connections & separate subpanel',
      'Designer kitchens, quartz countertops & walk-in showers',
      'Dedicated superintendent on-site through final inspection',
    ],
    turnaroundTime: '3 to 5 Months Build Time',
  },
  {
    id: 'garage-conversion',
    number: '04',
    title: 'Garage to ADU Conversion',
    slug: 'garage-conversion',
    category: 'Conversion Specialist',
    tagline: 'Transform Existing Footprint for Maximum Space Efficiency',
    description: 'Convert your underutilized 2-car garage into a legal, permitted 1-bedroom or studio living space. Because the existing foundation and framing are utilized, garage conversions offer the fastest timeline and highest cost efficiency in Orange County.',
    imageUrl: '/images/localized/adu_asset_19f8aacb8b.jpg',
    features: [
      'Zero yard space sacrificed & existing envelope repurposed',
      'No replacement parking required under California state law',
      'Plumbing trenching, soundproof insulation & drywalled interior',
      'Fastest municipal permitting and construction timeline',
    ],
    turnaroundTime: '10 to 14 Weeks Build Time',
  },
  {
    id: 'junior-adu',
    number: '05',
    title: 'Junior ADU (JADU) Planning',
    slug: 'junior-adu',
    category: 'Interior Conversion',
    tagline: 'Explore a Smaller Unit Within Your Single-Family Home',
    description: 'Explore a Junior ADU of up to 500 sq ft contained within a single-family residence. A JADU differs from an attached ADU extension; review the existing layout, access, kitchen and bathroom arrangements with your design professional and responsible authority.',
    imageUrl: '/images/localized/adu_asset_6da88e4404.jpeg',
    features: [
      'Up to 500 sq ft space with private exterior entrance',
      'Efficiency kitchen and qualifying bathroom arrangements',
      'Review of the existing home layout and unit access',
      'Property-specific eligibility and permit requirements',
    ],
    turnaroundTime: 'Confirm after property review',
  },
];

// ==========================================
// 2. CUSTOM ARCHITECTURAL LAYOUT CONCEPTS
// ==========================================
export const EVO_MODELS: ADUModel[] = [
  {
    id: 'compact',
    name: 'Studio Layout Concept',
    slug: 'compact',
    sqft: 350,
    startingPrice: 0,
    priceFormatted: 'Custom Quote Available',
    dimensions: 'Studio · 1 Bath · Approx 350 sq ft',
    bedrooms: 'Studio',
    bathrooms: '1.0 Bath',
    imageUrl: '/images/localized/adu_asset_41d6b5ffcb.jpg',
    tagline: 'Compact backyard suite custom-built on-site',
    description: 'A space-efficient custom ground-up studio layout engineered specifically for small yards and tight city setbacks.',
    features: ['Custom site-built foundation & framing', 'Full kitchen layout with custom cabinetry', 'Energy-efficient Title 24 compliance', 'Custom exterior architectural finishes'],
  },
  {
    id: 'studio',
    name: 'Executive Studio + Office Nook',
    slug: 'studio',
    sqft: 430,
    startingPrice: 0,
    priceFormatted: 'Custom Quote Available',
    dimensions: 'Studio + Work Nook · 1 Bath · Approx 430 sq ft',
    bedrooms: 'Studio + Nook',
    bathrooms: '1.0 Bath',
    imageUrl: '/images/localized/adu_asset_b783206e03.jpg',
    tagline: 'Open-concept layout with dedicated office space',
    description: 'Designed for remote professionals and high-end guest living. Custom constructed to your exact lot dimensions.',
    features: ['Dedicated home office built-in alcove', 'Custom walk-in tiled shower suite', 'High-efficiency Low-E slider doors', '100% on-site stick-built construction'],
  },
  {
    id: 'one',
    name: '1-Bedroom Executive Residence',
    slug: 'one',
    sqft: 560,
    startingPrice: 0,
    priceFormatted: 'Custom Quote Available',
    dimensions: '1 Bed · 1 Bath · Approx 560 sq ft',
    bedrooms: '1 Bedroom',
    bathrooms: '1.0 Bath',
    imageUrl: '/images/localized/adu_asset_e605c743b7.jpg',
    tagline: 'Private 1-bedroom home for family or rental cash flow',
    description: 'Private master bedroom sanctuary with separate living area, full chef kitchen, and dedicated laundry hookups.',
    features: ['Private master bedroom with walk-in closet', 'Open-concept living and dining area', 'Full kitchen island layout', 'Site-built poured concrete slab'],
  },
  {
    id: 'two',
    name: '2-Bedroom Family Residence',
    slug: 'two',
    sqft: 715,
    startingPrice: 0,
    priceFormatted: 'Custom Quote Available',
    dimensions: '2 Bed · 1 Bath · Approx 715 sq ft',
    bedrooms: '2 Bedrooms',
    bathrooms: '1.0 Bath',
    imageUrl: '/images/localized/adu_asset_52dc4cc0e2.jpg',
    tagline: 'Spacious dual-bedroom layout for maximum rental yield',
    description: 'Dual private bedrooms designed for long-term family living, aging parents, or high rental income in Southern California.',
    features: ['Two private bedrooms with full closets', 'Expansive central living room layout', 'Architectural Title 24 energy envelope', 'Separate utility subpanel connections'],
  },
  {
    id: 'twoplus',
    name: '2-Bed / 2-Bath Dual Suite',
    slug: 'twoplus',
    sqft: 800,
    startingPrice: 0,
    priceFormatted: 'Custom Quote Available',
    dimensions: '2 Bed · 2 Bath · Approx 800+ sq ft',
    bedrooms: '2 Bedrooms',
    bathrooms: '2.0 Baths',
    imageUrl: '/images/localized/adu_asset_2d03e0bfe5.jpg',
    tagline: 'Flagship secondary home with dual primary suites',
    description: 'Our largest custom ground-up layout concept, featuring two private ensuite bathrooms, vaulted ceilings, and expansive patio glass sliders.',
    features: ['Dual private ensuite bathrooms', 'Vaulted ceiling options with clerestory windows', '12ft sliding glass wall integration', 'Custom designer finish selections throughout'],
  },
];

// ==========================================
// 2B. INTERIORS GALLERY
// ==========================================
export const INTERIORS_GALLERY = [
  {
    title: 'Open living, seamlessly connected',
    description: 'Living room, kitchen, and dining flow together in one bright, airy space with custom cabinetry.',
    imageUrl: '/images/localized/adu_asset_0a5080117d.jpg',
  },
  {
    title: 'Bedrooms that feel like a retreat',
    description: 'Vaulted wood ceilings, warm natural light, and integrated storage designed for calm rest.',
    imageUrl: '/images/localized/adu_asset_5a0f27c609.jpg',
  },
  {
    title: 'Chef kitchens & quartz countertops',
    description: 'Full-size stainless appliances, soft-close custom cabinetry, and durable solid surface counters.',
    imageUrl: '/images/localized/adu_asset_a55dd4433a.jpg',
  },
];

// ==========================================
// 3. 4-STAGE TURNKEY ROADMAP
// ==========================================
export const LADU_PROJECT_PLAN = [
  {
    phase: 'Phase 01',
    name: 'Property Feasibility',
    timeline: 'Wk 1-2',
    duration: '2 Weeks',
    desc: 'Lot setback analysis, sewer/water/electrical mapping, HOA rule review, and fixed scope proposal.',
  },
  {
    phase: 'Phase 02',
    name: 'Architectural Design',
    timeline: 'Wk 3-6',
    duration: '3 - 4 Weeks',
    desc: '3D modeling, floor plans, structural engineering calculations, and Title 24 energy compliance sets.',
  },
  {
    phase: 'Phase 03',
    name: 'City Permitting',
    timeline: 'Wk 6-16',
    duration: '6 - 10 Weeks',
    desc: 'Plan check submission, city comments and required corrections before the authority decides the application.',
  },
  {
    phase: 'Phase 04',
    name: 'Turnkey Construction',
    timeline: 'Wk 17-36',
    duration: '4 - 6 Months',
    desc: 'Licensed Class B ground-up construction, weekly photo updates, final inspection, and keys handover.',
  },
];

export const LADU_PROCESS_PHASES = LADU_PROJECT_PLAN;

// ==========================================
// 4. FOUR WAYS TO STEP IN
// ==========================================
export const ENTRY_PATHWAYS = [
  {
    badge: 'WE COME TO YOU',
    title: 'On-Premise Lot Walk',
    subtitle: 'Free 30-Minute Property Feasibility',
    description: 'An ADU specialist walks your Orange County property, checks setbacks, sewer depth, and maps out your options on the spot.',
    cta: 'Schedule On-Site Walk',
    href: '/free-feasibility?type=site-walk',
    popular: true,
  },
  {
    badge: 'SKIP THE DRIVE',
    title: 'Video Consultation',
    subtitle: 'Zoom with a Senior Planner',
    description: 'Share your property screen on Zoom. Get instant setback readouts, 3D model recommendations, and budget ranges.',
    cta: 'Book Video Call',
    href: '/free-feasibility?type=video-call',
    popular: false,
  },
  {
    badge: 'QUICK & EASY',
    title: 'Phone Consultation',
    subtitle: '15-Minute Expert Q&A',
    description: 'Prefer to talk? Call our Irvine planning desk directly for immediate answers on costs, city permits, and timelines.',
    cta: 'Call (949) 822-9561',
    href: 'tel:9498229561',
    popular: false,
  },
  { badge: 'START PLANNING', title: 'Property Assessment', subtitle: 'Explore Your ADU Options', description: 'Share your property and project goals to discuss layouts, budget factors and next steps.', cta: 'Request Free Assessment', href: '/free-feasibility', popular: false },
];

// ==========================================
// 5. PROOF & CASE STUDIES
// ==========================================
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'newport-coastal-studio',
    title: 'The Newport Coastal Studio Transformation',
    location: 'Newport Beach, CA',
    type: 'Garage Conversion ADU',
    sqft: 420,
    cost: '$154K All-In Scope',
    permitWeeks: '9 Weeks Permit',
    rentalIncome: '$2,400/mo Est. Rent',
    equityAdded: '$150,000+ Added Equity',
    beforeImage: '/images/localized/adu_asset_fe36bce2c5.jpg',
    afterImage: '/images/localized/adu_asset_19f8aacb8b.jpg',
    description: 'A cluttered detached 2-car garage converted into a bright, contemporary guest suite with vaulted ceilings, custom oak cabinetry, and full in-unit laundry.',
    highlights: [
      'Approved through city plan check in 9 weeks',
      'Built as private guest retreat and high-ROI rental',
      'Estimated $150,000+ added property equity',
    ],
  },
  {
    id: 'irvine-modern-detached',
    title: 'The Irvine Modern Detached Two-Bedroom',
    location: 'Irvine, CA (Woodbridge)',
    type: 'Detached Backyard ADU',
    sqft: 715,
    cost: '$218K All-In Scope',
    permitWeeks: '11 Weeks Permit',
    rentalIncome: '$3,200/mo Est. Rent',
    equityAdded: '$285,000+ Added Equity',
    beforeImage: '/images/localized/adu_asset_deaaaa19b8.jpg',
    afterImage: '/images/localized/adu_asset_52dc4cc0e2.jpg',
    description: 'Ground-up custom detached 2-bedroom ADU featuring floor-to-ceiling sliding glass doors, mini-split climate control, and a private landscaped patio.',
    highlights: [
      '100% City of Irvine permit approval with zero revisions',
      'Turnkey single contract: design, foundation to final keys',
      'Built for family living with accessible entry and private patio',
    ],
  },
];

// ==========================================
// 6. TRUST PILLARS
// ==========================================
export const TRUST_PILLARS = [
  { number: '01', title: 'Know Your Contractor', description: 'Construction contracts are made directly with an independent contractor. Confirm the current license, insurance, scope and responsible professionals before signing.' },
  { number: '02', title: 'Start with Your Property', description: 'Lot access, existing structures, utilities and local requirements shape which ADU options may be practical.' },
  { number: '03', title: 'Compare Your Options', description: 'Explore detached ADUs, garage conversions and junior ADUs before choosing a layout or construction scope.' },
  { number: '04', title: 'Understand the Budget', description: 'Ask for an itemized proposal covering design, approvals, sitework, utilities and finishes, including exclusions and change-order terms.' },
  { number: '05', title: 'Check Local Requirements', description: 'Confirm the current rules and submission process with the city or county responsible for your property.' },
  { number: '06', title: 'Clear Next Steps', description: 'Use the property assessment to describe your project and discuss suitable next steps with the planning desk.' },
];

// ==========================================
// 7. ALL 34 ORANGE COUNTY MUNICIPALITIES DATA
// ==========================================
export const ORANGE_COUNTY_CITIES: CityInfo[] = [
  { name: 'La Palma', slug: 'la-palma', county: 'Orange County', population: '', avgRent: '', permitTurnaroundWeeks: 'Property dependent', keyZoningNotes: 'For your La Palma property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.', isPriority: false },
  {
    name: 'Irvine', slug: 'irvine',
    heroDescription: "Speed up your OC build with Irvine's pre-approved ADU plans. Skip months of city review and break ground faster using compliant, ready-to-permit layouts.", 
    aeoSnippet: "Irvine allows detached ADUs up to 1,200 square feet requiring minimum 4-foot side and rear property setbacks. Submitting designs through the Irvine Community Development Department's Standard Plan program bypasses initial architectural review, routinely cutting permit approval timelines from months down to a few weeks.",
    faqs: [{"q": "How fast can I get a permit with Irvine pre-approved ADU plans?", "a": "The Irvine Community Development Department expedites standard plans, often issuing building permits within 2 to 4 weeks. Fully custom layouts require full state-mandated 60-day review cycles."}, {"q": "Do I have to pay development impact fees for an ADU in Irvine?", "a": "Per state law, ADUs constructed under 750 square feet are completely exempt from local Irvine development impact fees. Units exceeding 750 square feet are charged proportionally based on the square footage of your primary tract home."}, {"q": "What are the exact rear and side setbacks for a detached ADU in Irvine?", "a": "Current Irvine zoning rules demand a minimum 4-foot setback from the side and rear property lines for detached units. Fire safety codes may impose stricter clearances depending on specific neighborhood utility easements or master HOA guidelines."}],
    county: 'Orange County',
    population: '310,000',
    avgRent: '$2,800 - $3,600/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Irvine property, discuss applicable community or association requirements. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Newport Beach', slug: 'newport-beach',
    county: 'Orange County',
    population: '85,000',
    avgRent: '$3,200 - $4,500/mo',
    permitTurnaroundWeeks: '10 - 14 wks',
    keyZoningNotes: 'For your Newport Beach property, discuss whether coastal review applies. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Huntington Beach', slug: 'huntington-beach',
    heroDescription: "Navigate Huntington Beach's unique coastal building requirements to create your perfect ADU. From standard inland lots to Coastal Zone compliance, we build granny flats tailored to local regulations.", 
    aeoSnippet: "Huntington Beach offers ministerial review for ADUs, allowing up to 1,200 sq ft detached structures with 4-foot setbacks under state law. The city provides a pre-approved 490 sq ft plan. However, properties within the Coastal Zone require a Coastal Development Permit.",
    faqs: [{"q": "What size ADU can I build in Huntington Beach?", "a": "You can build a detached ADU up to 1,200 square feet, or an attached ADU up to 50% of the primary dwelling's floor area, provided you meet the required 4-foot rear and side setbacks."}, {"q": "Do I need a special permit for my ADU if I live in the Huntington Beach Coastal Zone?", "a": "Yes. While standard ADUs benefit from ministerial review, properties located within the Coastal Zone are subject to Coastal Commission guidelines and must obtain a Coastal Development Permit."}, {"q": "Does Huntington Beach offer pre-approved ADU plans?", "a": "Yes, Huntington Beach offers a free, pre-approved plan for a 1-story, detached 490-square-foot ADU. Note that no modifications or deviations from this pre-approved plan are allowed."}],
    county: 'Orange County',
    population: '198,000',
    avgRent: '$2,600 - $3,500/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Huntington Beach property, discuss whether coastal review applies, the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Costa Mesa',
    slug: 'costa-mesa',
    county: 'Orange County',
    population: '111,000',
    avgRent: '$2,500 - $3,400/mo',
    permitTurnaroundWeeks: '6 - 10 wks',
    keyZoningNotes: 'For your Costa Mesa property, discuss the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Anaheim', slug: 'anaheim',
    heroDescription: "Converting your Anaheim garage into an ADU typically costs $90,000 to $120,000 depending on finishes and required structural upgrades. You can leverage the city's streamlined permitting to turn empty space into a rental unit or family suite.", 
    aeoSnippet: "A garage conversion ADU in Anaheim costs between $90,000 and $120,000 on average. This covers design, city permits, construction, and utility hookups. Total expenses depend on the garage's current structural condition and whether you choose to install separate meters through Anaheim Public Utilities.",
    faqs: [{"q": "Do I need separate meters for Anaheim Public Utilities when converting my garage?", "a": "Anaheim Public Utilities permits sharing electric and water meters with the primary residence. While sharing saves upfront conversion costs, installing sub-meters is recommended if you intend to rent the ADU."}, {"q": "How long does it take to get permits for a garage conversion in Anaheim?", "a": "Anaheim features an accelerated ADU permitting track. If your plans align with local zoning and state ADU laws, permit approval typically takes 30 to 60 days for a standard garage conversion."}, {"q": "Are property line setbacks required for an Anaheim garage conversion?", "a": "If you convert an existing, legally permitted garage without expanding its physical footprint, Anaheim waives the standard side and rear setback requirements as long as the structure meets fire and safety codes."}],
    county: 'Orange County',
    population: '346,000',
    avgRent: '$2,300 - $3,100/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Anaheim property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Santa Ana', slug: 'santa-ana',
    county: 'Orange County',
    population: '310,000',
    avgRent: '$2,200 - $2,900/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Santa Ana property, discuss the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Orange',
    slug: 'orange',
    county: 'Orange County',
    population: '139,000',
    avgRent: '$2,400 - $3,200/mo',
    permitTurnaroundWeeks: '7 - 12 wks',
    keyZoningNotes: 'For your Orange property, discuss any historic-property design review. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Fullerton',
    slug: 'fullerton',
    county: 'Orange County',
    population: '143,000',
    avgRent: '$2,300 - $3,100/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Fullerton property, discuss the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Laguna Beach',
    slug: 'laguna-beach',
    county: 'Orange County',
    population: '23,000',
    avgRent: '$3,500 - $5,000/mo',
    permitTurnaroundWeeks: '12 - 16 wks',
    keyZoningNotes: 'For your Laguna Beach property, discuss whether coastal review applies, site grading, soil and engineering needs. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Mission Viejo',
    slug: 'mission-viejo',
    county: 'Orange County',
    population: '93,000',
    avgRent: '$2,600 - $3,400/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Mission Viejo property, discuss applicable community or association requirements. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Lake Forest',
    slug: 'lake-forest',
    county: 'Orange County',
    population: '88,000',
    avgRent: '$2,500 - $3,300/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Lake Forest property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Aliso Viejo',
    slug: 'aliso-viejo',
    county: 'Orange County',
    population: '52,000',
    avgRent: '$2,600 - $3,400/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Aliso Viejo property, discuss the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'San Clemente',
    slug: 'san-clemente',
    county: 'Orange County',
    population: '64,000',
    avgRent: '$2,800 - $3,800/mo',
    permitTurnaroundWeeks: '9 - 14 wks',
    keyZoningNotes: 'For your San Clemente property, discuss whether coastal review applies. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Dana Point',
    slug: 'dana-point',
    county: 'Orange County',
    population: '33,000',
    avgRent: '$2,900 - $4,000/mo',
    permitTurnaroundWeeks: '9 - 14 wks',
    keyZoningNotes: 'For your Dana Point property, discuss whether coastal review applies. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: true,
  },
  {
    name: 'Brea',
    slug: 'brea',
    county: 'Orange County',
    population: '47,000',
    avgRent: '$2,400 - $3,200/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Brea property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Yorba Linda',
    slug: 'yorba-linda',
    county: 'Orange County',
    population: '68,000',
    avgRent: '$2,700 - $3,600/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Yorba Linda property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Tustin',
    slug: 'tustin',
    county: 'Orange County',
    population: '80,000',
    avgRent: '$2,500 - $3,300/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Tustin property, discuss the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'San Juan Capistrano',
    slug: 'san-juan-capistrano',
    county: 'Orange County',
    population: '35,000',
    avgRent: '$2,700 - $3,600/mo',
    permitTurnaroundWeeks: '8 - 13 wks',
    keyZoningNotes: 'For your San Juan Capistrano property, discuss any historic-property design review. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Fountain Valley',
    slug: 'fountain-valley',
    county: 'Orange County',
    population: '55,000',
    avgRent: '$2,500 - $3,300/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Fountain Valley property, discuss the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Garden Grove',
    slug: 'garden-grove',
    county: 'Orange County',
    population: '172,000',
    avgRent: '$2,300 - $3,000/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Garden Grove property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Placentia',
    slug: 'placentia',
    county: 'Orange County',
    population: '51,000',
    avgRent: '$2,400 - $3,100/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Placentia property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Buena Park',
    slug: 'buena-park',
    county: 'Orange County',
    population: '83,000',
    avgRent: '$2,300 - $3,000/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Buena Park property, discuss the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Cypress',
    slug: 'cypress',
    county: 'Orange County',
    population: '50,000',
    avgRent: '$2,400 - $3,200/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Cypress property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Seal Beach',
    slug: 'seal-beach',
    county: 'Orange County',
    population: '25,000',
    avgRent: '$2,700 - $3,700/mo',
    permitTurnaroundWeeks: '9 - 14 wks',
    keyZoningNotes: 'For your Seal Beach property, discuss whether coastal review applies. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Rancho Santa Margarita',
    slug: 'rancho-santa-margarita',
    county: 'Orange County',
    population: '47,000',
    avgRent: '$2,600 - $3,400/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Rancho Santa Margarita property, discuss applicable community or association requirements. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Laguna Niguel',
    slug: 'laguna-niguel',
    county: 'Orange County',
    population: '64,000',
    avgRent: '$2,700 - $3,700/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Laguna Niguel property, discuss site grading, soil and engineering needs. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Laguna Hills',
    slug: 'laguna-hills',
    county: 'Orange County',
    population: '31,000',
    avgRent: '$2,600 - $3,500/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Laguna Hills property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Laguna Woods',
    slug: 'laguna-woods',
    county: 'Orange County',
    population: '16,000',
    avgRent: '$2,300 - $3,000/mo',
    permitTurnaroundWeeks: '8 - 12 wks',
    keyZoningNotes: 'For your Laguna Woods property, discuss applicable community or association requirements. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Los Alamitos',
    slug: 'los-alamitos',
    county: 'Orange County',
    population: '12,000',
    avgRent: '$2,500 - $3,300/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Los Alamitos property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'La Habra',
    slug: 'la-habra',
    county: 'Orange County',
    population: '63,000',
    avgRent: '$2,300 - $3,000/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your La Habra property, discuss the condition and conversion suitability of existing garages. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Stanton',
    slug: 'stanton',
    county: 'Orange County',
    population: '38,000',
    avgRent: '$2,200 - $2,900/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Stanton property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Villa Park',
    slug: 'villa-park',
    county: 'Orange County',
    population: '6,000',
    avgRent: '$3,200 - $4,600/mo',
    permitTurnaroundWeeks: '8 - 13 wks',
    keyZoningNotes: 'For your Villa Park property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Westminster',
    slug: 'westminster',
    county: 'Orange County',
    population: '90,000',
    avgRent: '$2,300 - $3,100/mo',
    permitTurnaroundWeeks: '7 - 11 wks',
    keyZoningNotes: 'For your Westminster property, discuss lot access, existing structures and utility connections. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
  {
    name: 'Coto de Caza',
    slug: 'coto-de-caza',
    county: 'Orange County',
    population: '15,000',
    avgRent: '$3,400 - $5,000/mo',
    permitTurnaroundWeeks: '9 - 14 wks',
    keyZoningNotes: 'For your Coto de Caza property, discuss applicable community or association requirements. Confirm current requirements and the submission process with the responsible authority; suitability depends on the parcel.',
    isPriority: false,
  },
];

// ==========================================
// 8. FAQ DATA
// ==========================================
export const FAQS: FaqItem[] = [
  {
    "category": "Planning",
    "question": "How do I know which ADU options suit my property?",
    "answer": "Start with existing structures, access, utilities and your goals. Request an initial assessment, then verify current requirements with the responsible authority and your design professional."
  },
  {
    "category": "Services",
    "question": "How does a garage conversion differ from a detached ADU?",
    "answer": "A garage conversion adapts an existing structure, while a detached ADU creates a separate home. Existing condition, foundation work, utilities and the desired layout affect suitability and cost."
  },
  {
    "category": "Process",
    "question": "Who contracts for and carries out the construction?",
    "answer": "ADU Alliance connects homeowners with independent contractor partners. The homeowner contracts directly with the chosen contractor. Confirm current licensing, insurance, scope, pricing and responsibilities."
  },
  {
    "category": "Budget",
    "question": "What should an ADU budget include?",
    "answer": "Ask for an itemized proposal covering design, engineering, approvals, sitework, utilities, construction and finishes. Check exclusions, allowances and change-order terms. An online estimate is an illustration rather than a quote."
  },
  {
    "category": "Timing",
    "question": "How long does an ADU project take?",
    "answer": "Timing depends on design, site conditions, reviews, corrections, utilities, inspections and availability. Request a project-specific schedule that distinguishes permit review from construction."
  }
];

// ==========================================
// 9. BLOG ARTICLES
// ==========================================
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Orange County ADU Laws 2026: Complete Homeowner Guide to Setbacks, Permits & AB 1033',
    slug: 'orange-county-adu-laws-2026-guide',
    excerpt: 'Everything Orange County homeowners need to know about updated 2026 ADU regulations, detached height allowances, HOA rules, and expedited municipal plan check.',
    content: `
      <h2>The 2026 California & Orange County ADU Landscape</h2>
      <p>Building an Accessory Dwelling Unit (ADU) in Orange County has never been more financially rewarding or legally streamlined. Thanks to recent legislative updates including AB 1033, California homeowners have unprecedented rights to construct secondary residences for multi-generational family living or high-value equity gains.</p>
      <h3>1. 4-Foot Setback Mandate Across All OC Cities</h3>
      <p>Under California Government Code, local jurisdictions cannot mandate more than 4-foot rear and side setbacks for detached single-story ADUs up to 16-18 feet in height.</p>
      <h3>2. Complete HOA Preemption Under AB 670</h3>
      <p>Homeowners Associations throughout Orange County cannot prohibit or unreasonably restrict ADU construction on single-family lots.</p>
    `,
    date: 'March 2026',
    author: 'ADU Alliance Technical Team',
    featuredImage: '/images/localized/adu_asset_e605c743b7.jpg',
    category: 'Regulations & Permits',
    readTime: '6 min read',
  },
  {
    id: 2,
    title: 'ADU Garage Conversion Cost in Orange County: The Real Numbers for Homeowners',
    slug: 'adu-garage-conversion-cost-in-orange-county',
    excerpt: 'Complete 2026 line-item cost breakdown for converting a 2-car garage into a legal ADU in Orange County, CA. Real budgets, permit fees, plumbing, and timeline facts.',
    content: `
      <h2>Why Garage Conversions Are the #1 ROI Space Addition in Orange County</h2>
      <p>In 2026, converting a standard 2-car garage (380 to 450 sq ft) into a permitted living unit in Orange County typically costs between $95,000 and $149,000 all-in. Because the existing concrete slab, walls, and roof structure are utilized, garage conversions cost 40% to 50% less than ground-up detached construction.</p>
      <h3>Key Cost Breakdown</h3>
      <ul>
        <li><strong>Architectural Plans & Engineering:</strong> $6,000 - $9,500</li>
        <li><strong>City Permit & Plan Check Fees:</strong> $2,500 - $5,000</li>
        <li><strong>Plumbing Trenching & Sewer Connection:</strong> $12,000 - $20,000</li>
        <li><strong>Electrical Subpanel (100A) & Wiring:</strong> $9,000 - $15,000</li>
        <li><strong>HVAC Ductless Mini-Split:</strong> $4,500 - $7,500</li>
        <li><strong>Kitchen, Bath & Turnkey Finishes:</strong> $28,000 - $45,000</li>
      </ul>
    `,
    date: 'March 2026',
    author: 'ADU Alliance Technical Team',
    featuredImage: '/images/localized/adu_asset_19f8aacb8b.jpg',
    category: 'Costs & Pricing',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'ADU Orange County: Why Everyone Is Talking About New Laws (And You Should Too)',
    slug: 'adu-orange-county-2025-why-everyone-is-talking-about-new-laws-and-you-should-too',
    excerpt: 'Complete analysis of updated California ADU legislation, municipal zoning setbacks, and HOA rights for Orange County homeowners.',
    content: `
      <h2>The Wave of Legislative Reform Across California</h2>
      <p>Recent California state legislation (including Assembly Bill 1033, Senate Bill 9, and AB 68) has transformed accessory dwelling units in Orange County into an expedited property right. Homeowners can now construct detached ADUs up to 1,200 sq ft, convert garages without replacing parking, build despite HOA restrictions, and explore separate condominium conveyance under AB 1033.</p>
      <h3>AB 1033: Selling an ADU as a Condominium</h3>
      <p>Assembly Bill 1033 empowers local municipalities to allow property owners to deed-restrict and sell an ADU separately from the main home as a condominium unit, opening unprecedented homeownership and equity creation options across Orange County.</p>
    `,
    date: 'March 2026',
    author: 'ADU Alliance Technical Team',
    featuredImage: '/images/localized/adu_asset_52dc4cc0e2.jpg',
    category: 'Regulations & Permits',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Orange County ADU Permits in 15 Days? What SB 543 Means for Your Project',
    slug: 'orange-county-adu-permits-sb-543',
    excerpt: 'What California Senate Bill 543 means for Orange County ADU permits. 15-day initial review period, pre-approved plan check sets, and city approval timelines.',
    content: `
      <h2>Understanding SB 543 and Municipal Review Timelines</h2>
      <p>Senate Bill 543 establishes a 15-day initial review period for local building departments to review pre-approved or standard plan sets; it does not guarantee final permit issuance in 15 days. While this significantly speeds up initial comments, comprehensive city plan check, utility verification, and engineering sign-off typically require 60 to 90 days across most Orange County municipalities.</p>
    `,
    date: 'March 2026',
    author: 'ADU Alliance Technical Team',
    featuredImage: '/images/localized/adu_asset_b1767c1987.jpeg',
    category: 'Permitting',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'The Real Truth About ADU Construction Cost Per Square Foot in 2026',
    slug: 'adu-construction-cost-per-square-foot-2026-in-orange-county-exposed-guide',
    excerpt: 'The real truth about ADU construction cost per square foot in Orange County for 2026. Why lowball $150/sq ft quotes fail and realistic line-item budgets.',
    content: `
      <h2>Realistic Cost Per Square Foot in Orange County</h2>
      <p>In 2026, realistic turnkey ADU construction in Orange County ranges from $280 to $385 per square foot for ground-up detached builds, and $210 to $270 per square foot for garage conversions. Online advertisements claiming "$150/sq ft" almost universally exclude mandatory costs like concrete foundation pours, architectural engineering, city permit fees, trenching, and utility connections.</p>
    `,
    date: 'March 2026',
    author: 'ADU Alliance Technical Team',
    featuredImage: '/images/localized/adu_asset_2d03e0bfe5.jpg',
    category: 'Costs & Pricing',
    readTime: '7 min read',
  },
];
