import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to your API / Formspree / EmailJS
    setStatus("Thanks! I’ll get back to you soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 flex flex-col items-center">
      <h2 className="mb-6 text-3xl font-semibold text-center">Contact</h2>
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-6 max-w-xl w-full space-y-4"
      >
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea rows="4" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2" required />
        </div>
        <button className="btn-primary rounded-lg" type="submit">Send</button>
        {status && <p className="text-sm opacity-80 text-center">{status}</p>}
      </motion.form>
    </section>
  );
}
