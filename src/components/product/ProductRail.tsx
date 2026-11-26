import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";

/** Horizontal scroll rail (desktop 5-up, mobile ~2-up) used for "محبوب‌ترین‌های این دسته". */
export function ProductRail({ products }: { products: Product[] }) {
  return (
    <div className="rail" role="list">
      {products.map((p) => (<div role="listitem" key={p.id}><ProductCard product={p} /></div>))}
    </div>
  );
}

export function ProductGrid({ products, cols = 4 }: { products: Product[]; cols?: 3 | 4 }) {
  return (
    <div className={`grid-${cols}`}>
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
