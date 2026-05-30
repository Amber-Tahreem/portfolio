import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    // UPDATED: Changed from p-4/md:p-6 and gap-4/md:gap-8 to much tighter values.
    // p-2 (0.5rem) and gap-2 (0.5rem) on mobile, slightly larger on desktop.
    <main className="bg-white flex flex-col gap-2 p-2 md:gap-3 md:p-3">
      <Navbar/>
      <Hero />
      <About />
    </main>
  );
}