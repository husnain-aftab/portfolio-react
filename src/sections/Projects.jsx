import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Lingostry", desc: "Language learning platform (ASP.NET Core + Angular, mobile app)." },
  { title: "DocuWise", desc: "AI-powered document summarizer & categorizer (ASP.NET + Python)." },
  { title: "InsightInBytes", desc: "Weekly tech/AI newsletter with curated insights." },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="mb-8 text-3xl font-semibold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="card p-5"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm opacity-80">{p.desc}</p>
            <div className="mt-4">
              <a href="#" className="btn-outline rounded-lg">View details</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
