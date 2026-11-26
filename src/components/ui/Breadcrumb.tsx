import Link from "next/link";

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="مسیر صفحه">
      <Link href="/">خانه</Link>
      {items.map((it) => (
        <span key={it.label} style={{ display: "contents" }}>
          <span aria-hidden="true">/</span>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}
