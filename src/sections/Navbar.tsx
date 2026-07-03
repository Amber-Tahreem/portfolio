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
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 md:gap-8 bg-[#050505] text-white px-3 py-3 rounded-full border border-white/10 shadow-2xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Profile Avatar / Logo Area (Click to scroll to top) */}
      <div 
        onClick={() => scrollToSection("hero")}
        className="relative w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 ml-1 overflow-hidden shrink-0 cursor-pointer hover:scale-105 transition-transform"
      >
        <Image
          src="/profile.jpg"
          alt="Profile Avatar"
          fill
          className="object-cover"
        />
      </div>

      {/* 2. Navigation Links */}
      <div className="flex items-center gap-1 md:gap-4 px-2">
        {links.map((link) => (
          <div
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className="relative px-3 py-2 cursor-pointer text-[10px] md:text-xs font-bold tracking-widest"
            onMouseEnter={() => setHovered(link.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.name}

            <AnimatePresence>
              {hovered === link.name && (
                <>
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 w-1 h-1 bg-white rounded-full"
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "-50%" }}
                    exit={{ opacity: 0, x: "-50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  
                  <motion.div
                    className="absolute -top-12 left-1/2 bg-white text-black text-[9px] px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap pointer-events-none"
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

      {/* 3. Contact Button */}
      <button 
        onClick={() => scrollToSection("contact")}
        className="group flex items-center gap-1.5 bg-white text-black px-6 py-3 rounded-full text-[10px] md:text-xs font-bold tracking-widest hover:scale-105 transition-transform mr-1"
      >
        CONTACT
        <span className="inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90 text-sm leading-none">
          +
        </span>
      </button>
    </motion.nav>
  );
}