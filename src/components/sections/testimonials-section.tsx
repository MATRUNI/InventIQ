"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50/70 dark:bg-[#070B14] relative border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <Badge variant="emerald" dot>
            Verified Client Endorsements
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Trusted by Leaders at{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              High-Velocity Enterprises
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
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#0D131F] border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between hover:border-emerald-400 dark:hover:border-emerald-500/40 hover:shadow-xl dark:hover:shadow-emerald-500/5 transition-all duration-300 shadow-md dark:shadow-xl group relative overflow-hidden cursor-default"
            >
              <div className="space-y-4">
                {/* Top row: Star rating + Highlight pill */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                    {t.highlight}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-indigo-400/40 dark:text-indigo-500/30 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />

                <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {t.author}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} • <span className="text-indigo-600 dark:text-indigo-300">{t.company}</span>
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
