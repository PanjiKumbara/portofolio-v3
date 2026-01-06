"use client";

import { motion } from "framer-motion";

// Import components
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <Header />
        <About />
        <Skills />
        <Work />
        <Contact />
      </motion.div>
    </div>
  );
}
