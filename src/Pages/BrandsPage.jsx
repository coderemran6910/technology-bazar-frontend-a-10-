// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleBrand from "../components/SingleBrand";


const BrandsPage = () => {
  const products = useLoaderData();
  
    

  return (
   <>
   <div>
   <div className="my-20 ">
   <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-5">Brands</h2>
   <p className="text-center text-lg md:text-xl  md:max-w-7xl mx-auto"> Here you can find all the brands we have in our store  </p>
   </div>
   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-7xl mx-auto  h-auto  place-items-center pb-20">
      {
        products.map(product => <SingleBrand key={product._id} product={product} ></SingleBrand>)
      }
   </div>
   </div>
   </>
  );
};

export default BrandsPage;
