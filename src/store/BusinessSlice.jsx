import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { allBusiness } from '../api/AdminBusiness';

// Define async thunk for fetching Business
export const fetchBusiness = createAsyncThunk('business/fetchBusiness', async () => {
    const response = await allBusiness();
    console.log("from business slice", response.data.data);
    return response.data.data;
});

const BusinessSlice = createSlice({
    name: 'supplier',
    initialState: {
        Business: [],
        loading: false,
        error: null,
    },
    reducers: {
        setBusiness: (state, action) => {
            state.Business = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBusiness.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBusiness.fulfilled, (state, action) => {
                state.Business = action.payload;
                state.loading = false;
            })
            .addCase(fetchBusiness.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setBusiness } = BusinessSlice.actions;
export default BusinessSlice.reducer;
