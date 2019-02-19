import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import NavContainer from './nav/nav_container';
import ShowContainer from './seven_levels/show_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashPage from './splash_page/splash_page';
{/* <h1>7th Level from App</h1> */}

const App = () => {
  return (
    <div>

      <AuthRoute exact path="/" component={SplashPage} />
      <Route exact path="/home" render={() => <Redirect to="/login" />} />
      <ProtectedRoute exact path="/home/:seventhLevelId" component={ShowContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>

  );
};

{/* <ProtectedRoute exact path="/home" component={HomeContainer} /> */}

export default App;
