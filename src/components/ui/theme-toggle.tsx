"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-400" />
    );
  }

  const isDark = resolvedTheme === "dark" || theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-9 w-9 rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-200 cursor-pointer flex items-center justify-center focus:outline-none"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-indigo-400 transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
}
