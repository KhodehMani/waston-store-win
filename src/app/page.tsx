import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductGrid } from "@/components/product/ProductRail";
import { ArticleCard, NewsletterBox } from "@/components/sections/Blocks";
import { bestsellers, deals, newArrivals } from "@/lib/products";
import { articles, homeCategoryTiles, serviceFeatures, whyWaston } from "@/lib/content";
import { faNum } from "@/lib/format";

const heroTiles = homeCategoryTiles.filter((t) => t.href !== "/category/kitchenware?sub=cookware").slice(0, 4);
const heroTones = ["mint", "rose", "blue", "beige"] as const;

export default function HomePage() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="card hero">
        <div>
          <span className="pill pill-outline">لوازم خانه و آشپزخانه، انتخاب‌شده با دقت</span>
          <h1>حسی بهتر از خانه</h1>
          <p>از توستر صبحانه تا ظرف سفالی سر میز؛ محصولات کاربردی و زیبا با ارسال سریع، بسته‌بندی مناسب هدیه و ضمانت اصالت.</p>
          <div className="hero-actions">
            <Link href="/category/electric" className="btn btn-primary">مشاهده محصولات</Link>
            <Link href="/bestsellers" className="btn btn-outline">مشاهده پرفروش‌ها</Link>
          </div>
        </div>
        <div className="hero-tiles">
          {heroTiles.map((t, i) => (
            <Link key={t.href} href={t.href} className={"hero-tile tone-" + heroTones[i]}>
              <span className="ph">جای عکس</span>
              <Icon name={t.icon} size={40} strokeWidth={1.5} />
              {t.title}
            </Link>
          ))}
        </div>
      </section>

      {/* Service features */}
      <div className="grid-6 features">
        {serviceFeatures.map((f) => (
          <div key={f.title} className="feature">
            <span className="ic"><Icon name={f.icon} size={18} /></span>
            <div><b>{f.title}</b><small>{f.text}</small></div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section className="section">
        <SectionHeader title="خرید بر اساس دسته‌بندی" />
        <div className="grid-5 cat-grid">
          {homeCategoryTiles.map((t) => (
            <Link key={t.href} href={t.href} className="cat-tile">
              <span className={"media tone-" + t.tone}><Icon name={t.icon} size={40} strokeWidth={1.5} /></span>
              <span className="txt"><b>{t.title}</b><small>{t.text}</small></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="پرفروش‌های WASTON" href="/bestsellers" linkLabel="مشاهده همه" />
        <ProductGrid products={bestsellers().slice(0, 4)} />
      </section>

      {/* Gift banner */}
      <section className="banner section">
        <div>
          <span className="eyebrow">سرویس بسته‌بندی هدیه</span>
          <h2>هدیه‌ای که از همان جعبه خوشحال می‌کند</h2>
          <p>بسته‌بندی هدیه، کارت تبریک با متن دلخواه و ارسال مستقیم برای گیرنده — بدون درج قیمت در بسته.</p>
          <Link href="/gifts" className="btn btn-secondary">انتخاب هدیه</Link>
        </div>
        <div className="banner-tiles" aria-hidden="true">
          <div><Icon name="gift" size={36} strokeWidth={1.5} /></div>
          <div><Icon name="mail" size={24} />کارت تبریک با پیام شما</div>
        </div>
      </section>

      <section className="section">
        <SectionHeader title="تازه‌های فروشگاه" href="/new" linkLabel="همه جدیدها" />
        <ProductGrid products={newArrivals().slice(0, 4)} />
      </section>

      <section className="section">
        <SectionHeader title="چرا WASTON؟" subtitle="چهار قولی که به هر سفارش می‌دهیم." />
        <div className="grid-4">
          {whyWaston.map((w, i) => (
            <div key={w.title} className="card why-card">
              <span className="n">{faNum("0" + (i + 1))}</span>
              <b>{w.title}</b>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader title="پیشنهادهای ویژه" href="/deals" linkLabel="همه تخفیف‌ها" />
        <ProductGrid products={deals().slice(0, 4)} />
      </section>

      <section className="section">
        <SectionHeader title="مجله WASTON" href="/magazine" linkLabel="همه مقاله‌ها" />
        <div className="grid-3">
          {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </section>

      <NewsletterBox />
    </div>
  );
}
