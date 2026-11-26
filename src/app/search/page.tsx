import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductListing } from "@/components/product/ProductListing";
import { categoryTitle, products } from "@/lib/products";

export const metadata: Metadata = { title: "جست‌وجو" };

const norm = (s: string) => s.replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/\u200c/g, " ").toLowerCase().trim();

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const q = (await searchParams).q?.trim() ?? "";
  const terms = norm(q).split(/\s+/).filter(Boolean);
  const results = products.filter((p) => {
    const hay = norm([p.name, p.description, categoryTitle[p.category]].join(" "));
    return terms.every((t) => hay.includes(t));
  });
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "جست‌وجو" }]} />
      <ProductListing key={q} title={q ? "نتایج جست‌وجو برای «" + q + "»" : "همه محصولات"} products={results} />
    </div>
  );
}
