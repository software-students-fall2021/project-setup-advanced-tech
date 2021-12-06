import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant-profile from './Restaurant-profile';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Restaurant-profile />, div);
  ReactDOM.unmountComponentAtNode(div);
});