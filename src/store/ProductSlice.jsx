import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { allProducts } from "../api/adminProduct"
import { useEffect } from 'react';

export const fetchProducts = createAsyncThunk('supplier/fetchSuppliers', async () => {
    const response = await allProducts();
    console.log("from product slice", response.data.data);
    return response.data.data;
});


const initialState = {
    productData: {
        category: "",
        brand_name: "",
        description: "",
        manufacturer: "",
        country_of_origin: "",
        application: "",
        price: "",
        stock: "",
        images: [],
        specification: []
    },
    products: [],
    loading: false,
    error: null,
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setProductData: (state, action) => {
            state.productData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { setProductData, setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
