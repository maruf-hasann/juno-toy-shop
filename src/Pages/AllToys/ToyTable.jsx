import React from "react";
import { Link } from "react-router-dom";

const ToyTable = ({ toy }) => {
  const {
    name,
    photo,
    seller,
    category,
    price,
    rating,
    quantity,
    description,
    _id
  } = toy;

  return (
    <>
      <tr>
        <th></th>
        <td>{name}</td>
        <td>{price} $</td>
        <td>{quantity}</td>
        <td>{category}</td>
        <td>{seller}</td>
        <td>
          <Link to={`/view-details/${_id}`}>
            <button className="bg-[#7eac29] font-semibold py-3 px-5 text-white rounded-2xl">
              View Details
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default ToyTable;
