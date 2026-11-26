"use client";
import { useEffect, useRef } from "react";
import type { App } from "vue";
import { vueModules, type VueModuleName } from "@/modules/vue";

/**
 * React → Vue bridge. React renders only an empty host <div>; Vue owns everything inside it.
 * The Vue app is created after hydration and unmounted on cleanup, so the two renderers never share DOM nodes.
 */
export function VueIsland({ name, props, className }: { name: VueModuleName; props?: Record<string, unknown>; className?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const propsKey = JSON.stringify(props ?? {});

  useEffect(() => {
    let app: App | null = null;
    let cancelled = false;
    (async () => {
      const [{ createApp }, mod] = await Promise.all([import("vue"), vueModules[name]()]);
      if (cancelled || !host.current) return;
      app = createApp(mod.default, JSON.parse(propsKey));
      app.mount(host.current);
    })();
    return () => {
      cancelled = true;
      app?.unmount();
    };
  }, [name, propsKey]);

  return <div ref={host} className={className} data-vue-module={name} />;
}
