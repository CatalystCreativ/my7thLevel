import { RECEIVE_SEVENTH_LEVELS } from '../../actions/sidebar_actions';
import { RECEIVE_SEVENTH_LEVEL } from '../../actions/seventh_level_actions';

const levelsReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SEVENTH_LEVEL:
      newState[action.seventhLevel.id] = action.seventhLevel;
      return newState;
    case RECEIVE_SEVENTH_LEVELS:
      return Object.assign({}, state, action.seventhLevels );
    default:
      return state;
  }
};

export default levelsReducer;
