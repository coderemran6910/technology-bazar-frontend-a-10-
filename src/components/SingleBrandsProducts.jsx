import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

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
    <div className="flex shadow-xl mb-10 h-52">
      <div className="w-full md:w-96 ">
        <div className="relative w-full h-full aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt="Album"
            className="absolute w-full h-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-10">
        <div className=" text-left  lg:text-left lg:ml-5 w-auto">
          <h2 className="card-title text-xl md:text-3xl ">{name}</h2>
          <p className=" text-sm pr-2">{shortDescription}</p>

          <div className=" items-center mt-5 hidden lg:block ">
            <button className="text-sm md:text-xl  btn btn-outline btn-info mr-5 ">
              Price: <span className="font-bold ">${price}</span>
            </button>

            <button className="btn btn-outline btn-primary ">
              type: <span>{type}</span>
            </button>
          </div>
        </div>
        <div className="flex-1 w-40">
          <div className="btn-group lg:btn-group-horizontal lg:btn-group-vertical mt-10">
            <Link to={`/update/${brand}/${_id}`}>
              <button className="btn btn-active w-30 md:w-40   "> Update </button>
            </Link>
            <button
              onClick={() => handleDetails(brand, _id)}
              className="btn btn-active w-30 md:w-40 "
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleBrandsProducts.propTypes = {
  product: PropTypes.object,
};

export default SingleBrandsProducts;
