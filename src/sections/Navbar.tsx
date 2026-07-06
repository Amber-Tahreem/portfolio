"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { name: "ABOUT", id: "about" },
  { name: "SERVICES", id: "services" },
  { name: "STACK", id: "stack" },
  { name: "PROJECTS", id: "projects" },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      // Fluid micro-adaptations across super tight display limits (gap-0.5 on mobile)
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0.5 sm:gap-4 bg-[#050505]/90 backdrop-blur-xl text-white px-2 py-2 md:py-3 rounded-full border border-white/10 shadow-2xl w-max max-w-[95vw] md:max-w-max"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Profile Avatar (Kept hidden on small phone screens for optimal word spacing maps) */}
      <div 
        onClick={() => scrollToSection("hero")}
        className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 ml-1 overflow-hidden shrink-0 cursor-pointer hover:scale-105 transition-transform hidden sm:block"
      >
        <Image
          src="/profile.jpg"
          alt="Profile Avatar"
          fill
          className="object-cover"
        />
      </div>

      {/* 2. Navigation Links */}
      <div className="flex items-center gap-0.5 px-0.5 sm:px-1 md:gap-4">
        {links.map((link) => (
          <div
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            // Padding tightened to px-1.5 on mobile so all 4 terms sit cleanly side-by-side
            className="relative px-1.5 sm:px-2.5 py-2 cursor-pointer text-[9px] sm:text-[11px] md:text-xs font-bold tracking-wide sm:tracking-widest shrink-0 select-none"
            onMouseEnter={() => setHovered(link.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.name}
            <AnimatePresence>
              {hovered === link.name && (
                <>
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full hidden md:block"
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "-50%" }}
                    exit={{ opacity: 0, x: "-50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                                      
                  <motion.div
                    className="absolute -top-12 left-1/2 bg-white text-black text-[9px] px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap pointer-events-none hidden md:block"
                    initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    View {link.name}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* 3. Dynamic Action Buttons - Resume (CV) is now fully active on mobile phone displays */}
      <div className="flex items-center gap-1 ml-0.5 sm:ml-1 shrink-0">
        {/* CV Download Link with SVG Icon */}
        <a
          href="/Amber_Tahreem_Resume.pdf"
          download="Amber_Tahreem_Resume.pdf"
          // Fixed: Changed hidden to inline-flex/flex so it displays beautifully on all sizes
          className="group inline-flex items-center gap-1 bg-white/5 border border-white/10 text-white px-2 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
        >
          <span>Resume</span>
          <svg 
            width="10" 
            height="10" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:translate-y-0.5 transition-transform duration-200 shrink-0"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </a>

        {/* Contact Button */}
        <button 
          onClick={() => scrollToSection("contact")}
          className="group flex items-center gap-1 bg-white text-black px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider hover:scale-105 transition-transform select-none cursor-pointer"
        >
          CONTACT
          <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90 text-[10px] leading-none font-sans hidden md:inline">
            +
          </span>
        </button>
      </div>
    </motion.nav>
  );
}