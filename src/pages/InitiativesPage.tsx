import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { INITIATIVES_15, InitiativeStoryItem } from '../data/initiatives18Data';
import { CinematicInitiativeWheel } from '../components/CinematicInitiativeWheel';
import { InitiativeStoryDetail } from '../components/InitiativeStoryDetail';

export const InitiativesPage: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const storySectionRef = useRef<HTMLDivElement>(null);

  // Handle URL hash on initial load (e.g. /initiatives#story-04)
  useEffect(() => {
    if (window.location.hash) {
      const targetAnchor = window.location.hash.replace('#', '');
      const foundIdx = INITIATIVES_15.findIndex((item) => item.anchorId === targetAnchor);
      if (foundIdx !== -1) {
        setSelectedIndex(foundIdx);
      }
    }
  }, []);

  const handleSelectInitiative = (idx: number) => {
    setSelectedIndex(idx);
    const item = INITIATIVES_15[idx];
    if (item) {
      window.history.replaceState(null, '', `/initiatives#${item.anchorId}`);
    }
  };

  const selectedInitiative: InitiativeStoryItem = INITIATIVES_15[selectedIndex] || INITIATIVES_15[0];

  return (
    <div className="relative min-h-screen bg-[#073B43] text-[#F8F7EF] selection:bg-[#49CEC3]/30 selection:text-white">
      {/* Ambient background glows */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#041F23] via-[#073B43]/70 to-transparent pointer-events-none" />
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#087F78]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* =========================================================================
          SECTION 1 — MINIMAL, POWERFUL & SOPHISTICATED OPENING
          Immediately beneath the subtitle, the interactive circle appears!
          No lists, directories, or cards above the circle.
          ========================================================================= */}
      <header className="relative pt-28 pb-4 sm:pt-36 sm:pb-6 px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto text-center z-10">
        {/* Small Heading */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] uppercase text-[#D5AD65] mb-2.5">
          <Compass className="w-3.5 h-3.5 text-[#49CEC3]" />
          <span>OUR INITIATIVES</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F8F7EF] leading-[1.12] mb-3">
          Every Cause Has a Story.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#E6EEE7]/85 font-light leading-relaxed max-w-2xl mx-auto">
          Explore the responsibilities that connect us — towards people, animals, nature and our shared future.
        </p>
      </header>

      {/* =========================================================================
          SECTION 2 — THE CINEMATIC ROTATING INITIATIVE CIRCLE
          The primary visual attraction: 15-segment photo wheel with stationary SDF logo
          ========================================================================= */}
      <main className="relative z-10">
        <CinematicInitiativeWheel
          initiatives={INITIATIVES_15}
          selectedIndex={selectedIndex}
          onSelectInitiative={handleSelectInitiative}
        />

        {/* =======================================================================
            SECTION 3 — THE EDITORIAL STORYTELLING AREA
            Reveals the currently selected initiative's complete 5-part documentary story
            ======================================================================= */}
        <div ref={storySectionRef} id="selected-story-area">
          <InitiativeStoryDetail initiative={selectedInitiative} />
        </div>
      </main>

      {/* =========================================================================
          SECTION 4 — CLOSING: THE CONTINUOUS COMMITMENT
          ========================================================================= */}
      <section className="relative bg-[#05282E] text-[#F8F7EF] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 border-t border-[#49CEC3]/20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#49CEC3]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.28em] uppercase text-[#D5AD65]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#49CEC3]" />
            <span>RESPONSIBILITY IN ACTION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#F8F7EF] leading-tight">
            Every Cause Begins with One Step.
          </h2>

          <p className="text-base sm:text-lg text-[#E6EEE7]/80 font-light max-w-2xl mx-auto leading-relaxed">
            As Samrakshan Dhara Foundation moves forward in its foundational journey across Jharkhand, your participation, community goodwill, and shared responsibility help nurture every one of these fifteen causes.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#087F78] to-[#28A77B] hover:from-[#28A77B] hover:to-[#49CEC3] text-[#F8F7EF] hover:text-[#073B43] text-sm font-semibold transition-all duration-300 shadow-xl shadow-[#087F78]/30 group"
            >
              <span>Join Our Mission</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors border border-white/15"
            >
              <span>About Samrakshan Dhara</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
