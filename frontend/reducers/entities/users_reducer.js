import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';


const UsersReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);
  let userVariable = action.currentUser || action.user;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[userVariable.id] = userVariable;
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;
