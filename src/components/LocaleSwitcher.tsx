"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { LOCALES, type Locale } from "@/lib/i18n";

const LABEL: Record<Locale, string> = {
  ja: "JP",
  en: "EN",
  zh: "ZH",
};

type Props = {
  current: Locale;
  variant?: "light" | "dark";
};

export const LocaleSwitcher = ({ current, variant = "light" }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const setLocale = (next: Locale) => {
    if (next === current) return;
    document.cookie = `locale=${next}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    startTransition(() => router.refresh());
  };

  const isDark = variant === "dark";
  const activeColor = isDark ? "#ddff1e" : "#1a1a1a";
  const idleColor = isDark ? "rgba(255,255,255,0.55)" : "#888";
  const sep = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.15)";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 0.5,
        opacity: isPending ? 0.6 : 1,
      }}
    >
      {LOCALES.map((loc, i) => (
        <span key={loc} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <button
            type="button"
            onClick={() => setLocale(loc)}
            disabled={isPending}
            aria-current={loc === current ? "true" : undefined}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: loc === current ? "default" : "pointer",
              color: loc === current ? activeColor : idleColor,
              fontWeight: loc === current ? 800 : 600,
              fontSize: 12,
              letterSpacing: 0.5,
              fontFamily: "inherit",
            }}
          >
            {LABEL[loc]}
          </button>
          {i < LOCALES.length - 1 && (
            <span style={{ color: sep }}>/</span>
          )}
        </span>
      ))}
    </div>
  );
};
