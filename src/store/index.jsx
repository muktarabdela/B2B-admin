import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import AuthSlice from './AuthSlice';
import ProductSlice from './ProductSlice';
import supplierSlice from './supplierSlice';
const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: AuthSlice,
    product: ProductSlice,
    supplier: supplierSlice,
  },
});

export default store;
