import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { ArtisticCollageIntro } from '../components/ArtisticCollageIntro';
import { LivingEcosystemSection } from '../components/LivingEcosystemSection';
import { EndlessDharaClosing } from '../components/EndlessDharaClosing';

export const HomePage: React.FC = () => {
  return (
    <div className="relative bg-[#073B43] text-[#F8F7EF]">
      {/* 1. CINEMATIC THREE-SLIDE HERO */}
      <HeroSlider />

      {/* 2. SECTION A: SDF INTRODUCTION WITH "THE WORLD WE CARE FOR" ARTISTIC COLLAGE */}
      <ArtisticCollageIntro />

      {/* 3. THE LIVING ECOSYSTEM: Three Interconnected Floating Organic Worlds */}
      <LivingEcosystemSection />

      {/* 4. THE ENDLESS DHARA: Closing Section with Signature Flowing Stream Transition */}
      <EndlessDharaClosing />
    </div>
  );
};
