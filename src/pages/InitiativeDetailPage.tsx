import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  ChevronDown, 
  Sparkles, 
  ShieldAlert, 
  HeartHandshake,
  Trees, 
  Trash2, 
  GraduationCap, 
  Disc, 
  Cpu, 
  Landmark,
  Users,
  ShieldCheck
} from 'lucide-react';
import { INITIATIVES } from '../data/foundationData';

const iconMap: Record<string, React.ElementType> = {
  Trees,
  Trash2,
  HeartHandshake,
  GraduationCap,
  Disc,
  Cpu,
  Landmark,
  Users,
  ShieldCheck,
};

export const InitiativeDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [expandedFocusIdx, setExpandedFocusIdx] = useState<number | null>(0);

  const initiative = INITIATIVES.find((i) => i.slug === slug);

  if (!initiative) {
    return <Navigate to="/initiatives" replace />;
  }

  const IconComp = iconMap[initiative.iconName] || Trees;

  const toggleFocus = (idx: number) => {
    setExpandedFocusIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="relative bg-[#073B43] text-[#F8F7EF]">
      {/* 1. DEDICATED CINEMATIC HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={initiative.heroImage}
            alt={initiative.title}
            className="w-full h-full object-cover animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#073B43] via-[#073B43]/75 to-[#041F23]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/initiatives"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-[#E6EEE7] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Initiatives</span>
            </Link>

            <span className="px-3.5 py-1.5 rounded-full bg-[#087F78]/70 border border-[#49CEC3]/30 text-xs font-semibold text-[#D5AD65]">
              {initiative.theme}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-[#F8F7EF] leading-tight">
            {initiative.title}
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-[#49CEC3] italic max-w-2xl mx-auto">
            "{initiative.quote}"
          </p>

          <p className="text-base sm:text-lg text-[#E6EEE7]/90 font-light max-w-3xl mx-auto leading-relaxed">
            {initiative.summary}
          </p>

          <div className="pt-2 text-xs text-[#D5AD65] tracking-wider uppercase flex items-center justify-center gap-2 font-mono">
            <ShieldAlert className="w-4 h-4" />
            <span>Planned Framework — Preparatory Stage Operations</span>
          </div>
        </div>
      </section>

      {/* 2. WHY THIS CAUSE MATTERS & PLANNED SDF OBJECTIVES */}
      <section className="py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Why This Cause Matters */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#05282E] border border-[#49CEC3]/20 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#087F78]/50 text-[#49CEC3]">
                <IconComp className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F8F7EF] font-medium">
                Why This Cause Matters
              </h2>
            </div>

            <div className="space-y-4">
              {initiative.whyItMatters.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <span className="w-2 h-2 rounded-full bg-[#49CEC3] mt-2 shrink-0" />
                  <p className="text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Planned SDF Objectives */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#05282E] border border-[#D5AD65]/30 space-y-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#D5AD65]/20 text-[#D5AD65]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#F8F7EF] font-medium">
                Planned SDF Objectives
              </h2>
            </div>

            <div className="space-y-4">
              {initiative.plannedObjectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D5AD65] mt-1 shrink-0" />
                  <p className="text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROPOSED ACTIVITIES */}
      <section className="py-16 bg-[#04242A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D5AD65]">
              Action Strategy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7EF] font-medium">
              Proposed Activities
            </h2>
            <p className="text-sm text-[#E6EEE7]/70">
              Pragmatic, community-driven steps planned for phased deployment in Dhanbad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiative.proposedActivities.map((act, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#073B43] border border-[#49CEC3]/20 space-y-4 shadow-lg hover:border-[#49CEC3] transition-colors"
              >
                <div className="text-xs font-mono font-semibold text-[#49CEC3]">
                  STEP 0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#F8F7EF]">
                  {act.title}
                </h3>
                <p className="text-sm text-[#E6EEE7]/80 font-light leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE EXPANDABLE FOCUS AREAS */}
      <section className="py-20 max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D5AD65]">
            In-Depth Structure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7EF] font-medium">
            Interactive Focus Areas
          </h2>
          <p className="text-sm text-[#E6EEE7]/70">
            Click each focus area to explore specific operational tracks and community protocols.
          </p>
        </div>

        <div className="space-y-4">
          {initiative.focusAreas.map((focus, idx) => {
            const isExpanded = expandedFocusIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#05282E] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFocus(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono font-semibold text-[#D5AD65]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[#F8F7EF]">
                      {focus.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#49CEC3] transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-4 animate-in fade-in duration-200">
                    <p className="text-sm text-[#E6EEE7]/85 font-light leading-relaxed">
                      {focus.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {focus.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-[#087F78]/30 border border-[#49CEC3]/20 text-xs text-[#49CEC3]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. ILLUSTRATIVE GALLERY */}
      <section className="py-20 bg-[#05282E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D5AD65]">
                Visual References
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F7EF] font-medium mt-1">
                Illustrative Gallery
              </h2>
            </div>
            <span className="text-xs text-[#E6EEE7]/60 italic">
              Photographic representation of proposed initiative themes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {initiative.illustrativeGallery.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-[#073B43] border border-white/10 group shadow-lg">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-[#073B43]">
                  <p className="text-xs text-[#E6EEE7]/80 leading-relaxed font-light">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTICIPATION CTA */}
      <section className="py-24 bg-gradient-to-t from-[#041F23] to-[#073B43] text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D5AD65]">
            Collective Responsibility
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#F8F7EF]">
            Support the {initiative.shortTitle} Mission
          </h2>

          <p className="text-base sm:text-lg text-[#E6EEE7]/85 font-light leading-relaxed">
            Whether through volunteering, community workshops, or sharing technical guidance, join our growing circle in Dhanbad.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#28A77B] hover:bg-[#49CEC3] text-[#073B43] font-semibold text-base transition-all duration-300 shadow-xl shadow-[#28A77B]/20 group"
            >
              <span>Get Involved with this Initiative</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-sm text-[#F8F7EF] transition-colors"
            >
              <span>Send An Enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
