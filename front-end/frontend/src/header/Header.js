import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import '../button.css';
import axios from "axios";
import Restaurant from '../restaurant/Restaurant';
import { memo } from 'react';
import RestaurantProfile from '../restaurantprofile/Restaurant-profile';

function Header(){

  const [diet, setDiet] = useState("");
  const[restaurants, setRestaurantsList] = useState([]);
  const[searched, toggleSearch] = useState(false);
  const[profileClicked, toggleProfile] = useState(false)
  const profiles = []

  function setRestaurant(data){
    setRestaurantsList([]);
    profiles = []
    const restaurants_updated = []
    let key = 0;
    for (let i = 0; i < data.length; i++){
      profiles.push(false)
      restaurants_updated.push(!profiles[i] ? <Restaurant name={data[i].name} address={data[i].address} telephone={data[i].telephone} key={key}/>: null);
      restaurants_updated.push(<div className={styles.spacing} key={key+3}></div>);
      restaurants_updated.push(profiles[i] ? <RestaurantProfile name={data[i].name} address={data[i].address} telephone={data[i].telephone} key={key+2}/>: null)
      restaurants_updated.push(<div className={styles.spacing} key={key+1}></div>);
      key+=5
    }
    setRestaurantsList(restaurants_updated);
    toggleSearch(true);
  }

  function searchFood(event){
    event.preventDefault();
    toggleSearch(false)
    console.log(diet);
    axios.get("./restaurants.json")
    .then(response => {setRestaurant(response.data)});
  }

  return(
  <header className={styles.header}>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <h2>Find the place that suits what you want.</h2>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.logoaccount}>
      <img></img>
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.searchsearch}>
      <form onSubmit={searchFood}>
        <input type="text" 
        id="diet" 
        className="diet" 
        placeholder="Search for restaurants, food, or diets." 
        value={diet}
        onChange={event => setDiet(event.target.value)}>
        </input>
        <button type="submit" value="Submit">Search</button>
      </form>
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.filters}>
      <button>Location</button>
      <button>Food-type</button>
      <button>Rate</button>
      <button>Apply-Filters</button>
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    {searched ? <h2>Results for "{diet}"</h2>: null}
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    {restaurants}
  </header>
);
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
