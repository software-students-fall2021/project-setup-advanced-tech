import React from 'react';
import PropTypes from 'prop-types';
import styles from './RestaurantProfilePage.module.css';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

function RestaurantProfilePage(props){
  const history = useHistory();

  let dishes = []
  for (let i = 0; i < props.dishes.length; i++){
    dishes.push(<div>{props.dishes[i].name}</div>)
  }

  return(
  <div className={styles.RestaurantProfilePage}>
    <Link to="/"><button>Go back.</button></Link>
    <h1>{props.name}</h1>
    <h2>{props.telephone}</h2>
    <h2>{props.address}</h2>
    <h3>Dishes:</h3>
    {dishes}
  </div>
);}

RestaurantProfilePage.propTypes = {};

RestaurantProfilePage.defaultProps = {};

export default RestaurantProfilePage;
