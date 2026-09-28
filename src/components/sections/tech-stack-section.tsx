"use client";

import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK_ITEMS } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function TechStackSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-28 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-[#1163FB]" />
            <span>High-Performance Core Stacks</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
            Battle-Tested{" "}
            <span className="text-[#1163FB] dark:text-[#3B82F6]">
              Modern Engineering.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            We build exclusively with high-performance, open-standard, and cloud-native building blocks that guarantee zero vendor lock-in.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {TECH_STACK_ITEMS.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="p-5 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 hover:border-[#1163FB]/60 hover:shadow-xl hover:shadow-[#1163FB]/10 transition-[border-color,box-shadow] duration-200 group flex flex-col justify-between shadow-sm cursor-default"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                  {tech.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#1163FB] dark:group-hover:text-[#60A5FA] transition-colors">
                  {tech.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  {tech.badge}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
