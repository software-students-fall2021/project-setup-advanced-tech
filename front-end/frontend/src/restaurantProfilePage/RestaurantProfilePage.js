import React from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantProfilePage.module.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function RestaurantProfilePage(props){
  const history = useHistory();

  let dishes = []
  for (let i = 0; i < props.dishes.length; i++){
    dishes.push(<h3>{props.dishes[i].name}</h3>)
  }

  function uber(){
    window.open("https://www.ubereats.com/")
  }

  function grubhub(){
    window.open("https://www.grubhub.com/")
  }

  function doordash(){
    window.open("https://www.doordash.com/")
  }

  return(
  <div className={styles.RestaurantProfilePage}>
    <h1>{props.name}</h1>
    <div className={styles.spacing}></div>
    <div className={styles.divide}>
      <div className={styles.spacingsmall}></div>
      <h2 className={styles.label}>Telephone</h2>
      <h3>{props.telephone}</h3>
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.divide}>
    <div className={styles.spacingsmall}></div>
      <h2 className={styles.label}>Address</h2>
      <h3>{props.address}</h3>
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.divide}>
    <div className={styles.spacingsmall}></div>
      <h3 className={styles.label}>Dishes:</h3>
      {dishes}
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.orders}>
    <button onClick={uber}>Uber Eats</button>
    <div className={styles.spacingsmall}></div>
    <button onClick={grubhub}>GrubHub</button>
    <div className={styles.spacingsmall}></div>
    <button onClick={doordash}>DoorDash</button>
    </div>
    <div className={styles.spacing}></div>
    <Link to="/"><button>Go back.</button></Link>
    <div className={styles.spacing}></div>
  </div>
);}

RestaurantProfilePage.propTypes = {};

RestaurantProfilePage.defaultProps = {};

export default RestaurantProfilePage;
