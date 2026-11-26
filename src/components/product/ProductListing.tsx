"use client";
import { useMemo, useState } from "react";
import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { Icon } from "@/components/ui/Icon";
import { MAX_PRICE } from "@/lib/products";
import { discountPct, faNum, toman } from "@/lib/format";

export interface ChipOption { key: string; label: string; ids?: string[]; match?: string }
export type SortKey = "suggested" | "cheap" | "expensive" | "discount" | "rating" | "newest";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "suggested", label: "پیشنهاد WASTON" },
  { key: "cheap", label: "ارزان‌ترین" },
  { key: "expensive", label: "گران‌ترین" },
  { key: "discount", label: "بیشترین تخفیف" },
  { key: "rating", label: "بیشترین امتیاز" },
  { key: "newest", label: "جدیدترین" },
];

const BUDGETS = [
  { key: "all", label: "همه بودجه‌ها", min: 0, max: Infinity },
  { key: "lt1", label: "زیر ۱ میلیون", min: 0, max: 1_000_000 },
  { key: "1to3", label: "۱ تا ۳ میلیون", min: 1_000_000, max: 3_000_000 },
  { key: "gt3", label: "بالای ۳ میلیون", min: 3_000_000, max: Infinity },
];

interface Props {
  title: string;
  products: Product[];
  chips?: ChipOption[];
  /** matches Product.sub or Product.occasions */
  chipField?: "sub" | "category" | "occasion";
  initialChip?: string;
  initialSort?: SortKey;
  showBudget?: boolean;
}

/** Listing with chips, sort bar and filter sidebar (price ceiling, stock, rating, giftable). */
export function ProductListing({ title, products, chips, chipField = "sub", initialChip = "all", initialSort = "suggested", showBudget }: Props) {
  const [chip, setChip] = useState(initialChip);
  const [sort, setSort] = useState<SortKey>(initialSort);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [inStock, setInStock] = useState(false);
  const [topRated, setTopRated] = useState(false);
  const [giftable, setGiftable] = useState(false);
  const [budget, setBudget] = useState("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const list = useMemo(() => {
    const b = BUDGETS.find((x) => x.key === budget)!;
    const filtered = products.filter((p) => {
      if (chip !== "all") {
        const value = chipField === "occasion" ? p.occasions ?? [] : [chipField === "sub" ? p.sub : p.category];
        if (!value.includes(chip)) return false;
      }
      if (p.price > maxPrice) return false;
      if (inStock && p.stock === 0) return false;
      if (topRated && p.rating < 4.5) return false;
      if (giftable && !p.giftable) return false;
      if (p.price < b.min || p.price >= b.max) return false;
      return true;
    });
    const sorted = [...filtered];
    switch (sort) {
      case "cheap": sorted.sort((a, b2) => a.price - b2.price); break;
      case "expensive": sorted.sort((a, b2) => b2.price - a.price); break;
      case "discount": sorted.sort((a, b2) => discountPct(b2.price, b2.oldPrice) - discountPct(a.price, a.oldPrice)); break;
      case "rating": sorted.sort((a, b2) => b2.rating - a.rating); break;
      case "newest": sorted.sort((a, b2) => Number(!!b2.isNew) - Number(!!a.isNew)); break;
      default: sorted.sort((a, b2) => Number(a.stock === 0) - Number(b2.stock === 0) || b2.sales - a.sales);
    }
    return sorted;
  }, [products, chip, chipField, sort, maxPrice, inStock, topRated, giftable, budget]);

  const reset = () => { setChip("all"); setMaxPrice(MAX_PRICE); setInStock(false); setTopRated(false); setGiftable(false); setBudget("all"); };

  return (
    <section className="section" aria-labelledby="listing-title">
      <div className="sec-head" style={{ alignItems: "center" }}>
        <h2 id="listing-title">{title}</h2>
        <button type="button" className="btn btn-ghost btn-sm filter-toggle" aria-expanded={filtersOpen} onClick={() => setFiltersOpen((o) => !o)}>
          <Icon name="filter" size={16} /> فیلترها
        </button>
      </div>
      {chips && (
        <div className="chips" style={{ marginBottom: 14 }}>
          {[{ key: "all", label: chipField === "occasion" ? "همه مناسبت‌ها" : "همه" }, ...chips].map((c) => (
            <button key={c.key} type="button" className="chip" aria-pressed={chip === c.key} onClick={() => setChip(c.key)}>{c.label}</button>
          ))}
        </div>
      )}
      {showBudget && (
        <div className="budget" style={{ marginBottom: 18 }}>
          <span>بودجه:</span>
          {BUDGETS.map((b) => (
            <button key={b.key} type="button" className="chip chip-sm" aria-pressed={budget === b.key} onClick={() => setBudget(b.key)}>{b.label}</button>
          ))}
        </div>
      )}
      <div className="listing">
        <aside className={`card filters${filtersOpen ? " open" : ""}`} aria-label="فیلترها">
          <div className="filters-head"><b>فیلترها</b><button type="button" onClick={reset}>حذف فیلترها</button></div>
          <div className="filter-group">
            <h4>حداکثر قیمت</h4>
            <input type="range" min={500_000} max={MAX_PRICE} step={250_000} value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} aria-label="حداکثر قیمت" />
            <small>تا {toman(maxPrice)} تومان</small>
          </div>
          <div className="filter-group">
            <h4>وضعیت</h4>
            <label className="check"><span>فقط کالاهای موجود</span><input type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} /></label>
            <label className="check"><span>امتیاز ۴٫۵ به بالا</span><input type="checkbox" checked={topRated} onChange={(e) => setTopRated(e.target.checked)} /></label>
            <label className="check"><span>قابل بسته‌بندی هدیه</span><input type="checkbox" checked={giftable} onChange={(e) => setGiftable(e.target.checked)} /></label>
          </div>
          <p className="note">فیلترهای اختصاصی هر دسته (توان، ظرفیت، جنس، رنگ) با مشخصات واقعی محصولات اضافه می‌شوند.</p>
        </aside>
        <div className="listing-main">
          <div className="sortbar" role="toolbar" aria-label="مرتب‌سازی">
            <span>مرتب‌سازی:</span>
            {SORTS.map((s) => (
              <button key={s.key} type="button" aria-pressed={sort === s.key} onClick={() => setSort(s.key)}>{s.label}</button>
            ))}
            <span className="count">{faNum(list.length)} کالا</span>
          </div>
          {list.length ? (
            <div className="grid-4">{list.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          ) : (
            <div className="state">
              <h3>نتیجه‌ای پیدا نشد</h3>
              <p>فیلترها را تغییر دهید یا همه را حذف کنید.</p>
              <button type="button" className="btn btn-outline btn-sm" onClick={reset}>حذف فیلترها</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
