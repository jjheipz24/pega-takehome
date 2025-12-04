import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import styles from './nav-create.module.css';
import navItemsStyles from '../nav-items/nav-items.module.css';

export const NavCreate = ({ isNavOpen }: { isNavOpen: boolean }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const submenuItems = [
    { path: '/create-bug', label: 'Bug' },
    { path: '/create-epic', label: 'Epic' },
    { path: '/', label: 'User Story' },
  ];

  useEffect(() => {
    if (!isNavOpen) {
      setIsSubmenuOpen(false);
    }
  }, [isNavOpen, isSubmenuOpen]);

  return (
    <li className={`${styles.createMenu} ${isNavOpen ? styles.navOpen : ''}`}>
      <button
        className={navItemsStyles.navItem}
        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
        aria-expanded={isSubmenuOpen}
        aria-controls='create-submenu'
        aria-haspopup='true'
        type='button'
      >
        <div className={styles.createMenuContent}>
          <i
            className={isSubmenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-plus'}
          ></i>
          {isNavOpen && (
            <span className={navItemsStyles.navItemLabel}>Create...</span>
          )}
        </div>
        {isNavOpen && (
          <i
            className={`
            ${navItemsStyles.navItemLabel} ${
              isSubmenuOpen
                ? 'fa-solid fa-chevron-down'
                : 'fa-solid fa-chevron-right'
            }`}
          ></i>
        )}
      </button>
      {isSubmenuOpen && (
        <ul className={styles.submenu} id='create-submenu' role='menu'>
          {submenuItems.map((item) => (
            <li key={item.label} className={styles.submenuItem} role='menuitem'>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavCreate;
