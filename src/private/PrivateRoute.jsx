import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthData } from '../context/Context';



const PrivateRouter = ({ children }) => {
    const { loading, user } = useAuthData()
    const location = useLocation();
    if (loading) {
        return "......"
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRouter;