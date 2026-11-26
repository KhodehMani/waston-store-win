import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CartView } from "@/components/product/CartView";

export const metadata: Metadata = { title: "سبد خرید" };

export default function CartPage() {
  return (
    <div className="container">
      <Breadcrumb items={[{ label: "سبد خرید" }]} />
      <CartView />
    </div>
  );
}
