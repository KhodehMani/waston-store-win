"use client";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { navMain, navSecondary } from "@/lib/content";
import { useCart, useStore } from "@/lib/useStore";
import { faNum } from "@/lib/format";
import { store } from "@/lib/store";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBox } from "./SearchBox";
import { useIsActive, useShell } from "./ShellContext";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="WASTON — صفحه اصلی">
      <b>WASTON</b>
      <small>A BETTER FEELING OF HOME</small>
    </Link>
  );
}

export function Header() {
  const { open } = useShell();
  const { count } = useCart();
  const { wishlist } = useStore();
  const isActive = useIsActive();

  return (
    <>
      <div className="topbar">نسخه نمایشی — همه محصولات، قیمت‌ها، تخفیف‌ها، امتیازها و متن‌ها «داده آزمایشی» هستند.</div>
      <header className="header">
        <div className="container header-row">
          <button type="button" className="icon-btn m-only" aria-label="منو" onClick={() => open("menu")}><Icon name="menu" size={20} /></button>
          <Logo />
          <SearchBox />
          <div className="header-actions">
            <ThemeToggle />
            <button type="button" className="btn btn-ghost d-only" onClick={() => store.toast("ورود و ثبت‌نام در نسخه نهایی به سرویس احراز هویت متصل می‌شود")}>
              <Icon name="user" size={18} /> ورود | ثبت‌نام
            </button>
            <Link href="/wishlist" className="icon-btn d-only" aria-label={"علاقه‌مندی‌ها: " + faNum(wishlist.length)}>
              <Icon name="heart" size={18} />
              {wishlist.length > 0 && <span className="wish-count">{faNum(wishlist.length)}</span>}
            </Link>
            <button type="button" className="btn btn-primary cart-btn" onClick={() => open("cart")} aria-label={"سبد خرید: " + faNum(count) + " کالا"}>
              <Icon name="cart" size={18} /> <span className="d-only">سبد خرید</span> <span className="count">{faNum(count)}</span>
            </button>
          </div>
        </div>
        <nav className="nav" aria-label="منوی اصلی">
          <div className="container nav-row">
            <div className="nav-main">
              {navMain.map((n) => <Link key={n.href} href={n.href} aria-current={isActive(n.href) ? "page" : undefined}>{n.label}</Link>)}
            </div>
            <div className="nav-sec">
              {navSecondary.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
