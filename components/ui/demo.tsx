import * as React from "react";
import { CardCarousel } from "@/components/ui/card-carousel";
import GlassCard from "@/components/ui/glass-card";

export function CardCarouselDemo() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#140E0C]">
      <CardCarousel />
    </div>
  );
}

export function GlassCardDemo() {
  return (
    <div className="flex min-h-[460px] w-full items-center justify-center bg-gradient-to-br from-[#18110E] via-[#211714] to-[#120B08] p-10">
      <GlassCard
        title="Mocha Mousse"
        tagline="Velvety roasted cacao, whipped Mongolian cashmere & warm bronze tailoring."
        badge="ATELIER PRIVATE SALON"
      />
    </div>
  );
}

export default function Demo() {
  return <CardCarouselDemo />;
}
