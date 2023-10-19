import { useLoaderData, useParams } from "react-router-dom";
import SingleBrandsProducts from "../components/SingleBrandsProducts";

const ShowBrandsProducts = () => {
  const { name } = useParams();
  const brandsProducts = useLoaderData();
  console.log(brandsProducts);
  return (
    <div>
      {brandsProducts.length > 0 ? (
        brandsProducts.map((product) => (
          <SingleBrandsProducts key={product._id} product={product} />
        ))
      ) : (
        <h1 className="text-7xl font-extrabold text-center">No products found</h1>
      )}
    </div>
  );
};

export default ShowBrandsProducts;
