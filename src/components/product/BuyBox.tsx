"use client";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { store } from "@/lib/store";
import { useStore } from "@/lib/useStore";
import { faNum } from "@/lib/format";

export function BuyBox({ id, stock }: { id: string; stock: number }) {
  const [qty, setQty] = useState(1);
  const { wishlist } = useStore();
  const wished = wishlist.includes(id);
  return (
    <div className="buy">
      {stock > 0 ? (
        <>
          <div className="qty" aria-label="تعداد">
            <button type="button" aria-label="افزایش" onClick={() => setQty((q) => Math.min(stock, q + 1))}><Icon name="plus" size={14} /></button>
            <span>{faNum(qty)}</span>
            <button type="button" aria-label="کاهش" onClick={() => setQty((q) => Math.max(1, q - 1))}><Icon name="minus" size={14} /></button>
          </div>
          <button type="button" className="btn btn-primary" onClick={() => store.addToCart(id, qty)}><Icon name="cart" size={18} /> افزودن به سبد</button>
        </>
      ) : (
        <button type="button" className="btn btn-ghost" onClick={() => store.toast("موجود شدن این کالا به شما اطلاع داده می‌شود")}>موجود شد خبرم کن</button>
      )}
      <button type="button" className="icon-btn" aria-pressed={wished} aria-label={wished ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"} onClick={() => store.toggleWish(id)} style={wished ? { color: "var(--accent)" } : undefined}>
        <Icon name="heart" size={18} />
      </button>
    </div>
  );
}
