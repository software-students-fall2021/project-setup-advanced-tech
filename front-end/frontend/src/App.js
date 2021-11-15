
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './welcomeHeader/WelcomeHeader';
import LoadingPage from './loadingPage/LoadingPage';
import {Route, Link} from 'react-router-dom';
import Search from './header/Header';
import React, { useRef } from 'react'
import Signin from './signin/Signin';
import Resetpassword from './resetpassword/Resetpassword';
import Createaccount from './createaccount/Createaccount';
import Contactus from './contactus/Contactus';
//import Search from './Search'
import RestaurantList from './restaurantPreview/RestaurantList';
import Restaurant from './restaurantprofile/Restaurant';

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
    console.log(profilePage)
  }, [profilePage])

  useEffect(() => {
    if (userdata != null)
      setSignin(true)
  }, [userdata]);

  function displayProfilePage(i, data){
    setProfilePage(<div style={{color: 'white'}}>Profile page</div>)
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
      {!signin && !profilePage && (window.location.href === "http://localhost:3000/") ?  
        <div className="landingPage">
          <LandingPage/>
          <button onClick={scrollTo}>
            Explore Restaurants.
          </button>
        </div>
      : null}
      {signedin || !signin && !profilePage && (window.location.href === "http://localhost:3000/") ?
      <div className="explore" ref={elementRef}>
        {userdata != null ? <Search name={userdata.email}/>: <Search profilePage={displayProfilePage}/>}
        {!signedin ? <div className="signin">
          <h2>Want to search according to your own preferences?</h2>
          <Link style={{textDecoration: 'none'}} to="/signin">
            <button onClick={test}>
              Sign in.
            </button>
          </Link>;
        </div>: null}
      </div>: null}
      {(signin && !signedin && !profilePage)? <Signin login={login}/>: null}
      {window.location.href === "http://localhost:3000/signin" ? 
          <div className="options">
            <Link to="/resetpassword" style={{textDecoration: 'none'}}><button onClick={toggleResetPassword}>Forgot your password?</button></Link>
            <Link to="/createaccount" style={{textDecoration: 'none'}}><button onClick={toggleCreateAccount}>Don't have an account? Create one.</button></Link>
            <Link to="/contactus" style={{textDecoration: 'none'}}><button onClick={toggleContactus}>Contact us.</button></Link>
          </div>: null}
      {resetpassword && !reset ? <Resetpassword reset={renderResetPassword}/>: null}
      {createaccount && !created ?<Createaccount created={renderCreateAccount}/>: null}
      {contactus && !contacted ? <Contactus contacted={renderContactUs}/>: null}
      {profilePage != null ? profilePage: null}
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