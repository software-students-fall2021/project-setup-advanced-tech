import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resetpassword.module.css';

const Resetpassword = () => (
  <div className={styles.Resetpassword}>
    <form>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Email.</h2>
        <input type="text" value="Please enter your email."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Send me a link.</button>
    </form>
  </div>
);

Resetpassword.propTypes = {};

Resetpassword.defaultProps = {};

export default Resetpassword;
