import React from 'react';
import PropTypes from 'prop-types';
import styles from '../loadingPage/LoadingPage.module.css';
import Header from '../header/Header';
import {Route, Link} from 'react-router-dom';

function LoadingPage(){
  window.onpopstate = function(event) {
    window.location.reload();
};
  return( 
    <div className={styles.LoadingPage}>
      <div className={styles.spacing}></div>
      <Header></Header>
    </div>
);
}


LoadingPage.propTypes = {};

LoadingPage.defaultProps = {};

export default LoadingPage;
