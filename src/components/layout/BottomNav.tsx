"use client";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useCart } from "@/lib/useStore";
import { faNum } from "@/lib/format";
import { useIsActive, useShell } from "./ShellContext";

/** Mobile-only tab bar (from the mobile landing mockup). */
export function BottomNav() {
  const { open } = useShell();
  const { count } = useCart();
  const isActive = useIsActive();
  const cur = (href: string) => (isActive(href) ? "page" as const : undefined);
  return (
    <nav className="bottom-nav" aria-label="ناوبری پایین">
      <Link href="/" aria-current={cur("/")}><Icon name="home" size={22} />خانه</Link>
      <button type="button" onClick={() => open("menu")}><Icon name="grid" size={22} />دسته‌بندی</button>
      <Link href="/gifts" aria-current={cur("/gifts")}><Icon name="gift" size={22} />هدیه</Link>
      <Link href="/wishlist" aria-current={cur("/wishlist")}><Icon name="heart" size={22} />علاقه‌مندی</Link>
      <button type="button" onClick={() => open("cart")}>
        <Icon name="cart" size={22} />سبد
        {count > 0 && <span className="dot">{faNum(count)}</span>}
      </button>
    </nav>
  );
}
