import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ Component }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const token = localStorage.getItem('token');
    // Check if the token is valid
    const isValidToken = typeof token === 'string' && token.length > 0;

    return isValidToken ? <Component /> : <Navigate to="/auth" />;

};

export default PrivateRoute;