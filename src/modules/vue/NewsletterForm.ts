import { defineComponent, h, ref } from "vue";
import { store } from "@/lib/store";

const MOBILE = /^(\+98|0)?9\d{9}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FA_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
export const toLatinDigits = (s: string) => s.replace(/[۰-۹]/g, (d) => String(FA_DIGITS.indexOf(d)));

/** Vue module: newsletter subscription with mobile/email validation and success state. */
export default defineComponent({
  name: "NewsletterForm",
  setup() {
    const value = ref("");
    const error = ref("");
    const done = ref(false);

    const submit = (e: Event) => {
      e.preventDefault();
      const v = toLatinDigits(value.value.trim());
      if (!MOBILE.test(v) && !EMAIL.test(v)) {
        error.value = "شماره موبایل یا ایمیل معتبر وارد کنید.";
        return;
      }
      error.value = "";
      done.value = true;
      store.toast("عضویت شما در خبرنامه ثبت شد");
    };

    return () =>
      done.value
        ? h("p", { role: "status", style: "color: var(--secondary); font-weight: 700; font-size: 14px" }, "ممنون! از این به بعد تازه‌ها را برایتان می‌فرستیم.")
        : h("form", { onSubmit: submit, novalidate: true, "aria-label": "عضویت در خبرنامه" }, [
            h("div", { style: "flex:1; display:flex; flex-direction:column; gap:4px" }, [
              h("input", {
                class: "input", type: "text", inputmode: "email", placeholder: "شماره موبایل یا ایمیل",
                "aria-label": "شماره موبایل یا ایمیل", "aria-invalid": String(!!error.value), value: value.value,
                onInput: (e: Event) => { value.value = (e.target as HTMLInputElement).value; },
              }),
              error.value ? h("span", { class: "field-error", role: "alert" }, error.value) : null,
            ]),
            h("button", { type: "submit", class: "btn btn-primary btn-sm", style: "height:40px" }, "عضویت"),
          ]);
  },
});
