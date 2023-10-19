const SingleProduct = ({product}) => {
    
const {name, brand, type, price, shortDescription, image} = product
    
  return (
    <div className="card lg:card-side   shadow-xl mb-10">
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

          <button className="btn btn-primary">{brand}</button>
          
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
