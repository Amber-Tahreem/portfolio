"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative min-h-[150vh] w-full flex flex-col items-center justify-center overflow-hidden p-4 py-24 md:p-8 md:py-32 rounded-[4rem] md:rounded-[10rem]">
      
      {/* 1. Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Using v2 assuming you renamed the file to bypass the browser cache */}
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
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl gap-12 md:gap-16 mt-12 md:mt-24">
        
        {/* 2. Glassmorphism Card (Heading Only, Shorter Padding, Orange Shade) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full py-16 md:py-20 px-8 bg-orange-500/10 backdrop-blur-xl border border-orange-500/30 rounded-[3rem] md:rounded-[5rem] flex flex-col items-center justify-center shadow-2xl"
        >
          
          {/* Top Left Label */}
          <div className="absolute top-6 left-8 md:top-8 md:left-12">
            <span className="font-mono text-[10px] md:text-xs tracking-widest text-white/80 uppercase">
              ABOUT ME .01
            </span>
          </div>

          {/* Main Pixel Heading */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-pixel text-6xl md:text-8xl lg:text-[9rem] text-white tracking-widest text-center leading-none mt-4 md:mt-0"
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
          A full-stack developer dedicated to crafting immersive digital experiences at the intersection of robust backend engineering and cinematic front-end design. With a focus on scalable systems and high-fidelity aesthetics, I build applications that establish a strong visual presence and perform flawlessly.
        </motion.p>
        
      </div>
    </section>
  );
}