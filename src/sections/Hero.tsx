/*"use client";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  // 1. The Base Layer Mask (Always visible, solid white)
  // This cuts the bottom half of the text into the permanent wave shape.
  const bottomWaveClip = "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 100%, 0% 100%)";

  // 2. The Top Layer Mask (Animated, Gradient)
  // Hidden: squashed flat against the wave. Hover: pulls up to the top (0%) to reveal the gradient.
  const topWaveVariants: Variants = {
    hidden: { 
      clipPath: "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)" 
    },
    visible: { 
      clipPath: "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)" 
    },
    hover: { 
      clipPath: "polygon(0% 0%, 16% 0%, 33% 0%, 50% 0%, 66% 0%, 83% 0%, 100% 0%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // 3. The Writing Effect (Left-to-Right Wipes)
  const writeAmber: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { 
      clipPath: "inset(0 0% 0 0)", 
      opacity: 1,
      transition: { duration: 1.2, delay: 0.5, ease: "easeInOut" }
    }
  };

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
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[60vw] h-[40vh] bg-gradient-to-r from-red-600 to-orange-500 rounded-[100%] blur-[120px] opacity-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1.2, 1], opacity: [0, 0.8, 0.6] }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10 flex w-full">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 2.6, duration: 1 }}
        >
          <span className="font-bold text-xl tracking-tight text-white">amber.</span>
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full flex-grow items-center">
        
        <motion.div 
          className="flex flex-col justify-center cursor-pointer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          
          <motion.div variants={writeAmber} className="relative">
            <h1 
              className="text-[20vw] md:text-[10vw] whitespace-nowrap leading-[0.82] font-bold tracking-tighter text-white/95"
              style={{ clipPath: bottomWaveClip }}
            >
              AMBER
            </h1>
            <motion.h1 
              variants={topWaveVariants}
              className="absolute top-0 left-0 text-[20vw] md:text-[10vw] whitespace-nowrap leading-[0.82] font-bold tracking-tighter bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent"
            >
              AMBER
            </motion.h1>
          </motion.div>
          
          <motion.div variants={writeTahreem} className="relative">
            <h1 
              className="text-[20vw] md:text-[10vw] whitespace-nowrap leading-[0.82] font-bold tracking-tighter text-white/95 pb-4"
              style={{ clipPath: bottomWaveClip }}
            >
              TAHREEM
            </h1>
            <motion.h1 
              variants={topWaveVariants}
              className="absolute top-0 left-0 text-[20vw] md:text-[10vw] whitespace-nowrap leading-[0.82] font-bold tracking-tighter bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent pb-4"
            >
              TAHREEM
            </motion.h1>
          </motion.div>

        </motion.div>

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
}  */

/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useCallback } from "react";

// ─── Magnetic Hook (React Compiler safe) ─────────────────────────────────────
// KEY FIX: uses e.currentTarget instead of ref.current so the React Compiler
// never sees a ref being accessed — eliminating the "Cannot access refs during
// render" error entirely. No ref needed at all.
function useMagnetic(strength = 0.35) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.5 });

  // useCallback makes the function identity stable and tells the React Compiler
  // this is a settled callback, not an inline render expression.
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // e.currentTarget is the element the handler is attached to —
      // same element we used to read via ref.current, but zero ref touching.
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - (left + width / 2)) * strength);
      y.set((e.clientY - (top + height / 2)) * strength);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return { springX, springY, handleMouseMove, handleMouseLeave };
}

export default function Hero() {
  // ── 1. Base Layer Mask (always visible, solid white) ──────────────────────
  const bottomWaveClip =
    "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 100%, 0% 100%)";

  // ── 2. Top Layer Mask (gradient, animated on hover) ───────────────────────
  const topWaveVariants: Variants = {
    hidden: {
      clipPath:
        "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)",
    },
    visible: {
      clipPath:
        "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)",
    },
    hover: {
      clipPath:
        "polygon(0% 0%, 16% 0%, 33% 0%, 50% 0%, 66% 0%, 83% 0%, 100% 0%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // ── 3. Writing Effect (left-to-right wipes) ───────────────────────────────
  const writeAmber: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: { duration: 1.2, delay: 0.5, ease: "easeInOut" },
    },
  };

  const writeTahreem: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: { duration: 1.2, delay: 1.0, ease: "easeInOut" },
    },
  };

  // ── Magnetic instances ─────────────────────────────────────────────────────
  // Name: very subtle drift so the huge text feels alive without being distracting
  const nameMagnetic = useMagnetic(0.06);
  // Button: strong pull — this is the signature Magnetto effect
  const btnMagnetic = useMagnetic(0.48);

  return (
    <section className="relative min-h-[150vh] w-full bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-between p-6 py-24 md:p-12 md:py-32 rounded-[4rem] md:rounded-[10rem]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[60vw] h-[40vh] bg-gradient-to-r from-red-600 to-orange-500 rounded-[100%] blur-[120px] opacity-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1.2, 1], opacity: [0, 0.8, 0.6] }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Top Nav */}
      <div className="relative z-10 flex w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
        >
          <span className="font-bold text-xl tracking-tight text-white">amber.</span>
        </motion.div>
      </div>

      {/* Main Split-Screen Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full flex-grow items-center">

        {/*
          LEFT HALF — Name
          NEW ✦  Magnetic: the entire name block softly drifts toward the cursor.
                 style={{ x, y }} is additive on top of the existing variant animations
                 so the wave-clip hover still fires normally.
          KEPT ✦ wave clip-path + gradient reveal on whileHover="hover" (unchanged)
        */}
        <motion.div
          style={{ x: nameMagnetic.springX, y: nameMagnetic.springY }}
          onMouseMove={nameMagnetic.handleMouseMove}
          onMouseLeave={nameMagnetic.handleMouseLeave}
          className="flex flex-col justify-center cursor-pointer"
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {/* AMBER */}
          <motion.div variants={writeAmber} className="relative">
            <h1
              className="text-[12vw] md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap leading-[1] font-pixel text-white/95"
              style={{ clipPath: bottomWaveClip }}
            >
              AMBER
            </h1>
            <motion.h1
              variants={topWaveVariants}
              className="absolute top-0 left-0 text-[12vw] md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap leading-[1] font-pixel bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent"
            >
              AMBER
            </motion.h1>
          </motion.div>

          {/* TAHREEM */}
          <motion.div variants={writeTahreem} className="relative">
            <h1
              className="text-[12vw] md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap leading-[1] font-pixel text-white/95 pb-4"
              style={{ clipPath: bottomWaveClip }}
            >
              TAHREEM
            </h1>
            <motion.h1
              variants={topWaveVariants}
              className="absolute top-0 left-0 text-[12vw] md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap leading-[1] font-pixel bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent pb-4"
            >
              TAHREEM
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* RIGHT HALF */}
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
            Specializing in modern web technologies, I craft user-centric
            applications that don't just look sharp—they perform flawlessly.
          </motion.p>

          {/*
            CTA BUTTON — three-layer composition (Magnetto pattern):
            ┌─ Layer 1 ─ Outer motion.div ───────────────────────────────────┐
            │  Handles the spring-bounce ENTRY animation (y: -100vh → 0).    │
            │                                                                 │
            │  ┌─ Layer 2 ─ Magnetic motion.div ────────────────────────────┐│
            │  │  • Tracks cursor and pulls button toward it via springX/Y.  ││
            │  │  • Acts as variant ROOT: whileHover="btnHover" propagates   ││
            │  │    the "btnHover" variant down to every child motion el.    ││
            │  │                                                             ││
            │  │  ┌─ Layer 3 ─ motion.button ───────────────────────────────┐││
            │  │  │  variants: border-color fades from gray → white         │││
            │  │  │                                                          │││
            │  │  │  motion.span (fill): scaleX 0→1 (left-to-right wipe)   │││
            │  │  │  motion.span (text): color white→black as fill arrives  │││
            │  │  └──────────────────────────────────────────────────────────┘││
            │  └─────────────────────────────────────────────────────────────┘│
            └──────────────────────────────────────────────────────────────────┘
          */}

          {/* Layer 1: Entry animation */}
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 3.0 }}
          >
            {/* Layer 2: Magnetic pull + variant propagation */}
            <motion.div
              style={{ x: btnMagnetic.springX, y: btnMagnetic.springY }}
              onMouseMove={btnMagnetic.handleMouseMove}
              onMouseLeave={btnMagnetic.handleMouseLeave}
              className="inline-block"
              whileHover="btnHover"
              initial="btnRest"
              animate="btnRest"
            >
              {/* Layer 3: Button with fill wipe */}
              <motion.button
                className="relative px-8 py-4 rounded-full text-sm font-medium overflow-hidden border"
                variants={{
                  btnRest: { borderColor: "rgba(107,114,128,0.8)" },
                  btnHover: { borderColor: "rgba(255,255,255,1)" },
                }}
                transition={{ duration: 0.2 }}
              >
                {/*
                  White fill — scaleX 0 → 1 on hover, pinned to left edge.
                  Creates the Magnetto slide-fill effect.
                */}
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 bg-white rounded-full"
                  style={{ originX: 0 }}
                  variants={{
                    btnRest: { scaleX: 0 },
                    btnHover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                />
                {/*
                  Label — inverts to black slightly after the fill starts
                  so the text never fights the white background mid-animation.
                */}
                <motion.span
                  className="relative z-10 font-medium"
                  variants={{
                    btnRest: { color: "#ffffff" },
                    btnHover: { color: "#000000" },
                  }}
                  transition={{ duration: 0.22, delay: 0.12 }}
                >
                  Explore My Process
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Utility Text */}
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