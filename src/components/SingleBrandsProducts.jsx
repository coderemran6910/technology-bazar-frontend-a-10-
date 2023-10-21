import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SingleBrandsProducts = ({ product }) => {
  const { _id, name, brand, type, price, shortDescription, image } = product;
  const navigate = useNavigate();


  const handleDetails = (name, id) => {
    fetch(`http://localhost:5000/products/${brand}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate(`/products/${name}/${id}`);
      });
  };

  return (
    <div className="flex shadow-xl mb-10">
      <div className="w-96 h-96">
        <div className="relative w-full h-full aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt="Album"
            className="absolute w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-10">
        <div className="text-center lg:text-left lg:ml-5 w-auto">
          <h2 className="card-title text-4xl p-5">{name}</h2>
          <p className="p-5 text-xl">{shortDescription}</p>
          <h3>Price: {price}</h3>
          <p>
            type: <span>{type}</span>
          </p>
        </div>
        <div className="flex-1 w-40">
          <div className="btn-group btn-group-vertical ">
            <Link to={`/update/${brand}/${_id}`}><button className="btn btn-active w-40 mb-5"> Update </button></Link>
            <button
              onClick={() => handleDetails(brand, _id)}
              className="btn btn-active w-40"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBrandsProducts;
