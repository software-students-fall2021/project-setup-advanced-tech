import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contactus.module.css';
const { default: axios } = require('axios')

function Contactus(){
  function contactTeam(e){
    e.preventDefault()
    axios.post("/contactus").then(response => {console.log(response)})
  }
  return(
  <div className={styles.Contactus}>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <form onSubmit={contactTeam}>
      <div className={styles.spacing}></div>
      <h2>Contact the team.</h2>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.firstnameLastname}>
        <div className={styles.name}>
          <h3>First Name *</h3>
          <div className={styles.spacing}></div>
          <input type="text" name = "first_name" placeholder="Enter your first name."></input>
        </div>
        <div className={styles.name}>
          <h3>Last Name *</h3>
          <div className={styles.spacing}></div>
          <input type="text" name = "last_name" placeholder="Enter your last name."></input>
        </div>
      </div>
      <div className={styles.email}>
        <div className="name">
          <h3>Email *</h3>
          <div className={styles.spacing}></div>
          <input type="text" name = "email" placeholder="Enter your email."></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.message}>
        <div className="name">
          <h3>Message *</h3>
          <div className={styles.spacing}></div>
          <input type="text" name = "message" placeholder="Enter your message."></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Submit.</button>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>
  </div>
);
  }

Contactus.propTypes = {};

Contactus.defaultProps = {};

export default Contactus;
