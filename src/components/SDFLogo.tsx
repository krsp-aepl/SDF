import React from 'react';

export interface SDFLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'light' | 'dark' | 'color';
  imageOnly?: boolean;
}

/**
 * OfficialSDFLogo / SDFLogo
 * The single global official logo component for Samrakshan Dhara Foundation.
 * References the exact official logo asset stored at /assets/sdf-official-logo.png
 * without altering, cropping, recoloring, or removing its authentic elements.
 */
export const SDFLogo: React.FC<SDFLogoProps> = ({
  className = '',
  size = 50,
  showText = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Neutral clean container for the official logo artwork */}
      <div 
        className="relative bg-white rounded-full p-1 border border-[#D5AD65]/40 shadow-sm shrink-0 flex items-center justify-center overflow-hidden aspect-square transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src="/assets/sdf-official-logo.png"
          alt="Samrakshan Dhara Foundation Official Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Official Foundation Name */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif tracking-tight leading-none text-base sm:text-lg font-semibold text-[#F8F7EF] group-hover:text-[#49CEC3] transition-colors">
            SAMRAKSHAN DHARA
          </span>
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.22em] text-[#D5AD65] uppercase mt-0.5">
            FOUNDATION
          </span>
        </div>
      )}
    </div>
  );
};

// Also export as OfficialSDFLogo for explicit naming per guidelines
export const OfficialSDFLogo = SDFLogo;
