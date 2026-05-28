"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="h-screen flex items-center justify-center bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold">About Me</h2>
      </motion.div>
    </section>
  );
}