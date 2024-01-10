import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import courseReducer from './courses/courseSlice'
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;