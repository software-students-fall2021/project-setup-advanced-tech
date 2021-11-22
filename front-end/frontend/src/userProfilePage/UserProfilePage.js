import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserProfilePage.module.css';
import { Link } from 'react-router-dom';

function UserProfilePage(props){
  return(
  <div className={styles.UserProfilePage}>
    <div className={styles.spacingsmallsmall}></div>
    <h2>Welcome, {props.first_name} {props.last_name}</h2>
    <div className={styles.spacing}></div>
    <div className={styles.information}>
      <div className={styles.divide}>
      <div className={styles.spacingsmallsmall}></div>
        <h2 className={styles.label}>Email</h2>
        <h3>{props.email}</h3>
      </div>
      <div className={styles.spacingsmallsmall}></div> 
      <div className={styles.divide}>
      <div className={styles.spacingsmallsmall}></div>  
        <h2 className={styles.label}>Allergies</h2>
        <h3>{props.allergies}</h3>
      </div>
      <div className={styles.spacingsmall}></div>
      <h7>Your allergy preferences will automatically be factored into the search.</h7>
      <div className={styles.spacingsmall}></div>
      <Link to="/"><button>Go to search.</button></Link>
    </div>
  </div>
);}

UserProfilePage.propTypes = {};

UserProfilePage.defaultProps = {};

export default UserProfilePage;
