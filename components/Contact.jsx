"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-white">Kontak</h2>
      <div className="flex gap-4">
        <a
          href="https://github.com/PanjiKumbara"
          className="p-3 bg-gray-900 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/panji-kumbara/"
          className="p-3 bg-gray-900 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:kasirunpanji@gmail.com"
          className="p-3 bg-gray-900 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
        >
          <Mail />
        </a>
      </div>
    </section>
  );
}
