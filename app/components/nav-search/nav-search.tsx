import React from 'react';
import styles from './nav-search.module.css';

export const NavSearch = () => {
  return (
    <div className={styles.searchContainer}>
      <i className={styles.searchIcon + ' fa-solid fa-magnifying-glass'}></i>
      <input
        type='text'
        placeholder='Search...'
        className={styles.searchInput}
      />
    </div>
  );
};

export default NavSearch;
