export type IconName =
  | "toaster" | "blender" | "kettle" | "pot" | "pan" | "vase" | "mug" | "bowl" | "plate"
  | "gift" | "stickVacuum" | "robotVacuum" | "vacuum" | "sparkle" | "tag" | "cart" | "heart"
  | "user" | "moon" | "sun" | "search" | "truck" | "shield" | "return" | "headset" | "pin"
  | "menu" | "close" | "home" | "grid" | "star" | "plus" | "minus" | "trash" | "mail" | "phone"
  | "clock" | "filter" | "briefcase" | "cake" | "check" | "chevron";

export type Tone = "rose" | "mint" | "blue" | "beige";
export type CategorySlug = "electric" | "kitchenware" | "cleaning";

export interface Product {
  id: string;
  name: string;
  category: CategorySlug | "gift";
  sub: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  stock: number; // 0 = out of stock, <=5 shows "only N left"
  isNew?: boolean;
  giftable?: boolean;
  occasions?: string[];
  sales: number;
  icon: IconName;
  tone: Tone;
  description: string;
}

export interface SubCategory { slug: string; title: string; icon: IconName; tone: Tone }

export interface Promo {
  title: string; text: string; cta: string; href: string; icon: IconName; dark?: boolean; tone?: Tone;
}

export interface Category {
  slug: CategorySlug;
  title: string;
  heroTitle: string;
  heroText: string;
  heroIcon: IconName;
  heroDark?: boolean;
  subs: SubCategory[];
  promos: [Promo, Promo];
  needs: { title: string; text: string; icon: IconName }[];
  guideTitle: string;
  guide: { title: string; text: string }[];
  faq: { q: string; a: string }[];
  cta: { text: string; label: string; href: string };
}

export interface Article {
  slug: string; title: string; tag: string; excerpt: string; tone: Tone; body: string[];
}

export interface FaqItem { q: string; a: string }
export interface CartLine { id: string; qty: number }
