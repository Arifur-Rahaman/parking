import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { authContext } from '../../context/authContext';
const PrivateOutlet = () => {
    const location = useLocation();
    const {authState} = useContext(authContext)
    
    return authState.user? <Outlet/> : <Navigate to="/login" state={{from: location}}/>
};

export default PrivateOutlet;