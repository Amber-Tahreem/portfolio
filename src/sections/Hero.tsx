/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useCallback } from "react";

function useMagnetic(strength = 0.35) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.5 });
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bottomWaveClip = "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 100%, 0% 100%)";

  const topWaveVariants: Variants = {
    hidden: { clipPath: "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)" },
    visible: { clipPath: "polygon(0% 40%, 16% 20%, 33% 40%, 50% 20%, 66% 40%, 83% 20%, 100% 40%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)" },
    hover: {
      clipPath: "polygon(0% 0%, 16% 0%, 33% 0%, 50% 0%, 66% 0%, 83% 0%, 100% 0%, 100% 40%, 83% 20%, 66% 40%, 50% 20%, 33% 40%, 16% 20%, 0% 40%)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const writeAmber: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { clipPath: "inset(0 0% 0 0)", opacity: 1, transition: { duration: 1.2, delay: 0.5, ease: "easeInOut" } },
  };
  const writeTahreem: Variants = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { clipPath: "inset(0 0% 0 0)", opacity: 1, transition: { duration: 1.2, delay: 1.0, ease: "easeInOut" } },
  };

  const nameMagnetic = useMagnetic(0.06);
  const btnMagnetic = useMagnetic(0.48);

  return (
    <section className="relative min-h-screen md:min-h-[150vh] w-full bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-between p-6 py-16 md:p-12 md:py-32 rounded-[3rem] md:rounded-[10rem]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[80vw] md:w-[60vw] h-[40vh] bg-gradient-to-r from-red-600 to-orange-500 rounded-[100%] blur-[120px] opacity-60 md:opacity-80"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [1.2, 1], opacity: [0, 0.6, 0.5] }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </div>

      {/* Top Nav Logo */}
      <div className="relative z-10 flex w-full mb-8 md:mb-0">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 1 }}>
          <span className="font-bold text-xl tracking-tight text-white">amber.</span>
        </motion.div>
      </div>

      {/* Main Split-Screen Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full flex-grow items-center gap-12 md:gap-0">

        {/* LEFT HALF - Typography Stack */}
        <div className="flex flex-col justify-center items-start w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-2xl lg:text-3xl text-white/70 font-sans font-medium mb-2 tracking-widest uppercase"
          >
            It's
          </motion.h2>

          <motion.div
            style={{ x: nameMagnetic.springX, y: nameMagnetic.springY }}
            onMouseMove={nameMagnetic.handleMouseMove}
            onMouseLeave={nameMagnetic.handleMouseLeave}
            className="flex flex-col justify-center cursor-pointer w-full md:w-max"
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {/* AMBER - Scales to text-4xl on phone so it never overflows */}
            <motion.div variants={writeAmber} className="relative">
              <h1 className="text-[9vw] sm:text-5xl md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap leading-[1.1] font-pixel text-white/95" style={{ clipPath: bottomWaveClip }}>
                AMBER
              </h1>
              <motion.h1
                variants={topWaveVariants}
                className="absolute top-0 left-0 text-[9vw] sm:text-5xl md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap leading-[1.1] font-pixel bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent"
              >
                AMBER
              </motion.h1>
            </motion.div>

            {/* TAHREEM */}
            <motion.div variants={writeTahreem} className="relative mt-1 md:mt-0">
              <h1 className="text-[9vw] sm:text-5xl md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap leading-[1.1] font-pixel text-white/95 pb-2 md:pb-4" style={{ clipPath: bottomWaveClip }}>
                TAHREEM
              </h1>
              <motion.h1
                variants={topWaveVariants}
                className="absolute top-0 left-0 text-[9vw] sm:text-5xl md:text-[5vw] lg:text-[4.5vw] whitespace-nowrap leading-[1.1] font-pixel bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent pb-2 md:pb-4"
              >
                TAHREEM
              </motion.h1>
            </motion.div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-xs sm:text-sm md:text-xl lg:text-2xl text-orange-500/90 font-mono tracking-widest mt-3 uppercase"
          >
            Frontend Web Developer
          </motion.h3>
        </div>

        {/* RIGHT HALF - Context Panel */}
        <div className="flex flex-col items-start justify-center md:pl-12 space-y-6 md:space-y-8">
          <motion.div
            className="text-gray-100 text-base md:text-xl lg:text-2xl font-medium leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
          >
            Engineering high-performance digital ecosystems and cinematic UI/UX experiences.
          </motion.div>
          <motion.p
            className="text-gray-400 text-xs md:text-base leading-relaxed max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.2, ease: "easeInOut" }}
          >
            Specializing in modern web technologies, I craft user-centric applications that don't just look sharp—they perform flawlessly.
          </motion.p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 2.6 }}
            >
              <motion.div
                style={{ x: btnMagnetic.springX, y: btnMagnetic.springY }}
                onMouseMove={btnMagnetic.handleMouseMove}
                onMouseLeave={btnMagnetic.handleMouseLeave}
                className="inline-block"
                whileHover="btnHover"
                initial="btnRest"
                animate="btnRest"
              >
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="relative px-6 py-3.5 md:px-8 md:py-4 rounded-full text-xs md:text-sm font-medium overflow-hidden border cursor-pointer"
                  variants={{
                    btnRest: { borderColor: "rgba(107,114,128,0.8)" },
                    btnHover: { borderColor: "rgba(255,255,255,1)" },
                  }}
                  transition={{ duration: 0.2 }}
                >
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
      </div>

      {/* Bottom Utility Metadata */}
      <div className="relative z-10 flex justify-between items-end w-full text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mt-12 md:mt-0">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6, duration: 1 }}>
          Full-Stack Developer
        </motion.div>
        <motion.div
          onClick={() => scrollToSection("about")}
          className="cursor-pointer hover:text-white transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}