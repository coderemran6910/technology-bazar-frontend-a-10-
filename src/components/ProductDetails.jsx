import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
 import {toast} from "react-toastify";
const ProductDetails = () => {
  const product = useLoaderData();


const handleAddToCard = (id) => {
  console.log(id);

  fetch("http://localhost:5000/cards", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product[0]),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toast(data.message);
      if(data.acknowledged){
        Swal.fire(
          'Thanks!',
          ' You added a card!',
          'success',
        )
      }
     
    })
}



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
          <button onClick={()=>handleAddToCard(product[0]._id)} className="btn btn-primary">Add to Card </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
