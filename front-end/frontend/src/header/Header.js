import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import '../button.css';

function Header(){
  return(
  <header className={styles.header}>
    <div className={styles.spacing}></div>
    <div className={styles.logoaccount}>
      <img></img>
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.searchsearch}>
      <h2>Japanese</h2>
      <button>Search</button>
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.filters}>
      <button>Location</button>
      <button>Food-type</button>
      <button>Rate</button>
      <button>Apply-Filters</button>
    </div>
  </header>
);
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
