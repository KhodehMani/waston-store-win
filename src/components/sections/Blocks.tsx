import Link from "next/link";
import type { FaqItem, IconName, Promo, SubCategory } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VueIsland } from "@/components/ui/VueIsland";
import { faNum } from "@/lib/format";
import { newsletter } from "@/lib/content";

/** Round sub-category shortcuts under the category hero. */
export function SubCategoryNav({ base, subs, counts, active }: { base: string; subs: SubCategory[]; counts: Record<string, number>; active?: string }) {
  return (
    <nav className="subcats" aria-label="زیردسته‌ها">
      {subs.map((s) => (
        <Link key={s.slug} href={active === s.slug ? base : base + "?sub=" + s.slug} scroll={false} className="subcat" aria-pressed={active === s.slug}>
          <span className={"circle tone-" + s.tone}><Icon name={s.icon} size={26} /></span>
          {s.title}
          <small>{faNum(counts[s.slug] ?? 0)} کالا</small>
        </Link>
      ))}
    </nav>
  );
}

export function PromoPair({ promos }: { promos: Promo[] }) {
  return (
    <div className="promo-grid section">
      {promos.map((p) => (
        <div key={p.title} className={"promo " + (p.dark ? "dark" : "tone-" + (p.tone ?? "mint"))}>
          <div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <Link href={p.href} className={"btn btn-sm " + (p.dark ? "btn-secondary" : "btn-primary")}>{p.cta}</Link>
          </div>
          <Icon name={p.icon} size={56} strokeWidth={1.4} />
        </div>
      ))}
    </div>
  );
}

export function NeedsRow({ title, needs }: { title: string; needs: { title: string; text: string; icon: IconName }[] }) {
  return (
    <section className="section">
      <SectionHeader title={title} />
      <div className="grid-3">
        {needs.map((n) => (
          <div key={n.title} className="card need">
            <span className="ic"><Icon name={n.icon} size={20} /></span>
            <div><b>{n.title}</b><small>{n.text}</small></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BuyingGuide({ title, items }: { title: string; items: { title: string; text: string }[] }) {
  return (
    <section className="card guide section">
      <h2>{title}</h2>
      <div className="guide-grid">
        {items.map((g) => (<div key={g.title}><b>{g.title}</b><p>{g.text}</p></div>))}
      </div>
    </section>
  );
}

/** FAQ section — the accordion itself is the Vue "FaqAccordion" module. */
export function FaqSection({ items, id = "faq" }: { items: FaqItem[]; id?: string }) {
  return (
    <section className="section faq-wrap">
      <div className="faq-holder">
        <SectionHeader title="پرسش‌های پرتکرار" />
        <VueIsland name="FaqAccordion" props={{ items, idPrefix: id }} />
      </div>
    </section>
  );
}

export function CtaBand({ text, label, href }: { text: string; label: string; href: string }) {
  return (
    <section className="cta-band section">
      <span>{text}</span>
      <Link href={href} className="btn btn-secondary">{label}</Link>
    </section>
  );
}

export function NewsletterBox() {
  return (
    <section className="card newsletter section" aria-labelledby="nl-title">
      <div>
        <h3 id="nl-title">{newsletter.title}</h3>
        <p>{newsletter.text}</p>
      </div>
      <VueIsland name="NewsletterForm" className="newsletter-form" />
    </section>
  );
}

export { ArticleCard } from "./ArticleCard";
