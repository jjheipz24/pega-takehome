import { useState } from 'react';
import styles from './nav.module.css';
import pegaLogo from '../../assets/images/pega.png';
import NavSearch from '../nav-search/nav-search';
import Create from '../nav-create/nav-create';
import NavItems from '../nav-items/nav-items';

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: 'fa-solid fa-house' },
    { path: '/', label: 'My Dashboard', icon: 'fa-solid fa-table-columns' },
    { path: '/', label: 'Spaces', icon: 'fa-solid fa-people-group' },
    { path: '/', label: 'Documents', icon: 'fa-solid fa-file' },
    { path: '/bugs', label: 'Bugs', icon: 'fa-solid fa-bug' },
    { path: '/epics', label: 'Epics', icon: 'fa-solid fa-rocket' },
    { path: '/', label: 'Goals', icon: 'fa-solid fa-medal' },
  ];

  const navFooterItems = [
    { path: '/', label: 'Notifications', icon: 'fa-solid fa-bell' },
    { path: '/', label: 'Recents', icon: 'fa-solid fa-clock-rotate-left' },
    { path: '/', label: 'User', icon: 'fa-solid fa-user' },
  ];

  return (
    <nav
      className={`${styles.container} ${isNavOpen ? styles.open : styles.closed}`}
      onMouseEnter={() => setIsNavOpen(true)}
      onMouseLeave={() => setIsNavOpen(false)}
    >
      <div className={styles.navHeader}>
        <img src={pegaLogo} alt='Pega' className={styles.logo} />
        {isNavOpen && <span className={styles.navTitle}>Technical Demo</span>}
      </div>
      <NavSearch isNavOpen={isNavOpen} />
      <Create isNavOpen={isNavOpen} />
      <NavItems navItems={navItems} isNavOpen={isNavOpen} />
      <div className={styles.navFooter}>
        <span className={styles.divider}></span>
        <NavItems navItems={navFooterItems} isNavOpen={isNavOpen} />
      </div>
    </nav>
  );
};

export default Nav;
