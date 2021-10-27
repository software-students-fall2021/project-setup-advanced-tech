import React from 'react';
import ReactDOM from 'react-dom';
import OrderPage from './OrderPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrderPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});