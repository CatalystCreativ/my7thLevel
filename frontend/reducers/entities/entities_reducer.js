import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import levelsReducer from './levels_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  seventhLevel: levelsReducer
});

export default entitiesReducer;
