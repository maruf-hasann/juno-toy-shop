import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';

const MyToys = () => {
    const [toys, setToys] = useState([]);
    const { user, loading } = useContext(authContext);
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
   
    
    
    return (
        <div>
            <h1>Toy</h1>
        </div>
    );
};

export default MyToys;