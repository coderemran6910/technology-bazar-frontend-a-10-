import Swal from "sweetalert2";

const AddBrand = () => {

    const handleAddBrand = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;

        const brand = { image, name };

        fetch("https://technology-electronics-three.vercel.app/brands", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(brand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
               Swal.fire({
                icon: 'success',
                title: 'Brand Added Successfully',
                showConfirmButton: false,
               })
                e.target.reset();
            }
        })

    }

  return (
    <>
    
    <div className="flex justify-center items-center mt-10 gap-10 h-screen">
        <form onSubmit={handleAddBrand} >
        <h2 className="text-3xl font-extrabold text-center  mb-20"> Add a Brands </h2>
      <div className="form-control mb-10">
        <label className="input-group input-group-lg">
          <span>Brand Image URL </span>
          <input
            type="text"
            name="image"
            placeholder="image url"
            className="input input-bordered input-lg "
          />
        </label>
      </div>

      <div className="form-control">
        <label className="input-group input-group-lg">
          <span> Brand Name</span>
          <input
            type="text"
            placeholder="Brand name"
            name="name"
            className="input input-bordered input-lg"
          />
        </label>
      </div>

     <div className="flex justify-center mt-10">
     <input type="submit" value="Add Brand"  className="btn  btn-primary " />
     </div>
    </form>
    </div>
    </>
  );
};

export default AddBrand;
