import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  seventhLevel: levelsReducer
});

export default entitiesReducer;
