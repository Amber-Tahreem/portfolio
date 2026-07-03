import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Stack from "@/sections/Stack";
import Navbar from "@/sections/Navbar";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="bg-white flex flex-col gap-2 p-2 md:gap-3 md:p-3">
      <Navbar />
      
      <div id="hero" className="w-full">
        <Hero />
      </div>
      
      <div id="about" className="w-full">
        <About />
      </div>
      
      <div id="services" className="w-full">
        <Services />
      </div>
      
      <div id="stack" className="w-full">
        <Stack />
      </div>
      
      <div id="projects" className="w-full">
        <Projects />
      </div>

      <div id="contact" className="w-full">
        <Contact />
      </div>
      
    </main>
  );
}