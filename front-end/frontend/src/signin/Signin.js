import React from 'react';
import PropTypes from 'prop-types';
import styles from './Signin.module.css';

function Signin(){ 
  return(
      <div className={styles.Signin}>
        <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
        <form>
        <div className={styles.spacing}></div>
          <h2>Sign in.</h2>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
          <div className={styles.input}>
            <h2>Email.</h2>
            <input type="text" placeholder="Please enter your email."></input>
          </div>
          <div className={styles.spacing}></div>
          <div className={styles.input}>
            <h2>Password.</h2>
            <input type="password" placeholder="Please enter your password."></input>
          </div>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
          <button>Sign in.</button>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
        </form>
      </div>
);
}

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;
