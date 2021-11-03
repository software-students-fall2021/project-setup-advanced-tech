import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeHeader.module.css';
import AccountSignIn from '../accountSignIn/AccountSignIn';
import {Route, Link} from 'react-router-dom';
import LoadingPage from '../loadingPage/LoadingPage';
import '../button.css';
import Signin from '../signin/Signin';
function WelcomeHeader(){
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
    <Route path="/login-create-account" component={AccountSignIn}></Route>
    {toggled && window.location.href==="http://localhost:3000/" ? <Link to="/login-create-account"><button className={styles.welcomeButton} id={styles.first}onClick={changePage}>Sign in/Create account</button></Link>: null}
    <Route path="/explore" component={LoadingPage}></Route>
    {explore && toggled && window.location.href==="http://localhost:3000/"? <Link to="/explore"><button className={styles.welcomeButton} id={styles.second}onClick={explorePage}>Explore Restaurants.</button></Link>: null};
  </header>
);
}

WelcomeHeader.propTypes = {};

WelcomeHeader.defaultProps = {};

export default WelcomeHeader;
