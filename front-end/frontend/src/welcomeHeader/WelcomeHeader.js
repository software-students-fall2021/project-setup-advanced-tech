import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeHeader.module.css';
import {Route, Link} from 'react-router-dom';
import LoadingPage from '../loadingPage/LoadingPage';
import Signin from '../signin/Signin';
function LandingPage(){
  const [toggled, removeButton] = useState(true);
  const [explore, toggleExplore] = useState(true);
  function changePage(){
    removeButton(false);
  }
  function explorePage(){
    toggleExplore(false);
  }

  window.onpopstate = function(event) {
    window.location.reload();
};
  return(
  <header className={styles.welcomeHeader}>
    <div className={styles.spacing}></div>
    <div className={styles.welcomeMessage}>
      <h1>Welcome to Weet.</h1>
      <h2><i>A place for all your dietary needs.</i></h2>
    </div>
  </header>
);
}

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
