export type Faq = { question: string; answer: string };

export type ServicePageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  sections: { title: string; body: string }[];
  deliverables: string[];
  exclusions: string[];
  faqs: Faq[];
  related: { href: string; label: string }[];
};

export type LocationPageData = {
  slug: string;
  place: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localContext: string;
  services: string[];
  considerations: { title: string; body: string }[];
  faqs: Faq[];
};

export const services: ServicePageData[] = [
  {
    slug: "house-extensions",
    title: "House Extension Architects",
    metaTitle: "House Extension Architects Birmingham & Teesside",
    metaDescription: "Architect-led feasibility, planning and Building Regulations drawings for rear, side, wrap-around and two-storey house extensions.",
    eyebrow: "Residential design service",
    intro: "A well-planned extension should improve the whole house, not simply add floor area. We test planning constraints, circulation, daylight, structure and likely build cost before developing a preferred design.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Contemporary glazed rear house extension connected to a landscaped garden",
    sections: [
      { title: "Feasibility before design", body: "We review the existing property, planning history, site constraints and the relationship with neighbouring homes. This establishes whether Permitted Development, prior approval or a householder planning application is the most appropriate route." },
      { title: "Design around the existing house", body: "The design process considers how the extension changes the original plan, not just the new room. Kitchen position, circulation, utility space, daylight, garden access and furniture layouts are tested together." },
      { title: "Planning and technical information", body: "Once the design is agreed, we prepare the drawings and supporting information required for the planning route. A separate technical stage can then develop Building Regulations information and coordinate structural engineering." },
      { title: "Construction-ready decisions", body: "Material junctions, insulation, drainage, ventilation, fire safety and structural openings need to be resolved before reliable contractor pricing. The exact technical scope is confirmed in the written fee proposal." }
    ],
    deliverables: ["Measured survey where included", "Existing and proposed plans", "Elevations and sections", "Planning submission support", "Building Regulations drawings where appointed", "Structural engineer coordination where appointed"],
    exclusions: ["Structural engineer fees unless expressly included", "Planning and Building Control application charges", "Party Wall surveyor fees", "Specialist surveys and reports", "Contractor and construction costs"],
    faqs: [
      { question: "Do I need planning permission for a house extension?", answer: "Some extensions can proceed under Permitted Development, but the rules depend on the property, previous alterations, location and proposed dimensions. We assess the route before drawings are developed." },
      { question: "How much does an extension architect cost?", answer: "Fees depend on the property, scale, planning complexity and level of technical service. The website calculator provides an indicative guide only; a tailored fixed-fee proposal follows a project review." },
      { question: "Is a structural engineer included?", answer: "Structural engineering is excluded unless it is expressly included in the written proposal. We can coordinate the engineer's information with the architectural drawings." },
      { question: "Can you prepare Building Regulations drawings?", answer: "Yes. The technical stage can include Building Regulations drawings and coordination, subject to the agreed scope and project complexity." }
    ],
    related: [
      { href: "/services/planning-applications", label: "Planning applications" },
      { href: "/services/building-regulations", label: "Building Regulations drawings" },
      { href: "/estimate", label: "Indicative architect fee" }
    ]
  },
  {
    slug: "loft-conversions",
    title: "Loft Conversion Architects",
    metaTitle: "Loft Conversion Architects Birmingham & Teesside",
    metaDescription: "Loft conversion design, planning and Building Regulations drawings for dormer, hip-to-gable and roof-space projects.",
    eyebrow: "Roof-space design",
    intro: "A viable loft conversion depends on more than floor area. Stair position, headroom, fire safety, structure, daylight and the external roof form must work together.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Bright loft interior with rooflights and exposed roof geometry",
    sections: [
      { title: "Check the roof geometry", body: "We assess ridge height, roof pitch, structural form and the space needed for insulation and finishes. This helps determine whether a rooflight, dormer, hip-to-gable or mansard approach is realistic." },
      { title: "Resolve the staircase early", body: "The new stair affects both the loft and the floor below. We test headroom, landing arrangements and room layouts before committing to the external design." },
      { title: "Planning route", body: "Some loft conversions fall within Permitted Development while others require planning permission. Conservation areas, previous alterations and roof-facing constraints can change the route." },
      { title: "Fire and technical design", body: "Building Regulations considerations typically include protected escape routes, smoke detection, floor structure, insulation, ventilation, stairs and guarding." }
    ],
    deliverables: ["Measured survey", "Roof-space feasibility review", "Plans, elevations and sections", "Planning or lawful development drawings", "Building Regulations drawings where appointed", "Engineer coordination where appointed"],
    exclusions: ["Structural calculations unless expressly included", "Party Wall matters", "Statutory application fees", "Asbestos surveys", "Construction costs"],
    faqs: [
      { question: "Can every loft be converted?", answer: "No. Headroom, structural form, access and planning constraints determine viability. An early feasibility review reduces the risk of commissioning unsuitable drawings." },
      { question: "Does a dormer need planning permission?", answer: "Many dormers can fall within Permitted Development, but limits and conditions apply. The property type, location and previous roof alterations must be checked." },
      { question: "Do I need Building Regulations approval?", answer: "Yes, a habitable loft conversion normally requires Building Regulations approval even where planning permission is not required." }
    ],
    related: [
      { href: "/services/building-regulations", label: "Building Regulations" },
      { href: "/guides/loft-conversion-planning-permission", label: "Loft planning guide" },
      { href: "/estimate", label: "Indicative fee" }
    ]
  },
  {
    slug: "new-build-homes",
    title: "New Build Home Architects",
    metaTitle: "New Build Home Architects Birmingham & Teesside",
    metaDescription: "Site appraisal, concept design, planning strategy and technical design for one-off new homes and replacement dwellings.",
    eyebrow: "New residential design",
    intro: "A new home begins with the site: access, orientation, neighbouring context, landscape, planning history, drainage and viability all shape the design strategy.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Contemporary detached new build house with simple modern massing",
    sections: [
      { title: "Site appraisal", body: "We review the site boundaries, access, surrounding character, planning history and visible constraints before recommending the next stage." },
      { title: "Brief and viability", body: "Accommodation, floor area, build budget, energy goals and likely planning expectations are balanced before design options are produced." },
      { title: "Planning strategy", body: "The planning submission should explain why the scale, siting, appearance and landscape response are appropriate to the site and context." },
      { title: "Technical coordination", body: "New homes typically require coordinated input from structural, drainage, energy and other specialists. Consultant appointments and responsibilities are defined separately." }
    ],
    deliverables: ["Site and planning review", "Concept options", "Planning drawings", "Design statement where required", "Technical drawings where appointed", "Consultant coordination"],
    exclusions: ["Topographical survey unless included", "Ecology, arboricultural and drainage reports", "Energy assessor and structural engineer fees", "Warranty provider charges", "Statutory fees"],
    faqs: [
      { question: "Can you assess land before I buy it?", answer: "Yes. An early site appraisal can identify obvious planning and design constraints, although it cannot guarantee permission." },
      { question: "How long does a new-build design take?", answer: "The programme depends on site information, project complexity, consultant input and the planning route. A project-specific programme is issued with the proposal." },
      { question: "Can planning permission be guaranteed?", answer: "No architect can guarantee planning permission. The aim is to identify risk, respond to policy and present a well-supported proposal." }
    ],
    related: [
      { href: "/services/feasibility-studies", label: "Feasibility studies" },
      { href: "/services/planning-applications", label: "Planning applications" },
      { href: "/guides/new-build-site-feasibility", label: "New-build feasibility guide" }
    ]
  },
  {
    slug: "hmo-conversions",
    title: "HMO Conversion Architects",
    metaTitle: "HMO Conversion Architects Birmingham & Teesside",
    metaDescription: "HMO feasibility, planning, layout and Building Regulations support for shared housing conversions and property investment projects.",
    eyebrow: "Shared housing design",
    intro: "HMO projects must align planning, licensing, room standards, amenity, fire safety and building work. A layout that fits on paper may not be compliant or commercially sensible.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Contemporary shared residential interior suitable for an HMO conversion",
    sections: [
      { title: "Planning and use class review", body: "We establish the existing and proposed use, local planning context and whether permission is likely to be required." },
      { title: "Space and amenity standards", body: "Bedroom sizes, shared kitchen and living provision, storage, refuse and cycle arrangements are considered alongside the target occupancy." },
      { title: "Fire and technical strategy", body: "Escape, compartmentation, doors, detection, ventilation and service routes need early coordination with the relevant standards and specialist advice." },
      { title: "Investment feasibility", body: "An early layout test can identify whether the desired occupancy is realistic before significant professional and acquisition costs are committed." }
    ],
    deliverables: ["Existing property review", "Indicative compliant layouts", "Planning drawings where required", "Licensing-layout support", "Building Regulations drawings where appointed", "Consultant coordination"],
    exclusions: ["Licensing fees", "Fire risk assessor fees", "Structural and M&E engineering", "Planning application fees", "Legal advice"],
    faqs: [
      { question: "Does an HMO conversion need planning permission?", answer: "It depends on the existing use, proposed occupancy, local planning controls and any Article 4 Direction. The planning route should be checked before purchase or design." },
      { question: "Can you confirm the maximum number of rooms?", answer: "We can test a potential layout against the available information and relevant standards, but final licensing and statutory decisions remain with the authorities." },
      { question: "Are fire-safety consultants included?", answer: "Specialist fire advice is excluded unless expressly included. The need for specialist input depends on the building and proposed use." }
    ],
    related: [
      { href: "/guides/hmo-conversion-feasibility", label: "HMO feasibility guide" },
      { href: "/services/planning-applications", label: "Planning applications" },
      { href: "/services/building-regulations", label: "Technical drawings" }
    ]
  },
  {
    slug: "planning-applications",
    title: "Planning Application Architects",
    metaTitle: "Planning Application Architects Birmingham & Teesside",
    metaDescription: "Planning feasibility, design development, drawings and application support for residential extensions, lofts, HMOs and new homes.",
    eyebrow: "Planning strategy",
    intro: "A planning application is stronger when the proposal responds to the property, its neighbours, the street and the relevant policy rather than relying on drawings alone.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Architect reviewing residential planning drawings and design information",
    sections: [
      { title: "Choose the correct route", body: "We assess whether the proposal may use Permitted Development, prior approval, a lawful development certificate or a full planning application." },
      { title: "Identify constraints", body: "Common considerations include conservation areas, listed buildings, Green Belt, trees, flood risk, previous permissions and relationships with neighbouring properties." },
      { title: "Prepare a coherent submission", body: "The drawings, design rationale and supporting reports should tell the same story. Required specialist information is identified as early as possible." },
      { title: "Manage expectations", body: "Planning decisions cannot be guaranteed. We provide a reasoned assessment of risk and explain where design compromise or pre-application advice may be appropriate." }
    ],
    deliverables: ["Planning history review", "Design development", "Application drawings", "Application forms and submission support", "Design statement where included", "Response to routine planning queries"],
    exclusions: ["Council application fees", "Specialist reports", "Planning consultant fees unless included", "Appeal services unless separately appointed", "Legal advice"],
    faqs: [
      { question: "How long does planning permission take?", answer: "Local authorities publish target periods, but actual times can vary because of validation, consultation, amendments and workload. We provide a realistic project programme rather than guaranteeing a decision date." },
      { question: "Can you take over a refused application?", answer: "Yes. We first review the decision notice, officer report, drawings and planning context before advising whether redesign, resubmission or appeal is the stronger route." },
      { question: "Do you submit the application?", answer: "Submission and routine application coordination can be included in the agreed planning package." }
    ],
    related: [
      { href: "/services/planning-appeals", label: "Planning appeals" },
      { href: "/services/feasibility-studies", label: "Feasibility studies" },
      { href: "/guides/planning-permission-house-extension", label: "Extension planning guide" }
    ]
  },
  {
    slug: "building-regulations",
    title: "Building Regulations Drawings",
    metaTitle: "Building Regulations Drawings Birmingham & Teesside",
    metaDescription: "Technical architectural drawings and consultant coordination for residential Building Regulations applications and contractor pricing.",
    eyebrow: "Technical design",
    intro: "Building Regulations drawings translate the approved design into coordinated technical information covering safety, performance and buildability.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Detailed architectural technical drawings used for Building Regulations",
    sections: [
      { title: "Develop the construction strategy", body: "Wall, roof and floor build-ups, insulation, openings, drainage and key junctions are developed to an agreed level of detail." },
      { title: "Coordinate structural information", body: "The architectural and structural drawings must align. Structural engineer design and calculations are separately appointed unless expressly included." },
      { title: "Address regulatory requirements", body: "The relevant requirements vary by project but can include structure, fire safety, ventilation, energy, drainage, stairs, guarding, accessibility and electrical safety." },
      { title: "Support pricing and construction", body: "Technical drawings can improve contractor pricing, but they are not automatically a full specification, tender package or construction contract administration service." }
    ],
    deliverables: ["Technical plans and sections", "Key construction details", "Building Control submission support", "Structural information coordination", "Notes and performance requirements", "Responses to routine Building Control comments"],
    exclusions: ["Structural engineer calculations", "Building Control fees", "SAP or energy-assessor fees", "Party Wall services", "Site inspection and contract administration unless appointed"],
    faqs: [
      { question: "Are Building Regulations and planning permission the same?", answer: "No. Planning considers land use and external impacts, while Building Regulations address technical standards such as structure, fire, energy and ventilation." },
      { question: "Do the drawings include structural calculations?", answer: "Not unless expressly stated. Structural calculations are normally prepared by a structural engineer and coordinated with the architectural information." },
      { question: "Can builders price from the drawings?", answer: "The drawings can support pricing, but the reliability of quotations depends on the completeness of the scope, specification and site information." }
    ],
    related: [
      { href: "/guides/building-regulations-drawings", label: "Building Regulations guide" },
      { href: "/services/house-extensions", label: "Extension design" },
      { href: "/estimate", label: "Indicative fee" }
    ]
  },
  {
    slug: "garage-conversions",
    title: "Garage Conversion Architects",
    metaTitle: "Garage Conversion Architects Birmingham & Teesside",
    metaDescription: "Feasibility, planning and Building Regulations design for attached, integral and detached garage conversions.",
    eyebrow: "Existing-space transformation",
    intro: "Garage conversions can add useful accommodation without extending the building footprint, but floor levels, insulation, ventilation, structure, drainage and planning restrictions need to be checked.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Converted residential garage forming a bright modern living space",
    sections: [
      { title: "Confirm the planning position", body: "Some garage conversions do not require planning permission, but conditions on previous approvals, conservation controls and changes to external appearance can alter the position." },
      { title: "Check levels and construction", body: "Existing slab levels, damp protection, wall construction and headroom affect the build-up required for a comfortable habitable room." },
      { title: "Integrate the new room", body: "The best design considers circulation, daylight, storage and the relationship with the existing house rather than treating the garage as an isolated box." },
      { title: "Technical approval", body: "Building Regulations matters can include insulation, ventilation, structure, fire safety, drainage and electrical work." }
    ],
    deliverables: ["Feasibility review", "Measured survey where included", "Planning drawings where required", "Building Regulations drawings where appointed", "Engineer coordination where required"],
    exclusions: ["Structural engineer fees", "Drainage surveys", "Planning and Building Control fees", "Construction costs"],
    faqs: [
      { question: "Does a garage conversion need planning permission?", answer: "Often it may not, but restrictions and previous planning conditions can apply. We check the property-specific position." },
      { question: "Will the garage floor need rebuilding?", answer: "It depends on the existing construction, levels, damp protection and insulation requirements. This is assessed during technical design." }
    ],
    related: [
      { href: "/services/building-regulations", label: "Building Regulations" },
      { href: "/services/feasibility-studies", label: "Feasibility study" },
      { href: "/estimate", label: "Indicative fee" }
    ]
  },
  {
    slug: "measured-surveys",
    title: "Residential Measured Surveys",
    metaTitle: "Residential Measured Surveys Birmingham & Teesside",
    metaDescription: "Measured building surveys and accurate existing drawings for residential design, planning and Building Regulations projects.",
    eyebrow: "Existing building information",
    intro: "Reliable design starts with reliable information. A measured survey records the building geometry needed to prepare existing plans, elevations and sections.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Architect measuring an existing residential building for survey drawings",
    sections: [
      { title: "Survey scope", body: "The required scope depends on the project. It may include internal room dimensions, wall thicknesses, openings, key levels, roof form and external context." },
      { title: "Existing drawings", body: "Survey information is translated into clear existing plans and, where required, elevations and sections for design and statutory submissions." },
      { title: "Limitations", body: "A standard measured survey is not a structural survey, condition survey, asbestos survey or topographical survey. Hidden construction cannot be confirmed without investigation." },
      { title: "Why accuracy matters", body: "Incorrect existing information can disrupt design, planning submissions, engineering and construction. The agreed survey scope should match the intended project stage." }
    ],
    deliverables: ["Site measurement", "Existing floor plans", "Elevations where included", "Sections where included", "Digital drawing files for the architectural service"],
    exclusions: ["Structural condition survey", "Topographical survey", "Drainage survey", "Asbestos survey", "Measured boundary verification"],
    faqs: [
      { question: "How long does a measured survey take?", answer: "The site visit and drawing time depend on the size, complexity and required outputs. A programme is confirmed before appointment." },
      { question: "Is this the same as a structural survey?", answer: "No. A measured survey records geometry for drawings; a structural or building survey assesses condition and defects." }
    ],
    related: [
      { href: "/services/feasibility-studies", label: "Feasibility studies" },
      { href: "/services/house-extensions", label: "House extensions" },
      { href: "/estimate", label: "Indicative fee" }
    ]
  },
  {
    slug: "feasibility-studies",
    title: "Residential Feasibility Studies",
    metaTitle: "Architectural Feasibility Studies Birmingham & Teesside",
    metaDescription: "Early architectural feasibility studies covering planning risk, layout potential, constraints, likely professional scope and next steps.",
    eyebrow: "RIBA Stage 0–1 support",
    intro: "A feasibility study helps determine whether a project is worth pursuing before significant money is committed to detailed design, surveys and statutory applications.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Architect reviewing feasibility sketches, plans and project information",
    sections: [
      { title: "Define the brief", body: "We clarify priorities, target accommodation, budget assumptions, timing and the decisions that need to be made." },
      { title: "Identify constraints", body: "Planning history, property type, site relationships, access and visible technical issues are reviewed at an appropriate early level." },
      { title: "Test options", body: "Simple layout or massing studies can reveal whether the brief fits the property and where compromise may be needed." },
      { title: "Recommend the next step", body: "The output should explain the likely planning route, surveys, consultants and architectural stages required rather than leaving the client with an attractive sketch and no delivery plan." }
    ],
    deliverables: ["Brief review", "Desktop planning review", "Initial option testing where included", "Risk and constraint summary", "Recommended next stages"],
    exclusions: ["Planning permission guarantee", "Detailed technical design", "Specialist reports", "Structural calculations", "Formal valuation or cost plan"],
    faqs: [
      { question: "Is a feasibility study worth it?", answer: "It can be particularly valuable where the property is constrained, the brief is ambitious, the site is being purchased or planning risk is unclear." },
      { question: "Does feasibility include planning drawings?", answer: "Not normally. The exact output is defined in the proposal; detailed planning drawings are usually a subsequent stage." }
    ],
    related: [
      { href: "/services/planning-applications", label: "Planning applications" },
      { href: "/guides/architect-fees-residential-project", label: "Architect fee guide" },
      { href: "/estimate", label: "Indicative fee" }
    ]
  },
  {
    slug: "planning-appeals",
    title: "Residential Planning Appeal Support",
    metaTitle: "Residential Planning Appeal Support Birmingham & Teesside",
    metaDescription: "Architectural review and planning appeal support for refused residential extensions, new homes, HMOs and alterations.",
    eyebrow: "Refusal review",
    intro: "A refusal should be reviewed objectively. Sometimes an appeal is justified; in other cases a revised application is faster, lower risk or more likely to succeed.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1800&q=86",
    imageAlt: "Planning decision documents and architectural drawings being reviewed",
    sections: [
      { title: "Review the refusal reasons", body: "We examine the decision notice, officer report, drawings, representations and relevant planning context." },
      { title: "Assess the design evidence", body: "The appeal must address the actual reasons for refusal with clear drawings and reasoned evidence rather than simply repeating the original application." },
      { title: "Compare appeal and resubmission", body: "Design changes, timing, cost and the strength of the planning case are considered before recommending a route." },
      { title: "Define the appointment", body: "Appeal statements, revised drawings and specialist planning advice are scoped separately according to the case." }
    ],
    deliverables: ["Refusal review", "Design and evidence assessment", "Appeal or resubmission recommendation", "Revised drawings where appointed", "Architectural appeal input where appointed"],
    exclusions: ["Planning consultant or barrister fees", "Council and inspectorate fees where applicable", "Specialist evidence", "Legal advice"],
    faqs: [
      { question: "Should I appeal a planning refusal?", answer: "Only after the refusal reasons and evidence have been reviewed. A revised design or resubmission may sometimes be the stronger route." },
      { question: "Can you guarantee an appeal will succeed?", answer: "No. Appeal outcomes cannot be guaranteed." }
    ],
    related: [
      { href: "/services/planning-applications", label: "Planning applications" },
      { href: "/services/feasibility-studies", label: "Feasibility review" },
      { href: "/estimate", label: "Discuss the project" }
    ]
  }
];

export const locations: LocationPageData[] = [
  {
    slug: "birmingham",
    place: "Birmingham",
    metaTitle: "Residential Architects Birmingham | Hepburn Architects",
    metaDescription: "Residential architects in Birmingham for extensions, loft conversions, HMOs, new homes, planning applications and Building Regulations.",
    intro: "Hepburn Architects provides founder-led residential design, planning and technical services for homeowners and property clients across Birmingham.",
    localContext: "Birmingham contains a wide range of Victorian and Edwardian terraces, suburban semis, inter-war housing, conservation areas and redevelopment sites. The right strategy depends on the property and immediate context rather than a city-wide formula.",
    services: ["House extensions", "Loft conversions", "HMO feasibility and design", "New homes", "Planning applications", "Building Regulations drawings"],
    considerations: [
      { title: "Neighbour relationships", body: "Daylight, outlook, privacy, massing and boundary conditions often shape extension proposals." },
      { title: "Character and heritage", body: "Conservation areas and locally distinctive streets require a more context-led approach to scale, materials and roof form." },
      { title: "HMO planning context", body: "Use-class changes and local controls should be checked before investment decisions or detailed layouts." }
    ],
    faqs: [
      { question: "Do you work across all Birmingham districts?", answer: "We consider projects across Birmingham, subject to scope, location and availability." },
      { question: "Can you visit the property?", answer: "Site visits and measured surveys can be included where appropriate to the agreed service." }
    ]
  },
  {
    slug: "solihull",
    place: "Solihull",
    metaTitle: "Residential Architects Solihull | Hepburn Architects",
    metaDescription: "Architect-led extensions, loft conversions, new homes, planning and Building Regulations services in Solihull.",
    intro: "We support residential projects in Solihull with feasibility advice, measured surveys, design, planning applications and technical drawings.",
    localContext: "Solihull projects range from suburban house extensions and lofts to replacement dwellings and larger detached-home remodelling. Plot width, established building lines, trees and neighbouring amenity can be important design drivers.",
    services: ["Rear and side extensions", "Two-storey extensions", "Loft conversions", "Internal remodelling", "Replacement dwellings", "Technical design"],
    considerations: [
      { title: "Established suburban character", body: "Scale and appearance should respond to the original house and the rhythm of the street." },
      { title: "Trees and landscape", body: "Mature landscaping and protected trees may influence siting, foundations and specialist-report requirements." },
      { title: "Whole-house planning", body: "The strongest extensions usually resolve circulation and existing-room quality as well as adding space." }
    ],
    faqs: [
      { question: "Can you advise before we buy a property in Solihull?", answer: "Yes. A feasibility review can identify visible design and planning risks, although it cannot guarantee consent." },
      { question: "Do you offer fixed fees?", answer: "We provide defined fees by stage once the project scope and constraints have been reviewed." }
    ]
  },
  {
    slug: "sutton-coldfield",
    place: "Sutton Coldfield",
    metaTitle: "Residential Architects Sutton Coldfield | Hepburn Architects",
    metaDescription: "Residential architects for extensions, loft conversions, remodelling and planning applications in Sutton Coldfield.",
    intro: "Hepburn Architects works with homeowners in Sutton Coldfield on extensions, lofts and whole-house remodelling projects.",
    localContext: "The area includes substantial detached and semi-detached homes, mature plots and neighbourhoods with strong established character. Extension scale, roof form, trees and relationships with neighbours require careful testing.",
    services: ["House extensions", "Loft conversions", "Garage conversions", "Whole-house remodelling", "Planning applications", "Building Regulations"],
    considerations: [
      { title: "Mature residential plots", body: "Trees, gardens, level changes and access can affect both planning and construction strategy." },
      { title: "Roof and frontage changes", body: "Loft and extension designs should preserve a coherent relationship with the original dwelling." },
      { title: "Buildability", body: "Large structural openings and complex remodelling require early engineering coordination." }
    ],
    faqs: [
      { question: "Can you design a wrap-around extension?", answer: "Yes, subject to the property, planning route and relationships with neighbouring homes." },
      { question: "Can the loft and extension be designed together?", answer: "Yes. Coordinating them can improve circulation, structure and the overall planning strategy." }
    ]
  },
  {
    slug: "harborne",
    place: "Harborne",
    metaTitle: "Residential Architects Harborne | Hepburn Architects",
    metaDescription: "Architects for house extensions, loft conversions and residential planning applications in Harborne, Birmingham.",
    intro: "We provide residential architectural services in Harborne for period-house extensions, loft conversions and internal remodelling.",
    localContext: "Harborne includes terraces, villas, suburban family houses and areas with strong architectural character. Rear additions, roof alterations and material choices should be designed around the qualities of the original building.",
    services: ["Period-house extensions", "Loft conversions", "Internal remodelling", "Planning applications", "Building Regulations drawings"],
    considerations: [
      { title: "Period fabric", body: "Original proportions and features can inform a contemporary addition without requiring imitation." },
      { title: "Narrow plots and neighbours", body: "Privacy, enclosure and daylight need careful handling on constrained urban plots." },
      { title: "Roof-space constraints", body: "Stair position and roof form are tested before external loft alterations are fixed." }
    ],
    faqs: [
      { question: "Can a modern extension work with a period house?", answer: "Yes. A successful contrast depends on proportion, material quality and a clear relationship with the original building." },
      { question: "Do you handle the planning submission?", answer: "Planning submission support can be included in the agreed package." }
    ]
  },
  {
    slug: "edgbaston",
    place: "Edgbaston",
    metaTitle: "Residential Architects Edgbaston | Hepburn Architects",
    metaDescription: "Residential architects in Edgbaston for extensions, remodelling, listed and conservation-area planning support.",
    intro: "Hepburn Architects supports residential alterations, extensions and remodelling projects in Edgbaston.",
    localContext: "Edgbaston includes large villas, apartment conversions, mature gardens and sensitive townscape. Heritage context, trees, boundary treatments and the scale of additions can require a particularly careful design response.",
    services: ["House extensions", "Sensitive remodelling", "Conservation-area design", "Planning applications", "Technical drawings"],
    considerations: [
      { title: "Heritage context", body: "Significance, original fabric and townscape contribution should be understood before alteration." },
      { title: "Landscape setting", body: "Mature trees and generous plots can be central to the character and planning response." },
      { title: "Subservient additions", body: "Scale, position and massing should allow the original building to remain legible." }
    ],
    faqs: [
      { question: "Can you work on a listed building?", answer: "We can review the project and identify where specialist heritage input or listed building consent may be required." },
      { question: "Are heritage reports included?", answer: "Heritage assessment is included only where expressly stated in the written scope." }
    ]
  },
  {
    slug: "moseley",
    place: "Moseley",
    metaTitle: "Residential Architects Moseley | Hepburn Architects",
    metaDescription: "Architect-led residential extensions, lofts and planning services in Moseley, Birmingham.",
    intro: "We design residential extensions, loft conversions and remodelling projects in Moseley with a focus on planning clarity and the character of the existing home.",
    localContext: "Moseley combines terraces, Victorian and Edwardian homes, suburban streets and sensitive character areas. Many projects need to balance modern family living with the proportions and details of period properties.",
    services: ["Rear extensions", "Side-return extensions", "Loft conversions", "Internal remodelling", "Planning and technical design"],
    considerations: [
      { title: "Character-led design", body: "Contemporary changes should respond to the hierarchy and proportions of the existing building." },
      { title: "Urban plot constraints", body: "Side boundaries, overlooking and daylight can shape the available extension envelope." },
      { title: "Material strategy", body: "A restrained palette often creates a stronger relationship between old and new." }
    ],
    faqs: [
      { question: "Can you advise on a side-return extension?", answer: "Yes. We assess the planning route, daylight, drainage and relationship with the existing plan." },
      { question: "Can you coordinate a structural engineer?", answer: "Yes. Engineer coordination can be included, while the engineer's own fee remains separate unless stated." }
    ]
  },
  {
    slug: "middlesbrough",
    place: "Middlesbrough",
    metaTitle: "Residential Architects Middlesbrough | Hepburn Architects",
    metaDescription: "Residential architects in Middlesbrough for extensions, HMOs, loft conversions, planning and Building Regulations.",
    intro: "Hepburn Architects provides residential design, planning and technical services in Middlesbrough and the wider Teesside area.",
    localContext: "Projects include terrace and semi-detached alterations, HMO conversions, extensions, lofts and investment-property feasibility. Planning use, room standards and fire strategy are especially important for shared housing.",
    services: ["House extensions", "Loft conversions", "HMO feasibility", "Planning applications", "Building Regulations drawings"],
    considerations: [
      { title: "Terraced housing", body: "Narrow plots, shared boundaries and existing rear additions require efficient design and drainage coordination." },
      { title: "HMO viability", body: "Planning, licensing, space standards and fire requirements must be tested together." },
      { title: "Investment decisions", body: "An early feasibility layout can help prevent unrealistic occupancy assumptions." }
    ],
    faqs: [
      { question: "Do you design HMOs in Middlesbrough?", answer: "Yes. We provide feasibility, planning and technical support subject to the agreed scope." },
      { question: "Can you advise before property purchase?", answer: "Yes. A pre-purchase feasibility review can identify visible constraints but is not a valuation or guarantee." }
    ]
  },
  {
    slug: "teesside",
    place: "Teesside",
    metaTitle: "Residential Architects Teesside | Hepburn Architects",
    metaDescription: "Residential architects across Teesside for extensions, HMOs, loft conversions, new homes and technical drawings.",
    intro: "We support homeowners and property clients across Teesside with founder-led architectural design, planning and Building Regulations services.",
    localContext: "The Teesside area contains varied housing markets, from urban terraces and suburban semis to detached homes and development sites. Each project is reviewed against its specific local authority context and property constraints.",
    services: ["Extensions", "Loft conversions", "HMOs", "New homes", "Planning applications", "Building Regulations"],
    considerations: [
      { title: "Different authority areas", body: "Planning policies and validation requirements depend on the project's actual local authority." },
      { title: "Existing housing stock", body: "Terraces and semis often benefit from efficient layout planning before external expansion." },
      { title: "Technical coordination", body: "Drainage, structure and energy upgrades should be considered alongside design." }
    ],
    faqs: [
      { question: "Which Teesside areas do you cover?", answer: "We consider projects across Teesside, including Middlesbrough, Stockton-on-Tees and surrounding areas, subject to scope and availability." },
      { question: "Do you work remotely?", answer: "Desktop feasibility and consultations can often begin remotely, while surveys and site-specific stages are agreed separately." }
    ]
  },
  {
    slug: "stockton-on-tees",
    place: "Stockton-on-Tees",
    metaTitle: "Residential Architects Stockton-on-Tees | Hepburn Architects",
    metaDescription: "Residential extension, loft, HMO and planning architects serving Stockton-on-Tees.",
    intro: "Hepburn Architects provides residential feasibility, design, planning and technical services in Stockton-on-Tees.",
    localContext: "The area includes terraces, suburban housing, villages and development opportunities. The appropriate approach depends on the property type, planning history and immediate context.",
    services: ["House extensions", "Loft conversions", "HMO feasibility", "New homes", "Planning and Building Regulations"],
    considerations: [
      { title: "Property-specific planning", body: "The available development envelope depends on previous alterations and the site's relationship with neighbours." },
      { title: "Shared housing", body: "Proposed HMO occupancy should be tested against planning, licensing and fire requirements." },
      { title: "Early budget alignment", body: "Design options should be assessed against realistic build and professional-cost assumptions." }
    ],
    faqs: [
      { question: "Can you prepare a lawful development application?", answer: "Yes, where that is the appropriate route and included in the agreed planning scope." },
      { question: "Do you provide construction drawings?", answer: "Building Regulations and more detailed pre-construction information can be provided under a separate technical stage." }
    ]
  },
  {
    slug: "yarm",
    place: "Yarm",
    metaTitle: "Residential Architects Yarm | Hepburn Architects",
    metaDescription: "Residential architects for extensions, remodelling, loft conversions and new homes in Yarm.",
    intro: "We support residential design and planning projects in Yarm, including extensions, loft conversions and larger home remodelling.",
    localContext: "Yarm includes historic character, suburban housing and larger family homes. Sensitive townscape, river and flood considerations, trees and neighbouring relationships may influence individual sites.",
    services: ["House extensions", "Loft conversions", "Whole-house remodelling", "New homes", "Planning applications"],
    considerations: [
      { title: "Historic context", body: "Some sites require a careful response to established character and heritage significance." },
      { title: "Site constraints", body: "Flood risk, landscape and access should be checked where relevant rather than assumed." },
      { title: "Family-home remodelling", body: "Existing circulation and underused rooms can often be improved before adding excessive floor area." }
    ],
    faqs: [
      { question: "Can you assess flood-risk requirements?", answer: "We identify where specialist flood-risk input may be required, but specialist reports are separately appointed." },
      { question: "Can you design a contemporary extension?", answer: "Yes. The design should respond to the original house and site rather than applying a standard style." }
    ]
  }
];

export const guides = [
  {
    slug: "planning-permission-house-extension",
    title: "Do You Need Planning Permission for a House Extension?",
    metaTitle: "House Extension Planning Permission Guide | Hepburn Architects",
    metaDescription: "A practical guide to Permitted Development, householder planning applications and early checks for residential extensions.",
    intro: "Whether an extension needs planning permission depends on the property, location, proposal and development history. The safest starting point is to establish the route before detailed design.",
    sections: [
      ["Start with the property", "Property type, existing extensions, planning conditions and whether the building is listed or in a sensitive area can all affect the available route."],
      ["Permitted Development is conditional", "Permitted Development is not a blanket exemption. Size, height, position, materials and other limitations apply, and some rights may have been removed."],
      ["When a planning application may be preferable", "A full application may be required or strategically preferable where the design exceeds permitted limits, affects a sensitive elevation or needs a more contextual planning judgement."],
      ["Evidence and certificates", "Where work is intended to be lawful under Permitted Development, a lawful development certificate can provide useful formal confirmation."],
      ["Avoid designing backwards", "Developing a preferred design before checking the planning route can create avoidable redesign and cost."],
      ["What an architect adds", "The architect can assess constraints, test options and prepare coherent drawings and supporting information. Permission can never be guaranteed."]
    ]
  },
  {
    slug: "architect-fees-residential-project",
    title: "How Much Does a Residential Architect Cost?",
    metaTitle: "Residential Architect Fees Guide | Hepburn Architects",
    metaDescription: "Understand residential architect fee stages, typical inclusions, exclusions and why indicative calculators are not quotations.",
    intro: "Architect fees vary because the amount of work, risk and coordination differs between projects. A useful comparison begins with scope rather than a single percentage or headline figure.",
    sections: [
      ["Fees by stage", "A staged appointment allows feasibility, survey, planning and technical design to be priced and authorised separately."],
      ["What affects the fee", "Property size, project complexity, planning constraints, design options, consultant coordination and level of construction information all influence time and responsibility."],
      ["What is commonly excluded", "Structural engineering, statutory charges, specialist surveys, Party Wall services and contractor costs are normally separate unless specifically stated."],
      ["Indicative calculators", "Online figures are useful for early budgeting but cannot account for every property or constraint. They are not quotations or contractual offers."],
      ["Compare deliverables", "Two fee proposals may appear different because they include different drawings, revisions, submissions, coordination and construction support."],
      ["Written appointment", "The final proposal should clearly state services, exclusions, assumptions, payment stages and client responsibilities."]
    ]
  },
  {
    slug: "building-regulations-drawings",
    title: "What Are Building Regulations Drawings?",
    metaTitle: "Building Regulations Drawings Guide | Hepburn Architects",
    metaDescription: "A clear guide to technical architectural drawings, structural coordination and Building Control for residential projects.",
    intro: "Planning approval does not provide the technical information needed to demonstrate compliance or obtain reliable contractor prices.",
    sections: [
      ["Planning versus Building Regulations", "Planning considers development and external impacts. Building Regulations address technical requirements including structure, fire, energy, ventilation, drainage and safety."],
      ["What the drawings show", "The exact set varies, but commonly includes technical plans, sections, construction build-ups, notes and key details."],
      ["Structural engineering", "Beams, foundations and other structural design are normally prepared by a structural engineer and coordinated with the architecture."],
      ["Building Control", "The drawings and calculations are submitted to a Building Control body, which may request clarification and inspect work during construction."],
      ["Pricing limitations", "Technical drawings improve pricing, but a complete tender package may also require schedules, specifications and defined contractor responsibilities."],
      ["Site changes", "Existing buildings frequently reveal hidden conditions. The design team and contractor need a clear process for dealing with changes."]
    ]
  },
  {
    slug: "loft-conversion-planning-permission",
    title: "Does a Loft Conversion Need Planning Permission?",
    metaTitle: "Loft Conversion Planning Permission Guide | Hepburn Architects",
    metaDescription: "Guide to dormers, rooflights, hip-to-gable lofts, Permitted Development and Building Regulations.",
    intro: "Some loft conversions use Permitted Development rights, while others need planning permission. Building Regulations approval is a separate requirement.",
    sections: [
      ["Check the roof first", "Headroom, structural form and staircase position determine whether the project is physically workable."],
      ["Permitted Development limits", "Volume, roof position, height, materials and projecting features can be controlled. Rights may also be restricted."],
      ["Sensitive locations", "Conservation areas, listed buildings and prominent roof slopes may require a more careful planning approach."],
      ["Lawful development certificate", "A certificate can formally confirm that a proposed loft is lawful under Permitted Development."],
      ["Building Regulations", "Fire protection, escape, structure, insulation, ventilation, stairs and guarding remain relevant even where planning is not required."],
      ["Neighbour and construction matters", "Party Wall procedures and access considerations are separate from planning and Building Regulations."]
    ]
  },
  {
    slug: "hmo-conversion-feasibility",
    title: "HMO Conversion Feasibility: What to Check First",
    metaTitle: "HMO Conversion Feasibility Guide | Hepburn Architects",
    metaDescription: "Early checks for HMO planning, licensing, room sizes, amenity, fire safety and investment viability.",
    intro: "An HMO conversion should be tested as a planning, licensing, fire and spatial problem before room numbers are treated as income.",
    sections: [
      ["Existing and proposed use", "The use-class position and local controls should be checked before purchase or conversion."],
      ["Room and amenity standards", "Bedroom dimensions alone do not establish compliance. Shared kitchens, living areas, storage, refuse and circulation also matter."],
      ["Fire strategy", "Escape routes, doors, detection, compartmentation and service penetrations need early consideration and may require specialist advice."],
      ["Building condition", "Existing structure, damp, services and previous alterations can materially affect conversion cost."],
      ["Occupancy versus quality", "Maximising room count can create poor layouts, licensing risk and weak long-term value."],
      ["Professional team", "Architectural, planning, fire, structural and building-control responsibilities should be defined before work starts."]
    ]
  },
  {
    slug: "new-build-site-feasibility",
    title: "New Build Site Feasibility: Before You Buy Land",
    metaTitle: "New Build Site Feasibility Guide | Hepburn Architects",
    metaDescription: "Key planning, access, landscape, drainage, ecology and viability checks before buying a residential development site.",
    intro: "A site that appears large enough for a house may still be constrained by access, planning context, landscape, ecology, drainage or neighbouring amenity.",
    sections: [
      ["Planning history and context", "Previous decisions, surrounding development and policy designations help frame the likely planning risk."],
      ["Access and servicing", "Safe access, parking, refuse, emergency access and utility connections can determine whether a concept is deliverable."],
      ["Site geometry and neighbours", "Building position, privacy, outlook, daylight and garden space need to work together."],
      ["Trees, ecology and drainage", "Specialist surveys may be required and can affect both the developable area and programme."],
      ["Build cost and value", "Planning potential should be tested alongside likely construction and consultant costs rather than treated as a purely visual exercise."],
      ["Conditional decisions", "A feasibility assessment reduces risk but cannot replace legal due diligence or guarantee planning permission."]
    ]
  }
];
