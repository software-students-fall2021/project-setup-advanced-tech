import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contactus.module.css';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';
const { default: axios } = require('axios')


function Contactus(props){
  const history = useHistory()
  const[data, setData] = useState({firstname: "", lastname: "", email: "", message: ""})
  const[confirmationMessage, setConfirmationMessage] = useState(null);

  function contactTeam(e){
    e.preventDefault()
    axios.post("http://147.182.189.125:3001/contactus", {data}).then(response => {
      console.log(response)
      setConfirmationMessage(<h4>Your contact request has been sent. We will get back you you soon.</h4>)
      props.contacted();
    })
    
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
          <input type="text" name = "first_name" placeholder="Enter your first name."
          onChange={e => setData({...data, firstname: e.target.value})} value={data.firstname}></input>
        </div>
        <div className={styles.name}>
          <h3>Last Name *</h3>
          <div className={styles.spacing}></div>
          <input type="text" name = "last_name" placeholder="Enter your last name."
          onChange={e => setData({...data, lastname: e.target.value})} value={data.lastname}></input>
        </div>
      </div>
      <div className={styles.email}>
        <div className="name">
          <h3>Email *</h3>
          <div className={styles.spacing}></div>
          <input type="text" name = "email" placeholder="Enter your email."
          onChange={e => setData({...data, email: e.target.value})} value={data.email}></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.message}>
        <div className="name">
          <h3>Message *</h3>
          <div className={styles.spacing}></div>
          <input type="text" name = "message" placeholder="Enter your message."
          onChange={e => setData({...data, message: e.target.value})} value={data.message}></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Submit.</button>
      {confirmationMessage != null ? confirmationMessage: null}
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>
  </div>
);
  }

Contactus.propTypes = {};

Contactus.defaultProps = {};

export default Contactus;
