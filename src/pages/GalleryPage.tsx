import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Maximize2, 
  Info,
  Filter
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/foundationData';

const CATEGORIES = [
  'All',
  'Nature',
  'Women & Communities',
  'Animal Welfare',
  'Plantation',
  'Waste & Cleanliness',
  'Children & Education',
  'Tyres',
  'E-Waste',
  'Heritage',
];

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIdx === null) return;
      if (e.key === 'Escape') setActiveLightboxIdx(null);
      if (e.key === 'ArrowRight') {
        setActiveLightboxIdx((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      }
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIdx((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIdx, filteredItems.length]);

  return (
    <div className="relative bg-[#073B43] text-[#F8F7EF]">
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#041F23] via-[#073B43] to-[#05282E] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#087F78]/50 border border-[#49CEC3]/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#D5AD65]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D5AD65]">
              Visual Showcase
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-[#F8F7EF]">
            Vision Gallery
          </h1>

          <p className="text-base sm:text-xl text-[#E6EEE7]/85 font-light max-w-2xl mx-auto leading-relaxed">
            A window into the living world we aspire to preserve — celebrating nature, compassionate animal care, and human solidarity.
          </p>

          <div className="pt-2 text-xs text-[#D5AD65] tracking-wider uppercase flex items-center justify-center gap-2 font-mono">
            <Info className="w-4 h-4" />
            <span>Illustrative Imagery · Original activity photography will be published post-launch</span>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-6 border-y border-white/10 bg-[#05282E]/90 sticky top-[72px] z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-mono uppercase text-[#D5AD65] flex items-center gap-1.5 shrink-0 mr-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </span>

            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#087F78] text-[#F8F7EF] shadow-md border border-[#49CEC3]/40 font-semibold'
                      : 'bg-white/5 hover:bg-white/10 text-[#E6EEE7]/80 hover:text-white border border-transparent'
                  }`}
                  aria-pressed={isSelected}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group rounded-3xl overflow-hidden bg-[#05282E] border border-white/10 hover:border-[#49CEC3]/40 transition-all duration-500 shadow-xl cursor-pointer flex flex-col"
              onClick={() => setActiveLightboxIdx(index)}
            >
              <div className="relative h-72 overflow-hidden bg-black/20">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05282E] via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#073B43]/85 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#D5AD65]">
                  {item.category}
                </div>

                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white/80 group-hover:bg-[#28A77B] group-hover:text-white transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#F8F7EF] group-hover:text-[#49CEC3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E6EEE7]/70 font-light mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#49CEC3] font-medium">
                  <span>Click to expand</span>
                  <span className="font-mono text-white/40">Illustrative</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Screen Lightbox Modal */}
      {activeLightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveLightboxIdx(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIdx((prev) =>
                prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
              );
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIdx((prev) =>
                prev !== null ? (prev + 1) % filteredItems.length : 0
              );
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#49CEC3]/30 max-h-[68vh] shadow-2xl">
              <img
                src={filteredItems[activeLightboxIdx].url}
                alt={filteredItems[activeLightboxIdx].title}
                className="max-h-[68vh] w-auto object-contain"
              />
            </div>

            <div className="text-center max-w-2xl px-4 space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#D5AD65]">
                {filteredItems[activeLightboxIdx].category}
              </span>
              <h3 className="font-serif text-2xl text-[#F8F7EF]">
                {filteredItems[activeLightboxIdx].title}
              </h3>
              <p className="text-xs text-[#E6EEE7]/80 font-light">
                {filteredItems[activeLightboxIdx].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
