"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);

  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-6 text-white tracking-wide"
      >
        Tentang Saya
      </motion.h2>

      {/* CARD WRAPPER */}
      <div
        className="relative w-full cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          ref={cardRef}
          className="relative w-full min-h-[420px]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT SIDE */}
          {/* FRONT SIDE */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900
             backdrop-blur-xl p-6 rounded-2xl
             border border-white/10 shadow-lg shadow-blue-500/5
             overflow-y-auto max-h-[65vh] md:max-h-none"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-gray-300 leading-relaxed mb-4 text-justify">
              Saya adalah seorang{" "}
              <span className="text-gray-50 font-semibold">
                Data Analyst / Software Engineer / Data Science
              </span>
              , berfokus pada Pengembangan Web, Machine Learning, dan
              Visualisasi Data. Berpengalaman membangun Web modern menggunakan{" "}
              <span className="text-gray-50 font-semibold">
                Next.js, SQL, Python
              </span>
              , serta beberapa pekerjaan{" "}
              <span className="text-gray-50 font-semibold">
                Visualisasi Data
              </span>{" "}
              menggunakan
              <span className="text-gray-50 font-semibold"> Power BI,</span> dan
              <span className="text-gray-50 font-semibold">
                {" "}
                Machine Learning
              </span>
              . Berikut beberapa proyek yang telah saya kerjakan:
            </p>

            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-xl">•</span>
                Membangun website interaktif berbasis Next.js/React.js.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-xl">•</span>
                Mengembangkan backend dengan PHP, Node.js, MySQL, dan API
                modern.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-xl">•</span>
                Visualisasi data dengan Power BI.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 text-xl">•</span>
                Tugas Akhir IoT Smart Garden dengan dashboard data.
              </li>
            </ul>

            <p className="mt-6 text-gray-300 italic">
              “Saya selalu tertarik pada teknologi baru dan senang membangun
              solusi yang modern dan impactful.”
            </p>
          </div>

          {/* BACK SIDE */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img
              src="/assets/images/profile.jpg"
              alt="Foto Profil"
              className="w-full h-full object-cover object-[50%_20%] rounded-2xl"
            />
          </div>
        </motion.div>
      </div>

      <p className="text-gray-400 text-center mt-3 text-sm">
        Klik untuk memutarnya 🔄
      </p>
    </section>
  );
}
;
