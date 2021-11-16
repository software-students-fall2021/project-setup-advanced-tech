import React from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantProfilePage.module.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function RestaurantProfilePage(props){
  const history = useHistory();
  return(
  <div className={styles.RestaurantProfilePage}>
    <Link to="/"><button>Go back.</button></Link>
    <h1>{props.name}</h1>
    <h2>{props.telephone}</h2>
    <h2>{props.address}</h2>
    <h3>{props.dishes}</h3>
  </div>
);}

RestaurantProfilePage.propTypes = {};

RestaurantProfilePage.defaultProps = {};

export default RestaurantProfilePage;
