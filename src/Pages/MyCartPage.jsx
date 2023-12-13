import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import { useState } from "react";
// import SingleCart from "../components/SingleCart";

const MyCartPage = () => {
    const carts = useLoaderData()

const [deletedCart, setDeletedCart] = useState(carts)
    const handleDelete =(id)=>{
        
        fetch(`https://technology-electronics-three.vercel.app/cards/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire(
                    'Thanks!',
                    ' You deleted a cart!',
                    'success',
                )

                const remaining = carts.filter(cart => cart.id !== id)
                setDeletedCart(remaining)
            }
        })
    }




    console.log(carts);
    return (
       <>
       <h2 className="text-3xl md:text-4xl font-extrabold py-10 text-center"> My All Carts </h2>
       <div className=" max-w-7xl mx-auto">
           {
               deletedCart.map(cart => {
                const {name, _id, price, shortDescription, image} = cart

                return (
                    <div key={_id} className="flex justify-between shadow-xl h-40  mb-10 border">
                    <figure className=" w-1/3">
                      <img
                        src={image}
                        alt="Album"
                        className="rounded-xl w-96 h-full object-cover"
                      />
                    </figure>
                    <div className="ml-2 w-3/4" >
                      <h2 className="card-title text-xl md:text-3xl ">{name}</h2>
                      <p className=" text-sm py-3"> {shortDescription.slice( 0, 50)}...</p>

                      <div className=" flex justify-around space-x-1 mt-1">
                        <button className="btn btn-outline btn-success"> Price: {price}$</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-warning">Remove</button>
                      </div>
                    </div>
                  </div>
                )
               })
            }
           
        </div>
       </>
    );
};

MyCartPage.propTypes = {
    carts: PropTypes.array
}

export default MyCartPage;