import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Shield, MailOpen, Activity, Receipt } from "lucide-react";

interface PageProps {
  isVisible: boolean;
}

export default function ProjectsPage({ isVisible }: PageProps) {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      number: "1",
      title: "CyberShield",
      subtitle: "GTU Internship - Threat Learning & Defense Platform",
      category: "Security Web Platform",
      bgColor: "bg-[#FAF8F5]", // Cream
      textColor: "text-editorial-black",
      icon: Shield,
      image: "/Cyber-security.png",
      tags: ["Cyber Security", "Threat Detection", "React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/riddhiajay299/cyber-shield",
      link: "https://example.com",
      description: "A web platform focused on learning, detecting, and defending against digital threats. Developed during internship at GTU.",
      longDescription: "Developed as part of a 12-week internship at Gujarat Technological University, CyberShield acts as an educational and defensive utility for modern web environments. It features interactive learning resources, alert tracking, and foundational tools for analyzing security incidents.",
      features: [
        "Security awareness modules and learning logs",
        "Interactive threat detection drills and simulated defenses",
        "Clean, typography-driven administration reports"
      ]
    },
    {
      number: "2",
      title: "Think Before You Click",
      subtitle: "GTU Internship - Anti-Phishing Browser Extension",
      category: "Browser Utility",
      bgColor: "bg-[#F5F2EB]", // Light Beige
      textColor: "text-editorial-black",
      icon: MailOpen,
      image: "/think-before-you-click.png",
      tags: ["Security", "Chrome Extension", "JavaScript", "DOM Auditing", "JSON"],
      github: "",
      link: "https://example.com",
      description: "A browser extension built to enhance user safety during web navigation by alerting users to suspicious elements.",
      longDescription: "Built as a protective overlay for web browsers, this extension inspects webpage URLs and active anchor tags in real-time. It protects users from social engineering and phishing attempts by highlighting risk-heavy fields and warning before navigation.",
      features: [
        "Real-time URL structure verification",
        "Immediate safety warning popups and click blocks",
        "Minimalist JSON configuration and Chrome Extension API integration"
      ]
    },
    {
      number: "3",
      title: "Audio-to-Image",
      subtitle: "AI Auditory Synthesis Tool",
      category: "Generative AI Platform",
      bgColor: "bg-[#EFE6DD]", // Warm Sand
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
    },
    {
      number: "4",
      title: "Bill Generator",
      subtitle: "Automated Invoicing & Receipt System",
      category: "Invoicing Tool",
      bgColor: "bg-[#D9CFC1]", // Soft Sand-Taupe
      textColor: "text-editorial-black",
      icon: Receipt,
      image: "/bill-generator.png",
      tags: ["React", "LocalStorage", "Invoice Generation", "Tailwind CSS", "PDF Export"],
      github: "",
      link: "https://example.com",
      description: "A web utility designed to simplify invoice creation, client tracking, and instant PDF receipt generation.",
      longDescription: "Developed as a client-side invoicing utility to help freelancers and small businesses generate, format, and download professional PDF receipts instantly. Features live tax calculation, line item customization, and offline data persistence.",
      features: [
        "Live invoice preview with dynamic tax and discount calculations",
        "One-click PDF generation and local receipt download",
        "Local client details library and invoice history persistence"
      ]
    }
  ];

  const activeProject = activeProjectIdx !== null ? projects[activeProjectIdx] : null;

  const getGlowColor = (bgColor: string) => {
    const match = bgColor.match(/#([a-fA-F0-9]{6})/);
    return match ? `#${match[1]}` : "#DBBA9E";
  };

  return (
    <div className="w-full h-auto flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 bg-cream text-editorial-black relative">

      {/* Page Header */}
      <div className="w-full flex justify-between items-end pb-4 border-b border-editorial-black/10 relative z-20">
        <div>
          <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
            03 / PORTFOLIO
          </span>
          <h1 className="text-3xl md:text-4xl font-light font-serif tracking-tight leading-tight text-editorial-black mt-1">
            Selected <span className="italic font-normal">Case Studies</span>
          </h1>
        </div>
      </div>

      {isMobile ? (
        /* Mobile Sticky Stack of Academic-Style Cards */
        <div className="flex flex-col gap-8 my-8 w-full relative pb-12">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActiveProjectIdx(idx)}
              style={{
                top: `${76 + idx * 24}px`,
                zIndex: 10 + idx,
              }}
              className={`w-full flex flex-col justify-between p-6 rounded-2xl border border-editorial-black/15 shadow-lg transition-all duration-300 sticky cursor-pointer ${proj.bgColor}`}
            >
              {/* Card Header (Academic Style) */}
              <div className="flex justify-between items-center pb-3 mb-4 border-b border-editorial-black/10 w-full">
                <span className="text-[9px] uppercase tracking-widest text-editorial-black/40 font-editorial font-bold">
                  Case Study
                </span>
                <span className="text-xs font-mono font-bold text-editorial-black/60 tracking-widest">
                  0{proj.number} / 04
                </span>
              </div>

              {/* Card Body (Academic Style) */}
              <div className="flex flex-col gap-4 text-left w-full">
                {/* Category & Title */}
                <div className="flex flex-col gap-1 w-full">
                  <span className="px-2 py-0.5 border border-editorial-black/25 rounded-full text-[8px] font-editorial uppercase tracking-widest w-fit bg-neutral-100/50">
                    {proj.category}
                  </span>
                  <h3 className="font-serif text-xl font-light leading-snug text-editorial-black mt-1">
                    {proj.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-editorial-black/30 my-1"></div>
                  <h4 className="font-serif italic font-normal text-xs text-beige-dark">
                    {proj.subtitle}
                  </h4>
                </div>

                {/* Description, Image & Tech Tags */}
                <div className="flex flex-col gap-3 border-t border-editorial-black/10 pt-3 w-full">
                  <p className="text-xs text-editorial-black/75 font-sans font-light leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Cutout Image Floating Thumbnail */}
                  <div className="relative w-full aspect-[16/9] flex items-center justify-center mt-2 overflow-visible">
                    <div className="absolute w-[85%] aspect-square rounded-full bg-white/30 blur-2xl pointer-events-none" />
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

                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {proj.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 text-[8px] font-editorial uppercase tracking-widest border border-editorial-black/20 bg-cream/70 text-editorial-black/85 font-semibold rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Desktop Next-to-Next Grid of 4 Columns */
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 w-full items-stretch">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActiveProjectIdx(idx)}
              className={`w-full ${proj.bgColor} border border-editorial-black/10 rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:brightness-95 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden text-left`}
            >
              {/* Top: Category & Badge */}
              <div className="z-10 flex justify-between items-start w-full">
                <span className="text-[9px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
                  0{proj.number} — {proj.category}
                </span>
                <div className="p-1 rounded-full bg-editorial-black/5 group-hover:bg-[#dbba9e] group-hover:text-cream transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Middle: Floating Transparent Cutout Image */}
              <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-visible z-10 my-4">
                {/* Soft backdrop radial glow */}
                <div
                  className="absolute w-[80%] aspect-square rounded-full blur-2xl opacity-20 group-hover:opacity-35 group-hover:scale-110 transition-all duration-500"
                  style={{ backgroundColor: getGlowColor(proj.bgColor) }}
                />

                {/* Floating Cutout Image */}
                <div className="relative w-[95%] h-[95%] transform transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:-translate-y-3 group-hover:-rotate-2">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-contain filter drop-shadow-[0_10px_12px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_18px_22px_rgba(0,0,0,0.22)] transition-all duration-500"
                    sizes="20vw"
                  />
                </div>
              </div>

              {/* Bottom: Title, Description & Tags */}
              <div className="z-10 flex flex-col gap-2 mt-2 w-full">
                <h3 className="font-serif text-xl font-light text-editorial-black group-hover:text-beige-dark transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-xs font-sans font-light leading-relaxed text-editorial-black/70 line-clamp-3">
                  {proj.description}
                </p>

                {/* Divider & Tech Tags */}
                <div className="pt-3 border-t border-editorial-black/5 mt-2 flex flex-wrap gap-1">
                  {proj.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[8px] font-editorial uppercase tracking-widest border border-editorial-black/10 bg-cream-light text-editorial-black/60 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Case Study Details Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 w-full h-full bg-cream/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-12 transition-all duration-300">
          <div className="relative bg-cream border border-editorial-black/15 shadow-2xl w-full max-w-5xl h-[90vh] md:h-[80vh] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden transition-transform duration-500 scale-100 rounded-sm">

            {/* Modal Close Button */}
            <button
              onClick={() => setActiveProjectIdx(null)}
              className="absolute top-4 right-4 z-50 p-2 border border-editorial-black/10 hover:border-editorial-black rounded-full bg-cream hover:bg-neutral-100 transition-colors"
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

      {/* Footer Number */}
      <div className="w-full flex justify-end text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold mt-4">
        05 / 09
      </div>
    </div>
  );
}
