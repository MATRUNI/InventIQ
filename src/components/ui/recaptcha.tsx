"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      render: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          callback: (response: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
          size?: "normal" | "compact";
        }
      ) => number;
      reset: (opt_widget_id?: number) => void;
      getResponse: (opt_widget_id?: number) => string;
    };
  }
}

interface RecaptchaProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  hasError?: boolean;
  errorMessage?: string;
  className?: string;
}

export function Recaptcha({
  onVerify,
  onExpire,
  hasError = false,
  errorMessage = "Please complete the reCAPTCHA verification",
  className = "",
}: RecaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const { resolvedTheme } = useTheme();
  const [isReady, setIsReady] = useState(false);

  // Uses custom Google site key or Google's official public test site key
  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  useEffect(() => {
    const SCRIPT_ID = "google-recaptcha-script";
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

    const renderWidget = () => {
      if (!window.grecaptcha || !containerRef.current) return;

      window.grecaptcha.ready(() => {
        if (!containerRef.current) return;

        // Reset if re-rendering on theme toggle
        if (widgetIdRef.current !== null) {
          containerRef.current.innerHTML = "";
          widgetIdRef.current = null;
        }

        if (!window.grecaptcha || !containerRef.current) return;

        try {
          const id = window.grecaptcha.render(containerRef.current, {
            sitekey: siteKey,
            theme: resolvedTheme === "light" ? "light" : "dark",
            callback: (token: string) => {
              onVerify(token);
            },
            "expired-callback": () => {
              onExpire?.();
            },
          });
          widgetIdRef.current = id;
          setIsReady(true);
        } catch (e) {
          console.debug("reCAPTCHA render notice:", e);
        }
      });
    };

    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        renderWidget();
      };
      document.head.appendChild(script);
    } else if (window.grecaptcha) {
      renderWidget();
    } else {
      script.addEventListener("load", renderWidget);
    }

    return () => {
      if (script) {
        script.removeEventListener("load", renderWidget);
      }
    };
  }, [resolvedTheme, siteKey, onVerify, onExpire]);

  return (
    <div className={`space-y-1.5 ${className}`}>
      <div
        className={`inline-block rounded-lg transition-all ${
          hasError ? "ring-2 ring-rose-500/80 p-0.5 rounded-lg" : ""
        }`}
      >
        <div
          ref={containerRef}
          className="min-h-[78px] min-w-[304px] flex items-center justify-center bg-slate-50/50 dark:bg-white/5 rounded-md"
        >
          {!isReady && (
            <div className="text-xs text-slate-400 font-mono animate-pulse">
              Loading Google reCAPTCHA...
            </div>
          )}
        </div>
      </div>

      {hasError && (
        <p className="text-[11px] text-rose-500 dark:text-rose-400 font-medium">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
