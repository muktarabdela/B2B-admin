import { createSlice } from '@reduxjs/toolkit';

import { allProducts } from "../api/adminProduct"
import { useEffect } from 'react';


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
    productsData: null,
};

// useEffect(() => {
//     const fetchSupplierData = async () => {
//         try {
//             const response = await allProducts(adminData);
//             console.log(response)
//             // how i can store response.data in this state productsData: null,
//             setProductsData(response.data);
//             return response;
//         } catch (error) {
//             console.error('Error logging in:', error);
//             throw error;
//         }
//     };
//     fetchSupplierData();
// }, []);

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsData: (state, action) => {
            state.productsData = action.payload;
        },
        setProductData: (state, action) => {
            state.productData = action.payload;
        }
    },
});

export const { setProductsData, setProductData } = ProductSlice.actions;

export default ProductSlice.reducer;
