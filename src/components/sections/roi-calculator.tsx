"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, Zap, Clock, ArrowRight } from "lucide-react";

export function RoiCalculator() {
  const [monthlySpend, setMonthlySpend] = useState<number>(85000);
  const [dailyRequests, setDailyRequests] = useState<number>(25);
  const [teamSize, setTeamSize] = useState<number>(35);

  const annualSavings = Math.round(monthlySpend * 12 * 0.44);
  const devHoursSaved = Math.round(teamSize * 7.5);
  const latencyImprovement = dailyRequests > 50 ? 74 : 62;
  const projectedRoiMultiplier = Math.round((annualSavings / (monthlySpend * 1.5)) * 10) / 10;

  return (
    <section id="roi-calculator" className="py-24 bg-slate-50 dark:bg-[#080C17] relative border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <Badge variant="cyan" dot>
            Enterprise Value Quantification
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Interactive Architecture{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              ROI Calculator
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Estimate your annual cloud cost savings, engineering velocity uplift, and latency reductions based on benchmark data from 180+ enterprise deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Controls column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#0D131F] border border-slate-200 dark:border-slate-800 p-8 space-y-6 shadow-md dark:shadow-xl"
          >
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <Calculator className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Your Current Infrastructure Parameters</h3>
            </div>

            {/* Slider 1: Monthly Cloud Spend */}
            <div className="space-y-3">
              <label htmlFor="roi-monthly-spend" className="flex justify-between text-sm cursor-pointer">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Monthly Cloud Spend:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white text-base">
                  ${monthlySpend.toLocaleString()} / mo
                </span>
              </label>
              <input
                id="roi-monthly-spend"
                aria-label="Monthly Cloud Spend"
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full accent-cyan-600 dark:accent-cyan-400 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>$10k/mo</span>
                <span>$250k/mo</span>
                <span>$500k/mo</span>
              </div>
            </div>

            {/* Slider 2: Daily Requests / Transactions */}
            <div className="space-y-3 pt-2">
              <label htmlFor="roi-daily-requests" className="flex justify-between text-sm cursor-pointer">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Daily API Requests / Events:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white text-base">
                  {dailyRequests} Million / day
                </span>
              </label>
              <input
                id="roi-daily-requests"
                aria-label="Daily API Requests and Events"
                type="range"
                min="5"
                max="250"
                step="5"
                value={dailyRequests}
                onChange={(e) => setDailyRequests(Number(e.target.value))}
                className="w-full accent-blue-600 dark:accent-blue-400 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>5M</span>
                <span>125M</span>
                <span>250M+</span>
              </div>
            </div>

            {/* Slider 3: Engineering Team Size */}
            <div className="space-y-3 pt-2">
              <label htmlFor="roi-team-size" className="flex justify-between text-sm cursor-pointer">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Engineering Team Size:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white text-base">
                  {teamSize} Engineers
                </span>
              </label>
              <input
                id="roi-team-size"
                aria-label="Engineering Team Size"
                type="range"
                min="5"
                max="200"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-indigo-600 dark:accent-indigo-400 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>5 devs</span>
                <span>100 devs</span>
                <span>200+ devs</span>
              </div>
            </div>
          </motion.div>

          {/* Results column with Framer Motion counter pulse */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-cyan-50/80 via-indigo-50/40 to-white dark:from-[#0E1524] dark:via-[#111A2E] dark:to-[#0A0F1D] border border-cyan-300/80 dark:border-cyan-500/40 p-8 space-y-6 shadow-xl dark:shadow-2xl relative overflow-hidden text-slate-900 dark:text-white transition-colors duration-200"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

            <div className="space-y-1">
              <span className="text-xs uppercase font-mono text-cyan-700 dark:text-cyan-400 font-bold tracking-wider">
                Projected Annual Impact
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={annualSavings}
                  initial={{ opacity: 0.7, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="text-4xl sm:text-5xl font-mono font-black text-slate-950 dark:text-white tracking-tight"
                >
                  ${annualSavings.toLocaleString()}
                  <span className="text-base text-cyan-700 dark:text-cyan-400 font-sans font-normal ml-2">/ year saved</span>
                </motion.div>
              </AnimatePresence>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Direct infrastructure cost elimination through FinOps, spot arbitrage, and eBPF kernel routing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="bg-white/90 dark:bg-[#090D16]/90 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-sm transition-colors">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-semibold">Latency Reduction</span>
                </div>
                <div className="text-2xl font-mono font-bold text-slate-950 dark:text-white">-{latencyImprovement}%</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Average p99 speedup</div>
              </div>

              <div className="bg-white/90 dark:bg-[#090D16]/90 p-4 rounded-xl border border-slate-200 dark:border-slate-800/80 shadow-sm transition-colors">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-semibold">Dev Hours Saved</span>
                </div>
                <div className="text-2xl font-mono font-bold text-slate-950 dark:text-white">+{devHoursSaved} hrs</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Per week in maintenance</div>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs shadow-sm transition-colors">
              <span className="text-slate-700 dark:text-slate-300 font-medium">Projected 3-Year Value ROI:</span>
              <span className="text-lg font-mono font-bold text-cyan-700 dark:text-cyan-400">{projectedRoiMultiplier}x Return</span>
            </div>

            <div className="pt-2">
              <a href="#contact">
                <Button size="lg" variant="primary" className="w-full justify-center group">
                  <span>Get Detailed ROI Audit Report</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
