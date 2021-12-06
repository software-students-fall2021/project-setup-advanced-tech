import React from 'react';
import ReactDOM from 'react-dom';
import Createaccount from './Createaccount';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Createaccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});