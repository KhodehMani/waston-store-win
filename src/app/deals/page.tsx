import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/Blocks";
import { ProductRail } from "@/components/product/ProductRail";
import { ProductListing } from "@/components/product/ProductListing";
import { categoryTitle, deals } from "@/lib/products";
import { discountPct, faNum } from "@/lib/format";
import type { Product } from "@/types";

export const metadata: Metadata = { title: "پیشنهادهای ویژه" };

export default function DealsPage() {
  const items = deals();
  const byOff = [...items].sort((a, b) => discountPct(b.price, b.oldPrice) - discountPct(a.price, a.oldPrice));
  const cats = (["electric", "kitchenware", "cleaning", "gift"] as Product["category"][]).map((c) => {
    const inCat = items.filter((p) => p.category === c);
    return { c, max: Math.max(0, ...inCat.map((p) => discountPct(p.price, p.oldPrice))), n: inCat.length, icon: inCat[0]?.icon ?? "tag" };
  }).filter((x) => x.n > 0);

  return (
    <div className="container">
      <Breadcrumb items={[{ label: "پیشنهادهای ویژه" }]} />
      <PageHero pill="تخفیف واقعی" pillClass="pill pill-dark" title="پیشنهادهای ویژه WASTON" text="تخفیف‌ها بر اساس قیمت واقعی قبلی محاسبه می‌شوند؛ بدون قیمت‌سازی. موجودی محدود است." icon="tag" variant="accent" />
      <section className="deal-strip section">
        <ProductRail products={byOff.slice(0, 6)} />
        <div><h3>بیشترین تخفیف‌ها</h3><p className="muted" style={{ fontSize: 12 }}>تا {faNum(discountPct(byOff[0].price, byOff[0].oldPrice))}٪ کمتر از قیمت قبلی</p></div>
      </section>
      <section className="section">
        <SectionHeader title="تخفیف‌ها به تفکیک دسته" />
        <div className="grid-4">
          {cats.map((x) => (
            <Link key={x.c} href={x.c === "gift" ? "/gifts" : "/category/" + x.c} className="card deal-cat">
              <Icon name={x.icon} size={28} />
              {categoryTitle[x.c]}
              <span className="badge badge-off">تا {faNum(x.max)}٪ تخفیف</span>
            </Link>
          ))}
        </div>
      </section>
      <ProductListing
        title="همه تخفیف‌ها"
        products={items}
        chipField="category"
        chips={cats.map((x) => ({ key: x.c, label: categoryTitle[x.c] }))}
        initialSort="discount"
      />
      <CtaBand text="برای اطلاع از تخفیف‌های بعدی عضو خبرنامه شوید." label="صفحه اصلی" href="/#nl-title" />
    </div>
  );
}
