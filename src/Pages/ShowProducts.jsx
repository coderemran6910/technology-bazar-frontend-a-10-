import { useLoaderData } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";

const ShowProducts = () => {
    const products = useLoaderData()
    console.log(products);
  return (
    <>
    <h2 className="text-3xl md:text-4xl font-extrabold text-center my-20  mb-20"> Total Product : {products.length}</h2>
    <div className="max-w-7xl mx-auto">
      
        {
            products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
        }
    </div>
    </>
  );
};

export default ShowProducts;
