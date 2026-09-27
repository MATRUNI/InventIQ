import React from "react";
import { TRUSTED_COMPANIES } from "@/lib/data";
import { Shield, CheckCircle2 } from "lucide-react";

export function TrustTicker() {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800/80 bg-slate-50/70 dark:bg-[#070B14]/60 backdrop-blur-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Trust Statement */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Trusted by Enterprise Leaders
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                Fortune 500 Infrastructure Standard
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              </p>
            </div>
          </div>

          {/* Companies Grid / Ticker */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full md:w-auto flex-1 max-w-3xl">
            {TRUSTED_COMPANIES.slice(0, 4).map((company) => (
              <div
                key={company.name}
                className="group flex flex-col items-center justify-center py-2.5 px-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-500/40 shadow-sm transition-all duration-200"
              >
                <span className="font-mono text-xs font-bold tracking-widest text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {company.name}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                  {company.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
