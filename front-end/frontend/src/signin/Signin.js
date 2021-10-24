import React from 'react';
import PropTypes from 'prop-types';
import styles from './Signin.module.css';

const Signin = () => (
  <div className={styles.Signin}>
    <form>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Email.</h2>
        <input type="text" value="Please enter your email."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Password.</h2>
        <input type="text" value="Please enter your password."></input>
      </div>
      <div className={styles.spacing}></div>
      <button>Sign in.</button>
    </form>
  </div>
);

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;
