import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SDF_INFO } from '../data/foundationData';

export const PrivacyPolicyPage: React.FC = () => {
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
            <span>Legal Document · Privacy & Data Protection</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#F8F7EF]">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#E6EEE7]/60 font-mono">
            Effective Date: 04 August 2026 | Last Updated: November 2026
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#05282E] border border-white/10 space-y-8 text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              1. Overview & Commitment
            </h2>
            <p>
              {SDF_INFO.name} ("SDF", "we", "our", or "the Foundation"), incorporated under Section 8 of the Companies Act, 2013 (CIN: {SDF_INFO.cin}), operates with deep reverence for user confidentiality and personal privacy. This document outlines how information submitted through our official website is collected, handled, and safeguarded.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              2. Information We Collect
            </h2>
            <p>
              As the Foundation is currently in its preparatory stage, we do not require user account registration, password creation, or credit card processing. We only receive information that you voluntarily choose to transmit:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm text-[#E6EEE7]/80">
              <li><strong>Contact Enquiries:</strong> Name, email address, subject matter, and correspondence notes when you send an email enquiry.</li>
              <li><strong>Volunteer Profiles:</strong> Preferred volunteer focus areas, city location, and skills voluntarily shared for civic coordination.</li>
              <li><strong>Technical Diagnostics:</strong> Standard non-identifying server logs (browser type, operating system) purely for website operational health.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              3. Purpose of Processing
            </h2>
            <p>
              Any information received is utilized solely for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm text-[#E6EEE7]/80">
              <li>Responding directly to your messages, questions, or collaboration requests.</li>
              <li>Maintaining volunteer rosters for planned civic activities in Dhanbad, Jharkhand.</li>
              <li>Notifying registered individuals when formal community sessions or donation portals are inaugurated.</li>
            </ul>
            <p className="text-xs text-[#D5AD65]">
              We strictly NEVER sell, rent, monetize, or trade any personal information with third-party advertising or commercial marketing firms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              4. Data Retention & Security
            </h2>
            <p>
              We apply standard technical measures to protect submitted correspondence against unauthorized access, destruction, or disclosure. You maintain the right at any time to request the removal or modification of your contact details from our records by emailing <a href={`mailto:${SDF_INFO.email}`} className="text-[#49CEC3] underline">{SDF_INFO.email}</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-[#F8F7EF] font-semibold">
              5. Contacting the Foundation
            </h2>
            <p>
              For any questions regarding this Privacy Policy or your data, please contact:
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono space-y-1 text-[#F8F7EF]">
              <p>Samrakshan Dhara Foundation</p>
              <p>CIN: {SDF_INFO.cin}</p>
              <p>Email: {SDF_INFO.email}</p>
              <p>Location: Dhanbad, Jharkhand, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
