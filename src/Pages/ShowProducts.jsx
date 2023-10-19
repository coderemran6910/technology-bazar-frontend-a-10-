import { useLoaderData } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

const ShowProducts = () => {
    const products = useLoaderData()
    console.log(products);
  return (
    <>
    <h2 className="text-3xl font-extrabold text-center  mb-20"> Products : {products.length}</h2>
    <div className="max-w-7xl mx-auto">
      
        {
            products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
        }
    </div>
    </>
  );
};

export default ShowProducts;
