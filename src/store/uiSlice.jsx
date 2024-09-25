import { createSlice } from '@reduxjs/toolkit';
const loadState = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
};

const saveState = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state));
};

const removeState = (key) => {
    localStorage.removeItem(key);
};
const initialState = {
    isSidebarOpen: true,
    selectedLink: 'dashboard',
    openSetting: false,
    deleteModal: false,
    detailModal: false,

    isOpenCategory: false,
    category: "",
    isAuthenticated: loadState('isAuthenticated', false),


    productUpdateModal: false,
    productDetailModal: false,
    productDeleteModal: false,

    supplierUpdateStatus: false,
    orderStatus: false,

    categoryId: null,

    notification: null,
    isDrawerOpenNotification: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
            saveState('isAuthenticated', state.isAuthenticated);
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
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        setNotification: (state, action) => {
            state.notification = action.payload;
        },
        setDrawerOpenNotification: (state, action) => {
            state.isDrawerOpenNotification = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.role = null;
            removeState('isAuthenticated');
            localStorage.removeItem('token');
            window.location.href = '/';
        },
        setOrderStatus: (state, action) => {
            state.orderStatus = action.payload;
        },
    },
});

export const { selectLink, setIsSidebarOpen, setOpenSetting, setDeleteModal, setIsOpenCategory, setCategory, setDetailModal, setUpdateProductModal, setProductDetailModal, setProductDeleteModal, setSupplierUpdateStatus, setOrderStatus, setIsAuthenticated, logout, setCategoryId, setNotification, setDrawerOpenNotification } = uiSlice.actions;

export default uiSlice.reducer;
