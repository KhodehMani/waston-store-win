"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Panel = "cart" | "menu" | null;
const Ctx = createContext<{ panel: Panel; open: (p: Panel) => void; close: () => void }>({ panel: null, open: () => {}, close: () => {} });

/** Holds which overlay (cart drawer / mobile menu) is open; closes on navigation and Escape. */
export function ShellProvider({ children }: { children: React.ReactNode }) {
  const [panel, setPanel] = useState<Panel>(null);
  const pathname = usePathname();
  useEffect(() => setPanel(null), [pathname]);
  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPanel(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [panel]);
  return <Ctx.Provider value={{ panel, open: setPanel, close: () => setPanel(null) }}>{children}</Ctx.Provider>;
}

export const useShell = () => useContext(Ctx);

export function useIsActive() {
  const pathname = usePathname();
  return (href: string) => {
    const path = href.split("?")[0];
    return path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(path + "/");
  };
}
