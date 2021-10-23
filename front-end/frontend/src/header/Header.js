import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import '../button.css';

function Header(){
  return(
  <header className={styles.header}>
    <div className={styles.spacing}></div>
    <div className={styles.logoaccount}>
      <h2>Weet</h2>
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
      <button className="location">Location</button>
      <button className="food-type">Food-type</button>
      <button className="rate">Rate</button>
      <button className="apply-filters">Apply-Filters</button>
    </div>
  </header>
);
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
