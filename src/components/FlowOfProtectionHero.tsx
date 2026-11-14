import React, { useRef, useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Volume2, VolumeX } from 'lucide-react';

export const FlowOfProtectionHero: React.FC = () => {
  // Timeline: runs from 0.0 to 11.0 seconds once on page mount, then stays permanently revealed.
  const [timeline, setTimeline] = useState<number>(0);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);
  const [hoveredPanel, setHoveredPanel] = useState<'samrakshan' | 'dhara' | null>(null);

  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Check prefers-reduced-motion: if active, jump immediately to final revealed state
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setTimeline(11.0);
    }
  }, []);

  // 11-second automated timeline reveal loop (runs once, then stays at 11.0s permanently)
  useEffect(() => {
    let isCancelled = false;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = (timestamp - startTimeRef.current) / 1000;

      if (!isCancelled) {
        if (elapsed >= 11.0) {
          setTimeline(11.0);
        } else {
          setTimeline(elapsed);
          requestRef.current = requestAnimationFrame(animate);
        }
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      isCancelled = true;
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Ensure river video plays continuously with muted audio
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Golden-Aqua Connecting Current & Drifting Leaf Particle Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Drifting leaf particles
    interface Particle {
      t: number; // Progress along the curve [0, 1]
      speed: number;
      size: number;
      rotation: number;
      rotSpeed: number;
      offsetY: number;
      opacity: number;
      isLeaf: boolean;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: 28 }, (_, i) => ({
      t: Math.random(),
      speed: 0.0012 + Math.random() * 0.002,
      size: i % 4 === 0 ? 7 + Math.random() * 4 : 2 + Math.random() * 3,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      offsetY: (Math.random() - 0.5) * 24,
      opacity: 0.4 + Math.random() * 0.6,
      isLeaf: i % 3 === 0,
      color: i % 2 === 0 ? '#D5AD65' : '#49CEC3',
    }));

    // Helper to evaluate cubic bezier connecting point
    // Curve spans from bottom-right of left panel to center-left of right panel
    const getCurvePoint = (t: number) => {
      const p0 = { x: width * 0.38, y: height * 0.48 };
      const p1 = { x: width * 0.46, y: height * 0.58 };
      const p2 = { x: width * 0.54, y: height * 0.42 };
      const p3 = { x: width * 0.62, y: height * 0.52 };

      const cx = 3 * (p1.x - p0.x);
      const bx = 3 * (p2.x - p1.x) - cx;
      const ax = p3.x - p0.x - cx - bx;

      const cy = 3 * (p1.y - p0.y);
      const by = 3 * (p2.y - p1.y) - cy;
      const ay = p3.y - p0.y - cy - by;

      const x = ax * Math.pow(t, 3) + bx * Math.pow(t, 2) + cx * t + p0.x;
      const y = ay * Math.pow(t, 3) + by * Math.pow(t, 2) + cy * t + p0.y;

      return { x, y };
    };

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Only draw on larger screens where panels sit side by side
      if (width >= 960) {
        // Draw the luminous golden-aqua energy stream
        const currentT = startTimeRef.current
          ? (performance.now() - startTimeRef.current) / 1000
          : 11.0;

        // Surge progress from 4.8s to 7.5s
        const flowProgress = currentT >= 7.5 ? 1.0 : Math.max(0, (currentT - 4.8) / 2.7);

        if (flowProgress > 0) {
          // 1. Draw glowing multi-filament ribbons
          const steps = Math.floor(80 * flowProgress);

          for (let strand = -1; strand <= 1; strand++) {
            ctx.beginPath();
            const strandOffset = strand * 5;
            const isCenter = strand === 0;

            for (let i = 0; i <= steps; i++) {
              const t = i / 80;
              const pt = getCurvePoint(t);
              const wave = Math.sin(t * Math.PI * 4 + frame * 0.03 + strand) * 4;

              const px = pt.x;
              const py = pt.y + strandOffset + wave;

              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }

            ctx.lineWidth = isCenter ? 2.5 : 1.2;
            const grad = ctx.createLinearGradient(width * 0.38, 0, width * 0.62, 0);
            grad.addColorStop(0, 'rgba(213, 173, 101, 0.85)');
            grad.addColorStop(0.5, 'rgba(73, 206, 195, 0.95)');
            grad.addColorStop(1, 'rgba(103, 214, 195, 0.75)');

            ctx.strokeStyle = grad;
            ctx.shadowColor = strand === 0 ? '#49CEC3' : '#D5AD65';
            ctx.shadowBlur = 12;
            ctx.stroke();
          }

          // 2. Draw drifting leaves and glowing embers
          particles.forEach((p) => {
            p.t += p.speed;
            if (p.t > flowProgress) p.t = 0;
            p.rotation += p.rotSpeed;

            const basePt = getCurvePoint(p.t);
            const wave = Math.sin(p.t * Math.PI * 4 + frame * 0.02) * 6;
            const px = basePt.x;
            const py = basePt.y + p.offsetY + wave;

            ctx.save();
            ctx.translate(px, py);
            ctx.rotate(p.rotation);

            if (p.isLeaf) {
              // Draw delicate golden-green leaf
              ctx.beginPath();
              ctx.moveTo(0, -p.size);
              ctx.quadraticCurveTo(p.size * 0.7, 0, 0, p.size);
              ctx.quadraticCurveTo(-p.size * 0.7, 0, 0, -p.size);
              ctx.fillStyle = `rgba(163, 216, 137, ${p.opacity * flowProgress})`;
              ctx.shadowColor = '#8CD470';
              ctx.shadowBlur = 6;
              ctx.fill();

              // Leaf center vein
              ctx.beginPath();
              ctx.moveTo(0, -p.size * 0.8);
              ctx.lineTo(0, p.size * 0.8);
              ctx.strokeStyle = `rgba(213, 173, 101, ${p.opacity * 0.8 * flowProgress})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            } else {
              // Luminous golden / aqua circular ember
              ctx.beginPath();
              ctx.arc(0, 0, p.size, 0, Math.PI * 2);
              ctx.fillStyle = p.color === '#D5AD65'
                ? `rgba(213, 173, 101, ${p.opacity * flowProgress})`
                : `rgba(73, 206, 195, ${p.opacity * flowProgress})`;
              ctx.shadowColor = p.color;
              ctx.shadowBlur = 8;
              ctx.fill();
            }

            ctx.restore();
          });
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Smooth scroll handler to next section (#purpose)
  const handleScrollToStory = () => {
    const target = document.getElementById('purpose');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
    }
  };

  /* =========================================================================
     TIMELINE INTERPOLATIONS (0s - 11s)
     0–2s:  Header "BEYOND THE NAME" + Subline
     2–5s:  Left panel (SAMRAKSHAN) reveals
     5–8s:  Connecting stream of light & leaves surges across center
     8–11s: Right panel (DHARA) and river flow reveal
     11s+:  Permanent state with continuous river flow & ambient motion
     ========================================================================= */

  // 1. Header (0.0s - 2.0s)
  const headerOpacity = Math.min(1, Math.max(0, timeline / 1.6));
  const headerTranslateY = Math.max(0, (1 - headerOpacity) * 16);

  // 2. SAMRAKSHAN (Left side: 2.0s - 5.0s)
  const samrakshanProgress =
    timeline < 2.0 ? 0 : Math.min(1, (timeline - 2.0) / 2.6);
  const samrakshanOpacity = samrakshanProgress;
  const samrakshanTranslateX = (1 - samrakshanProgress) * -18;

  // 3. DHARA (Right side: 7.5s - 10.5s)
  const dharaProgress =
    timeline < 7.2 ? 0 : Math.min(1, (timeline - 7.2) / 2.8);
  const dharaOpacity = dharaProgress;
  const dharaTranslateX = (1 - dharaProgress) * 18;

  // 4. Bottom Statement & Flourish (10.0s - 11.5s)
  const statementProgress =
    timeline < 9.5 ? 0 : Math.min(1, (timeline - 9.5) / 1.5);
  const statementOpacity = statementProgress;
  const statementTranslateY = (1 - statementProgress) * 12;

  return (
    <section 
      aria-label="Beyond The Name: The Living Meaning of Samrakshan Dhara"
      className="relative w-full min-h-screen bg-[#031F1C] text-[#F8F7EF] overflow-hidden flex flex-col justify-between selection:bg-[#087F78] selection:text-white"
    >
      {/* =========================================================================
          ATMOSPHERIC DEEP EMERALD BACKGROUND WITH GOLDEN AMBIENCE & LEAF SHADOWS
          Matches the exact background tone of the approved reference image
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep forest emerald radial gradient */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 50% 45%, #052B26 0%, #031F1C 65%, #021412 100%)'
          }}
        />

        {/* Ambient warm golden glow behind Samrakshan */}
        <div 
          className="absolute -left-[5%] top-[15%] w-[50vw] h-[50vw] rounded-full blur-[130px] transition-opacity duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(213, 173, 101, 0.16) 0%, rgba(8, 127, 120, 0.1) 50%, transparent 70%)',
            opacity: samrakshanOpacity > 0 ? 0.9 : 0.2
          }}
        />

        {/* Ambient crystal turquoise glow behind Dhara */}
        <div 
          className="absolute -right-[5%] top-[25%] w-[50vw] h-[50vw] rounded-full blur-[130px] transition-opacity duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(73, 206, 195, 0.18) 0%, rgba(8, 127, 120, 0.12) 50%, transparent 70%)',
            opacity: dharaOpacity > 0 ? 0.95 : 0.15
          }}
        />

        {/* Atmospheric soft botanical foliage silhouettes in top corners */}
        {/* Top-Left botanical branches */}
        <div className="absolute -top-6 -left-6 w-56 h-56 sm:w-80 sm:h-80 opacity-45 pointer-events-none transform -rotate-12">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#4E7761]/35">
            <path d="M10 10 C 60 40, 110 80, 180 140" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M50 35 C 40 20, 20 25, 15 40 C 25 50, 45 45, 50 35 Z" fill="currentColor" opacity="0.6" />
            <path d="M80 60 C 95 45, 115 50, 120 65 C 105 75, 85 70, 80 60 Z" fill="currentColor" opacity="0.6" />
            <path d="M110 85 C 100 70, 80 75, 75 90 C 85 100, 105 95, 110 85 Z" fill="currentColor" opacity="0.6" />
            <path d="M140 110 C 155 95, 175 100, 180 115 C 165 125, 145 120, 140 110 Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>

        {/* Top-Right botanical branches */}
        <div className="absolute -top-6 -right-6 w-56 h-56 sm:w-80 sm:h-80 opacity-45 pointer-events-none transform rotate-12 scale-x-[-1]">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-[#4E7761]/35">
            <path d="M10 10 C 60 40, 110 80, 180 140" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M50 35 C 40 20, 20 25, 15 40 C 25 50, 45 45, 50 35 Z" fill="currentColor" opacity="0.6" />
            <path d="M80 60 C 95 45, 115 50, 120 65 C 105 75, 85 70, 80 60 Z" fill="currentColor" opacity="0.6" />
            <path d="M110 85 C 100 70, 80 75, 75 90 C 85 100, 105 95, 110 85 Z" fill="currentColor" opacity="0.6" />
            <path d="M140 110 C 155 95, 175 100, 180 115 C 165 125, 145 120, 140 110 Z" fill="currentColor" opacity="0.6" />
          </svg>
        </div>

        {/* Flowing golden wave lights at the bottom */}
        <div className="absolute -bottom-12 inset-x-0 h-40 opacity-30 pointer-events-none">
          <svg viewBox="0 0 1440 200" fill="none" className="w-full h-full">
            <path 
              d="M0,100 C320,180 480,40 800,120 C1120,200 1280,60 1440,110 L1440,200 L0,200 Z" 
              fill="url(#bottomGlowGrad)" 
            />
            <defs>
              <linearGradient id="bottomGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D5AD65" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#49CEC3" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#087F78" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Global Interactive Canvas for Connecting Stream & Drifting Leaves */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
      />

      {/* =========================================================================
          TOP HEADER: "BEYOND THE NAME"
          Surrounded by delicate gold leaf branches, matching the approved reference
          ========================================================================= */}
      <header className="relative z-20 w-full pt-16 sm:pt-20 pb-4 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <div 
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: headerOpacity,
            transform: `translateY(${headerTranslateY}px)`
          }}
        >
          {/* Main Title flanked by symmetrical gold branch flourishes */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2">
            {/* Left Gold Leaf Flourish */}
            <div className="hidden sm:flex items-center opacity-85">
              <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D5AD65]" />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D5AD65] -ml-1">
                <path d="M3 14 C7 14, 12 11, 15 7 C12 8, 8 10, 5 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M15 7 C18 10, 20 15, 17 19 C14 17, 13 13, 15 7" fill="currentColor" fillOpacity="0.75" />
              </svg>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F8F7EF] tracking-[0.14em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)] uppercase">
              BEYOND THE NAME
            </h1>

            {/* Right Gold Leaf Flourish */}
            <div className="hidden sm:flex items-center opacity-85">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#D5AD65] -mr-1 transform scale-x-[-1]">
                <path d="M3 14 C7 14, 12 11, 15 7 C12 8, 8 10, 5 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M15 7 C18 10, 20 15, 17 19 C14 17, 13 13, 15 7" fill="currentColor" fillOpacity="0.75" />
              </svg>
              <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D5AD65]" />
            </div>
          </div>

          {/* Subtitle Line */}
          <p className="font-serif italic text-base sm:text-xl md:text-2xl text-[#E8EDEA] font-light tracking-wide max-w-2xl mx-auto drop-shadow">
            "A name shaped by protection. A spirit carried by flow."
          </p>
        </div>
      </header>

      {/* =========================================================================
          MAIN CENTERSTAGE: TWO LARGE CINEMATIC PANELS (SAMRAKSHAN & DHARA)
          Direct recreation of the approved reference image image_00f06bc1.png
          ========================================================================= */}
      <main className="relative z-20 flex-1 w-full max-w-[1520px] mx-auto px-4 sm:px-8 xl:px-12 py-3 sm:py-6 flex flex-col justify-center my-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 xl:gap-12 items-stretch">

          {/* -------------------------------------------------------------------
              LEFT PANEL: SAMRAKSHAN — PROTECTION
              Exact approved scene: puppy, calf, hands with plant, sunbeams, community
              ------------------------------------------------------------------- */}
          <div 
            className="relative flex flex-col rounded-[28px] sm:rounded-[32px] border-2 border-[#D5AD65]/85 bg-[#03201D]/90 shadow-[0_0_35px_rgba(213,173,101,0.22)] backdrop-blur-md overflow-hidden transition-all duration-1000 ease-out group"
            style={{
              opacity: samrakshanOpacity,
              transform: `translateX(${samrakshanTranslateX}px)`
            }}
            onMouseEnter={() => setHoveredPanel('samrakshan')}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            {/* Outer Ambient Glow Ring on hover */}
            <div className={`absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#D5AD65]/30 to-[#087F78]/20 blur-xl pointer-events-none transition-opacity duration-500 ${
              hoveredPanel === 'samrakshan' ? 'opacity-100' : 'opacity-0'
            }`} />

            {/* Visual Scene Area */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-t-[26px] sm:rounded-t-[30px] bg-[#021816]">
              {/* High-definition cropped artwork from approved mockup */}
              <img 
                src="/images/samrakshan_living_scene.png" 
                alt="Samrakshan living scene: puppy, calf, hands cradling young green sapling, warm sunbeams and caring community in emerald forest"
                className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.04] transform transition-transform duration-1000 group-hover:scale-[1.025]"
              />

              {/* Shifting warm sunlight sheen overlay */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(ellipse at 35% 25%, rgba(213, 173, 101, 0.22) 0%, rgba(8, 127, 120, 0.08) 55%, rgba(2, 24, 22, 0.55) 100%)',
                  opacity: hoveredPanel === 'samrakshan' ? 0.95 : 0.75
                }}
              />

              {/* Subtle ambient golden dust motes */}
              <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
                <div className="absolute top-[28%] left-[32%] w-1.5 h-1.5 rounded-full bg-[#FFE5A3] blur-[1px] animate-pulse" />
                <div className="absolute top-[38%] left-[46%] w-2 h-2 rounded-full bg-[#FFE5A3] blur-[1.5px] animate-pulse delay-300" />
                <div className="absolute top-[48%] left-[58%] w-1.5 h-1.5 rounded-full bg-[#FFE5A3] blur-[1px] animate-pulse delay-700" />
              </div>

              {/* Gentle corner highlight */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Typography & Meaning Block inside Gold Frame */}
            <div className="relative z-10 flex-1 px-6 sm:px-8 py-5 sm:py-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#03201D] to-[#021614] border-t border-[#D5AD65]/35">
              {/* Heading with Devanagari script and gold separator */}
              <div className="flex items-center justify-center gap-3 mb-1.5 flex-wrap">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F8F7EF] font-normal tracking-[0.14em]">
                  SAMRAKSHAN
                </h2>
                <span className="text-[#D5AD65] font-light text-xl sm:text-2xl opacity-80">|</span>
                <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#D5AD65] font-normal tracking-wide">
                  संरक्षण
                </span>
              </div>

              {/* Subheading: To protect, preserve and safeguard */}
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#F8F7EF]/90 font-light tracking-wide mb-1.5">
                To protect, preserve and safeguard.
              </p>

              {/* Explanatory sentence */}
              <p className="text-xs sm:text-sm text-[#A0C4B8] font-light tracking-wide max-w-lg leading-relaxed">
                A promise of care for life, dignity and the world we share.
              </p>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT PANEL: DHARA — THE LIVING RIVER
              Exact approved scene: crystal turquoise river, dark river stones, lush forest
              Looped moving river flow blended smoothly for authentic movement
              ------------------------------------------------------------------- */}
          <div 
            className="relative flex flex-col rounded-[28px] sm:rounded-[32px] border-2 border-[#D5AD65]/85 bg-[#03201D]/90 shadow-[0_0_35px_rgba(213,173,101,0.22)] backdrop-blur-md overflow-hidden transition-all duration-1000 ease-out group"
            style={{
              opacity: dharaOpacity,
              transform: `translateX(${dharaTranslateX}px)`
            }}
            onMouseEnter={() => setHoveredPanel('dhara')}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            {/* Outer Ambient Glow Ring on hover */}
            <div className={`absolute -inset-1 rounded-[32px] bg-gradient-to-r from-[#087F78]/20 to-[#49CEC3]/30 blur-xl pointer-events-none transition-opacity duration-500 ${
              hoveredPanel === 'dhara' ? 'opacity-100' : 'opacity-0'
            }`} />

            {/* Visual Scene Area */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-t-[26px] sm:rounded-t-[30px] bg-[#021816]">
              {/* High-definition cropped artwork from approved mockup */}
              <img 
                src="/images/dhara_river_scene.png" 
                alt="Dhara living river scene: crystal-clear turquoise river rushing over smooth dark boulders through lush emerald mountain forest"
                className="w-full h-full object-cover object-center filter brightness-[1.0] contrast-[1.04] transform transition-transform duration-1000 group-hover:scale-[1.025]"
              />

              {/* Moving Live River Currents Video Overlay (Subtle organic blend) */}
              <video
                ref={videoRef}
                src="/videos/drone_aerial_river.mp4"
                poster="/images/aerial_turquoise_river.jpg"
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center mix-blend-screen opacity-35 filter brightness-[1.1] contrast-[1.15] pointer-events-none"
              />

              {/* Shimmering aquatic sunlight sheen */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(ellipse at 50% 60%, rgba(73, 206, 195, 0.22) 0%, rgba(8, 127, 120, 0.1) 50%, rgba(2, 24, 22, 0.55) 100%)',
                  opacity: hoveredPanel === 'dhara' ? 0.95 : 0.75
                }}
              />

              {/* Sound toggle button for natural river soundscape if desired */}
              <button
                type="button"
                onClick={() => setIsVideoMuted(!isVideoMuted)}
                aria-label={isVideoMuted ? "Unmute river water sounds" : "Mute river water sounds"}
                className="absolute top-3 right-3 p-2 rounded-full bg-[#03201D]/75 border border-[#49CEC3]/40 text-[#49CEC3] hover:text-[#F8F7EF] hover:bg-[#073B43] backdrop-blur-md transition-colors shadow-md z-20 cursor-pointer"
                title={isVideoMuted ? "Listen to flowing river" : "Mute audio"}
              >
                {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#67D6C3] animate-pulse" />}
              </button>

              {/* Gentle corner highlight */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Typography & Meaning Block inside Gold Frame */}
            <div className="relative z-10 flex-1 px-6 sm:px-8 py-5 sm:py-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#03201D] to-[#021614] border-t border-[#D5AD65]/35">
              {/* Heading with Devanagari script and gold separator */}
              <div className="flex items-center justify-center gap-3 mb-1.5 flex-wrap">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F8F7EF] font-normal tracking-[0.14em]">
                  DHARA
                </h2>
                <span className="text-[#D5AD65] font-light text-xl sm:text-2xl opacity-80">|</span>
                <span className="font-serif text-xl sm:text-2xl md:text-3xl text-[#D5AD65] font-normal tracking-wide">
                  धारा
                </span>
              </div>

              {/* Subheading: A continuous stream, flow and movement */}
              <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#F8F7EF]/90 font-light tracking-wide mb-1.5">
                A continuous stream, flow and movement.
              </p>

              {/* Explanatory sentence */}
              <p className="text-xs sm:text-sm text-[#A0C4B8] font-light tracking-wide max-w-lg leading-relaxed">
                Compassion must keep moving — reaching, connecting and continuing.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* =========================================================================
          BOTTOM SECTION: TRIPLE LEAF MOTIF & SYNTHESIS STATEMENT
          "Samrakshan is the promise. Dhara is the flow that carries it forward."
          ========================================================================= */}
      <footer className="relative z-20 w-full pt-2 pb-8 sm:pb-12 px-6 sm:px-12 text-center max-w-4xl mx-auto">
        <div 
          className="space-y-4 transition-all duration-1000 ease-out"
          style={{
            opacity: statementOpacity,
            transform: `translateY(${statementTranslateY}px)`
          }}
        >
          {/* Central Golden Triple Leaf Motif (Exact match to reference) */}
          <div className="flex items-center justify-center">
            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" className="text-[#D5AD65] drop-shadow-[0_0_10px_rgba(213,173,101,0.5)]">
              {/* Center upright leaf */}
              <path 
                d="M17 2 C19 8, 22 14, 17 22 C12 14, 15 8, 17 2 Z" 
                fill="currentColor" 
                fillOpacity="0.85" 
              />
              {/* Left angled leaf */}
              <path 
                d="M15 14 C10 11, 4 13, 3 19 C8 21, 13 18, 15 14 Z" 
                fill="currentColor" 
                fillOpacity="0.75" 
              />
              {/* Right angled leaf */}
              <path 
                d="M19 14 C24 11, 30 13, 31 19 C26 21, 21 18, 19 14 Z" 
                fill="currentColor" 
                fillOpacity="0.75" 
              />
              {/* Subtle stem */}
              <path 
                d="M17 22 L17 26" 
                stroke="currentColor" 
                strokeWidth="1.2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>

          {/* Synthesis Statement */}
          <p className="font-serif italic text-lg sm:text-2xl md:text-[26px] text-[#F8F7EF] font-normal leading-relaxed tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            "Samrakshan is the promise. Dhara is the flow that carries it forward."
          </p>

          {/* Gentle exploration scroll anchor */}
          <div className="pt-1">
            <button
              type="button"
              onClick={handleScrollToStory}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#04201D]/70 hover:bg-[#073B43] border border-[#D5AD65]/35 text-[#D5AD65] hover:text-[#F8F7EF] text-xs font-mono tracking-wider uppercase backdrop-blur-md transition-all duration-300 shadow-sm cursor-pointer group"
            >
              <span>Explore Our Purpose</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};
