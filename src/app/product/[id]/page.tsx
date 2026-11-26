import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { ProductGrid } from "@/components/product/ProductRail";
import { BuyBox } from "@/components/product/BuyBox";
import { categoryTitle, productById, products } from "@/lib/products";
import { discountPct, faNum, rate, toman } from "@/lib/format";

type Params = { id: string };

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = productById((await params).id);
  return p ? { title: p.name, description: p.description } : {};
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const p = productById((await params).id);
  if (!p) notFound();
  const catHref = p.category === "gift" ? "/gifts" : "/category/" + p.category;
  const off = discountPct(p.price, p.oldPrice);
  const related = products.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <div className="container">
      <Breadcrumb items={[{ label: categoryTitle[p.category], href: catHref }, { label: p.name }]} />
      <section className="product">
        <div className={"media tone-" + p.tone}>
          <Icon name={p.icon} size={160} strokeWidth={1.2} />
          <span className="pcard-badges">
            {off > 0 && <span className="badge badge-off">{faNum(off)}٪ تخفیف</span>}
            {p.isNew && <span className="badge badge-new">جدید</span>}
          </span>
        </div>
        <div>
          <span className="pcard-meta">WASTON (نمونه) · {categoryTitle[p.category]}</span>
          <h1>{p.name}</h1>
          <span className="pcard-rating"><Icon name="star" size={14} /><b>{rate(p.rating)}</b> ({faNum(p.reviews)} نظر)</span>
          <p className="muted" style={{ margin: "14px 0", fontSize: 14 }}>{p.description}</p>
          <div className="pcard-price" style={{ justifyContent: "flex-start" }}>
            <span className="price">{toman(p.price)}</span><span className="unit">تومان</span>
            {p.oldPrice && <del>{toman(p.oldPrice)}</del>}
          </div>
          <BuyBox id={p.id} stock={p.stock} />
          <dl>
            <dt>وضعیت</dt><dd>{p.stock === 0 ? "ناموجود" : p.stock <= 5 ? "تنها " + faNum(p.stock) + " عدد در انبار" : "موجود در انبار"}</dd>
            <dt>بسته‌بندی هدیه</dt><dd>{p.giftable ? "دارد" : "ندارد"}</dd>
            <dt>ارسال</dt><dd>ارسال روز بعد / پست پیشتاز</dd>
            <dt>ضمانت</dt><dd>تضمین اصالت کالا</dd>
          </dl>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section">
          <SectionHeader title="محصولات مرتبط" href={catHref} linkLabel="مشاهده همه" />
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}
