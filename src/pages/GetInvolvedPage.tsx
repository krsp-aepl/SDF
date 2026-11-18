import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Users, HandHeart, Building, Heart, Building2, Megaphone, HeartHandshake,
  Mail, CheckCircle2, ArrowRight, Info, X, Sparkles, Recycle
} from 'lucide-react';
import { SDF_INFO } from '../data/foundationData';

type PanelKey = 'volunteer' | 'community' | 'partner' | 'awareness' | 'donation';

const PATHWAYS: Array<{ id: PanelKey; heading: string; label: string; description: string; Icon: React.ComponentType<{className?: string; size?: number; strokeWidth?: number}> }> = [
  { id: 'volunteer', heading: 'Volunteer', label: 'Volunteer Network', description: 'Contribute your time, skills and energy to meaningful initiatives.', Icon: Users },
  { id: 'awareness', heading: 'Awareness', label: 'Awareness Collaboration', description: 'Spread knowledge and inspire responsible action.', Icon: Megaphone },
  { id: 'partner', heading: 'Collaboration', label: 'Partnership Enquiries', description: 'Explore partnerships for lasting community impact.', Icon: HandHeart },
  { id: 'community', heading: 'Community', label: 'Community Participation', description: 'Join community-led initiatives and local action.', Icon: Recycle },
  { id: 'donation', heading: 'Support', label: 'Future Donation Enquiries', description: 'Enquire about supporting future initiatives; no payments are collected.', Icon: HeartHandshake },
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

  const reveal = (id: PanelKey = activePanel) => {
    setActivePanel(id);
    setDetailsOpen(true);
    setFormSubmitted(false);
    // Wait for the conditional details area to mount before scrolling to it.
    window.setTimeout(() => {
      document.getElementById('sdf-pathway-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[SDF Involvement Enquiry] - ${interestArea} - ${fullName}`);
    const body = encodeURIComponent(
      `Hello Samrakshan Dhara Foundation,\n\nName: ${fullName}\nEmail: ${email}\nSelected Pathway: ${PATHWAYS.find(p => p.id === activePanel)?.label}\nInterest: ${interestArea}\nMessage:\n${notes}\n\nSent from SDF Web Portal.`
    );
    window.location.href = `mailto:${SDF_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <main className="sdf-cinematic-page relative isolate min-h-screen overflow-hidden bg-[#062f33] text-[#F8F7EF]">
      <style>{`
        .sdf-cinematic-page { background: radial-gradient(ellipse at 54% 30%,#0a5957 0%,#053f41 34%,#032e32 64%,#021e24 100%); }
        .sdf-cinematic-hero { min-height: 760px; position:relative; isolation:isolate; }
        .sdf-cinematic-hero::before { content:''; position:absolute; inset:0; z-index:-3; background:linear-gradient(180deg,rgba(0,25,28,.55),rgba(0,44,45,.20) 42%,rgba(0,35,41,.7)),url('/images/dhara_river_scene.png') center 45%/cover no-repeat; opacity:.52; }
        .sdf-cinematic-hero::after { content:''; position:absolute; inset:0; z-index:-2; pointer-events:none; background:radial-gradient(ellipse at 50% 56%,rgba(8,138,126,.35),transparent 44%),radial-gradient(ellipse at 12% 13%,rgba(145,207,153,.13),transparent 37%),linear-gradient(90deg,rgba(1,35,36,.7),transparent 32%,transparent 68%,rgba(1,35,36,.7)); }
        .sdf-cinematic-aura { position:absolute; inset:-25%; background:conic-gradient(from 40deg, transparent 0deg, rgba(90,229,205,.075) 70deg, transparent 132deg,rgba(224,185,106,.055) 205deg,transparent 260deg); animation:sdf-aura-turn 37s linear infinite; pointer-events:none; }
        .sdf-stage { display:grid; grid-template-columns:minmax(210px,1fr) minmax(280px,480px) minmax(210px,1fr); gap:clamp(16px,2.7vw,42px); align-items:center; width:min(1250px,94%); margin:22px auto 0; }
        .sdf-choices { display:flex; flex-direction:column; justify-content:space-around; gap:55px; align-self:stretch; padding:40px 0; }
        .sdf-choice { display:flex; align-items:center; gap:16px; width:100%; text-align:left; transition:transform .4s ease,filter .4s ease; background:transparent; color:#f8f7ef; cursor:pointer; }
        .sdf-choice:hover,.sdf-choice:focus-visible { transform:translateY(-5px); filter:drop-shadow(0 0 13px rgba(108,217,193,.28)); outline:none; }
        .sdf-choice-icon { flex:none; display:grid; place-items:center; width:67px; height:67px; border:1px solid rgba(215,181,112,.65); border-radius:50%; background:radial-gradient(circle at 30% 22%,rgba(15,132,111,.45),rgba(1,40,46,.7)); box-shadow:0 0 24px rgba(217,179,104,.08),inset 0 0 16px rgba(16,123,102,.2); color:#e5be7b; }
        .sdf-choice-title { display:block; font:normal clamp(23px,2.3vw,34px)/1.05 Georgia,serif; }
        .sdf-choice-desc { display:block; margin-top:8px; font-size:13px; line-height:1.55; color:#d2e5de; max-width:260px; }
        .sdf-choice.right { flex-direction:row-reverse; text-align:right; }
        .sdf-choice.right .sdf-choice-desc { margin-left:auto; }
        .sdf-logo-world { position:relative; width:100%; aspect-ratio:1; display:grid; place-items:center; animation:sdf-orb-float 7s ease-in-out infinite; }
        .sdf-logo-world::before { content:''; position:absolute; inset:8%; border-radius:50%; background:radial-gradient(circle at 37% 27%,#0a6b61 0%,#043d40 48%,#05232a 80%); border:1px solid rgba(219,189,117,.6); box-shadow:0 0 0 7px rgba(56,186,155,.07),0 0 75px rgba(27,205,160,.26),inset 0 8px 40px rgba(100,225,198,.14); }
        .sdf-logo-art { position:relative; z-index:2; width:85%; height:85%; object-fit:contain; filter:drop-shadow(0 12px 13px rgba(1,17,20,.4)); }
        .sdf-orbit { position:absolute; inset:0; z-index:3; border:2px solid transparent; border-top-color:#eed097; border-left-color:rgba(73,206,195,.8); border-radius:50%; box-shadow:0 0 16px rgba(109,236,200,.2); animation:sdf-aura-turn 17s linear infinite; pointer-events:none; }
        .sdf-orbit.orbit-two { inset:4%; transform:rotate(-31deg); border-top-color:#5deacb; border-right-color:rgba(240,192,111,.8); border-left-color:transparent; animation:sdf-aura-reverse 25s linear infinite; }
        .sdf-orbit.orbit-three { inset:-5%; border-width:1px; border-bottom-color:rgba(238,190,112,.7); border-left-color:rgba(50,184,163,.5); opacity:.6; animation-duration:30s; }
        .sdf-center-glint { position:absolute; z-index:4; left:48%; bottom:3%; width:20px; height:20px; background:#f7da96; border-radius:50%; filter:blur(11px); animation:sdf-glint 3s ease-in-out infinite alternate; }
        .sdf-stream { position:absolute; width:100%; height:100%; inset:0; z-index:-1; pointer-events:none; }
        .sdf-stream path { stroke-dasharray:14 22; animation:sdf-flow 9s linear infinite; }
        .sdf-community-link { border:1px solid rgba(97,197,178,.38); border-radius:50px; padding:11px 22px; color:#dbede6; font-size:13px; background:rgba(7,69,67,.65); backdrop-filter:blur(8px); transition:background .3s; }
        .sdf-community-link:hover { background:rgba(24,132,115,.65); }
        .sdf-involve-btn { display:inline-flex; align-items:center; justify-content:center; gap:18px; padding:15px 42px; background:linear-gradient(105deg,#faebc9,#e7c78c); color:#062e2c; font-size:17px; font-weight:700; border-radius:999px; box-shadow:0 8px 40px rgba(209,168,90,.25); transition:transform .35s ease,box-shadow .35s ease; }
        .sdf-involve-btn:hover { transform:translateY(-3px); box-shadow:0 14px 45px rgba(209,168,90,.4); }
        @keyframes sdf-aura-turn { to { transform:rotate(360deg); } }
        @keyframes sdf-aura-reverse { to { transform:rotate(-360deg); } }
        @keyframes sdf-orb-float { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-12px) } }
        @keyframes sdf-flow { to { stroke-dashoffset:-140; } }
        @keyframes sdf-glint { from{opacity:.4;scale:.85;} to{opacity:1;scale:1.3;} }
        @media(max-width:950px) { .sdf-stage { grid-template-columns:1fr minmax(220px,350px) 1fr; gap:12px; } .sdf-choice-icon {width:48px;height:48px;} .sdf-choice-title {font-size:22px;} .sdf-choice-desc {font-size:12px;} .sdf-choices {gap:24px;} }
        @media(max-width:700px) { .sdf-cinematic-hero { min-height:0; } .sdf-stage {display:flex;flex-direction:column; gap:16px; max-width:520px;} .sdf-logo-world {width:min(80vw,350px);order:0;} .sdf-choices { order:1; padding:0; width:100%; flex-direction:column; gap:10px; } .sdf-choice,.sdf-choice.right {flex-direction:row; text-align:left; padding:12px 14px; border:1px solid rgba(98,197,176,.22); border-radius:14px; background:rgba(4,48,51,.65);} .sdf-choice.right .sdf-choice-desc { margin-left:0;} .sdf-choice-title{font-size:21px;} .sdf-choice-desc{max-width:none;margin-top:4px;} .sdf-choice-icon{width:42px;height:42px;} }
        @media(prefers-reduced-motion:reduce) { .sdf-cinematic-aura,.sdf-logo-world,.sdf-orbit,.sdf-stream path,.sdf-center-glint {animation:none!important;} }
      `}</style>
      <section className="sdf-cinematic-hero pt-28 sm:pt-32 pb-14 overflow-hidden">
        <div aria-hidden="true" className="sdf-cinematic-aura" />
        <header className="relative z-10 max-w-5xl mx-auto text-center px-5">
          <div className="inline-flex items-center gap-3 uppercase text-[#d8b877] tracking-[.32em] text-[11px] font-semibold">
            <Sparkles size={14}/> Get Involved
          </div>
          <h1 className={`mt-4 font-serif text-[#F8F7EF] text-[clamp(35px,4.5vw,65px)] leading-[1.12] tracking-tight ${isFromDharaStream ? 'animate-fluid-heading' : ''}`}>
            <em className="block font-normal">Be a Part of</em>
            <span className="block">SAMRAKSHAN DHARA</span>
          </h1>
          <div aria-hidden="true" className="w-36 h-px bg-gradient-to-r from-transparent via-[#54d8b8] to-transparent mx-auto mt-5" />
          <p className="text-[#dceae4] max-w-xl mx-auto mt-5 leading-relaxed font-light text-sm sm:text-base">
            Your time, your ideas and your support can create a cleaner, healthier and more compassionate world.
          </p>
        </header>
        <div className="sdf-stage relative z-10">
          <div className="sdf-choices">
            {PATHWAYS.filter(p => p.id === 'volunteer' || p.id === 'partner').map(p => (
              <button type="button" key={p.id} className="sdf-choice" onClick={() => reveal(p.id)} aria-label={`Explore ${p.label}`}>
                <span className="sdf-choice-icon"><p.Icon size={30} strokeWidth={1.5}/></span>
                <span><span className="sdf-choice-title">{p.heading}</span><span className="sdf-choice-desc">{p.description}</span></span>
              </button>
            ))}
          </div>
          <div className="sdf-logo-world" aria-label="Samrakshan Dhara Foundation emblem">
            <svg className="sdf-stream" viewBox="0 0 500 500" aria-hidden="true"><path d="M28 265 Q110 65 245 75 T475 245" fill="none" stroke="#d6bc78" strokeWidth="1.5" opacity=".5"/><path d="M15 310 Q175 470 300 428 T490 230" fill="none" stroke="#4ed5bd" strokeWidth="2" opacity=".65"/></svg>
            <span className="sdf-orbit"/><span className="sdf-orbit orbit-two"/><span className="sdf-orbit orbit-three"/>
            <img className="sdf-logo-art" src="/assets/sdf-dhara-gold-emblem.png" alt="SDF golden official emblem"/>
            <span className="sdf-center-glint"/>
          </div>
          <div className="sdf-choices">
            {PATHWAYS.filter(p => p.id === 'awareness' || p.id === 'donation').map(p => (
              <button type="button" key={p.id} className="sdf-choice right" onClick={() => reveal(p.id)} aria-label={`Explore ${p.label}`}>
                <span className="sdf-choice-icon"><p.Icon size={30} strokeWidth={1.5}/></span>
                <span><span className="sdf-choice-title">{p.heading}</span><span className="sdf-choice-desc">{p.description}</span></span>
              </button>
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center mt-3 space-y-5 px-4">
          <button type="button" className="sdf-community-link" onClick={() => reveal('community')}>
            <Building2 size={15} className="inline-block mr-2" /> Explore Community Participation <ArrowRight size={14} className="inline-block ml-1" />
          </button>
          <div><button type="button" className="sdf-involve-btn" onClick={() => reveal('volunteer')}>Get Involved <ArrowRight size={20}/></button></div>
          <p className="text-[12px] text-[#d1e7df]/70">Select a pathway to view details and express your interest.</p>
        </div>
      </section>
      {detailsOpen && (
        <section id="sdf-pathway-details" className="scroll-mt-28 px-4 sm:px-8 pt-7 pb-24 max-w-4xl mx-auto">
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
