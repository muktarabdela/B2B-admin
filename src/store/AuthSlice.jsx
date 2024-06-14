import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const login = createAsyncThunk('auth/login', async (adminData, { rejectWithValue }) => {
    try {
        const response = await loginAdmin(adminData);
        console.log(response)
        const token = response.token;
        localStorage.setItem('token', token);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const initialState = {
    isAuthenticated: true,
    token: null,
    user: null,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem('token');
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            window.location.reload();
        },
        checkTokenExpiration: (state) => {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;
                if (decodedToken.exp < currentTime) {
                    localStorage.removeItem('token');
                    state.isAuthenticated = false;
                    state.user = null;
                    state.token = null;
                    window.location.reload();
                }
            }
        },


    },
});

export const { setIsAuthenticated, setToken, setUser, logout, checkAuth, checkTokenExpiration } = AuthSlice.actions;

export default AuthSlice.reducer;
