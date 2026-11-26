import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/Blocks";
import { ProductListing } from "@/components/product/ProductListing";
import { AddPackButton } from "@/components/product/AddPackButton";
import { bestsellers, categoryTitle, products } from "@/lib/products";
import { faNum, rate, toman } from "@/lib/format";

export const metadata: Metadata = { title: "پرفروش‌ها" };

const groups = [
  { title: "لوازم برقی آشپزخانه", cat: "electric" },
  { title: "ظروف، سفال و سرامیک", cat: "kitchenware" },
  { title: "لوازم نظافت", cat: "cleaning" },
] as const;

export default function BestsellersPage() {
  const ranked = bestsellers();
  const top3 = ranked.slice(0, 3);
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "پرفروش‌ها" }]} />
      <PageHero pill="محبوب خریداران" title="پرفروش‌ترین محصولات WASTON" text="محصولاتی که بیشترین سفارش را داشته‌اند. در نسخه نهایی ترتیب از داده فروش و امتیازها از نظرهای واقعی خوانده می‌شود." icon="sparkle" />
      <section className="section">
        <SectionHeader title="سه محصول اول" />
        <div className="podium">
          {[top3[2], top3[1], top3[0]].map((p) => {
            const r = ranked.indexOf(p) + 1;
            return (
              <article key={p.id} className={"card podium-card r" + r}>
                <span className="rank">{faNum(r)}</span>
                <Link href={"/product/" + p.id} className={"media tone-" + p.tone}><Icon name={p.icon} size={56} strokeWidth={1.4} /></Link>
                <div className="body">
                  <h3><Link href={"/product/" + p.id}>{p.name}</Link></h3>
                  <small className="muted">امتیاز {rate(p.rating)} · {faNum(p.reviews)} نظر</small>
                  <div className="row"><span><b>{toman(p.price)}</b> <small className="muted">تومان</small></span><AddPackButton id={p.id} label="افزودن" /></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section">
        <SectionHeader title="پرفروش‌ها به تفکیک دسته" />
        <div className="grid-3">
          {groups.map((g) => (
            <div key={g.cat} className="card rank-list">
              <h3>{g.title}</h3>
              {ranked.filter((p) => p.category === g.cat).slice(0, 3).map((p, i) => (
                <Link key={p.id} href={"/product/" + p.id} className="rank-item">
                  <span className="n">{faNum(i + 1)}</span>
                  <span className={"th tone-" + p.tone}><Icon name={p.icon} size={20} /></span>
                  <span><b>{p.name}</b><small>{toman(p.price)} تومان</small></span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>
      <ProductListing
        title="همه پرفروش‌ها"
        products={products}
        chipField="category"
        chips={(["electric", "kitchenware", "cleaning", "gift"] as const).map((c) => ({ key: c, label: categoryTitle[c] }))}
        initialSort="rating"
      />
      <CtaBand text="محصولات تازه را هم از دست ندهید." label="محصولات جدید" href="/new" />
    </div>
  );
}
