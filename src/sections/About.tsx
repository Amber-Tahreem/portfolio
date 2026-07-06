"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative min-h-[150vh] w-full flex flex-col items-center justify-center overflow-hidden p-4 py-24 md:p-8 md:py-32 rounded-[4rem] md:rounded-[10rem]">

      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-background.jpg"
          alt="About Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle dark overlay to ensure the white text pops against the orange */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl gap-10 md:gap-12 mt-12 md:mt-24">

        {/* 2. Glassmorphism Card (Tighter, smaller pill shape) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // UPDATED: Removed w-full, added w-[90%] on mobile and w-auto on desktop. Reduced padding.
          className="relative w-[90%] md:w-auto px-8 md:px-24 py-12 md:py-16 bg-orange-500/10 backdrop-blur-xl border border-orange-500/30 rounded-[2rem] md:rounded-[4rem] flex flex-col items-center justify-center shadow-2xl"
        >

          {/* Top Left Label */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-white/80 uppercase">
              ABOUT ME .01
            </span>
          </div>

          {/* Main Pixel Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // UPDATED: Scaled down text slightly to fit the smaller box
            className="font-pixel text-5xl md:text-7xl lg:text-8xl text-white tracking-widest text-center leading-none mt-6 md:mt-2"
          >
            ABOUT
          </motion.h2>

        </motion.div>

        {/* 3. Paragraph Description (Outside the card) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-center text-sm md:text-base text-white/90 leading-relaxed font-sans font-medium px-4"
        >
          A frontend developer dedicated to crafting immersive digital experiences at the intersection of high-fidelity aesthetics and optimized web architectures. With a focus on fluid animations and modern frameworks, I build user-centric applications that establish a strong visual presence and perform flawlessly.        </motion.p>

      </div>
    </section>
  );
}