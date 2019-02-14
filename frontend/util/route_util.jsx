import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, newestSeventhLevelId, exact}) => {
  debugger
  return (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/home/${newestSeventhLevelId}`} />
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
  return {loggedIn: Boolean(state.session.currentUser), newestSeventhLevelId: state.session.newestSeventhLevelId};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
