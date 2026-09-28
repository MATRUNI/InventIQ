"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="testimonials" className="py-28 bg-slate-50/70 dark:bg-[#07090F] relative border-t border-slate-200 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-[#1163FB] animate-pulse" />
            <span>Executive Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
            Trusted by Leaders at{" "}
            <span className="text-[#1163FB] dark:text-[#3B82F6]">
              Global Scale.
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Hear directly from the engineering executives whose mission-critical infrastructures run on InventIQ architecture.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#0E131E] dark:to-[#080B12] border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-between hover:border-[#1163FB]/60 hover:shadow-2xl hover:shadow-[#1163FB]/15 transition-[border-color,box-shadow] duration-200 group relative overflow-hidden cursor-default"
            >
              <div className="space-y-4">
                {/* Top row: Star rating + Highlight pill */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1163FB]/10 border border-[#1163FB]/30 text-[#1163FB] dark:text-[#60A5FA]">
                    {t.highlight}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#1163FB]/30 group-hover:text-[#1163FB] transition-colors" />

                <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {t.author}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t.role} • <span className="text-[#1163FB] dark:text-[#60A5FA] font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
