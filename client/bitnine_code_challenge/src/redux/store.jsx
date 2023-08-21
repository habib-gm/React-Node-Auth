// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import registerReducer from './registrationSlice';
import forgotPasswordReducer from './forgotPasswordSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    forgotPassword: forgotPasswordReducer,
    registration: registerReducer,
    // Other reducers
  },
});

export default store;
