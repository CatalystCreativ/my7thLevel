import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import HomeContainer from './home/home_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashPage from './splash_page/splash_page';
{/* <h1>7th Level from App</h1> */}

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer />
      </header>
      <Route exact path="/" component={SplashPage} />
      <ProtectedRoute path="/home/:seventhLevelId" component={HomeContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>

  );
};


export default App;
