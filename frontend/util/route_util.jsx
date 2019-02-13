import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => {
  debugger
  return (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/home" />
      )
    )}/>
  )
}

const Protected = ({component: Component, path, loggedIn, exact}, props) => {
  return <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
}

const mapStateToProps = state => {
<<<<<<< HEAD
  debugger
  return {loggedIn: Boolean(state.session.currentUser)};
=======
  return {loggedIn: Boolean(state.session)};
>>>>>>> 81635d2c1ff5bde1a573ded64e49fafa09d27c6d
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
