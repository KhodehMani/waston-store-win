"use client";
import Link from "next/link";
import type { Product } from "@/types";
import { Icon } from "@/components/ui/Icon";
import { store } from "@/lib/store";
import { useStore } from "@/lib/useStore";
import { categoryTitle } from "@/lib/products";
import { discountPct, faNum, rate, toman } from "@/lib/format";

/** DS "کارت محصول" — badges, wishlist, rating, stock state, price, add-to-cart. */
export function ProductCard({ product: p }: { product: Product }) {
  const { wishlist } = useStore();
  const wished = wishlist.includes(p.id);
  const off = discountPct(p.price, p.oldPrice);
  const out = p.stock === 0;
  const stockText = out ? "ناموجود" : p.stock <= 5 ? `تنها ${faNum(p.stock)} عدد در انبار` : "موجود در انبار";

  return (
    <article className={`pcard${out ? " is-out" : ""}`}>
      <div className={`pcard-media tone-${p.tone}`}>
        <Link href={`/product/${p.id}`} aria-label={p.name} style={{ display: "contents" }}>
          <Icon name={p.icon} size={80} strokeWidth={1.4} className="art" />
        </Link>
        <div className="pcard-badges">
          {off > 0 && <span className="badge badge-off">{faNum(off)}٪ تخفیف</span>}
          {p.isNew && <span className="badge badge-new">جدید</span>}
          {out && <span className="badge badge-out">ناموجود</span>}
        </div>
        <button type="button" className="pcard-wish" aria-pressed={wished} aria-label={wished ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"} onClick={() => store.toggleWish(p.id)}>
          <Icon name="heart" size={16} />
        </button>
        <span className="ph">تصویر نمونه محصول</span>
      </div>
      <div className="pcard-body">
        <span className="pcard-meta">WASTON (نمونه) · {categoryTitle[p.category]}</span>
        <h3 className="pcard-title"><Link href={`/product/${p.id}`}>{p.name}</Link></h3>
        <span className="pcard-rating"><Icon name="star" size={13} /><b>{rate(p.rating)}</b> ({faNum(p.reviews)} نظر)</span>
        <span className={`pcard-stock${!out && p.stock <= 5 ? " low" : ""}`}>{stockText}</span>
        <div className="pcard-price">
          <strong>{toman(p.price)}</strong><span className="unit">تومان</span>
          {p.oldPrice && <del>{toman(p.oldPrice)}</del>}
        </div>
        {out ? (
          <button type="button" className="btn btn-ghost btn-block" onClick={() => store.toast("موجود شدن این کالا به شما اطلاع داده می‌شود")}>موجود شد خبرم کن</button>
        ) : (
          <button type="button" className="btn btn-primary btn-block" onClick={() => store.addToCart(p.id)}>
            <Icon name="cart" size={16} /> افزودن به سبد
          </button>
        )}
      </div>
    </article>
  );
}
