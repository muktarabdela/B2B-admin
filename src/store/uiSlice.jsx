import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSidebarOpen: true,
    selectedLink: 'dashboard',
    openSetting: false,
    deleteModal: false,
    detailModal: false,

    isOpenCategory: false,
    category: "",


    productUpdateModal: false,
    productDetailModal: false,
    productDeleteModal: false,

    supplierUpdateStatus: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
        openSidebar: (state) => {
            state.isSidebarOpen = true;
        },
        setIsOpenCategory: (state, action) => {
            state.isOpenCategory = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        selectLink: (state, action) => {
            state.selectedLink = action.payload;
        },
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
        setOpenSetting: (state, action) => {
            state.openSetting = action.payload;
        },
        setDeleteModal: (state, action) => {
            state.deleteModal = action.payload;
        },
        setDetailModal: (state, action) => {
            state.detailModal = action.payload;
        },
        setUpdateProductModal: (state, action) => {
            state.productUpdateModal = action.payload;
        },
        setProductDetailModal: (state, action) => {
            state.productDetailModal = action.payload;
        },
        setProductDeleteModal: (state, action) => {
            state.productDeleteModal = action.payload;
        },
        setSupplierUpdateStatus: (state, action) => {
            state.supplierUpdateStatus = action.payload;
        },
    },
});

export const { selectLink, setIsSidebarOpen, setOpenSetting, setDeleteModal, setIsOpenCategory, setCategory, setDetailModal, setUpdateProductModal, setProductDetailModal, setProductDeleteModal, setSupplierUpdateStatus } = uiSlice.actions;

export default uiSlice.reducer;
