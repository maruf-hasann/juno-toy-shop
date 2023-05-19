import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div className="overflow-x-auto my_container">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Toy Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub-Category</th>
            <th>Seller</th>
            <th>Details</th>
          </tr>
        </thead>
              <tbody className="font-semibold text-gray-500">
                  {
                      toys.map(toy => <ToyTable key={toy._id} toy={toy}></ToyTable>)
                }  
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
