import React from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeHeader.module.css';

const WelcomeHeader = () => (
  <header className={styles.welcomeHeader}>
    <h1>Welcome to Weet.</h1>
    <h2><i>A place for all your dietary needs.</i></h2>
  </header>
);

WelcomeHeader.propTypes = {};

WelcomeHeader.defaultProps = {};

export default WelcomeHeader;
