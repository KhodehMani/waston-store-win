import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { articles } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "مجله WASTON", href: "/magazine" }, { label: a.title }]} />
      <article className="article-page">
        <span className="pill">{a.tag}</span>
        <h1 style={{ marginTop: 12 }}>{a.title}</h1>
        <div className={"media tone-" + a.tone}>جای تصویر مقاله</div>
        <p><b>{a.excerpt}</b></p>
        {a.body.map((t) => <p key={t}>{t}</p>)}
        <p className="footnote">این مقاله نمونه است و در نسخه نهایی با محتوای واقعی جایگزین می‌شود.</p>
      </article>
      <section className="section">
        <SectionHeader title="مقاله‌های دیگر" href="/magazine" linkLabel="همه مقاله‌ها" />
        <div className="grid-3">{more.map((m) => <ArticleCard key={m.slug} a={m} />)}</div>
      </section>
    </div>
  );
}
