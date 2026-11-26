import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/Blocks";
import { ProductListing } from "@/components/product/ProductListing";
import { AddPackButton } from "@/components/product/AddPackButton";
import { categoryTitle, newArrivals, productById } from "@/lib/products";
import { rate, toman, faNum } from "@/lib/format";

export const metadata: Metadata = { title: "محصولات جدید" };

export default function NewPage() {
  const items = newArrivals();
  const spot = productById("r10")!;
  const cats = [...new Set(items.map((p) => p.category))];
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "جدیدها" }]} />
      <PageHero pill="تازه رسیده" title="محصولات جدید" text="جدیدترین محصولات اضافه‌شده به WASTON؛ هر هفته به‌روز می‌شود." icon="sparkle" variant="mint" />
      <section className="card spotlight section">
        <div>
          <span className="pill">معرفی ویژه</span>
          <h2><Link href={"/product/" + spot.id}>{spot.name}</Link></h2>
          <p className="muted" style={{ fontSize: 13 }}>{spot.description}</p>
          <ul><li>امتیاز {rate(spot.rating)} از {faNum(spot.reviews)} نظر</li><li>{categoryTitle[spot.category]}</li><li>{spot.stock ? "موجود" : "ناموجود — اطلاع از موجودی"}</li></ul>
          <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
            <b style={{ fontSize: 20 }}>{toman(spot.price)} <small className="muted">تومان</small></b>
            {spot.stock ? <AddPackButton id={spot.id} label="افزودن به سبد" /> : <Link className="btn btn-ghost btn-sm" href={"/product/" + spot.id}>مشاهده محصول</Link>}
          </div>
        </div>
        <div className={"media tone-" + spot.tone}><Icon name={spot.icon} size={90} strokeWidth={1.3} /></div>
      </section>
      <ProductListing
        title="همه محصولات جدید"
        products={items}
        chipField="category"
        chips={cats.map((c) => ({ key: c, label: categoryTitle[c] }))}
        initialSort="newest"
      />
      <CtaBand text="همه محصولات را در دسته‌بندی‌ها ببینید." label="لوازم برقی آشپزخانه" href="/category/electric" />
    </div>
  );
}
