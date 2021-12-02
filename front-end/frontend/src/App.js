
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
import UserProfilePage from './userProfilePage/UserProfilePage';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
function App() {

  const history = useHistory();

  const [signin, renderSignin] = useState(false);
  const elementRef = useRef();
  const [resetpassword, toggleResetPassword] = useState(false)
  const [contactus, toggleContactus] = useState(false)
  const [createaccount, toggleCreateAccount] = useState(false);
  const[signedin, setSignin] = useState(false);

  const [userdata, setUserdata] = useState({first_name: "", last_name: "", email: "", allergies: ""})
  const [token, setToken] = useState("");
  const [reset, resetPassword] = useState(false)
  const [created, createAccount] = useState(false)
  const [contacted, contactUs] = useState(false)
  const [profilePage, setProfilePage] = useState(null);
  const[userprofilepage, setuserprofilepage] = useState(null);
  const[search, setSearchPage] = useState(<Search profilePage={displayProfilePage}/>);

  useEffect(() => {
    const divElement = elementRef.current;
  }, []);

  useEffect(() => {
    if (userdata.first_name !== "")
      setSignin(true)
  }, [userdata]);

  function displayUserProfilePage(){
    setuserprofilepage(<UserProfilePage first_name={userdata.first_name}
    last_name={userdata.last_name} email={userdata.email} allergies={userdata.allergies}/>)
  }

  function displayProfilePage(i, data){
    setProfilePage(<RestaurantProfilePage 
      name={data[i].name} address={data[i].address} 
      telephone={data[i].telephone} dishes={data[i].dishes}/>)
  }

  function login(data){
    setUserdata(data.data)
    setToken(data.token);
    setSearchPage(<Search token={token} name={userdata.email} allergies={userdata.allergies}profilePage={displayProfilePage}/>)
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

  function logout(){
    setSignin(false);
    setUserdata({first_name: "", last_name: "", email: "", allergies: ""})
    setToken("")
    setSearchPage(<Search profilePage={displayProfilePage}/>)
  }

  window.onpopstate = function(event) {
    window.location.reload();
};

  return (
    // <div className="APP2">
    //   <RestaurantList></RestaurantList>
    //   <Restaurant id = "5"></Restaurant>
    // </div>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <div className="landingPage">
                <LandingPage/>
                {!signedin ? <button onClick={scrollTo}>
                  Explore Restaurants.
                </button>: <div className="signedIn">
                  <Link style={{textDecoration: 'none'}} to="/home"><button onClick={displayUserProfilePage}>
                  My Stuff.
                </button></Link>
                <button onClick={logout}>Logout</button>
                </div>}
              </div>
              <div className="explore" ref={elementRef}>
                {userdata != null ? <Search token={token} name={userdata.email} allergies={userdata.allergies}profilePage={displayProfilePage}/>: <Search profilePage={displayProfilePage}/>}
                {!signedin ? 
                <div className="signin">
                  <h2>Want to search according to your own preferences?</h2>
                  <Link to="/signin" style={{textDecoration: 'none'}}><button onClick={test}>
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
          <Route exact path="/home">
            {userprofilepage}
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