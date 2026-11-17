import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SDF_INFO } from '../data/foundationData';

export const TermsPage: React.FC = () => {
  return (
    <div className="relative bg-[#073B43] text-[#F8F7EF] min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#49CEC3] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087F78]/50 border border-[#49CEC3]/30 text-xs font-mono text-[#D5AD65]">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Document · Terms of Service</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#F8F7EF]">
            Terms of Use
          </h1>

          <p className="text-xs text-[#E6EEE7]/60 font-mono">
            Effective Date: 04 August 2026 | Last Updated: November 2026
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#05282E] border border-white/10 space-y-8 text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this official website of {SDF_INFO.name} (CIN: {SDF_INFO.cin}), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please refrain from browsing this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              2. Preparatory Stage Disclosure
            </h2>
            <p className="p-4 rounded-xl bg-[#087F78]/25 border border-[#49CEC3]/30 text-xs sm:text-sm text-[#F8F7EF]">
              <strong>Legal Notice:</strong> Samrakshan Dhara Foundation is in its foundational preparatory stage. All initiatives, drives, workshops, campaigns, and recovery channels described on this website represent proposed, planned, and future-oriented programs. The website does not claim completed historical impact figures or formal government permissions for regulated scrap processing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              3. Intellectual Property & Brand Identity
            </h2>
            <p>
              The name "SAMRAKSHAN DHARA FOUNDATION", the official emblem, typography lockups, and editorial content are the exclusive intellectual property of the Foundation. Unauthorized reproduction, modification, or commercial exploitation is strictly prohibited without prior written consent.
            </p>
            <p className="text-xs text-[#E6EEE7]/70">
              Photographs presented in initiative showcases are illustrative references demonstrating planned causes, with rights held by their respective creators.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              4. External Links & Verified Channels
            </h2>
            <p>
              This website provides links to verified external profiles (such as our official Instagram handle). We do not control or take liability for third-party hosting platforms, privacy policies, or network security beyond our direct domain.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              5. Jurisdiction & Governance
            </h2>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising in connection with the Foundation or this website shall be subject to the exclusive jurisdiction of the competent courts in Dhanbad, Jharkhand, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              6. Enquiries
            </h2>
            <p>
              For legal inquiries regarding these terms, contact us at{' '}
              <a href={`mailto:${SDF_INFO.email}`} className="text-[#49CEC3] underline">
                {SDF_INFO.email}
              </a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
