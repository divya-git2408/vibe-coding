import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

/**
 * Mocha Mousse Haute Couture Asset Collection
 * High-resolution verified editorial fashion photography featuring warm roasted cacao,
 * whipped Mongolian cashmere, espresso velvet, and latte tones.
 */
export const MOCHA_MOUSSE_ASSETS = [
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    title: "Mocha Silk Slip",
    subtitle: "Fluid Mulberry Silk & Cowl Drape",
    id: "look-2",
  },
  {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    title: "Cacao Cashmere Coat",
    subtitle: "Double-Faced Biella Wool & Horn Buttons",
    id: "look-1",
  },
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    title: "Espresso Velvet Tuxedo",
    subtitle: "Silk Faille Lapels & Golden Stitching",
    id: "look-3",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    title: "Warm Amber Column Gown",
    subtitle: "Hand-Pleated Organza & Gold Foil",
    id: "look-4",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    title: "Latte Froth Opera Cape",
    subtitle: "Brushed Mohair & Satin Binding",
    id: "look-5",
  },
  {
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=80",
    title: "Roasted Hazelnut Trench",
    subtitle: "Heavyweight Gabardine & Storm Flap",
    id: "look-6",
  },
];

export interface CardCarouselItem {
  src: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export interface CardCarouselProps {
  hovered?: boolean;
  className?: string;
  images?: CardCarouselItem[];
  isMonochrome?: boolean;
  onSelect?: (item: CardCarouselItem, index: number) => void;
}

export const CardCarousel = React.memo(function CardCarousel({
  hovered,
  className = "",
  images = MOCHA_MOUSSE_ASSETS,
  isMonochrome = false,
  onSelect,
}: CardCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const active = hovered !== undefined ? hovered : isHovered;

  const toPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const toNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  const toSlide = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setActiveIndex(index);
    if (onSelect) {
      onSelect(images[index], index);
    }
  };

  const slideWidth = 160;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`w-full flex flex-col items-center justify-center relative overflow-hidden select-none py-6 ${className}`}
    >
      {/* Subtle Mocha Mousse Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-40 bg-[#A3785E]/15 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true" 
      />

      {/* Carousel Stage Wrapper */}
      <div
        className="relative h-[210px] flex items-center justify-start overflow-visible z-10"
        style={{ width: `${slideWidth}px` }}
      >
        {/* Animated Slides Container */}
        <motion.div
          className="flex w-fit items-center"
          animate={{ x: -activeIndex * slideWidth }}
          transition={{ type: "spring", bounce: 0.12, duration: 0.8 }}
        >
          {images.map((item, i) => {
            const isActive = activeIndex === i;
            const diff = i - activeIndex;

            // Perspective fan-out dynamics in Mocha Mousse warmth
            const targetRotate = active ? diff * 18 : diff * 4;
            const targetScale = isActive ? 1.08 : active ? 0.68 : 0.82;
            const targetY = active ? diff * 22 : 0;

            return (
              <motion.div
                key={i}
                className="shrink-0 flex flex-col items-center gap-2 will-change-[transform,scale] cursor-pointer"
                style={{ width: `${slideWidth}px` }}
                animate={{
                  rotate: targetRotate,
                  scale: targetScale,
                  y: targetY,
                }}
                transition={{ type: "spring", bounce: 0.22, duration: 0.85 }}
                onClick={(e) => toSlide(e, i)}
              >
                {/* Silhouette Title with Runway Font & Mocha Mousse Accent */}
                <div
                  className={`text-[10px] md:text-xs font-serif tracking-widest uppercase whitespace-nowrap transition-all duration-300 text-center ${
                    isActive
                      ? "opacity-100 scale-100 text-[#FAF6F0] drop-shadow-[0_2px_8px_rgba(26,15,10,0.9)]"
                      : "opacity-0 scale-75 text-[#B89073]"
                  }`}
                >
                  <div className="flex items-center gap-1 justify-center">
                    {isActive && <Sparkles className="w-2.5 h-2.5 text-[#E8CF8D]" />}
                    <span>{isMonochrome ? `SILHOUETTE ${i + 1}` : item.title}</span>
                  </div>
                </div>

                {/* Card Container: Monochrome or Rich Mocha Editorial Photograph */}
                {isMonochrome ? (
                  <div
                    className={`w-[115px] h-[115px] rounded-2xl flex flex-col items-center justify-center font-bold text-sm transition-all duration-300 shadow-xl ${
                      isActive
                        ? "bg-gradient-to-br from-[#4A3227] to-[#261711] border-2 border-[#E8CF8D] text-[#FAF6F0] shadow-[0_12px_32px_rgba(38,23,17,0.7)]"
                        : "bg-gradient-to-br from-[#2E1D16] to-[#1A100C] border border-[#A3785E]/30 text-[#A3785E]"
                    }`}
                  >
                    <span className="font-serif text-lg tracking-wider">0{i + 1}</span>
                    <span className="text-[9px] uppercase tracking-widest text-[#B89073] mt-0.5">Atelier</span>
                  </div>
                ) : (
                  <div className="relative group/card">
                    <img
                      src={item.src}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className={`w-[115px] h-[115px] object-cover rounded-2xl shadow-xl transition-all duration-300 ${
                        isActive
                          ? "border-2 border-[#E8CF8D] shadow-[0_14px_36px_rgba(30,17,12,0.8),0_0_20px_rgba(181,138,109,0.35)] brightness-105"
                          : "border border-[#A3785E]/30 brightness-85 hover:brightness-95 hover:border-[#A3785E]/60"
                      }`}
                    />
                    {/* Delicate luxury satin border highlight on active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20 pointer-events-none" />
                    )}
                  </div>
                )}

                {/* Subtitle tag on active card */}
                {isActive && item.subtitle && (
                  <span className="text-[9px] text-[#C9B09A] font-sans tracking-wide max-w-[140px] truncate text-center opacity-85">
                    {item.subtitle}
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Mocha Mousse Controls Capsule */}
      <div className="mt-5 px-2 py-1 flex items-center gap-2.5 justify-center text-[#C9B09A] rounded-full bg-[#241712]/85 backdrop-blur-xl border border-[#A3785E]/35 shadow-[0_10px_28px_rgba(20,12,8,0.6)] z-20">
        {/* Prev Button */}
        <button
          onClick={toPrev}
          type="button"
          disabled={activeIndex === 0}
          aria-label="Previous Silhouette"
          className="p-1.5 cursor-pointer rounded-full transition-all duration-200 border-0 bg-transparent text-[#C9B09A] hover:text-[#FAF6F0] hover:bg-[#A3785E]/25 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Slide Dots with Mocha Mousse Warm Amber Highlights */}
        <div className="flex justify-center items-center gap-1.5 px-1">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={(e) => toSlide(e, i)}
              className={`rounded-full cursor-pointer h-1.5 transition-all duration-300 border-0 p-0 ${
                activeIndex === i
                  ? "w-5 bg-gradient-to-r from-[#B58A6D] to-[#E8CF8D] shadow-[0_0_10px_rgba(181,138,109,0.7)]"
                  : "w-1.5 bg-[#A3785E]/35 hover:bg-[#A3785E]/70"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={toNext}
          type="button"
          disabled={activeIndex === images.length - 1}
          aria-label="Next Silhouette"
          className="p-1.5 cursor-pointer rounded-full transition-all duration-200 border-0 bg-transparent text-[#C9B09A] hover:text-[#FAF6F0] hover:bg-[#A3785E]/25 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
});

export default CardCarousel;
