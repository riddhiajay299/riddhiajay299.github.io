import React, { useEffect, useState } from "react";
import Image from "next/image";

interface PageProps {
  isVisible: boolean;
}

export default function AboutPage({ isVisible }: PageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeVisible = isVisible || isMobile;

  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-center py-8 md:py-16 px-6 md:px-12 bg-cream text-editorial-black transition-opacity duration-700 relative ${activeVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      {/* Main Grid */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-8 md:my-12 w-full">
        {/* Left: Biography Details */}
        <div className={`lg:col-span-7 flex flex-col gap-6 text-left transition-all duration-1000 transform ${activeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
            The Narrative
          </span>
          <h1 className="text-4xl md:text-5xl font-light font-serif tracking-tight leading-tight text-editorial-black">
            About me!<br />
            <span className="italic font-normal"></span>
          </h1>
          <div className="w-12 h-[1px] bg-editorial-black/30"></div>

          <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed text-editorial-black/80 font-light font-sans max-w-2xl">
            <p>
              I am a <strong className="font-semibold text-editorial-black">Computer Engineering student</strong> who lives at the intersection of logical engineering and elegant frontend architecture. To me, a computer is a canvas, and code is the brush that breathes life into static designs.
            </p>
            <p>
              My journey began with a deep curiosity about how systems run, which evolved into a focus on <strong className="font-semibold text-editorial-black">interactive digital experiences</strong>. I build websites that do not simply display information, but tell stories through motion design, fluid interfaces, and micro-animations.
            </p>
            <p>
              As a freelancer and designer, I cooperate with brands and clients to create custom products that stand out. With every project, my target is simple: to make digital interactions feel tactile, premium, and human.
            </p>
          </div>
        </div>

        {/* Right: Graphic Card and Quote */}
        <div className="lg:col-span-5 flex flex-col gap-8 justify-center items-center lg:items-end w-full">
          {/* Stylized Image wrapper */}
          <div
            id="about-portrait-wrapper"
            className="hidden lg:block relative w-[85%] aspect-[4/3] [container-type:inline-size]"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/face.png"
                alt="Portrait Secondary"
                fill
                sizes="(max-width: 768px) 340px, 400px"
                className="object-cover"
              />
              {/* Overlay texts grouped with the photo */}
              <p className="absolute bottom-[40%] left-[8%] text-[#DBBA9E] font-lexend font-bold text-[5cqw] lg:text-[3cqw] leading-none select-none z-10">Riddhi Goswami</p>
              <p className="absolute top-[15%] right-[20%] rotate-[25deg] text-[10cqw] lg:text-[7cqw] font-kavoon font-bold text-[#DBBA9E] leading-none select-none z-10">'22</p>
            </div>
          </div>

          {/* Quote Block */}
          <div className={`border-l-2 border-beige pl-6 max-w-sm text-left lg:text-right lg:border-l-0 lg:border-r-2 lg:pr-6 transition-all duration-1000 transform delay-200 ${activeVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}>
            <p className="font-serif italic text-lg leading-relaxed text-editorial-black/70">
              "Technology becomes beautiful only when it matches the rhythm of human expression."
            </p>
            <span className="block mt-2 text-[10px] font-editorial uppercase tracking-widest text-editorial-black/40">
              — Design Philosophy
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Right Page Number */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold">
        02 / 09
      </div>
    </div>
  );
}
