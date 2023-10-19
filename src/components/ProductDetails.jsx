import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img 
          src={product[0].image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {product[0].name} </h2>
        <p>{product[0].shortDescription}</p>
        <p>{product[0].price}</p>
        <p>{product[0].type}</p>





        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Card </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
