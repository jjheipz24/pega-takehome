import { Link } from 'react-router';
import type { NavItemListProps } from './nav-items.types';
import styles from './nav-items.module.css';

export const NavItems = ({ navItems, isNavOpen }: NavItemListProps) => {
  return (
    <ul>
      {navItems.map((item) => (
        <li key={item.label} className={styles.navItem}>
          <Link to={item.path} aria-label={!isNavOpen ? item.label : undefined}>
            <i className={item.icon} aria-hidden='true'></i>
            {isNavOpen && (
              <span className={styles.navItemLabel}>{item.label}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
