import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 text-3xl font-semibold text-center"
      >
        About
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl opacity-80 text-center"
      >
        I’m a software engineer focused on building performant, accessible, and
        elegant interfaces. I enjoy React, .NET, and ML/AI integrations. I care
        about developer experience, documentation, and delightful micro-interactions.
      </motion.p>
    </section>
  );
}
