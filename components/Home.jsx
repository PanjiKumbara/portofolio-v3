"use client"

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header */}
        <header className="flex flex-col gap-2 mb-12">
          <h1 className="text-4xl font-bold text-white">Panji Bara</h1>
          <p className="text-lg text-gray-400">Data Analyst / Data Science / Software Engineer</p>
        </header>

        {/* About */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-3 text-white">Tentang Saya</h2>
          <p className="text-gray-400 leading-relaxed">
            Saya adalah seorang developer yang berfokus pada pengembangan web dan mobile.
            Berpengalaman membangun aplikasi menggunakan Next.js, PHP, Flutter, serta beberapa proyek IoT.
            Saya senang mempelajari teknologi baru dan membuat solusi yang efisien dan modern.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4 text-white">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
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
            ].map((skill) => (
              <div key={skill} className="bg-gray-900 px-4 py-2 rounded-xl text-center border border-gray-700">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-4 text-white">Proyek Unggulan</h2>
          <div className="grid gap-6">
            {[
              {
                title: "OK OCE Mineral Web",
                desc: "Website company profile modern dengan manajemen data.",
              },
              {
                title: "Aplikasi Scan QR Makan Bergizi",
                desc: "Aplikasi Flutter untuk scanning QR dan pencatatan konsumsi makanan.",
              },
              {
                title: "IoT Smart Garden Fuzzy Logic",
                desc: "Pemantauan tanaman dengan sensor dan fuzzy logic.",
              },
              {
                title: "Website Ticket Reservasi",
                desc: "Aplikasi reservasi modern menggunakan Next.js & TypeScript.",
              },
            ].map((project) => (
              <div key={project.title} className="p-5 bg-gray-900 border border-gray-700 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-white">Kontak</h2>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-gray-900 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
              <Github />
            </a>
            <a href="#" className="p-3 bg-gray-900 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
              <Linkedin />
            </a>
            <a href="#" className="p-3 bg-gray-900 rounded-xl border border-gray-700 hover:bg-gray-800 transition">
              <Mail />
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
