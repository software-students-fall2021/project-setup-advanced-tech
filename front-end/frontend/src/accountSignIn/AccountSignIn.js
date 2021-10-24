import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AccountSignIn.module.css';
import '../button.css';
import WelcomeHeader from '../welcomeHeader/WelcomeHeader';
import {Route, Link} from 'react-router-dom';
import Signin from '../signin/Signin';
import Createaccount from '../createaccount/Createaccount';
import Contactus from '../contactus/Contactus';
import Resetpassword from '../resetpassword/Resetpassword';

function AccountSignIn(){
  const [signin, toggleSignin] = useState(true);
  const [createAccount, toggleCreateAccount] = useState(true);
  const [resetpassword, toggleResetPassword] = useState(true);
  const [contactus, toggleContactus] = useState(true);

  function changePage(){
    toggleSignin(false);
    toggleCreateAccount(false);
    toggleResetPassword(false);
    toggleContactus(false);
  }

  return(
  <div className={styles.buttons}>
    <Route path="/login-create-account/login" component={Signin}></Route>
    <Route path="/login-create-account/createaccount" component={Createaccount}></Route>
    <Route path="/login-create-account/reset-password" component={Resetpassword}></Route>
    <Route path="/login-create-account/contact-us" component={Contactus}></Route>
    {signin && createAccount && resetpassword && contactus ? <Link to="/login-create-account/login"><button className="welcomeButton" id={styles.first} onClick={changePage}>Sign in</button></Link>: null}
    {signin && createAccount && resetpassword && contactus ? <Link to="/login-create-account/createaccount"><button className="welcomeButton" id={styles.second} onClick={changePage}>Create Account</button></Link>: null}
    {signin && createAccount && resetpassword && contactus ? <Link to="/login-create-account/resetpassword"><button className="welcomeButton" id={styles.third} onClick={changePage}>Reset Password</button></Link>: null}
    {signin && createAccount && resetpassword && contactus ? <Link to="/login-create-account/contact-us"><button className="welcomeButton" id={styles.fourth} onClick={changePage}>Contact Us</button></Link>: null}
  </div>
);
}

AccountSignIn.propTypes = {};

AccountSignIn.defaultProps = {};

export default AccountSignIn;
