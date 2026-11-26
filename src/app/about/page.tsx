import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/sections/Blocks";
import { aboutValues } from "@/lib/info";

export const metadata: Metadata = { title: "درباره ما" };
const icons = ["shield", "tag", "gift", "headset"] as const;

export default function AboutPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "درباره WASTON" }]} />
      <section className="card info-hero">
        <span className="pill pill-accent">درباره ما</span>
        <h1>درباره WASTON</h1>
        <p>فروشگاه تخصصی محصولات کاربردی و زیبای خانه و آشپزخانه؛ با این باور که خانه باید حس بهتری بدهد.</p>
      </section>
      <section className="card about-story section" style={{ padding: 24 }}>
        <div className="media tone-mint">جای تصویر داستان برند</div>
        <div>
          <h2>داستان WASTON</h2>
          <p>WASTON با یک ایده ساده شروع شد: وسایلی که هر روز در خانه استفاده می‌کنیم، باید هم خوب کار کنند و هم دیدنشان لذت‌بخش باشد.</p>
          <p>هر محصول پیش از عرضه از نظر کیفیت، کاربرد و طراحی بررسی می‌شود؛ از توستر صبحانه تا گلدان سفالی دست‌ساز.</p>
          <p className="footnote">متن نمونه — در نسخه نهایی با داستان واقعی برند جایگزین می‌شود.</p>
        </div>
      </section>
      <section className="section">
        <SectionHeader title="ارزش‌های ما" />
        <div className="grid-4">
          {aboutValues.map((v, i) => (
            <div key={v.title} className="card value">
              <span className="ic"><Icon name={icons[i]} size={18} /></span>
              <b>{v.title}</b><small>{v.text}</small>
            </div>
          ))}
        </div>
      </section>
      <CtaBand text="سوالی دارید یا همکاری می‌خواهید؟" label="تماس با ما" href="/contact" />
    </div>
  );
}
