import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/userSlice';
import courseReducer from './courses/courseSlice'
import enrrollmentReducer from './enrollment/enrollmentSlice';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    enrrollment: enrrollmentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(thunk),
  
});

export default store;