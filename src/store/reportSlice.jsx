import { productReport } from '@/api/ProductReport';
import { salesReport } from '@/api/SalesReport';
import { userReport } from '@/api/UserReport';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async thunk for fetching products report
export const fetchProductReport = createAsyncThunk('report/fetchProductReport', async () => {
    const response = await productReport();
    // console.log("products from report slice", response.data.data);
    return response.data.data;
});
// define async thunk for fetching sales report
export const fetchSalesReport = createAsyncThunk('report/fetchSalesReport', async () => {
    const response = await salesReport();
    // console.log("sales from report slice", response.data.data);
    return response.data.data;
})
// Define async thunk for fetching users report

export const fetchUsersReport = createAsyncThunk('report/fetchUsersReport', async () => {
    const response = await userReport();
    // console.log("users from report slice", response.data.data);
    return response.data.data;
})


const reportSlice = createSlice({
    name: 'report',
    initialState: {
        productReport: [],
        salesReport: [],
        usersReport: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductReport.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductReport.fulfilled, (state, action) => {
                state.productReport = action.payload;
                state.loading = false;
            })
            .addCase(fetchProductReport.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchSalesReport.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSalesReport.fulfilled, (state, action) => {
                state.salesReport = action.payload;
                state.loading = false;
            })
            .addCase(fetchSalesReport.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUsersReport.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsersReport.fulfilled, (state, action) => {
                state.usersReport = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsersReport.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    },
});

export default reportSlice.reducer;