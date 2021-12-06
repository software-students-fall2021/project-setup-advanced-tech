import React from 'react';
import PropTypes from 'prop-types';
import styles from './Resetpassword.module.css';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
const { default: axios } = require('axios')

function Resetpassword(props){ 
  const history = useHistory()
  const[data, toggleData] = useState({email: ""})

  function resetpassword(e){
    e.preventDefault()
    axios.post("http://http://147.182.189.125:3001/resetpassword", {data}).then(
      response => {console.log(response)}
      )
    props.reset();
    history.push("/")
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
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>
  </div>
);}

Resetpassword.propTypes = {};

Resetpassword.defaultProps = {};

export default Resetpassword;
