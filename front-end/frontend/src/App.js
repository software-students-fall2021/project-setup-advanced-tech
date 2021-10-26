
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import WelcomeHeader from './welcomeHeader/WelcomeHeader';
import LoadingPage from './loadingPage/LoadingPage';
import AccountSignIn from './accountSignIn/AccountSignIn';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <WelcomeHeader/>
    </div>
  );
}

export default App;