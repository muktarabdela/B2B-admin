import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import AuthSlice from './AuthSlice';
import ProductSlice from './ProductSlice';
const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: AuthSlice,
    product: ProductSlice
  },
});

export default store;
