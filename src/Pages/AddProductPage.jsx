// import { useState } from 'react';

import { useState } from "react";
import Swal from "sweetalert2";
import BrandsPage from "./BrandsPage";

const AddProductPage = () => {
  const [selectedRatings, setSelectedRating] = useState(''); 

  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDesciption.value;
    const image = form.image.value;

    // Get the selected rating value
    const ratingRadios = form.querySelectorAll('input[name="rating-3"]');
    let selectedRating = null;

    ratingRadios.forEach((radio) => {
      if (radio.checked) {
        selectedRating = radio.value;
      }
      
    });

    const newProduct = {name, brand, type, price, selectedRating, shortDescription, image};
 


    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if(data.acknowledged){
        Swal.fire(
          'Thanks!',
          'You You added a products!',
          'success'
        )
        form.reset();
      }
    })
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Product</h2>
      <form onSubmit={handleAddProduct}>
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>


          
        </div>

        <div className="md:flex mb-8 gap-3  ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Choose a Type</span>
            </label>
            <select name="type" className="select select-bordered w-full ">
              <option value="Mobile">Mobile</option>
              <option value="Computer">Computer</option>
              <option value="Laptop">Laptop</option>
              <option value="Headphone">Headphone</option>
              <option value="Camra">Camra</option>
              <option value="Non Type ">Quick Sort</option>
            </select>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Select a Brand</span>
            </label>
            <select name="brand" className="select select-bordered w-full">
              <option value="Apple">Apple</option>
              <option value="Apple">Oppo</option>
              <option value="Samsung">Samsung</option>
              <option value="Lava">Dell</option>
              <option value="intel">intel</option>
              <option value="Asus">Acer</option>
              <option value="Hp">Hp</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Sony">Sony</option>
              <option value="non brand">Quick Sort</option>
            </select>
          </div>
        
        </div>

        <div className="flex flex-col justify-center items-center mb-8 text-center">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text w-full text-center">Short Description</span>
            </label>
            <textarea
              placeholder="Short Description"
              className="input input-bordered w-full"
              name="shortDescription"
            ></textarea>
          </div>

          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text w-full text-center">Image URL</span>
            </label>
            <input
              placeholder="Image URL"
              className="input input-bordered w-full"
              name="image"
            ></input>
          </div>


          <div className="form-control md-w-1/2 ml-4">
            <label className="label">
              <span className="label-text w-full text-center">Rating</span>
            </label>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                defaultChecked
                onChange={(e) => setSelectedRating(e.target.value)}
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Add product"
          className="btn bg-slate-300 btn-block"
        />
      </form>
    </div>
  );
};

export default AddProductPage;
