import {
  RECEIVE_CURRENT_USER,
  LOGOUT_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';


const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = {}, action) => {
  debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return Object.assign({}, state, {'currentUser': currentUser} );
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default SessionReducer;
