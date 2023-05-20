import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const singleProduct = useLoaderData()
    const {
      name,
      photo,
      seller,
      category,
      price,
      rating,
      quantity,
      description,
      email,
    } = singleProduct[0];
    return (
      <div className="my_container">
        <h1 className=" mb-10 text-5xl text-center font-bold text-[#181d4e] ">
          Product Info
        </h1>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="Movie" className="h-40" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{name}</h2>
            <div className="flex font-semibold">
              <p>Price: {price} $</p>
              <p>Rating: {rating} </p>
            </div>
            <div className="flex font-semibold">
              <p>Seller Name: {seller} </p>
              <p>Seller Email: {email} </p>
            </div>
            <p className="text-2xl font-semibold mb-3">Quantity: {quantity} </p>
            <div className="w-96 font-semibold text-gray-500">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ViewDetails;