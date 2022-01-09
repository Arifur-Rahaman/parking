import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { authContext } from '../../App';

const PrivateOutlet = () => {
    const location = useLocation();
    const [singedInUser] = useContext(authContext)
    return singedInUser.email ? <Outlet/> : <Navigate to="/login" replace state={{from: location}}/>
};

export default PrivateOutlet;