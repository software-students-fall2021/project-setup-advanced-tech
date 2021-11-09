import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeHeader from './WelcomeHeader';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});