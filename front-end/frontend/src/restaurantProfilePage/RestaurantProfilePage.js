import React from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantProfilePage.module.css';

const RestaurantProfilePage = (props) => (
  <div className={styles.RestaurantProfilePage}>
    <h1>{props.name}</h1>
    <h2>{props.telephone}</h2>
    <h2>{props.address}</h2>
    <h3>{props.dishes}</h3>
  </div>
);

RestaurantProfilePage.propTypes = {};

RestaurantProfilePage.defaultProps = {};

export default RestaurantProfilePage;
