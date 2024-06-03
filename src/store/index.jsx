import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import AuthSlice from './AuthSlice';
const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: AuthSlice
  },
});

export default store;
