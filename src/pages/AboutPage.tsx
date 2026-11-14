import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SDF_INFO } from '../data/foundationData';
import { FlowOfProtectionHero } from '../components/FlowOfProtectionHero';
import { RootedInCompassionSection } from '../components/RootedInCompassionSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="relative bg-[#073B43] text-[#F8F7EF]">
      {/* =========================================================================
          HERO: THE STORY BEHIND OUR NAME (SAMRAKSHAN & DHARA)
          Luxury nature documentary scroll-driven storytelling sequence
          ========================================================================= */}
      <FlowOfProtectionHero />

      {/* =========================================================================
          CINEMATIC ABOUT SECTION: ROOTED IN COMPASSION, DRIVEN BY RESPONSIBILITY
          Approved Jharkhand landscape & 3 interactive chapters (Story, Vision, Commitment)
          ========================================================================= */}
      <RootedInCompassionSection />

      {/* =========================================================================
          OFFICIAL ORGANISATION INFORMATION REGISTRY BOX
          Statutory verification and transparent corporate identity
          ========================================================================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#05282E] to-[#073B43] border border-[#D5AD65]/30 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D5AD65]">
                Corporate & Statutory Record
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F7EF] font-medium mt-1">
                Official Foundation Information
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087F78]/40 text-xs text-[#49CEC3] border border-[#49CEC3]/30 w-fit">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>MCA Verified Registry</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="space-y-1">
              <span className="text-xs text-[#E6EEE7]/60 uppercase tracking-wider">Full Legal Name</span>
              <p className="font-semibold text-[#F8F7EF]">{SDF_INFO.name}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#E6EEE7]/60 uppercase tracking-wider">Legal Entity Type</span>
              <p className="font-semibold text-[#D5AD65]">{SDF_INFO.legalStructure}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#E6EEE7]/60 uppercase tracking-wider">Corporate Identity Number (CIN)</span>
              <p className="font-mono font-semibold text-[#49CEC3]">{SDF_INFO.cin}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#E6EEE7]/60 uppercase tracking-wider">Date of Incorporation</span>
              <p className="font-semibold text-[#F8F7EF]">{SDF_INFO.incorporatedDate}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#E6EEE7]/60 uppercase tracking-wider">Registered Location</span>
              <p className="font-semibold text-[#F8F7EF]">{SDF_INFO.location}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#E6EEE7]/60 uppercase tracking-wider">Official Email</span>
              <a href={`mailto:${SDF_INFO.email}`} className="font-semibold text-[#49CEC3] hover:underline block break-all">
                {SDF_INFO.email}
              </a>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#E6EEE7]/60 uppercase tracking-wider">Operational Stage</span>
              <p className="font-semibold text-[#D5AD65]">Preparatory & Volunteer Alignment</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs text-[#E6EEE7]/60 uppercase tracking-wider">Official Social</span>
              <a
                href={SDF_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#49CEC3] hover:underline inline-flex items-center gap-1"
              >
                <span>Instagram Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
