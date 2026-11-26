"use client";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { useCart } from "@/lib/useStore";
import { store } from "@/lib/store";
import { faNum, toman } from "@/lib/format";
import { useShell } from "./ShellContext";

export function CartLines() {
  const { lines } = useCart();
  return (
    <ul>
      {lines.map(({ product: p, qty }) => (
        <li key={p.id} className="cart-line">
          <div className={"cart-thumb tone-" + p.tone}><Icon name={p.icon} size={30} strokeWidth={1.5} /></div>
          <div>
            <h4><Link href={"/product/" + p.id}>{p.name}</Link></h4>
            <span className="price">{toman(p.price * qty)} <small className="muted">تومان</small></span>
          </div>
          <div className="qty" aria-label="تعداد">
            <button type="button" aria-label="افزایش" onClick={() => store.setQty(p.id, qty + 1)} disabled={qty >= p.stock}><Icon name="plus" size={14} /></button>
            <span>{faNum(qty)}</span>
            <button type="button" aria-label={qty === 1 ? "حذف" : "کاهش"} onClick={() => store.setQty(p.id, qty - 1)}><Icon name={qty === 1 ? "trash" : "minus"} size={14} /></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function EmptyCart({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="state">
      <h3>سبد خرید شما خالی است</h3>
      <p>از پرفروش‌ها شروع کنید.</p>
      <Link href="/bestsellers" className="btn btn-primary btn-sm" onClick={onNavigate}>پرفروش‌ها</Link>
    </div>
  );
}

export function CartDrawer() {
  const { panel, close } = useShell();
  const { lines, total } = useCart();
  if (panel !== "cart") return null;
  return (
    <>
      <div className="drawer-backdrop" onClick={close} />
      <div className="drawer left" role="dialog" aria-modal="true" aria-label="سبد خرید">
        <div className="drawer-head"><h2>سبد خرید</h2><button type="button" className="icon-btn" aria-label="بستن" onClick={close}><Icon name="close" /></button></div>
        <div className="drawer-body">{lines.length ? <CartLines /> : <EmptyCart onNavigate={close} />}</div>
        {lines.length > 0 && (
          <div className="drawer-foot">
            <div className="cart-total"><span>جمع کل</span><span>{toman(total)} تومان</span></div>
            <Link href="/cart" className="btn btn-primary btn-block" onClick={close}>مشاهده سبد و ادامه خرید</Link>
          </div>
        )}
      </div>
    </>
  );
}
