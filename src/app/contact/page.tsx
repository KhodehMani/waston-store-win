import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Icon } from "@/components/ui/Icon";
import { VueIsland } from "@/components/ui/VueIsland";
import { contactChannels } from "@/lib/info";

export const metadata: Metadata = { title: "تماس با ما" };

export default function ContactPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "تماس با ما" }]} />
      <section className="card info-hero">
        <span className="pill pill-accent">پشتیبانی</span>
        <h1>تماس با ما</h1>
        <p>برای پیگیری سفارش، مرجوعی یا سفارش سازمانی با ما در تماس باشید.</p>
      </section>
      <div className="grid-4 section" style={{ marginTop: 20 }}>
        {contactChannels.map((c) => (
          <div key={c.title} className="card channel"><Icon name={c.icon} size={22} /><b>{c.title}</b><small>{c.text}</small></div>
        ))}
      </div>
      <div className="contact-grid section" style={{ marginTop: 20 }}>
        <div className="media tone-blue">جای نقشه / تصویر دفتر</div>
        <VueIsland name="ContactForm" />
      </div>
    </div>
  );
}
