import type { Metadata, Viewport } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/components.css";
import "@/styles/layout.css";
import { ShellProvider } from "@/components/layout/ShellContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { VueIsland } from "@/components/ui/VueIsland";

export const metadata: Metadata = {
  title: { default: "WASTON — حسی بهتر از خانه", template: "%s | WASTON" },
  description: "فروشگاه تخصصی لوازم برقی آشپزخانه، ظروف، سفال و هدیه.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#172B4D" };

// Applies the saved (or OS) theme before first paint to avoid a light/dark flash.
const themeScript = `try{var t=localStorage.getItem("waston:theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ShellProvider>
          <a href="#main" className="sr-only">رفتن به محتوای اصلی</a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <BottomNav />
          <CartDrawer />
          <MobileMenu />
          <VueIsland name="ToastHost" />
        </ShellProvider>
      </body>
    </html>
  );
}
