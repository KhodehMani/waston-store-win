import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WishlistView } from "@/components/product/WishlistView";

export const metadata: Metadata = { title: "علاقه‌مندی‌ها" };

export default function WishlistPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "علاقه‌مندی‌ها" }]} />
      <WishlistView />
    </div>
  );
}
