export interface NavItem {
  title: string;
  href: string;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Service", href: "/service" },
  { title: "Projects", href: "/projects" },
  { title: "Career", href: "/career" },
  { title: "About", href: "/about" },
];
