import Link from "next/link";
import type { Article } from "@/types";

export function ArticleCard({ a, excerpt }: { a: Article; excerpt?: boolean }) {
  return (
    <article className="card article-card">
      <div className={"media tone-" + a.tone}>جای تصویر مقاله</div>
      <div className="body">
        <small>{a.tag} · مقاله آزمایشی</small>
        <h3><Link href={"/magazine/" + a.slug}>{a.title}</Link></h3>
        {excerpt && <p>{a.excerpt}</p>}
        <Link href={"/magazine/" + a.slug} className="link-underline">{excerpt ? "ادامه مطلب" : "خواندن مقاله"}</Link>
      </div>
    </article>
  );
}
