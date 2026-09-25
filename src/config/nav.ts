// Single source of truth for the site's navigation tabs.
// Flip `enabled` to show or hide a tab once a section has enough content.
// Pages still build and are reachable by direct URL even when hidden here.
export interface NavItem {
  label: string;
  href: string;
  enabled: boolean;
}

export const navConfig: NavItem[] = [
  { label: 'Home', href: '/', enabled: true },
  { label: 'Engineering', href: '/engineering', enabled: true },
  { label: 'Product', href: '/product', enabled: true },
  { label: 'Music', href: '/music', enabled: false },
  { label: 'Food', href: '/food', enabled: false },
  { label: 'Creative', href: '/creative', enabled: false },
];
