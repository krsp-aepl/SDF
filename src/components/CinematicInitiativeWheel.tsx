import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Sparkles,
  Compass
} from 'lucide-react';
import { SDFLogo } from './SDFLogo';
import { InitiativeStoryItem } from '../data/initiatives18Data';

interface CinematicInitiativeWheelProps {
  initiatives: InitiativeStoryItem[];
  selectedIndex: number;
  onSelectInitiative: (index: number) => void;
}

export const CinematicInitiativeWheel: React.FC<CinematicInitiativeWheelProps> = ({
  initiatives,
  selectedIndex,
  onSelectInitiative,
}) => {
  const total = initiatives.length; // 15
  const stepAngle = 360 / total; // 24 degrees per segment

  // Current rotation angle of the wheel (degrees)
  // At -90 degrees, item 0 is at the top focus position (12 o'clock)
  const [rotationAngle, setRotationAngle] = useState<number>(-90 - selectedIndex * stepAngle);
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [isSnapping, setIsSnapping] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const dragStartRef = useRef<{ x: number; y: number; startAngle: number } | null>(null);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-resume rotation after 8.5 seconds of inactivity
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    if (!isManuallyPaused) {
      inactivityTimerRef.current = setTimeout(() => {
        setIsSnapping(false);
        setIsAutoRotating(true);
      }, 8500); // 8.5 seconds
    }
  }, [isManuallyPaused]);

  // Smoothly rotate the wheel to bring item `index` to the TOP focus position (-90 deg)
  const rotateToItem = useCallback(
    (index: number, pause = true) => {
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);

      if (pause) {
        setIsAutoRotating(false);
        resetInactivityTimer();
      }

      setIsSnapping(true);

      const targetAngle = -90 - index * stepAngle;

      // Calculate shortest angular path (-180 to +180 deg delta)
      setRotationAngle((curr) => {
        const diff = ((((targetAngle - curr) % 360) + 540) % 360) - 180;
        return curr + diff;
      });

      onSelectInitiative(index);

      // Disable snapping transition after animation completes so continuous rotation is seamless
      snapTimeoutRef.current = setTimeout(() => {
        setIsSnapping(false);
      }, 1100);
    },
    [onSelectInitiative, resetInactivityTimer, stepAngle]
  );

  // Synchronize when selectedIndex changes externally
  useEffect(() => {
    const targetAngle = -90 - selectedIndex * stepAngle;
    setRotationAngle((curr) => {
      const diff = ((((targetAngle - curr) % 360) + 540) % 360) - 180;
      if (Math.abs(diff) < 0.5) return curr;
      return curr + diff;
    });
  }, [selectedIndex, stepAngle]);

  // Continuous, elegant automatic clockwise rotation on idle
  // Speed: ~6.5 degrees per second (smooth, clearly visible, 1 full rotation in ~55s)
  useEffect(() => {
    if (!isAutoRotating || isDragging || isSnapping) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
      return;
    }

    const degPerMs = 0.065; // ~3.9 deg/sec

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const delta = time - lastTimeRef.current;
        setRotationAngle((prev) => prev + delta * degPerMs);
      }
      lastTimeRef.current = time;
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAutoRotating, isDragging, isSnapping]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      if (snapTimeoutRef.current) clearTimeout(snapTimeoutRef.current);
    };
  }, []);

  // Handle Drag & Swipe on the wheel
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsAutoRotating(false);
    setIsSnapping(false);
    setIsDragging(true);

    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const currentPointerAngle =
      Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startAngle: rotationAngle - currentPointerAngle,
    };

    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStartRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const currentPointerAngle =
      Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);

    const newAngle = dragStartRef.current.startAngle + currentPointerAngle;
    setRotationAngle(newAngle);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    dragStartRef.current = null;

    // Find the item closest to the TOP (-90 degrees)
    const unnormalizedIndex = (-90 - rotationAngle) / stepAngle;
    let closestIndex = Math.round(unnormalizedIndex) % total;
    if (closestIndex < 0) closestIndex += total;

    rotateToItem(closestIndex, true);
  };

  // Step Controls (Next / Prev)
  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % total;
    rotateToItem(nextIndex, true);
  };

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + total) % total;
    rotateToItem(prevIndex, true);
  };

  // Toggle Manual Pause / Resume
  const togglePlayPause = () => {
    if (isAutoRotating) {
      setIsAutoRotating(false);
      setIsManuallyPaused(true);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    } else {
      setIsManuallyPaused(false);
      setIsSnapping(false);
      setIsAutoRotating(true);
    }
  };

  // Keyboard Navigation (Left / Right Arrow, Spacebar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const selectedItem = initiatives[selectedIndex] || initiatives[0];

  return (
    <div className="relative w-full flex flex-col items-center select-none pt-2 pb-10 sm:pb-14 overflow-hidden">
      {/* =======================================================================
          TOP FOCUS CREST & ACTIVE INITIATIVE REVEAL
          Indicates the active 12 o'clock focus position
          ======================================================================= */}
      <div className="relative z-30 mb-5 sm:mb-7 text-center flex flex-col items-center">
        {/* Needle / Crest Pointer pointing to top segment */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D5AD65] via-[#FFF2B8] to-[#9E7A2A] p-0.5 shadow-lg shadow-[#D5AD65]/35 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#073B43] flex items-center justify-center text-[#D5AD65]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="w-0.5 h-3 bg-gradient-to-b from-[#D5AD65] to-transparent" />
        </div>

        {/* Selected Initiative Title Pill */}
        <div className="mt-2 inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-[#05282E]/95 border border-[#D5AD65]/40 backdrop-blur-md shadow-2xl shadow-black/50">
          <span className="font-mono text-xs font-bold text-[#D5AD65] tracking-wider">
            {selectedItem.number}
          </span>
          <span className="text-stone-400 text-xs">/</span>
          <span className="text-xs sm:text-sm font-serif font-medium text-[#F8F7EF] tracking-wide">
            {selectedItem.title}
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#49CEC3]" />
          <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider text-[#49CEC3]">
            {selectedItem.category}
          </span>
        </div>
      </div>

      {/* =======================================================================
          THE CIRCULAR PHOTO WHEEL
          Uses GPU-accelerated CSS rotation with zero layout lag
          ======================================================================= */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-[340px] h-[340px] sm:w-[540px] sm:h-[540px] lg:w-[620px] lg:h-[620px] rounded-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: 'none' }}
        aria-label="Interactive Circular Initiative Reel"
        role="region"
      >
        {/* Background Ambient Rings */}
        <div className="absolute inset-0 rounded-full border border-[#49CEC3]/20 shadow-[0_0_90px_rgba(8,127,120,0.3)] pointer-events-none" />
        <div className="absolute inset-6 rounded-full border border-dashed border-[#D5AD65]/25 pointer-events-none" />
        <div className="absolute inset-14 rounded-full border border-[#49CEC3]/10 pointer-events-none" />

        {/* =====================================================================
            1. ROTATING WHEEL RING
            Rotates around center via transform: rotate(...)
            ===================================================================== */}
        <div
          className="absolute inset-0 origin-center"
          style={{
            transform: `rotate(${rotationAngle}deg)`,
            transition: isSnapping ? 'transform 1050ms cubic-bezier(0.2, 0.9, 0.3, 1)' : 'none',
          }}
        >
          {initiatives.map((item, index) => {
            // Fixed angle position on the ring (constant)
            const itemFixedAngle = index * stepAngle;
            const rad = (itemFixedAngle * Math.PI) / 180;

            // Percentage positioning from center (constant, zero layout recalculation)
            const radiusPercent = 40.5;
            const posX = 50 + radiusPercent * Math.cos(rad);
            const posY = 50 + radiusPercent * Math.sin(rad);

            const isSelected = index === selectedIndex;

            return (
              <div
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  rotateToItem(index, true);
                }}
                style={{
                  left: `${posX}%`,
                  top: `${posY}%`,
                  // Counter-rotate the child card by -rotationAngle so it stays perfectly upright!
                  // When selected, apply the Rising Initiative scale & elevation!
                  transform: `translate(-50%, -50%) rotate(${-rotationAngle}deg) ${
                    isSelected ? 'scale(1.28) translateY(-8px)' : 'scale(1)'
                  }`,
                  transition: isSnapping
                    ? 'transform 1050ms cubic-bezier(0.2, 0.9, 0.3, 1)'
                    : 'none',
                  zIndex: isSelected ? 40 : 10,
                }}
                className="absolute cursor-pointer group"
              >
                {/* Individual Segment Capsule */}
                <div
                  className={`relative w-[68px] h-[86px] sm:w-[94px] sm:h-[120px] lg:w-[104px] lg:h-[132px] rounded-2xl overflow-hidden transition-all duration-300 ${
                    isSelected
                      ? 'ring-2 ring-[#D5AD65] shadow-[0_0_35px_rgba(213,173,101,0.65),0_0_15px_rgba(73,206,195,0.4)] opacity-100'
                      : 'ring-1 ring-white/15 opacity-60 hover:opacity-95 hover:ring-[#49CEC3]/70'
                  }`}
                >
                  {/* Photo Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark Vignette & Shading */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-t from-black/80 via-transparent to-black/20'
                        : 'bg-gradient-to-t from-black/85 via-black/25 to-black/35'
                    }`}
                  />

                  {/* Segment Number Badge */}
                  <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                    <span
                      className={`font-mono text-[9px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-[#D5AD65] text-[#073B43]'
                          : 'bg-black/75 text-white border border-white/20'
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Selected Active Glow Dot */}
                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#49CEC3] animate-ping" />
                  )}

                  {/* Segment Bottom Title Snippet */}
                  <div className="absolute bottom-1 inset-x-1 text-center">
                    <p
                      className={`font-serif text-[8px] sm:text-[10px] leading-tight line-clamp-2 px-1 ${
                        isSelected ? 'text-[#F8F7EF] font-semibold' : 'text-[#E6EEE7]/80'
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================================
            2. FIXED STATIONARY CENTER DISC (Features Authentic SDF Logo)
            Outside the rotating ring: NEVER rotates, stays perfectly anchored!
            ===================================================================== */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[230px] lg:h-[230px] rounded-full z-20 pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-[#084852] via-[#05282E] to-[#031C20] border-2 border-[#D5AD65]/50 shadow-[0_0_50px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center p-3 text-center relative">
            {/* Concentric Golden Rings */}
            <div className="absolute inset-2.5 rounded-full border border-[#49CEC3]/25" />
            <div className="absolute inset-5 rounded-full border border-dashed border-[#D5AD65]/30" />

            {/* Official SDF Logo (Stationary) */}
            <div className="relative z-10 flex items-center justify-center">
              <SDFLogo size={70} showText={false} className="sm:scale-115 lg:scale-125" />
            </div>

            {/* Inscribed Foundation Title */}
            <div className="relative z-10 mt-1">
              <span className="block font-serif text-[9px] sm:text-[11px] font-semibold text-[#D5AD65] tracking-[0.22em] uppercase">
                SAMRAKSHAN DHARA
              </span>
              <span className="block font-mono text-[7px] sm:text-[8px] tracking-[0.3em] text-[#49CEC3] uppercase">
                FOUNDATION
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =======================================================================
          CONTROLS BAR: PREV, PLAY/PAUSE, NEXT & STATUS
          ======================================================================= */}
      <div className="mt-8 flex flex-col items-center gap-3 z-30">
        <div className="flex items-center justify-center gap-3 sm:gap-5">
          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#05282E] border border-[#49CEC3]/30 text-[#F8F7EF] hover:text-[#49CEC3] hover:border-[#49CEC3] hover:bg-[#073B43] transition-all shadow-md active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3]"
            aria-label="Previous Initiative"
            title="Previous Cause (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pause / Resume Rotation Control Button */}
          <button
            type="button"
            onClick={togglePlayPause}
            className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-mono text-xs tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer border ${
              isAutoRotating
                ? 'bg-[#087F78]/40 border-[#49CEC3]/50 text-[#49CEC3] hover:bg-[#087F78]/60'
                : 'bg-[#05282E] border-[#D5AD65]/50 text-[#D5AD65] hover:bg-[#073B43]'
            }`}
            aria-label={isAutoRotating ? 'Pause Rotation' : 'Resume Rotation'}
            title="Toggle Auto-Rotation (Spacebar)"
          >
            {isAutoRotating ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>PAUSE ROTATION</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>RESUME ROTATION</span>
              </>
            )}
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#05282E] border border-[#49CEC3]/30 text-[#F8F7EF] hover:text-[#49CEC3] hover:border-[#49CEC3] hover:bg-[#073B43] transition-all shadow-md active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49CEC3]"
            aria-label="Next Initiative"
            title="Next Cause (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* State Information Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#E6EEE7]/70">
          {isAutoRotating ? (
            <span className="inline-flex items-center gap-1.5 text-[#49CEC3]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#49CEC3] animate-pulse" />
              <span>Slow continuous rotation active</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[#D5AD65]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5AD65]" />
              <span>
                {isManuallyPaused
                  ? 'Rotation paused'
                  : 'Paused for reading · Resumes automatically'}
              </span>
            </span>
          )}
        </div>
      </div>

      {/* Exploration Hint */}
      <div className="mt-2 text-center text-xs text-[#E6EEE7]/50 font-light flex items-center justify-center gap-2">
        <Compass className="w-3.5 h-3.5 text-[#D5AD65]" />
        <span>Select any cause to bring it into focus. Drag or swipe the wheel to explore.</span>
      </div>
    </div>
  );
};
