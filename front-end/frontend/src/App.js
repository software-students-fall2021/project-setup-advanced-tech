
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import WelcomeHeader from './welcomeHeader/WelcomeHeader';
import LoadingPage from './loadingPage/LoadingPage';
import AccountSignIn from './accountSignIn/AccountSignIn';
import {Route, Link} from 'react-router-dom';
import Search from './Search'
import Restaurant from './Restaurant';
import Dishes from './Dishes';
import DishesDisplay from './DishesDisplay';

const backupData = [
  {
    "id":1,
    "name":"Ahmed",
    "ingredients":"OpnRV2Z",
    "collections":78,
    "image":"http://dummyimage.com/190x100.png/ff4444/ffffff"
  },
  {
    "id":2,
    "name":"Mallorie",
    "ingredients":"c6TwOSFE",
    "collections":84,
    "image":"http://dummyimage.com/173x100.png/ff4444/ffffff"},
]
const data=backupData[0]
console.log(data)

      //<WelcomeHeader/>
      //<Search></Search>
      //<div className="App">
    //  </div>
function App() {
  return (
    <div>
      <Restaurant id="3"/>
    </div>
  );
}

export default App;
