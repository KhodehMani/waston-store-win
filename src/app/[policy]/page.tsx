import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InfoShell } from "@/components/sections/InfoShell";
import { VueIsland } from "@/components/ui/VueIsland";
import { policies, policyFootnote } from "@/lib/info";

type Params = { policy: string };

// Only the six customer-service pages exist under this segment.
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(policies).map((policy) => ({ policy }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = policies[(await params).policy];
  return p ? { title: p.title, description: p.intro } : {};
}

export default async function PolicyPage({ params }: { params: Promise<Params> }) {
  const page = policies[(await params).policy];
  if (!page) notFound();
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "خدمات مشتریان" }, { label: page.title }]} />
      <InfoShell title={page.title} intro={page.intro} current={"/" + page.slug}>
        {page.highlights && (
          <div className="highlights">
            {page.highlights.map((h) => <div key={h.title} className="card"><b>{h.title}</b><small>{h.text}</small></div>)}
          </div>
        )}
        {page.sections.map((s) => (
          <section key={s.title} className="card info-section">
            <h2>{s.title}</h2>
            {s.paragraphs?.map((t) => <p key={t}>{t}</p>)}
            {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
          </section>
        ))}
        {page.faqGroups?.map((g, i) => (
          <section key={g.title} className="info-section" style={{ paddingInline: 0 }}>
            <h2>{g.title}</h2>
            <VueIsland name="FaqAccordion" props={{ items: g.items, idPrefix: "faq-g" + i }} />
          </section>
        ))}
        <p className="footnote">{policyFootnote}</p>
      </InfoShell>
    </div>
  );
}
