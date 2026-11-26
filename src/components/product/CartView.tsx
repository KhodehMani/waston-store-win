"use client";
import { useState } from "react";
import { CartLines, EmptyCart } from "@/components/layout/CartDrawer";
import { useCart } from "@/lib/useStore";
import { store } from "@/lib/store";
import { toman } from "@/lib/format";

const FREE_GIFT_WRAP = 2_000_000;

export function CartView() {
  const { lines, total, count } = useCart();
  const [gift, setGift] = useState(false);
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="state success">
        <h3>سفارش ثبت شد</h3>
        <p>کد رهگیری پیامک می‌شود. (نسخه نمایشی — پرداختی انجام نشده است.)</p>
      </div>
    );
  }
  if (!lines.length) return <EmptyCart />;

  const wrap = gift && total < FREE_GIFT_WRAP ? 90_000 : 0;
  return (
    <div className="listing cart-layout">
      <section className="card listing-main" style={{ padding: 20 }}>
        <h1 style={{ fontSize: 20, fontWeight: 800 }}>سبد خرید</h1>
        <CartLines />
      </section>
      <aside className="card filters" style={{ display: "block", position: "static" }}>
        <div className="filter-group" style={{ borderTop: 0, paddingTop: 0 }}>
          <div className="cart-total"><span>کالاها ({count})</span><span>{toman(total)}</span></div>
          <label className="check"><span>بسته‌بندی هدیه و کارت تبریک</span><input type="checkbox" checked={gift} onChange={(e) => setGift(e.target.checked)} /></label>
          {gift && <small>{wrap ? "هزینه بسته‌بندی: " + toman(wrap) + " تومان" : "بسته‌بندی هدیه رایگان است"}</small>}
          <div className="cart-total"><span>مبلغ قابل پرداخت</span><span>{toman(total + wrap)} تومان</span></div>
        </div>
        <button type="button" className="btn btn-primary btn-block" onClick={() => { store.clearCart(); setPlaced(true); }}>ثبت سفارش (نمایشی)</button>
      </aside>
    </div>
  );
}
