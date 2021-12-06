import React from 'react';
import ReactDOM from 'react-dom';
import UserProfilePage from './UserProfilePage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserProfilePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});