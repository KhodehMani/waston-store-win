import Link from "next/link";
import { navMain } from "@/lib/content";
import { policyNav } from "@/lib/info";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo" style={{ marginBottom: 14 }}><b>WASTON</b></div>
          <p>فروشگاه تخصصی محصولات کاربردی و زیبای خانه و آشپزخانه.</p>
          <p>پشتیبانی ۷/۲۴: [شماره پشتیبانی]</p>
        </div>
        <div>
          <h4>فروشگاه</h4>
          <ul>{navMain.slice(1).map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>خدمات مشتریان</h4>
          <ul>{policyNav.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4>WASTON</h4>
          <ul>
            <li><Link href="/about">درباره WASTON</Link></li>
            <li><Link href="/contact">تماس با ما</Link></li>
            <li><Link href="/magazine">مجله WASTON</Link></li>
          </ul>
          <div className="trust"><span>[نماد اعتماد الکترونیکی]</span><span>[ساماندهی]</span></div>
        </div>
      </div>
      <div className="container footer-bottom">© WASTON — نسخه نمایشی UI/UX. داده‌ها و متن‌ها آزمایشی‌اند.</div>
    </footer>
  );
}
