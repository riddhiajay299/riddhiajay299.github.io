import React, { useState, useEffect, useRef } from "react";

interface PageProps {
  isVisible: boolean;
}

export default function EducationPage({ isVisible }: PageProps) {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const educationRecords = [
    {
      index: "01",
      year: "2023 — PRESENT",
      degree: "Bachelor of Engineering (Computer Engineering)",
      institution: "Government Engineering College, Daman",
      focus: "Computer Systems, Software Design, Frontend & Backend Development",
      description: "Focusing on core computer engineering principles, building responsive web solutions, and studying agentic AI systems.",
      bgColor: "bg-[#FAF8F5]",
    },
    {
      index: "02",
      year: "2020 — 2023",
      degree: "Diploma in Computer Science",
      institution: "Government Polytechnic, Daman",
      focus: "Foundational Computing, Database Systems, Algorithmic Logic",
      description: "Graduated with comprehensive training in software design, database administration, and programmatic architectures.",
      bgColor: "bg-[#F5F2EB]",
    },
  ];

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Left Column: Sticky Title */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start flex flex-col gap-4 relative z-20">
        <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
          01 / ACADEMICS
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-editorial-black">
          Academic Foundation
        </h2>
        <p className="text-sm font-sans font-light text-editorial-black/60 leading-relaxed max-w-md">
          A record of academic progression, focusing on software engineering principles, algorithm design, and computational theory.
        </p>
      </div>

      {/* Right Column: Stacked Cards */}
      <div className="lg:col-span-8 flex flex-col gap-12 relative pb-0">
        {educationRecords.map((record, idx) => (
          <div
            key={idx}
            style={{
              top: `${76 + idx * 20}px`,
              zIndex: 10 + idx,
            }}
            className={`w-full flex flex-col justify-between p-8 md:p-10 rounded-2xl border border-editorial-black/15 shadow-lg transition-all duration-300 sticky ${record.bgColor}`}
          >
            {/* Header area inside each card */}
            <div className="flex justify-between items-center pb-4 mb-6 border-b border-editorial-black/10">
              <span className="text-[9px] uppercase tracking-widest text-editorial-black/40 font-editorial font-bold">
                Academic Record
              </span>
              <span className="text-xs font-mono font-bold text-editorial-black/60 tracking-widest">
                {record.index} / 02
              </span>
            </div>

            {/* Card Content: Split Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start w-full">
              {/* Left Column: College & Degree */}
              <div className="md:col-span-5 flex flex-col gap-2 text-left">
                <span className="px-2.5 py-0.5 border border-editorial-black/25 rounded-full text-[8px] font-editorial uppercase tracking-widest w-fit bg-neutral-100/50">
                  Institution
                </span>
                <h3 className="font-serif text-xl md:text-2xl font-light leading-snug text-editorial-black">
                  {record.institution}
                </h3>
                <div className="w-8 h-[1px] bg-editorial-black/30 my-1"></div>
                <h4 className="font-serif italic font-normal text-sm md:text-base text-beige-dark">
                  {record.degree}
                </h4>
              </div>

              {/* Right Column: Focus & Details */}
              <div className="md:col-span-7 flex flex-col gap-4 text-left border-t md:border-t-0 md:border-l border-editorial-black/10 pt-4 md:pt-0 md:pl-6 w-full">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] font-editorial uppercase tracking-widest text-editorial-black/40">
                    Academic Term
                  </span>
                  <span className="text-xs font-editorial uppercase tracking-widest text-editorial-black font-bold">
                    {record.year}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] font-editorial uppercase tracking-widest text-editorial-black/40">
                    Focus Areas
                  </span>
                  <span className="text-[10px] font-editorial uppercase tracking-wider text-editorial-black/80 font-semibold leading-relaxed">
                    {record.focus}
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[8px] font-editorial uppercase tracking-widest text-editorial-black/40">
                    Description
                  </span>
                  <p className="text-xs font-sans font-light text-editorial-black/75 leading-relaxed">
                    {record.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
