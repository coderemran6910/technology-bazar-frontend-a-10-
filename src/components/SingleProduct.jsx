const SingleProduct = ({product}) => {
    
const {name, brand, type, price, shortDescription, image} = product
    
  return (
    <div className="flex shadow-xl mb-10 h-52">

      <div className=" md:w-96 ">
        <div className="relative w-40 md:w-96 h-full aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt="Album"
            className="absolute w-full h-full rounded-l-xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row ml-5 justify-between">
        <div className=" text-left lg:ml-5 w-auto lg:w-[500px] mr-0 lg:mr-10">
          <h2 className="card-title text-xl md:text-3xl ">{name}</h2>
          <p className=" text-sm pr-2">{shortDescription}</p>

          <div className=" items-center mt-5 hidden lg:block ">
            <button className="text-sm md:text-xl  btn btn-outline btn-info mr-5 ">
              Price: <span className="font-bold ">${price}</span>
            </button>

            <button className="btn btn-outline btn-primary ">
              type: <span>{type}</span>
            </button>
          </div>
        </div>  
        </div>
      </div>
  );
};

export default SingleProduct;
