"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

export function SearchBox({ initial = "" }: { initial?: string }) {
  const router = useRouter();
  const [q, setQ] = useState(initial);
  return (
    <form className="search" role="search" onSubmit={(e) => { e.preventDefault(); router.push(`/search?q=${encodeURIComponent(q.trim())}`); }}>
      <Icon name="search" size={18} />
      <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="جست‌وجو در توستر، غذاساز، ظروف سفالی…" aria-label="جست‌وجوی محصولات" />
      <button type="submit" className="btn btn-primary">جست‌وجو</button>
    </form>
  );
}
