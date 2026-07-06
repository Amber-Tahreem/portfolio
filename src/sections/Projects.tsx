"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "framer-motion";

interface ProjectLink {
  label: string;
  url: string;
  videoUrl?: string;
  isProofModal?: boolean;
  companyUrl?: string;
}

interface Project {
  id: string;
  title: string;
  service: string;
  description: string;
  problemSolved: string;
  tech: string[];
  bgGlow: string;
  accentText: string;
  image: string;
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    id: "01",
    title: "PetEase Ecosystem",
    service: "Full-Stack Marketplace",
    description: "A comprehensive mobile and web pet care platform featuring a marketplace, e-commerce shop, and veterinary consultation booking.",
    problemSolved: "Consolidated fragmented pet care services into a single, unified digital platform, streamlining both vendor management and user scheduling. Features a seamless integration with a custom ERP system built in Angular.",
    tech: ["React", "Angular", "Spring Boot"],
    bgGlow: "bg-[#006D77]", 
    accentText: "text-[#83C5BE]", 
    image: "../petease.jpg",
    links: [
      { label: "Live Demo", url: "https://petease.com.pk" }
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
      { label: "Frontend Repo", url: "https://github.com/Amber-Tahreem/MilitaryDashboardFrontend" },
      { label: "Backend Repo", url: "https://github.com/Amber-Tahreem/military-dashboard-backend" },
      { label: "Live Demo", url: "#", videoUrl: "../MilitaryDashboardFrontend.mp4" }
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
    image: "../portfolio.jpg",
    links: [
      { label: "Github", url: "https://github.com/Amber-Tahreem/portfolio" },
    ]
  },
  {
    id: "04",
    title: "Compuwiz Implementations",
    service: "Frontend Experience",
    description: "A comprehensive showcase of multiple complex enterprise and consumer applications engineered during my one-year tenure as Frontend Team Lead.",
    problemSolved: "Led frontend architecture transformations, optimized component reusability, and delivered high-fidelity UI/UX systems across multiple production deployments. (Github repository screenshots and code proof shown above).",
    tech: ["React", "Next.js", "Angular", "TypeScript"],
    bgGlow: "bg-blue-600",
    accentText: "text-blue-400",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop", 
    links: [
      { 
        label: "View Work Proof", 
        url: "#", 
        isProofModal: true, 
        companyUrl: "https://cwiztech.com" 
      }
    ]
  }
];

const proofImages = [
  "/compuwiz-proof1.png",
  "/compuwiz-proof2.png",
  "/compuwiz-proof3.png",
  "/compuwiz-proof4.png",
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isProofOpen, setIsProofOpen] = useState(false);
  const [currentCompanyUrl, setCurrentCompanyUrl] = useState("");
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (!isProofOpen) return;
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % proofImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isProofOpen]);

  const handleNextImg = () => {
    setCurrentImgIndex((prev) => (prev + 1) % proofImages.length);
  };

  const handlePrevImg = () => {
    setCurrentImgIndex((prev) => (prev - 1 + proofImages.length) % proofImages.length);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section 
      ref={containerRef} 
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

      {/* Wrapper Container */}
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
                
                {/* LEFT SIDE: Info Panel */}
                <div className="w-full lg:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden">
                  <div className={`absolute -top-32 -left-32 w-96 h-96 opacity-20 blur-[120px] rounded-full pointer-events-none ${project.bgGlow}`} />
                  
                  <div className="relative z-10 flex flex-col gap-4 md:gap-5">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs tracking-widest text-gray-400">PROJECT {project.id}</span>
                      <span className={`h-px w-8 md:w-12 bg-current ${project.accentText}`} />
                      <span className={`font-mono text-[10px] md:text-xs uppercase tracking-widest ${project.accentText}`}>
                        {project.service}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-2 md:mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    </div>

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

                    {/* Links Rendering Block */}
                    <div className="flex flex-wrap gap-4 mt-2">
                      {project.links.map((link: ProjectLink, idx) => {
                        if (link.videoUrl) {
                          return (
                            <button
                              key={idx}
                              onClick={() => setActiveVideo(link.videoUrl || null)}
                              className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider text-white hover:text-gray-300 transition-colors group cursor-pointer"
                            >
                              {link.label}
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </button>
                          );
                        }

                        if (link.isProofModal) {
                          return (
                            <button
                              key={idx}
                              onClick={() => {
                                setIsProofOpen(true);
                                setCurrentImgIndex(0);
                                setCurrentCompanyUrl(link.companyUrl || "");
                              }}
                              className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider text-white hover:text-gray-300 transition-colors group cursor-pointer"
                            >
                              {link.label}
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                              </svg>
                            </button>
                          );
                        }

                        return (
                          <a 
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider text-white hover:text-gray-300 transition-colors group"
                          >
                            {link.label}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Visual Panel */}
                <div className="w-full lg:w-[45%] relative bg-[#111] border-t lg:border-t-0 lg:border-l border-white/5 min-h-[200px] md:min-h-[300px] lg:min-h-0 flex items-stretch">
                  <div className={`absolute inset-0 opacity-10 bg-gradient-to-br from-transparent to-current ${project.accentText}`} />
                  
                  <div className="absolute inset-4 md:inset-8 lg:inset-10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
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

      {/* MILITARY DASHBOARD VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-[#0c0c0c] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl cursor-default"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white text-lg transition-colors cursor-pointer"
              >
                ✕
              </button>
              <video
                src={activeVideo}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* REFINED COMPUWIZ ACCURATE SIZE SLIDER MODAL */}
      <AnimatePresence>
        {isProofOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsProofOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              // Max width increased to 6xl and height constrained to eliminate layout stretching
              className="relative w-full max-w-6xl h-[85vh] md:h-[80vh] bg-[#0c0c0c]/90 backdrop-blur-2xl border border-orange-500/10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between p-6 md:p-8 overflow-hidden cursor-default"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsProofOpen(false)}
                className="absolute top-6 right-6 z-30 w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>

              {/* Layout Header */}
              <div className="z-10">
                <span className="font-mono text-[10px] tracking-widest text-orange-400 uppercase block mb-1">
                  CONTRIBUTIONS PROOF .04
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-bold text-white tracking-tight">
                  Production Repositories & Implementation
                </h3>
              </div>

              {/* SLIDER DISPLAY CONTAINER - Optimized for perfect image visibility */}
              <div className="relative w-full flex-grow flex items-center justify-center px-4 md:px-14 my-4 h-[55vh] overflow-hidden">
                
                {/* Arrow Left */}
                <button
                  onClick={handlePrevImg}
                  className="absolute left-0 z-20 w-11 h-11 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white font-medium text-lg transition-all duration-300 cursor-pointer shadow-xl"
                >
                  ←
                </button>

                {/* Displaying Current Image Container with Max space allocation */}
                <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImgIndex}
                      src={proofImages[currentImgIndex]}
                      alt={`Work proof snippet ${currentImgIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      // Object contain used inside high container to ensure full horizontal frame fits cleanly
                      className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
                    />
                  </AnimatePresence>
                </div>

                {/* Arrow Right */}
                <button
                  onClick={handleNextImg}
                  className="absolute right-0 z-20 w-11 h-11 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center text-white font-medium text-lg transition-all duration-300 cursor-pointer shadow-xl"
                >
                  →
                </button>
              </div>

              {/* FOOTER AREA - Re-architected with Clean Monochrome Sidebar Button */}
              <div className="w-full flex items-center justify-between z-10 border-t border-white/5 pt-4">
                
                {/* Dots Navigation */}
                <div className="flex gap-2.5">
                  {proofImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImgIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentImgIndex ? "w-6 bg-orange-500" : "w-1.5 bg-white/20"
                      }`}
                    />
                  ))}
                </div>

                {/* Right Aligned Side Button - Beautiful solid Monochrome theme */}
                {currentCompanyUrl && (
                  <a
                    href={currentCompanyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 rounded-full overflow-hidden bg-white text-black hover:bg-gray-100 font-sans font-bold text-xs tracking-widest transition-all duration-300 shadow-xl uppercase inline-flex items-center gap-2"
                  >
                    <span>Visit Company Site</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}