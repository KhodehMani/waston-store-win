"use client";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { navMain, navSecondary } from "@/lib/content";
import { policyNav } from "@/lib/info";
import { useIsActive, useShell } from "./ShellContext";
import { Logo } from "./Header";

/** Mobile slide-in navigation (hamburger + bottom-nav "دسته‌بندی"). */
export function MobileMenu() {
  const { panel, close } = useShell();
  const isActive = useIsActive();
  if (panel !== "menu") return null;
  const groups = [
    { title: "فروشگاه", items: navMain },
    { title: "WASTON", items: navSecondary },
    { title: "خدمات مشتریان", items: policyNav },
  ];
  return (
    <>
      <div className="drawer-backdrop" onClick={close} />
      <div className="drawer" role="dialog" aria-modal="true" aria-label="منو">
        <div className="drawer-head"><Logo /><button type="button" className="icon-btn" aria-label="بستن" onClick={close}><Icon name="close" /></button></div>
        <nav className="drawer-body drawer-nav">
          {groups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              {g.items.map((n) => (
                <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}>{n.label}<Icon name="chevron" size={16} /></Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
