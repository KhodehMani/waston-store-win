import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CategorySlug } from "@/types";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { BuyingGuide, CtaBand, FaqSection, NeedsRow, PromoPair, SubCategoryNav } from "@/components/sections/Blocks";
import { ProductRail } from "@/components/product/ProductRail";
import { ProductListing } from "@/components/product/ProductListing";
import { categories } from "@/lib/categories";
import { productsIn } from "@/lib/products";

type Params = { slug: string };
type Search = { sub?: string };

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const c = categories[(await params).slug as CategorySlug];
  return c ? { title: c.title, description: c.heroText } : {};
}

export default async function CategoryPage({ params, searchParams }: { params: Promise<Params>; searchParams: Promise<Search> }) {
  const { slug } = await params;
  const { sub } = await searchParams;
  const c = categories[slug as CategorySlug];
  if (!c) notFound();

  const items = productsIn(c.slug);
  const active = c.subs.some((s) => s.slug === sub) ? sub : undefined;
  const counts = Object.fromEntries(c.subs.map((s) => [s.slug, items.filter((p) => p.sub === s.slug).length]));
  const popular = [...items].sort((a, b) => b.sales - a.sales).slice(0, 6);

  return (
    <div className="container">
      <Breadcrumb items={[{ label: c.title }]} />
      <PageHero pill="دسته‌بندی" title={c.heroTitle} text={c.heroText} icon={c.heroIcon} variant={c.heroDark ? "dark" : "light"} />
      <SubCategoryNav base={"/category/" + c.slug} subs={c.subs} counts={counts} active={active} />
      <PromoPair promos={c.promos} />
      <NeedsRow title="بر اساس نیازتان انتخاب کنید" needs={c.needs} />
      <section className="section">
        <SectionHeader title="محبوب‌ترین‌های این دسته" />
        <ProductRail products={popular} />
      </section>
      <ProductListing
        key={active ?? "all"}
        title={"همه " + c.title}
        products={items}
        chips={c.subs.map((s) => ({ key: s.slug, label: s.title }))}
        initialChip={active ?? "all"}
      />
      <BuyingGuide title={c.guideTitle} items={c.guide} />
      <FaqSection items={c.faq} id={"faq-" + c.slug} />
      <CtaBand {...c.cta} />
    </div>
  );
}
