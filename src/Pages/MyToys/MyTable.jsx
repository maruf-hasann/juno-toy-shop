import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
const MyTable = ({ toy, handleDelete }) => {
  const {
    _id,
    name,
    photo,
    seller,
    category,
    price,
    rating,
    quantity,
    description,
  } = toy;

  return (
    <>
      <tr>
        <th></th>
        <td>{name}</td>
        <td>{price} $</td>
        <td>{quantity}</td>
        <td>{category}</td>
        <td>
          <Link to={`/update/${_id}`}>
            <button className="bg-[#7eac29] font-semibold py-3 px-5 text-white rounded-2xl">
              Update
            </button>
          </Link>
        </td>
        <td>
          <Link>
            <button
              className="btn btn-circle btn-outline btn-error"
              onClick={() => handleDelete(_id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MyTable;