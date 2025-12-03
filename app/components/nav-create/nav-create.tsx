import { useState } from 'react';
import { Link } from 'react-router';
import styles from './nav-create.module.css';
import navItemsStyles from '../nav-items/nav-items.module.css';

export const NavCreate = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const submenuItems = [
    { path: '/', label: 'Bug' },
    { path: '/', label: 'Epic' },
    { path: '/', label: 'User Story' },
  ];

  return (
    <li className={styles.createMenu}>
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
          <span>Create...</span>
        </div>
        <i
          className={
            isSubmenuOpen
              ? 'fa-solid fa-chevron-down'
              : 'fa-solid fa-chevron-right'
          }
        ></i>
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
