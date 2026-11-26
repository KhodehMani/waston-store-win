import type { Metadata } from "next";
import { MagazineView } from "@/components/sections/MagazineView";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = { title: "مجله", description: "راهنمای خرید، نکته‌های نگهداری و ایده‌های هدیه." };

export default function MagazinePage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "مجله WASTON" }]} />
      <MagazineView />
    </div>
  );
}
