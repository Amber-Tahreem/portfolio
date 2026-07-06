/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_pksflft",   // Replace with your EmailJS Service ID
          "template_un1dkmh",  // Replace with your EmailJS Template ID
          form.current,
          "DdS38WqxO3oqo2cLE"    // Replace with your EmailJS Public Key
        )
        .then(
          () => {
            setIsSuccess(true);
            setIsSubmitting(false);
            form.current?.reset();

            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
          },
          (error) => {
            console.log("FAILED...", error.text);
            setIsSubmitting(false);
            alert("Something went wrong. Please try again.");
          }
        );
    }
  };

  return (
    <section className="relative w-full bg-[#050505] text-white pt-24 pb-32 md:pt-40 md:pb-40 px-4 md:px-12 lg:px-24 overflow-hidden rounded-[4rem] md:rounded-[10rem]">

      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-gradient-to-b from-orange-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">

        {/* Main Split Content */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 md:mb-32">

          {/* LEFT COLUMN: Text & Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-xs tracking-widest text-orange-500">CONTACT .05</span>
                <span className="h-px w-12 bg-orange-500/50" />
              </div>

              <h2 className="font-pixel text-4xl md:text-6xl lg:text-7xl tracking-widest text-left uppercase mb-8 leading-tight">
                LET'S<br />TALK
              </h2>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mb-12">
                Currently open for new opportunities. Whether you have a question, a project proposal, or just want to connect about frontend architecture and cinematic web experiences, I'll try my best to get back to you!
              </p>

              {/* Contact Links */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Direct Email</span>
                  <a
                    href="mailto:ambertahreem123@gmail.com"
                    className="font-sans text-xl md:text-2xl font-bold text-white hover:text-orange-400 transition-colors inline-block w-max"
                  >
                    ambertahreem123@gmail.com
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Phone</span>
                  <a
                    href="tel:03425764554"
                    className="font-sans text-xl md:text-2xl font-bold text-white hover:text-orange-400 transition-colors inline-block w-max"
                  >
                    0342 5764554
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Glassmorphic Form */}
          <div className="w-full lg:w-1/2">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-orange-500/5 backdrop-blur-2xl border border-orange-500/20 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col gap-6"
            >
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="font-mono text-xs text-gray-400 tracking-widest uppercase ml-2">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="font-mono text-xs text-gray-400 tracking-widest uppercase ml-2">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs text-gray-400 tracking-widest uppercase ml-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-4 w-full font-bold text-sm py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group ${isSuccess
                    ? "bg-orange-500 text-white"
                    : "bg-white text-black hover:bg-orange-500 hover:text-white disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black"
                  }`}
              >
                {isSubmitting ? (
                  "SENDING..."
                ) : isSuccess ? (
                  "MESSAGE SENT ✓"
                ) : (
                  <>
                    SEND MESSAGE
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </motion.form>
          </div>

        </div>

        {/* FOOTER */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono text-xs text-gray-500 tracking-widest uppercase">
            © {new Date().getFullYear()} Amber Tahreem. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Amber-Tahreem"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/amber-tahreem/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-gray-400 hover:text-white transition-colors tracking-widest uppercase"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}