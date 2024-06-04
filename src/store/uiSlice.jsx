import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSidebarOpen: true,
    selectedLink: 'dashboard',
    openSetting: false,
    deleteModal: false,
    detailModal: false,

    productUpdateModal: false,
    productDetailModal: false,
    productDeleteModal: false,
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
    },
});

export const { selectLink, setIsSidebarOpen, setOpenSetting, setDeleteModal, setDetailModal, setUpdateProductModal, setProductDetailModal, setProductDeleteModal } = uiSlice.actions;

export default uiSlice.reducer;
