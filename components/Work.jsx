"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ICONS
import {
  FaDatabase,
  FaCogs,
  FaCoins,
  FaReact,
  FaHtml5,
  FaCss3,
  FaInstagram,
  FaGithub,
  FaChartBar,
  FaCamera,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiLooker,
  SiNextdotjs,
  SiNodedotjs,
  SiCanva,
  SiPostgresql,
  SiPostman,
  SiDbeaver,
  SiGoogleappsscript,
  SiObsstudio,
} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

// ==================== DATA WORK EXPERIENCE ========================
const works = [
  {
    title: "Creative Design and Technology",
    desc: "PT. BFI Finance Indonesia Tbk",
    periode: "Mar 2025 – Now",
    portfolioPdf: "/assets/portofolio/Portofolio-PBI.pdf",
    hasil: [
      "Mengelola dan memproses data karyawan menggunakan SQL.",
      "Membangun Dashboard Analitik menggunakan Power BI.",
      "Membangun Sistem Peminjaman Alat Multimedia Internal menggunakan App Sheet.",
      "Mengelola Learning Management System (LMS) karyawan.",
      "Mendukung pelaksanaan event perusahaan seperti live session & webinar.",
    ],
    skills: [
      <SiMysql key="mysql2" className="text-orange-400 text-xl" />,
      <FaChartBar key="powerbi" className="text-yellow-400 text-xl" />,
      <SiLooker key="looker" className="text-blue-400 text-xl" />,
      <FaDatabase key="db" className="text-indigo-300 text-xl" />,
      <SiPostgresql key="postgresql" className="text-blue-600 text-xl" />,
      <FaGithub key="github" className="text-gray-400 text-xl" />,
      <SiGoogleappsscript key="gas" className="text-yellow-400 text-xl" />,
      <SiObsstudio key="obs" className="text-blue-400 text-xl" />,
      <FaCamera key="camera" className="text-white-400 text-xl" />,
    ],
    icon: <FaCoins className="text-blue-400 text-xl" />,
  },

  {
    title: "AI Software Engineer",
    desc: "PT. Salam Pacific Indonesia Lines",
    periode: "Feb 2025 – Mar 2025",
    portfolioUrl:"https://github.com/PanjiKumbara/WebReportKendaraan",
    hasil: [
      "Membangun aplikasi web laporan kendaraan (Frontend & Backend).",
      "Merancang database untuk pengolahan data web laporan kendaraan.",
      "Berkoordinasi dengan tim untuk integrasi sistem.",
    ],
    skills: [
      <FaReact key="react" className="text-blue-400 text-xl" />,
      <SiNextdotjs key="nextjs" className="text-white text-xl" />,
      <SiNodedotjs key="php" className="text-green-300 text-xl" />,
      <SiPostgresql key="postgresql" className="text-blue-600 text-xl" />,
      <FaGithub key="github" className="text-gray-400 text-xl" />,
      <SiPostman key="postman" className="text-red-400 text-xl" />,
    ],
    icon: <FaCogs className="text-green-400 text-xl" />,
  },

  {
    title: "Website & Social Media Developer",
    desc: "OK OCE Indonesia",
    periode: "Mar 2024 – Jun 2024",
    portfolioUrl: "https://github.com/PanjiKumbara/OK-OCE-Mineral",
    hasil: [
      "Membangun dan mengembangkan website OK OCE Mineral.",
      "Mengelola konten sosial media untuk meningkatkan engagement.",
      "Membantu pembuatan desain promosi & branding.",
    ],
    skills: [
      <SiJavascript key="js" className="text-yellow-400 text-xl" />,
      <FaHtml5 key="html5" className="text-orange-400 text-xl" />,
      <FaCss3 key="css3" className="text-blue-400 text-xl" />,
      <FaInstagram key="ig" className="text-purple-400 text-xl" />,
      <SiCanva key="canva" className="text-blue-400 text-xl" />,
    ],
    icon: <CgWebsite className="text-purple-400 text-xl" />,
  },
];

// ========================= COMPONENT ==================================

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-8 text-white tracking-wide"
      >
        Work Experience
      </motion.h2>

      {/* ======================== TIMELINE =========================== */}
      <div className="space-y-6 relative">
        <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-300/60 to-blue-800/40 rounded-full"></div>

        {works.map((project, index) => (
          <motion.div
            key={project.title}
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 30px rgba(0, 162, 255, 0.2)",
            }}
            className="
              relative ml-10 p-5 bg-white/5 border border-white/10 
              backdrop-blur-lg rounded-2xl shadow-md transition-all cursor-pointer
            "
          >
            {/* Timeline Number */}
            <div className="absolute -left-9 top-5 w-6 h-6 bg-blue-500 rounded-full border-4 border-black shadow-md flex items-center justify-center text-white text-xs">
              {index + 1}
            </div>

            {/* Icon */}
            <div className="mb-2">{project.icon}</div>

            {/* Title + Desc */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.desc}
            </p>

            <p className="text-blue-400 text-xs underline mt-2">
              Baca selengkapnya…
            </p>
          </motion.div>
        ))}
      </div>

      {/* =========================== MODAL =========================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#0f0f0f] border border-white/10 p-8 rounded-2xl w-[92%] max-w-md text-white shadow-xl"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300">{selectedProject.desc}</p>

              {/* Periode */}
              <p className="text-sm text-blue-400 font-semibold mt-4">
                Periode: {selectedProject.periode}
              </p>

              {/* Hasil */}
              <p className="font-semibold text-white mt-4 mb-2">Hasil:</p>
              <ul className="text-gray-300 text-sm space-y-1">
                {selectedProject.hasil.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>

              {/* Skills */}
              <p className="font-semibold text-white mt-4 mb-2">Skills:</p>
              <div className="flex items-center gap-3">
                {selectedProject.skills.map((icon, idx) => (
                  <span key={idx}>{icon}</span>
                ))}
              </div>

              {selectedProject.portfolioPdf && (
                <a
                  href={selectedProject.portfolioPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 
                  py-2 rounded-xl border border-red-500 text-red-400 hover:bg-red-500 hover:text-white
                  transition"
                >
                  📄 Lihat Portfolio (PDF)
                </a>
              )}

              {/* Portfolio Button */}
              {selectedProject.portfolioUrl && (
                <a
                  href={selectedProject.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 
                  py-2 rounded-xl border border-blue-500
                text-blue-400 hover:bg-blue-500 hover:text-white transition"
                >
                  <CgWebsite className="text-lg" />
                  Lihat Portofolio
                </a>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="mt-6 w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
