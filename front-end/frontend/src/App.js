
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dishes from './Dishes';

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
function App() {
  return (
    <div className="homePage">
      <Dishes key="1" details={data} />
    </div>
  );
}

export default App;
