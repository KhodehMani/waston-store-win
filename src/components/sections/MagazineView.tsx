"use client";
import Link from "next/link";
import { useState } from "react";
import { articleTags, articles, featuredArticle } from "@/lib/content";
import { ArticleCard } from "./ArticleCard";

export function MagazineView() {
  const [tag, setTag] = useState("همه");
  const list = articles.filter((a) => a !== featuredArticle && (tag === "همه" || a.tag === tag));
  return (
    <>
      <section className="card info-hero">
        <span className="pill pill-accent">مجله آزمایشی</span>
        <h1>مجله WASTON</h1>
        <p>راهنمای خرید، نکته‌های نگهداری و ایده‌های هدیه برای خانه و آشپزخانه.</p>
      </section>
      <div className="chips section" style={{ marginTop: 20 }}>
        {articleTags.map((t) => <button key={t} type="button" className="chip" aria-pressed={tag === t} onClick={() => setTag(t)}>{t}</button>)}
      </div>
      {(tag === "همه" || tag === featuredArticle.tag) && (
        <article className="card featured-article section" style={{ marginTop: 20 }}>
          <div className={"media tone-" + featuredArticle.tone}>جای تصویر مقاله ویژه</div>
          <div className="body">
            <small className="muted">مقاله ویژه · {featuredArticle.tag}</small>
            <h2>{featuredArticle.title}</h2>
            <p>{featuredArticle.excerpt}</p>
            <Link href={"/magazine/" + featuredArticle.slug} className="btn btn-primary btn-sm" style={{ alignSelf: "flex-start" }}>خواندن مقاله</Link>
          </div>
        </article>
      )}
      <div className="grid-4 section" style={{ marginTop: 20 }}>
        {list.map((a) => <ArticleCard key={a.slug} a={a} excerpt />)}
      </div>
    </>
  );
}
