import {
  RECEIVE_CURRENT_USER,
  LOGOUT_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';


const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      let newestSeventhLevelId = currentUser.newestSeventhLevelId;
      return Object.assign({}, state, {currentUser: currentUser.id, newestSeventhLevelId} );
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default SessionReducer;
