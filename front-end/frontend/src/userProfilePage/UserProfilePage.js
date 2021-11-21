import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserProfilePage.module.css';
import { Link } from 'react-router-dom';

function UserProfilePage(props){
  console.log(props)
  return(
  <div className={styles.UserProfilePage}>
    <h2>Welcome, {props.first_name} {props.last_name}</h2>
    <h2>{props.email}</h2>
    <h2>Your allergies: {props.allergies}</h2>
    <h4>Your allergy preferences will automatically be factored into the search.</h4>
    <Link to="/"><button>Go to search.</button></Link>
  </div>
);}

UserProfilePage.propTypes = {};

UserProfilePage.defaultProps = {};

export default UserProfilePage;
