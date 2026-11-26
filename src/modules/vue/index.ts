/** Registry of independently mounted Vue modules (lazy-loaded so Vue is code-split from the React bundles). */
export const vueModules = {
  FaqAccordion: () => import("./FaqAccordion"),
  NewsletterForm: () => import("./NewsletterForm"),
  ToastHost: () => import("./ToastHost"),
  ContactForm: () => import("./ContactForm"),
} as const;

export type VueModuleName = keyof typeof vueModules;
