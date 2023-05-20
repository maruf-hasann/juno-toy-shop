import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../CustomHook/useTitle";
const Update = () => {
  const product = useLoaderData();
  useTitle('Update')

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
    _id,
  } = product[0];

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateProduct = {
      price,
      quantity,
      description,
    };
       fetch(`https://server-plum-rho.vercel.app/update/${_id}`, {
         method: "PATCH",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(updateProduct),
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.modifiedCount > 0) {
             Swal.fire("Updated Product Done!", "", "success");
           }
         });
      
  };

  return (
    <div className="my_container">
      <h1>Product Name : {name}</h1>

      <form className="space-y-5" onSubmit={handleUpdate}>
        <div>
          <input
            placeholder="Price"
            type="text"
            className="input input-bordered font-semibold "
            name="price"
            required
          />
        </div>
        <input
          placeholder="Quantity"
          type="text"
          className="input input-bordered font-semibold me-5"
          name="quantity"
          required
        />
        <textarea
          name="description"
          className="input input-bordered font-semibold"
          required
        ></textarea>

        <div>
          <input type="submit" value="Update Product" className="button" />
        </div>
      </form>
    </div>
  );
};

export default Update;
