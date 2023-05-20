import React, { useContext, useEffect, useState } from 'react';
import { authContext } from "../../AuthProvider/AuthProvider";
import MyTable from './MyTable';
import Swal from "sweetalert2";
import useTitle from '../../CustomHook/useTitle';
const Toys = () => {
    const { user, loading } = useContext(authContext);
    if (loading) {
      return  <progress className="progress w-56"></progress>;
    }
    const [mytoys, setMytoys] = useState([])
     useTitle('My-Toys')  
    useEffect(() => {
        fetch(`https://server-plum-rho.vercel.app/my-toys/${user?.email}`)
          .then((res) => res.json())
          .then((data) => {
            setMytoys(data);
          });
    }, [user])
  
   const handleDelete = (id) => {
     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     }).then((result) => {
       if (result.isConfirmed) {
         fetch(`http://localhost:3000/my-toys/${id}`, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.deletedCount > 0) {
               Swal.fire("Deleted!", "Your file has been deleted.", "success");
               
               const remaining = mytoys.filter(toy => toy._id !== id)
               setMytoys(remaining)
             }
           });
       }
     });
   };

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
            {mytoys.map((toy) => (
              <MyTable
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyTable>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Toys;