/**
 * Framework-agnostic store shared by React (useSyncExternalStore) and Vue (subscribe -> ref).
 * Holds cart, wishlist and toast events; persisted to localStorage.
 */
import type { CartLine } from "@/types";

export interface StoreState { cart: CartLine[]; wishlist: string[] }
type Listener = () => void;
type ToastListener = (msg: string) => void;

const KEY = "waston:store:v1";
const empty: StoreState = { cart: [], wishlist: [] };
let state: StoreState = empty;
let hydrated = false;
const listeners = new Set<Listener>();
const toastListeners = new Set<ToastListener>();

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...empty, ...JSON.parse(raw) };
  } catch {
    /* storage unavailable: keep in-memory state */
  }
}

function set(next: StoreState) {
  state = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

export const store = {
  get: (): StoreState => { hydrate(); return state; },
  getServer: (): StoreState => empty,
  subscribe(l: Listener) { hydrate(); listeners.add(l); return () => { listeners.delete(l); }; },
  onToast(l: ToastListener) { toastListeners.add(l); return () => { toastListeners.delete(l); }; },
  toast(msg: string) { toastListeners.forEach((l) => l(msg)); },

  addToCart(id: string, qty = 1) {
    hydrate();
    const found = state.cart.find((l) => l.id === id);
    const cart = found ? state.cart.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l)) : [...state.cart, { id, qty }];
    set({ ...state, cart });
    store.toast("محصول به سبد خرید اضافه شد");
  },
  setQty(id: string, qty: number) {
    hydrate();
    set({ ...state, cart: qty <= 0 ? state.cart.filter((l) => l.id !== id) : state.cart.map((l) => (l.id === id ? { ...l, qty } : l)) });
  },
  clearCart() { hydrate(); set({ ...state, cart: [] }); },
  toggleWish(id: string) {
    hydrate();
    const has = state.wishlist.includes(id);
    set({ ...state, wishlist: has ? state.wishlist.filter((w) => w !== id) : [...state.wishlist, id] });
    store.toast(has ? "از علاقه‌مندی‌ها حذف شد" : "به علاقه‌مندی‌ها اضافه شد");
  },
};
