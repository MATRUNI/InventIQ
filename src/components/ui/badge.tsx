import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "indigo" | "blue" | "emerald" | "violet" | "outline" | "cyan";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "indigo",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    indigo:
      "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
    emerald:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20",
    violet:
      "bg-violet-500/10 text-violet-400 border-violet-500/30 hover:bg-violet-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20",
    outline:
      "bg-slate-900/60 text-slate-300 border-slate-700/80 hover:border-slate-600",
  };

  const dotColors = {
    indigo: "bg-indigo-400 shadow-[0_0_8px_#818CF8]",
    blue: "bg-blue-400 shadow-[0_0_8px_#60A5FA]",
    emerald: "bg-emerald-400 shadow-[0_0_8px_#34D399]",
    violet: "bg-violet-400 shadow-[0_0_8px_#A78BFA]",
    cyan: "bg-cyan-400 shadow-[0_0_8px_#22D3EE]",
    outline: "bg-slate-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors duration-150 backdrop-blur-md",
        variants[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full animate-pulse", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}
