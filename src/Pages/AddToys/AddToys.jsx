import React from "react";
import Swal from "sweetalert2";

const AddToys = () => {
 
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const seller = form.seller.value
        const category = form.category.value
        const price = form.price.value
        const rating = form.rating.value
        const quantity = form.quantity.value;
        const description = form.description.value;

        const newProduct = {
            name,photo,seller,category,price,rating,quantity,description
        }
        console.log(newProduct);
        fetch("https://server-plum-rho.vercel.app/data", {
            method: 'POST',  
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                   Swal.fire("Good job!", "You clicked the button!", "success");
                }
                form.reset()
            });

    }

  return (
    <div className="my_container">
      <h1 className=" mb-10 text-5xl text-center font-bold text-[#181d4e] ">
        Add Product
      </h1>
      <div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className=" flex">
            <input
              placeholder="Product name"
              type="text"
              className="input input-bordered font-semibold "
              name="name"
            />
            <input
              placeholder="Product Image"
              type="url"
              className="input input-bordered font-semibold  ms-4 "
              name="photo"
            />  <input
              placeholder="Seller Email"
              type="url"
              className="input input-bordered font-semibold  ms-4 "
              name="email"
            />
          </div>
          <div>
            <input
              placeholder="Seller Name"
              type="text"
              className="input input-bordered font-semibold "
              name="seller"
            />
            <input
              placeholder="Sub-category"
              type="text"
              className="input input-bordered font-semibold ms-5 "
              name="category"
            />
          </div>
          <div>
            <input
              placeholder="Price"
              type="text"
              className="input input-bordered font-semibold "
              name="price"
            />
            <input
              placeholder="Rating"
              type="text"
              className="input input-bordered font-semibold ms-5 "
              name="rating"
            />
          </div>
          <input
            placeholder="Quantity"
            type="text"
            className="input input-bordered font-semibold me-5"
            name="quantity"
          />
          <textarea
            name="description"
            className="input input-bordered font-semibold"
          ></textarea>

          <div>
            <input type="submit" value="Add Product" className="button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
