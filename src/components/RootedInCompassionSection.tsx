import React, { useState, useRef } from 'react';
import { Sparkles, MapPin, ChevronDown, ChevronUp, Leaf, BookOpen, Eye, ShieldCheck, Heart } from 'lucide-react';

export const RootedInCompassionSection: React.FC = () => {
  // Active chapter state: 0 = Story, 1 = Vision, 2 = Commitment, null = collapsed
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const chapterContentRef = useRef<HTMLDivElement>(null);

  const chapters = [
    {
      id: 0,
      title: 'Our Story',
      subtitle: 'A beginning shaped by care.',
      icon: BookOpen,
      visual: '/assets/sdf-official-logo.png',
      alt: 'Our Story - Samrakshan Dhara Foundation Official Emblem',
      quote: 'A name shaped by protection. A spirit carried by flow.',
      paragraphs: [
        'Samrakshan Dhara Foundation was born from a simple, shared realization among citizens in Dhanbad: the living world around us is deeply interconnected. When open spaces lose their trees, when street animals wander without water or care, and when discarded waste gathers by our roadsides, the dignity of the entire community is diminished.',
        'Rather than looking away, we came together to act. We chose two timeless Sanskrit words to guide our purpose: Samrakshan — the solemn promise to protect and shelter fragile lives; and Dhara — the continuous, gentle stream of care that keeps moving forward.',
        'Incorporated on 04 August 2026 as an independent Section 8 non-profit organisation, we are beginning our journey with open hearts and humble hands — planting native roots, tending to street animals in need, and nurturing a culture where kindness is second nature.',
      ],
      highlights: [
        { label: 'Incorporated', value: '04 August 2026' },
        { label: 'Structure', value: 'Section 8 Non-Profit' },
        { label: 'Roots', value: 'Dhanbad, Jharkhand' },
      ],
    },
    {
      id: 1,
      title: 'Our Vision',
      subtitle: 'A future where compassion and progress grow together.',
      icon: Eye,
      visual: '/images/card_vision_visual.png',
      alt: 'Our Vision - Planet Earth Reflected Inside Human Eye',
      quote: 'A world where nature, humanity, and all living creatures flourish together.',
      paragraphs: [
        'We envision towns and neighborhoods that feel alive — where green canopies shade our streets, clean water flows through our communities, and every sentient creature is treated with gentleness and respect.',
        'Our dream is not built on grand promises, but on quiet, consistent acts of care. We see schoolyards where children learn to plant and protect native saplings, market corners where clean clay bowls offer water to thirsty street animals, and streets kept clean through the shared pride of their residents.',
        'By connecting everyday people with the soil beneath their feet and the animals by their sides, we hope to build an enduring harmony that generations to come will cherish and carry forward.',
      ],
      highlights: [
        { label: 'Canopy Goal', value: 'Native Urban Groves' },
        { label: 'Street Fauna', value: 'Humane Safety Nets' },
        { label: 'Cleanliness', value: 'Source Segregation' },
      ],
    },
    {
      id: 2,
      title: 'Our Commitment',
      subtitle: 'Responsibility turned into action.',
      icon: ShieldCheck,
      visual: '/images/card_commitment_visual.png',
      alt: 'Our Commitment - Hands of Trust and Promise',
      quote: 'Quiet dedication, honest work, and care that never rests.',
      paragraphs: [
        'As a newly founded organization, our greatest asset is our integrity. We make a sacred pledge to be completely honest about where we stand, speaking only of what we have done and working transparently as our initiatives take root.',
        'Every sapling we nurture will be chosen with reverence for local soil and climate. Every street animal we touch will receive gentle, responsible care guided by medical understanding. Every discarded material we gather will be handled safely and ethically, ensuring our efforts truly heal the earth.',
        'Most of all, we commit to being good listeners and faithful neighbors — walking alongside our community with humility, compassion, and an unwavering devotion to life.',
      ],
      highlights: [
        { label: 'Governance', value: 'Honest Reporting' },
        { label: 'Botany', value: '100% Native Species' },
        { label: 'Animal Protocol', value: 'Veterinary Oversight' },
      ],
    },
  ];

  const handleToggleChapter = (idx: number) => {
    if (activeChapter === idx) {
      setActiveChapter(null);
    } else {
      setActiveChapter(idx);
      setTimeout(() => {
        if (chapterContentRef.current) {
          chapterContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);
    }
  };

  return (
    <section
      id="who-we-are"
      className="relative py-20 sm:py-28 bg-[#041F23] text-[#FAF7F0] overflow-hidden"
      aria-label="Who We Are - Rooted in Compassion, Driven by Responsibility"
    >
      {/* Background Soft Natural Lighting Accents */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_50%_50%,rgba(8,127,120,0.18)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_50%_50%,rgba(213,173,101,0.12)_0%,transparent_70%)] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =======================================================================
            MAIN COMPOSITION: EXACT MATCH TO THE APPROVED REFERENCE IMAGE
            - Left: Editorial block with deep emerald teal, gold accent lines, large typography
            - Right: Sunlit river valley with glowing Jharkhand outline & Dhanbad marker
            - Elegant curved dividing contour with champagne-gold hairline
            ======================================================================= */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#D5AD65]/35 shadow-[0_30px_70px_rgba(2,22,19,0.85)] bg-gradient-to-br from-[#06352E] via-[#073B43] to-[#03231F]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[500px]">
            
            {/* LEFT EDITORIAL COLUMN (Exact 3 Paragraphs from user) */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-14 flex flex-col justify-center space-y-6 relative z-10 bg-gradient-to-r from-[#05282E]/95 via-[#073B43]/90 to-transparent">
              
              {/* Small Label with extending gold hairline matching Reference */}
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-[0.25em] text-[#E2C376]">
                  WHO WE ARE
                </span>
                <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-[#E2C376] to-transparent"></div>
              </div>

              {/* Main Heading matching Reference */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[50px] font-medium tracking-tight text-[#FAF7F0] leading-[1.12]">
                Rooted in Compassion.
                <span className="block italic text-[#E2C376] font-normal mt-1">
                  Driven by Responsibility.
                </span>
              </h2>

              {/* Exact 3 Paragraphs Specified by User */}
              <div className="space-y-4 text-sm sm:text-base lg:text-[15.5px] text-[#E6EEE7]/90 font-light leading-[1.78] max-w-2xl">
                <p>
                  Samrakshan Dhara Foundation (SDF) is an independent Section 8 non-profit organisation incorporated on 04 August 2026, with its roots in Dhanbad, Jharkhand. Founded on the belief that every form of life deserves dignity, care and protection, the foundation brings together environmental responsibility, animal welfare and community wellbeing under one shared purpose.
                </p>
                <p>
                  We believe that meaningful progress is not measured only by development, but also by how responsibly we treat our surroundings, how compassionately we care for vulnerable lives, and how actively we contribute to the communities around us.
                </p>
                <p>
                  As a newly established foundation, we are building the groundwork for thoughtful, community-driven initiatives that encourage awareness, participation and lasting responsibility.
                </p>
              </div>

            </div>

            {/* RIGHT SCENIC COLUMN: SUNLIT RIVER VALLEY & ILLUMINATED JHARKHAND MAP */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full overflow-hidden flex items-center justify-center">
              
              {/* Scenic Landscape Image from Reference (Sunlit hills, river, golden sunrise) */}
              <img
                src="/images/jharkhand_landscape_hero.png"
                alt="Jharkhand natural river landscape at sunrise"
                className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.04] brightness-95"
              />

              {/* Soft Gradient Overlay for depth and text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#073B43]/70 via-transparent to-black/20 pointer-events-none" />

              {/* Flowing Curved Golden Seam Separator (Left-to-Right Organic Transition) */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10">
                <svg viewBox="0 0 100 600" preserveAspectRatio="none" className="w-full h-full">
                  <path
                    d="M 100 0 C 30 180, 0 350, 70 600 L 0 600 L 0 0 Z"
                    fill="#073B43"
                    opacity="0.9"
                  />
                  <path
                    d="M 100 0 C 30 180, 0 350, 70 600"
                    fill="none"
                    stroke="#D5AD65"
                    strokeWidth="2"
                    opacity="0.75"
                  />
                </svg>
              </div>

              {/* ===============================================================
                  INTERACTIVE ILLUMINATED OUTLINE MAP OF JHARKHAND
                  Positioned with Dhanbad marker exactly matching the reference!
                  =============================================================== */}
              <div className="relative z-20 w-full h-full max-w-[420px] max-h-[380px] p-6 flex flex-col items-center justify-center">
                
                {/* Glowing Outline Container */}
                <div className="relative w-full aspect-[4/3] flex items-center justify-center group">
                  
                  {/* Accurate Stylized Illuminated Golden Map of Jharkhand */}
                  <svg
                    viewBox="0 0 500 400"
                    className="w-full h-full filter drop-shadow-[0_0_15px_rgba(213,173,101,0.65)] select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="jharkhandGold" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFF0C8" stopOpacity="0.95" />
                        <stop offset="50%" stopColor="#E5C778" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#D5AD65" stopOpacity="0.9" />
                      </linearGradient>
                      <radialGradient id="dhanbadGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFF3D1" stopOpacity="1" />
                        <stop offset="40%" stopColor="#E2C376" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#087F78" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Jharkhand State Boundary Contour */}
                    <path
                      d="M 60 145 
                         C 75 110, 110 80, 160 85 
                         C 195 90, 230 75, 275 80 
                         C 310 85, 360 65, 400 80 
                         C 435 95, 450 130, 440 160 
                         C 430 185, 415 210, 410 240 
                         C 405 270, 395 300, 365 330 
                         C 335 360, 290 350, 250 345 
                         C 210 340, 175 365, 135 345 
                         C 95 325, 75 285, 80 240 
                         C 85 200, 50 170, 60 145 Z"
                      fill="rgba(7, 59, 67, 0.25)"
                      stroke="url(#jharkhandGold)"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300"
                    />

                    {/* Subtle Interior Topographic Veins */}
                    <path
                      d="M 120 180 Q 220 200, 360 185"
                      stroke="rgba(226, 195, 118, 0.3)"
                      strokeWidth="1.2"
                      strokeDasharray="4 6"
                      fill="none"
                    />
                    <path
                      d="M 160 250 Q 250 240, 340 270"
                      stroke="rgba(226, 195, 118, 0.25)"
                      strokeWidth="1.2"
                      strokeDasharray="4 6"
                      fill="none"
                    />

                    {/* State Name: J H A R K H A N D */}
                    <text
                      x="160"
                      y="200"
                      fill="#F7F3EA"
                      fontSize="14"
                      fontFamily="monospace"
                      letterSpacing="7"
                      fontWeight="600"
                      opacity="0.9"
                      className="select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                      JHARKHAND
                    </text>

                    {/* Accurate Dhanbad Marker Location (East-Central side of Jharkhand) */}
                    <g transform="translate(370, 195)">
                      {/* Pulsing Concentric Aura */}
                      <circle cx="0" cy="0" r="16" fill="url(#dhanbadGlow)" className="animate-ping opacity-40" />
                      <circle cx="0" cy="0" r="10" fill="url(#dhanbadGlow)" opacity="0.6" />
                      
                      {/* Central Golden Pin Target */}
                      <circle cx="0" cy="0" r="5" fill="#FFF0C8" stroke="#06352E" strokeWidth="1.5" />
                      
                      {/* Connecting Horizontal Pointer Line matching Reference */}
                      <line x1="12" y1="0" x2="38" y2="0" stroke="#FFF0C8" strokeWidth="1.5" />

                      {/* Dhanbad Label matching Reference */}
                      <text
                        x="46"
                        y="4"
                        fill="#FAF7F0"
                        fontSize="15"
                        fontFamily="Georgia, serif"
                        fontStyle="italic"
                        fontWeight="600"
                        className="select-none filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
                      >
                        Dhanbad
                      </text>
                    </g>
                  </svg>

                </div>

                {/* Subtle Foundation Footnote */}
                <div className="mt-2 text-center">
                  <span className="text-[11px] font-mono text-[#E2C376] tracking-widest uppercase bg-[#05282E]/70 px-3 py-1 rounded-full border border-[#D5AD65]/30 backdrop-blur-sm">
                    Dhanbad • Registered Head Office
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =======================================================================
            THREE CHAPTER SELECTORS AT THE BOTTOM (EXACT MATCH TO REFERENCE)
            - Selector 1: Our Story (Original SDF Logo with sunburst)
            - Selector 2: Our Vision (Earth reflected inside human eye)
            - Selector 3: Our Commitment (Hands of promise and trust)
            ======================================================================= */}
        <div className="mt-10 sm:mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {chapters.map((chap) => {
              const isActive = activeChapter === chap.id;

              return (
                <div
                  key={chap.id}
                  onClick={() => handleToggleChapter(chap.id)}
                  className={`relative rounded-[24px] overflow-hidden transition-all duration-500 cursor-pointer group flex flex-col justify-between border ${
                    isActive
                      ? 'bg-gradient-to-b from-[#FFFDF9] via-[#F7F2E9] to-[#EFE7D8] border-[#D5AD65] shadow-[0_15px_40px_rgba(213,173,101,0.45)] -translate-y-2 ring-2 ring-[#D5AD65]/60'
                      : 'bg-gradient-to-b from-[#FAF7F0] via-[#F4EFE6] to-[#EDE5D8] hover:bg-[#FFFDF9] border-[#D5AD65]/35 hover:border-[#D5AD65]/70 shadow-lg hover:shadow-2xl hover:-translate-y-1'
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-label={`Explore ${chap.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleToggleChapter(chap.id);
                    }
                  }}
                >
                  {/* Top Artwork Container matching Reference Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-[22px] bg-black/5">
                    <img
                      src={chap.visual}
                      alt={chap.alt}
                      className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Active State Ribbon Overlay */}
                    {isActive && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#084D44] text-[#FAF7F0] text-xs font-mono font-medium shadow-md flex items-center gap-1.5 border border-[#D5AD65]/40 animate-fade-in">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5AD65] animate-pulse" />
                        <span>Active Chapter</span>
                      </div>
                    )}
                  </div>

                  {/* Lower Title & Subtitle Card matching Reference */}
                  <div className="p-6 sm:p-7 text-center space-y-2 bg-gradient-to-b from-transparent to-[#E8DFCFC0]">
                    
                    {/* Chapter Title with Flanking Gold Lines matching Reference */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-8 sm:w-12 h-[1px] bg-[#8C6C26]/40"></div>
                      <h3 className="font-serif text-2xl sm:text-[26px] font-medium text-[#0E3E37] tracking-tight">
                        {chap.title}
                      </h3>
                      <div className="w-8 sm:w-12 h-[1px] bg-[#8C6C26]/40"></div>
                    </div>

                    {/* Subtitle in Italic Serif matching Reference */}
                    <p className="font-serif italic text-sm sm:text-base text-[#2E5852] font-normal leading-relaxed">
                      {chap.subtitle}
                    </p>

                    {/* Expand/Collapse Toggle Cue */}
                    <div className="pt-2 flex items-center justify-center gap-1.5 text-xs font-mono font-semibold text-[#8C6C26] transition-colors group-hover:text-[#084D44]">
                      <span>{isActive ? 'Click to close chapter' : 'Click to read chapter'}</span>
                      {isActive ? (
                        <ChevronUp className="w-4 h-4 text-[#8C6C26]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#8C6C26] transition-transform group-hover:translate-y-0.5" />
                      )}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* =======================================================================
            EXPANDED CHAPTER CONTENT (WITHIN THE SAME ABOUT SECTION!)
            - Smoothly expands directly below selectors
            - Natural height, spacious typography, zero cramped containers
            - No external redirect buttons or popups
            ======================================================================= */}
        {activeChapter !== null && (
          <div
            ref={chapterContentRef}
            className="mt-10 sm:mt-12 p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#06352E] via-[#073B43] to-[#042A25] border-2 border-[#D5AD65]/50 shadow-[0_25px_60px_rgba(2,22,19,0.9)] animate-fade-in space-y-8"
          >
            
            {/* Header of Expanded Chapter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D5AD65]/30 pb-6">
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D5AD65]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D5AD65]">
                    CHAPTER 0{activeChapter + 1} • DETAILED READING
                  </span>
                </div>
                <h4 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#FAF7F0] tracking-tight">
                  {chapters[activeChapter].title}
                </h4>
                <p className="font-serif italic text-base sm:text-lg text-[#E2C376]">
                  &ldquo;{chapters[activeChapter].quote}&rdquo;
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveChapter(null)}
                className="self-start sm:self-center px-5 py-2.5 rounded-full bg-[#05282E] hover:bg-[#084D44] border border-[#D5AD65]/40 text-xs font-mono font-semibold text-[#FAF7F0] transition-all hover:scale-105 cursor-pointer shadow-md flex items-center gap-2"
              >
                <span>Close Chapter</span>
                <ChevronUp className="w-4 h-4 text-[#D5AD65]" />
              </button>

            </div>

            {/* Complete Chapter Narrative (Natural height, large typography) */}
            <div className="space-y-5 font-serif text-base sm:text-lg lg:text-[18px] text-[#E6EEE7] leading-[1.8] font-light max-w-4xl text-justify">
              {chapters[activeChapter].paragraphs.map((pText, pIdx) => (
                <p key={pIdx}>
                  {pText}
                </p>
              ))}
            </div>

            {/* Chapter Core Metrics & Institutional Markers */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {chapters[activeChapter].highlights.map((item, hIdx) => (
                <div key={hIdx} className="p-4 rounded-2xl bg-[#04242A]/80 border border-white/10 space-y-1">
                  <span className="text-xs font-mono text-[#D5AD65] block uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="font-serif text-lg text-[#FAF7F0] font-medium block">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Seamless Switcher between the other 2 chapters */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#E6EEE7]/70">
              <span>Read next:</span>
              <div className="flex items-center gap-3">
                {chapters.map((otherChap) => {
                  if (otherChap.id === activeChapter) return null;
                  return (
                    <button
                      key={otherChap.id}
                      type="button"
                      onClick={() => handleToggleChapter(otherChap.id)}
                      className="px-4 py-2 rounded-full bg-[#084D44]/50 hover:bg-[#084D44] border border-[#49CEC3]/30 text-[#E2C376] hover:text-white transition-all cursor-pointer"
                    >
                      Read {otherChap.title} →
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
