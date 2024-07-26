import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import AuthSlice from './AuthSlice';
import ProductSlice from './ProductSlice';
import supplierSlice from './supplierSlice';
import BusinessSlice from './BusinessSlice';
import reportSlice from './reportSlice';
const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: AuthSlice,
    product: ProductSlice,
    supplier: supplierSlice,
    business: BusinessSlice,
    report: reportSlice
  },
});

export default store;
