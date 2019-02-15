import {
  RECEIVE_CURRENT_USER,
  LOGOUT_USER
} from '../actions/session_actions';


const _nullUser = {
  currentUser: null
};

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      let newestSeventhLevelId = currentUser.recent_seventh_level_id
      return Object.assign({}, {
        currentUserId: currentUser.id, 
        newestSeventhLevelId
      });
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
};

export default SessionReducer;
