import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, PhoneCall } from 'lucide-react';

interface CinematicVintageTelephoneProps {
  onRingComplete?: () => void;
}

export const CinematicVintageTelephone: React.FC<CinematicVintageTelephoneProps> = ({
  onRingComplete,
}) => {
  // Animation phases: 'entering' -> 'ringing' -> 'idle'
  const [animPhase, setAnimPhase] = useState<'entering' | 'ringing' | 'idle'>('entering');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [userInteracted, setUserInteracted] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Play a soft, nostalgic dual-tone analog telephone bell using Web Audio API
  const playVintageChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Realistic dual frequency for vintage telephone bells (440Hz + 480Hz)
      const frequencies = [440, 480];

      frequencies.forEach((freq) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Slight metallic vibrato
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(12, now); // 12Hz bell strike flutter
        lfoGain.gain.setValueAtTime(3.5, now);
        lfo.connect(osc.frequency);
        lfo.start(now);
        lfo.stop(now + 1.6);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Soft strike attack, gentle resonant decay
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.09, now + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.55);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.6);
      });
    } catch {
      // Audio fallback silent if browser blocks
    }
  };

  // Step 1 to 4: Entrance & Settling (2.3s)
  useEffect(() => {
    const ringTimer = setTimeout(() => {
      setAnimPhase('ringing');
      if (soundEnabled) {
        playVintageChime();
      }
    }, 2300);

    // Step 7: Transition to subtle resting idle after ~5.8s
    const idleTimer = setTimeout(() => {
      setAnimPhase('idle');
      onRingComplete?.();
    }, 5800);

    return () => {
      clearTimeout(ringTimer);
      clearTimeout(idleTimer);
    };
  }, [onRingComplete, soundEnabled]);

  // Handle explicit toggle of sound
  const handleToggleSound = () => {
    setUserInteracted(true);
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playVintageChime();
    }
  };

  // User click on receiver to re-trigger gentle ring & sway
  const handleReceiverClick = () => {
    setUserInteracted(true);
    setAnimPhase('ringing');
    if (soundEnabled) {
      playVintageChime();
    }
    setTimeout(() => {
      setAnimPhase('idle');
    }, 3800);
  };

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[340px] flex flex-col items-center select-none">
      {/* =======================================================================
          ANIMATED SUSPENDED TELEPHONE RECEIVER ASSEMBLY
          ======================================================================= */}
      <div
        onClick={handleReceiverClick}
        className={`relative z-10 cursor-pointer group transition-transform ${
          animPhase === 'entering'
            ? 'animate-telephone-entrance'
            : animPhase === 'idle'
            ? 'animate-telephone-idle'
            : 'animate-telephone-idle'
        }`}
        style={{ transformOrigin: 'top center' }}
        title="Vintage Samrakshan Dhara Telephone Receiver — Click to Ring"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleReceiverClick();
          }
        }}
        aria-label="Interactive vintage telephone receiver"
      >
        {/* =====================================================================
            VINTAGE HANDSET CONTAINER & ART-DIRECTED SHADOW
            ===================================================================== */}
        <div className="relative flex items-center justify-center">
          {/* Natural drop shadow cast behind receiver */}
          <div className="absolute inset-x-6 bottom-4 h-5/6 bg-black/60 rounded-full blur-2xl -rotate-12 pointer-events-none transform translate-y-4" />

          {/* Deep Emerald Vintage Receiver Image */}
          <div className="relative w-[240px] sm:w-[270px] lg:w-[310px] max-w-[325px] h-[360px] sm:h-[425px] lg:h-[470px] overflow-visible">
            <img
              src="/telephone_isolated.png"
              alt="Vintage Dark Emerald Telephone Receiver"
              className="w-full h-full object-contain object-center drop-shadow-[0_24px_36px_rgba(0,0,0,0.5)] group-hover:brightness-110 transition-all duration-300"
            />

            {/* Subtle golden ambient reflection sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D5AD65]/10 to-transparent pointer-events-none rounded-3xl mix-blend-overlay" />
          </div>

          {/* ===================================================================
              SUBTLE ELEGANT SOUND-WAVE RINGS (Steps 5 & 6)
              Radiates outward from earpiece & mouthpiece
              =================================================================== */}
          {animPhase === 'ringing' && (
            <div className="absolute top-1/4 right-0 sm:-right-4 w-28 h-36 pointer-events-none">
              {/* Concentric Gold Arc Soundwaves */}
              <svg
                viewBox="0 0 100 120"
                className="w-full h-full overflow-visible text-[#D5AD65]"
                fill="none"
              >
                {/* Wave Arc 1 */}
                <path
                  d="M 15 25 A 35 35 0 0 1 50 15 M 10 50 A 55 55 0 0 1 65 30 M 8 80 A 70 70 0 0 1 80 50"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="animate-sound-wave-1 opacity-90 drop-shadow-[0_0_8px_rgba(213,173,101,0.6)]"
                />
                {/* Wave Arc 2 */}
                <path
                  d="M 22 18 A 45 45 0 0 1 70 12 M 16 45 A 65 65 0 0 1 85 24 M 14 75 A 80 80 0 0 1 95 45"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="animate-sound-wave-2 opacity-75 drop-shadow-[0_0_10px_rgba(213,173,101,0.5)]"
                />
                {/* Wave Arc 3 */}
                <path
                  d="M 28 12 A 55 55 0 0 1 85 8 M 22 38 A 75 75 0 0 1 98 18 M 18 68 A 95 95 0 0 1 110 38"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  className="animate-sound-wave-3 opacity-60 drop-shadow-[0_0_12px_rgba(213,173,101,0.4)]"
                />
              </svg>
            </div>
          )}

          {/* ===================================================================
              HANDWRITTEN "Tring... Tring..." CALLIGRAPHIC REVEAL (Step 6)
              =================================================================== */}
          {(animPhase === 'ringing' || animPhase === 'idle') && (
            <div
              className={`absolute top-1/3 -right-6 sm:-right-10 pointer-events-none transition-all duration-700 ${
                animPhase === 'ringing'
                  ? 'opacity-100 scale-100 animate-tring'
                  : 'opacity-70 scale-95'
              }`}
            >
              <div className="flex flex-col items-start leading-tight">
                <span
                  className="font-handwritten text-2xl sm:text-3xl text-[#D5AD65] -rotate-6 tracking-wide drop-shadow-[0_2px_10px_rgba(213,173,101,0.5)]"
                  style={{ textShadow: '0 0 16px rgba(213, 173, 101, 0.45)' }}
                >
                  Tring...
                </span>
                <span
                  className="font-handwritten text-2xl sm:text-3xl text-[#D5AD65] -rotate-3 ml-4 mt-0.5 tracking-wide drop-shadow-[0_2px_10px_rgba(213,173,101,0.5)]"
                  style={{ textShadow: '0 0 16px rgba(213, 173, 101, 0.45)' }}
                >
                  Tring...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =======================================================================
          AUDIO CHIME CONTROLLER (Muted by default per specification)
          ======================================================================= */}
      <div className="mt-4 flex items-center gap-2.5 z-20">
        <button
          type="button"
          onClick={handleToggleSound}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 border backdrop-blur-md cursor-pointer ${
            soundEnabled
              ? 'bg-[#D5AD65]/20 border-[#D5AD65]/60 text-[#D5AD65] shadow-lg shadow-[#D5AD65]/15'
              : 'bg-black/35 border-white/15 text-[#E6EEE7]/70 hover:text-white hover:border-white/30'
          }`}
          aria-label={soundEnabled ? 'Mute Vintage Chime' : 'Enable Vintage Chime'}
          title="Toggle Authentic Vintage Bell Sound (Muted by default)"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#D5AD65]" />
              <span>Chime Active</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span>Sound: Muted</span>
            </>
          )}
        </button>

        {/* Small subtle tap-to-ring prompt */}
        <a
          href="tel:+919241826243"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#D5AD65]/10 hover:bg-[#D5AD65]/20 text-[11px] font-mono text-[#F1D9A3] border border-[#D5AD65]/40 transition-colors cursor-pointer"
          title="Call SDF at +91 9241826243"
          aria-label="Tap to Ring: call SDF at +91 9241826243"
        >
          <PhoneCall className="w-3 h-3 text-[#D5AD65]" />
          <span>Tap to Ring · Call</span>
        </a>
      </div>

      {userInteracted && !soundEnabled && (
        <p className="mt-1.5 text-[10px] text-[#E6EEE7]/50 font-light">
          Audio is muted by default. Click &apos;Sound: Muted&apos; to enable bell.
        </p>
      )}
    </div>
  );
};
