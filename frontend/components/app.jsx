import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import HomeContainer from './seven_levels/home_container';
import ShowContainer from './seven_levels/show_container';
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
      <ProtectedRoute exact path="/home" component={HomeContainer} />
<<<<<<< HEAD
      <ProtectedRoute exact path="/home/:seventhLevelId" component={ShowContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
=======
      <ProtectedRoute path="/home/:seventhLevelId" component={ShowContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
>>>>>>> 81635d2c1ff5bde1a573ded64e49fafa09d27c6d
    </div>

  );
};


export default App;
