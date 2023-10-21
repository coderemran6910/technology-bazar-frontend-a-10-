import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

const ProductUpdate = () => {
    const products = useLoaderData();

    const product = products[0]
    console.log(product);
    const {_id, name, brand, type, price, image} = product

    // const handleUpdateProduct = (e) => {
    //     e.preventDefault();

    //     const form = e.target;
    //     const name = form.name.value;
    //     const brand = form.brand.value;
    //     const type = form.type.value;
    //     const price = form.price.value;
    //     const image = form.image.value;

    //     const updatedProduct = {
    //         name,
    //         brand,
    //         type,
    //         price,
    //         image
    //     }



      //   fetch(`http://localhost:5000/products/${_id}`, {
      //     method: 'PUT',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(updatedProduct),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       if (data.message === 'Update successful') {
      //         Swal.fire(
      //           'Updated!',
      //           'Your product has been updated.',
      //           'success'
      //         )
      //       } else {
      //        console.error('Failed to update product:',data.message);
      //       }
      //     })
      //     .catch((error) => {
      //       console.error('Error updating product:', error);
      //     });
      // };
      
      
      
      
      
      

 
    return (
        <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Update text-hide Product</h2>
      <form className="mt-10">
        <div className="md:flex mb-8 gap-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={name}
                type="text"
                name="name"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
              defaultValue={price}
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>


          
        </div>

        <div className="md:flex mb-8 gap-3  ">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Choose a Type</span>
            </label>
            <select name="type" className="select select-bordered w-full  ">
              <option value="Mobile">Mobile</option>
              <option value="Computer">Computer</option>
              <option value="Laptop">Laptop</option>
              <option value="Headphone">Headphone</option>
              <option value="Camra">Camra</option>
              <option value="Non Type ">Quick Sort</option>
            </select>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Select a Brand</span>
            </label>
            <select name="brand" className="select select-bordered w-full">
              <option value="Apple">Apple</option>
              <option value="Apple">Oppo</option>
              <option value="Samsung">Samsung</option>
              <option value="Lava">Dell</option>
              <option value="intel">intel</option>
              <option value="Asus">Acer</option>
              <option value="Hp">Hp</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Sony">Sony</option>
              <option value="non brand">Quick Sort</option>
            </select>
          </div>
        
        </div>

        <div className="flex flex-col justify-center items-center mb-8 text-center">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text w-full text-center">Image URL</span>
            </label>
            <input
              defaultValue={image}
              placeholder="Image URL"
              className="input input-bordered w-full"
              name="image"
            ></input>
          </div>


          <div className="form-control md-w-1/2 ml-4">
            <label className="label">
              <span className="label-text w-full text-center">Rating</span>
            </label>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Update  product"
          className="btn bg-slate-300 btn-block"
        />
      </form>
    </div>
    );
};

export default ProductUpdate;