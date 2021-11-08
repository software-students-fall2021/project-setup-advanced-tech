import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resetpassword.module.css';
const { default: axios } = require('axios')

function Resetpassword(){ 

  function resetpassword(e){
    e.preventDefault()
    axios.post("/resetpassword").then(response => {console.log(response)})
  }
  return(
  <div className={styles.Resetpassword}>
    {window.location.href === "http://localhost:3000/resetpassword"? 
    <form onSubmit={resetpassword}>
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
      <button>Send me a link.</button>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>: null}
  </div>
);}

Resetpassword.propTypes = {};

Resetpassword.defaultProps = {};

export default Resetpassword;
