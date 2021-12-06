import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantProfilePage from './RestaurantProfilePage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestaurantProfilePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});