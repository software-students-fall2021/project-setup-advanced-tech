
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import WelcomeHeader from './welcomeHeader/WelcomeHeader';
import LoadingPage from './loadingPage/LoadingPage';
import AccountSignIn from './accountSignIn/AccountSignIn';

function App() {
  const [welcomeHeaderDisplay, toggleWelcomeHeaderDisplay] = useState(true);
  const [loadingPageDisplay, toggleLoadingPageDisplay] = useState(false);
  const [accountSignInDisplay, toggleAccountSignInDisplay] = useState(false);
  function dontDisplayWelcomeHeader(){
    toggleWelcomeHeaderDisplay(false);
    toggleLoadingPageDisplay(true);
  }
  function dontDisplayLoadingPageDisplay(){
    toggleLoadingPageDisplay(false);
    toggleAccountSignInDisplay(true);
  }
  return (
    <div className="App">
      {welcomeHeaderDisplay ? <WelcomeHeader/>: null};
      {welcomeHeaderDisplay ? <button className="buttonWelcome" onClick={dontDisplayWelcomeHeader}>Click me to explore.</button>: null}
      {loadingPageDisplay ? <LoadingPage/>: null};
      {accountSignInDisplay ? <AccountSignIn/>: null};
      {loadingPageDisplay ? <button className="buttonWelcome" onClick={dontDisplayLoadingPageDisplay}>Account Sign In/Login</button>: null}
    </div>
  );
}

export default App;