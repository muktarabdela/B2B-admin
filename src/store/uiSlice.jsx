import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSidebarOpen: true,
    selectedLink: 'dashboard',
    openSetting: false,
    productModal: false,
    deleteModal: false,
    detailModal: false,
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
        setProductModal: (state, action) => {
            state.productModal = action.payload;
        },
        setDeleteModal: (state, action) => {
            state.deleteModal = action.payload;
        },
        setDetailModal: (state, action) => {
            state.detailModal = action.payload;
        },
    },
});

export const { toggleSidebar, closeSidebar, openSidebar, selectLink, setIsSidebarOpen, setOpenSetting, setProductModal, setDeleteModal, setDetailModal } = uiSlice.actions;

export default uiSlice.reducer;
