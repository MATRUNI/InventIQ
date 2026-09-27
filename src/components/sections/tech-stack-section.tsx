import React from "react";
import { TECH_STACK_ITEMS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="violet" dot>
            Production Infrastructure
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
            Battle-Tested{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Technology Ecosystem
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            We build exclusively with high-performance, open-standard, and cloud-native building blocks that guarantee zero vendor lock-in.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_STACK_ITEMS.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#0A0E18] border border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-all duration-300 group flex flex-col justify-between shadow-sm dark:shadow-md"
            >
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">
                  {tech.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                  {tech.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  {tech.badge}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
