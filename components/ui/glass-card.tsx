import * as React from "react";
import { Instagram, Twitter, Github, ChevronDown, Sparkles } from "lucide-react";

const ElanMonogram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    {...props}
  >
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="'Cinzel', serif"
      fontSize="20"
      fontWeight="700"
    >
      É
    </text>
  </svg>
);

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  tagline?: string;
  badge?: string;
  onViewMore?: () => void;
  socials?: {
    instagram?: string;
    twitter?: string;
    github?: string;
  };
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      className = "",
      title = "Mocha Mousse",
      tagline = "Velvety roasted cacao, whipped cashmere & architectural warm bronze tailoring.",
      badge = "HAUTE CAPSULE",
      onViewMore,
      socials = {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`group h-[320px] w-[300px] [perspective:1000px] select-none ${className}`}
        {...props}
      >
        {/* Main 3D Card Shell with Mocha Mousse Warm Cacao & Espresso Gradient */}
        <div className="relative h-full rounded-[44px] bg-gradient-to-br from-[#2D1D17] via-[#1E130E] to-[#0E0806] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] border border-[#D4A373]/20 group-hover:[box-shadow:rgba(45,29,23,0.6)_30px_50px_35px_-25px,rgba(212,163,115,0.15)_0px_25px_40px_0px] group-hover:[transform:rotate3d(1,1,0,26deg)]">
          
          {/* Frosted Glass Whipped Mousse Inlay */}
          <div className="absolute inset-2.5 rounded-[38px] border-b border-l border-[#E3D5C8]/25 bg-gradient-to-b from-[#E3D5C8]/20 via-[#C8B6A6]/10 to-transparent backdrop-blur-md [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>

          {/* Editorial Content Layer */}
          <div className="absolute [transform:translate3d(0,0,28px)] w-full">
            <div className="px-7 pt-[75px] pb-0">
              
              {/* Badge */}
              <div className="flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#D4A373] uppercase">
                  {badge}
                </span>
              </div>

              {/* Title in Mocha Cream */}
              <h3 className="block text-2xl font-serif font-bold text-[#F5ECE5] tracking-wide leading-tight">
                {title}
              </h3>

              {/* Tagline */}
              <p className="mt-3 block text-[13px] text-[#C8B6A6] font-sans leading-relaxed opacity-90">
                {tagline}
              </p>
            </div>
          </div>

          {/* Bottom Action Row: Socials & "View More" */}
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,28px)]">
            <div className="flex gap-2 [transform-style:preserve-3d]">
              {[
                { icon: Instagram, href: socials.instagram, delay: "350ms" },
                { icon: Twitter, href: socials.twitter, delay: "500ms" },
                { icon: Github, href: socials.github, delay: "650ms" },
              ].map(({ icon: Icon, href, delay }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social grid h-[32px] w-[32px] place-content-center rounded-full border border-[#D4A373]/30 bg-[#2D1D17]/80 backdrop-blur-md shadow-[rgba(0,0,0,0.4)_0px_5px_10px_-2px] transition-all duration-300 ease-out group-hover:[box-shadow:rgba(212,163,115,0.3)_-5px_15px_15px_0px] group-hover:[transform:translate3d(0,0,45px)] hover:bg-[#D4A373] hover:border-[#D4A373]"
                  style={{ transitionDelay: delay }}
                >
                  <Icon className="h-3.5 w-3.5 stroke-[#E3D5C8] group-hover/social:stroke-[#18110E] transition-colors" />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={onViewMore}
              className="flex items-center gap-1 cursor-pointer transition-all duration-300 ease-out border-none bg-transparent hover:[transform:translate3d(0,0,15px)] group/btn"
            >
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#E3D5C8] group-hover/btn:text-[#D4A373] transition-colors">
                Explore
              </span>
              <ChevronDown className="h-3.5 w-3.5 stroke-[#D4A373] group-hover/btn:translate-y-0.5 transition-transform" strokeWidth={2.5} />
            </button>
          </div>

          {/* Staggered Frosted Mocha Concentric Circles with 3D Depth */}
          <div className="absolute top-0 right-0 [transform-style:preserve-3d] pointer-events-none">
            {[
              { size: "175px", pos: "8px", z: "20px", delay: "0s", opacity: "bg-[#D4A373]/10" },
              { size: "145px", pos: "12px", z: "40px", delay: "0.35s", opacity: "bg-[#C8B6A6]/12" },
              { size: "115px", pos: "18px", z: "60px", delay: "0.7s", opacity: "bg-[#E3D5C8]/15" },
              { size: "85px", pos: "24px", z: "80px", delay: "1.05s", opacity: "bg-[#F5ECE5]/18" },
            ].map((circle, index) => (
              <div
                key={index}
                className={`absolute aspect-square rounded-full ${circle.opacity} border border-[#D4A373]/15 shadow-[rgba(0,0,0,0.2)_-8px_8px_18px_0px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]`}
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              />
            ))}

            {/* Atelier Crest Seal in 3D Space */}
            <div
              className="absolute grid aspect-square w-[52px] place-content-center rounded-full bg-gradient-to-br from-[#D4A373] to-[#A26D3F] border border-[#F5ECE5]/30 shadow-[0_10px_25px_rgba(212,163,115,0.4)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:translate3d(0,0,105px)] [transition-delay:1.4s] group-hover:[transform:translate3d(0,0,130px)]"
              style={{ top: "28px", right: "28px" }}
            >
              <ElanMonogram className="w-6 h-6 text-[#18110E]" />
            </div>
          </div>

        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
