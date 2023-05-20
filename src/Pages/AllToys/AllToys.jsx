import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";
import { authContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../CustomHook/useTitle";

const AllToys = () => {
  const { loading } = useContext(authContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  const [toys,setToys] = useState([])
  const [text,setText] = useState('')
 useTitle('All-toys')
  useEffect(() => {
    fetch("https://server-plum-rho.vercel.app/all-data")
      .then(res => res.json())
    .then(data => setToys(data))
  },[])


  const handleSearch = () => {
    const url = `https://server-plum-rho.vercel.app/searchName/${text}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data)
      });
  };

  return (
    <div className="overflow-x-auto my_container">
      <div className="flex justify-center mb-11">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className=" mr-5 input input-bordered border-[#7eac29] font-semibold  "
        />
        <button onClick={handleSearch} className="button">
          Search
        </button>
      </div>
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
          {toys.map((toy) => (
            <ToyTable key={toy._id} toy={toy}></ToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
