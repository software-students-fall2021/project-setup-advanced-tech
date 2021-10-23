import React from 'react';
import PropTypes from 'prop-types';
import styles from './AccountSignIn.module.css';
import '../button.css';
import WelcomeHeader from '../welcomeHeader/WelcomeHeader';

const AccountSignIn = () => (
  <div className={styles.buttons}>
    <WelcomeHeader/>
    <div class={styles.spacing}></div>
    <div class={styles.spacing}></div>
    <button className="welcomeButton">Sign in</button>
    <div class={styles.spacing}></div>
    <div class={styles.spacing}></div>
    <div class={styles.spacing}></div>
    <button className="welcomeButton">Create Account</button>
    <div class={styles.spacing}></div>
    <div class={styles.spacing}></div>
    <div class={styles.spacing}></div>
    <button className="welcomeButton">Reset Password</button>
    <div class={styles.spacing}></div>
    <div class={styles.spacing}></div>
    <div class={styles.spacing}></div>
    <button className="welcomeButton">Contact Us</button>
  </div>
);

AccountSignIn.propTypes = {};

AccountSignIn.defaultProps = {};

export default AccountSignIn;
