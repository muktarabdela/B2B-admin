import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { allSuppliers } from '../api/AdminSupplier';

// Define async thunk for fetching suppliers
export const fetchSuppliers = createAsyncThunk('supplier/fetchSuppliers', async () => {
    const response = await allSuppliers();
    // console.log("from supplier slice", response.data.data);
    return response.data.data;
});

const supplierSlice = createSlice({
    name: 'supplier',
    initialState: {
        suppliers: [],
        loading: false,
        error: null,
    },
    reducers: {
        setSuppliers: (state, action) => {
            state.suppliers = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuppliers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSuppliers.fulfilled, (state, action) => {
                state.suppliers = action.payload;
                state.loading = false;
            })
            .addCase(fetchSuppliers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setSuppliers } = supplierSlice.actions;
export default supplierSlice.reducer;
