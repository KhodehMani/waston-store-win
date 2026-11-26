"use client";
import { useSyncExternalStore } from "react";
import { store, type StoreState } from "./store";
import { productById } from "./products";

export function useStore(): StoreState {
  return useSyncExternalStore(store.subscribe, store.get, store.getServer);
}

export function useCart() {
  const { cart } = useStore();
  const lines = cart.flatMap((l) => {
    const p = productById(l.id);
    return p ? [{ ...l, product: p }] : [];
  });
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.qty * l.product.price, 0);
  return { lines, count, total };
}
