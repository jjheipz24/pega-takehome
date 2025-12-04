export interface NavItemProps {
  path: string;
  label: string;
  icon: string;
}

export interface NavItemListProps {
  navItems: NavItemProps[];
  isNavOpen: boolean;
}
