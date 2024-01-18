import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slice/user.js'
import projectReducer from './slice/project.js'

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
});

export default rootReducer;
