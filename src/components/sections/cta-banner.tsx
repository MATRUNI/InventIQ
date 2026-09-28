"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal, ShieldCheck, CheckCircle2 } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-24 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-3xl bg-slate-100 dark:bg-gradient-to-r dark:from-[#0E131E] dark:via-[#090C14] dark:to-[#0E131E] border border-slate-300 dark:border-white/10 p-8 sm:p-16 overflow-hidden shadow-2xl text-slate-900 dark:text-white transition-[border-color,box-shadow,background-color] duration-200"
        >
          {/* Glowing backdrops */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1163FB]/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#CFF601]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-[#1163FB] dark:text-[#60A5FA] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Enterprise Partnership</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-[1.08]">
              Have a Mission-Critical Product in Mind?{" "}
              <span className="text-[#1163FB] dark:text-[#3B82F6]">
                Let&apos;s Build It.
              </span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Join tier-1 banks, healthcare pioneers, and global retailers who scaled their digital infrastructure with InventIQ&apos;s sovereign cloud and AI engineering teams.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="xl" variant="electric" className="w-full sm:w-auto rounded-full group font-bold">
                  <span>Schedule Architectural Review</span>
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Button>
              </a>

              <a href="#case-studies" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full font-bold"
                >
                  <span>Explore Portfolio</span>
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>NDA Protected Consultation</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#1163FB] dark:text-[#60A5FA] font-bold">
                <Terminal className="w-4 h-4" />
                <span>Direct Access to Principal Architects</span>
              </div>
              <div className="font-semibold text-slate-700 dark:text-slate-300">
                Guaranteed 48h Assessment
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
