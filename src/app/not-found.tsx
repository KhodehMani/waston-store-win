import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container section">
      <div className="state">
        <h3>صفحه پیدا نشد</h3>
        <p>آدرس واردشده وجود ندارد یا جابه‌جا شده است.</p>
        <Link href="/" className="btn btn-primary btn-sm">بازگشت به خانه</Link>
      </div>
    </div>
  );
}
