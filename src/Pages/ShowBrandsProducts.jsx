import { useLoaderData, useParams } from "react-router-dom";
import SingleBrandsProducts from "../components/SingleBrandsProducts";

const ShowBrandsProducts = () => {
  const { name } = useParams();
  const brandsProducts = useLoaderData();
  console.log(brandsProducts);
  return (
   <>
 
<div>
<div className="carousel w-full  h-[50vh]">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="hero h-full" style={{backgroundImage: `url(${brandsProducts[0]?.image})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{ brandsProducts[0]?.name}</h1>
      <p className="mb-5">{ brandsProducts[0]?.shortDescription}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 


  

   <div id="slide2" className="carousel-item relative w-full">
  <div className="hero h-full" style={{backgroundImage: `url(${brandsProducts[1]?.image})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{ brandsProducts[1]?.name}</h1>
      <p className="mb-5">{ brandsProducts[1]?.shortDescription}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 



  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero h-full" style={{backgroundImage: `url(${brandsProducts[2]?.image})`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{ brandsProducts[2]?.name}</h1>
      <p className="mb-5">{ brandsProducts[2]?.shortDescription}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
</div>

<h2 className="text-3xl font-bold text-center py-20">  All {name} Products here  </h2>
    <div className="max-w-7xl mx-auto">
      {brandsProducts.length > 0 ? (
        brandsProducts.map((product) => (
          <SingleBrandsProducts key={product._id} product={product} />
        ))
      ) : (
        <h1 className="text-7xl font-extrabold text-center py-20">No products found</h1>
      )}
    </div>
   </>
  );
};

export default ShowBrandsProducts;
