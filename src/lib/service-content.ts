export interface ServiceContent { slug: string; name: string; title: string; description: string; intro: string; fit: string; deliverables: string[]; exclusions: string[]; questions: string[]; cost: string; responsibility: string; next: string; faqs: string[][]; cities: string[]; comparison: string; }

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    "slug": "adu-design",
    "name": "ADU Design & Plans",
    "title": "ADU Design & Plans in Orange County | ADU Alliance",
    "description": "Plan your Orange County ADU with clear design deliverables, site questions and professional responsibilities before commissioning drawings.",
    "intro": "Turn your goals into a design brief before committing to a plan set. Explore site information, layout choices and the professional documents your Orange County ADU may need.",
    "fit": "You are comparing layouts, starting without drawings or checking whether an existing concept fits your property. Design decisions should follow site information and your intended use, rather than a stock image alone.",
    "deliverables": [
      "A written brief covering intended use, rooms, accessibility preferences, privacy and outdoor space.",
      "A defined drawing scope: concept layouts, site plans and permit documents are separate stages to agree.",
      "Coordination needs for structural engineering, energy documentation and other specialists, identified for the project.",
      "A revision and agency-correction allowance, with file formats and ownership of the final documents confirmed."
    ],
    "exclusions": [
      "A concept sketch is not a stamped engineering package or a building permit.",
      "Surveying, geotechnical work, specialist reports and agency fees are separate unless expressly included.",
      "An existing or standard plan may need site adaptation; acceptance elsewhere does not approve your parcel."
    ],
    "questions": [
      "Do you have a survey, existing plans or information about easements and utilities?",
      "Who will use the unit, and which layout or accessibility features matter most?",
      "Is the site level, and how will access, privacy and the main home affect the layout?",
      "Are you commissioning concepts, a permit submission set or revisions to existing documents?"
    ],
    "cost": "Design fees depend on drawing stage, site information, engineering needs, revisions and correction support. Request a proposal that identifies each professional, payment milestone and deliverable; do not compare a concept fee with a complete permit-document scope.",
    "responsibility": "Agree directly with the selected design professional who measures the site, prepares drawings, provides required signatures and coordinates engineering. Confirm who answers authority comments and what happens when the brief changes. ADU Alliance helps frame the enquiry and potential independent contractor connections.",
    "next": "Share your location, existing-plan status, desired rooms and the design stage you need. Discuss missing site information before commissioning specialist work. The next step may be a site review, a drawing proposal or refinement of your brief.",
    "faqs": [
      [
        "Can I start with a layout concept?",
        "Yes. Use it to explain your goals, then ask the design professional to check fit, site constraints and the documents required for your property."
      ],
      [
        "Does a design fee include engineering and permit fees?",
        "Only when the written proposal expressly includes them. Ask for separate deliverables, specialist responsibilities, revision allowances and agency charges."
      ],
      [
        "Can I bring plans from another designer?",
        "Explain who owns the files, their current approval status and the work you need. The selected professional must confirm whether they can use or revise them."
      ]
    ],
    "cities": [
      "irvine",
      "newport-beach",
      "tustin"
    ],
    "comparison": "Define the layout and professional document package before submission."
  },
  {
    "slug": "adu-permits",
    "name": "ADU Permit Planning",
    "title": "ADU Permits & Plan Check in Orange County | ADU Alliance",
    "description": "Understand Orange County ADU permit submissions, agency responsibilities, correction rounds and exclusions before choosing professional support.",
    "intro": "Understand the submission path before you file. Identify the responsible authority, the documents your project needs and who will coordinate comments, revisions and fees.",
    "fit": "You have a project concept or drawings and need to understand submission readiness. Permit coordination can also help when an application has received comments or the existing documents need a clearly defined next step.",
    "deliverables": [
      "A project-specific submission checklist agreed with the responsible authority and your professional.",
      "A defined responsibility for assembling and submitting drawings, supporting forms and specialist reports.",
      "An application and comments log, with a clear contact for document revisions and resubmission.",
      "A record of outstanding agency fees, clearances and conditions to resolve before construction."
    ],
    "exclusions": [
      "Submission support is not an approval guarantee or a promise of a fixed review period.",
      "Engineering revisions, utility work, HOA review and other agency clearances need an agreed scope.",
      "Plan review, permit issuance and construction inspections are different steps; a submission receipt does not authorize building."
    ],
    "questions": [
      "Which city or county authority handles the parcel, and is another agency involved?",
      "Are your drawings conceptual, submission-ready or already under review?",
      "What application number, correction notices or prior approvals can you provide?",
      "Who owns each document and is responsible for responding to the authority?"
    ],
    "cost": "Separate professional coordination fees from plan-check fees, permit charges, specialist revisions and other agency costs. Ask which correction rounds and resubmissions the proposal includes, and what triggers additional work.",
    "responsibility": "The responsible authority decides the application. Your selected professional prepares or coordinates the agreed documents; the homeowner supplies accurate property information and authorizations. Name the person responsible for each comment so architectural, structural and utility issues reach the appropriate specialist.",
    "next": "Provide the property location, drawing status and any agency notices. The discussion should establish what is missing, who can supply it and which submission or correction task comes next. Review timing with the authority; no approval date is promised.",
    "faqs": [
      [
        "Can permit approval be guaranteed?",
        "No. The responsible authority reviews the application and decides whether its requirements are satisfied. A coordinator can agree a scope of work, not guarantee that decision."
      ],
      [
        "Can I enquire about an application already under review?",
        "Yes. Include its application number, current drawings and complete correction notices so the required professional work can be identified."
      ],
      [
        "Are permit fees included in a coordination proposal?",
        "Ask for an explicit fee schedule and exclusions. Professional fees, agency charges and specialist revisions should be distinguishable."
      ]
    ],
    "cities": [
      "irvine",
      "garden-grove",
      "anaheim"
    ],
    "comparison": "Organize submission requirements and track review responsibilities."
  },
  {
    "slug": "detached-adu",
    "name": "Detached ADU Planning & Construction",
    "title": "Detached ADUs in Orange County | ADU Alliance",
    "description": "Explore detached ADU site access, utilities, layout decisions and construction scope in Orange County with independent contractor connections.",
    "intro": "Explore a separate backyard home with a property-first plan. Site access, utilities, drainage and the relationship to your main home shape the scope long before finishes are selected.",
    "fit": "A detached ADU may suit a household seeking a separate living space while retaining the main home. Compare the footprint with outdoor space, privacy, circulation and the practical route for construction access.",
    "deliverables": [
      "A coordinated site and layout scope identifying the proposed building location and relationship to existing structures.",
      "A defined sitework package covering applicable grading, drainage, foundations and access protection.",
      "A written construction scope for the structure, utilities, kitchen, bathroom and selected finishes.",
      "Milestones for inspections, punch-list work and closeout documents agreed with the contractor."
    ],
    "exclusions": [
      "A building-only proposal may exclude utility upgrades, trenching, landscaping restoration and difficult access.",
      "Demolition, retaining walls, soil conditions and specialist reports need property-specific review.",
      "A model image or floor-plan concept does not establish an approved layout, final price or rental income."
    ],
    "questions": [
      "How can workers, equipment and materials reach the proposed building area?",
      "Where are the existing utility connections, and what capacity information is available?",
      "How should entries, windows and outdoor areas support privacy for both homes?",
      "Are there slopes, trees, drainage concerns, easements or structures to investigate?"
    ],
    "cost": "Request a scope-led proposal that separates site preparation, structure, utility connections, finishes, agency charges and exclusions. Access restrictions, ground conditions and service upgrades can materially change the work; a price for another property is not a quote for yours.",
    "responsibility": "Construction agreements are directly with the selected independent contractor. Confirm license status, insurance, supervision, subcontractor coordination, payment milestones and change-order procedures. The design professionals address their agreed documents; the authority carries out its review and inspection functions.",
    "next": "Share the address or area, desired rooms, intended use and any plans or site information. Identify the investigations needed before a contractor can define a detailed scope. Construction timing depends on design, approvals, access and the final agreement.",
    "faqs": [
      [
        "Can I select a floor plan before checking the lot?",
        "A concept can help describe your needs. Its fit still depends on the parcel, access, utilities, required clearances and the responsible authority."
      ],
      [
        "Will the contractor price include utility connections?",
        "Check explicitly. Ask where each connection ends, whether capacity upgrades are included and who pays agency or utility-provider charges."
      ],
      [
        "Who signs the construction agreement?",
        "The homeowner and the selected independent contractor agree the scope and delivery terms directly. ADU Alliance is a planning and contractor-matching network."
      ]
    ],
    "cities": [
      "irvine",
      "newport-beach",
      "mission-viejo"
    ],
    "comparison": "Create a separate building after checking sitework, access and utilities."
  },
  {
    "slug": "garage-conversion",
    "name": "Garage Conversion to ADU",
    "title": "Garage Conversions in Orange County | ADU Alliance",
    "description": "Assess an Orange County garage conversion with questions about the slab, structure, moisture, utilities and an agreed independent contractor scope.",
    "intro": "An existing garage is a starting point, not a ready-made home. Check its structure, slab, moisture protection and utility routes before deciding how much can be retained.",
    "fit": "Consider a conversion when an existing garage could support your living-space goals. Compare it with a detached ADU if structural repairs, layout limits or utility work would make reuse less suitable.",
    "deliverables": [
      "An agreed assessment of the existing garage and the investigations needed to establish conversion suitability.",
      "A conversion design addressing access, kitchen and bathroom layout, daylight and the connection to existing buildings.",
      "A written scope for any required slab or structural work, insulation, moisture control and building services.",
      "Defined finish, inspection and closeout responsibilities, including making good affected areas."
    ],
    "exclusions": [
      "Existing foundations, walls and roofs are not assumed suitable without professional assessment.",
      "Hidden defects, drainage issues, hazardous materials and service upgrades need explicit allowances or exclusions.",
      "Conversion does not establish eligibility, cost savings or a faster approval schedule for every property."
    ],
    "questions": [
      "Is the garage attached or detached, and do you have records of its permitted construction?",
      "Are there cracks, signs of moisture, roof problems or floor-level differences?",
      "Where could sewer, water and electrical routes run without disrupting the main home?",
      "What storage, parking or access arrangements would change if the garage became living space?"
    ],
    "cost": "Compare proposals using the same investigation and repair assumptions. Separate structural or slab alterations, moisture protection, utility routes, interior work and restoration. Retaining an existing shell may avoid some new work, but condition-dependent repairs can change the scope.",
    "responsibility": "The selected independent contractor and relevant design professionals must establish what can be retained and document the work. Agree how discoveries after opening walls or floors will be assessed, priced and approved before additional work proceeds.",
    "next": "Provide photos, approximate dimensions, attached or detached status and any available drawings. Use the first discussion to identify the inspections and records needed for a reliable proposal rather than treating photos as structural approval.",
    "faqs": [
      [
        "Can the existing slab always be reused?",
        "Its condition and suitability need assessment. A professional may identify structural, moisture, level or service-routing work before it can support the proposed use."
      ],
      [
        "Is a conversion always cheaper than a new detached ADU?",
        "No fixed comparison applies to every site. Existing condition, required repairs, utility routes and finish scope can change the relative cost."
      ],
      [
        "Can an attached garage become a JADU instead?",
        "It may be an option to investigate, depending on its relationship to the single-family residence and JADU requirements. Compare the intended layout with the JADU guidance and confirm the application path."
      ]
    ],
    "cities": [
      "garden-grove",
      "anaheim",
      "fullerton"
    ],
    "comparison": "Investigate the existing garage before choosing which elements to reuse."
  },
  {
    "slug": "junior-adu",
    "name": "Junior ADU (JADU) Planning",
    "title": "Junior ADUs & JADU Planning in Orange County | ADU Alliance",
    "description": "Explore a JADU within a single-family home in Orange County. Review the 500-square-foot limit, layout questions and professional planning scope.",
    "intro": "Explore a smaller living unit within your single-family home. Start by checking how the proposed area, entrance and household needs fit the JADU application path.",
    "fit": "California HCD describes a JADU as no more than 500 square feet of interior living space, entirely within a single-family residence. An eligible attached garage can be considered; a detached structure or an added extension is not a JADU merely because it is small.",
    "deliverables": [
      "A review of the proposed interior area and its relationship to the single-family residence.",
      "A layout brief covering the entrance, efficiency kitchen and bathroom arrangement.",
      "Identification of property-specific documents and professionals needed for an application.",
      "A written alteration scope addressing the retained home, building services and occupant access."
    ],
    "exclusions": [
      "The size limit alone does not establish that a room, extension or detached garage qualifies.",
      "No assumption is made about rental eligibility, occupancy conditions or an exemption from all fees.",
      "Structural alterations, service upgrades and any changes to the main residence need explicit inclusion."
    ],
    "questions": [
      "Which part of the single-family residence would become the unit?",
      "Does the proposed layout meet your privacy and access needs for both households?",
      "How would kitchen and bathroom arrangements work in daily use?",
      "What existing drawings, ownership information and intended occupancy details can you provide?"
    ],
    "cost": "Request a proposal based on the actual interior alterations and any work to the retained home. Separate design, specialist documents, building services, finishes and agency charges. A smaller floor area does not by itself establish a lower total cost.",
    "responsibility": "Your selected professional should confirm the classification and current requirements with the responsible authority. Construction contracts remain directly with the independent contractor. Agree who protects occupied areas, maintains access and coordinates any service interruptions during alterations.",
    "next": "Share the location, proposed area and how you intend to use the unit. Discuss whether the layout should be investigated as a JADU or another ADU option before detailed design. Use the current HCD guidance alongside the local authority's property-specific requirements.",
    "faqs": [
      [
        "Is every small attached addition a JADU?",
        "No. JADU classification depends on its relationship to the single-family residence and the applicable requirements, not just floor area. Have the proposed layout checked before choosing this route."
      ],
      [
        "Can the JADU share a bathroom?",
        "HCD guidance allows a shared bathroom arrangement subject to the applicable access requirements. Ask the design professional and authority to confirm how the proposed layout complies."
      ],
      [
        "Should I compare a JADU with a garage conversion?",
        "Yes, when the proposed space is an attached garage or the available layouts overlap. A detached garage conversion follows a different classification question."
      ]
    ],
    "cities": [
      "irvine",
      "santa-ana",
      "tustin"
    ],
    "comparison": "Investigate a qualifying unit inside the single-family residence."
  }
];

export const HCD_ADU_GUIDE = 'https://www.hcd.ca.gov/building-standards/adu/handbook';
export const SERVICE_IMAGE = '/images/localized/adu-planning-960.webp';

