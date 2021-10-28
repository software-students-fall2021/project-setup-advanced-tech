import React from 'react';
import PropTypes from 'prop-types';
import styles from './Createaccount.module.css';

const Createaccount = () => (
  <div className={styles.Createaccount}>
    <div className={styles.spacing}></div>
    <form>
    <div className={styles.spacing}></div>
      <h2>Create an account.</h2>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.firstlast}>
        <div className={styles.input}>
          <h2>First.</h2>
          <input type="text" placeholder="Please enter your first name."></input>
        </div>
        <div className={styles.input}>
          <h2>Last.</h2>
          <input type="text" placeholder="Please enter your last name."></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Email.</h2>
        <input type="text" placeholder="Please enter your email."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Password.</h2>
        <input type="password" placeholder="Please enter your password."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Confirm Password.</h2>
        <input type="password" placeholder="Please confirm your password."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.allergy}>
        <h2>Allergy input.</h2>
        <input type="text" placeholder="Please input your allergies."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Sign in.</button>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>
  </div>
);

Createaccount.propTypes = {};

Createaccount.defaultProps = {};

export default Createaccount;
