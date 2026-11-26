import Link from "next/link";
import { policyNav } from "@/lib/info";

/** Shared frame of the informational pages: title card + sidebar of customer-service pages. */
export function InfoShell({ title, intro, current, children }: { title: string; intro: string; current: string; children: React.ReactNode }) {
  return (
    <>
      <section className="card info-hero">
        <span className="pill pill-accent">خدمات مشتریان</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      <div className="info-layout">
        <div>{children}</div>
        <nav className="card side-nav" aria-label="خدمات مشتریان">
          <h4>خدمات مشتریان</h4>
          {policyNav.map((n) => <Link key={n.href} href={n.href} aria-current={n.href === current ? "page" : undefined}>{n.label}</Link>)}
        </nav>
      </div>
    </>
  );
}
