import React, { useState } from "react";
import { Briefcase, Milestone, Award, Check, Layers } from "lucide-react";

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
      duration: "Jan 2026 — Present (12-Week Program)",
      location: "Ahmedabad, India",
      posCode: "POS. 01",
      points: [
        "Developing 'CyberShield,' a dedicated web platform focused on learning, detecting, and defending against digital threats.",
        "Building a browser extension titled 'Think before you click' to actively enhance user safety during web navigation.",
        "Engineering defensive security telemetry modules and interactive threat simulation tools."
      ],
      skills: ["Cyber Security", "Threat Detection", "React", "Browser Extensions"],
      icon: Briefcase,
    },
    {
      year: "2026",
      role: "Front-End Development & UI/UX Intern",
      company: "Exactable",
      duration: "May 2026 — August 2026",
      location: "Daman, India",
      posCode: "POS. 02",
      points: [
        "Designed and developed responsive, modern web interfaces with a strong focus on UI/UX and visual consistency.",
        "Created user-friendly layouts, interactive components, and responsive designs based on project requirements.",
        "Worked with HTML, CSS, JavaScript, React/Next.js, Tailwind CSS and modern UI libraries to build polished web experiences.",
        "Collaborated with clients and team members to understand requirements and refine designs based on feedback."
      ],
      skills: ["React/Next.js", "Tailwind CSS", "UI/UX Design", "Figma", "Modern UI Libraries"],
      icon: Layers,
    },
    {
      year: "2025",
      role: "Front-End Web Development Intern",
      company: "IBM",
      duration: "July 2025",
      location: "CSRBOX / Virtual",
      posCode: "POS. 03",
      points: [
        "Completed an intensive summer program focused on building responsive, user-centric web interfaces.",
        "Developed 'Fashion Wear,' a 7th-semester internship showcase project showcasing modern UI/UX principles.",
        "Constructed high-fidelity frontend layouts utilizing modern layout engines and responsive design standards."
      ],
      skills: ["Frontend Web Dev", "UI/UX Principles", "HTML/CSS", "JavaScript"],
      icon: Milestone,
    },
    {
      year: "2024",
      role: "Micro-Intern (Data Science & Generative AI)",
      company: "IBM SkillsBuild",
      duration: "Feb 2024 — March 2024",
      location: "Virtual Internship",
      posCode: "POS. 04",
      points: [
        "Gained practical exposure to Data Analysis and the implementation of Generative AI models.",
        "Participated in the design and exploratory workflows of Generative AI pipelines.",
        "Applied algorithmic thinking to clean data metrics and log performance parameters."
      ],
      skills: ["Data Science", "Generative AI", "Data Analysis", "Python"],
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
            Selected Engagements ({experiences.length})
          </span>
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 justify-center lg:justify-start pb-2 lg:pb-0 overflow-x-auto">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveExpIdx(idx)}
                onClick={() => setActiveExpIdx(idx)}
                className={`shrink-0 text-left group focus:outline-none flex items-center gap-3 lg:gap-4 py-2 px-2.5 lg:px-0 rounded-lg lg:rounded-none border-b-0 lg:border-b border-editorial-black/5 transition-all duration-300 ${activeExpIdx === idx ? "bg-[#FAF8F5] lg:bg-transparent" : "hover:bg-[#FAF8F5]/50 lg:hover:bg-transparent"}`}
              >
                <div className="flex flex-col items-start">
                  <span className={`font-serif text-2xl md:text-3xl lg:text-4xl transition-all duration-300 leading-tight ${activeExpIdx === idx ? "italic font-normal text-beige-dark lg:translate-x-2" : "font-light text-editorial-black/30 group-hover:text-editorial-black/60"}`}>
                    {exp.year}
                  </span>
                  <span className="block lg:hidden text-[8px] font-editorial uppercase tracking-wider text-editorial-black/50 font-semibold truncate max-w-[90px]">
                    {exp.company.split(' ')[0]}
                  </span>
                </div>
                <div className="hidden lg:flex flex-col gap-0.5">
                  <span className={`text-[10px] font-editorial uppercase tracking-widest transition-all duration-300 ${activeExpIdx === idx ? "opacity-100 font-bold lg:translate-x-1 text-editorial-black" : "opacity-40 group-hover:opacity-75"}`}>
                    {exp.company}
                  </span>
                  <span className="text-[8px] font-editorial uppercase tracking-widest text-editorial-black/40 truncate max-w-[220px]">
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

          <div className="relative flex flex-col gap-4 bg-[#FAF8F5] border border-editorial-black/10 p-6 md:p-8 shadow-md min-h-[42vh] justify-center text-left overflow-hidden rounded-sm w-full transition-all duration-500">
            <div className="absolute top-4 right-4 pointer-events-none select-none text-[8rem] font-serif text-editorial-black/[0.02] leading-none z-0">
              0{activeExpIdx + 1}
            </div>
            <div className="z-10 flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[10px] font-mono tracking-widest text-beige-dark font-bold bg-[#EFE6DD] px-2.5 py-0.5 w-fit rounded-sm border border-editorial-black/5">
                  {activeExp.posCode}
                </span>
                {activeExp.location && (
                  <span className="text-[9px] font-editorial uppercase tracking-widest text-editorial-black/40 font-semibold">
                    {activeExp.location}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-light text-editorial-black leading-tight mt-1">
                {activeExp.role}
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-editorial text-editorial-black/50">
                <span className="font-bold text-editorial-black/70">{activeExp.company}</span>
                <span>•</span>
                <span>{activeExp.duration}</span>
              </div>

              <div className="w-12 h-[1px] bg-editorial-black/10 my-2"></div>

              <ul className="flex flex-col gap-2.5 text-xs font-sans font-light text-editorial-black/80 leading-relaxed">
                {activeExp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex gap-2.5 items-start hover:text-editorial-black transition-colors duration-200">
                    <Check className="w-3.5 h-3.5 text-beige-dark mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-editorial-black/5">
                {activeExp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 text-[8px] font-editorial uppercase tracking-widest border border-editorial-black/10 bg-cream text-editorial-black/60 rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
