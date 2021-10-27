import React from 'react';
import PropTypes from 'prop-types';
import styles from './Restaurant-profile.module.css';

const Restaurantprofile = (props) => (
  <div className={styles.Restaurantprofile}>
    <h2>Profile for {props.name}</h2>
    <div className={styles.addressPhone}>
      <h3>Telephone: {props.telephone}</h3>
      <h3>Address: {props.address}</h3>
    </div>
    <div class={styles.spacing}></div>
    <button>Uber</button>
    <button>DoorDash</button>
    <button>GrubHub</button>
  </div>
);

Restaurantprofile.propTypes = {};

Restaurantprofile.defaultProps = {};

export default Restaurantprofile;