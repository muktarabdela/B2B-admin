import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productReport } from '@/api/ProductReport';
import { salesReport } from '@/api/SalesReport';
import { userReport } from '@/api/UserReport';

// Define async thunks
export const fetchProductReport = createAsyncThunk('report/fetchProductReport', async () => {
    const response = await productReport();
    return response.data.data;
});

export const fetchSalesReport = createAsyncThunk('report/fetchSalesReport', async () => {
    const response = await salesReport();
    return response.data.data;
});

export const fetchUsersReport = createAsyncThunk('report/fetchUsersReport', async () => {
    const response = await userReport();
    return response.data.data;
});

const reportSlice = createSlice({
    name: 'report',
    initialState: {
        productReport: null,
        salesReport: null,
        usersReport: null,
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
            });
    },
});

export default reportSlice.reducer;
