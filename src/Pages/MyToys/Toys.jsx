import React, { useContext, useEffect, useState } from 'react';
import { authContext } from "../../AuthProvider/AuthProvider";
import MyTable from './MyTable';
const Toys = () => {
    const { user, loading } = useContext(authContext);
    if (loading) {
      return  <progress className="progress w-56"></progress>;
    }
    const [mytoys, setMytoys] = useState([])
        console.log(user.email);
    useEffect(() => {
        fetch(`http://localhost:3000/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
            setMytoys(data)
        })
    }, [user])
    console.log(mytoys);

    return (
      <div className="my_container">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sub-Category</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="font-semibold text-gray-500">
                    {
                        mytoys.map(toy => <MyTable key={toy._id} toy={toy}></MyTable>)
          }
          </tbody>
        </table>
      </div>
    );
};

export default Toys;