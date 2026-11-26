import { defineComponent, h, reactive, ref } from "vue";
import { store } from "@/lib/store";
import { toLatinDigits } from "./NewsletterForm";

type Field = "name" | "phone" | "subject" | "message";
const SUBJECTS = ["پیگیری سفارش", "مرجوعی و گارانتی", "سفارش سازمانی", "پیشنهاد و انتقاد"];

/** Vue module: contact form with field validation and DS success state. */
export default defineComponent({
  name: "ContactForm",
  setup() {
    const form = reactive<Record<Field, string>>({ name: "", phone: "", subject: SUBJECTS[0], message: "" });
    const errors = reactive<Partial<Record<Field, string>>>({});
    const sent = ref(false);

    const validate = () => {
      errors.name = form.name.trim().length < 2 ? "نام را وارد کنید." : undefined;
      errors.phone = /^(\+98|0)?9\d{9}$/.test(toLatinDigits(form.phone.trim())) ? undefined : "شماره موبایل معتبر نیست.";
      errors.message = form.message.trim().length < 10 ? "پیام باید حداقل ۱۰ کاراکتر باشد." : undefined;
      return !errors.name && !errors.phone && !errors.message;
    };
    const submit = (e: Event) => {
      e.preventDefault();
      if (!validate()) return;
      sent.value = true;
      store.toast("پیام شما ثبت شد");
    };
    const bind = (f: Field) => ({
      value: form[f],
      "aria-invalid": String(!!errors[f]),
      onInput: (e: Event) => { form[f] = (e.target as HTMLInputElement).value; },
    });
    const err = (f: Field) => (errors[f] ? h("span", { class: "field-error", role: "alert" }, errors[f]) : null);

    return () =>
      sent.value
        ? h("div", { class: "state success" }, [
            h("h3", "پیام شما ثبت شد"),
            h("p", "کارشناسان WASTON حداکثر تا یک روز کاری پاسخ می‌دهند."),
            h("button", { type: "button", class: "btn btn-outline btn-sm", onClick: () => { sent.value = false; form.message = ""; } }, "ارسال پیام دیگر"),
          ])
        : h("form", { class: "card contact-form", onSubmit: submit, novalidate: true }, [
            h("h2", { style: "font-size:17px;font-weight:800" }, "ارسال پیام"),
            h("div", { class: "row2" }, [
              h("label", { class: "field" }, ["نام و نام خانوادگی", h("input", { class: "input", autocomplete: "name", ...bind("name") }), err("name")]),
              h("label", { class: "field" }, ["شماره موبایل", h("input", { class: "input", inputmode: "tel", autocomplete: "tel", placeholder: "09xx xxx xxxx", ...bind("phone") }), err("phone")]),
            ]),
            h("label", { class: "field" }, [
              "موضوع",
              h("select", { class: "select", value: form.subject, onChange: (e: Event) => { form.subject = (e.target as HTMLSelectElement).value; } },
                SUBJECTS.map((s) => h("option", { value: s }, s))),
            ]),
            h("label", { class: "field" }, ["پیام", h("textarea", { class: "textarea", ...bind("message") }), err("message")]),
            h("button", { type: "submit", class: "btn btn-primary", style: "align-self:flex-start" }, "ارسال پیام"),
          ]);
  },
});
