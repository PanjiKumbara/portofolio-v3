"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  // ==========================
  // Typing Effect State
  // ==========================
  const roles = [
    "Data Analyst",
    "Data Science",
    "Software Engineer",
    "Data Enthusiast",
    "Tech Enthusiast",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Adding characters
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          // Start deleting after pause
          setTimeout(() => setIsDeleting(true), 1100);
        }
      } else {
        // Deleting characters
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <header className="flex flex-col gap-3 mb-12 select-none">
      {/* Animated Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 18px rgba(0, 150, 255, 0.8)",
          color: "#3ab4ff",
        }}
        className="text-4xl font-extrabold text-white tracking-wide cursor-pointer"
      >
        Panji Kumbara
      </motion.h1>

      {/* Typing Effect */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-lg text-gray-400 font-light h-6"
      >
        {displayText}
        <span className="border-r-2 border-gray-300 ml-1 animate-pulse"></span>
      </motion.p>
    </header>
  );
}
