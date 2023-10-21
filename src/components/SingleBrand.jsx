import {useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import { ProductsProvider } from "../Provider/ProductsProvider";
// import Swal from "sweetalert2";

const SingleBrand = ({ product }) => {
  const { _id, name, image } = product;

  const [brandProducts, setBrandProducts] =useState({})
  // const allProducts = useContext(ProductsProvider)
  const navigate = useNavigate()




  const handleBrand =(name)=>{
    fetch(`https://technology-electronics-three.vercel.app/products/${name}`)
    .then(res => res.json())
    .then((data) => {
      setBrandProducts(data);
      navigate(`/products/${name}`);
    })



  }


  return (
    <div className=" w-30 md:w-44 h-44 shadow-2xl shadow-black" onClick={()=>handleBrand(name)}>
      <div
        key={_id}
        className="stats shadow flex justify-around progress-info  h-52 cursor-pointer"
      >
        <div className="stat">
          <div className=" w-30 h-30">
            <img src={image} alt="" />
          </div>
          <div className="stat-value text-primary text-center text-xl text-bottom">{name}</div>
        </div>
      </div>
    </div>
  );
};

SingleBrand.propTypes = {
  product: PropTypes.object,
}

export default SingleBrand;
