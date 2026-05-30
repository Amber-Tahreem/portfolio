"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["HOME", "ABOUT", "PROJECTS", "JOURNAL"];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      // Fixed at the bottom center of the screen
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 md:gap-8 bg-[#050505] text-white px-3 py-3 rounded-full border border-white/10 shadow-2xl"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 1. Profile Avatar / Logo Area */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 ml-1 overflow-hidden" />

      {/* 2. Navigation Links */}
      <div className="flex items-center gap-1 md:gap-4 px-2">
        {links.map((link) => (
          <div
            key={link}
            className="relative px-3 py-2 cursor-pointer text-[10px] md:text-xs font-bold tracking-widest"
            onMouseEnter={() => setHovered(link)}
            onMouseLeave={() => setHovered(null)}
          >
            {link}

            <AnimatePresence>
              {hovered === link && (
                <>
                  {/* The little sliding dot */}
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-2 left-1/2 w-1 h-1 bg-white rounded-full"
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 1, x: "-50%" }}
                    exit={{ opacity: 0, x: "-50%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  
                  {/* The pop-up tooltip */}
                  <motion.div
                    className="absolute -top-12 left-1/2 bg-white text-black text-[9px] px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap pointer-events-none"
                    initial={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    View {link}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* 3. Contact Button */}
      <button className="bg-white text-black px-6 py-3 rounded-full text-[10px] md:text-xs font-bold tracking-widest hover:scale-105 transition-transform mr-1">
        CONTACT +
      </button>
    </motion.nav>
  );
}