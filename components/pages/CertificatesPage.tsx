import React, { useState } from "react";
import { Award, ShieldCheck, Cpu, Code2, X } from "lucide-react";

interface PageProps {
  isVisible: boolean;
}

export default function CertificatesPage({ isVisible }: PageProps) {
  const [activeCertImage, setActiveCertImage] = useState<string | null>(null);
  const certifications = [
    {
      name: "12-Week Internship on Cyber Security",
      issuer: "GTU, Ahemdabad",
      date: "MAR 2026",
      id: "GTU-SET-CS-09",
      icon: ShieldCheck,
      image: "/certificate 5.jpeg",
    },
    {
      name: "ISEA Digital Forensics 5-Day Bootcamp",
      issuer: "GTU / ISEA",
      date: "FEB 2026",
      id: "GTU-SET-2026-27",
      icon: Cpu,
      image: "/certificate 3.jpeg",
    },
    {
      name: "INFRA CYBERWISE-2026 Cybersecurity Workshop",
      issuer: "IITRAM, Ahmedabad",
      date: "JAN 2026",
      id: "IITRAM-CYBERWISE",
      icon: ShieldCheck,
      image: "/certificate 2.jpeg",
    },
    {
      name: "Next-Gen Digital Forensics & Incident Response using AI (Volunteer)",
      issuer: "GTU / ISEA / GEC Daman",
      date: "JAN 2026",
      id: "GTU-SET-2026-35",
      icon: Award,
      image: "/certificate 4.jpeg",
    },
    {
      name: "IBM SkillsBuild Project Based Learning Program - Frontend Web Development",
      issuer: "CSRBOX / IBM SkillsBuild",
      date: "AUG 2025",
      id: "IBM-25PBL-9164",
      icon: Code2,
      image: "/certificate 1.jpeg",
    },
  ];

  return (
    <div
      className="w-full h-auto flex flex-col justify-between pt-28 pb-0 px-6 md:px-12 bg-cream text-editorial-black relative"
    >
      {/* Page Header */}
      <div className="w-full flex justify-between items-end pb-4 border-b border-editorial-black/10">
        <div>
          <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
            05 / CREDENTIALS
          </span>
          <h1 className="text-3xl md:text-4xl font-light font-serif tracking-tight leading-tight text-editorial-black mt-1">
            Certifications
          </h1>
        </div>

      </div>

      {/* Certificate Table Shelf List */}
      <div className="flex-grow flex flex-col justify-center my-6 w-full h-auto py-6">
        <div className="flex flex-col w-full border-t border-editorial-black/10">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={idx}
                className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-0 items-start md:items-center py-5 border-b border-editorial-black/10 group hover:bg-[#FAF8F5] px-4"
              >
                {/* Date */}
                <div className="md:col-span-2 text-xs md:text-sm font-serif italic text-beige-dark font-normal">
                  {cert.date}
                </div>

                {/* Name */}
                <div className="md:col-span-6 flex items-center gap-3">
                  <Icon className="w-4 h-4 text-editorial-black/40 group-hover:text-beige-dark transition-colors duration-300 hidden md:block" />
                  <h3 
                    onClick={() => setActiveCertImage(cert.image)}
                    className="font-serif italic text-base md:text-lg font-light text-editorial-black group-hover:translate-x-2 transition-all duration-300 leading-snug cursor-pointer hover:underline"
                  >
                    {cert.name}
                  </h3>
                </div>

                {/* Issuer */}
                <div className="text-[9px] md:text-xs font-editorial uppercase tracking-widest text-editorial-black/50 font-semibold md:col-span-2">
                  {cert.issuer}
                </div>

                {/* Verification ID */}
                <div className="hidden md:block md:col-span-2 md:text-right text-[9px] font-editorial uppercase tracking-widest text-editorial-black/40 group-hover:text-editorial-black transition-colors font-bold mt-1 md:mt-0">
                  <button
                    onClick={() => setActiveCertImage(cert.image)}
                    className="hover:underline cursor-pointer focus:outline-none"
                  >
                    [ VERIFY ]
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Transparent Image Popup Modal */}
      {activeCertImage && (
        <div
          className="fixed inset-0 bg-editorial-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8 cursor-zoom-out transition-all duration-300"
          onClick={() => setActiveCertImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCertImage(null)}
              className="absolute -top-12 right-0 md:-top-4 md:-right-12 text-white/80 hover:text-white transition-colors cursor-pointer p-2 z-[101]"
              aria-label="Close popup"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={activeCertImage}
              alt="Certificate Verification"
              className="w-auto h-auto max-w-full max-h-[80vh] rounded-md shadow-2xl border border-white/10 object-contain"
            />
          </div>
        </div>
      )}

      {/* Page Footer Number */}
      <div className="w-full flex justify-end text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold">
        07 / 09
      </div>
    </div>
  );
}
