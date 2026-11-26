"use client";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type Theme = "light" | "dark";
export const THEME_KEY = "waston:theme";

/** Light/Dark switch — both themes are defined in the WASTON V1.0.1 design system. */
export function ThemeToggle({ className = "icon-btn" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);
  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch { /* ignore */ }
    setTheme(next);
  };
  return (
    <button type="button" className={className} onClick={toggle} aria-label={theme === "dark" ? "حالت روشن" : "حالت تاریک"}>
      <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
    </button>
  );
}
