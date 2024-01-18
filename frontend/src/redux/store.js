// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer.js';
const store = configureStore({
  reducer: rootReducer, // We'll add reducers in later steps
});

export default store;
