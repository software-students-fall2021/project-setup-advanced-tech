import React from 'react';
import ReactDOM from 'react-dom';
import Contactus from './Contactus';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contactus />, div);
  ReactDOM.unmountComponentAtNode(div);
});