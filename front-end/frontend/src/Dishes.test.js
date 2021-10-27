import React from 'react';
import ReactDOM from 'react-dom';
import Dishes from './Dishes'
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
it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dishes key="1" details={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});