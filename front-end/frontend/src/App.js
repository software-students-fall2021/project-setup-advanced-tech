
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './welcomeHeader/WelcomeHeader';
import LoadingPage from './loadingPage/LoadingPage';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import Search from './header/Header';
import React, { useRef } from 'react'
import Signin from './signin/Signin';
import Resetpassword from './resetpassword/Resetpassword';
import Createaccount from './createaccount/Createaccount';
import Contactus from './contactus/Contactus';
//import Search from './Search'
import RestaurantList from './restaurantPreview/RestaurantList';
import Restaurant from './restaurantprofile/Restaurant';
import RestaurantProfilePage from './restaurantProfilePage/RestaurantProfilePage';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Switch, useHistory } from 'react-router';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const backupData =
  {
    "first_name": "Jeremy",
    "last_name":"Renner",
    "allergies":["sodium hydroxide", "cyanide"],
    "email": "jrenner@hotmail.edu",
    "password": "hawkeye"
  }
const data=backupData[0]
console.log(data) 

      //<WelcomeHeader/>
      //<Search></Search>
      //<div className="App">
    //  </div>
function App() {

  const history = useHistory();

  const [signin, renderSignin] = useState(false);
  const elementRef = useRef();
  const [resetpassword, toggleResetPassword] = useState(false)
  const [contactus, toggleContactus] = useState(false)
  const [createaccount, toggleCreateAccount] = useState(false);
  const[signedin, setSignin] = useState(false);

  const [userdata, setUserdata] = useState(null)
  const [reset, resetPassword] = useState(false)
  const [created, createAccount] = useState(false)
  const [contacted, contactUs] = useState(false)
  const [profilePage, setProfilePage] = useState(null);

  useEffect(() => {
    const divElement = elementRef.current;
  }, []);

  useEffect(() => {
    if (userdata != null)
      setSignin(true)
  }, [userdata]);

  function displayProfilePage(i, data){
    setProfilePage(<RestaurantProfilePage 
      name={data[i].name} address={data[i].address} 
      telephone={data[i].telephone}/>)
  }

  function login(data){
    setUserdata(data)
  }

  function renderResetPassword(){
    resetPassword(true)
  }

  function renderCreateAccount(){
    createAccount(true)
  }

  function renderContactUs(){
    contactUs(true)
  }

  function scrollTo(){
    const divElement = elementRef.current;
    window.scrollTo({top: divElement.offsetTop})
  }

  function test(){
    renderSignin(true);
  }

  window.onpopstate = function(event) {
    window.location.reload();
};

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <div className="landingPage">
                <LandingPage/>
                <button onClick={scrollTo}>
                  Explore Restaurants.
                </button>
              </div>
              <div className="explore" ref={elementRef}>
                {userdata != null ? <Search name={userdata.email} profilePage={displayProfilePage}/>: <Search profilePage={displayProfilePage}/>}
                {!signedin ? 
                <div className="signin">
                  <h2>Want to search according to your own preferences?</h2>
                  <Link to="/signin"><button onClick={test}>
                    Sign in.
                  </button>
                  </Link>
                </div>: null}
              </div>
          </Route>
          <Route exact path="/signin">
            <Signin login={login}/>
            <div className="options">
              <Link to="/resetpassword" style={{textDecoration: 'none'}}><button onClick={toggleResetPassword}>Forgot your password?</button></Link>
              <Link to="/createaccount" style={{textDecoration: 'none'}}><button onClick={toggleCreateAccount}>Don't have an account? Create one.</button></Link>
              <Link to="/contactus" style={{textDecoration: 'none'}}><button onClick={toggleContactus}>Contact us.</button></Link>
            </div>
          </Route>
          <Route exact path="/resetpassword">
            <Resetpassword reset={renderResetPassword}/>
          </Route>
          <Route exact path="/createaccount">
            <Createaccount created={renderCreateAccount}/>
          </Route>
          <Route exact path="/contactus">
            <Contactus contacted={renderContactUs}/>
          </Route>
          <Route exact path="/profile">
            {profilePage}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

/**
 * </div><div>
      <RestaurantList order="1" state="NY" city="New York"></RestaurantList>
      <Restaurant id="3"/>
    </div>
 */