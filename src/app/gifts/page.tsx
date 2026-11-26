import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand, FaqSection } from "@/components/sections/Blocks";
import { ProductListing } from "@/components/product/ProductListing";
import { AddPackButton } from "@/components/product/AddPackButton";
import { giftables, productsIn } from "@/lib/products";
import { giftFaq, giftOccasions, giftSteps } from "@/lib/content";
import { faNum, toman } from "@/lib/format";

export const metadata: Metadata = { title: "هدیه", description: "هدیه برای خانه، با بسته‌بندی آماده و کارت تبریک." };

export default async function GiftsPage({ searchParams }: { searchParams: Promise<{ occasion?: string }> }) {
  const { occasion } = await searchParams;
  const items = giftables();
  const active = giftOccasions.some((o) => o.slug === occasion) ? occasion! : "all";
  const packs = productsIn("gift");

  return (
    <div className="container">
      <Breadcrumb items={[{ label: "هدیه" }]} />
      <section className="tone-rose" style={{ borderRadius: "var(--radius-xl)", paddingBottom: 24 }}>
        <PageHero pill="هدیه با WASTON" pillClass="pill pill-dark" title="هدیه‌ای برای خانه، با بسته‌بندی آماده" text="هر محصول «قابل بسته‌بندی هدیه» را می‌توانید با کارت تبریک و بدون درج قیمت، مستقیم برای گیرنده بفرستید." icon="gift" variant="rose" />
        <div className="occasions" style={{ marginTop: 0, paddingInline: 24 }}>
          {giftOccasions.map((o) => (
            <a key={o.slug} href={"/gifts?occasion=" + o.slug + "#listing-title"} className="occasion" aria-pressed={active === o.slug}>
              <span><b>{o.title}</b><small>{faNum(items.filter((p) => p.occasions?.includes(o.slug)).length)} محصول</small></span>
              <Icon name={o.icon} size={22} />
            </a>
          ))}
        </div>
      </section>

      <div className="grid-4 steps section" style={{ marginTop: 20 }}>
        {giftSteps.map((s, i) => (
          <div key={s.title} className="card step">
            <span className="num">{faNum(i + 1)}</span>
            <div><b>{s.title}</b><small>{s.text}</small></div>
          </div>
        ))}
      </div>

      <section className="section">
        <SectionHeader title="پک‌های هدیه آماده" />
        <div className="grid-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {packs.map((p) => (
            <div key={p.id} className="card pack">
              <div className={"media tone-" + p.tone}><Icon name="gift" size={44} strokeWidth={1.4} /></div>
              <div style={{ flex: 1 }}>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <p><b style={{ fontSize: 16, color: "var(--text)" }}>{toman(p.price)}</b> تومان</p>
                <AddPackButton id={p.id} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProductListing
        key={active}
        title="همه محصولات قابل هدیه"
        products={items}
        chipField="occasion"
        chips={giftOccasions.map((o) => ({ key: o.slug, label: o.title }))}
        initialChip={active}
        showBudget
      />
      <FaqSection items={giftFaq} id="faq-gift" />
      <CtaBand text="هنوز تصمیم نگرفته‌اید؟ پرفروش‌ها را ببینید." label="پرفروش‌ها" href="/bestsellers" />
    </div>
  );
}
