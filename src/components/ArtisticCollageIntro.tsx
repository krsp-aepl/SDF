import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ArtisticCollageIntro: React.FC = () => {
  return (
    <section
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#073B43] via-[#0B5D5B] to-[#073B43] overflow-hidden text-[#F8F7EF]"
      aria-label="About Our Foundation: A Shared Commitment to a Better Tomorrow"
    >
      {/* Background Refined Environmental Lighting */}
      <div className="absolute top-1/2 left-0 w-[520px] h-[520px] bg-[#67D6C3]/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[460px] h-[460px] bg-[#127C78]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-6 left-1/4 w-80 h-80 bg-[#D8B36A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* =======================================================================
              LEFT COLUMN: STATIC APPROVED COLLAGE ARTWORK (NO MOVEMENT)
              - Displays the approved 2nd image completely static
              - No video overlays, no tilt, no CSS animations, no pulse
              ======================================================================= */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[540px] aspect-square rounded-[36px] overflow-hidden shadow-2xl shadow-[#041F23]/80 border border-[#67D6C3]/25 bg-[#05282E]">
              <img
                src="/images/living_world_collage.png"
                alt="Samrakshan Dhara Foundation - A Shared Commitment to a Better Tomorrow"
                className="w-full h-full object-cover block select-none"
                loading="eager"
              />
            </div>
          </div>

          {/* =======================================================================
              RIGHT COLUMN: EDITORIAL CONTENT (UNCHANGED)
              - Eyebrow: "ABOUT OUR FOUNDATION"
              - Heading: "A Shared Commitment to a Better Tomorrow."
              - Paragraph: Approved introduction text word for word
              - Button: "Discover Our Story" -> /about
              ======================================================================= */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-[#28A77B]" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#67D6C3]">
                  ABOUT OUR FOUNDATION
                </span>
              </div>

              {/* Exact approved heading */}
              <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#F7F3EA] leading-[1.15]">
                A Shared Commitment to a Better Tomorrow.
              </h2>
            </div>

            {/* Exact approved paragraph word for word */}
            <p className="text-base sm:text-lg text-[#E6EEE7]/90 leading-relaxed font-light">
              At Samrakshan Dhara Foundation, we believe that every life deserves compassion, every community deserves opportunity, and nature deserves our care and protection. Guided by a vision of a cleaner, greener, and more inclusive world, we aspire to bring people together through environmental awareness, animal welfare, education, health awareness, and responsible community initiatives. Our journey begins with a simple belief — that meaningful change grows when care turns into collective responsibility.
            </p>

            {/* Preserved Discover Our Story button navigating directly to /about */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#127C78] hover:bg-[#28A77B] text-[#F7F3EA] font-medium text-base transition-all duration-300 shadow-lg shadow-[#127C78]/30 hover:shadow-xl hover:shadow-[#28A77B]/40 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#67D6C3]"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#67D6C3]" />
              </Link>

              <div className="flex items-center gap-2 text-xs text-[#D8B36A] font-mono tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Living World</span>
              </div>
            </div>

            {/* Four Spheres of Impact */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#67D6C3] uppercase tracking-wider block">HUMANITY</span>
                <p className="text-[#E6EEE7]/70 text-[11px] leading-snug">Women empowerment & dignity</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#D8B36A] uppercase tracking-wider block">EDUCATION</span>
                <p className="text-[#E6EEE7]/70 text-[11px] leading-snug">Children & community care</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#28A77B] uppercase tracking-wider block">ANIMALS</span>
                <p className="text-[#E6EEE7]/70 text-[11px] leading-snug">Cows, gaushala & street care</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] text-[#67D6C3] uppercase tracking-wider block">ECOLOGY</span>
                <p className="text-[#E6EEE7]/70 text-[11px] leading-snug">Trees, rivers & plastic cleanup</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
