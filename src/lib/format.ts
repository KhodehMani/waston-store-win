const nf = new Intl.NumberFormat("fa-IR");
export const toman = (n: number) => nf.format(n);
export const faNum = (n: number | string) => (typeof n === "number" ? nf.format(n) : n.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]));
export const rate = (n: number) => faNum(n.toFixed(1)).replace(".", "/");
export const discountPct = (price: number, old?: number) => (old ? Math.round((1 - price / old) * 100) : 0);
