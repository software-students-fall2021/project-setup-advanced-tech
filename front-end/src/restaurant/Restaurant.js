import React from 'react';
import PropTypes from 'prop-types';
import styles from './Restaurant.module.css';

const Restaurant = (props) => (
  <div className={styles.Restaurant}>
    <h2>{props.name}</h2>
  </div>
);

Restaurant.propTypes = {};

Restaurant.defaultProps = {};

export default Restaurant;
