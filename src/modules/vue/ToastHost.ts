import { defineComponent, h, onBeforeUnmount, ref, TransitionGroup } from "vue";
import { store } from "@/lib/store";

/** Vue module: global toast notifications fed by the shared store (DS "Toast"). */
export default defineComponent({
  name: "ToastHost",
  setup() {
    const toasts = ref<{ id: number; msg: string }[]>([]);
    let seq = 0;
    const off = store.onToast((msg) => {
      const id = ++seq;
      toasts.value = [...toasts.value.slice(-2), { id, msg }];
      setTimeout(() => { toasts.value = toasts.value.filter((t) => t.id !== id); }, 2600);
    });
    onBeforeUnmount(off);
    return () =>
      h("div", { class: "toast-host", role: "status", "aria-live": "polite" }, [
        h(TransitionGroup, { name: "toast" }, () => toasts.value.map((t) => h("div", { class: "toast", key: t.id }, t.msg))),
      ]);
  },
});
