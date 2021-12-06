import React from 'react';
import PropTypes from 'prop-types';
import styles from './Createaccount.module.css';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
const { default: axios } = require('axios')

function Createaccount(props){
  const[registrationInfo, setRegistrationInfo] = useState({first_name: "", last_name: "", email: "",
  first_pass: "", second_pass: "", allergies: ""});
  const[errorMessage, setErrorMessage] = useState(null);

  const history = useHistory()
  function createaccount(e){
    e.preventDefault()
    axios.post("http://147.182.189.125:3001/createaccount", registrationInfo).
    then(response => 
      {
        if (response.data.message !== "Email has already been taken."){
          props.created()
          history.push("/")
        }
        else{
          setErrorMessage(<h4>Email has already been taken.</h4>);
        }
      })
      
  }

  return(
  <div className={styles.Createaccount}>
    <div className={styles.spacing}></div>
    <form onSubmit={createaccount}>
    <div className={styles.spacing}></div>
      <h2>Create an account.</h2>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.firstlast}>
        <div className={styles.input}>
          <h2>First.</h2>
          <input type="text" name = "first_name" placeholder="Please enter your first name."
          onChange={e => setRegistrationInfo({...registrationInfo, first_name: e.target.value})} value={registrationInfo.first_name}></input>
        </div>
        <div className={styles.input}>
          <h2>Last.</h2>
          <input type="text" name = "last_name" placeholder="Please enter your last name."
          onChange={e => setRegistrationInfo({...registrationInfo, last_name: e.target.value})} value={registrationInfo.last_name}></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Email.</h2>
        <input type="text" name = "email" placeholder="Please enter your email."
        onChange={e => setRegistrationInfo({...registrationInfo, email: e.target.value})} value={registrationInfo.email}></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Password.</h2>
        <input type="password" name = "first_pass" placeholder="Please enter your password."
        onChange={e => setRegistrationInfo({...registrationInfo, first_pass: e.target.value})} value={registrationInfo.first_pass}></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Confirm Password.</h2>
        <input type="password" name = "second_pass" placeholder="Please confirm your password."
        onChange={e => setRegistrationInfo({...registrationInfo, second_pass: e.target.value})} value={registrationInfo.second_pass}></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.allergy}>
        <h2>Allergy input.</h2>
        <input type="text" name = "allergies" placeholder="Please input your allergies."
        onChange={e => setRegistrationInfo({...registrationInfo, allergies: e.target.value})} value={registrationInfo.allergies}></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Create account.</button>
      {errorMessage !== null ? errorMessage: null}
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>
  </div>
);}

Createaccount.propTypes = {};

Createaccount.defaultProps = {};

export default Createaccount;
