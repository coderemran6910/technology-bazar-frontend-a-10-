import {useState } from "react";
// import { ProductsProvider } from "../Provider/ProductsProvider";
// import Swal from "sweetalert2";

const SingleBrand = ({ product }) => {
  const { _id, name, image } = product;

  const [brandProducts, setBrandProducts] =useState({})
  // const allProducts = useContext(ProductsProvider)
   




  const handleBrand =(name)=>{

    console.log(name);

    fetch(`http://localhost:5000/products/${name}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setBrandProducts(data);
    })


  }


  return (
    <div onClick={()=>handleBrand(name)}>
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

export default SingleBrand;
