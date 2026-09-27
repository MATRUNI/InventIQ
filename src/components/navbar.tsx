"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
          ? "bg-[#090D16]/85 dark:bg-[#090D16]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-600 to-emerald-500 p-[1.5px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all">
              <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-indigo-400 group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                Invent<span className="text-indigo-400">IQ</span>
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase -mt-1">
                Enterprise Cloud & AI
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111827]/70 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full transition-colors hover:bg-slate-800/60"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Status indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SLA 99.999% Operational</span>
            </div>

            <ThemeToggle />

            <a href="/#contact">
              <Button size="sm" variant="primary" className="group">
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
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-4 pb-6 px-4 bg-[#0F172A] border border-slate-800 rounded-2xl space-y-3 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-indigo-400 rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Enterprise SLA: 99.999% Active</span>
              </div>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <Button size="md" variant="primary" className="w-full justify-center">
                  Talk to Architects
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
