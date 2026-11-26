# WASTON — فروشگاه اینترنتی (فرانت‌اند)

پیاده‌سازی کامل فرانت‌اند فروشگاه WASTON بر اساس ماکاپ‌های PDF داخل `Mockup/` و سیستم طراحی **WASTON V1.0.1**.

## اجرا

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # نسخه production
npm run typecheck
```

پیش‌نیاز: Node.js 20 یا بالاتر.

## فناوری‌ها

| فناوری | نقش |
|---|---|
| **Next.js 15 (App Router)** | فریم‌ورک اصلی، مسیریابی، SSG برای همه صفحه‌ها، متادیتا |
| **React 19** | تمام لایه رابط کاربری: هدر، فوتر، کارت محصول، فهرست با فیلتر و مرتب‌سازی، سبد خرید، منوی موبایل |
| **Vue 3** | ماژول‌های مستقل که جدا mount می‌شوند: `FaqAccordion`، `NewsletterForm`، `ContactForm`، `ToastHost` |
| TypeScript | در همه کدها |

### یکپارچه‌سازی Vue

- ماژول‌های Vue در `src/modules/vue/` با Composition API و توابع render (`h`) نوشته شده‌اند، پس به کامپایلر SFC و loader اضافه نیازی نیست.
- `src/components/ui/VueIsland.tsx` پل React به Vue است: React فقط یک `<div>` خالی رندر می‌کند. بعد از hydration، ماژول Vue به‌صورت lazy بارگذاری و با `createApp().mount()` روی همان div سوار می‌شود. موقع unmount هم `app.unmount()` صدا زده می‌شود. این دو رندرر هیچ‌وقت روی DOM مشترک کار نمی‌کنند.
- وضعیت مشترک (سبد خرید، علاقه‌مندی‌ها، رویدادهای Toast) در `src/lib/store.ts` نگه داشته می‌شود. این store به هیچ فریم‌ورکی وابسته نیست: React با `useSyncExternalStore` و Vue با `subscribe`/`onToast` به آن وصل می‌شوند. مثلاً دکمه React «افزودن به سبد» یک Toast در ماژول Vue نشان می‌دهد.

## ساختار

```
src/
  app/                 مسیرها (Next.js App Router)
  components/
    layout/            Header, Footer, BottomNav, CartDrawer, MobileMenu, ThemeToggle, SearchBox
    product/           ProductCard, ProductRail/Grid, ProductListing, BuyBox, CartView, WishlistView
    sections/          PageHero, Blocks (Promo, Needs, Guide, FAQ, CTA, Newsletter), InfoShell, MagazineView
    ui/                Icon, SectionHeader, Breadcrumb, VueIsland
  modules/vue/         ماژول‌های Vue
  lib/                 داده نمونه (products, categories, content, info), store, format
  styles/              tokens.css (توکن‌های DS روشن/تاریک)، base، components، layout
  types/
Mockup/                فایل‌های اصلی طراحی (دست‌نخورده)
```

## مسیرها

`/` · `/category/electric` · `/category/kitchenware` · `/category/cleaning` · `/gifts` · `/bestsellers` · `/deals` · `/new` · `/product/[id]` · `/search?q=` · `/cart` · `/wishlist` · `/magazine` · `/magazine/[slug]` · `/about` · `/contact` · `/shipping` · `/returns` · `/warranty` · `/faq` · `/terms` · `/privacy`

## نکات

- همه داده‌ها (محصول، قیمت، مقاله، متن قوانین) نمونه‌اند و در `src/lib` قرار دارند. ماکاپ‌ها هم همین را با نوار «نسخه نمایشی» اعلام می‌کنند.
- سبد خرید و علاقه‌مندی‌ها در `localStorage` ذخیره می‌شوند. «ثبت سفارش» و «ورود/ثبت‌نام» نمایشی‌اند، چون بک‌اند و درگاه پرداختی در کار نیست.
- حالت تاریک طبق پالت تاریک DS پیاده شده و انتخاب کاربر ذخیره می‌شود.
