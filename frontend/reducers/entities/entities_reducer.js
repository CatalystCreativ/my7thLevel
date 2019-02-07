import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import levelReducer from './level_reducer';
import levelsReducer from './levels_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  seventhLevel: levelReducer,
  seventhLevels: levelsReducer
});

export default entitiesReducer;
