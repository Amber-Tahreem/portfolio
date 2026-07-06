"use client"; 
import { motion } from "framer-motion"; 
import Image from "next/image"; 

export default function About() {   
  return (     
    <section className="relative min-h-screen md:min-h-[150vh] w-full flex flex-col items-center justify-center overflow-hidden p-4 py-16 md:p-8 md:py-32 rounded-[2.5rem] md:rounded-[10rem]">              
      
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
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl gap-8 md:gap-12 mt-6 md:mt-24">                  
        
        {/* 2. Glassmorphism Card (Tighter, smaller pill shape) */}         
        <motion.div           
          initial={{ opacity: 0, y: 40 }}           
          whileInView={{ opacity: 1, y: 0 }}           
          viewport={{ once: true, margin: "-100px" }}           
          transition={{ duration: 0.8, ease: "easeOut" }}           
          // Mobile dimensions adjusted (py-8 on mobile instead of 12)
          className="relative w-[92%] md:w-auto px-6 md:px-24 py-8 md:py-16 bg-orange-500/10 backdrop-blur-xl border border-orange-500/30 rounded-[1.5rem] md:rounded-[4rem] flex flex-col items-center justify-center shadow-2xl"         
        >                      
          {/* Top Left Label */}           
          <div className="absolute top-4 left-4 md:top-8 md:left-8">             
            <span className="font-mono text-[9px] md:text-xs tracking-widest text-white/80 uppercase">               
              ABOUT ME .01             
            </span>           
          </div>           

          {/* Main Pixel Heading */}           
          <motion.h2              
            initial={{ opacity: 0, scale: 0.9 }}             
            whileInView={{ opacity: 1, scale: 1 }}             
            transition={{ duration: 0.6, delay: 0.2 }}             
            // font size safely handles 8vw limit on tiny viewports
            className="font-pixel text-[8vw] sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-widest text-center leading-none mt-4 md:mt-2"           
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
          className="max-w-2xl text-center text-xs sm:text-sm md:text-base text-white/90 leading-relaxed font-sans font-medium px-4"         
        >           
          A frontend developer dedicated to crafting immersive digital experiences at the intersection of high-fidelity aesthetics and optimized web architectures. With a focus on fluid animations and modern frameworks, I build user-centric applications that establish a strong visual presence and perform flawlessly.
        </motion.p>                
      </div>     
    </section>   
  ); 
}