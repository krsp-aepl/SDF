export interface InitiativeFact {
  stat: string;
  text: string;
  source: string;
  year: string;
  link: string;
}

export interface InitiativeStoryItem {
  id: string;
  anchorId: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  reality: string;
  didYouKnow: InitiativeFact;
  whyItMatters: string;
  ourAim: string;
  howToHelp: string;
  focusTags: string[];
  // Backward compatibility properties
  challenge?: string;
  ourApproach?: string;
}

export const INITIATIVES_15: InitiativeStoryItem[] = [
  {
    id: '01',
    anchorId: 'story-01',
    number: '01',
    title: 'Environment & Nature Conservation',
    category: 'Ecological Restoration',
    tagline: 'Deep roots that cool our neighborhoods and protect our living soil.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Rich native woodland canopy and undisturbed river ecosystem',
    imageCaption: 'Indigenous biodiversity and watershed protection in natural woodland terrain.',
    reality:
      'Decades of rapid urban expansion, mining pressure, and soil depletion across Jharkhand have stripped native woodland corridors, eroded fertile topsoil, and dried traditional community reservoirs in Dhanbad.',
    didYouKnow: {
      stat: '29.76% Forest Cover in Jharkhand (23,721 sq km)',
      text: 'According to the India State of Forest Report (ISFR) by the Forest Survey of India, Jharkhand holds over 23,721 sq km of recorded forest cover, but fragmentation and soil erosion require continuous community-led native afforestation.',
      source: 'Forest Survey of India (ISFR)',
      year: '2021',
      link: 'https://fsi.nic.in',
    },
    whyItMatters:
      'Living indigenous forests regulate localized temperatures, purify atmospheric dust, prevent monsoon topsoil erosion, and sustain insect and pollinator populations fundamental to food security.',
    ourAim:
      'We are organizing community native sapling drives prioritizing climate-hardy trees (Neem, Peepal, Banyan, Jamun, Mahua), creating urban micro-groves, and conducting watershed literacy workshops across residential wards.',
    howToHelp:
      'Pledge three seasons of personal care for newly planted neighborhood saplings, participate in weekend pond-shoreline cleanups, and replace barren domestic patches with indigenous flowering shrubs.',
    focusTags: ['Native Tree Plantation', 'Soil Protection', 'Urban Greenery', 'Water Conservation'],
    challenge:
      'Decades of rapid urban expansion, mining pressure, and soil depletion across Jharkhand have stripped native woodland corridors, eroded fertile topsoil, and dried traditional community reservoirs in Dhanbad.',
    ourApproach:
      'We are organizing community native sapling drives prioritizing climate-hardy trees (Neem, Peepal, Banyan, Jamun, Mahua), creating urban micro-groves, and conducting watershed literacy workshops across residential wards.',
  },
  {
    id: '02',
    anchorId: 'story-02',
    number: '02',
    title: 'Waste Management & Recycling',
    category: 'Circular Responsibility',
    tagline: 'Transforming discarded materials into responsible circular pathways.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Organized material segregation and plastic recovery facility',
    imageCaption: 'Source waste segregation and clean material recovery pathways.',
    reality:
      'Municipal refuse in Dhanbad is overwhelmingly discarded mixed, allowing wet organic food waste to contaminate clean plastics, paper, and glass in sprawling open-air dumping grounds.',
    didYouKnow: {
      stat: 'Over 65% of municipal solid waste in India remains unsegregated at source',
      text: 'The Central Pollution Control Board (CPCB) Solid Waste Management Report highlights that mixed garbage generates toxic leachate seeping into drinking aquifers and methane fires that degrade civic air quality.',
      source: 'Central Pollution Control Board (CPCB)',
      year: '2022',
      link: 'https://cpcb.nic.in',
    },
    whyItMatters:
      'Mixed waste generates hazardous toxic leachate that seeps into drinking aquifers, provokes poisonous roadside open fires, and traps foraging cattle and street dogs in fatal plastic consumption.',
    ourAim:
      'SDF is introducing practical two-bin segregation clinics for households and vegetable markets, facilitating clean dry-waste aggregation, and establishing linkages with certified material recyclers.',
    howToHelp:
      'Implement daily separation of wet kitchen scraps for home composting, eliminate single-use plastic carry bags in daily market shopping, and clean recyclable plastics before disposal.',
    focusTags: ['Source Segregation', 'Plastic Reduction', 'Composting', 'Recycling Linkages'],
    challenge:
      'Municipal refuse in Dhanbad is overwhelmingly discarded mixed, allowing wet organic food waste to contaminate clean plastics, paper, and glass in sprawling open-air dumping grounds.',
    ourApproach:
      'SDF is introducing practical two-bin segregation clinics for households and vegetable markets, facilitating clean dry-waste aggregation, and establishing linkages with certified material recyclers.',
  },
  {
    id: '03',
    anchorId: 'story-03',
    number: '03',
    title: 'Animal Welfare & Compassionate Care',
    category: 'Sentient Compassion',
    tagline: 'Gentle intervention and medical dignity for our voiceless street companions.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Gentle, compassionate humane interaction caring for an injured street dog',
    imageCaption: 'Humane street animal assistance and community companion hydration.',
    reality:
      'Thousands of street dogs, abandoned cows, and displaced birds endure agonizing vehicular trauma, untreated maggot infections, and lethal dehydration during eastern India’s scorching summers.',
    didYouKnow: {
      stat: 'Over 35 million community dogs live across India, facing severe heat and trauma',
      text: 'Animal Welfare Board of India (AWBI) and WHO guidelines show that humane community feeding, hydration bowls, and prompt anti-rabies vaccination dramatically reduce canine aggression and foster safe neighborhoods.',
      source: 'Animal Welfare Board of India (AWBI)',
      year: '2023',
      link: 'https://awbi.gov.in',
    },
    whyItMatters:
      'The moral health of a community is measured by how gently it treats its voiceless inhabitants. Protecting street fauna reduces canine anxiety and creates safer, rabies-free neighborhoods.',
    ourAim:
      'We are establishing a volunteer emergency transit coordination network for distressed roadside animals, deploying durable terracotta water bowls outside shopfronts, and championing vaccination awareness.',
    howToHelp:
      'Keep a fresh earthenware water bowl outside your gate during hot months, support designated neighborhood feeding spots away from roads, and adopt native Indian community dogs.',
    focusTags: ['Emergency Transit Aid', 'Summer Water Bowls', 'Anti-Rabies Awareness', 'Street Coexistence'],
    challenge:
      'Thousands of street dogs, abandoned cows, and displaced birds endure agonizing vehicular trauma, untreated maggot infections, and lethal dehydration during eastern India’s scorching summers.',
    ourApproach:
      'We are establishing a volunteer emergency transit coordination network for distressed roadside animals, deploying durable terracotta water bowls outside shopfronts, and championing vaccination awareness.',
  },
  {
    id: '04',
    anchorId: 'story-04',
    number: '04',
    title: 'Old Age Care & Senior Citizens',
    category: 'Elderly Dignity',
    tagline: 'Honoring lifetimes of wisdom with warmth, companionship, and respect.',
    image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Caring companion interaction bringing smiles to elderly community members',
    imageCaption: 'Intergenerational companionship and dignity support for senior citizens.',
    reality:
      'Senior citizens living alone, widows, and elders in fragile domestic circumstances frequently experience profound isolation, untreated mobility ailments, and severe emotional loneliness.',
    didYouKnow: {
      stat: '138 million senior citizens live in India, with over 15 million living alone',
      text: 'The Longitudinal Ageing Study in India (LASI) by the Ministry of Health and Family Welfare reports that over 20% of elderly adults report chronic depressive symptoms primarily attributed to social isolation and lack of family interaction.',
      source: 'Longitudinal Ageing Study in India (LASI), MoHFW',
      year: '2021',
      link: 'https://main.mohfw.gov.in',
    },
    whyItMatters:
      'Elders are the living memory and cultural bedrock of our families. When senior citizens feel forgotten or discarded, the intergenerational trust and moral foundation of society diminishes.',
    ourAim:
      'We plan to organize youth companionship circles to visit registered old-age homes and isolated elders, facilitate basic health check-ups, and create warm social spaces for storytelling (support initiative, not an SDF-operated facility).',
    howToHelp:
      'Dedicate one hour each weekend to converse with and listen to elderly neighbors, assist senior citizens with medicine purchases, and include elders in family celebrations.',
    focusTags: ['Companion Visits', 'Emotional Wellbeing', 'Senior Dignity', 'Intergenerational Care'],
    challenge:
      'Senior citizens living alone, widows, and elders in fragile domestic circumstances frequently experience profound isolation, untreated mobility ailments, and severe emotional loneliness.',
    ourApproach:
      'We plan to organize youth companionship circles to visit registered old-age homes and isolated elders, facilitate basic health check-ups, and create warm social spaces for storytelling (support initiative, not an SDF-operated facility).',
  },
  {
    id: '05',
    anchorId: 'story-05',
    number: '05',
    title: 'Orphanage & Child Welfare',
    category: 'Vulnerable Children',
    tagline: 'Nurturing young lives with safety, educational joy, and unconditional care.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Children engaged in positive educational development and play',
    imageCaption: 'Empowering children in registered welfare institutions through learning support.',
    reality:
      'Children residing in registered institutional care or born into precarious domestic settings often lack personalized educational guidance, creative storytelling books, and emotional mentorship.',
    didYouKnow: {
      stat: 'Over 3.7 lakh children reside in registered Child Care Institutions (CCIs) in India',
      text: 'Ministry of Women and Child Development (MWCD) surveys emphasize that structured volunteer engagement, art workshops, and academic kit distribution elevate child self-esteem by over 40%.',
      source: 'Ministry of Women and Child Development (MWCD)',
      year: '2022',
      link: 'https://wcd.nic.in',
    },
    whyItMatters:
      'Childhood emotional security and access to creative learning materials dictate adult confidence, resilience, and ethical development. Every child deserves to feel valued and encouraged.',
    ourAim:
      'SDF intends to coordinate structured stationery drives, weekend art and reading sessions, and nutritional support for licensed child-care institutions while strictly protecting children’s dignity and privacy (supporting existing registered institutions).',
    howToHelp:
      'Sponsor educational kits containing notebooks, art pencils, and children’s literature; volunteer to conduct weekend storytelling sessions; and promote child-safety awareness.',
    focusTags: ['Learning Kits', 'Art & Storytelling', 'Institutional Support', 'Child Dignity'],
    challenge:
      'Children residing in registered institutional care or born into precarious domestic settings often lack personalized educational guidance, creative storytelling books, and emotional mentorship.',
    ourApproach:
      'SDF intends to coordinate structured stationery drives, weekend art and reading sessions, and nutritional support for licensed child-care institutions while strictly protecting children’s dignity and privacy (supporting existing registered institutions).',
  },
  {
    id: '06',
    anchorId: 'story-06',
    number: '06',
    title: 'Women Empowerment & Dignity',
    category: 'Gender Self-Reliance',
    tagline: 'Strengthening self-reliance through skills, financial literacy, and social voice.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Women collaborating and developing vocational skills in an open community space',
    imageCaption: 'Solidarity, economic self-reliance, and dignified livelihood development.',
    reality:
      'Homemakers and young women in marginalized settlements face limited vocational choices, lack independent financial management skills, and endure persistent taboos surrounding menstrual health.',
    didYouKnow: {
      stat: 'Only 25.6% of rural women in eastern India have access to formal commercial credit',
      text: 'The National Family Health Survey (NFHS-5) demonstrates that when women attain vocational skills and hygienic sanitary awareness, household nutrition increases and child school attendance rises markedly.',
      source: 'National Family Health Survey (NFHS-5)',
      year: '2021',
      link: 'https://rchiips.org/nfhs',
    },
    whyItMatters:
      'When women achieve economic confidence and physical wellbeing, child nutrition improves, domestic stability increases, and entire community neighborhoods progress with greater equity.',
    ourAim:
      'We are structuring decentralized craft, tailoring, and eco-product self-help circles, alongside respectful menstrual hygiene awareness workshops in schools and community centers.',
    howToHelp:
      'Support local women-led artisan ventures by purchasing handmade products, volunteer to teach basic digital or financial literacy, and advocate for respectful menstrual health discussions.',
    focusTags: ['Vocational Skills', 'Menstrual Dignity', 'Financial Literacy', 'Equal Opportunity'],
    challenge:
      'Homemakers and young women in marginalized settlements face limited vocational choices, lack independent financial management skills, and endure persistent taboos surrounding menstrual health.',
    ourApproach:
      'We are structuring decentralized craft, tailoring, and eco-product self-help circles, alongside respectful menstrual hygiene awareness workshops in schools and community centers.',
  },
  {
    id: '07',
    anchorId: 'story-07',
    number: '07',
    title: 'Education & Youth Development',
    category: 'Foundational Knowledge',
    tagline: 'Opening pathways of curiosity, digital literacy, and student leadership.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Students learning enthusiastically in a bright, modern classroom setting',
    imageCaption: 'Interactive education, digital mentorship, and youth leadership exploration.',
    reality:
      'Students in under-resourced schools often struggle with foundational reading and mathematics, lack exposure to computers, and have no access to career guidance or environmental clubs.',
    didYouKnow: {
      stat: 'Over 48% of rural students in Grade 5 struggle with foundational Grade 2 reading',
      text: 'The Annual Status of Education Report (ASER) emphasizes that community courtyard libraries and peer mentorship bridge learning gaps and build student confidence outside formal classroom hours.',
      source: 'Annual Status of Education Report (ASER Centre)',
      year: '2023',
      link: 'https://asercentre.org',
    },
    whyItMatters:
      'Early educational engagement shapes a young person’s lifelong curiosity and dignity. Empowering youth with practical skills breaks intergenerational cycles of economic vulnerability.',
    ourAim:
      'We are preparing weekend courtyard reading clubs, student volunteer squads for civic ecology, and digital literacy mentorship linking college students with school learners.',
    howToHelp:
      'Volunteer two hours on weekends to tutor elementary students, donate functional surplus laptops or tablets, and sponsor school bags and textbooks for needy children.',
    focusTags: ['Courtyard Learning', 'Digital Mentorship', 'Career Guidance', 'Student Eco-Clubs'],
    challenge:
      'Students in under-resourced schools often struggle with foundational reading and mathematics, lack exposure to computers, and have no access to career guidance or environmental clubs.',
    ourApproach:
      'We are preparing weekend courtyard reading clubs, student volunteer squads for civic ecology, and digital literacy mentorship linking college students with school learners.',
  },
  {
    id: '08',
    anchorId: 'story-08',
    number: '08',
    title: 'Healthcare & Medical Awareness',
    category: 'Preventive Wellness',
    tagline: 'Timely health education, clean water habits, and professional guidance.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Qualified community healthcare professional conducting medical checkup consultation',
    imageCaption: 'Preventive health education and screening camps with qualified doctors.',
    reality:
      'Preventive health literacy remains critically low in peri-urban clusters. Routine illnesses are ignored until they become severe emergencies, while waterborne infections recur seasonally.',
    didYouKnow: {
      stat: 'Preventable waterborne and lifestyle illnesses account for 63% of outpatient visits',
      text: 'The National Health Systems Resource Centre (NHSRC) notes that early screening camps, safe water boiling, and basic diagnostic literacy can prevent catastrophic medical expenses for daily-wage households.',
      source: 'National Health Systems Resource Centre (NHSRC), MoHFW',
      year: '2022',
      link: 'https://nhsrcindia.org',
    },
    whyItMatters:
      'Preventable diseases deplete household earnings and force children out of classrooms. Basic water filtration, hand hygiene, and timely screening drastically reduce community disease burdens.',
    ourAim:
      'SDF is organizing free preventive screening camps conducted exclusively by certified medical professionals, combined with interactive family nutrition and seasonal epidemic awareness drives (we do not operate clinics or provide unlicensed treatment).',
    howToHelp:
      'Medical professionals can volunteer consultation hours for neighborhood health camps; families can practice clean water boiling and encourage elderly neighbors to attend checkups.',
    focusTags: ['Qualified Medical Camps', 'Hygiene Literacy', 'Waterborne Disease Defense', 'Nutrition Awareness'],
    challenge:
      'Preventive health literacy remains critically low in peri-urban clusters. Routine illnesses are ignored until they become severe emergencies, while waterborne infections recur seasonally.',
    ourApproach:
      'SDF is organizing free preventive screening camps conducted exclusively by certified medical professionals, combined with interactive family nutrition and seasonal epidemic awareness drives (we do not operate clinics or provide unlicensed treatment).',
  },
  {
    id: '09',
    anchorId: 'story-09',
    number: '09',
    title: 'Electronic Waste Management',
    category: 'Toxic Materials',
    tagline: 'Preventing dangerous heavy metals from contaminating our water and soil.',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Electronic printed circuit boards and components being collected for certified recycling',
    imageCaption: 'Safe electronic waste collection and authorized material processing.',
    reality:
      'Defunct smartphones, broken chargers, lead batteries, and old televisions are dumped into common dustbins or burned by informal scrap handlers to extract traces of copper and gold.',
    didYouKnow: {
      stat: 'India generated 1.71 million tonnes of e-waste in 2022-23, with only ~33% officially recycled',
      text: 'The Central Pollution Control Board (CPCB) E-Waste Inventory underscores that informal open burning of circuit boards releases carcinogenic lead, mercury, and cadmium into aquifers, requiring authorized collection hubs.',
      source: 'Central Pollution Control Board (CPCB) E-Waste Inventory',
      year: '2023',
      link: 'https://cpcb.nic.in',
    },
    whyItMatters:
      'Backyard burning and open dumping release lead, mercury, and cadmium into air and groundwater, causing severe neurological, renal, and respiratory illnesses across neighboring areas.',
    ourAim:
      'We are introducing safe e-waste collection bins at colleges, offices, and residential clusters, channeling gathered hardware exclusively to state-authorized recycling facilities (we do not own a recycling plant).',
    howToHelp:
      'Keep obsolete electronics, cables, and batteries separated from domestic trash, and deposit them at designated safe collection drives instead of selling to crude scrap burners.',
    focusTags: ['Safe E-Waste Bins', 'Heavy Metal Containment', 'Authorized Recyclers', 'Data Privacy Advice'],
    challenge:
      'Defunct smartphones, broken chargers, lead batteries, and old televisions are dumped into common dustbins or burned by informal scrap handlers to extract traces of copper and gold.',
    ourApproach:
      'We are introducing safe e-waste collection bins at colleges, offices, and residential clusters, channeling gathered hardware exclusively to state-authorized recycling facilities (we do not own a recycling plant).',
  },
  {
    id: '10',
    anchorId: 'story-10',
    number: '10',
    title: 'Used Tyre Collection & Recycling',
    category: 'Resource Containment',
    tagline: 'Eliminating toxic open-air smoke and seasonal mosquito breeding grounds.',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Orderly storage of automotive tyres for safe industrial crumb rubber recovery',
    imageCaption: 'Preventing illegal open tyre fires through authorized industrial processing.',
    reality:
      'Discarded automotive tyres lie stacked outside roadside puncture shops and vacant plots. Stagnant rainwater trapped inside casings drives major regional outbreaks of dengue and chikungunya.',
    didYouKnow: {
      stat: 'Over 275,000 tonnes of scrap tyres in India accumulate stagnant water, driving vector disease outbreaks',
      text: 'The Central Road Research Institute (CRRI) and National Vector Borne Disease Control Programme identify discarded tyres as primary breeding habitats for Aedes aegypti mosquitoes (dengue and chikungunya).',
      source: 'Central Road Research Institute (CRRI) / NVBDCP',
      year: '2022',
      link: 'https://crridom.gov.in',
    },
    whyItMatters:
      'Burning tyres for warmth or scrap releases thick plumes of carcinogenic dioxins, furans, and heavy particulates into the night air, severely damaging community lung health.',
    ourAim:
      'We are conducting mosquito-breeding audits at transport garages, advising mechanics on dry indoor storage, and routing collected tyres to certified crumb rubber and asphalt facilities (we do not operate a tyre processing plant).',
    howToHelp:
      'Mechanics and vehicle owners can ensure used tyres are stored under shed roofs away from rain, and support authorized crumb-rubber recycling over illegal open dumping.',
    focusTags: ['Vector Disease Prevention', 'Zero Open Burning', 'Crumb Rubber Linkages', 'Garage Safety'],
    challenge:
      'Discarded automotive tyres lie stacked outside roadside puncture shops and vacant plots. Stagnant rainwater trapped inside casings drives major regional outbreaks of dengue and chikungunya.',
    ourApproach:
      'We are conducting mosquito-breeding audits at transport garages, advising mechanics on dry indoor storage, and routing collected tyres to certified crumb rubber and asphalt facilities (we do not operate a tyre processing plant).',
  },
  {
    id: '11',
    anchorId: 'story-11',
    number: '11',
    title: 'Heritage & Monument Preservation',
    category: 'Cultural Antiquity',
    tagline: 'Guarding historic stone monuments and sacred community water tanks.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Majestic ancient Indian stone temple architecture preserved in natural grandeur',
    imageCaption: 'Historical monument stewardship and sacred tank conservation.',
    reality:
      'Historic stone temples, ancient kunds (reservoirs), and architectural heritage across Jharkhand suffer from non-biodegradable ritual litter, plastic dumping, and unauthorized stone graffiti.',
    didYouKnow: {
      stat: 'Jharkhand hosts over 50 ancient protected stone monuments and sacred temple reservoirs (kunds)',
      text: 'The Archaeological Survey of India (ASI) reports that community cleanliness drives, heritage walks, and zero-plastic stewardship preserve centuries-old terracotta and stone carvings from environmental degradation.',
      source: 'Archaeological Survey of India (ASI)',
      year: '2022',
      link: 'https://asi.nic.in',
    },
    whyItMatters:
      'Historical monuments are the living archives of our regional artistry and craftsmanship. Sacred temple ponds provide essential groundwater recharge and civic pride for local communities.',
    ourAim:
      'We are planning volunteer weekend cleanup campaigns at heritage landmarks with appropriate permissions, installing polite zero-plastic signage, and conducting guided heritage stewardship walks.',
    howToHelp:
      'Carry reusable water containers when visiting ancient monuments, practice strict leave-no-trace ethics, and educate family members to treat historic stone carvings with deep reverence.',
    focusTags: ['Monument Cleanups', 'Sacred Tank Aeration', 'Anti-Vandalism Advocacy', 'Civic Heritage Pride'],
    challenge:
      'Historic stone temples, ancient kunds (reservoirs), and architectural heritage across Jharkhand suffer from non-biodegradable ritual litter, plastic dumping, and unauthorized stone graffiti.',
    ourApproach:
      'We are planning volunteer weekend cleanup campaigns at heritage landmarks with appropriate permissions, installing polite zero-plastic signage, and conducting guided heritage stewardship walks.',
  },
  {
    id: '12',
    anchorId: 'story-12',
    number: '12',
    title: 'Transgender & Social Inclusion',
    category: 'Social Equity',
    tagline: 'Upholding fundamental dignity, equal opportunities, and respectful dialogue.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Diverse community group sharing friendship, solidarity, and mutual respect',
    imageCaption: 'Promoting human dignity, equal opportunities, and inclusive community participation.',
    reality:
      'Transgender and gender-diverse individuals face severe societal marginalization, harassment, denial of rented housing, and exclusion from mainstream vocational opportunities.',
    didYouKnow: {
      stat: 'Over 96% of transgender persons in India face exclusion from mainstream formal employment',
      text: 'The National Human Rights Commission (NHRC) study on transgender rights underscores that community sensitization, equal hiring, and legal dignity are fundamental to ending social marginalization.',
      source: 'National Human Rights Commission (NHRC)',
      year: '2021',
      link: 'https://nhrc.nic.in',
    },
    whyItMatters:
      'Every human being possesses an innate right to live with safety, legal dignity, and fair employment. An inclusive society is stronger, kinder, and more just for everyone.',
    ourAim:
      'We plan to conduct community sensitization workshops, facilitate inclusive vocational skill programs, and promote respectful dialogue to dismantle archaic social prejudices.',
    howToHelp:
      'Confront discriminatory jokes and slurs in everyday conversations, encourage fair hiring practices, and treat transgender individuals with warmth, fairness, and professional courtesy.',
    focusTags: ['Social Dignity', 'Equal Opportunity', 'Sensitization Dialogues', 'Anti-Discrimination'],
    challenge:
      'Transgender and gender-diverse individuals face severe societal marginalization, harassment, denial of rented housing, and exclusion from mainstream vocational opportunities.',
    ourApproach:
      'We plan to conduct community sensitization workshops, facilitate inclusive vocational skill programs, and promote respectful dialogue to dismantle archaic social prejudices.',
  },
  {
    id: '13',
    anchorId: 'story-13',
    number: '13',
    title: 'Food, Nutrition & Hunger Relief',
    category: 'Nourishment & Care',
    tagline: 'Rescuing surplus meals and ensuring dignified nutrition for vulnerable families.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Wholesome fresh food and vegetables prepared for community nutrition support',
    imageCaption: 'Safe food distribution, nutrition awareness, and food waste prevention.',
    reality:
      'Enormous quantities of wholesome prepared food are discarded after weddings and banquets, while daily-wage laborers, rickshaw pullers, and street children suffer chronic nutritional gaps.',
    didYouKnow: {
      stat: 'India discards approximately 78 million tonnes of food annually, even as nutritional gaps persist',
      text: 'The UNEP Food Waste Index Report highlights that structured surplus recovery from banquet halls combined with local distribution channels can feed thousands while preventing landfill methane emissions.',
      source: 'UNEP Food Waste Index / Ministry of Consumer Affairs',
      year: '2024',
      link: 'https://www.unep.org',
    },
    whyItMatters:
      'Nourishing food is fundamental to human health and mental focus. Wasting edible food while neighbors go hungry represents a deep moral failure that community coordination can solve.',
    ourAim:
      'We are establishing surplus food recovery protocols with local event banquet halls, organizing hygienic food distribution drives, and teaching mothers about iron-rich local dietary staples.',
    howToHelp:
      'Cook thoughtfully to prevent domestic food waste, coordinate with local volunteers to donate clean leftover event meals immediately, and sponsor dry ration kits for struggling families.',
    focusTags: ['Surplus Food Rescue', 'Nutrition Literacy', 'Dignified Support', 'Hunger Mitigation'],
    challenge:
      'Enormous quantities of wholesome prepared food are discarded after weddings and banquets, while daily-wage laborers, rickshaw pullers, and street children suffer chronic nutritional gaps.',
    ourApproach:
      'We are establishing surplus food recovery protocols with local event banquet halls, organizing hygienic food distribution drives, and teaching mothers about iron-rich local dietary staples.',
  },
  {
    id: '14',
    anchorId: 'story-14',
    number: '14',
    title: 'Community Cleanliness & Civic Responsibility',
    category: 'Civic Pride',
    tagline: 'Inspiring everyday citizen ownership over shared streets and public lanes.',
    image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Residents and volunteers actively cleaning up and beautifying a shared neighborhood space',
    imageCaption: 'Neighborhood cleanliness drives and shared civic responsibility.',
    reality:
      'Litter-strewn roadsides, overflowing storm drains, and careless public spitting persist because public spaces are often treated as nobody’s property rather than everyone’s shared home.',
    didYouKnow: {
      stat: 'Over 4,300 cities and towns participate in Swachh Survekshan to foster citizen-driven sanitation',
      text: 'The Ministry of Housing and Urban Affairs (MoHUA) notes that community cleanups and street frontage ownership by local residents improve public hygiene and reduce seasonal monsoon drainage clogs.',
      source: 'Ministry of Housing and Urban Affairs (MoHUA)',
      year: '2023',
      link: 'https://swachhbharaturban.gov.in',
    },
    whyItMatters:
      'Clean neighborhoods prevent monsoon waterlogging, reduce malaria and dengue outbreaks, and instill an inspiring sense of civic pride and mutual respect among residents.',
    ourAim:
      'We are organizing ward-level citizen cleanup walks, distributing designated shopkeeper litter bins along market corridors, and working with resident associations to maintain clean street stretches.',
    howToHelp:
      'Keep your immediate storefront or home frontage spotless, carry a pocket wrapper pouch when walking, and participate in your neighborhood’s monthly Sunday morning cleanup drive.',
    focusTags: ['Neighborhood Cleanliness', 'Civic Pride', 'Shopkeeper Bins', 'Litter Prevention'],
    challenge:
      'Litter-strewn roadsides, overflowing storm drains, and careless public spitting persist because public spaces are often treated as nobody’s property rather than everyone’s shared home.',
    ourApproach:
      'We are organizing ward-level citizen cleanup walks, distributing designated shopkeeper litter bins along market corridors, and working with resident associations to maintain clean street stretches.',
  },
  {
    id: '15',
    anchorId: 'story-15',
    number: '15',
    title: 'Disaster Relief & Community Resilience',
    category: 'Emergency Solidarity',
    tagline: 'Preparing neighborhoods to weather heatwaves, monsoons, and local crises.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Volunteers and community members standing in mutual support during a civic relief effort',
    imageCaption: 'Disaster preparedness, summer heatwave relief, and community mutual aid.',
    reality:
      'Scorching heatwaves above 44°C and sudden monsoon cloudbursts severely threaten elderly citizens and outdoor manual laborers who lack shaded relief or emergency assistance.',
    didYouKnow: {
      stat: 'Eastern India experiences over 18 severe heatwave days annually, endangering outdoor workers',
      text: 'The National Disaster Management Authority (NDMA) Heat Wave Guidelines indicate that community shade kiosks, cool drinking water posts, and citizen first-aid networks save hundreds of lives during extreme summer weather.',
      source: 'National Disaster Management Authority (NDMA)',
      year: '2023',
      link: 'https://ndma.gov.in',
    },
    whyItMatters:
      'Grassroots preparedness and neighborhood solidarity save lives long before formal institutional machinery can deploy. A connected community withstands climate shocks with dignity.',
    ourAim:
      'We are planning summer heat-relief kiosks with clean drinking water and ORS packets for outdoor workers, training youth volunteers in basic first aid, and conducting monsoon drainage audits (we do not claim to operate an official emergency service).',
    howToHelp:
      'Set out shaded benches and clean water pots for street sweepers and delivery workers during peak afternoon heat, take a certified first-aid course, and check on elderly neighbors during heatwaves.',
    focusTags: ['Heatwave Outposts', 'Citizen First Aid', 'Volunteer Registries', 'Climate Resilience'],
    challenge:
      'Scorching heatwaves above 44°C and sudden monsoon cloudbursts severely threaten elderly citizens and outdoor manual laborers who lack shaded relief or emergency assistance.',
    ourApproach:
      'We are planning summer heat-relief kiosks with clean drinking water and ORS packets for outdoor workers, training youth volunteers in basic first aid, and conducting monsoon drainage audits (we do not claim to operate an official emergency service).',
  },
];

export const INITIATIVES = INITIATIVES_15;
export const INITIATIVES_18 = INITIATIVES_15;
