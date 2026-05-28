/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  // 1. The Wave Mask & Gradient Reveal
  // We synced the states (hidden, visible, hover) so the parent can trigger them correctly.
  const waveVariants: Variants = {
    hidden: { 
      clipPath: "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 100%, 0% 100%)",
      color: "rgba(255, 255, 255, 0.95)" // Solid white initially
    },
    visible: { 
      clipPath: "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 100%, 0% 100%)",
      color: "rgba(255, 255, 255, 0.95)"
    },
    hover: { 
      clipPath: "polygon(0% 0%, 16% 0%, 33% 0%, 50% 0%, 66% 0%, 83% 0%, 100% 0%, 100% 100%, 0% 100%)",
      color: "rgba(255, 255, 255, 0)", // Fades to transparent to reveal the fiery background gradient
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // 2. The Writing Effect: Left-to-right wipe for the first line
  const writeAmber: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { 
      clipPath: "inset(0 0% 0 0)", 
      opacity: 1,
      transition: { duration: 1.2, delay: 0.5, ease: "easeInOut" }
    }
  };

  // 3. The Writing Effect: Staggered wipe for the second line
  const writeTahreem: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { 
      clipPath: "inset(0 0% 0 0)", 
      opacity: 1,
      transition: { duration: 1.2, delay: 1.0, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-between p-6 md:p-12">
      
      {/* 1. Background Cinematic Glow Pop-up */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[60vw] h-[40vh] bg-gradient-to-r from-red-600 to-orange-500 rounded-[100%] blur-[120px] opacity-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1.2, 1], opacity: [0, 0.8, 0.6] }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* 2. Top Nav Area */}
      <div className="relative z-10 flex w-full">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2.6, duration: 1 }}
        >
          <span className="font-bold text-xl tracking-tight text-white">amber.</span>
        </motion.div>
      </div>

      {/* 3. Main Split-Screen Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full flex-grow items-center">
        
        {/* LEFT HALF: Massive Two-Line Name */}
        {/* The parent container handles the hover state and passes it perfectly to the children */}
        <motion.div 
          className="flex flex-col justify-center cursor-pointer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {/* AMBER Wrapper handles the left-to-right writing wipe */}
          <motion.div variants={writeAmber}>
            {/* Added: bg-gradient-to-r and bg-clip-text to enable the hover gradient reveal */}
            <motion.h1 
              variants={waveVariants}
              className="text-[20vw] md:text-[10vw] whitespace-nowrap leading-[0.82] font-bold tracking-tighter bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text"
            >
              AMBER
            </motion.h1>
          </motion.div>
          
          {/* TAHREEM Wrapper handles the staggered left-to-right wipe */}
          <motion.div variants={writeTahreem}>
            {/* Added: bg-gradient-to-r and bg-clip-text to enable the hover gradient reveal */}
            <motion.h1 
              variants={waveVariants}
              className="text-[20vw] md:text-[10vw] whitespace-nowrap leading-[0.82] font-bold tracking-tighter bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text pb-4"
            >
              TAHREEM
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* RIGHT HALF: Calm Fade-In & Bouncing Button */}
        <div className="flex flex-col items-start justify-center md:pl-12 space-y-8 mt-12 md:mt-0">
          
          <motion.div
            className="text-gray-100 text-lg md:text-2xl font-medium leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
          >
            Engineering high-performance digital ecosystems and cinematic UI/UX experiences.
          </motion.div>

          <motion.p
            className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.2, ease: "easeInOut" }}
          >
            Specializing in modern web technologies, I craft user-centric applications that don't just look sharp—they perform flawlessly.
          </motion.p>
          
          <motion.button
            className="px-6 py-3 border border-gray-500 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 120, 
              damping: 12,    
              delay: 3.0      
            }}
          >
            Explore My Process
          </motion.button>
          
        </div>
      </div>

      {/* 4. Bottom Utility Text */}
      <div className="relative z-10 flex justify-between items-end w-full text-xs text-gray-400 uppercase tracking-widest">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2.6, duration: 1 }}
        >
          Full-Stack Developer
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2.6, duration: 1 }}
        >
          Scroll to explore ↓
        </motion.div>
      </div>
    </section>
  );
}