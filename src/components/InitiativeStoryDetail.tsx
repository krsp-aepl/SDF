import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  ExternalLink, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { InitiativeStoryItem } from '../data/initiatives18Data';

interface InitiativeStoryDetailProps {
  initiative: InitiativeStoryItem;
}

export const InitiativeStoryDetail: React.FC<InitiativeStoryDetailProps> = ({
  initiative,
}) => {
  return (
    <section 
      aria-label={`Story of ${initiative.title}`}
      className="relative w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 py-10 sm:py-16 transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-6"
    >
      {/* =========================================================================
          EDITORIAL STORY CONTAINER (PREMIUM DOCUMENTARY STYLE)
          ========================================================================= */}
      <div className="bg-[#F8F7EF] text-[#073B43] rounded-3xl sm:rounded-[36px] shadow-2xl border border-[#D5AD65]/35 overflow-hidden">
        
        {/* Top Header Strip */}
        <div className="px-6 sm:px-10 pt-8 sm:pt-10 pb-4 border-b border-stone-200/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-full bg-[#073B43] text-[#F0DC82] border border-[#D5AD65]/40 shadow-sm">
              CAUSE {initiative.number} OF 15
            </span>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[#087F78] font-semibold">
              {initiative.category}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
            <ShieldCheck className="w-4 h-4 text-[#087F78]" />
            <span>SDF Foundational Focus</span>
          </div>
        </div>

        {/* Story Title & Tagline Banner */}
        <div className="px-6 sm:px-10 py-6 sm:py-8 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#073B43] tracking-tight leading-[1.12]">
            {initiative.title}
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#087F78] border-l-3 border-[#D5AD65] pl-4 py-1 leading-snug">
            "{initiative.tagline}"
          </p>
        </div>

        {/* Large Cinematic Documentary Photograph */}
        <div className="px-6 sm:px-10 pb-8">
          <div className="relative aspect-[16/10] sm:aspect-[21/10] rounded-2xl overflow-hidden shadow-xl border border-stone-300/80 bg-stone-900 group">
            <img
              src={initiative.image}
              alt={initiative.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

            {/* In-Photo Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 px-2 pointer-events-none">
              <span className="font-light italic truncate drop-shadow-md">
                {initiative.imageCaption}
              </span>
              <span className="font-mono text-[10px] tracking-wider uppercase bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20 shrink-0 ml-2">
                Field Documentation
              </span>
            </div>
          </div>
        </div>

        {/* =======================================================================
            5-PART DOCUMENTARY STORYTELLING BODY
            ======================================================================= */}
        <div className="px-6 sm:px-10 pb-10 sm:pb-12 space-y-8">
          
          {/* SECTION A: THE REALITY */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#A87A2C]">
              <AlertCircle className="w-4 h-4 text-[#A87A2C]" />
              <span>A. The Reality</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed font-light text-justify">
              {initiative.reality}
            </p>
          </div>

          {/* SECTION B: DID YOU KNOW? (VERIFIED FACT & STATISTIC CALLOUT) */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#073B43] via-[#05282E] to-[#041F23] text-[#F8F7EF] border border-[#D5AD65]/40 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#49CEC3]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#D5AD65]">
                <Sparkles className="w-3.5 h-3.5 text-[#49CEC3]" />
                <span>B. Did You Know? · Verified Fact</span>
              </div>

              {/* Prominent Stat */}
              <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-[#F0DC82] leading-tight">
                {initiative.didYouKnow.stat}
              </div>

              {/* Explanatory Context */}
              <p className="text-sm sm:text-base text-[#E6EEE7]/90 leading-relaxed font-light">
                {initiative.didYouKnow.text}
              </p>

              {/* Accredited Source & Functioning Link */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-white/10 text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="text-[#D5AD65] font-semibold">Source:</span>
                  <span>{initiative.didYouKnow.source} ({initiative.didYouKnow.year})</span>
                </div>

                <a
                  href={initiative.didYouKnow.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#49CEC3] hover:text-[#FFF2B8] hover:underline font-medium transition-colors"
                >
                  <span>Official Reference</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* SECTION C: WHY IT MATTERS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#087F78]">
              <Target className="w-4 h-4 text-[#087F78]" />
              <span>C. Why It Matters</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed font-light text-justify">
              {initiative.whyItMatters}
            </p>
          </div>

          {/* SECTION D: WHAT WE AIM TO DO */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#EEF8F5] border border-[#087F78]/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#073B43]">
              <ShieldCheck className="w-4 h-4 text-[#087F78]" />
              <span>D. What We Aim to Do</span>
            </div>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-light">
              {initiative.ourAim}
            </p>
            <div className="text-[11px] font-mono text-stone-500 italic">
              *Samrakshan Dhara Foundation is in its foundational preparatory stage. Activities reflect planned community initiatives in Dhanbad, Jharkhand.
            </div>
          </div>

          {/* SECTION E: HOW YOU CAN HELP */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7E8] border border-[#D5AD65]/40 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8C6D1F]">
              <HeartHandshake className="w-4 h-4 text-[#D5AD65]" />
              <span>E. How You Can Help</span>
            </div>
            <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-light">
              {initiative.howToHelp}
            </p>
          </div>

          {/* Focus Tags & Action Kicker */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-200">
            <div className="flex flex-wrap gap-2">
              {initiative.focusTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-stone-200/80 text-stone-700 border border-stone-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#087F78] to-[#28A77B] hover:from-[#28A77B] hover:to-[#49CEC3] text-[#F8F7EF] hover:text-[#073B43] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#087F78]/25 group shrink-0"
            >
              <span>Get Involved In This Cause</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
