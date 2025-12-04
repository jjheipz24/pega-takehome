import React from 'react';
import styles from './nav-search.module.css';

export const NavSearch = ({ isNavOpen }: { isNavOpen: boolean }) => {
  return (
    <div className={styles.searchContainer}>
      {isNavOpen ? (
        <>
          <i
            className={styles.searchIcon + ' fa-solid fa-magnifying-glass'}
          ></i>

          <input
            type='text'
            placeholder='Search...'
            className={styles.searchInput}
          />
        </>
      ) : (
        <div className={styles.searchIconContainer}>
          <i
            className={styles.searchIcon + ' fa-solid fa-magnifying-glass'}
          ></i>
        </div>
      )}
    </div>
  );
};

export default NavSearch;
