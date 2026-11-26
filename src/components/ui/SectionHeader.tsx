import Link from "next/link";

export function SectionHeader({ title, subtitle, href, linkLabel }: { title: string; subtitle?: string; href?: string; linkLabel?: string }) {
  return (
    <div className="sec-head">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {href && linkLabel && <Link href={href} className="link-underline">{linkLabel}</Link>}
    </div>
  );
}
