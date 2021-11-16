import React from 'react';
import PropTypes from 'prop-types';
import styles from './Restaurant-profile.module.css';

const Restaurantprofile = (props) => (
  <div className={styles.Restaurantprofile}>
    <div className={styles.addressPhone}>
      <h3>Telephone: {props.telephone}</h3>
      <h3>Address: {props.address}</h3>
    </div>
    <div className={styles.spacing}></div>
  </div>
);

Restaurantprofile.propTypes = {};

Restaurantprofile.defaultProps = {};

export default Restaurantprofile;
