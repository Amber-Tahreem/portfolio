"use client";
import { motion } from "framer-motion";

// We now use an array of objects to store both the name and the cloud URL for the logo
const techStack = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
];

// Duplicate the array to create the infinite loop
const duplicatedStack = [...techStack, ...techStack];

export default function Stack() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[120vh] w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden p-4 py-24 md:p-8 rounded-[4rem] md:rounded-[10rem]">
      
      {/* Header Area */}
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mb-16 md:mb-24 px-4 z-10 mt-12 md:mt-0">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-pixel text-5xl md:text-7xl lg:text-8xl tracking-widest mb-6 md:mb-8"
        >
          STACK
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm md:text-base leading-relaxed"
        >
          At the core of my development process, I leverage a robust ecosystem of modern frameworks to engineer scalable backend architectures and cinematic front-end interfaces.
        </motion.p>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center">
        
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* The Sliding Track */}
        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={index}
              className="group w-48 h-48 md:w-64 md:h-64 bg-orange-500/5 backdrop-blur-sm border border-orange-500/10 rounded-[2rem] md:rounded-[3rem] flex flex-col items-center justify-center shrink-0 hover:bg-orange-500/10 hover:border-orange-500/30 transition-all duration-300 cursor-default shadow-lg"
            >
              
              {/* CLOUD LOGO IMAGE */}
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={tech.logo} 
                  alt={`${tech.name} logo`} 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
                />
              </div>

              {/* Technology Name */}
              <span className="font-sans font-semibold text-lg md:text-xl text-white/70 tracking-wide group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}