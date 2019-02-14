import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const CLEAR_ALL_ERRORS = 'CLEAR_ALL_ERRORS';


export const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
    });
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};

const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const clearAllErrors = () => {
  return {
    type: CLEAR_ALL_ERRORS
  };
};


// THUNK
export const login = user => dispatch => {
  return (
    SessionAPIUtil.login(user).then(user => (
      dispatch(receiveCurrentUser(user))
    ), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
    ))
  );
};
// export const login = (user) => async dispatch => {
//   debugger
//   let response;
//   try {
//     response = await SessionAPIUtil.login(user);
//     dispatch(receiveCurrentUser(user));
//   } catch(error) {
//     response = error;
//     dispatch(receiveSessionErrors(error));
//   }
//   return response;
// }


export const logout = () => dispatch => {
  debugger
  return SessionAPIUtil.logout()
    .then(() => dispatch(logoutUser()))
    .fail(err => dispatch(receiveSessionErrors(err.responseJSON)));
};



export const signup = (user) => {
  return dispatch => {
    return SessionAPIUtil.signup(user)
      .then(user => dispatch(receiveCurrentUser(user)))
      .fail(err => { return dispatch(receiveUserErrors(err.responseJSON)) });
  }
};
