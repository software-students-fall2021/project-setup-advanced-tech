import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderPage.css';

const OrderPage = () => (
  <div className={styles.OrderPage}>
    
      
      <div className={styles.restaurantName}>
        <div className="restaurant">
          <h2>Get the restaurant name to display here --</h2>
        </div>
        <div className="dish">
          <h2>Get the dish name to display here -- </h2>
        </div>
      </div>
      <div className={styles.links}>
          <div className="orderLinks">
            <button><a href="https://www.ubereats.com/">Search on Uber Eats here</a></button>
          </div>
          <div className="orderLinks">
            <button><a href="https://www.grubhub.com/">Search on Grubhub here</a></button>
          </div>
          <div className="orderLinks">
            <button><a href="https://www.doordash.com/">Search on Doordash here</a></button>
          </div>
      </div>
    
  </div>
);

OrderPage.propTypes = {};

OrderPage.defaultProps = {};

export default OrderPage;