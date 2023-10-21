import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import SingleCart from "../components/SingleCart";

const MyCartPage = () => {
    const carts = useLoaderData()


    const handleDelete =(id)=>{
        
        fetch(`http://localhost:5000/cards/${id}`,{
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
            }
        })
    }




    console.log(carts);
    return (
       <>
       <h2 className="text-3xl font-extrabold"> My All Carts </h2>
       <div className="">
           {
               carts.map(cart => {
                const {name, _id, brand, type, price, shortDescription, image} = cart

                return (
                    <div key={_id} className="card lg:card-side   shadow-xl mb-10">
                    <figure className="w-3/12 h-96">
                      <img
                        src={image}
                        alt="Album"
                        className="rounded-xl w-full h-full object-cover"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-4xl p-5">{name}</h2>
                      <p className="p-5 text-xl">{shortDescription}</p>
                      <div className="card-actions justify-end">
                       <h3>{price}</h3>
              
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

export default MyCartPage;