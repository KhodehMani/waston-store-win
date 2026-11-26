import { defineComponent, h, ref, type PropType } from "vue";
import type { FaqItem } from "@/types";

/** Vue module: accessible FAQ accordion (one panel open at a time). */
export default defineComponent({
  name: "FaqAccordion",
  props: {
    items: { type: Array as PropType<FaqItem[]>, required: true },
    idPrefix: { type: String, default: "faq" },
  },
  setup(props) {
    const open = ref<number | null>(null);
    return () =>
      h("div", { class: "faq" }, props.items.map((item, i) => {
        const isOpen = open.value === i;
        const qid = `${props.idPrefix}-q-${i}`;
        const aid = `${props.idPrefix}-a-${i}`;
        return h("div", { class: "faq-item", key: item.q }, [
          h("button", { id: qid, type: "button", class: "faq-q", "aria-expanded": String(isOpen), "aria-controls": aid, onClick: () => { open.value = isOpen ? null : i; } }, [
            h("span", item.q),
            h("span", { class: "sign", "aria-hidden": "true" }, isOpen ? "−" : "+"),
          ]),
          isOpen ? h("div", { id: aid, role: "region", "aria-labelledby": qid, class: "faq-a" }, item.a) : null,
        ]);
      }));
  },
});
