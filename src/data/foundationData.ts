export interface Initiative {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  theme: string;
  quote: string;
  summary: string;
  heroImage: string;
  iconName: string;
  whyItMatters: string[];
  plannedObjectives: string[];
  proposedActivities: {
    title: string;
    description: string;
  }[];
  focusAreas: {
    title: string;
    description: string;
    highlights: string[];
  }[];
  illustrativeGallery: {
    url: string;
    caption: string;
  }[];
}

export const SDF_INFO = {
  name: "SAMRAKSHAN DHARA FOUNDATION",
  shortName: "SDF",
  tagline: "The Living World — Nature. Humanity. Compassion.",
  legalStructure: "Section 8 Non-Profit Organisation",
  incorporatedDate: "04 August 2026",
  cin: "U88100JH2026NPL028718",
  email: "samrakshandharafoundation@gmail.com",
  location: "Dhanbad, Jharkhand, India",
  instagram: "https://www.instagram.com/samrakshan_dhara/",
  statusNote: "Preparatory Stage — All programmes are proposed, planned and future-oriented.",
  meaning: {
    samrakshan: {
      word: "SAMRAKSHAN",
      translation: "Protection",
      mantra: "The Promise to Protect.",
      description: "A steadfast commitment to safeguarding vulnerable wildlife, nurturing fragile ecosystems, and providing compassionate shelter for lives in need."
    },
    dhara: {
      word: "DHARA",
      translation: "Flow & Earth",
      mantra: "The Flow That Carries Life Forward.",
      description: "A continuous, gentle current of benevolent action that sweeps across communities, spreading awareness, knowledge, and enduring environmental balance."
    },
    together: {
      word: "TOGETHER",
      translation: "Harmonious Confluence",
      mantra: "A Continuous Movement of Care.",
      description: "Where individual goodwill converges into an unstoppable river of collective responsibility, restoring life and equilibrium to our shared home."
    }
  }
};

export const INITIATIVES: Initiative[] = [
  {
    id: "nature-greenery",
    slug: "nature-greenery",
    title: "Nature, Greenery & Plantation",
    shortTitle: "Nature & Greenery",
    theme: "Botanical Stewardship",
    quote: "Roots that anchor our heritage; canopies that shield tomorrow.",
    summary: "Dedicated to the planned cultivation of native flora, community sapling drives, urban micro-groves, and the study of bio-remedial microalgae for atmospheric carbon capture.",
    heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=85",
    iconName: "Trees",
    whyItMatters: [
      "Rapid urbanisation leads to deforestation, groundwater depletion, and localized heat island effects.",
      "Native species are critical for maintaining local bird, pollinator, and insect biodiversity.",
      "Living green cover creates natural carbon sinks, cools neighborhoods, and stabilizes topsoil."
    ],
    plannedObjectives: [
      "Facilitate structured native sapling adoption programs across Dhanbad and neighboring regions.",
      "Design urban green corridors in educational and civic campuses.",
      "Explore pilot research on natural algae-based water & atmospheric filtration concepts."
    ],
    proposedActivities: [
      {
        title: "Native Seedling Nursery Mapping",
        description: "Identifying climate-resilient regional tree species (Neem, Peepal, Banyan, Jamun) suited for long-term community survival without excessive water dependency."
      },
      {
        title: "Community Sapling Guardianship",
        description: "Engaging local residents to become named guardians of planted trees for their critical first three years of growth."
      },
      {
        title: "Microalgae Ecology Workshops",
        description: "Introductory demonstrations on how freshwater algae can naturally absorb excess nitrates and purify community pond water."
      }
    ],
    focusAreas: [
      {
        title: "Native Tree Ecosystems",
        description: "Prioritizing indigenous trees that naturally support avian and pollinator species with zero chemical intervention.",
        highlights: ["Drought-tolerant varieties", "Pollinator-friendly flowering trees", "Deep-root soil stabilizers"]
      },
      {
        title: "Soil Micro-Nutrient Stewardship",
        description: "Guiding communities on organic leaf-mulching, vermicomposting, and protecting living microbiomes under city trees.",
        highlights: ["Compost distribution models", "Soil moisture retention", "Zero leaf burning advocacy"]
      },
      {
        title: "Algae Carbon Capture Studies",
        description: "Preliminary academic exploration into photobioreactor models and natural aquatic green belts for air and runoff remediation.",
        highlights: ["Exploratory clean-tech", "Educational demonstrations", "Biological pond revival"]
      }
    ],
    illustrativeGallery: [
      {
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Native woodland canopy preserving delicate forest floor microclimates."
      },
      {
        url: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Sunlit deep forest canopy highlighting natural biodiversity."
      },
      {
        url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Healthy regenerative soil nourishing young native saplings."
      }
    ]
  },
  {
    id: "waste-cleanliness",
    slug: "waste-cleanliness",
    title: "Waste Management & Cleanliness",
    shortTitle: "Waste Management",
    theme: "Circular Purity",
    quote: "A clean community is the quietest reflection of self-respect.",
    summary: "Planned citizen education on source-level dry/wet waste segregation, reduction of single-use plastics, and connecting segregated recyclables to authorised processing channels.",
    heroImage: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1800&q=85",
    iconName: "Trash2",
    whyItMatters: [
      "Mixed municipal waste ends up in open dumps, polluting groundwater with hazardous leachate.",
      "Plastic litter chokes municipal stormwater drains, causing monsoon flooding and animal choking.",
      "Effective segregation at source can divert up to 70% of waste directly into clean recycling streams."
    ],
    plannedObjectives: [
      "Educate household and commercial clusters on 2-bin (dry/wet) source segregation protocols.",
      "Encourage reduction of single-use disposable plastics in everyday household routines.",
      "Collaborate with authorized regional recycling aggregators to formalise material recovery."
    ],
    proposedActivities: [
      {
        title: "Neighborhood Segregation Clinics",
        description: "Practical door-to-door demonstrations demonstrating how to prevent dry recyclables from getting contaminated by food scraps."
      },
      {
        title: "Plastic-Free Weekly Bazaar Campaigns",
        description: "Voluntary distribution of durable cloth bags and public awareness sessions at local vegetable and grain markets."
      },
      {
        title: "Clean Street Citizen Pledges",
        description: "Empowering resident welfare groups to manage localised clean zones and maintain dedicated litter-free streets."
      }
    ],
    focusAreas: [
      {
        title: "Two-Bin Household Segregation",
        description: "Clear guidelines dividing biodegradable kitchen waste from clean dry plastic, paper, and metal recyclables.",
        highlights: ["Color-coded identification", "Kitchen waste composting", "Clean plastic bundling"]
      },
      {
        title: "Single-Use Plastic Eradication",
        description: "Encouraging alternatives like jute, cotton, and reusable metal containers for daily consumer errands.",
        highlights: ["Market vendor outreach", "Cloth bag banks", "Youth awareness ambassadors"]
      },
      {
        title: "Authorised Recycler Bridging",
        description: "Planned partnerships with licensed recycling facilities to ensure transparent, ethical processing paths.",
        highlights: ["Circular material loops", "Traceable processing", "Informal worker integration"]
      }
    ],
    illustrativeGallery: [
      {
        url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Organized waste segregation safeguarding our municipal ecosystems."
      },
      {
        url: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Reusable natural containers eliminating single-use plastic waste."
      },
      {
        url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Systematic sorting and recycling returning vital materials to circular use."
      }
    ]
  },
  {
    id: "animal-welfare",
    slug: "animal-welfare",
    title: "Animal Welfare & Compassionate Care",
    shortTitle: "Animal Welfare",
    theme: "Sentient Compassion",
    quote: "Kindness is measured by how we care for those without a voice.",
    summary: "Proposed compassionate support framework for abandoned cattle, injured stray dogs, community puppies, emergency veterinary coordination, and street-side water bowls.",
    heroImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1800&q=85",
    iconName: "HeartHandshake",
    whyItMatters: [
      "Stray animals suffer severe trauma from vehicular collisions, untreated infections, and seasonal dehydration.",
      "Abandoned senior cattle often ingest municipal plastic litter in search of roadside food.",
      "Compassionate, vaccinated, and well-cared-for community animals create safer, kinder neighborhoods for all."
    ],
    plannedObjectives: [
      "Establish a volunteer coordination helpline for alerting trained responders to injured street animals.",
      "Deploy hygienic terracotta water bowls across Dhanbad neighborhoods during harsh summer months.",
      "Facilitate peaceful coexistence through humane animal birth control and anti-rabies vaccination awareness."
    ],
    proposedActivities: [
      {
        title: "Summer Hydration Network",
        description: "Supplying durable, clean clay water bowls to shop owners and volunteers to sustain stray dogs and birds in heat waves."
      },
      {
        title: "First-Aid Emergency Transit Kits",
        description: "Assembling basic wound dressings, antiseptics, and safe transport protocols for injured roadside puppies and kittens."
      },
      {
        title: "Cow Shelter & Fodder Linkage",
        description: "Coordinating with established gaushalas to ensure abandoned cows receive clean green fodder and medical attention."
      }
    ],
    focusAreas: [
      {
        title: "Street Canine Care & Nutrition",
        description: "Encouraging systematic community feeding spots away from high-traffic roads to keep puppies nourished and safe.",
        highlights: ["Community feeder networks", "Reflective safety collars", "Parasite preventive care"]
      },
      {
        title: "Abandoned Cattle Welfare",
        description: "Preventing plastic ingestion among roadside cattle by organizing designated fodder collection centers.",
        highlights: ["Digestive safety", "Gaushala coordination", "Night roadside visibility"]
      },
      {
        title: "Humane Coexistence Education",
        description: "Workshops for schools and resident societies explaining dog behavior, bite prevention, and compassionate care.",
        highlights: ["Humane values in children", "Community empathy", "Peaceful street coexistence"]
      }
    ],
    illustrativeGallery: [
      {
        url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Joyful rescued puppy experiencing warm human affection."
      },
      {
        url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Gentle companionship and dedicated healthcare for street animals."
      },
      {
        url: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Harmonious care for domestic livestock and gentle cattle."
      }
    ]
  },
  {
    id: "children-education-health",
    slug: "children-education-health",
    title: "Children, Education & Health Awareness",
    shortTitle: "Education & Health",
    theme: "Human Dignity",
    quote: "When a child learns and stays healthy, an entire generation strides ahead.",
    summary: "Planned community education circles, foundational literacy support, hygiene awareness workshops, and nutritional guidance for underserved children.",
    heroImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1800&q=85",
    iconName: "GraduationCap",
    whyItMatters: [
      "Access to supportive learning materials and guidance directly impacts a child's confidence and future livelihoods.",
      "Basic health habits like handwashing, clean drinking water, and oral hygiene prevent debilitating childhood illnesses.",
      "Educating mothers and young girls transforms family health standards across entire rural and semi-urban clusters."
    ],
    plannedObjectives: [
      "Organize after-school foundational learning circles in community halls and open courtyards.",
      "Conduct interactive health and personal hygiene sessions for children and adolescent girls.",
      "Distribute essential learning toolkits (books, notebooks, stationery) to children in need."
    ],
    proposedActivities: [
      {
        title: "Open-Sky Learning Circles",
        description: "Engaging university students as weekend mentors to help children with mathematics, reading, and creative storytelling."
      },
      {
        title: "Clean Water & Soap Habit Drives",
        description: "Fun, song-based handwashing demonstrations explaining the invisible transmission of germs."
      },
      {
        title: "Adolescent Girls' Health Circles",
        description: "Safe, dignified spaces to discuss menstrual hygiene, nutrition, and breaking archaic social taboos."
      }
    ],
    focusAreas: [
      {
        title: "Foundational Literacy & Numeracy",
        description: "Building strong early reading and math basics through playful, experiential teaching methodologies.",
        highlights: ["Storybook libraries", "Interactive learning kits", "Peer mentorship"]
      },
      {
        title: "Preventive Pediatric Wellness",
        description: "Educating families on iron-rich indigenous diets, clean storage of boiled water, and timely vaccinations.",
        highlights: ["Nutritional awareness", "Waterborne disease defense", "Wellness tracking"]
      },
      {
        title: "Life Skills & Creative Expression",
        description: "Encouraging art, debate, theater, and sports to foster self-esteem, courage, and leadership in young minds.",
        highlights: ["Expressive arts", "Confidence building", "Digital literacy basics"]
      }
    ],
    illustrativeGallery: [
      {
        url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Empowering children with books, literacy, and boundless curiosity."
      },
      {
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Interactive classroom discovery sparking future dreams."
      },
      {
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Nourishing young minds and fostering supportive community wellbeing."
      }
    ]
  },
  {
    id: "tyre-collection",
    slug: "tyre-collection",
    title: "Used Tyre Collection & Safe Pathways",
    shortTitle: "Used Tyre Collection",
    theme: "Resource Containment",
    quote: "Discarded rubber shouldn't burn our skies or breed tropical disease.",
    summary: "Dedicated initiative to spread awareness on hazards of abandoned tyres, preventing illegal open-air burning, and routing collected tyres to authorised pyrolysis & crumb rubber recycling plants.",
    heroImage: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1800&q=85",
    iconName: "Disc",
    whyItMatters: [
      "Stagnant rainwater trapped inside discarded tyres becomes a prime breeding ground for Aedes mosquitoes (Dengue, Chikungunya).",
      "Open-air tyre burning releases toxic dioxins, furans, sulfur dioxide, and heavy particulates into the air.",
      "Used tyres can be mechanically transformed into asphalt additive, crumb rubber athletic tracks, and acoustic insulation."
    ],
    plannedObjectives: [
      "Map tyre disposal behavior among roadside puncture shops, transport garages, and automotive hubs.",
      "Educate garage mechanics on safe, dry indoor tyre stacking protocols to eliminate mosquito breeding.",
      "Channel discarded tyres directly to authorized recyclers for crumb rubber and green civil construction uses."
    ],
    proposedActivities: [
      {
        title: "Garage Vector-Free Audits",
        description: "Visiting local repair workshops to provide free mosquito repellent dusting and drainage advice for stored tyres."
      },
      {
        title: "Authorized Recycling Aggregation",
        description: "Establishing periodic batch collection from verified mechanics to avoid illegal open dump fires."
      },
      {
        title: "Upcycling & Play Ground Concepts",
        description: "Exploring safe non-toxic painted tyre structures for community parks and protective tree trunk guards."
      }
    ],
    focusAreas: [
      {
        title: "Vector-Borne Disease Prevention",
        description: "Eliminating the standing water pockets inside rubber carcasses that drive regional monsoon dengue spikes.",
        highlights: ["Mosquito breeding disruption", "Monsoon preparedness", "Public health alerts"]
      },
      {
        title: "Zero Open Burning Enforcement",
        description: "Sensitizing workers against setting tyres on fire for winter warmth or scrap recovery.",
        highlights: ["Toxic smoke warnings", "Clean winter alternatives", "Air quality advocacy"]
      },
      {
        title: "Circular Crumb Rubber Pathways",
        description: "Promoting crumb rubber modified bitumen (CRMB) which creates longer-lasting, quieter road surfaces.",
        highlights: ["Eco-friendly asphalt", "Playground safety surfaces", "Industrial circularity"]
      }
    ],
    illustrativeGallery: [
      {
        url: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Orderly automotive tyre recovery preventing dangerous open dumping."
      },
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Modern industrial transformation turning scrap rubber into useful materials."
      },
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Sustainable civil applications utilizing processed rubber compounds."
      }
    ]
  },
  {
    id: "e-waste",
    slug: "e-waste",
    title: "Electronic Waste Awareness & Safe Recycling",
    shortTitle: "E-Waste Recycling",
    theme: "Toxic Stewardship",
    quote: "Tomorrow's technology should never become yesterday's poison.",
    summary: "Planned citizen drives for safe segregation of obsolete smartphones, cables, batteries, and appliances, ensuring precious metals are recovered and toxic lead/mercury stay out of landfills.",
    heroImage: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1800&q=85",
    iconName: "Cpu",
    whyItMatters: [
      "E-waste contains dangerous heavy metals including lead, cadmium, mercury, and brominated flame retardants.",
      "Crude backyard burning of circuit boards exposes informal workers to severe neurological and respiratory toxins.",
      "1 ton of mobile phone circuit boards can contain up to 80 times more gold and copper than 1 ton of mined ore."
    ],
    plannedObjectives: [
      "Educate colleges, institutions, and households on keeping e-waste separate from common municipal dustbins.",
      "Set up designated drop-off collection drives in collaboration with authorized state pollution board e-waste recyclers.",
      "Champion the 'Right to Repair' and prolonging consumer hardware life before disposal."
    ],
    proposedActivities: [
      {
        title: "Campus Tech Recovery Days",
        description: "Setting up secure collection bins at colleges and workplaces for defunct chargers, laptops, and dry cell batteries."
      },
      {
        title: "Repair Over Replace Seminars",
        description: "Community workshops with skilled local technicians teaching basic maintenance and battery longevity tips."
      },
      {
        title: "Data Destruction & Privacy Guarantees",
        description: "Educating citizens on factory reset protocols so they can confidently recycle old devices without privacy fears."
      }
    ],
    focusAreas: [
      {
        title: "Safe Battery Containment",
        description: "Preventing ruptured lithium-ion batteries from igniting municipal garbage trucks and landfills.",
        highlights: ["Fire hazard mitigation", "Heavy metal containment", "Dedicated battery bins"]
      },
      {
        title: "Certified Recycler Channels",
        description: "Ensuring every collected device travels exclusively to certified facilities equipped with air filtration.",
        highlights: ["EPR compliance alignment", "Precious metal recovery", "Closed-loop supply"]
      },
      {
        title: "School Digital Hygiene Modules",
        description: "Inspiring youth to view electronics as assembled minerals requiring deep respect and cautious recycling.",
        highlights: ["Mining impact awareness", "Responsible digital consumption", "Youth tech ambassadors"]
      }
    ],
    illustrativeGallery: [
      {
        url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Advanced electronic components containing critical recoverable minerals."
      },
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Precision micro-electronics requiring specialized dismantling techniques."
      },
      {
        url: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Clean circular electronics processing protecting water and soil."
      }
    ]
  },
  {
    id: "heritage-cleanliness",
    slug: "heritage-cleanliness",
    title: "Heritage & Public Space Cleanliness",
    shortTitle: "Heritage & Public Spaces",
    theme: "Cultural Reverence",
    quote: "Our monuments belong to history; their dignity belongs to us today.",
    summary: "Planned volunteer civic stewardship campaigns at historical landmarks, temple precincts, public water reservoirs (talaabs), and cultural gathering spots across Jharkhand.",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",
    iconName: "Landmark",
    whyItMatters: [
      "Heritage sites and community reservoirs suffer from discarded plastic wrappings, ritual litter, and graffiti.",
      "Traditional water tanks (kunds/ponds) play crucial roles in local groundwater recharge and religious heritage.",
      "Preserving public cleanliness builds civic pride and leaves dignified public spaces for future generations."
    ],
    plannedObjectives: [
      "Conduct weekend heritage cleanliness drives with youth volunteers at historic temple ponds and monuments.",
      "Install tasteful signage encouraging pilgrims and tourists to keep sacred water bodies plastic-free.",
      "Collaborate with local temple committees and municipal authorities for sustainable festival waste disposal."
    ],
    proposedActivities: [
      {
        title: "Clean Talaab (Pond) Drives",
        description: "Safe shoreline cleanups removing floating polythene bags, plastic bottles, and synthetic wrappers from ponds."
      },
      {
        title: "Biodegradable Offerings Awareness",
        description: "Promoting natural floral offerings in place of polythene-wrapped items during regional religious observances."
      },
      {
        title: "Heritage Walk & Cleanliness Pledges",
        description: "Guided historical storytelling walks that end with participants conducting a joint 30-minute litter cleanup."
      }
    ],
    focusAreas: [
      {
        title: "Sacred Water Body Protection",
        description: "Safeguarding historic ghats and community ponds from chemical immersion and non-biodegradable debris.",
        highlights: ["Shoreline cleanliness", "Pond aeration advocacy", "Natural compost of floral offerings"]
      },
      {
        title: "Civic Pride & Anti-Vandalism",
        description: "Sensitizing visitors against carving graffiti or defacing stone carvings and historic architectural ruins.",
        highlights: ["Respect for antiquity", "Youth cultural pride", "Preservation awareness"]
      },
      {
        title: "Post-Festival Waste Remediation",
        description: "Planning rapid cleanup teams immediately following major civic and cultural gatherings.",
        highlights: ["Rapid response cleanup", "Material segregation", "Municipal coordination"]
      }
    ],
    illustrativeGallery: [
      {
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Majestic Indian architectural heritage preserved in natural grandeur."
      },
      {
        url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Sacred temple architecture and tranquil surrounding water bodies."
      },
      {
        url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Clean public heritage grounds reflecting community pride and reverence."
      }
    ]
  },
  {
    id: "humanity-empowerment",
    slug: "humanity-empowerment",
    title: "Humanity, Women & Community Empowerment",
    shortTitle: "Humanity & Empowerment",
    theme: "Dignity & Solidarity",
    quote: "True strength lies in uplifting the most vulnerable among us.",
    summary: "Planned initiatives focusing on women's self-reliance, dignified care for senior citizens, social inclusion, and livelihood skills for disadvantaged families.",
    heroImage: "/images/women_empowerment.jpg",
    iconName: "Users",
    whyItMatters: [
      "Marginalized women and elderly citizens frequently lack independent support systems and community recognition.",
      "Vocational and livelihood self-reliance turns dependence into pride and inter-generational stability.",
      "Inclusive societies are built when every member, regardless of age or physical ability, feels valued and heard."
    ],
    plannedObjectives: [
      "Establish peer-supported women's livelihood circles for craft, sewing, and decentralized micro-enterprises.",
      "Facilitate regular community visits, health checks, and emotional support networks for lonely senior citizens.",
      "Provide assistive literacy and vocational mentorship to youth from economically disadvantaged households."
    ],
    proposedActivities: [
      {
        title: "Women's Self-Reliance Circles",
        description: "Skill-sharing workshops in tailoring, sustainable crafts, and basic financial literacy to build family self-sufficiency."
      },
      {
        title: "Senior Citizen Companionship",
        description: "Youth volunteer teams spending weekend hours listening to, assisting, and reading with neighborhood elders."
      },
      {
        title: "Disability & Social Inclusion Forums",
        description: "Advocating for accessible public spaces and community participation for differently-abled citizens."
      }
    ],
    focusAreas: [
      {
        title: "Livelihood & Economic Self-Sufficiency",
        description: "Practical skill training enabling women to generate independent household earnings.",
        highlights: ["Micro-skills training", "Basic financial literacy", "Artisan product creation"]
      },
      {
        title: "Elderly Dignity & Companionship",
        description: "Creating spaces where older community members are respected, heard, and supported with kindness.",
        highlights: ["Intergenerational dialogue", "Wellness check-ins", "Dignified social spaces"]
      },
      {
        title: "Inclusive Community Advocacy",
        description: "Breaking barriers for marginalized groups through active local support and awareness.",
        highlights: ["Universal access", "Social dignity", "Equal opportunity"]
      }
    ],
    illustrativeGallery: [
      {
        url: "/images/women_empowerment.jpg",
        caption: "Illustrative: Women united in solidarity and self-reliance."
      },
      {
        url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Confident community leadership and shared aspirations."
      }
    ]
  },
  {
    id: "community-resilience",
    slug: "community-resilience",
    title: "Community Resilience & Civic Preparedness",
    shortTitle: "Community Resilience",
    theme: "Collective Readiness",
    quote: "When communities stand together in preparation, they weather any storm with grace.",
    summary: "Planned citizen networks for summer heatwave awareness, safe drinking water distribution, disaster readiness, and fostering active neighborhood volunteerism.",
    heroImage: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1800&q=85",
    iconName: "ShieldCheck",
    whyItMatters: [
      "Severe summer heatwaves and seasonal water stress disproportionately impact outdoor laborers and vulnerable families.",
      "Grassroots disaster and emergency preparedness saves lives long before formal institutional response arrives.",
      "Active neighborhood volunteer networks strengthen social cohesion and mutual trust across all strata of society."
    ],
    plannedObjectives: [
      "Deploy clean drinking water stations and heatwave shade points for daily wage workers and rickshaw pullers.",
      "Conduct basic citizen disaster preparedness workshops covering first aid, flood awareness, and fire safety.",
      "Build a dependable registry of trained neighborhood youth volunteers ready to assist during civic crises."
    ],
    proposedActivities: [
      {
        title: "Summer Heat Relief Outposts",
        description: "Providing shaded hydration spots with clean earthen-pot water and oral rehydration packets during peak heat hours."
      },
      {
        title: "Neighborhood First-Aid Readiness",
        description: "Training college volunteers in basic CPR, burn care, and emergency casualty transport."
      },
      {
        title: "Civic Safety & Monsoon Drainage Audits",
        description: "Citizen mapping of choked stormwater channels to prevent seasonal neighborhood waterlogging."
      }
    ],
    focusAreas: [
      {
        title: "Extreme Climate Adaptation",
        description: "Practical neighborhood-scale interventions to protect vulnerable lives from extreme temperatures.",
        highlights: ["Potable water kiosks", "Heat-stress prevention", "Public hydration awareness"]
      },
      {
        title: "Disaster & Civic Preparedness",
        description: "Equipping ordinary residents with lifesaving first-responder knowledge.",
        highlights: ["First-aid literacy", "Emergency response drills", "Resource mobilization"]
      },
      {
        title: "Grassroots Volunteer Network",
        description: "Fostering an organized cohort of civic volunteers across Dhanbad's residential wards.",
        highlights: ["Civic solidarity", "Ward-level coordinators", "Community mutual aid"]
      }
    ],
    illustrativeGallery: [
      {
        url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Community members coming together in solidarity and mutual support."
      },
      {
        url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
        caption: "Illustrative: Dedicated youth volunteering for neighborhood welfare."
      }
    ]
  }
];

export const VISION_ROADMAP = [
  {
    step: "01",
    phase: "Awareness & Consciousness",
    title: "Awakening Collective Sensitivity",
    description: "Creating an active cultural shift where nature, vulnerable street animals, and clean community spaces are recognized as shared treasures requiring constant kindness.",
    keyPoints: [
      "School and neighborhood environmental storytelling",
      "Street animal compassion and bite prevention workshops",
      "Source waste segregation demonstrations"
    ]
  },
  {
    step: "02",
    phase: "Active Participation",
    title: "From Sympathy to Action",
    description: "Empowering everyday citizens, students, and elders to dedicate an hour a week to plant saplings, maintain clean streets, or hydrate community animals.",
    keyPoints: [
      "Grassroots youth volunteer squads",
      "Summer clay water bowl distribution network",
      "Localised litter-free market street commitments"
    ]
  },
  {
    step: "03",
    phase: "Community Collaboration",
    title: "Connecting Local Stakeholders",
    description: "Fostering organic partnerships between resident associations, local merchants, educational institutions, and environmental advocates.",
    keyPoints: [
      "Vendor cloth bag distribution alliances",
      "Mechanics' used tyre collection circles",
      "Collaborative campus tech recovery drives"
    ]
  },
  {
    step: "04",
    phase: "Responsible Action",
    title: "Systematic, Ethical Execution",
    description: "Ensuring all ground operations adhere strictly to ethical animal handling, scientifically sound native botany, and certified recycling pathways.",
    keyPoints: [
      "Native biodiversity prioritization over monoculture",
      "Authorized, audited recycling and e-waste processing",
      "Dignified coordination with existing animal shelters"
    ]
  },
  {
    step: "05",
    phase: "Long-Term Stewardship",
    title: "Generational Continuity",
    description: "Institutionalising an enduring philosophy where conservation and compassion become an automatic civic standard embedded in Dhanbad and beyond.",
    keyPoints: [
      "Multi-year tree sapling guardianship tracking",
      "Self-sustaining community waste hubs",
      "Inter-generational mentorship in civic ecology"
    ]
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    category: "Nature",
    title: "Pristine Forest Canopy",
    description: "Illustrative: Ancient natural foliage filtering golden morning rays.",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[4/3]"
  },
  {
    id: "gal-2",
    category: "Women & Communities",
    title: "Dignity & Solidarity",
    description: "Illustrative: Confident, smiling women coming together for community upliftment.",
    url: "https://images.unsplash.com/photo-1609137144822-4a0b27b407b8?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[3/4]"
  },
  {
    id: "gal-3",
    category: "Animal Welfare",
    title: "Golden Puppy Warmth",
    description: "Illustrative: Pure innocence and gentleness deserving unconditional compassion.",
    url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[4/3]"
  },
  {
    id: "gal-4",
    category: "Plantation",
    title: "Young Native Sapling",
    description: "Illustrative: Nurturing new life with rich organic soil and tender hands.",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[16/9]"
  },
  {
    id: "gal-5",
    category: "Waste & Cleanliness",
    title: "Conscious Cleanliness",
    description: "Illustrative: Clean public paths through systematic, responsible waste disposal.",
    url: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[4/3]"
  },
  {
    id: "gal-6",
    category: "Children & Education",
    title: "Joy of Learning",
    description: "Illustrative: Expanding young horizons through books and knowledge.",
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[3/4]"
  },
  {
    id: "gal-7",
    category: "Tyres",
    title: "Orderly Tyre Reclamation",
    description: "Illustrative: Preventing mosquito breeding and scrap tyre burning.",
    url: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[4/3]"
  },
  {
    id: "gal-8",
    category: "E-Waste",
    title: "Safe Circuit Recovery",
    description: "Illustrative: Recovering high-value metals safely without environmental harm.",
    url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[4/3]"
  },
  {
    id: "gal-9",
    category: "Heritage",
    title: "Timeless Stone & Sacred Waters",
    description: "Illustrative: Preserving historical dignity and holy pond cleanliness.",
    url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[16/9]"
  },
  {
    id: "gal-10",
    category: "Nature",
    title: "Mountain Mist & Verdant Hills",
    description: "Illustrative: The pristine vitality of untamed river valleys.",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[3/4]"
  },
  {
    id: "gal-11",
    category: "Animal Welfare",
    title: "Gentle Community Canine",
    description: "Illustrative: Street dogs flourishing in peaceful coexistence with caring humans.",
    url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[4/3]"
  },
  {
    id: "gal-12",
    category: "Heritage",
    title: "Ancient Ghats by Sunrise",
    description: "Illustrative: Reverence for tranquil water banks and architectural sanctity.",
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
    aspect: "aspect-[4/3]"
  }
];
