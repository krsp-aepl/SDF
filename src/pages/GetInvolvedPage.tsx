import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Users, HandHeart, Building, Megaphone, Heart, Mail, CheckCircle2,
  ArrowRight, Info, ChevronLeft, ChevronRight, X, Sparkles
} from 'lucide-react';
import { SDF_INFO } from '../data/foundationData';

type PanelKey = 'volunteer' | 'community' | 'partner' | 'awareness' | 'donation';

const pathways = [
  { id: 'community' as PanelKey, name: 'Community Participation', caption: 'Join local action and community initiatives', image: '/images/living_world_collage.png', icon: HandHeart, position: -2 },
  { id: 'partner' as PanelKey, name: 'Partnership Enquiries', caption: 'Collaborate to create meaningful change', image: '/images/commitment_hands_promise.png', icon: Building, position: -1 },
  { id: 'volunteer' as PanelKey, name: 'Volunteer Network', caption: 'Contribute your time, skills and energy', image: '/images/samrakshan_living_scene.png', icon: Users, position: 0 },
  { id: 'awareness' as PanelKey, name: 'Awareness Collaboration', caption: 'Spread knowledge and inspire action', image: '/images/women_empowerment.jpg', icon: Megaphone, position: 1 },
  { id: 'donation' as PanelKey, name: 'Future Donation Enquiries', caption: 'Express interest in supporting future initiatives', image: '/images/card_commitment_visual.png', icon: Heart, position: 2 },
];

export const GetInvolvedPage: React.FC = () => {
  const location = useLocation();
  const isFromDharaStream = Boolean(location.state?.fromDharaStream);
  const [activePanel, setActivePanel] = useState<PanelKey>('volunteer');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly' | 'yearly'>('one-time');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [interestArea, setInterestArea] = useState('Nature & Plantation Guardianship');
  const [notes, setNotes] = useState('');

  const selectedIndex = pathways.findIndex(item => item.id === activePanel);
  const changeSelection = (key: PanelKey) => {
    if (key === activePanel) {
      setDetailsOpen(true);
      requestAnimationFrame(() => document.getElementById('sdf-pathway-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    } else {
      setActivePanel(key);
      setDetailsOpen(false);
      setFormSubmitted(false);
    }
  };
  const rotateSelection = (step: number) => {
    setActivePanel(pathways[(selectedIndex + step + pathways.length) % pathways.length].id);
    setDetailsOpen(false);
  };
  const revealDetails = () => {
    setDetailsOpen(true);
    requestAnimationFrame(() => document.getElementById('sdf-pathway-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[SDF Involvement Enquiry] - ${interestArea} - ${fullName}`);
    const body = encodeURIComponent(
      `Hello Samrakshan Dhara Foundation,\n\nName: ${fullName}\nEmail: ${email}\nSelected Pathway: ${pathways[selectedIndex].name}\nInterest: ${interestArea}\nMessage:\n${notes}\n\nSent from SDF Web Portal.`
    );
    window.location.href = `mailto:${SDF_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <main className="sdf-involved relative overflow-hidden bg-[#052D32] text-[#F8F7EF]">
      <style>{`
        .sdf-involved{background:radial-gradient(ellipse at 54% 20%,#126564 0%,#073B43 40%,#04262D 80%);}
        .sdf-layered-stage{perspective:1400px;isolation:isolate;}
        .sdf-layer-card{position:absolute;left:50%;top:35px;width:288px;height:402px;margin-left:-144px;transform-style:preserve-3d;transition:transform 720ms cubic-bezier(.22,1,.36,1),opacity 600ms,filter 600ms;will-change:transform;cursor:pointer;}
        .sdf-layer-card:focus-visible{outline:3px solid #73D4C3;outline-offset:7px;}
        .sdf-layer-card .sdf-card-surface{height:100%;overflow:hidden;background:#073B43;border-radius:23px;border:1px solid rgba(116,217,203,.6);box-shadow:0 27px 46px rgba(0,8,12,.45),0 0 25px rgba(30,180,155,.14);transition:border-color 450ms,box-shadow 450ms;}
        .sdf-layer-card[data-active="true"] .sdf-card-surface{border-color:#94E0CE;box-shadow:0 38px 65px rgba(0,8,12,.55),0 0 35px rgba(88,215,191,.28);}
        .sdf-layer-card img{height:100%;width:100%;object-fit:cover;filter:saturate(.9);}
        .sdf-layer-card .sdf-card-tint{position:absolute;inset:0;background:linear-gradient(180deg,transparent 10%,rgba(3,39,42,.18) 40%,#03282e 76%,#063f42 100%);}
        .sdf-layer-card[data-active="false"] .sdf-card-surface{filter:brightness(.78);}
        .sdf-layer-card .sdf-card-copy{position:absolute;bottom:0;left:0;right:0;padding:24px 20px 26px;text-align:center;}
        .sdf-layer-card .sdf-card-copy h3{font-family:Georgia,serif;font-size:27px;line-height:1.08;color:#f8f7ef;margin:10px 0;}
        .sdf-layer-card[data-active="true"] .sdf-card-copy h3{font-size:29px;}
        .sdf-orb-halo{background:radial-gradient(ellipse at center,rgba(49,174,163,.14),transparent 70%);}
        @media(max-width:767px){
          .sdf-layered-stage{height:auto!important;perspective:none;}
          .sdf-layer-card{position:relative;left:auto;top:auto;margin:0 auto 0;width:min(76vw,318px);height:400px;transform:none!important;opacity:1!important;filter:none!important;display:none;}
          .sdf-layer-card[data-active="true"]{display:block;}
          .sdf-layer-card .sdf-card-surface{filter:none!important;}
        }
        @media(prefers-reduced-motion:reduce){
          .sdf-layer-card{transition:none;}
          .sdf-involved *{scroll-behavior:auto!important;}
        }
      `}</style>
      <section className="relative overflow-hidden pt-24 sm:pt-28 pb-10 text-center">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-40"
             style={{background:'radial-gradient(ellipse at 80% 28%, rgba(78,209,190,.22), transparent 35%),radial-gradient(ellipse at 12% 65%, rgba(12,109,110,.3), transparent 42%)'}} />
        <div className="absolute inset-0 pointer-events-none opacity-15" aria-hidden="true"
             style={{backgroundImage:'url(/images/dhara_river_scene.png)',backgroundSize:'cover',backgroundPosition:'center',maskImage:'linear-gradient(transparent,#000 50%,transparent)',WebkitMaskImage:'linear-gradient(transparent,#000 50%,transparent)'}} />
        <div className="relative z-10 px-6">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[.29em] font-semibold text-[#D5AD65]">
            <Sparkles size={14} /> Get Involved
          </span>
          <h1 className={`font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.12] font-medium mt-4 text-[#F8F7EF] ${isFromDharaStream ? 'animate-fluid-heading' : ''}`}>
            Be a Part of <span className="block sm:inline text-[#E6DFC8]">SAMRAKSHAN DHARA</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-lg font-light text-[#D5E8E3]/90 leading-relaxed">
            Your time. Your ideas. Your compassion. Together, they can make a difference.
          </p>
        </div>
      </section>

      <section aria-label="Explore participation opportunities" className="relative max-w-[1320px] mx-auto px-2 sm:px-6 pb-16">
        <div aria-hidden="true" className="absolute inset-0 sdf-orb-halo pointer-events-none"/>
        <div className="sdf-layered-stage relative h-[490px] md:h-[510px]">
          {pathways.map((item, index) => {
            const Icon = item.icon;
            const rawOffset = (index - selectedIndex + pathways.length) % pathways.length;
            const offset = rawOffset > 2 ? rawOffset - pathways.length : rawOffset;
            const abs = Math.abs(offset);
            const isActive = offset === 0;
            const x = offset * 205;
            const transform = `translate3d(${x}px,${abs * 26}px,${-abs * 90}px) rotateY(${-offset * 11}deg) rotateZ(${offset * 2}deg) scale(${isActive ? 1.13 : abs === 1 ? .98 : .86})`;
            return (
              <button
                type="button"
                key={item.id}
                data-active={isActive ? 'true' : 'false'}
                className="sdf-layer-card text-left"
                style={{transform, zIndex: 15 - abs, opacity: abs === 2 ? .83 : 1}}
                onClick={() => changeSelection(item.id)}
                aria-label={`${item.name}${isActive ? ', selected, open details' : ', select pathway'}`}
                aria-pressed={isActive}
              >
                <div className="sdf-card-surface relative">
                  <img src={item.image} alt="" loading={abs === 2 ? 'lazy' : 'eager'} />
                  <div className="sdf-card-tint"/>
                  <div className="sdf-card-copy">
                    <Icon className="mx-auto text-[#A5DCCD]" size={33} strokeWidth={1.5}/>
                    <h3>{item.name}</h3>
                    <p className="text-[12px] text-[#E2EFE9]/90 leading-relaxed min-h-[38px]">{item.caption}</p>
                    {isActive ? (
                      <span className="inline-flex mt-4 px-5 py-2.5 rounded-full bg-[#75CBB8] text-[#053A3A] text-sm font-semibold gap-2 items-center">
                        Explore &amp; Join <ArrowRight size={15}/>
                      </span>
                    ) : (
                      <span className="inline-flex justify-center items-center rounded-full w-8 h-8 mt-3 border border-[#9BD6C9]/60 text-[#BCE1D9]"><ArrowRight size={16}/></span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <div className="relative z-20 flex justify-center items-center gap-5 pt-2">
          <button type="button" onClick={() => rotateSelection(-1)} aria-label="Previous opportunity"
                  className="w-11 h-11 rounded-full border border-[#7FCBC0]/50 hover:bg-[#1B6B66] flex items-center justify-center transition-colors">
            <ChevronLeft size={22}/>
          </button>
          <div className="flex items-center gap-2" aria-label="Opportunity position">
            {pathways.map(item => (
              <button type="button" key={item.id} onClick={() => changeSelection(item.id)}
                      className={`rounded-full transition-all h-2.5 ${activePanel === item.id ? 'w-7 bg-[#8FDBCA]' : 'w-2.5 bg-[#9EBFBA]/40 hover:bg-[#9EBFBA]'}`}
                      aria-label={`Select ${item.name}`} aria-pressed={activePanel === item.id}/>
            ))}
          </div>
          <button type="button" onClick={() => rotateSelection(1)} aria-label="Next opportunity"
                  className="w-11 h-11 rounded-full border border-[#7FCBC0]/50 hover:bg-[#1B6B66] flex items-center justify-center transition-colors">
            <ChevronRight size={22}/>
          </button>
        </div>
        <p className="text-center text-xs text-[#B9D8D3]/65 mt-4">Choose a panel to bring it forward. Select the centre panel to explore and join.</p>
        <div className="flex justify-center mt-5">
          <button type="button" onClick={revealDetails}
                  className="rounded-full border border-[#77BDB2]/50 bg-[#087F78] hover:bg-[#159F8E] text-white font-medium px-7 py-3 text-sm transition-colors flex items-center gap-2">
            Explore {pathways[selectedIndex].name} <ArrowRight size={17}/>
          </button>
        </div>
      </section>

      {detailsOpen && (
        <section id="sdf-pathway-details" className="scroll-mt-28 px-4 sm:px-8 pb-24 max-w-4xl mx-auto">
          <div className="relative rounded-[28px] p-6 sm:p-10 bg-[#042B31]/95 border border-[#67BEAE]/35 shadow-[0_30px_80px_rgba(0,0,0,.3)] space-y-7">
            <button type="button" onClick={() => setDetailsOpen(false)} aria-label="Close details"
                    className="absolute top-5 right-5 rounded-full border border-white/20 p-2 hover:bg-white/10"><X size={18}/></button>
              {/* PANEL 1: VOLUNTEER */}
              {activePanel === 'volunteer' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#49CEC3]">
                    <Users className="w-6 h-6" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D5AD65]">
                      Ground Squads
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7EF] font-medium">
                    Volunteer With Samrakshan Dhara
                  </h2>
                  <p className="text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
                    We invite compassionate students, working professionals, and civic champions in Dhanbad to join our volunteer database. Activities include:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
                      <strong className="text-[#49CEC3] block">Sapling Guardianship</strong>
                      <p className="text-[#E6EEE7]/80">Watering, monitoring, and weeding young native trees planted in residential clusters.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
                      <strong className="text-[#49CEC3] block">Street Animal Aid Network</strong>
                      <p className="text-[#E6EEE7]/80">Distributing summer water bowls, alerting emergency veterinary clinics, and feeding puppies safely.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
                      <strong className="text-[#49CEC3] block">Weekend Waste Drives</strong>
                      <p className="text-[#E6EEE7]/80">Voluntary cleanups around temple talaabs, sacred ponds, and market streets.</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
                      <strong className="text-[#49CEC3] block">Education Circles</strong>
                      <p className="text-[#E6EEE7]/80">Assisting in weekend foundational reading, math, and hygiene workshops for children.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* PANEL 2: COMMUNITY PARTICIPATION */}
              {activePanel === 'community' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#49CEC3]">
                    <HandHeart className="w-6 h-6" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D5AD65]">
                      Neighborhood Clusters
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7EF] font-medium">
                    Community Participation
                  </h2>
                  <p className="text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
                    Civic transformation happens block by block. We collaborate with Resident Welfare Associations (RWAs), market trade committees, and housing societies across Dhanbad to implement:
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#E6EEE7]/85 list-disc list-inside font-light">
                    <li>Dry and wet source waste segregation workshops for household residents.</li>
                    <li>Designated clean feeding spots for community dogs away from high-traffic roadways.</li>
                    <li>Plastic-free market days with cloth bag sharing corners.</li>
                    <li>Tree preservation drives protecting mature roadside neem and peepal canopies.</li>
                  </ul>
                </div>
              )}

              {/* PANEL 3: PARTNERSHIP ENQUIRIES */}
              {activePanel === 'partner' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#49CEC3]">
                    <Building className="w-6 h-6" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D5AD65]">
                      Institutional Alliances
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7EF] font-medium">
                    Partnership Enquiries
                  </h2>
                  <p className="text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
                    Samrakshan Dhara Foundation actively welcomes dialogue with:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                      <strong className="text-[#D5AD65] block mb-1">State-Authorized Recyclers</strong>
                      Collaborating on verified pathways for processed electronic scrap, batteries, and discarded automotive tyres.
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                      <strong className="text-[#D5AD65] block mb-1">Veterinary Clinics & Gaushalas</strong>
                      Forming rapid-response triage relationships for injured cows, calves, and street animals.
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm">
                      <strong className="text-[#D5AD65] block mb-1">Educational Institutions</strong>
                      Hosting student internships, eco-club initiatives, and foundational literacy campaigns.
                    </div>
                  </div>
                </div>
              )}

              {/* PANEL 4: AWARENESS COLLABORATION */}
              {activePanel === 'awareness' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#49CEC3]">
                    <Megaphone className="w-6 h-6" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D5AD65]">
                      Spreading The Message
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7EF] font-medium">
                    Awareness Collaboration
                  </h2>
                  <p className="text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
                    Are you an artist, writer, documentary filmmaker, educator, or digital creator? Help us amplify compassionate living and environmental stewardship through storytelling.
                  </p>
                  <p className="text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
                    We welcome informative guest workshops, scientific infographics on algae carbon capture, school theater scripts on animal coexistence, and photo-documentary projects.
                  </p>
                </div>
              )}

              {/* PANEL 5: FUTURE DONATION ENQUIRIES */}
              {activePanel === 'donation' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[#49CEC3]">
                    <Heart className="w-6 h-6" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#D5AD65]">
                      Statutory Transparency
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7EF] font-medium">
                    Future Donation Enquiries
                  </h2>

                  <div className="p-4 rounded-2xl bg-[#087F78]/30 border border-[#D5AD65]/40 text-xs sm:text-sm text-[#F8F7EF] space-y-2">
                    <div className="flex items-center gap-2 text-[#D5AD65] font-semibold">
                      <Info className="w-4 h-4 shrink-0" />
                      <span>Important Notice Regarding Financial Contributions</span>
                    </div>
                    <p className="text-[#E6EEE7]/90 leading-relaxed font-light">
                      Samrakshan Dhara Foundation is in its preparatory stage (Incorporated: 04 August 2026). In strict accordance with Indian legal and non-profit regulations, financial donations will only be formally received once all statutory registrations (including Section 12A and 80G tax exemptions) are officially active. No online payments are processed at this time.
                    </p>
                  </div>

                  {/* Non-payment donation interest options */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-mono text-[#D5AD65] uppercase block">
                      Enquiry Interest Frequency:
                    </label>
                    <div className="flex items-center gap-3">
                      {(['one-time', 'monthly', 'yearly'] as const).map((freq) => (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setDonationFrequency(freq)}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-colors ${
                            donationFrequency === freq
                              ? 'bg-[#28A77B] text-[#073B43]'
                              : 'bg-white/10 text-white hover:bg-white/20'
                          }`}
                        >
                          {freq} Interest
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-[#E6EEE7]/70 italic">
                      You can register your advance interest below to be notified once our formal bank donation window opens.
                    </p>
                  </div>
                </div>
              )}

              {/* Functional Interest Submission Form (No fake backend, truthful email trigger) */}
              <div className="pt-8 border-t border-white/10 space-y-6">
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl text-[#F8F7EF] font-medium">
                    Express Your Interest
                  </h3>
                  <p className="text-xs text-[#E6EEE7]/70">
                    Submit your details to start a conversation directly with our foundation team.
                  </p>
                </div>

                {formSubmitted && (
                  <div className="p-4 rounded-2xl bg-[#28A77B]/20 border border-[#28A77B]/40 text-sm text-[#F8F7EF] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#28A77B] shrink-0" />
                    <span>Your mail client has been opened with your prefilled enquiry. You can also directly reach us at {SDF_INFO.email}.</span>
                  </div>
                )}

                <form onSubmit={handleInterestSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#E6EEE7]/80">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#49CEC3] focus:outline-none text-sm text-[#F8F7EF] placeholder-white/30"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#E6EEE7]/80">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. ananya@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#49CEC3] focus:outline-none text-sm text-[#F8F7EF] placeholder-white/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#E6EEE7]/80">Primary Interest Area</label>
                    <select
                      value={interestArea}
                      onChange={(e) => setInterestArea(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#073B43] border border-white/15 focus:border-[#49CEC3] focus:outline-none text-sm text-[#F8F7EF]"
                    >
                      <option>Nature & Plantation Guardianship</option>
                      <option>Animal Welfare & Emergency Aid</option>
                      <option>Waste Management & Cleanliness</option>
                      <option>Children, Education & Health</option>
                      <option>Used Tyre & E-Waste Containment</option>
                      <option>Heritage & Public Space Cleanliness</option>
                      <option>Future Financial Donation Notification</option>
                      <option>General Support & Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#E6EEE7]/80">Your Message or Background</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share how you would like to participate or any relevant background..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#49CEC3] focus:outline-none text-sm text-[#F8F7EF] placeholder-white/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#28A77B] hover:bg-[#49CEC3] text-[#073B43] font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#28A77B]/20 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Participation Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
          </div>
        </section>
      )}
    </main>
  );
};
