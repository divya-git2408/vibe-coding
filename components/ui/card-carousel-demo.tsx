import { CardCarousel } from "@/components/ui/card-carousel";

export default function CardCarouselDemo() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#18110E] via-[#120B08] to-[#0A0605] p-6 text-white font-sans">
      {/* Header Badge */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase bg-[#A3785E]/20 text-[#E8CF8D] border border-[#A3785E]/30 mb-3">
          ✦ Élan Atelier · Autumn/Winter '26
        </span>
        <h1 className="text-3xl md:text-4xl font-serif tracking-wider text-[#FAF6F0]">
          The Mocha Mousse Archive
        </h1>
        <p className="text-xs md:text-sm text-[#C9B09A] max-w-md mx-auto mt-2 font-light">
          Interactive kinetic card fan-out inspired by Paris Fashion Week runway reels and artisanal tailoring.
        </p>
      </div>

      {/* The Mocha Mousse Card Carousel */}
      <div className="w-full max-w-xl bg-[#221611]/60 backdrop-blur-2xl rounded-3xl p-8 border border-[#A3785E]/25 shadow-[0_24px_60px_rgba(20,12,8,0.7)]">
        <CardCarousel />
      </div>

      {/* Footer Info */}
      <p className="text-[11px] text-[#A3785E] mt-8 tracking-widest uppercase">
        Use Arrow Buttons or Click Cards to Navigate
      </p>
    </div>
  );
}
