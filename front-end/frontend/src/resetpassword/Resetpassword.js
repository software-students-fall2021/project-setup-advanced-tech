import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resetpassword.module.css';
import axios from 'axios';

function Resetpassword(){
  function resetpassword(e){
    e.preventDefault();
    axios.post('http://localhost:3001/resetpassword', {"email": "test@gmail.com"})
        .then(response => console.log(response));
  }
  return(
  <div className={styles.Resetpassword}>
    <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    <form>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <h2>Reset password.</h2>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
        <div className={styles.input}>
          <h2>Email.</h2>
          <input type="text" name= "email" placeholder="Please enter your email."></input>
        </div>
        <div className={styles.spacing}></div>
        <div className={styles.spacing}></div>
        <div className={styles.spacing}></div>
        <button type="submit">Send me a link.</button>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>
  </div>
);}

Resetpassword.propTypes = {};

Resetpassword.defaultProps = {};

export default Resetpassword;