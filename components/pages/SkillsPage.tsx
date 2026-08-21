import React, { useState, useEffect, useRef } from "react";
import { Laptop, Cpu, Palette, Command } from "lucide-react";

interface PageProps {
  isVisible: boolean;
}

export default function SkillsPage({ isVisible }: PageProps) {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      number: "01",
      title: "Languages & Core",
      subtitle: "Foundational scripting & databases",
      icon: Laptop,
      skills: [
        "HTML", "CSS", "Python", "JavaScript", "SQL"
      ],
    },
    {
      number: "02",
      title: "Specialized Tech",
      subtitle: "AI agents & data sciences",
      icon: Cpu,
      skills: [
        "Agentic AI", "Generative AI", "Data Science", "Data Analysis"
      ],
    },
    {
      number: "03",
      title: "Web, App & Security",
      subtitle: "Responsive interfaces & security",
      icon: Palette,
      skills: [
        "Responsive Web Design", "Database Management",
        "Android Development", "Cyber Security",
        "Threat Detection & Defense"
      ],
    },
  ];

  return (
    <div ref={containerRef} className="w-full h-auto flex flex-col justify-between pt-28 pb-0 px-6 md:px-12 bg-cream text-editorial-black relative">
      {/* Page Header */}
      <div className="w-full flex justify-between items-end pb-4 border-b border-editorial-black/10">
        <div>
          <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
            02 / CAPABILITIES
          </span>
          <h1 className="text-3xl md:text-4xl font-light font-serif tracking-tight leading-tight text-editorial-black mt-1">
            Technical <span className="italic font-normal">Expertise</span>
          </h1>
        </div>

      </div>

      {/* Categories Grid Deck */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-0 my-6 h-auto border border-editorial-black/10">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div
              key={idx}
              className="h-full flex flex-col justify-between p-6 hover:bg-[#FAF8F5] relative overflow-hidden group border-b lg:border-b-0 lg:border-r border-editorial-black/10 last:border-b-0 lg:last:border-r-0"
            >
              {/* Header Info */}
              <div className="flex flex-col gap-2 border-b border-editorial-black/10 pb-4 z-10">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono tracking-widest text-beige-dark font-bold bg-[#EFE6DD] px-2 py-0.5 rounded-sm">
                    CAPABILITY {category.number}
                  </span>
                  <Icon className="w-4 h-4 text-editorial-black/30 group-hover:text-editorial-black transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-editorial-black leading-tight mt-1">
                  {category.title}
                </h3>
                <span className="text-[9px] font-editorial uppercase tracking-widest text-editorial-black/40 block">
                  {category.subtitle}
                </span>
              </div>

              {/* Skills Interactive Button Grid */}
              <div className="z-10 flex-grow flex items-center py-4">
                <div className="flex flex-wrap gap-2 w-full">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="border border-editorial-black/10 px-3 py-1.5 text-[9px] md:text-[10px] font-editorial uppercase tracking-wider bg-[#FAF8F5]/50 hover:bg-editorial-black hover:text-cream transition-all duration-300 rounded-full cursor-default select-none font-semibold hover:scale-[1.02]"
                      title={skill}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom decorative divider */}
              <div className="z-10 pt-3 border-t border-editorial-black/5 flex justify-between items-center text-[9px] font-editorial uppercase tracking-widest text-editorial-black/30">
                <span>Core Competency</span>
                <Command className="w-3 h-3 text-editorial-black/15 group-hover:text-beige transition-colors animate-pulse" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Page Footer Number */}
      <div className="w-full flex justify-end text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold">
        04 / 09
      </div>
    </div>
  );
}
