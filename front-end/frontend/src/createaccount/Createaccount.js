import React from 'react';
import PropTypes from 'prop-types';
import styles from './Createaccount.module.css';

function doSomethingWithData(data){

}

const Createaccount = () => (
  <div className={styles.Createaccount}>
    <div className={styles.spacing}></div>
    <form onSubmit={doSomethingWithData}>
    <div className={styles.spacing}></div>
      <h2>Create an account.</h2>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.firstlast}>
        <div className={styles.input}>
          <h2>First.</h2>
          <input type="text" name = "first_name" placeholder="Please enter your first name."></input>
        </div>
        <div className={styles.input}>
          <h2>Last.</h2>
          <input type="text" name = "last_name" placeholder="Please enter your last name."></input>
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Email.</h2>
        <input type="text" name = "email" placeholder="Please enter your email."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Password.</h2>
        <input type="password" name = "first_pass" placeholder="Please enter your password."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.input}>
        <h2>Confirm Password.</h2>
        <input type="password" name = "second_pass" placeholder="Please confirm your password."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <div className={styles.allergy}>
        <h2>Allergy input.</h2>
        <input type="text" name = "allergies" placeholder="Please input your allergies."></input>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
      <button>Sign in.</button>
      <div className={styles.spacing}></div>
      <div className={styles.spacing}></div>
    </form>
  </div>
);

Createaccount.propTypes = {};

Createaccount.defaultProps = {};

export default Createaccount;
