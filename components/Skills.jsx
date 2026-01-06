"use client";

import { motion } from "framer-motion";
import { FaDatabase, FaPython, FaReact, FaNodeJs, FaGitAlt, FaMicrosoft } from "react-icons/fa";
import {
  SiPostgresql,
  SiLooker,
  SiNextdotjs,
  SiPhp,
  SiTypescript
} from "react-icons/si";

import { FaChartBar } from "react-icons/fa"; // icon untuk Power BI


// Map skills to icons
const skillIcons = {
  "SQL": <FaDatabase className="inline mr-2" />,
  "PostgreSQL": <SiPostgresql className="inline mr-2" />,
  "Power BI": <FaChartBar className="inline mr-2" />,   // ✔ FIX
  "Looker Studio": <SiLooker className="inline mr-2" />,
  "Python": <FaPython className="inline mr-2" />,
  "Next.js": <SiNextdotjs className="inline mr-2" />,
  "React": <FaReact className="inline mr-2" />,
  "PHP": <SiPhp className="inline mr-2" />,
  "TypeScript": <SiTypescript className="inline mr-2" />,
  "Node.js": <FaNodeJs className="inline mr-2" />,
  "Git": <FaGitAlt className="inline mr-2" />,
  "Microsoft Office": <FaMicrosoft className="inline mr-2" />,
};


const skills = [
  "SQL",
  "PostgreSQL",
  "Power BI",
  "Looker Studio",
  "Python",
  "Next.js",
  "React",
  "PHP",
  "TypeScript",
  "Node.js",
  "Git",
  "Microsoft Office",
];

export default function Skills() {
  // Container animation with stagger for a cascading effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger each child by 0.1s
        delayChildren: 0.2,
      },
    },
  };

  // Item animation with scale and rotate on hover
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <section className="mb-14">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold mb-6 text-white"
      >
        Skills
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover="hover"
            className="
              bg-gradient-to-br from-gray-800 to-gray-900
              px-4 py-3
              rounded-xl
              text-center
              border border-gray-600
              cursor-pointer
              hover:border-blue-400
              hover:shadow-xl
              hover:shadow-blue-500/20
              transition-all duration-300
              flex items-center justify-center
              text-white
            "
          >
            {skillIcons[skill]}
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
