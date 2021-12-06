import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './Signin';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signin />, div);
  ReactDOM.unmountComponentAtNode(div);
});