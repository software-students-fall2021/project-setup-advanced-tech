import React from 'react';
import PropTypes from 'prop-types';
import styles from './AccountSignIn.module.css';
import '../button.css';
import WelcomeHeader from '../welcomeHeader/WelcomeHeader';
import SignIn from '../signin/SignIn';
import {Route, Link} from 'react-router-dom';

const AccountSignIn = () => (
  <div className={styles.buttons}>
    <button className="welcomeButton" id={styles.first}>Sign in</button>
    <button className="welcomeButton" id={styles.second}>Create Account</button>
    <button className="welcomeButton" id={styles.third}>Reset Password</button>
    <button className="welcomeButton" id={styles.fourth}>Contact Us</button>
  </div>
);

AccountSignIn.propTypes = {};

AccountSignIn.defaultProps = {};

export default AccountSignIn;
