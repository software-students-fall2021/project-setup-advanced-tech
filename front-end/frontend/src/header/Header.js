import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import axios from "axios";
import Restaurant from '../restaurant/Restaurant';
import { memo } from 'react';
import RestaurantProfile from '../restaurantprofile/Restaurant-profile';
import Signin from '../signin/Signin';
import {Route, Link} from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import RestaurantList from '../restaurantPreview/RestaurantList';
import RestaurantProfilePage from '../restaurantProfilePage/RestaurantProfilePage';

function Search(props){

  const [diet, setDiet] = useState("");
  const[restaurants, setRestaurantsList] = useState([]);
  const[searched, toggleSearch] = useState(false);
  const[profiles, setProfiles] = useState([]);
  const[data, setData] = useState([]);
  const[locationClicked, toggleLocation] = useState(false);
  const[foodTypeClicked, toggleFoodType] = useState(false);
  const[ratingClicked, toggleRating] = useState(false);
  const[allergiesClicked, toggleAllergies] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({location: "", rating: "", allergies: "", food_type: ""})

  function location(){
    toggleLocation(!locationClicked);
  }

  function foodType(){
    toggleFoodType(!foodTypeClicked)
  }

  function rating(){
    toggleRating(!ratingClicked)
  }

  function allergies(){
    toggleAllergies(!allergiesClicked)
  }

  useEffect(() => {
    const restaurants_updated = []
    let key = 0;
    for (let i = 0; i < data.length; i++){
      restaurants_updated.push(<button key={key} onClick={() => displayProfile(i, data)}><Restaurant name={data[i].name} address={data[i].address} telephone={data[i].telephone}/></button>);
      restaurants_updated.push(<div className={styles.spacing} key={key+3}></div>);
      restaurants_updated.push(profiles[i] ? <RestaurantProfile name={data[i].name} address={data[i].address} telephone={data[i].telephone} key={key+2}/>: null)
      restaurants_updated.push(<div className={styles.spacing} key={key+1}></div>);
      restaurants_updated.push(profiles[i] ? <Link to="/profile"><button key={key+4} onClick={() => profilePage(i, data)}>Learn more.</button></Link>: null)
      key+=6
    }
    setRestaurantsList(restaurants_updated);
  }, [profiles])

  function displayProfile(profile, data){
    let newProfs = []
    for (let i = 0; i < profiles.length; i++){
      if (profile != i){
        newProfs.push(profiles[i])
      }
      else{
        newProfs.push(!profiles[i])
      }
    }
    setProfiles(newProfs)
  }

  function profilePage(i, data){
    console.log(data)
    props.profilePage(i, data);
  }

  function setRestaurant(data){
    setData(data);
    const restaurants_updated = []
    let key = 0;
    for (let i = 0; i < data.length; i++){
      profiles.push(false)
      restaurants_updated.push(<button key={key} onClick={() => displayProfile(i, data)}><Restaurant key={key+5}name={data[i].name} address={data[i].address} telephone={data[i].telephone}/></button>);
      restaurants_updated.push(<div className={styles.spacing} key={key+3}></div>);
      restaurants_updated.push(profiles[i] ? <RestaurantProfile name={data[i].name} address={data[i].address} telephone={data[i].telephone} key={key+2}/>: null)
      restaurants_updated.push(<div className={styles.spacing} key={key+1}></div>);
      restaurants_updated.push(profiles[i] ? <Link to="/profile"><button key={key+4} onClick={() => profilePage(i, data)}>Learn more.</button></Link>: null)
      key+=7
    }
    setRestaurantsList(restaurants_updated);
    toggleSearch(true);
  }

  function searchFood(event){
    event.preventDefault();
    toggleSearch(false)
    let search = {
      location: searchCriteria.location,
      rating: searchCriteria.rating,
      food_type: searchCriteria.food_type,
      allergies: props.allergies
    }
    axios.post("http://localhost:3001/restaurants", search, {headers: {"x-access-token": props.token}})
    .then(response => {
      console.log(response)
      setRestaurant(response.data)});
  }

  return(
  <header className={styles.header}>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <h2>Find the place that suits what you want.</h2>
    {props.name != "" ? <h3>Welcome, {props.name}</h3>: null}
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
      <button onClick={location}>Location</button>
      <button onClick={foodType}>Food-type</button>
      <button onClick={rating}>Rate</button>
    </div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    {locationClicked ? <div>
      <h2>Please enter your location</h2>
      <input type="text" placeholder="location" 
      onChange={e => setSearchCriteria({...searchCriteria, location: e.target.value})} value={searchCriteria.location}></input>
    </div>: null}
    {foodTypeClicked ? <div>
      <h2>Please enter your food-type</h2>
      <input type="text" placeholder="type"
      onChange={e => setSearchCriteria({...searchCriteria, food_type: e.target.value})} value={searchCriteria.food_type}></input>
    </div>: null}
    {ratingClicked ? <div>
      <h2>Please enter a rating</h2>
      <input type="text" placeholder="rating"
      onChange={e => setSearchCriteria({...searchCriteria, rating: e.target.value})} value={searchCriteria.rating}></input>
    </div>: null}
    {allergiesClicked ? <div>
      <h2>Please enter a list of allergies</h2>
      <input type="text" placeholder="allergies"
      onChange={e => setSearchCriteria({...searchCriteria, allergies: e.target.value})} value={searchCriteria.allergies}></input>
    </div>: null}
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    {searched ? <h2>Results for "{diet}"</h2>: null}
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    <div className={styles.spacing}></div>
    {restaurants}
  </header>
);
}

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
