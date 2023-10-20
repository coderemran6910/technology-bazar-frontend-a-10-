import { useLoaderData } from "react-router-dom";
import SingleCart from "../components/SingleCart";

const MyCartPage = () => {
    const carts = useLoaderData()
    console.log(carts);
    return (
       <>
       <h2 className="text-3xl font-extrabold"> My All Carts </h2>
       <div className="">
           {
               carts.map(cart => <SingleCart key={cart._id} cart={cart}></SingleCart>)
            }
           
        </div>
       </>
    );
};

export default MyCartPage;