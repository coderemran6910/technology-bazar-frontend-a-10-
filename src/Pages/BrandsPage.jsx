// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleBrand from "../components/SingleBrand";


const BrandsPage = () => {
  const products = useLoaderData();
  
    

  return (
   <>
   <div className="py-20">
   <h2 className="text-3xl font-extrabold text-center  my-20">Brands</h2>
   <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-10 max-w-7xl mx-auto  place-items-end">
      {
        products.map(product => <SingleBrand key={product._id} product={product} ></SingleBrand>)
      }
   </div>
   </div>
   </>
  );
};

export default BrandsPage;
