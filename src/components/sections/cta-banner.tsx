import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal, ShieldCheck } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950 via-[#111827] to-slate-900 border border-indigo-500/40 p-8 sm:p-14 overflow-hidden shadow-2xl text-white">
          {/* Glowing backdrops */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-xs text-indigo-300 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Next-Gen Enterprise Infrastructure Readiness</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to eliminate latency and scale to millions of requests?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join tier-1 banks, healthcare pioneers, and global retailers who replaced fragile legacy monoliths with InventIQ's sovereign cloud and AI meshes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full sm:w-auto group">
                  <span>Schedule Architectural Review</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <a href="#case-studies" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-slate-900/60 border-slate-700 text-white hover:bg-slate-800">
                  <span>Explore Case Studies</span>
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Lock-in Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-400">
                <Terminal className="w-4 h-4" />
                <span>Kubernetes & GitOps Native</span>
              </div>
              <div>Sub-12ms p99 SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
