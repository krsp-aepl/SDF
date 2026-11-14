import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trees, Users, HeartHandshake, Sparkles, Compass } from 'lucide-react';

interface WorldItem {
  id: 'earth' | 'humanity' | 'compassion';
  title: string;
  categoryBadge: string;
  supportingLine: string;
  image: string;
  alt: string;
  link: string;
  themeColor: string;
  accentBorder: string;
  icon: React.ElementType;
  organicRadius: string;
  floatClass: string;
}

const WORLDS: WorldItem[] = [
  {
    id: 'earth',
    title: 'Earth & Ecosystems',
    categoryBadge: 'Botanical Life',
    supportingLine: 'Protecting native woodlands, living soil microbiomes, and rejuvenating natural river basins.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85',
    alt: 'Ancient pristine native forest canopy filtering sunlight into rich living earth',
    link: '/about',
    themeColor: '#087F78',
    accentBorder: 'rgba(73, 206, 195, 0.45)',
    icon: Trees,
    organicRadius: 'rounded-[58%_42%_62%_38%/45%_58%_42%_55%]',
    floatClass: 'animate-float-1',
  },
  {
    id: 'humanity',
    title: 'Humanity & Dignity',
    categoryBadge: 'Human Spirit',
    supportingLine: "Empowering women's voices, pediatric wellness, and foundational education circles.",
    image: '/images/women_empowerment.jpg',
    alt: 'Joyful, confident Indian women walking together in community solidarity and dignity',
    link: '/about',
    themeColor: '#D5AD65',
    accentBorder: 'rgba(213, 173, 101, 0.55)',
    icon: Users,
    organicRadius: 'rounded-[46%_54%_58%_42%/55%_45%_55%_45%]',
    floatClass: 'animate-float-2',
  },
  {
    id: 'compassion',
    title: 'Compassionate Care',
    categoryBadge: 'Sentient Protection',
    supportingLine: 'Providing emergency transit, summer water bowls, and humane shelter for innocent animals.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85',
    alt: 'Gentle golden puppy experiencing tender care, affection, and unconditional protection',
    link: '/about',
    themeColor: '#28A77B',
    accentBorder: 'rgba(73, 206, 195, 0.55)',
    icon: HeartHandshake,
    organicRadius: 'rounded-[52%_48%_42%_58%/48%_54%_46%_52%]',
    floatClass: 'animate-float-3',
  },
];

export const LivingEcosystemSection: React.FC = () => {
  const [highlightedWorldId, setHighlightedWorldId] = useState<string>('earth');
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-responsive parallax and sequential highlight as user scrolls through the section
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress from 0 (entering top) to 1 (leaving bottom)
      const totalDist = rect.height + viewportHeight;
      const currentDist = viewportHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentDist / totalDist));

      // Map progress smoothly across the three worlds
      if (progress < 0.38) {
        setHighlightedWorldId('earth');
      } else if (progress < 0.68) {
        setHighlightedWorldId('humanity');
      } else {
        setHighlightedWorldId('compassion');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 bg-[#04242A] overflow-hidden text-[#F8F7EF] select-none"
      aria-label="The Living Ecosystem — Three Interconnected Visual Worlds"
    >
      {/* Background Soft Refined Lighting & Ambient Radials */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#087F78]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#49CEC3]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D5AD65]/8 rounded-full blur-[150px] pointer-events-none" />

      {/* SVG Connecting Flow Lines (Behind the floating worlds) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ecosystem-flow-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#087F78" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#49CEC3" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D5AD65" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="ecosystem-flow-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D5AD65" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#28A77B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#49CEC3" stopOpacity="0.8" />
            </linearGradient>
            <filter id="ecosystem-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Flow Line 1: World 1 (Earth) -> World 2 (Humanity) */}
          <path
            d="M 320 460 C 440 380, 560 480, 720 420"
            stroke="url(#ecosystem-flow-grad-1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-pulse-flow"
            filter="url(#ecosystem-glow)"
          />

          {/* Flow Line 2: World 2 (Humanity) -> World 3 (Compassion) */}
          <path
            d="M 720 420 C 860 360, 980 520, 1120 450"
            stroke="url(#ecosystem-flow-grad-2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-pulse-flow"
            filter="url(#ecosystem-glow)"
          />

          {/* Ambient organic drift particle nodes */}
          <circle cx="320" cy="460" r="4" fill="#49CEC3" opacity="0.8" />
          <circle cx="720" cy="420" r="5" fill="#D5AD65" opacity="0.9" />
          <circle cx="1120" cy="450" r="4" fill="#28A77B" opacity="0.8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header: Premium Editorial Layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073B43] border border-[#49CEC3]/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D5AD65]" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D5AD65]">
              The Living Ecosystem
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F8F7EF] leading-[1.12]">
            Three Living Worlds. One Sacred Confluence.
          </h2>

          <p className="text-base sm:text-lg text-[#E6EEE7]/85 font-light leading-relaxed max-w-2xl mx-auto">
            Nature restores balance. Human dignity sparks community. Compassion shelters the innocent. Scroll or select any world to enter its dedicated sanctuary.
          </p>
        </div>

        {/* =========================================================================
            THE THREE INTERCONNECTED FLOATING ORGANIC WORLDS
            All three visible simultaneously; clipped into organic shapes;
            interactive click / scroll expansion; no rectangular cards.
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 items-center pt-4 pb-8">
          {WORLDS.map((world, idx) => {
            const isHighlighted = highlightedWorldId === world.id;
            const IconComp = world.icon;

            return (
              <div
                key={world.id}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out group ${
                  idx === 1 ? 'lg:-translate-y-6' : 'lg:translate-y-4'
                }`}
                onMouseEnter={() => setHighlightedWorldId(world.id)}
              >
                {/* Clickable Floating Organic Silhouette Gateway */}
                <Link
                  to={world.link}
                  className={`relative block w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 transition-all duration-700 ease-out cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#49CEC3] ${
                    world.organicRadius
                  } ${world.floatClass} ${
                    isHighlighted
                      ? 'scale-105 z-20'
                      : 'scale-95 opacity-85 hover:opacity-100 hover:scale-100 z-10'
                  }`}
                  aria-label={`Enter ${world.title}: ${world.supportingLine}`}
                >
                  {/* Outer Concentric Glowing Halo Rings */}
                  <div
                    className={`absolute -inset-3 transition-opacity duration-700 ${world.organicRadius} ${
                      isHighlighted ? 'opacity-90' : 'opacity-30 group-hover:opacity-60'
                    }`}
                    style={{
                      background: `radial-gradient(circle, ${world.themeColor}35 0%, transparent 70%)`,
                      filter: 'blur(10px)',
                    }}
                  />

                  {/* Organic Clipped Photography Vessel */}
                  <div
                    className={`relative w-full h-full overflow-hidden border-2 transition-colors duration-500 shadow-2xl shadow-black/60 ${world.organicRadius}`}
                    style={{
                      borderColor: isHighlighted ? world.accentBorder : 'rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    <img
                      src={world.image}
                      alt={world.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Subtle warm photographic lighting overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 pointer-events-none" />

                    {/* Center Floating Symbol Badge */}
                    <div className="absolute top-4 right-4 p-2.5 rounded-full bg-[#073B43]/85 backdrop-blur-md border border-white/20 text-[#F8F7EF] shadow-lg">
                      <IconComp className="w-4 h-4 text-[#49CEC3]" />
                    </div>

                    {/* Category Label Chip Inside Vessel */}
                    <div className="absolute bottom-4 inset-x-4 flex justify-center">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-wider uppercase text-[#D5AD65] border border-white/10">
                        {world.categoryBadge}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* World Editorial Content Lockup Below Floating Shape */}
                <div className="mt-6 space-y-2 max-w-xs px-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F7EF] font-medium tracking-tight group-hover:text-[#49CEC3] transition-colors">
                    {world.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#E6EEE7]/80 font-light leading-relaxed min-h-[44px]">
                    {world.supportingLine}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={world.link}
                      className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                        isHighlighted
                          ? 'text-[#49CEC3] translate-x-1'
                          : 'text-[#E6EEE7]/70 group-hover:text-white'
                      }`}
                    >
                      <span>Explore Sphere</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Explorer Action Banner */}
        <div className="mt-14 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl text-[#F8F7EF] font-medium">
              Every Living Act Flows into the Next
            </h4>
            <p className="text-xs sm:text-sm text-[#E6EEE7]/70 font-light">
              Discover how our planned programs unite botany, human care, and animal salvation.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#087F78] to-[#28A77B] hover:from-[#28A77B] hover:to-[#49CEC3] text-[#F8F7EF] hover:text-[#073B43] font-semibold text-sm transition-all duration-300 shadow-xl shadow-[#087F78]/25 group"
          >
            <span>Discover Our Foundation Story</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
