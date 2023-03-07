import { configureStore } from '@reduxjs/toolkit';
import { adminReducer } from './reducers/adminReducer';
import { courseReducer } from './reducers/courseReducer';
import { profileReducer, userReducer } from './reducers/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    admin: adminReducer,
  },
});

export default store;

export const server = 'https://coursify-backend.onrender.com/api/v1';
