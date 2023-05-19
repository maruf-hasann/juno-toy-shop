import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation();
    if (loading) {
        <progress className="progress w-56"></progress>;
    }
    if (user) {
        return children;
    }
    


    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default Private;