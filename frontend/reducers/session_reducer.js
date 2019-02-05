import {
  RECEIVE_CURRENT_USER,
  LOGOUT_USER
} from '../actions/session_actions';


const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.id;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default SessionReducer;