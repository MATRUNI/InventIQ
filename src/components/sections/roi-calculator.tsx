"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="roi-calculator" className="py-28 bg-slate-50 dark:bg-[#07090F] relative border-t border-slate-200 dark:border-white/10 transition-colors duration-200">
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
            <span>Enterprise Value Quantification</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] text-slate-950 dark:text-white">
            Architecture Impact &{" "}
            <span className="text-[#1163FB] dark:text-[#3B82F6]">
              ROI Engine.
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
            className="lg:col-span-6 rounded-3xl bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 p-8 space-y-6 shadow-xl"
          >
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-white/10">
              <Calculator className="w-5 h-5 text-[#1163FB]" />
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
                className="w-full accent-[#1163FB] h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>$10K/mo</span>
                <span>$250K/mo</span>
                <span>$500K+/mo</span>
              </div>
            </div>

            {/* Slider 2: Daily Requests */}
            <div className="space-y-3">
              <label htmlFor="roi-daily-requests" className="flex justify-between text-sm cursor-pointer">
                <span className="text-slate-700 dark:text-slate-300 font-medium">Daily Request Volume:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white text-base">
                  {dailyRequests}M req / day
                </span>
              </label>
              <input
                id="roi-daily-requests"
                aria-label="Daily Request Volume"
                type="range"
                min="1"
                max="100"
                step="1"
                value={dailyRequests}
                onChange={(e) => setDailyRequests(Number(e.target.value))}
                className="w-full accent-[#1163FB] h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>1M/day</span>
                <span>50M/day</span>
                <span>100M+/day</span>
              </div>
            </div>

            {/* Slider 3: Dev Team Size */}
            <div className="space-y-3">
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
                className="w-full accent-[#1163FB] h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
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
            className="lg:col-span-6 rounded-3xl bg-slate-100 dark:bg-[#0A0D15] border border-slate-300 dark:border-white/10 p-8 space-y-6 shadow-2xl relative overflow-hidden text-slate-900 dark:text-white transition-[border-color,box-shadow,background-color] duration-200"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1163FB]/15 blur-[90px] rounded-full pointer-events-none" />

            <div className="space-y-1">
              <span className="text-xs uppercase font-mono text-[#1163FB] dark:text-[#60A5FA] font-bold tracking-wider">
                Projected Annual Impact
              </span>
              <div className="text-4xl sm:text-5xl font-mono font-black text-slate-950 dark:text-white tracking-tight">
                ${annualSavings.toLocaleString()}
                <span className="text-base text-[#1163FB] dark:text-[#60A5FA] font-sans font-bold ml-2">/ year saved</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Direct infrastructure cost elimination through FinOps, spot arbitrage, and eBPF kernel routing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <div className="bg-white dark:bg-[#0E131E] p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-colors">
                <div className="flex items-center gap-2 text-[#1163FB] dark:text-[#60A5FA] mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-bold">Latency Drop</span>
                </div>
                <div className="text-2xl font-mono font-black text-slate-950 dark:text-white">-{latencyImprovement}%</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Average p99 speedup</div>
              </div>

              <div className="bg-white dark:bg-[#0E131E] p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm transition-colors">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold">Dev Hours Saved</span>
                </div>
                <div className="text-2xl font-mono font-black text-slate-950 dark:text-white">+{devHoursSaved} hrs</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">Per week in maintenance</div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0E131E] p-4 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center justify-between text-xs shadow-sm transition-colors">
              <span className="text-slate-700 dark:text-slate-300 font-semibold">Projected 3-Year Value ROI:</span>
              <span className="text-lg font-mono font-black text-[#1163FB] dark:text-[#60A5FA]">{projectedRoiMultiplier}x Return</span>
            </div>

            <div className="pt-2">
              <a href="#contact">
                <Button size="xl" variant="electric" className="w-full justify-center group rounded-full font-bold">
                  <span>Get Detailed ROI Audit Report</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1.5 transition-transform duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
