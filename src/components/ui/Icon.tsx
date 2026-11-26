import type { IconName } from "@/types";

/** Line icon set drawn to match the WASTON mockups (24×24, 1.8 stroke). */
const paths: Record<IconName, React.ReactNode> = {
  toaster: (<><path d="M4 9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" /><path d="M8 6V4M16 6V4M7 13h6M17 12v3" /></>),
  blender: (<><path d="M7 3h10l-1.5 11h-7L7 3Z" /><path d="M8.5 14 8 21h8l-.5-7" /><circle cx="12" cy="17.5" r=".6" fill="currentColor" /></>),
  kettle: (<><path d="M5 9h11v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9Z" /><path d="M16 11h2a2 2 0 0 1 0 4h-2M5 9l1-3h7l1 3" /></>),
  pot: (<><path d="M4 11h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z" /><path d="M9 5l-1 3M14 5l-1 3" /></>),
  pan: (<><path d="M3 11h13v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2Z" /><path d="M16 12h5M8 5 7 8M12 5l-1 3" /></>),
  vase: (<><path d="M9 3h6M10 3v4L6.5 11A5.5 5.5 0 1 0 17.5 11L14 7V3" /><path d="M6 14h12" /></>),
  mug: (<><path d="M5 6h11v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V6Z" /><path d="M16 9h1.5a2.5 2.5 0 0 1 0 5H16" /></>),
  bowl: (<><path d="M3 11h18a9 7 0 0 1-18 0Z" /><path d="M8 18h8M9 4 8 7M14 4l-1 3" /></>),
  plate: (<><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /></>),
  gift: (<><rect x="3.5" y="8" width="17" height="4" rx="1" /><path d="M5 12v8h14v-8M12 8v12M12 8S10 3.5 7.5 4.5 9 8 12 8Zm0 0s2-4.5 4.5-3.5S15 8 12 8Z" /></>),
  stickVacuum: (<><path d="M16 3 9 17" /><path d="M5 17h7v3H5z" /></>),
  robotVacuum: (<><circle cx="12" cy="12" r="8.5" /><path d="M8 12h8" /></>),
  vacuum: (<><path d="M14 3h2a3 3 0 0 1 0 6l-6 6" /><path d="M10 15v2" /><circle cx="8" cy="19" r="2" /><path d="M10 19h6" /></>),
  sparkle: (<path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3 3M15.4 15.4l3 3M18.4 5.6l-3 3M8.6 15.4l-3 3" />),
  tag: (<><path d="M3 12V4h8l10 10-8 8L3 12Z" /><circle cx="7.5" cy="8.5" r="1.5" /></>),
  cart: (<><path d="M3 4h2l2.4 11h10.2L20 7H6.2" /><circle cx="9" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" /></>),
  heart: (<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />),
  user: (<><circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" /></>),
  moon: (<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />),
  sun: (<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>),
  search: (<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>),
  truck: (<><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>),
  shield: (<><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>),
  return: (<><path d="M9 14 4 9l5-5" /><path d="M4 9h11a5 5 0 0 1 0 10h-3" /></>),
  headset: (<><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /></>),
  pin: (<><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.3" /></>),
  menu: (<path d="M4 7h16M4 12h16M4 17h16" />),
  close: (<path d="M6 6l12 12M18 6 6 18" />),
  home: (<><path d="M4 11 12 4l8 7" /><path d="M6 10v10h12V10" /></>),
  grid: (<><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>),
  star: (<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />),
  plus: (<path d="M12 5v14M5 12h14" />),
  minus: (<path d="M5 12h14" />),
  trash: (<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" />),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  phone: (<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />),
  clock: (<><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></>),
  filter: (<path d="M4 5h16l-6 8v5l-4 2v-7L4 5Z" />),
  briefcase: (<><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M9 7V5h6v2M3 12h18" /></>),
  cake: (<><path d="M4 20v-7h16v7M4 16c2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0 1.5 1.2 2.7 1.2 4 0M12 13V9" /><path d="M12 5.5c.8 1 .8 2 0 2.5-.8-.5-.8-1.5 0-2.5Z" /></>),
  check: (<path d="m5 12 4.5 4.5L19 7" />),
  chevron: (<path d="m14 6-6 6 6 6" />),
};

export function Icon({ name, size = 20, className, strokeWidth = 1.8 }: { name: IconName; size?: number; className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
