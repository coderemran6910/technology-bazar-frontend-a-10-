const SingleBrandsProducts = ({ product }) => {
    const { name, brand, type, price, shortDescription, image } = product;
  
    return (
      <div className="flex shadow-xl mb-10">
        <div className="w-96 h-96">
          <div className="relative w-full h-full aspect-w-1 aspect-h-1">
            <img
              src={image}
              alt="Album"
              className="absolute w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between px-10">
          <div className="text-center lg:text-left lg:ml-5 w-auto">
            <h2 className="card-title text-4xl p-5">{name}</h2>
            <p className="p-5 text-xl">{shortDescription}</p>
            <h3>Price: {price}</h3>
            <p>
              type: <span>{type}</span>
            </p>
          </div>
          <div className="flex-1 w-40">
            <div className="btn-group btn-group-vertical ">
              <button className="btn btn-active w-40 mb-5"> Details </button>
              <button className="btn btn-active w-40">Update</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleBrandsProducts;
  