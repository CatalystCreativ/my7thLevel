import React from 'react'
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

{/* <h1>7th Level from App</h1> */}

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
      </header>
      
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
    </div>

  );
};


export default App;