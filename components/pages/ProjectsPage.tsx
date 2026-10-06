import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Shield, MailOpen, Activity, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface PageProps {
  isVisible: boolean;
}

export default function ProjectsPage({ isVisible }: PageProps) {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      number: "1",
      title: "Opula",
      subtitle: "Jewellery E-Commerce & UI/UX",
      category: "E-Commerce & UI/UX",
      bgColor: "bg-[#FAF8F5]", // Cream
      textColor: "text-editorial-black",
      icon: Sparkles,
      image: "/opula-jewellery.png",
      tags: ["UI/UX Design", "Figma", "React / Next.js", "Tailwind CSS"],
      github: "",
      link: "https://example.com",
      description: "Designed and developed a premium, responsive jewellery website with a strong focus on UI/UX and visual aesthetics.",
      longDescription: "A high-end jewellery e-commerce platform designed from the ground up with meticulous attention to visual consistency, typography, and interactive components. Created complete Figma layouts, product showcase sections, hero banners, and interactive cart elements utilizing modern frontend technologies.",
      features: [
        "Curated luxury typography and high-fashion visual aesthetics",
        "Interactive product sections, category galleries, and promotional banners in Figma",
        "Responsive, fluid web layout built with React, Next.js, and Tailwind CSS"
      ]
    },
    {
      number: "2",
      title: "CyberShield",
      subtitle: "Threat Learning & Defense Platform",
      category: "Security Web Platform",
      bgColor: "bg-[#F5F2EB]", // Light Beige
      textColor: "text-editorial-black",
      icon: Shield,
      image: "/Cyber-security.png",
      tags: ["Cyber Security", "Threat Detection", "React", "Node.js"],
      github: "https://github.com/riddhiajay299/cyber-shield",
      link: "https://example.com",
      description: "A web platform focused on learning, detecting, and defending against digital threats. Developed during internship at GTU.",
      longDescription: "Developed as part of a 12-week internship at Gujarat Technological University, CyberShield acts as an educational and defensive utility for modern web environments. It features interactive learning resources, alert tracking, and foundational tools for analyzing security incidents.",
      features: [
        "Security awareness modules and interactive learning drills",
        "Interactive threat detection drills and simulated defense telemetry",
        "Clean, typography-driven administration reports"
      ]
    },
    {
      number: "3",
      title: "Think Before You Click",
      subtitle: "Anti-Phishing Browser Extension",
      category: "Browser Utility",
      bgColor: "bg-[#EFE6DD]", // Warm Sand
      textColor: "text-editorial-black",
      icon: MailOpen,
      image: "/think-before-you-click.png",
      tags: ["Security", "Chrome Extension", "JavaScript", "DOM Auditing"],
      github: "",
      link: "https://example.com",
      description: "A browser extension built to enhance user safety during web navigation by alerting users to suspicious elements.",
      longDescription: "Built as a protective overlay for web browsers, this extension inspects webpage URLs and active anchor tags in real-time. It protects users from social engineering and phishing attempts by highlighting risk-heavy fields and warning before navigation.",
      features: [
        "Real-time URL structure verification and malicious link interception",
        "Immediate safety warning popups and active click protection",
        "Minimalist JSON configuration and Chrome Extension API integration"
      ]
    },
    {
      number: "4",
      title: "Audio-to-Image",
      subtitle: "AI Auditory Synthesis Tool",
      category: "Generative AI Platform",
      bgColor: "bg-[#FAF8F5]", // Cream
      textColor: "text-editorial-black",
      icon: Activity,
      image: "/audio-to-image.png",
      tags: ["Generative AI", "Python", "Audio Processing", "Data Synthesis"],
      github: "",
      link: "https://example.com",
      description: "Developed during 3rd year of Engineering; utilizes AI principles to translate auditory data into visual representations.",
      longDescription: "A generative tool built to translate sound frequencies and audio amplitudes into visual graphics. By extracting spectral features of audio signals, it maps audio files into coherent synthetic images utilizing generative models.",
      features: [
        "Auditory spectral extraction and frequency mapping scripts",
        "Dynamic image synthesis pipelines using neural principles",
        "Custom rendering controls and audio file uploader"
      ]
    }
  ];

  const totalSlides = projects.length;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeProject = activeProjectIdx !== null ? projects[activeProjectIdx] : null;

  const getGlowColor = (bgColor: string) => {
    const match = bgColor.match(/#([a-fA-F0-9]{6})/);
    return match ? `#${match[1]}` : "#DBBA9E";
  };

  return (
    <div className="w-full h-auto flex flex-col justify-between pt-24 pb-8 px-6 md:px-12 bg-cream text-editorial-black relative">

      {/* Page Header */}
      <div className="w-full flex flex-row items-end justify-between gap-4 pb-3 border-b border-editorial-black/10 relative z-20">
        <div>
          <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
            03 / PORTFOLIO
          </span>
          <h1 className="text-2xl md:text-3xl font-light font-serif tracking-tight leading-tight text-editorial-black mt-0.5">
            Selected <span className="italic font-normal">Case Studies</span>
          </h1>
        </div>

        {/* Desktop Header Slide Counter & Arrows */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-editorial-black/60">
            <span>0{currentSlide + 1}</span>
            <span className="text-editorial-black/30">/</span>
            <span>0{projects.length}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              aria-label="Previous Case Study"
              className="p-2 rounded-full border border-editorial-black/15 hover:border-editorial-black hover:bg-editorial-black hover:text-cream transition-all duration-200 group focus:outline-none cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-editorial-black group-hover:text-cream transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Case Study"
              className="p-2 rounded-full border border-editorial-black/15 hover:border-editorial-black hover:bg-editorial-black hover:text-cream transition-all duration-200 group focus:outline-none cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 text-editorial-black group-hover:text-cream transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE / SMALL SCREENS: Sticky Stacking Cards (Like Education Cards) */}
      <div className="block md:hidden flex-col gap-8 my-6 w-full relative pb-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => setActiveProjectIdx(idx)}
            style={{
              top: `${76 + idx * 24}px`,
              zIndex: 10 + idx,
            }}
            className={`w-full flex flex-col justify-between p-6 mb-6 rounded-2xl border border-editorial-black/15 shadow-xl transition-all duration-300 sticky cursor-pointer ${proj.bgColor}`}
          >
            {/* Header inside each stacked card */}
            <div className="flex justify-between items-center pb-3 mb-3 border-b border-editorial-black/10 w-full">
              <span className="text-[9px] uppercase tracking-widest text-editorial-black/40 font-editorial font-bold">
                Case Study
              </span>
              <span className="text-xs font-mono font-bold text-editorial-black/60 tracking-widest">
                0{proj.number} / 0{projects.length}
              </span>
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-3 text-left w-full">
              <div className="flex flex-col gap-1 w-full">
                <span className="px-2.5 py-0.5 border border-editorial-black/25 rounded-full text-[8px] font-editorial uppercase tracking-widest w-fit bg-neutral-100/50">
                  {proj.category}
                </span>
                <h3 className="font-serif text-xl font-light leading-snug text-editorial-black mt-1">
                  {proj.title}
                </h3>
                <div className="w-8 h-[1px] bg-editorial-black/30 my-0.5"></div>
                <h4 className="font-serif italic font-normal text-xs text-beige-dark">
                  {proj.subtitle}
                </h4>
              </div>

              {/* Cutout Image Floating Thumbnail */}
              <div className="relative w-full aspect-[16/9] flex items-center justify-center my-1 overflow-visible">
                <div
                  className="absolute w-[80%] aspect-square rounded-full blur-xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: getGlowColor(proj.bgColor) }}
                />
                <div className="relative w-full h-full">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-contain filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.12)]"
                    sizes="100vw"
                  />
                </div>
              </div>

              {/* Description & Details */}
              <div className="flex flex-col gap-2.5 border-t border-editorial-black/10 pt-2.5 w-full">
                <p className="text-xs text-editorial-black/75 font-sans font-light leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1">
                  <div className="flex flex-wrap gap-1">
                    {proj.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[8px] font-editorial uppercase tracking-widest border border-editorial-black/20 bg-cream/70 text-editorial-black/85 font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[8px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
                    Tap to Inspect →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP / LARGE SCREENS: Compact Slider with Left & Right Floating Arrows */}
      <div className="hidden md:block relative w-full my-6">

        {/* Left Floating Arrow Button */}
        <button
          onClick={prevSlide}
          aria-label="Move slider left"
          className="absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 p-2.5 lg:p-3 rounded-full bg-[#FAF8F5]/95 backdrop-blur-md border border-editorial-black/15 shadow-md hover:shadow-xl hover:bg-editorial-black hover:text-cream text-editorial-black transition-all duration-200 group hover:scale-105 focus:outline-none cursor-pointer flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Right Floating Arrow Button */}
        <button
          onClick={nextSlide}
          aria-label="Move slider right"
          className="absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 p-2.5 lg:p-3 rounded-full bg-[#FAF8F5]/95 backdrop-blur-md border border-editorial-black/15 shadow-md hover:shadow-xl hover:bg-editorial-black hover:text-cream text-editorial-black transition-all duration-200 group hover:scale-105 focus:outline-none cursor-pointer flex items-center justify-center"
        >
          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Sliding Cards Track */}
        <div
          className="w-full overflow-hidden py-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out gap-5"
            style={{
              transform: `translateX(-${currentSlide * 310}px)`,
            }}
          >
            {projects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => setActiveProjectIdx(idx)}
                className={`min-w-[290px] max-w-[310px] ${proj.bgColor} border border-editorial-black/10 rounded-xl p-4 md:p-5 flex flex-col justify-between cursor-pointer hover:brightness-95 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden text-left select-none shrink-0`}
              >
                {/* Top: Category & Badge */}
                <div className="z-10 flex justify-between items-start w-full">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[8px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
                      0{proj.number} — {proj.category}
                    </span>
                    <span className="text-[9px] font-editorial uppercase tracking-wider text-editorial-black/50 font-semibold truncate max-w-[190px]">
                      {proj.subtitle}
                    </span>
                  </div>
                  <div className="p-1.5 rounded-full bg-editorial-black/5 group-hover:bg-[#dbba9e] group-hover:text-cream transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Middle: Compact Floating Cutout Image */}
                <div className="relative w-full h-32 md:h-36 flex items-center justify-center overflow-visible z-10 my-3">
                  {/* Soft backdrop radial glow */}
                  <div
                    className="absolute w-[75%] aspect-square rounded-full blur-xl opacity-20 group-hover:opacity-35 transition-all duration-300"
                    style={{ backgroundColor: getGlowColor(proj.bgColor) }}
                  />

                  {/* Floating Cutout Image */}
                  <div className="relative w-full h-full transform transition-all duration-300 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-contain filter drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_12px_16px_rgba(0,0,0,0.18)] transition-all duration-300"
                      sizes="300px"
                    />
                  </div>
                </div>

                {/* Bottom: Title, Description & Tags */}
                <div className="z-10 flex flex-col gap-1.5 mt-1 w-full">
                  <h3 className="font-serif text-lg md:text-xl font-light text-editorial-black group-hover:text-beige-dark transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] font-sans font-light leading-relaxed text-editorial-black/70 line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Divider & Tech Tags */}
                  <div className="pt-2.5 border-t border-editorial-black/10 mt-1.5 flex flex-wrap items-center justify-between gap-1.5">
                    <div className="flex flex-wrap gap-1">
                      {proj.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[7.5px] font-editorial uppercase tracking-widest border border-editorial-black/10 bg-cream text-editorial-black/60 rounded-full font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="text-[8px] font-editorial uppercase tracking-widest text-beige-dark font-bold group-hover:translate-x-0.5 transition-transform">
                      Specs →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer & Indicator Dots */}
      <div className="w-full flex justify-between items-center pt-2">
        <div className="hidden md:flex items-center gap-2">
          {projects.map((proj, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx
                ? "w-6 bg-editorial-black"
                : "w-2 bg-editorial-black/20 hover:bg-editorial-black/50"
                }`}
            />
          ))}
        </div>

        <div className="block md:hidden"></div>

        {/* Footer Number */}
        <div className="text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold">
          05 / 09
        </div>
      </div>

      {/* Case Study Details Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 w-full h-full bg-cream/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-12 transition-all duration-300">
          <div className="relative bg-cream border border-editorial-black/15 shadow-2xl w-full max-w-5xl h-[90vh] md:h-[80vh] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden transition-transform duration-500 scale-100 rounded-sm">

            {/* Modal Close Button */}
            <button
              onClick={() => setActiveProjectIdx(null)}
              className="absolute top-4 right-4 z-50 p-2 border border-editorial-black/10 hover:border-editorial-black rounded-full bg-cream hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-4 h-4 text-editorial-black" />
            </button>

            {/* Left Column: Project Identity & Details */}
            <div className={`w-full md:w-5/12 h-auto md:h-full ${activeProject.bgColor} border-b md:border-b-0 md:border-r border-editorial-black/10 p-6 md:p-12 flex flex-col justify-between text-left relative`}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <activeProject.icon className="w-4 h-4 text-editorial-black/60" />
                  <span className="text-[10px] font-editorial uppercase tracking-widest text-editorial-black/60 font-bold">
                    Project Specs
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-editorial uppercase tracking-widest text-editorial-black/50 font-bold">
                    {activeProject.category}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-normal text-editorial-black tracking-tight leading-tight">
                    {activeProject.title}
                  </h2>
                  <h4 className="text-xs font-editorial uppercase tracking-wider text-editorial-black/60 leading-relaxed font-semibold">
                    {activeProject.subtitle}
                  </h4>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {activeProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[9px] font-editorial uppercase tracking-widest border border-editorial-black/20 bg-cream/70 text-editorial-black/85 font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Case Study Details */}
            <div className="w-full md:w-7/12 h-auto md:h-full p-6 md:p-12 flex flex-col justify-start overflow-y-visible md:overflow-y-auto text-left bg-cream">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
                    Overview
                  </span>
                  <p className="text-sm md:text-base font-sans font-light leading-relaxed text-editorial-black/85 mt-2">
                    {activeProject.longDescription}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-editorial-black/10 my-2"></div>

                {/* Key Features List */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
                    Key Features & Deliverables
                  </span>
                  <ul className="list-disc pl-4 flex flex-col gap-2 text-xs md:text-sm font-sans text-editorial-black/75 leading-relaxed font-light">
                    {activeProject.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
