import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Signin.module.css';
import {Route, Link} from 'react-router-dom';
import Resetpassword from '../resetpassword/Resetpassword';
import Createaccount from '../createaccount/Createaccount';
import Contactus from '../contactus/Contactus';

import {useHistory} from 'react-router-dom';

const { default: axios } = require('axios');

function Signin(props){ 

  const [data, setData] = useState({email: "", password: ""})

  window.onpopstate = function(event) {
    window.location.reload();
};
  const history = useHistory()
  const login = e => {
    e.preventDefault();
    axios.post("http://localhost:3001/login", {}).then(response => {console.log(response)})
    props.login(data)
    history.push("/")
}

  return(
      <div className={styles.Signin}>
        {window.location.href === "http://localhost:3000/signin" ? 
        <form onSubmit ={login}>
        <div className={styles.spacing}></div>
          <h2>Sign in.</h2>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
          <div className={styles.input}>
            <h2>Email.</h2>
            <input type="text" placeholder="Please enter your email."
            onChange={e => setData({...data, email: e.target.value})} value={data.email}></input>
          </div>
          <div className={styles.spacing}></div>
          <div className={styles.input}>
            <h2>Password.</h2>
            <input type="password" placeholder="Please enter your password."
            onChange={e => setData({...data, password: e.target.value})} value={data.password}></input>
          </div>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
          <button>Sign in.</button>
          <div className={styles.spacing}></div>
          <div className={styles.spacing}></div>
        </form>: null}
      </div>
);
}

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;