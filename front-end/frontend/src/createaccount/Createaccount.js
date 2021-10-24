import React from 'react';
import PropTypes from 'prop-types';
import styles from './Createaccount.module.css';

const Createaccount = () => (
  <div className={styles.Createaccount}>
    <form>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.firstlast}>
        <div className={styles.input}>
          <h2>First.</h2>
          <input type="text" value="Please enter your first name."></input>
        </div>
        <div className={styles.input}>
          <h2>Last.</h2>
          <input type="text" value="Please enter your last name."></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Email.</h2>
        <input type="text" value="Please enter your email."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Password.</h2>
        <input type="text" value="Please enter your password."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Confirm Password.</h2>
        <input type="text" value="Please confirm your password."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Sign in.</button>
    </form>
  </div>
);

Createaccount.propTypes = {};

Createaccount.defaultProps = {};

export default Createaccount;
