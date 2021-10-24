import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contactus.module.css';

const Contactus = () => (
  <div className={styles.Contactus}>
    <h2>Contact the team.</h2>
    <form>
      <div className={styles.firstnameLastname}>
        <div className="name">
          <h3>First Name *</h3>
          <input type="text" value="Enter your first name."></input>
        </div>
        <div className="name">
          <h3>Last Name *</h3>
          <input type="text" value="Enter your last name."></input>
        </div>
      </div>
      <div className={styles.email}>
        <div className="name">
          <h3>Email *</h3>
          <input type="text" value="Enter your email."></input>
        </div>
      </div>
      <div className={styles.message}>
        <div className="name">
          <h3>Message *</h3>
          <input type="text" value="Enter your message."></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <button>Submit.</button>
    </form>
  </div>
);

Contactus.propTypes = {};

Contactus.defaultProps = {};

export default Contactus;
