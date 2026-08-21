import React, { useState } from "react";
import { Briefcase, Milestone, Award, Check } from "lucide-react";

interface PageProps {
  isVisible: boolean;
}

export default function ExperiencePage({ isVisible }: PageProps) {
  const [activeExpIdx, setActiveExpIdx] = useState(0);

  const experiences = [
    {
      year: "2026",
      role: "Cyber Security Intern",
      company: "Gujarat Technological University (GTU)",
      duration: "Jan 2026 —April 2026",
      posCode: "POS. 01",
      points: [
        "Developing 'CyberShield,' a dedicated web platform focused on learning, detecting, and defending against digital threats.",
        "Building a browser extension titled 'Think before you click' to actively enhance user safety during web navigation.",
        "Coordinating simulation structures and responsive telemetry modules for secure application logic."
      ],
      icon: Briefcase,
    },
    {
      year: "2025",
      role: "Front-End Web Dev Intern",
      company: "IBM",
      duration: "July 2025",
      posCode: "POS. 02",
      points: [
        "Completed an intensive summer program focused on building responsive, user-centric web interfaces.",
        "Developed 'Fashion Wear,' a 7th-semester internship showcase project utilizing modern UI/UX principles.",
        "Created high-fidelity frontend layouts utilizing state-of-the-art layout engines."
      ],
      icon: Milestone,
    },
    {
      year: "2024",
      role: "Data Science & GenAI Intern",
      company: "IBM SkillsBuild",
      duration: "Feb 2024 — March 2024",
      posCode: "POS. 03",
      points: [
        "Gained practical exposure to core Data Analysis methods and dataset preprocessing operations.",
        "Participated in the design and implementation of Generative AI model pipelines.",
        "Applied algorithmic thinking to clean data metrics and log performance parameters."
      ],
      icon: Award,
    },
  ];

  const activeExp = experiences[activeExpIdx];

  return (
    <div className="w-full h-auto flex flex-col justify-between pt-28 pb-0 px-6 md:px-12 bg-cream text-editorial-black relative">
      {/* Page Header */}
      <div className="w-full flex justify-between items-end pb-4 border-b border-editorial-black/10">
        <div>
          <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
            04 / EXPERIENCE
          </span>
          <h1 className="text-3xl md:text-4xl font-light font-serif tracking-tight leading-tight text-editorial-black mt-1">
            Professional <span className="italic font-normal">Engagements</span>
          </h1>
        </div>

      </div>

      {/* Main Content Split Grid */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-6 w-full h-auto py-6">

        {/* Left Side: Interacting Years Selector */}
        <div className="lg:col-span-5 flex flex-col gap-4 lg:gap-6 text-left border-b lg:border-b-0 lg:border-r border-editorial-black/10 pb-4 lg:pb-0 lg:pr-8 h-full justify-center z-10">
          <span className="text-[9px] font-editorial uppercase tracking-widest text-editorial-black/40 text-center lg:text-left">
            Selected Periods
          </span>
          <div className="flex flex-row lg:flex-col gap-8 justify-center lg:justify-start pb-2 lg:pb-0">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveExpIdx(idx)}
                onClick={() => setActiveExpIdx(idx)}
                className="shrink-0 text-left group focus:outline-none flex items-center gap-3 lg:gap-4 py-2 border-b-0 lg:border-b border-editorial-black/5"
              >
                <span className={`font-serif text-3xl md:text-5xl transition-all duration-300 ${activeExpIdx === idx ? "italic font-normal text-beige-dark lg:translate-x-2" : "font-light text-editorial-black/30 group-hover:text-editorial-black/60"}`}>
                  {exp.year}
                </span>
                <div className="hidden lg:flex flex-col gap-0.5">
                  <span className={`text-[10px] font-editorial uppercase tracking-widest transition-all duration-300 ${activeExpIdx === idx ? "opacity-100 font-bold lg:translate-x-1" : "opacity-40 group-hover:opacity-75"}`}>
                    {exp.company}
                  </span>
                  <span className="text-[8px] font-editorial uppercase tracking-widest text-editorial-black/30">
                    {exp.role}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Active Experience Card */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          {/* Active engagement title above the card for mobile */}
          <div className="block lg:hidden text-center mb-1">
            <h4 className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
              {activeExp.role} — {activeExp.company}
            </h4>
          </div>

          <div className="relative flex flex-col gap-4 bg-[#FAF8F5] border border-editorial-black/10 p-8 shadow-md min-h-[42vh] justify-center text-left overflow-hidden rounded-sm w-full">
            <div className="absolute top-4 right-4 pointer-events-none select-none text-[8rem] font-serif text-editorial-black/[0.02] leading-none z-0">
              0{activeExpIdx + 1}
            </div>
            <div className="z-10 flex flex-col gap-2">
              <span className="text-[10px] font-mono tracking-widest text-beige-dark font-bold bg-[#EFE6DD] px-2.5 py-0.5 w-fit rounded-sm border border-editorial-black/5">
                {activeExp.posCode}
              </span>
              <h3 className="font-serif text-2xl font-light text-editorial-black leading-tight">
                {activeExp.role}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-editorial text-editorial-black/50">
                <span className="font-bold text-editorial-black/70">{activeExp.company}</span>
              <span>•</span>
              <span>{activeExp.duration}</span>
            </div>

            <div className="w-12 h-[1px] bg-editorial-black/10 my-2"></div>

            <ul className="flex flex-col gap-2 text-xs font-sans font-light text-editorial-black/75 leading-relaxed">
              {activeExp.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex gap-2 items-start hover:text-editorial-black transition-colors duration-200">
                  <Check className="w-3.5 h-3.5 text-beige-dark mt-0.5 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      </div>

      {/* Page Footer Number */}
      <div className="w-full flex justify-end text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold">
        06 / 09
      </div>
    </div>
  );
}
