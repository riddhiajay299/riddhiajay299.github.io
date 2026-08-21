"use client";

import React, { useState, useEffect, useRef } from "react";

// HTML Page Components
import CoverPage from "@/components/pages/CoverPage";
import AboutPage from "@/components/pages/AboutPage";
import EducationPage from "@/components/pages/EducationPage";
import SkillsPage from "@/components/pages/SkillsPage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import ExperiencePage from "@/components/pages/ExperiencePage";
import CertificatesPage from "@/components/pages/CertificatesPage";
import ServicesPage from "@/components/pages/ServicesPage";
import ContactPage from "@/components/pages/ContactPage";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BrandedLoader } from "@/components/pages/BrandedLoader";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalPages = 9;

  // Helper to calculate the exact viewport coordinates of the letterboxed image within its contain container
  const getContainedImageRect = (rect: DOMRect, imageRatio: number) => {
    const containerRatio = rect.width / rect.height;
    let w = rect.width;
    let h = rect.height;
    let x = rect.left;
    let y = rect.top;

    if (containerRatio > imageRatio) {
      // Height-constrained (black bars/empty space on left and right)
      w = rect.height * imageRatio;
      x = rect.left + (rect.width - w) / 2;
    } else {
      // Width-constrained (black bars/empty space on top and bottom)
      h = rect.width / imageRatio;
      y = rect.top + (rect.height - h) / 2;
    }

    return { left: x, top: y, width: w, height: h };
  };

  // Track the scroll position to highlight the active dot indicator and morph the photo
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;

      setIsScrolled(scrollTop > 10);

      // Determine active section based on actual page element offsets
      const cover = document.getElementById("cover-section-wrapper");
      const about = document.getElementById("about-section-wrapper");
      const sec2 = document.getElementById("page-section-2");
      const sec3 = document.getElementById("page-section-3");
      const sec4 = document.getElementById("page-section-4");
      const sec5 = document.getElementById("page-section-5");
      const sec6 = document.getElementById("page-section-6");
      const sec7 = document.getElementById("page-section-7");
      const sec8 = document.getElementById("page-section-8");

      const offsets = [
        { index: 0, el: cover },
        { index: 1, el: about },
        { index: 2, el: sec2 },
        { index: 3, el: sec3 },
        { index: 4, el: sec4 },
        { index: 5, el: sec5 },
        { index: 6, el: sec6 },
        { index: 7, el: sec7 },
        { index: 8, el: sec8 },
      ];

      const isMobile = window.innerWidth < 768;
      const viewportMid = scrollTop + clientHeight / 2;
      let activeIndex = 0;

      if (!isMobile) {
        if (viewportMid < clientHeight) {
          activeIndex = 0;
        } else if (viewportMid < clientHeight * 2) {
          activeIndex = 1;
        } else {
          activeIndex = 2; // Fallback
          for (let i = 2; i < offsets.length; i++) {
            const item = offsets[i];
            if (item.el) {
              const top = item.el.offsetTop;
              if (viewportMid >= top) {
                activeIndex = item.index;
              }
            }
          }
        }
      } else {
        // Mobile offset loop (using offsetTop from parent container offsets)
        for (let i = 0; i < offsets.length; i++) {
          const item = offsets[i];
          if (item.el) {
            const stickyParent = document.getElementById("sticky-hero-container");
            const parentOffset = (item.index === 0 || item.index === 1) && stickyParent ? stickyParent.offsetTop : 0;
            const top = item.el.offsetTop + parentOffset;
            if (viewportMid >= top) {
              activeIndex = item.index;
            }
          }
        }
      }

      setCurrentSection(activeIndex);

      // 2. Smooth Parallax Shared Photo Morph between Page 1 and Page 2
      const coverCard = document.getElementById("cover-portrait-wrapper");
      const aboutCard = document.getElementById("about-portrait-wrapper");
      const floatingCard = document.getElementById("floating-portrait-card");

      if (coverCard && aboutCard && floatingCard) {
        if (scrollTop < clientHeight && clientHeight > 0 && !isMobile) {
          const scrollRatio = scrollTop / clientHeight;

          // Measure current bounding rects relative to viewport
          const rawCoverRect = coverCard.getBoundingClientRect();
          const rawAboutRect = aboutCard.getBoundingClientRect();
          const imageAspectRatio = 4 / 3;

          // Calculate exact rendering boundaries
          const startRect = getContainedImageRect(rawCoverRect, imageAspectRatio);
          const endRect = getContainedImageRect(rawAboutRect, imageAspectRatio);

          // Linearly interpolate positions and dimensions based on scroll progression
          const currentLeft = startRect.left + (endRect.left - startRect.left) * scrollRatio;
          const currentTop = startRect.top + (endRect.top - startRect.top) * scrollRatio;
          const currentWidth = startRect.width + (endRect.width - startRect.width) * scrollRatio;
          const currentHeight = startRect.height + (endRect.height - startRect.height) * scrollRatio;

          // Set floating card geometry
          floatingCard.style.display = "block";
          floatingCard.style.left = `${currentLeft}px`;
          floatingCard.style.top = `${currentTop}px`;
          floatingCard.style.width = `${currentWidth}px`;
          floatingCard.style.height = `${currentHeight}px`;

          // Hide stationary duplicates to preserve illusion
          coverCard.style.visibility = "hidden";
          aboutCard.style.visibility = "hidden";
        } else {
          // Past the About Page transition: clean handoff to native cards
          floatingCard.style.display = "none";
          coverCard.style.visibility = "visible";
          aboutCard.style.visibility = "visible";
        }
      }

      // 3. Adjust Sticky Cover and About page opacities and pointer events
      const coverSection = document.getElementById("cover-section-wrapper");
      const aboutSection = document.getElementById("about-section-wrapper");

      if (coverSection && aboutSection) {
        if (isMobile) {
          // Reset styles for mobile normal scroll (no animation)
          coverSection.style.opacity = "1";
          coverSection.style.pointerEvents = "auto";
          aboutSection.style.opacity = "1";
          aboutSection.style.pointerEvents = "auto";
        } else {
          if (scrollTop < clientHeight && clientHeight > 0) {
            const ratio = scrollTop / clientHeight;
            coverSection.style.opacity = (1 - ratio).toString();
            coverSection.style.pointerEvents = ratio < 0.5 ? "auto" : "none";

            aboutSection.style.opacity = ratio.toString();
            aboutSection.style.pointerEvents = ratio >= 0.5 ? "auto" : "none";
          } else {
            coverSection.style.opacity = "0";
            coverSection.style.pointerEvents = "none";

            aboutSection.style.opacity = "1";
            aboutSection.style.pointerEvents = "auto";
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // Initialize coordinate calculations on mount
    setTimeout(handleScroll, 100);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Smooth scroll to a specific section
  const scrollToSection = (idx: number) => {
    const container = containerRef.current;
    if (container) {
      if (idx === 0) {
        container.scrollTo({ top: 0, behavior: "smooth" });
      } else if (idx === 1) {
        container.scrollTo({ top: container.clientHeight, behavior: "smooth" });
      } else {
        const el = document.getElementById(`page-section-${idx}`);
        if (el) {
          container.scrollTo({
            top: el.offsetTop - 64,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <main
      ref={containerRef}
      className="relative w-full h-screen overflow-y-auto scroll-smooth bg-cream select-none"
    >
      <BrandedLoader onComplete={() => setLoading(false)} />
      {/* Water glass transparent fixed navigation bar */}
      <nav className={`fixed top-0 left-0 right-0 h-16 transition-all duration-300 z-[80] flex items-center justify-between px-6 md:px-12 select-none ${isScrolled
        ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-editorial-black/5"
        : "bg-transparent border-b border-transparent"
        }`}
        style={{
          opacity: loading ? 0 : 1,
          pointerEvents: loading ? "none" : "auto",
          transition: "opacity 1.2s ease-in-out, background-color 0.3s, backdrop-filter 0.3s, border-color 0.3s"
        }}
      >
        <div className="relative h-32 w-36 cursor-pointer -ml-4 md:ml-0" onClick={() => { scrollToSection(0); setIsMenuOpen(false); }}>
          <Image
            src="/sign.png"
            alt="Signature"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 py-1">
          {[
            { label: "Cover", index: 0 },
            { label: "About", index: 1 },
            { label: "Academics", index: 2 },
            { label: "Skills", index: 3 },
            { label: "Projects", index: 4 },
            { label: "Experience", index: 5 },
            { label: "Certs", index: 6 },
            { label: "Services", index: 7 },
            { label: "Contact", index: 8 }
          ].map((item) => (
            <button
              key={item.index}
              onClick={() => scrollToSection(item.index)}
              className={`text-[10px] font-editorial uppercase tracking-widest transition-all duration-300 font-bold whitespace-nowrap ${currentSection === item.index
                ? "text-editorial-black border-b border-editorial-black pb-0.5"
                : "text-editorial-black/50 hover:text-editorial-black"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="flex md:hidden p-2 text-editorial-black/70 hover:text-editorial-black focus:outline-none z-[90]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="absolute top-16 right-6 w-52 bg-[#FAF8F5]/95 backdrop-blur-md border border-editorial-black/10 rounded-lg shadow-xl py-4 flex flex-col items-center justify-center gap-3 md:hidden transition-all duration-300 z-[90]">
            {[
              { label: "Cover", index: 0 },
              { label: "About", index: 1 },
              { label: "Academics", index: 2 },
              { label: "Skills", index: 3 },
              { label: "Projects", index: 4 },
              { label: "Experience", index: 5 },
              { label: "Certs", index: 6 },
              { label: "Services", index: 7 },
              { label: "Contact", index: 8 }
            ].map((item) => (
              <button
                key={item.index}
                onClick={() => {
                  scrollToSection(item.index);
                  setIsMenuOpen(false);
                }}
                className={`text-xs font-editorial uppercase tracking-widest transition-all duration-300 font-bold py-1 w-full text-center hover:text-beige-dark ${currentSection === item.index
                  ? "text-editorial-black font-extrabold"
                  : "text-editorial-black/50 hover:text-editorial-black"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Pages Container Stacked Vertically */}
      <div 
        className="w-full flex flex-col"
        style={{
          opacity: loading ? 0 : 1,
          pointerEvents: loading ? "none" : "auto",
          transition: "opacity 1.2s ease-in-out"
        }}
      >
        {/* Sticky Hero Transition Container for Page 1 & 2 */}
        <div id="sticky-hero-container" className="relative w-full h-auto md:h-[200vh] shrink-0 flex flex-col md:block">
          <div className="relative md:sticky md:top-0 w-full h-auto md:h-screen overflow-visible md:overflow-hidden flex flex-col md:block">

            {/* Cover Page wrapper */}
            <div
              id="cover-section-wrapper"
              className="relative md:absolute md:inset-0 w-full h-auto md:h-full transition-opacity duration-100 ease-out"
            >
              <CoverPage isVisible={currentSection === 0} />
            </div>

            {/* About Page wrapper */}
            <div
              id="about-section-wrapper"
              className="relative md:absolute md:inset-0 w-full h-auto md:h-full transition-opacity duration-100 ease-out opacity-100 md:opacity-0 md:pointer-events-none"
            >
              <AboutPage isVisible={currentSection === 1} />
            </div>

          </div>
        </div>

        {/* Page 3 to 9 - Scroll continuously like a PDF */}
        <div id="page-section-2" className="w-full h-auto shrink-0 relative">
          <EducationPage isVisible={currentSection === 2} />
        </div>

        <div id="page-section-3" className="w-full h-auto shrink-0">
          <SkillsPage isVisible={currentSection === 3} />
        </div>

        <div id="page-section-4" className="w-full h-auto shrink-0">
          <ProjectsPage isVisible={currentSection === 4} />
        </div>

        <div id="page-section-5" className="w-full h-auto shrink-0">
          <ExperiencePage isVisible={currentSection === 5} />
        </div>

        <div id="page-section-6" className="w-full h-auto shrink-0">
          <CertificatesPage isVisible={currentSection === 6} />
        </div>

        <div id="page-section-7" className="w-full h-auto shrink-0">
          <ServicesPage isVisible={currentSection === 7} />
        </div>

        {/* Scrolling Word Marquee Banner */}
        <div className="w-full overflow-hidden bg-editorial-black py-5 select-none relative z-10 border-y border-editorial-black/10">
          <div className="animate-marquee flex gap-8">
            <span className="font-editorial uppercase tracking-widest text-[11px] text-beige-dark font-bold whitespace-nowrap">
              GET IN TOUCH ——— LET'S COLLABORATE ——— AVAILABLE FOR FREELANCE ——— SOFTWARE ENGINEERING ——— GET IN TOUCH ——— LET'S COLLABORATE ——— AVAILABLE FOR FREELANCE ——— SOFTWARE ENGINEERING ———
            </span>
            <span className="font-editorial uppercase tracking-widest text-[11px] text-beige-dark font-bold whitespace-nowrap">
              GET IN TOUCH ——— LET'S COLLABORATE ——— AVAILABLE FOR FREELANCE ——— SOFTWARE ENGINEERING ——— GET IN TOUCH ——— LET'S COLLABORATE ——— AVAILABLE FOR FREELANCE ——— SOFTWARE ENGINEERING ———
            </span>
          </div>
        </div>

        <div id="page-section-8" className="w-full h-auto shrink-0">
          <ContactPage
            isVisible={currentSection === 8}
            onScrollToTop={() => scrollToSection(0)}
          />
        </div>
      </div>

      {/* Floating Card for Shared Element Transition (4:3 Aspect Ratio) */}
      <div
        id="floating-portrait-card"
        className="fixed z-[60] pointer-events-none transform-gpu [container-type:inline-size]"
        style={{ display: "none" }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/face.png"
            alt="Floating Portrait"
            className="w-full h-full object-cover"
          />
          {/* Overlay texts grouped with the photo */}
          <p className="absolute bottom-[40%] left-[8%] text-[#DBBA9E] font-lexend font-bold text-[3cqw] leading-none select-none z-10 text-shadow-2xs  text-shadow-[#F9F2EC]">Riddhi Goswami</p>
          <p className="absolute top-[15%] right-[20%] rotate-[25deg] text-[7cqw] font-kavoon font-bold text-[#DBBA9E] leading-none select-none z-10 text-shadow-2xs text-shadow-[#F9F2EC]">'22</p>
        </div>
      </div>

      {/* Side Navigation Dots Overlay */}
      <div 
        className="hidden md:flex fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex-col gap-4 z-40"
        style={{
          opacity: loading ? 0 : 1,
          pointerEvents: loading ? "none" : "auto",
          transition: "opacity 0.8s ease-in-out"
        }}
      >
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(idx)}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label={`Go to page ${idx + 1}`}
          >
            <span className="text-[10px] font-editorial font-bold uppercase tracking-widest text-editorial-black/0 group-hover:text-editorial-black/60 transition-all duration-300 select-none">
              0{idx + 1}
            </span>
            <div
              className={`w-2 h-2 rounded-full border border-editorial-black/30 transition-all duration-300 ${currentSection === idx
                ? "bg-editorial-black scale-125 border-editorial-black"
                : "bg-transparent group-hover:bg-[#FAF8F5] group-hover:scale-110"
                }`}
            />
          </button>
        ))}
      </div>
    </main>
  );
}
