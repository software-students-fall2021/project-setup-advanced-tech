import React from 'react';
import PropTypes from 'prop-types';
import styles from '../loadingPage/LoadingPage.module.css';
import Header from '../header/Header';
import {Route, Link} from 'react-router-dom';

function LoadingPage(){
  return( <Header></Header>
);
}


LoadingPage.propTypes = {};

LoadingPage.defaultProps = {};

export default LoadingPage;
