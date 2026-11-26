import type { Category, CategorySlug } from "@/types";

export const categories: Record<CategorySlug, Category> = {
  electric: {
    slug: "electric",
    title: "لوازم برقی آشپزخانه",
    heroTitle: "لوازم برقی آشپزخانه",
    heroText: "توستر، غذاساز و کتری برقی؛ انتخاب‌شده برای آشپزخانه‌ای که هر روز کار می‌کند.",
    heroIcon: "blender",
    heroDark: true,
    subs: [
      { slug: "toaster", title: "توستر", icon: "toaster", tone: "mint" },
      { slug: "blender", title: "غذاساز", icon: "blender", tone: "rose" },
      { slug: "kettle", title: "کتری برقی", icon: "kettle", tone: "blue" },
    ],
    promos: [
      { title: "ست صبحانه WASTON", text: "توستر و کتری هماهنگ در رنگ و طراحی", cta: "مشاهده توسترها", href: "/category/electric?sub=toaster", icon: "toaster", dark: true },
      { title: "هدیه برقی برای خانه‌نو", text: "با بسته‌بندی هدیه و کارت تبریک", cta: "ایده‌های هدیه", href: "/gifts", icon: "gift", tone: "mint" },
    ],
    needs: [
      { title: "صبحانه سریع", text: "توستر و کتری برای شروع بی‌دردسر روز", icon: "toaster" },
      { title: "آشپزی روزانه", text: "غذاساز چندکاره برای خرد کردن، مخلوط کردن و ورز دادن", icon: "blender" },
      { title: "آب‌جوش همیشه آماده", text: "کتری برقی استیل با خاموشی خودکار", icon: "kettle" },
    ],
    guideTitle: "پیش از خرید لوازم برقی بدانید",
    guide: [
      { title: "توان و مصرف برق", text: "توان بالاتر یعنی سرعت بیشتر؛ برای مصرف روزانه، برچسب انرژی و توان نامی را کنار هم ببینید." },
      { title: "ظرفیت متناسب با خانواده", text: "ظرفیت مخزن یا تعداد اسلایس را بر اساس تعداد اعضای خانه انتخاب کنید." },
      { title: "گارانتی و خدمات", text: "شرایط گارانتی و خدمات پس از فروش هر مدل در صفحه محصول درج می‌شود." },
    ],
    faq: [
      { q: "گارانتی لوازم برقی چگونه است؟", a: "همه لوازم برقی WASTON گارانتی ۱۸ ماهه اصالت و سلامت فیزیکی دارند." },
      { q: "آیا امکان مرجوعی وجود دارد؟", a: "تا ۷ روز پس از تحویل، در صورت باز نشدن پلمب، امکان مرجوعی وجود دارد." },
      { q: "ارسال روز بعد شامل همه شهرها می‌شود؟", a: "ارسال روز بعد فعلاً برای تهران و کلان‌شهرها فعال است؛ سایر شهرها ۲ تا ۴ روز کاری." },
    ],
    cta: { text: "دنبال هدیه‌ای برقی برای خانه‌نو هستید؟", label: "مشاهده هدیه‌ها", href: "/gifts" },
  },
  kitchenware: {
    slug: "kitchenware",
    title: "ظروف آشپزخانه",
    heroTitle: "ظروف آشپزخانه و پذیرایی",
    heroText: "ظروفی که هم کار روزمره را راه می‌اندازند و هم سر میز مهمانی خوش می‌نشینند؛ از تابه تا سفال دست‌ساز.",
    heroIcon: "plate",
    subs: [
      { slug: "cookware", title: "پخت‌وپز", icon: "pan", tone: "mint" },
      { slug: "serving", title: "سرو و پذیرایی", icon: "plate", tone: "rose" },
      { slug: "ceramics", title: "سفال و سرامیک", icon: "vase", tone: "blue" },
    ],
    promos: [
      { title: "سفال دست‌ساز", text: "هر قطعه کمی متفاوت؛ مخصوص خانه شما", cta: "دیدن سفال‌ها", href: "/category/kitchenware?sub=ceramics", icon: "vase", tone: "rose" },
      { title: "سرویس کامل یا تکی؟", text: "راهنمای انتخاب پایین همین صفحه", cta: "ظروف پخت‌وپز", href: "/category/kitchenware?sub=cookware", icon: "pan", dark: true },
    ],
    needs: [
      { title: "آشپزخانه خانه‌نو", text: "سرویس‌های کامل پخت‌وپز و سرو", icon: "pan" },
      { title: "مهمانی و پذیرایی", text: "بشقاب، دیس و ظروف سرو هماهنگ", icon: "plate" },
      { title: "دست‌ساز و تزئینی", text: "سفال و سرامیک لعاب‌دار برای میز و دکور", icon: "vase" },
    ],
    guideTitle: "راهنمای انتخاب ظروف",
    guide: [
      { title: "جنس ظرف", text: "نچسب برای پخت کم‌روغن، استیل برای دوام، سرامیک و سفال برای سرو و زیبایی." },
      { title: "تعداد قطعات", text: "برای خانه‌نو سرویس کامل و برای تکمیل آشپزخانه قطعه‌های تکی را انتخاب کنید." },
      { title: "روش نگهداری", text: "روش شست‌وشو و تحمل حرارت هر ظرف در مشخصات فنی آن آمده است." },
    ],
    faq: [
      { q: "ظروف سفالی ماشین‌ظرف‌شویی‌خورند؟", a: "سفال‌های لعاب‌دار بله؛ اما برای ماندگاری بیشتر شست‌وشو با دست توصیه می‌شود." },
      { q: "اگر ظرف شکسته به دستم برسد؟", a: "تا ۴۸ ساعت با پشتیبانی تماس بگیرید تا کالا بدون هزینه تعویض شود." },
    ],
    cta: { text: "ظروف را هدیه می‌دهید؟ بسته‌بندی هدیه را امتحان کنید.", label: "سرویس هدیه", href: "/gifts" },
  },
  cleaning: {
    slug: "cleaning",
    title: "لوازم نظافت خانه",
    heroTitle: "لوازم نظافت خانه",
    heroText: "جاروبرقی، جارو شارژی و رباتیک؛ برای خانه‌ای تمیز با کمترین زحمت.",
    heroIcon: "vacuum",
    subs: [
      { slug: "vacuum", title: "جاروبرقی", icon: "vacuum", tone: "rose" },
      { slug: "stick", title: "جارو شارژی", icon: "stickVacuum", tone: "blue" },
      { slug: "robot", title: "رباتیک", icon: "robotVacuum", tone: "beige" },
    ],
    promos: [
      { title: "نظافت بی‌سیم", text: "جاروهای شارژی سبک برای نظافت سریع روزانه", cta: "جاروهای شارژی", href: "/category/cleaning?sub=stick", icon: "stickVacuum", dark: true },
      { title: "تازه‌های نظافت", text: "جدیدترین مدل‌ها در فروشگاه", cta: "محصولات جدید", href: "/new", icon: "sparkle", tone: "mint" },
    ],
    needs: [
      { title: "آپارتمان کوچک", text: "جارو شارژی سبک و کم‌جا", icon: "stickVacuum" },
      { title: "خانه با فرش", text: "جاروبرقی کیسه‌دار پرقدرت", icon: "vacuum" },
      { title: "نظافت خودکار", text: "رباتیک با برنامه‌ریزی روزانه", icon: "robotVacuum" },
    ],
    guideTitle: "راهنمای خرید جاروبرقی",
    guide: [
      { title: "نوع جارو", text: "کیسه‌دار برای فرش و سطوح بزرگ، شارژی برای نظافت سریع، رباتیک برای نگهداری روزانه." },
      { title: "باتری و قدرت مکش", text: "در مدل‌های بی‌سیم، زمان کارکرد و قدرت مکش را با هم مقایسه کنید." },
      { title: "فیلتر و صدا", text: "فیلتر HEPA برای خانه‌های دارای حساسیت و سطح صدا برای آپارتمان مهم است." },
    ],
    faq: [
      { q: "کیسه یدک جاروبرقی موجود است؟", a: "بله؛ کیسه و فیلتر یدک همه مدل‌ها از پشتیبانی قابل سفارش است." },
      { q: "باتری جارو شارژی گارانتی دارد؟", a: "باتری مدل‌های شارژی ۱۲ ماه گارانتی دارد." },
    ],
    cta: { text: "همه محصولات جدید را یک‌جا ببینید.", label: "محصولات جدید", href: "/new" },
  },
};

export const categoryList = Object.values(categories);
