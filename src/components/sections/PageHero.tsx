import type { IconName } from "@/types";
import { Icon } from "@/components/ui/Icon";

type Variant = "light" | "dark" | "rose" | "mint" | "accent";

/** Category / collection hero: pill + H1 + lead text, art placeholder on the left (mockup "جای عکس اختصاصی"). */
export function PageHero({ pill, title, text, icon, variant = "light", pillClass = "pill", children }: {
  pill: string; title: string; text: string; icon: IconName; variant?: Variant; pillClass?: string; children?: React.ReactNode;
}) {
  const cls = variant === "light" ? "card page-hero" : "page-hero " + variant;
  return (
    <section className={cls}>
      <div style={{ flex: 1 }}>
        <span className={pillClass}>{pill}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
      <div className="art" aria-hidden="true">
        <Icon name={icon} size={52} strokeWidth={1.5} />
        <span>جای عکس اختصاصی</span>
      </div>
    </section>
  );
}
