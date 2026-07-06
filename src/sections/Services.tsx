"use client";
// 1. Added useEffect to the imports
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Frontend Architecture",
    description: "Building scalable, component-driven web applications utilizing modern frameworks like React, Next.js, and Angular for high-performance digital ecosystems.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Cinematic UI/UX",
    description: "Crafting immersive digital experiences with advanced CSS animations, glassmorphic interfaces, and physics-driven interactions that elevate user engagement.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Performance Optimization",
    description: "Enhancing core web vitals and application speed through efficient rendering, advanced state management, and optimized Next.js architectures.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Real-Time Interfaces",
    description: "Designing dynamic, responsive dashboards and analytics platforms that process and visualize live data streams seamlessly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  // 2. The Auto-Play Engine
  useEffect(() => {
    // Set an interval to run every 4000 milliseconds (4 seconds)
    const autoplayTimer = setInterval(() => {
      // Automatically move to the next index, looping back to 0 when it hits the end
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4000);

    // Cleanup the timer if the component unmounts
    return () => clearInterval(autoplayTimer);
  }, []); // Empty dependency array means this timer starts exactly once when the section loads

  const handleCardClick = (targetIndex: number) => {
    setActiveIndex(targetIndex);
  };

  return (
    <section className="relative min-h-[130vh] w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden p-4 py-24 md:p-8 rounded-[4rem] md:rounded-[10rem]">

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-pixel text-4xl md:text-6xl tracking-widest text-center mb-16 md:mb-20 z-20"
      >
        SERVICES
      </motion.h2>

      <div className="relative w-full max-w-5xl h-[450px] md:h-[550px] flex items-center justify-center">
        {services.map((service, index) => {
          const isCenter = index === activeIndex;
          const isLeft = index === (activeIndex - 1 + services.length) % services.length;
          const isRight = index === (activeIndex + 1) % services.length;

          let x = 0;
          let scale = 0.6;
          let zIndex = 10;
          let opacity = 0;

          if (isCenter) {
            x = 0;
            scale = 1;
            zIndex = 30;
            opacity = 1;
          } else if (isLeft) {
            x = -160;
            scale = 0.8;
            zIndex = 20;
            opacity = 0.7;
          } else if (isRight) {
            x = 160;
            scale = 0.8;
            zIndex = 20;
            opacity = 0.7;
          }

          return (
            <motion.div
              key={service.id}
              onClick={() => handleCardClick(index)}
              className={`absolute w-[280px] h-[380px] md:w-[360px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl ${!isCenter ? "cursor-pointer hover:brightness-110" : "cursor-default"
                }`}
              initial={false}
              animate={{ x, scale, zIndex, opacity }}
              transition={{
                duration: 0.8, // Slightly longer duration for a more relaxed, luxurious auto-play feel
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover filter brightness-[0.85] hover:brightness-100 transition-all duration-500"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center mt-12 md:mt-16 h-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="bg-white text-black px-6 py-2.5 rounded-full font-sans font-bold text-sm md:text-base flex items-center gap-3 z-20 shadow-xl">
              <span className="font-mono text-gray-500">{services[activeIndex].id}</span>
              <span>{services[activeIndex].title}</span>
            </div>

            <p className="max-w-xl text-center text-gray-400 text-sm md:text-base leading-relaxed px-4">
              {services[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}
/*
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Full-Stack Engineering",
    description: "Architecting end-to-end solutions with robust backend systems and seamless database integrations, ensuring scalable and high-performance applications.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Cinematic UI/UX",
    description: "Crafting digital experiences that elevate brands and engage audiences. Blending high-contrast aesthetics with intuitive, fluid animations.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "API Architecture",
    description: "Designing secure, RESTful, and WebSocket-driven APIs that enable real-time communication between your front-end interfaces and complex data layers.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "System Integration",
    description: "Connecting diverse technology stacks (React, Angular, Spring Boot) into unified ecosystems that operate smoothly and efficiently.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-Play Engine
  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 4000);

    return () => clearInterval(autoplayTimer);
  }, []);

  const handleCardClick = (targetIndex: number) => {
    setActiveIndex(targetIndex);
  };

  return (
    <section className="relative min-h-[140vh] md:min-h-[160vh] w-full bg-[#0a0a0a] text-white flex flex-col items-center justify-between overflow-hidden p-4 py-24 md:p-8 rounded-[4rem] md:rounded-[10rem]">
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-pixel text-4xl md:text-6xl tracking-widest text-center mt-8 mb-4 z-20"
      >
        SERVICES
      </motion.h2>

      <div className="relative w-full max-w-5xl h-[600px] md:h-[900px] flex items-center justify-center my-8">
        {services.map((service, index) => {
          const isCenter = index === activeIndex;
          const isTop = index === (activeIndex - 1 + services.length) % services.length;
          const isBottom = index === (activeIndex + 1) % services.length;

          let yOffset = "0%";
          let scale = 0.9;
          let zIndex = 10;
          let opacity = 1;

          if (isCenter) {
            yOffset = "0%";
            scale = 1;
            zIndex = 30;
            opacity = 1;
          } else if (isTop) {
            // Pushed up to -115% so it completely clears the center card without touching
            yOffset = "-115%"; 
            scale = 0.9;
            zIndex = 20;
            opacity = 1; 
          } else if (isBottom) {
            // Pushed down to 115% so it clears the center card completely
            yOffset = "115%"; 
            scale = 0.9;
            zIndex = 20;
            opacity = 1;
          } else {
            yOffset = "200%"; 
            scale = 0.5;
            zIndex = 0;
            opacity = 0;
          }

          return (
            <motion.div
              key={service.id}
              onClick={() => handleCardClick(index)}
              // UPDATED SIZE: Changed from tall portraits to sleek landscape cards
              className={`absolute w-[280px] h-[180px] md:w-[480px] md:h-[280px] rounded-3xl overflow-hidden shadow-2xl ${
                !isCenter ? "cursor-pointer" : "cursor-default"
              }`}
              initial={false}
              animate={{ y: yOffset, scale, zIndex, opacity }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], 
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover filter brightness-[0.85]"
              />

              <motion.div 
                className="absolute inset-0 bg-orange-600/40 backdrop-blur-md"
                initial={false}
                animate={{ 
                  opacity: isCenter ? 0 : 1 
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], 
                }}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col items-center justify-center mb-12 h-32 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex} 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="bg-white text-black px-6 py-2.5 rounded-full font-sans font-bold text-sm md:text-base flex items-center gap-3 shadow-xl">
              <span className="font-mono text-gray-500">{services[activeIndex].id}</span>
              <span>{services[activeIndex].title}</span>
            </div>

            <p className="max-w-xl text-center text-gray-400 text-sm md:text-base leading-relaxed px-4">
              {services[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}  */