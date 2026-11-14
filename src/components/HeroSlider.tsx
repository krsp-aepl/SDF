import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, ChevronLeft, ChevronRight, ArrowRight, Compass } from 'lucide-react';
import { EarthGlobe3D } from './EarthGlobe3D';

interface HeroSlide {
  id: number;
  category: string;
  quote: string;
  tagline: string;
  bgType: 'webgl-earth' | 'image-women' | 'image-puppy';
  mediaUrl?: string;
  videoUrl?: string; // Video-ready support for direct MP4 replacement
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    category: "EARTH & NATURE",
    quote: "Protecting Nature. Preserving Life.",
    tagline: "One planet, countless lives — a future worth protecting together.",
    bgType: "webgl-earth",
  },
  {
    id: 1,
    category: "HUMANITY & WOMEN EMPOWERMENT",
    quote: "When Women Rise, Communities Flourish.",
    tagline: "Empowering women, strengthening communities, and inspiring generations.",
    bgType: "image-women",
    // Bright, beautiful, realistic Indian women in warm natural sunlight
    mediaUrl: "/images/women_empowerment.jpg",
    videoUrl: "/videos/women_empowerment.mp4",
  },
  {
    id: 2,
    category: "ANIMAL WELFARE",
    quote: "Every Life Deserves Compassion.",
    tagline: "Because kindness is measured by how we care for those without a voice.",
    bgType: "image-puppy",
    // Heartwarming golden puppy emotional center
    mediaUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=2200&q=85",
  },
];

const SLIDE_DURATION_MS = 6000;

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const startTimeRef = useRef<number>(Date.now());
  const elapsedBeforePauseRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  const goToSlide = useCallback((newIndex: number) => {
    setCurrentSlide(newIndex);
    setProgress(0);
    startTimeRef.current = Date.now();
    elapsedBeforePauseRef.current = 0;
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % HERO_SLIDES.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [currentSlide, goToSlide]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // 6-second timer loop using requestAnimationFrame for smooth progress indicator
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    startTimeRef.current = Date.now() - elapsedBeforePauseRef.current;

    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min((elapsed / SLIDE_DURATION_MS) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= SLIDE_DURATION_MS) {
        nextSlide();
      } else {
        animFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      elapsedBeforePauseRef.current = (progress / 100) * SLIDE_DURATION_MS;
    };
  }, [isPlaying, currentSlide, nextSlide]);

  // Pause when tab is hidden and resume when visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        setIsPlaying(false);
      } else if (document.visibilityState === 'visible') {
        setIsPlaying(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === ' ') {
        // Space to toggle pause/play if target is not input
        if (
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement
        ) return;
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-[#073B43] overflow-hidden select-none"
      aria-label="Cinematic Showcase of Samrakshan Dhara Foundation"
    >
      {/* =========================================================================
          LAYER 1: BACKGROUND SCENE (Exactly one visual scene per slide)
          All visual movement happens in this background layer.
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              {/* SLIDE 01: Three.js 3D Realistic Rotating Earth */}
              {slide.bgType === 'webgl-earth' && (
                <div className="relative w-full h-full">
                  {/* Subtle cosmic deep teal ambient gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#041F23] via-[#073B43] to-[#0A2E35]" />
                  {/* 3D WebGL Earth Canvas */}
                  <EarthGlobe3D isPaused={!isPlaying} />
                  {/* Atmospheric soft light sweep */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(73,206,195,0.18)_0%,transparent_60%)] pointer-events-none" />
                </div>
              )}

              {/* SLIDE 02: Full-screen bright, beautiful Indian women in natural sunlight */}
              {slide.bgType === 'image-women' && (
                <div className="relative w-full h-full overflow-hidden bg-[#241a12]">
                  {/* Video support: if videoUrl is provided, it seamlessly loops */}
                  {slide.videoUrl && (
                    <video
                      src={slide.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover object-center z-0"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}

                  {/* High-resolution realistic cinematic background image with smooth pan-zoom */}
                  <img
                    src={slide.mediaUrl}
                    alt="Confident, smiling Indian women coming together in community solidarity"
                    className={`absolute inset-0 w-full h-full object-cover object-[center_30%] ${
                      isPlaying ? 'animate-women-pan-zoom' : ''
                    } transition-transform duration-[14000ms] ease-out will-change-transform`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />

                  {/* Natural warm lighting vignette only — strictly NO dark teal wash hiding the women */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 pointer-events-none" />
                </div>
              )}

              {/* SLIDE 03: Golden puppy emotional center with soft warm lighting */}
              {slide.bgType === 'image-puppy' && (
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={slide.mediaUrl}
                    alt="Gentle golden puppy looking up with trust and innocence"
                    className={`w-full h-full object-cover object-[center_35%] ${
                      isPlaying ? 'animate-kenburns' : ''
                    } transition-transform duration-[10000ms] ease-out`}
                    loading="lazy"
                  />
                  {/* Golden compassion vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#073B43]/85 via-[#073B43]/20 to-transparent pointer-events-none" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          LAYER 2: CONTRAST LAYER
          Slide-aware readability:
          - Slide 2 (Women Empowerment): NO dark teal gradient! Only a gentle, narrow neutral shadow behind text on the left so the women remain 100% visible, bright, and vibrant.
          - Slide 1 & 3: Deep teal backdrop gradients for celestial/puppy contrast.
          ========================================================================= */}
      {currentSlide === 1 ? (
        <>
          {/* Subtle neutral left gradient only behind the headline text — NO dark teal */}
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-black/65 via-black/20 to-transparent w-full sm:w-[54%] md:w-[48%]" />
          <div className="absolute inset-x-0 bottom-0 h-32 z-20 pointer-events-none bg-gradient-to-t from-black/50 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-[#041F23]/92 via-[#073B43]/65 to-transparent w-full md:w-[68%] lg:w-[58%]" />
          <div className="absolute inset-x-0 bottom-0 h-40 z-20 pointer-events-none bg-gradient-to-t from-[#073B43] to-transparent" />
          <div className="absolute inset-x-0 top-0 h-32 z-20 pointer-events-none bg-gradient-to-b from-[#041F23]/80 to-transparent" />
        </>
      )}

      {/* =========================================================================
          LAYER 3: CONTENT LAYER
          Typography, Tagline, and CTA Buttons (aligned with ample negative space)
          ========================================================================= */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl pt-16 sm:pt-12">
          {/* Category Tagline */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="w-8 h-[2px] bg-[#49CEC3]" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-[#49CEC3]">
              {activeSlide.category}
            </span>
          </div>

          {/* Main Cinematic Quote (Graceful Editorial Serif) */}
          <h1
            key={`quote-${activeSlide.id}`}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#F8F7EF] leading-[1.08] mb-4 sm:mb-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out"
          >
            {activeSlide.quote}
          </h1>

          {/* Tagline */}
          <p
            key={`tagline-${activeSlide.id}`}
            className="text-base sm:text-xl font-light text-[#E6EEE7] leading-relaxed max-w-xl mb-8 sm:mb-10 drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)] transition-all duration-700 delay-100 ease-out"
          >
            {activeSlide.tagline}
          </p>

          {/* Dual Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-[#087F78] hover:bg-[#28A77B] text-[#F8F7EF] font-medium text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#087F78]/30 hover:shadow-xl hover:shadow-[#28A77B]/40 group"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#49CEC3]" />
            </Link>

            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#073B43]/60 hover:bg-[#073B43] border border-[#49CEC3]/40 hover:border-[#49CEC3] text-[#F8F7EF] font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-300"
            >
              <span>Get Involved With SDF</span>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LAYER 4: NAVIGATION & CONTROLS LAYER
          3 Functional progress bars, play/pause, prev/next arrows
          ========================================================================= */}
      <div className="absolute z-40 bottom-8 sm:bottom-10 inset-x-0 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-white/10 pt-5">
          {/* Three Slide Progress Bars */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 max-w-md">
            {HERO_SLIDES.map((slide, idx) => {
              const isCurrent = idx === currentSlide;
              const isPast = idx < currentSlide;
              const progressWidth = isCurrent ? `${progress}%` : isPast ? '100%' : '0%';

              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className="group flex-1 py-2 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3]"
                  aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                  aria-current={isCurrent ? 'true' : 'false'}
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold text-white/60 group-hover:text-white mb-1.5 transition-colors">
                    <span>0{idx + 1}</span>
                    <span className="hidden sm:inline font-mono tracking-wider opacity-70">
                      {idx === 0 ? 'EARTH' : idx === 1 ? 'HUMANITY' : 'COMPASSION'}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-[#28A77B] to-[#49CEC3] transition-all duration-75 rounded-full ${
                        isCurrent ? '' : 'transition-all duration-300'
                      }`}
                      style={{ width: progressWidth }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Navigation Controls: Play/Pause, Prev, Next */}
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
            {/* Play / Pause Toggle */}
            <button
              onClick={togglePlay}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F7EF] border border-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3]"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-[#49CEC3]" />
              ) : (
                <Play className="w-4 h-4 text-[#D5AD65] translate-x-0.5" />
              )}
            </button>

            {/* Previous Slide */}
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F7EF] border border-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3]"
              aria-label="Previous slide"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Slide */}
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F7EF] border border-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3]"
              aria-label="Next slide"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
