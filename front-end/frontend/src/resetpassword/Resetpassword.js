import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resetpassword.module.css';
import {useHistory} from 'react-router-dom';
const { default: axios } = require('axios')

function Resetpassword(props){ 
  const history = useHistory()

  function resetpassword(e){
    e.preventDefault()
    axios.post("http://localhost:3001/resetpassword", {}).then(response => {console.log(response)})
    props.reset();
    history.push("/")
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
