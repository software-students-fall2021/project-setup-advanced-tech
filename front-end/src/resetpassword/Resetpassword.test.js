import React from 'react';
import ReactDOM from 'react-dom';
import Resetpassword from './Resetpassword';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Resetpassword />, div);
  ReactDOM.unmountComponentAtNode(div);
});