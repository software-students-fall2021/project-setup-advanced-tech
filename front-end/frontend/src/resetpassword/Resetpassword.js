import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resetpassword.module.css';

const Resetpassword = () => (
  <div className={styles.Resetpassword}>
    {window.location.href === "http://localhost:3000/resetpassword"? <form>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <h2>Reset password.</h2>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Email.</h2>
        <input type="text" name= "email" placeholder="Please enter your email."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Send me a link.</button>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>: null}
  </div>
);

Resetpassword.propTypes = {};

Resetpassword.defaultProps = {};

export default Resetpassword;
