import React from 'react';
import { Link } from 'react-router-dom';

const TabContent = ({ product }) => {
    const {photo,name,price,rating,_id} = product || {}
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" className="h-40" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between font-semibold mb-5">
            <p> Price : {price} $</p>
            <p> Rating: {rating} </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/view-details/${_id}`}>
              <button className="button">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default TabContent;