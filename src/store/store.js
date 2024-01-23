import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import courseReducer from './courses/courseSlice'
import enrollmentReducer from './enrollment/enrollmentSlice';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    enrollment: enrollmentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(thunk),
  
});

export default store;