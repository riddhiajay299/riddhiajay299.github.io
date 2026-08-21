import type { Metadata } from "next";
import "./globals.css";
import { Lexend, Kavoon } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const kavoon = Kavoon({
  subsets: ["latin"],
  variable: "--font-kavoon",
  weight: ["400"],
});


export const metadata: Metadata = {
  title: "PORTFOLIO — Computer Engineer & Frontend Developer",
  description: "An award-winning interactive digital experience telling the story of a Computer Engineering student and Frontend Developer. Built with Next.js, GSAP, and React Three Fiber.",
  keywords: ["Portfolio", "Frontend Developer", "Computer Engineer", "Creative Developer", "Interactive Design", "Editorial Portfolio"],
  icons: {
    icon: "/favicon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className={`${kavoon.variable} ${lexend.variable} min-h-full bg-cream text-editorial-black selection:bg-beige selection:text-editorial-black`}>
        {children}
      </body>
    </html>
  );
}

