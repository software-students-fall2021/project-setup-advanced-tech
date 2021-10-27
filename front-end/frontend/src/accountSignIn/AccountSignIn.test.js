import React from 'react';
import ReactDOM from 'react-dom';
import AccountSignIn from './AccountSignIn';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AccountSignIn />, div);
  ReactDOM.unmountComponentAtNode(div);
});