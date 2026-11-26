"use client";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductGrid } from "./ProductRail";
import { useStore } from "@/lib/useStore";
import { productById } from "@/lib/products";
import type { Product } from "@/types";

export function WishlistView() {
  const { wishlist } = useStore();
  const items = wishlist.map(productById).filter((p): p is Product => !!p);
  return (
    <section>
      <SectionHeader title="علاقه‌مندی‌ها" />
      {items.length ? <ProductGrid products={items} /> : (
        <div className="state">
          <h3>هنوز محصولی را نپسندیده‌اید</h3>
          <p>روی قلب کارت محصولات بزنید تا اینجا ذخیره شوند.</p>
          <Link href="/bestsellers" className="btn btn-primary btn-sm">پرفروش‌ها</Link>
        </div>
      )}
    </section>
  );
}
