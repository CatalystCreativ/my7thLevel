import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './actions/session_actions';
import {configureStore} from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  
  let store = configureStore();
  
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to My 7th Level</h1>, root);
});