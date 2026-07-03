"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "PetEase Ecosystem",
    service: "Full-Stack Marketplace",
    description: "A comprehensive mobile and web pet care platform featuring a marketplace, e-commerce shop, and veterinary consultation booking.",
    problemSolved: "Consolidated fragmented pet care services into a single, unified digital platform, streamlining both vendor management and user scheduling under the supervision of Dr. Saliha Zahoor.",
    tech: ["React", "Next.js", "Node.js"],
    bgGlow: "bg-[#006D77]", 
    accentText: "text-[#83C5BE]", 
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop",
    links: [
      { label: "Github", url: "#" },
      { label: "Live Demo", url: "#" }
    ]
  },
  {
    id: "02",
    title: "Military Dashboard",
    service: "Real-Time Architecture",
    description: "A high-performance analytics interface designed for mission-critical data processing and visualization.",
    problemSolved: "Engineered a secure, low-latency environment utilizing WebSockets for real-time alert monitoring, connecting an Angular frontend to a robust Spring Boot backend.",
    tech: ["Angular", "Spring Boot", "WebSockets"],
    bgGlow: "bg-orange-600",
    accentText: "text-orange-400",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    links: [
      { label: "Source Code", url: "#" }
    ]
  },
  {
    id: "03",
    title: "Digital Portfolio",
    service: "Cinematic UI/UX",
    description: "An immersive, physics-driven web experience showcasing advanced front-end engineering and design aesthetics.",
    problemSolved: "Successfully migrated from React to a highly optimized Next.js architecture, resolving complex build errors while implementing custom CSS animations and responsive grid layouts.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    bgGlow: "bg-red-600",
    accentText: "text-red-400",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
    links: [
      { label: "Github", url: "#" },
      { label: "Live Site", url: "#" }
    ]
  },
  {
    id: "04",
    title: "Compuwiz Implementations",
    service: "Frontend Leadership",
    description: "Enforcing strict web development and cybersecurity standards to deliver scalable, high-fidelity applications.",
    problemSolved: "Led frontend architecture decisions, ensuring seamless component reusability and maintaining rigorous UI/UX standards across multiple team deployments.",
    tech: ["React", "TypeScript", "UI/UX Design"],
    bgGlow: "bg-blue-600",
    accentText: "text-blue-400",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    links: [
      { label: "Case Study", url: "#" }
    ]
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef} 
      // UPDATED: Added rounded-[4rem] md:rounded-[10rem] and overflow-clip
      className="relative w-full bg-[#050505] text-white py-24 md:py-40 px-4 md:px-12 lg:px-24 rounded-[4rem] md:rounded-[10rem] overflow-clip"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-16 max-w-7xl mx-auto"
      >
        <h2 className="font-pixel text-3xl md:text-5xl lg:text-6xl tracking-widest text-left uppercase">
          Selected Work
        </h2>
      </motion.div>

      {/* The Wrapper Container */}
      <div className="relative w-full max-w-7xl mx-auto pb-[20vh]">
        {projects.map((project, index) => {
          return (
            <div
              key={project.id}
              className="h-screen w-full sticky top-0 flex flex-col items-center justify-center pb-[10vh]"
            >
              <div 
                className="w-full max-h-[85vh] flex flex-col lg:flex-row bg-[#0c0c0c]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.4)] relative"
                style={{ top: `${index * 1.5}rem` }}
              >
                
                {/* LEFT SIDE: Glassmorphic Info Panel */}
                <div className="w-full lg:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                  {/* Subtle Background Glow */}
                  <div className={`absolute -top-32 -left-32 w-96 h-96 opacity-20 blur-[120px] rounded-full pointer-events-none ${project.bgGlow}`} />
                  
                  <div className="relative z-10 flex flex-col gap-4 md:gap-5">
                    
                    {/* Project Number & Service */}
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs tracking-widest text-gray-400">PROJECT {project.id}</span>
                      <span className={`h-px w-8 md:w-12 bg-current ${project.accentText}`} />
                      <span className={`font-mono text-[10px] md:text-xs uppercase tracking-widest ${project.accentText}`}>
                        {project.service}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-2 md:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Problem Solved / Key Feature Highlight */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={project.accentText}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className={`font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold ${project.accentText}`}>Key Highlight</span>
                      </div>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        {project.problemSolved}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tech.map((techItem, idx) => (
                        <span 
                          key={idx} 
                          className="bg-[#1a1a1a] border border-white/10 text-gray-300 text-[10px] md:text-xs px-3 py-1.5 rounded-full font-mono tracking-wide"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>

                    {/* Links / Buttons */}
                    <div className="flex flex-wrap gap-4 mt-2">
                      {project.links.map((link, idx) => (
                        <a 
                          key={idx} 
                          href={link.url}
                          className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider text-white hover:text-gray-300 transition-colors group"
                        >
                          {link.label}
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Project Screenshot/Image */}
                <div className="w-full lg:w-[45%] relative bg-[#111] border-t lg:border-t-0 lg:border-l border-white/5 min-h-[200px] md:min-h-[300px] lg:min-h-0 flex items-stretch">
                  <div className={`absolute inset-0 opacity-10 bg-gradient-to-br from-transparent to-current ${project.accentText}`} />
                  
                  <div className="absolute inset-4 md:inset-8 lg:inset-10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}