import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleAddToCard = () => {
    fetch("https://technology-electronics-three.vercel.app/cards", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: product[0].name,
        brand: product[0].brand,
        type: product[0].type,
        price: product[0].price,
        shortDescription: product[0].shortDescription,
        image: product[0].image,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Thanks!", " You added a card!", "success");
        }
      });
  };

  return (
    <>
    <h2 className=" text-3xl md:text-4xl text-center my-10 font-bold "> About <span className="text-primary"> {product[0].name}</span></h2>
    <div className=" bg-base-100 shadow-xl my-20">
      <figure className="  w-full h-[50vh]">
        <img src={product[0].image} alt="Movie" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary"> {product[0].name} </h2>
        <p>{product[0].shortDescription}</p>


        <div className=" items-center mt-5 hidden lg:block ">
          <button className="text-sm md:text-xl  btn btn-outline btn-info mr-5 ">
            Price: <span className="font-bold ">${product[0].price}</span>
          </button>

          <button className="btn btn-outline btn-primary ">
            type: <span>{product[0].type}</span>
          </button>
        </div>

        <div className="card-actions justify-end">
         <PrivateRoute> 
          <button
            onClick={() => handleAddToCard(product[0]._id)}
            className="btn btn-primary"
          >
            Add to Cart{" "}
          </button>
          </PrivateRoute>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
