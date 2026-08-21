import React from "react";
import { Globe, Palette, Layers, Terminal } from "lucide-react";

interface PageProps {
  isVisible: boolean;
}

export default function ServicesPage({ isVisible }: PageProps) {
  const services = [
    {
      numeral: "I",
      title: "React Applications",
      scope: "Enterprise Frontends",
      deliverables: ["Single Page Applications", "SSR / Static Sites", "State Architecture", "TypeScript Integration"],
      icon: Terminal,
    },
    {
      numeral: "II",
      title: "UI Design Systems",
      scope: "Visual Layouts",
      deliverables: ["Figma Systems & Tokens", "Grid Alignments", "Editorial Typography", "Interactive Prototyping"],
      icon: Palette,
    },
    {
      numeral: "III",
      title: "Premium Portfolios",
      scope: "Creative Interactive",
      deliverables: ["WebGL Canvas / Three.js", "GSAP Scroll Timelines", "Fluid Page Transitions", "Micro-Animations"],
      icon: Layers,
    },
    {
      numeral: "IV",
      title: "Full-Stack Development",
      scope: "Web Architecture",
      deliverables: ["Headless CMS setups", "Custom Database builds", "API & Serverless routes", "SEO & Performance Audits"],
      icon: Globe,
    },
  ];

  return (
    <div
      className="w-full h-auto flex flex-col justify-between pt-20 pb-0 px-6 md:px-12 bg-cream text-editorial-black relative"
    >
      {/* Page Header */}
      <div className="w-full flex justify-between items-end pb-4 border-b border-editorial-black/10">
        <div>
          <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
            06 / OFFERINGS
          </span>
          <h1 className="text-3xl md:text-4xl font-light font-serif tracking-tight leading-tight text-editorial-black mt-1">
            Consulting & <span className="italic font-normal">Services</span>
          </h1>
        </div>

      </div>

      {/* Services split grid */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-0 my-8 border border-editorial-black/10">
        {services.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <div
              key={idx}
              className="h-auto min-h-[220px] md:h-[45vh] flex flex-col justify-between p-8 hover:bg-[#FAF8F5] relative overflow-hidden group border-b md:border-b-0 md:border-r border-editorial-black/10 last:border-b-0 md:last:border-r-0 transition-all duration-500"
            >
              {/* Numerals Header */}
              <div className="flex justify-between items-start z-10">
                <span className="font-serif text-6xl md:text-7xl font-extralight text-editorial-black/10 group-hover:text-beige-dark/30 transition-all duration-500 select-none">
                  {svc.numeral}
                </span>
                <Icon className="w-5 h-5 text-editorial-black/20 group-hover:text-editorial-black transition-colors duration-300" />
              </div>

              {/* Title - Large and Elegant */}
              <div className="z-10 text-left mt-auto">
                <h3 className="font-serif text-2xl md:text-3xl font-light text-editorial-black leading-snug tracking-tight group-hover:italic group-hover:translate-x-2 transition-all duration-500">
                  {svc.title}
                </h3>
              </div>

              {/* Action Stamp */}
              <div className="z-10 pt-4 mt-6 border-t border-editorial-black/5 text-[9px] font-editorial uppercase tracking-widest text-beige-dark font-bold group-hover:text-editorial-black transition-colors duration-300">
                Inquire Project →
              </div>
            </div>
          );
        })}
      </div>

      {/* Page Footer Number */}
      <div className="w-full flex justify-end text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold">
        08 / 09
      </div>
    </div>
  );
}
