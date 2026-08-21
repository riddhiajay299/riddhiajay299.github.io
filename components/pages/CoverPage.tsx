import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface PageProps {
  isVisible: boolean;
}

export default function CoverPage({ isVisible }: PageProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeVisible = isVisible || isMobile;

  useEffect(() => {
    if (typeof window === "undefined" || !bgRef.current) return;

    let bgInstance: any = null;

    const initBg = async () => {
      try {
        await import("../BackgroundWebGL");

        bgInstance = document.createElement("c-background");
        bgInstance.className = "absolute inset-0 w-full h-full pointer-events-none z-0";

        // Pass your custom colors here (supports hex values):
        bgInstance.setAttribute("color1", "#F9F2EC"); // E.g., Cream background
        bgInstance.setAttribute("color2", "#DBBA9E"); // E.g., Beige highlight

        bgRef.current?.appendChild(bgInstance);
      } catch (err) {
        console.error("Failed to load WebGL Background:", err);
      }
    };

    initBg();

    return () => {
      if (bgInstance) {
        bgInstance.remove();
      }
    };
  }, []);

  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-start pt-16 pb-8 md:py-16 px-6 md:px-12 bg-cream text-editorial-black transition-opacity duration-700 relative overflow-hidden ${activeVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      {/* WebGL Background Render Element */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />
      {/* 1. Full-Screen Background Image Card */}
      <div
        id="cover-portrait-wrapper"
        className="hidden md:block absolute inset-0 w-full h-full z-0 p-0 border-0 bg-transparent shadow-none rotate-0"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[calc(100vh*4/3)] max-h-[calc(100vw*3/4)] aspect-[4/3] [container-type:inline-size]">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/face.png"
              alt="Portrait Background"
              fill
              priority
              loading="eager"
              className="object-cover"
              sizes="100vw"
            />
            {/* Overlay texts grouped with the photo */}
            <p className="absolute bottom-[10%] left-[8%] text-[#DBBA9E] font-lexend font-bold text-[6.5cqw] leading-none select-none z-10 shadow-xl">Riddhi Goswami</p>
            <p className="absolute top-[20%] right-[10%] rotate-[25deg] text-[13cqw] font-kavoon font-bold text-[#DBBA9E] leading-none select-none z-10 shadow-xl">'22</p>
          </div>
        </div>
      </div>

      {/* Main Cover Body */}
      <div className="relative flex-grow flex flex-col md:grid md:grid-cols-12 items-center justify-start md:justify-between my-2 md:my-4 gap-3 md:gap-8 z-10 w-full pointer-events-none">



        {/* Left Editorial Info (Col Span 3) */}
        <div className={`w-full md:col-span-3 flex flex-col items-center md:items-start gap-2 text-center md:text-left z-10 pointer-events-auto transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}>

          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight leading-tight text-editorial-black ">
            The Digital
            <br className="hidden md:inline" />
            <span className="inline md:hidden"> </span>
            <span className="italic font-normal">Journal</span>
            <br className="inline md:hidden" />
            <span className="hidden md:inline"> </span>
            of a
            <br className="hidden md:inline" />
            <span className="inline md:hidden"> </span>
            Developer.
          </h2>
          <div className="w-12 h-[1px] bg-editorial-black/40 my-1"></div>
          <p className="text-xs uppercase tracking-wider leading-relaxed text-editorial-black/75 font-editorial">
            Computer Engineer <br />
            Frontend Developer <br />
            Creative Freelancer
          </p>
        </div>

        {/* Center space (Col Span 6) - Displays inline stacked photo card on mobile */}
        <div className="w-full md:col-span-6 flex justify-center items-center z-10 md:my-0 h-auto md:h-full pointer-events-auto">
          {/* Mobile inline photo */}
          <div className="block md:hidden w-full max-w-full aspect-[4/3] relative overflow-hidden [container-type:inline-size]">
            <Image
              src="/face.png"
              alt="Portrait Background Mobile"
              fill
              priority
              loading="eager"
              className="object-cover"
              sizes="100vw"
            />
            {/* Overlay texts grouped with the photo */}
            <p className="absolute bottom-[42%] left-[9.5%] text-[#DBBA9E] font-lexend font-bold text-[3cqw] select-none z-10 leading-none">Riddhi Goswami</p>
            <p className="absolute top-[10%] right-[20%] rotate-[25deg] text-[10cqw] font-kavoon font-bold text-[#DBBA9E] select-none z-10 leading-none">'22</p>
          </div>
        </div>

        {/* Right Details (Col Span 3) */}
        <div className={`w-full md:col-span-3 flex flex-col justify-center items-start md:items-end text-left md:text-right gap-3 z-10 self-stretch md:py-4 pointer-events-auto transition-all duration-1000 transform delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}>
          <div className="text-[10px] font-editorial uppercase tracking-widest text-editorial-black/40">
            Current Position
          </div>

          <div className="text-[9px] font-editorial uppercase tracking-widest text-beige-dark font-bold text-shadow-xs text-shadow-[#F9F2EC]">
            2026 – Present
          </div>
          <div className="text-xs font-semibold font-editorial text-editorial-black">
            Intern — Exactable
          </div>
          <div className="text-xs leading-relaxed text-editorial-black/75 max-w-[200px]">
            Focused on bridging high-level software architectures with fluid, interactive frontend designs.
          </div>

        </div>
      </div>

      {/* Bottom Right Page Number */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold">
        01 / 09
      </div>
    </div>
  );
}
