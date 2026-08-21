import React, { useState, useEffect } from "react";
import { Mail, ArrowUp, FileDown, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

interface PageProps {
  isVisible: boolean;
  onScrollToTop?: () => void;
}

export default function ContactPage({ isVisible, onScrollToTop }: PageProps) {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-auto flex flex-col justify-between pt-2 pb-24 lg:pb-8 px-6 md:px-12 bg-cream text-editorial-black relative"
    >
      {/* Page Header */}
      <div className="w-full flex justify-between items-end pb-2 border-b border-editorial-black/10">
        <div>
          <span className="text-[10px] font-editorial uppercase tracking-widest text-beige-dark font-bold">
            07 / INQUIRIES
          </span>
          <h1 className="text-2xl md:text-3xl font-light font-serif tracking-tight leading-tight text-editorial-black mt-0.5">
            Get in <span className="italic font-normal text-beige-dark">Touch</span>
          </h1>
        </div>

      </div>

      {/* Main Split Layout Grid */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-3 w-full h-auto py-2">

        {/* Left Side: Elegant Headline & Local Time */}
        <div className="lg:col-span-6 flex flex-col gap-4 text-left justify-center pr-0 lg:pr-6 h-full">
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-tight text-editorial-black">
            Have an idea?<br />
            Let's make it <span className="italic text-beige-dark font-normal">tangible</span>.
          </h2>

          <p className="text-xs font-sans font-light text-editorial-black/60 leading-relaxed max-w-md">
            I am currently accepting select freelance projects, frontend design consulting, and technical collaboration opportunities. Feel free to download my resume or connect via any of the digital channels.
          </p>

          {/* Local clock */}
          <div className="mt-2 flex flex-col gap-0.5">
            <span className="text-[9px] font-editorial uppercase tracking-widest text-editorial-black/40">
              Local Zone Time
            </span>
            <span className="text-xs font-mono tracking-widest font-bold text-editorial-black/80">
              {localTime || "12:00:00 PM"} GMT+5:30
            </span>
          </div>
        </div>

        {/* Right Side: Interactive Typrographic Shelf Links */}
        <div className="lg:col-span-6 flex flex-col justify-center w-full border-t border-editorial-black/10 mt-6 lg:mt-0">
          {[
            { label: "Direct Email", value: "ridzz.ajay29@gmail.com", icon: Mail },
            { label: "Call / Message", value: "+91 81609 70449", icon: Phone },
            { label: "LinkedIn Connection", value: "linkedin.com/in/riddhi-goswami", href: "https://www.linkedin.com/in/riddhi-goswami-3b0614364/", action: "Let's Network →", icon: FaLinkedin },
            { label: "Curriculum Vitae", value: "Download Resume (PDF)", href: "/riddhi_20cv.pdf", action: "Get CV →", icon: FileDown }
          ].map((link, idx) => {
            const Icon = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-3.5 border-b border-editorial-black/10 hover:bg-[#FAF8F5] px-4 transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-4 text-left">
                  <Icon className="w-4 h-4 text-beige-dark transition-transform group-hover:scale-110" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-editorial uppercase tracking-widest text-editorial-black/40">
                      {link.label}
                    </span>
                    <span className="font-serif text-base md:text-lg font-bold text-editorial-black group-hover:text-beige-dark transition-colors duration-300">
                      {link.value}
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-editorial uppercase tracking-widest text-beige-dark font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  {link.action}
                </span>
              </a>
            );
          })}
        </div>

      </div>

      {/* Return to Top & Footer Number */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t border-editorial-black/5 pt-6 mt-4">
        <div>
          {onScrollToTop && (
            <button
              onClick={onScrollToTop}
              className="group flex items-center gap-2 text-[10px] font-editorial uppercase tracking-widest text-[#1E1E1E]/60 hover:text-editorial-black transition-colors"
            >
              <div className="p-1.5 rounded-full border border-editorial-black/25 group-hover:border-editorial-black transition-colors">
                <ArrowUp className="w-3 h-3 animate-pulse text-beige-dark" />
              </div>
              <span>Return to Top</span>
            </button>
          )}
        </div>

        <div className="text-xs font-editorial text-editorial-black/60 tracking-widest select-none z-10 font-bold">
          09 / 09
        </div>
      </div>
    </div>
  );
}
