import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail,
  Phone,
  MapPin, 
  Instagram, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Compass,
  ArrowLeft
} from 'lucide-react';
import { SDFLogo } from '../components/SDFLogo';
import { SDF_INFO } from '../data/foundationData';
import { CinematicVintageTelephone } from '../components/CinematicVintageTelephone';
import { WarmPaperContactForm } from '../components/WarmPaperContactForm';
import contactBackdrop from '../assets/images/contact_backdrop_1794202559162.jpg';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(SDF_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-[#073B43] text-[#F8F7EF] selection:bg-[#49CEC3]/30 selection:text-white overflow-x-hidden">
      {/* =========================================================================
          BACKGROUND & LIGHTING ATMOSPHERE
          Deep emerald plaster wall with diagonal sunlight louvers & warm accents
          ========================================================================= */}
      {/* Base Dark Emerald Gradient Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05282E] via-[#073B43] to-[#041D21] pointer-events-none" />

      {/* High-Fidelity Cinematic Backdrop Layer (Natural Sunlight & Shadows) */}
      <div 
        className="absolute inset-0 opacity-75 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(3,32,35,0.58), rgba(4,35,34,0.35) 45%, rgba(3,27,30,0.52)), url(${contactBackdrop})`,
        }}
      />

      {/* Atmospheric Diagonal Golden Sunlight Beams */}
      <div 
        className="absolute top-0 right-0 w-full sm:w-2/3 h-full pointer-events-none opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(213, 173, 101, 0.25) 0%, rgba(73, 206, 195, 0.08) 40%, transparent 75%)',
        }}
      />

      {/* Warm Ambient Radial Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#49CEC3]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D5AD65]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* =========================================================================
          SECTION 1: DISCREET BRANDING (NO NAVBAR IN THE CONTACT COMPOSITION)
          Displays authentic SDF Logo & Name in upper-left corner per specification
          ========================================================================= */}
      <header className="relative z-30 pt-6 px-6 sm:px-10 lg:px-14 flex items-center justify-between">
        {/* Upper-Left Discreet Logo & Organization Name */}
        <Link
          to="/"
          className="inline-flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3] rounded-xl p-1 group"
          aria-label="Samrakshan Dhara Foundation Homepage"
        >
          <SDFLogo size={50} showText={true} />
        </Link>

        {/* Minimal Unobtrusive Site Navigation Escape Hatch */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-[#E6EEE7]/80 hover:text-white transition-colors border border-white/10"
            title="Return to Foundation Homepage"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D5AD65]" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link
            to="/initiatives"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#087F78]/30 hover:bg-[#087F78]/50 text-xs font-mono text-[#49CEC3] transition-colors border border-[#49CEC3]/25"
            title="View Our Initiatives"
          >
            <Compass className="w-3.5 h-3.5 text-[#49CEC3]" />
            <span className="hidden sm:inline">Our Initiatives</span>
          </Link>
        </div>
      </header>

      {/* =========================================================================
          SECTION 2: MAIN 3-ZONE EDITORIAL COMPOSITION
          LEFT: Vintage Telephone Receiver & Coiled Cord
          CENTRE: Emotional Headline & Official Registry Info
          RIGHT: Warm-Ivory Stationery Contact Form
          ========================================================================= */}
      <main className="relative z-20 max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 pt-8 sm:pt-10 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-9 items-center">

          {/* ===================================================================
              ZONE 1 — LEFT: CINEMATIC VINTAGE TELEPHONE (4 cols on desktop)
              Enters smoothly from above, swings gently on cord, emits sound waves
              =================================================================== */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center order-2 lg:order-1 pt-2 lg:pt-0">
            <CinematicVintageTelephone />
          </div>

          {/* ===================================================================
              ZONE 2 — CENTRE: EMOTIONAL HEADLINE & OFFICIAL INFO (4 cols)
              "Every Call for Care Deserves to Be Heard."
              =================================================================== */}
          <div className="lg:col-span-4 flex flex-col space-y-6 sm:space-y-7 order-1 lg:order-2 text-left">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-semibold tracking-[0.26em] text-[#D5AD65] uppercase">
                LET&apos;S CONNECT
              </span>
              <div className="w-10 h-px bg-[#D5AD65]/50" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[37px] xl:text-[46px] font-normal tracking-tight text-[#F8F7EF] leading-[1.12]">
              Every Call for <br className="hidden sm:inline" />
              Care Deserves <br className="hidden sm:inline" />
              <span className="font-serif italic text-[#D5AD65] tracking-normal font-medium">
                to Be Heard.
              </span>
            </h1>

            {/* Restrained decorative underline */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#D5AD65] to-transparent rounded-full -mt-2" />

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-[#E6EEE7]/85 font-light leading-relaxed max-w-md">
              Whether you have a question, a partnership opportunity, or simply want to support our mission — we&apos;d love to hear from you.
            </p>

            {/* Official Contact Channels (Vertical Editorial Composition) */}
            <div className="pt-2 space-y-4">
              {/* Channel 1: Email Us */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full border border-[#D5AD65]/40 bg-[#05282E]/90 flex items-center justify-center text-[#D5AD65] shrink-0 mt-0.5 group-hover:border-[#D5AD65] group-hover:shadow-[0_0_15px_rgba(213,173,101,0.3)] transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#D5AD65]/80">
                    EMAIL US
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <a
                      href={`mailto:${SDF_INFO.email}`}
                      className="text-xs sm:text-sm text-[#F8F7EF] hover:text-[#49CEC3] transition-colors truncate font-medium"
                      title="Send Email to Foundation"
                    >
                      {SDF_INFO.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1 rounded-md text-stone-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                      title="Copy Email Address"
                      aria-label="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#28A77B]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  {copiedEmail && (
                    <span className="text-[10px] text-[#28A77B] block animate-in fade-in">
                      Copied to clipboard!
                    </span>
                  )}
                </div>
              </div>

              {/* Direct contact call link; the device decides whether it can place the call. */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full border border-[#D5AD65]/40 bg-[#05282E]/90 flex items-center justify-center text-[#D5AD65] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#D5AD65]/80">CALL OUR FOUNDATION</span>
                  <a href="tel:+919241826243" className="inline-block mt-0.5 text-xs sm:text-sm text-[#F8F7EF] hover:text-[#49CEC3] font-medium transition-colors" aria-label="Call Samrakshan Dhara Foundation at 9241826243">+91 92418 26243</a>
                </div>
              </div>

              {/* Channel 2: Our Base */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full border border-[#D5AD65]/40 bg-[#05282E]/90 flex items-center justify-center text-[#D5AD65] shrink-0 mt-0.5 group-hover:border-[#D5AD65] group-hover:shadow-[0_0_15px_rgba(213,173,101,0.3)] transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#D5AD65]/80">
                    OUR BASE
                  </span>
                  <p className="text-xs sm:text-sm text-[#F8F7EF] font-medium mt-0.5">
                    {SDF_INFO.location}
                  </p>
                </div>
              </div>

              {/* Channel 3: Follow Our Journey (Verified Instagram) */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-full border border-[#D5AD65]/40 bg-[#05282E]/90 flex items-center justify-center text-[#D5AD65] shrink-0 mt-0.5 group-hover:border-[#D5AD65] group-hover:shadow-[0_0_15px_rgba(213,173,101,0.3)] transition-all">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-[#D5AD65]/80">
                    FOLLOW OUR JOURNEY
                  </span>
                  <a
                    href={SDF_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#F8F7EF] hover:text-[#49CEC3] transition-colors font-medium mt-0.5"
                    title="View Verified Instagram Profile"
                  >
                    <span>@samrakshan_dhara</span>
                    <ArrowUpRight className="w-3 h-3 text-[#D5AD65] opacity-80" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Typographic Line */}
            <div className="pt-5 border-t border-[#49CEC3]/20">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#E6EEE7]/60">
                NATURE &nbsp;/&nbsp; PEOPLE &nbsp;/&nbsp; ANIMALS &nbsp;/&nbsp; A BETTER TOMORROW
              </p>
            </div>
          </div>

          {/* ===================================================================
              ZONE 3 — RIGHT: WARM-IVORY STATIONERY FORM (4 cols on desktop)
              Sophisticated paper surface, olive leaf sprig & paperclip
              =================================================================== */}
          <div className="lg:col-span-5 flex justify-center order-3 w-full">
            <WarmPaperContactForm />
          </div>

        </div>
      </main>

      {/* =========================================================================
          SECTION 3: FOREGROUND TEAK WOOD DESK & HARDCOVER BOOK ACCENT
          Recreates the bottom foreground from the reference image:
          Dark polished desk with "A GREENER TOMORROW" hardcover book and monstera foliage
          ========================================================================= */}
      <div className="relative z-10 w-full overflow-hidden">
        {/* Polished Teak Desk Surface */}
        <div className="relative h-28 sm:h-36 bg-gradient-to-b from-[#1C120C] via-[#2A1B12] to-[#120B07] border-t-2 border-[#543825]/60 shadow-[inset_0_12px_24px_rgba(0,0,0,0.8)]">
          {/* Subtle wood grain sheen */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, transparent 0px, transparent 40px, rgba(213, 173, 101, 0.08) 42px, transparent 45px)',
            }}
          />

          {/* Foreground Book: "A GREENER TOMORROW" (matching reference image) */}
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 h-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Hardcover Book Spine / Cover */}
              <div className="relative px-5 py-2.5 rounded-sm bg-[#123830] border border-[#D5AD65]/40 shadow-xl shadow-black/80 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#D5AD65]/50 rounded-full" />
                <div>
                  <span className="font-serif text-[11px] sm:text-xs tracking-[0.2em] font-semibold text-[#D5AD65] uppercase block">
                    A GREENER TOMORROW
                  </span>
                  <span className="text-[9px] font-mono text-[#49CEC3]/70 uppercase tracking-widest block">
                    SDF FOUNDATIONAL ESSAYS
                  </span>
                </div>
              </div>

              {/* Gentle Botanical Leaves Accent (Left Foreground) */}
              <div className="hidden md:flex items-center gap-2 text-xs font-serif italic text-[#E6EEE7]/60">
                <span>Roots that anchor; canopies that shield.</span>
              </div>
            </div>

            {/* Right Side: Section 8 Verification Badge */}
            <div className="text-right">
              <span className="font-mono text-[10px] text-[#D5AD65] tracking-widest uppercase block">
                LEGAL REGISTRATION
              </span>
              <span className="font-mono text-[10px] text-[#E6EEE7]/60 block">
                CIN: {SDF_INFO.cin}
              </span>
            </div>
          </div>
        </div>

        {/* Seamless Organic Wave Divider transitioning naturally into Footer */}
        <div className="relative -mt-1 w-full overflow-hidden leading-none z-10">
          <svg
            className="relative block w-full h-8 sm:h-12 text-[#05282E]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,60 600,20 900,50 C1050,65 1150,20 1200,0 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
