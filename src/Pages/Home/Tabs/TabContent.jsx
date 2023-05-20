import React from 'react';

const TabContent = ({ product }) => {
    const {photo,name,price,rating} = product || {}
    return (
      <div className="card w-96 bg-base-100 shadow-xl" >
        <figure>
          <img src={photo} alt="Shoes" className='h-40' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between font-semibold mb-5">
            <p> Price : {price} $</p>
            <p> Rating: {rating} </p>
          </div>
          <div className="card-actions justify-end">
            <button className="button">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default TabContent;