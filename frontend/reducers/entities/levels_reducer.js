import { RECEIVE_SEVENTH_LEVELS } from '../../actions/sidebar_actions';
import merge from 'lodash/merge';

const levelsReducer = (state = {}, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_SEVENTH_LEVELS:
      return merge({}, state, action.seventhLevels );
    default:
      return state;
  }
};

export default levelsReducer;
