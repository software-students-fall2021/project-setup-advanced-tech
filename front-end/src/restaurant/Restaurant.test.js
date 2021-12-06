import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Restaurant />, div);
  ReactDOM.unmountComponentAtNode(div);
});