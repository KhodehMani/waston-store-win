import type { Product } from "@/types";

/** Mock catalogue — mirrors the sample data shown in the WASTON V1.0.1 mockups. */
export const products: Product[] = [
  { id: "t200", name: "توستر دو اسلایس — مدل T200", category: "electric", sub: "toaster", price: 2450000, oldPrice: 2900000, rating: 4.6, reviews: 128, stock: 20, sales: 980, icon: "toaster", tone: "rose", giftable: true, occasions: ["newhome", "wedding"], description: "توستر دو اسلایس با هفت سطح برشته‌کردن، سینی خرده‌نان جداشدنی و بدنه استیل." },
  { id: "f800", name: "غذاساز چندکاره — مدل F800", category: "electric", sub: "blender", price: 6890000, rating: 4.7, reviews: 94, stock: 5, sales: 760, icon: "blender", tone: "blue", giftable: true, occasions: ["wedding", "corporate"], description: "غذاساز ۱۰۰۰ وات با تیغه‌های خردکن، رنده و همزن؛ مناسب آشپزخانه خانواده." },
  { id: "pan28", name: "تابه نچسب ۲۸ سانتی", category: "kitchenware", sub: "cookware", price: 1450000, rating: 4.8, reviews: 210, stock: 30, sales: 1200, icon: "pan", tone: "blue", description: "تابه نچسب با پوشش چندلایه و دسته ضد حرارت، سازگار با همه اجاق‌ها." },
  { id: "vase", name: "گلدان سفالی دست‌ساز", category: "kitchenware", sub: "ceramics", price: 1250000, rating: 4.9, reviews: 76, stock: 12, isNew: true, sales: 640, icon: "vase", tone: "blue", giftable: true, occasions: ["newhome", "birthday", "anniversary"], description: "گلدان سفالی دست‌ساز؛ هر قطعه کمی متفاوت و مخصوص خانه شما." },
  { id: "t400", name: "توستر چهار اسلایس — مدل T400", category: "electric", sub: "toaster", price: 3650000, rating: 4.5, reviews: 12, stock: 15, isNew: true, sales: 210, icon: "toaster", tone: "mint", giftable: true, occasions: ["newhome"], description: "توستر چهار اسلایس با شیارهای عریض برای نان‌های ضخیم." },
  { id: "s50", name: "جارو شارژی عصایی — مدل S50", category: "cleaning", sub: "stick", price: 9800000, rating: 4.6, reviews: 9, stock: 3, isNew: true, sales: 330, icon: "stickVacuum", tone: "blue", description: "جارو شارژی سبک با ۴۵ دقیقه کارکرد و فیلتر قابل شست‌وشو." },
  { id: "r10", name: "جاروبرقی رباتیک — مدل R10", category: "cleaning", sub: "robot", price: 15900000, rating: 4.4, reviews: 5, stock: 0, isNew: true, sales: 120, icon: "robotVacuum", tone: "beige", description: "جاروبرقی رباتیک با نقشه‌برداری هوشمند و کنترل از طریق اپلیکیشن." },
  { id: "pot7", name: "سرویس قابلمه ۷ پارچه", category: "kitchenware", sub: "cookware", price: 8900000, oldPrice: 10500000, rating: 4.6, reviews: 47, stock: 4, sales: 410, icon: "pot", tone: "beige", giftable: true, occasions: ["wedding", "newhome"], description: "سرویس قابلمه استیل ۷ پارچه با کف کپسولی و درب شیشه‌ای." },
  { id: "f300", name: "غذاساز کامپکت — مدل F300", category: "electric", sub: "blender", price: 3990000, oldPrice: 4600000, rating: 4.4, reviews: 8, stock: 10, isNew: true, sales: 180, icon: "blender", tone: "rose", description: "غذاساز جمع‌وجور برای آشپزخانه‌های کوچک و مصرف روزانه." },
  { id: "k15", name: "کتری برقی استیل — مدل K15", category: "electric", sub: "kettle", price: 1980000, oldPrice: 2200000, rating: 4.3, reviews: 61, stock: 0, sales: 520, icon: "kettle", tone: "beige", giftable: true, occasions: ["newhome"], description: "کتری برقی ۱٫۷ لیتری با خاموشی خودکار و بدنه استیل." },
  { id: "mug2", name: "ماگ سرامیکی دوتایی", category: "kitchenware", sub: "ceramics", price: 540000, rating: 4.7, reviews: 58, stock: 40, isNew: true, sales: 870, icon: "mug", tone: "mint", giftable: true, occasions: ["birthday", "anniversary"], description: "دو ماگ سرامیکی هماهنگ؛ هدیه‌ای ساده برای دو نفر." },
  { id: "bowl", name: "کاسه سرامیکی لعاب‌دار", category: "kitchenware", sub: "ceramics", price: 690000, oldPrice: 820000, rating: 4.6, reviews: 33, stock: 25, sales: 300, icon: "bowl", tone: "beige", giftable: true, occasions: ["birthday"], description: "کاسه سرامیکی لعاب‌دار برای سرو سالاد، میوه و دسر." },
  { id: "dish", name: "دیس پذیرایی بیضی", category: "kitchenware", sub: "serving", price: 980000, rating: 4.2, reviews: 22, stock: 0, sales: 150, icon: "plate", tone: "rose", description: "دیس پذیرایی بیضی چینی برای سرو غذای اصلی در مهمانی." },
  { id: "plate18", name: "سرویس بشقاب ۱۸ پارچه", category: "kitchenware", sub: "serving", price: 4200000, rating: 4.5, reviews: 15, stock: 8, isNew: true, sales: 260, icon: "plate", tone: "mint", giftable: true, occasions: ["wedding"], description: "سرویس بشقاب ۱۸ پارچه شش‌نفره؛ مناسب مهمانی و استفاده روزمره." },
  { id: "giftbf", name: "پک هدیه خانه‌نو — صبحانه", category: "gift", sub: "pack", price: 5200000, rating: 4.8, reviews: 41, stock: 9, sales: 350, icon: "gift", tone: "mint", giftable: true, occasions: ["newhome", "wedding"], description: "شامل: توستر دو اسلایس، ماگ سرامیکی دوتایی، جعبه و کارت WASTON." },
  { id: "giftcer", name: "پک هدیه سرامیکی دونفره", category: "gift", sub: "pack", price: 2750000, oldPrice: 3100000, rating: 4.7, reviews: 19, stock: 11, sales: 280, icon: "gift", tone: "rose", giftable: true, occasions: ["anniversary", "birthday"], description: "شامل: دو کاسه سرامیکی، ماگ دوتایی، کارت تبریک." },
  { id: "v2000", name: "جاروبرقی کیسه‌دار — مدل V2000", category: "cleaning", sub: "vacuum", price: 7450000, rating: 4.5, reviews: 102, stock: 14, sales: 900, icon: "vacuum", tone: "rose", giftable: true, occasions: ["corporate"], description: "جاروبرقی ۲۲۰۰ وات کیسه‌دار با برس‌های چندکاره و فیلتر HEPA." },
];

export const productById = (id: string) => products.find((p) => p.id === id);
export const productsIn = (cat: Product["category"]) => products.filter((p) => p.category === cat);
export const bestsellers = () => [...products].sort((a, b) => b.sales - a.sales);
export const newArrivals = () => products.filter((p) => p.isNew);
export const deals = () => products.filter((p) => p.oldPrice);
export const giftables = () => products.filter((p) => p.giftable);

export const MAX_PRICE = 16000000;

export const categoryTitle: Record<Product["category"], string> = {
  electric: "لوازم برقی آشپزخانه",
  kitchenware: "ظروف آشپزخانه",
  cleaning: "لوازم نظافت خانه",
  gift: "پک هدیه",
};
