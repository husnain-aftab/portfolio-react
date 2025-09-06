import React from "react";
import { motion } from "framer-motion";
import { Button, Typography, Space } from "antd";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function Hero() {
  return (
        <section id="home" className="min-h-[85vh] relative overflow-hidden bg-gradient-to-br from-sky-50 to-white dark:from-navy-900 dark:to-navy-800">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 py-10">
        {/* Text */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Hi, I’m <span className="text-[rgb(var(--primary))]">Husnain Mughal</span>.
            <br /> I build delightful web experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 opacity-80"
          >
            Full-stack developer specializing in React, .NET, and AI-flavored apps.
            Focused on clean UI, performance, and developer experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 flex gap-3"
          >
            <a href="#projects" className="btn-primary rounded-lg">View Projects</a>
            <a href="#contact" className="btn-outline rounded-lg">Contact Me</a>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square w-72 md:w-96 rounded-3xl border border-black/10 dark:border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))]/20 via-transparent to-[rgb(var(--primary))]/30" />
            <div className="absolute inset-3 rounded-2xl bg-[rgb(var(--muted))]/40 backdrop-blur" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
