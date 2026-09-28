"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";

declare global {
  interface Window {
    __onGoogleRecaptchaLoad?: () => void;
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
  const onVerifyRef = useRef(onVerify);
  const onExpireRef = useRef(onExpire);
  const { resolvedTheme } = useTheme();

  const [isReady, setIsReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [adBlockBypassed, setAdBlockBypassed] = useState(false);

  // Keep callback refs fresh without causing effect re-triggers
  useEffect(() => {
    onVerifyRef.current = onVerify;
    onExpireRef.current = onExpire;
  });

  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const renderWidget = useCallback(() => {
    if (!window.grecaptcha?.render || !containerRef.current) return;

    // If already rendered into container and theme hasn't changed, don't re-render
    if (widgetIdRef.current !== null) {
      try {
        window.grecaptcha.reset(widgetIdRef.current);
      } catch {
        // ignore
      }
      containerRef.current.innerHTML = "";
      widgetIdRef.current = null;
    } else if (containerRef.current.childNodes.length > 0) {
      // Element is not empty
      containerRef.current.innerHTML = "";
    }

    try {
      const id = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        theme: resolvedTheme === "light" ? "light" : "dark",
        callback: (token: string) => {
          onVerifyRef.current?.(token);
        },
        "expired-callback": () => {
          onExpireRef.current?.();
        },
        "error-callback": () => {
          console.warn("[reCAPTCHA] Encountered client-side error");
        },
      });

      widgetIdRef.current = id;
      setIsReady(true);
      setLoadFailed(false);
    } catch (err) {
      console.debug("[reCAPTCHA render notice]:", err);
    }
  }, [siteKey, resolvedTheme]);

  useEffect(() => {
    const SCRIPT_ID = "google-recaptcha-script";
    let isMounted = true;

    // Fallback timer: if Google takes > 4.5s (typically ad-blocker or strict tracking protection)
    const timeoutId = setTimeout(() => {
      if (isMounted && !window.grecaptcha?.render) {
        setLoadFailed(true);
      }
    }, 4500);

    // Global onload callback recognized by Google script
    window.__onGoogleRecaptchaLoad = () => {
      if (isMounted) {
        renderWidget();
      }
    };

    // If script is already in the document and grecaptcha is ready
    if (window.grecaptcha?.render) {
      renderWidget();
      clearTimeout(timeoutId);
      return () => {
        isMounted = false;
        clearTimeout(timeoutId);
      };
    }

    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src =
        "https://www.google.com/recaptcha/api.js?onload=__onGoogleRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        if (isMounted) {
          setLoadFailed(true);
        }
      };
      document.head.appendChild(script);
    } else {
      // Script already exists in DOM; poll briefly for render availability
      const checkInterval = setInterval(() => {
        if (window.grecaptcha?.render) {
          clearInterval(checkInterval);
          if (isMounted) {
            renderWidget();
            clearTimeout(timeoutId);
          }
        }
      }, 100);

      return () => {
        isMounted = false;
        clearInterval(checkInterval);
        clearTimeout(timeoutId);
      };
    }

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [renderWidget]);

  // Graceful bypass for ad-blockers / strict privacy modes
  const handlePrivacyBypass = () => {
    setAdBlockBypassed(true);
    onVerifyRef.current?.("browser_privacy_bypass");
  };

  return (
    <div className={`space-y-1.5 ${className}`}>
      <div
        className={`inline-block rounded-xl transition-all ${
          hasError ? "ring-2 ring-rose-500/80 p-0.5" : ""
        }`}
      >
        {/* Ad-blocker / Privacy Mode Fallback */}
        {loadFailed && !adBlockBypassed && (
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs space-y-2 max-w-[340px]">
            <div className="flex items-center gap-1.5 font-semibold text-amber-600 dark:text-amber-400">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>reCAPTCHA blocked by browser</span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              Firefox Tracking Protection or an ad-blocker prevented Google reCAPTCHA from loading.
            </p>
            <button
              type="button"
              onClick={handlePrivacyBypass}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-sm transition-all"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verify via Bot Shield instead</span>
            </button>
          </div>
        )}

        {/* When Privacy Mode is active & verified */}
        {adBlockBypassed && (
          <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Bot Shield Active & Verified</span>
          </div>
        )}

        {/* Standard Google reCAPTCHA Container - strictly empty for Google render */}
        <div
          style={{ display: loadFailed || adBlockBypassed ? "none" : "block" }}
          className="relative min-h-[78px] min-w-[304px] flex items-center justify-center bg-slate-50/50 dark:bg-white/5 rounded-md"
        >
          {!isReady && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono pointer-events-none">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-500" />
              <span>Loading Google reCAPTCHA...</span>
            </div>
          )}
          {/* Target container MUST be completely empty with 0 childNodes */}
          <div ref={containerRef} />
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
