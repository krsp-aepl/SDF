import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const EndlessDharaClosing: React.FC = () => {
  const navigate = useNavigate();
  const [isSurging, setIsSurging] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleJoinMissionClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      navigate('/get-involved', { state: { fromDharaStream: true } });
      return;
    }

    if (isSurging) return; // Prevent duplicate rapid clicks

    // 1. Trigger luminous surge along the stream
    setIsSurging(true);

    // 2. Begin brief, smooth cinematic page exit
    timeoutRef.current = setTimeout(() => {
      setIsExiting(true);
    }, 280);

    // 3. Navigate to destination page with continuation state
    setTimeout(() => {
      navigate('/get-involved', { state: { fromDharaStream: true } });
    }, 480);
  };

  return (
    <section
      className={`relative py-32 sm:py-40 bg-gradient-to-t from-[#05282E] via-[#073B43] to-[#04242A] overflow-hidden text-center transition-opacity duration-300 ${
        isExiting ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
      }`}
      aria-label="Join Our Mission: Be Part of Something Worth Protecting"
    >
      {/* Background Soft Refined Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,127,120,0.28)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#49CEC3]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* =========================================================================
          "THE ENDLESS DHARA" — CONTINUOUS FLOWING AQUA-TO-CHAMPAGNE SVG STREAM
          Enters gracefully from top-left, curves organically behind/beside typography,
          and seamlessly connects to the "Join Our Mission" CTA button.
          ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Multi-stop Aqua-to-Champagne Living Stream Gradient */}
            <linearGradient id="endless-dhara-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#087F78" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#28A77B" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#49CEC3" stopOpacity="0.95" />
              <stop offset="92%" stopColor="#D5AD65" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFF4D0" stopOpacity="1" />
            </linearGradient>

            {/* Glowing Surge Highlight Gradient */}
            <linearGradient id="dhara-surge-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#49CEC3" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFF4D0" stopOpacity="1" />
              <stop offset="100%" stopColor="#D5AD65" stopOpacity="0" />
            </linearGradient>

            {/* Soft Ambient River Blur Filter */}
            <filter id="dhara-soft-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Ambient Glow Layer of the Stream */}
          <path
            d="M -60 180 C 240 80, 280 440, 560 360 C 680 320, 680 470, 720 540"
            stroke="url(#endless-dhara-grad)"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.35"
            filter="url(#dhara-soft-glow)"
          />

          {/* Secondary Symmetrical Current from East */}
          <path
            d="M 1500 200 C 1220 120, 1160 420, 880 370 C 760 350, 760 480, 720 540"
            stroke="url(#endless-dhara-grad)"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.25"
            filter="url(#dhara-soft-glow)"
          />

          {/* Primary Main Flow Line of The Endless Dhara: Living River Path */}
          <path
            id="dhara-main-stream-path"
            d="M -60 180 C 240 80, 280 440, 560 360 C 680 320, 680 470, 720 540"
            stroke="url(#endless-dhara-grad)"
            strokeWidth={isSurging ? '4' : '2.5'}
            strokeLinecap="round"
            className="animate-dhara-stream transition-all duration-300"
          />

          {/* Companion Stream Line from Right */}
          <path
            d="M 1500 200 C 1220 120, 1160 420, 880 370 C 760 350, 760 480, 720 540"
            stroke="url(#endless-dhara-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-dhara-stream"
          />

          {/* Surge Luminous Highlight: Races down the path when user clicks CTA */}
          {isSurging && (
            <path
              d="M -60 180 C 240 80, 280 440, 560 360 C 680 320, 680 470, 720 540"
              stroke="#FFF4D0"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="180 600"
              className="animate-dhara-surge transition-all"
              style={{
                filter: 'drop-shadow(0 0 16px #49CEC3) drop-shadow(0 0 24px #D5AD65)',
              }}
            />
          )}

          {/* Floating Water Droplet Particles along Stream */}
          <circle cx="280" cy="240" r="3" fill="#49CEC3" opacity="0.75" />
          <circle cx="560" cy="360" r="3.5" fill="#D5AD65" opacity="0.85" />
          <circle cx="720" cy="540" r="5" fill="#FFF4D0" opacity={isSurging ? 1 : 0.9} />
        </svg>
      </div>

      {/* =========================================================================
          CONTENT LAYER: TYPOGRAPHY & "JOIN OUR MISSION" CTA
          Text remains crisp, readable, and beautifully framed by the curved current.
          ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073B43]/80 border border-[#49CEC3]/30 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D5AD65]" />
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D5AD65]">
            A Call to Conscience
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-[#F8F7EF] mb-6 leading-tight drop-shadow-md">
          Be Part of Something Worth Protecting.
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-[#E6EEE7]/90 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          Meaningful change begins when people choose to care, connect and act together.
        </p>

        {/* =======================================================================
            "JOIN OUR MISSION" CTA (Connected to the Endless Dhara Stream)
            ======================================================================= */}
        <div className="relative inline-block">
          {/* Subtle Ambient Golden-Aqua Halo around the button */}
          <div
            className={`absolute -inset-2 rounded-full transition-all duration-500 pointer-events-none ${
              isSurging
                ? 'opacity-100 bg-[radial-gradient(circle,rgba(73,206,195,0.7)_0%,rgba(213,173,101,0.5)_60%,transparent_80%)] blur-md scale-110'
                : 'opacity-40 group-hover:opacity-75 bg-[radial-gradient(circle,rgba(213,173,101,0.4)_0%,transparent_70%)] blur-sm'
            }`}
          />

          <button
            type="button"
            onClick={handleJoinMissionClick}
            disabled={isSurging}
            className={`relative z-10 inline-flex items-center gap-3 px-10 py-4.5 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 cursor-pointer shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#49CEC3] select-none ${
              isSurging
                ? 'bg-gradient-to-r from-[#49CEC3] via-[#FFF4D0] to-[#D5AD65] text-[#073B43] animate-dhara-button-pulse scale-105'
                : 'bg-gradient-to-r from-[#D5AD65] via-[#E6C687] to-[#D5AD65] hover:from-[#E6C687] hover:to-[#D5AD65] text-[#073B43] shadow-[#D5AD65]/25 hover:scale-105 active:scale-95'
            }`}
            aria-label="Join Our Mission — Navigate to Get Involved"
          >
            <span>{isSurging ? 'Flowing to Mission...' : 'Join Our Mission'}</span>
            <ArrowRight
              className={`w-5 h-5 transition-transform ${
                isSurging ? 'translate-x-2' : 'group-hover:translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Micro Subtext */}
        <div className="mt-6 text-xs text-[#E6EEE7]/60 font-mono tracking-wider flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#49CEC3]" />
          <span>The Endless Dhara · A Continuous Current of Protection</span>
        </div>
      </div>
    </section>
  );
};
