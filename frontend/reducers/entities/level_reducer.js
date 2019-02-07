import { RECEIVE_SEVENTH_LEVEL } from '../../actions/seventh_level_actions';

const levelReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SEVENTH_LEVEL:
      newState[action.seventhLevel.id] = action.seventhLevel;
      return newState;
    default:
      return state;
  }
};

export default levelReducer;
