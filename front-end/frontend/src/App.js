import logo from './logo.svg';
import './App.css';
import Search from "./Search"

function App() {
  return (
    <div className="homePage">
      <header className="welcomeHeader">
        <h1>Welcome to Weet.</h1>
        <h2><i>A place for all your dietary needs.</i></h2>
      </header>
      <div className="center-button">
        <button><a href="https://www.google.com/">Click to explore.</a></button>
      </div>
      <Search></Search>
    </div>
  );
}

export default App;
