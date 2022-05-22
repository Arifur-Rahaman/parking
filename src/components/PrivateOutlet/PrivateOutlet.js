import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
const PrivateOutlet = () => {
    const location = useLocation();
    const idToken = localStorage.getItem('idToken')
    return idToken? <Outlet/> : <Navigate to="/login" replace state={{from: location}}/>
};

export default PrivateOutlet;