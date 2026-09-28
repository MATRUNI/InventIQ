import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "emerald" | "neon" | "electric" | "cyber";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1163FB] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]";

    const variants = {
      primary:
        "bg-[#1163FB] hover:bg-[#0C4FCB] text-white shadow-lg shadow-[#1163FB]/25 border border-[#3B82F6]/40 hover:shadow-[#1163FB]/40 font-semibold",
      electric:
        "bg-gradient-to-r from-[#1163FB] via-[#2563EB] to-[#0C4FCB] hover:from-[#0C4FCB] hover:to-[#1163FB] text-white shadow-xl shadow-[#1163FB]/30 border border-white/20 font-semibold",
      cyber:
        "bg-[#CFF601] hover:bg-[#BCE000] text-black font-bold shadow-lg shadow-[#CFF601]/25 border border-[#CFF601]/60",
      secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 dark:border-slate-700",
      outline:
        "border border-slate-300 dark:border-white/15 hover:border-[#1163FB] dark:hover:border-[#1163FB] text-slate-800 dark:text-slate-100 hover:text-[#1163FB] dark:hover:text-white bg-white/80 dark:bg-white/5 hover:bg-blue-50/50 dark:hover:bg-white/10 backdrop-blur-md shadow-sm",
      ghost:
        "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5",
      emerald:
        "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/20 border border-emerald-400/30",
      neon:
        "bg-[#1163FB]/10 dark:bg-[#1163FB]/20 text-[#1163FB] dark:text-[#60A5FA] border border-[#1163FB]/30 dark:border-[#1163FB]/40 hover:bg-[#1163FB]/20 shadow-[0_0_15px_rgba(17,99,251,0.2)]",
    };

    const sizes = {
      sm: "h-8 px-3.5 text-xs gap-1.5",
      md: "h-10 px-5 text-sm gap-2",
      lg: "h-12 px-7 text-base gap-2.5 font-semibold",
      xl: "h-14 px-8 text-lg gap-3 font-bold",
      icon: "h-10 w-10 p-0",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
