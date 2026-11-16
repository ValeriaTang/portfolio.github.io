export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'ホーム', href: '/' },
  { label: '私について', href: '/aboutme' },
  { label: 'スキル', href: '/skills' },
  { label: '作品', href: '/works' },
];