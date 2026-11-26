"use client";
import { store } from "@/lib/store";

/** Small add-to-cart button for server-rendered blocks (gift packs, podium). */
export function AddPackButton({ id, label = "افزودن پک به سبد" }: { id: string; label?: string }) {
  return <button type="button" className="btn btn-primary btn-sm" onClick={() => store.addToCart(id)}>{label}</button>;
}
