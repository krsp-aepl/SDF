import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Users, 
  HandHeart, 
  Building, 
  Megaphone, 
  Heart, 
  ChevronDown, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Info,
  Sparkles
} from 'lucide-react';
import { SDF_INFO } from '../data/foundationData';

type PanelKey = 'volunteer' | 'community' | 'partner' | 'awareness' | 'donation' | null;

export const GetInvolvedPage: React.FC = () => {
  const location = useLocation();
  const isFromDharaStream = Boolean(location.state?.fromDharaStream);

  const [activePanel, setActivePanel] = useState<PanelKey>('volunteer');
  const [donationFrequency, setDonationFrequency] = useState<'one-time' | 'monthly' | 'yearly'>('one-time');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Volunteer Interest State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [interestArea, setInterestArea] = useState('Nature & Plantation');
  const [notes, setNotes] = useState('');

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepare standard mailto trigger with prefilled details
    const subject = encodeURIComponent(`[SDF Involvement Enquiry] - ${interestArea} - ${fullName}`);
    const body = encodeURIComponent(
      `Hello Samrakshan Dhara Foundation,\n\nName: ${fullName}\nEmail: ${email}\nInterest: ${interestArea}\nMessage:\n${notes}\n\nSent from SDF Web Portal.`
    );
    window.location.href = `mailto:${SDF_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <div className="relative bg-[#073B43] text-[#F8F7EF]">
      {/* Header with Continuation of "The Endless Dhara" Stream */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#041F23] via-[#073B43] to-[#05282E] overflow-hidden text-center">
        
        {/* =====================================================================
            CONTINUATION OF THE ENDLESS DHARA STREAM
            Enters seamlessly from the top matching the homepage closing trajectory,
            undulating softly and framing the destination heading with fluid grace.
            ===================================================================== */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden z-0"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 400"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="dhara-arrival-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF4D0" stopOpacity="0.9" />
                <stop offset="25%" stopColor="#D5AD65" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#49CEC3" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#087F78" stopOpacity="0.3" />
              </linearGradient>

              <filter id="dhara-arrival-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing Arrival Stream Arc */}
            <path
              d="M 720 0 C 720 75, 480 130, 260 90 C 80 60, -40 220, -60 320"
              stroke="url(#dhara-arrival-grad)"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.35"
              filter="url(#dhara-arrival-glow)"
            />

            {/* Living Stream Continuation Line */}
            <path
              d="M 720 0 C 720 75, 480 130, 260 90 C 80 60, -40 220, -60 320"
              stroke="url(#dhara-arrival-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="animate-dhara-stream"
            />

            {/* Companion Eastern Wave */}
            <path
              d="M 720 0 C 720 85, 960 140, 1180 100 C 1360 70, 1480 230, 1500 330"
              stroke="url(#dhara-arrival-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-dhara-stream"
              opacity="0.6"
            />

            {/* Arrival focal sparkle node */}
            <circle cx="720" cy="18" r="4.5" fill="#FFF4D0" opacity="0.9" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#087F78]/50 border border-[#49CEC3]/30 backdrop-blur-md">
            <HandHeart className="w-4 h-4 text-[#49CEC3]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D5AD65]">
              Participate With Purpose
            </span>
          </div>

          {/* Fluid Heading Reveal: Animated with fluid motion on arrival from Dhara stream */}
          <h1
            className={`font-serif text-4xl sm:text-6xl font-medium tracking-tight text-[#F8F7EF] ${
              isFromDharaStream ? 'animate-fluid-heading' : ''
            }`}
          >
            Get Involved
          </h1>

          <p
            className={`text-base sm:text-xl text-[#E6EEE7]/85 font-light max-w-2xl mx-auto leading-relaxed ${
              isFromDharaStream ? 'animate-fluid-heading' : ''
            }`}
            style={isFromDharaStream ? { animationDelay: '120ms' } : {}}
          >
            Meaningful conservation and animal welfare flourish when individuals contribute their time, skills, and empathy. Discover the pathways to join our circle.
          </p>

          <div className="pt-2 text-xs text-[#D5AD65] tracking-wider uppercase flex items-center justify-center gap-2 font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>Honest & Transparent Engagement · Preparatory Volunteer Network</span>
          </div>
        </div>
      </section>

      {/* Interactive Pathways Navigation & Detailed Reveal Panels */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Pathway Selector Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D5AD65] px-2 mb-2">
              Involvement Opportunities
            </h3>

            {[
              { id: 'volunteer', label: 'Volunteer Network', icon: Users, desc: 'Grassroots sapling care & animal aid' },
              { id: 'community', label: 'Community Participation', icon: HandHeart, desc: 'Neighborhood clean zones & events' },
              { id: 'partner', label: 'Partnership Enquiries', icon: Building, desc: 'Institutional & recycling coordination' },
              { id: 'awareness', label: 'Awareness Collaboration', icon: Megaphone, desc: 'Schools, colleges & digital outreach' },
              { id: 'donation', label: 'Future Donation Enquiries', icon: Heart, desc: 'Statutory registration & future funds' },
            ].map((pathway) => {
              const Icon = pathway.icon;
              const isActive = activePanel === pathway.id;

              return (
                <button
                  key={pathway.id}
                  type="button"
                  onClick={() => setActivePanel(pathway.id as PanelKey)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#087F78] border-[#49CEC3] shadow-lg shadow-[#087F78]/40 translate-x-1 text-white'
                      : 'bg-[#05282E]/80 hover:bg-[#073B43] border-white/10 text-[#E6EEE7]'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2.5 rounded-xl ${isActive ? 'bg-white/20 text-white' : 'bg-[#087F78]/30 text-[#49CEC3]'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{pathway.label}</p>
                      <p className="text-xs text-white/60 truncate mt-0.5">{pathway.desc}</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? '-rotate-90 text-[#49CEC3]' : 'text-white/40'}`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Content Panel (8 cols) */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#05282E] border border-[#49CEC3]/25 shadow-2xl space-y-8">
              
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
          </div>

        </div>
      </section>
    </div>
  );
};
