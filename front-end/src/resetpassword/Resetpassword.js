import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resetpassword.module.css';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
const { default: axios } = require('axios')

function Resetpassword(props){ 
  const history = useHistory()
  const[data, toggleData] = useState({email: ""})
  const[confirmationMessage, setConfirmationMessage] = useState(null);

  function resetpassword(e){
    e.preventDefault()
    axios.post("http://147.182.189.125:3001/resetpassword", {data}).then(
      response => {
        console.log(response)
        setConfirmationMessage(<h4>If your email is valid, we have sent a link to your email.</h4>)
        props.reset();
      }
      )
  }
  return(
  <div className={styles.Resetpassword}>
    <form onSubmit={resetpassword}>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <h2>Reset password.</h2>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Email.</h2>
        <input type="text" name= "email" placeholder="Please enter your email."
        onChange={e => toggleData({...data, email: e.target.value})} value={data.email}></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Send me a link.</button>
      {confirmationMessage != null ? confirmationMessage: null}
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>
  </div>
);}

Resetpassword.propTypes = {};

Resetpassword.defaultProps = {};

export default Resetpassword;
