"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ui/theme-toggle";
import { Cpu, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Tech Stack", href: "/#tech-stack" },
    { label: "ROI Engine", href: "/#roi-calculator" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#090D16]/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg dark:shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1163FB] via-[#2563EB] to-[#CFF601] p-[1.5px] shadow-lg shadow-[#1163FB]/25 group-hover:shadow-[#1163FB]/40 transition-all">
              <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#1163FB] group-hover:text-[#CFF601] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
                Invent<span className="text-[#1163FB] dark:text-[#3B82F6]">IQ</span>
              </span>
              <span className="text-[9px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase -mt-1">
                Global Product Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 dark:bg-[#0E131E]/80 border border-slate-200 dark:border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-full transition-colors hover:bg-slate-200/80 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Status indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SLA 99.999% Active</span>
            </div>

            <ThemeToggle />

            <a href="/#contact">
              <Button size="sm" variant="electric" className="rounded-full group text-xs font-bold px-4 py-2">
                <span>Talk to Architects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown with Framer Motion */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="sm:hidden mt-3 pt-4 pb-6 px-4 bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-2xl space-y-3 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Enterprise SLA: 99.999% Active</span>
                </div>
                <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button size="md" variant="primary" className="w-full justify-center">
                    Talk to Architects
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
