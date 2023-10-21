import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
// import logo from "https://i.ibb.co/3ss3566/avnet-inc-business-electronics-internet-of-things-business.jpg"
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const menmu = (
    <>

        <NavLink className=" text-sm md:text-lg px-5 py-2 uppercase font-bold mr-6 rounded-md"  to="/">Home</NavLink>
        <NavLink className=" text-sm md:text-lg px-5 py-2 uppercase font-bold mr-6 rounded-md"  to="/add-product">Add Product</NavLink>
        <NavLink className=" text-sm md:text-lg px-5 py-2 uppercase font-bold mr-6 rounded-md"  to="/brandsPage">Brands</NavLink>
        <NavLink className=" text-sm md:text-lg px-5 py-2 uppercase font-bold mr-6 rounded-md"  to="/carts">My Cart</NavLink>
        <NavLink className=" text-sm md:text-lg px-5 py-2 uppercase font-bold mr-6 rounded-md"  to="/show-products">Products</NavLink>
      
    </>
  );

  const handleLogOut = () => {

    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Log Out Successful",
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-2xl max-w-7xl mx-auto px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3  z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menmu}
            </ul>
          </div>
          <a className=" normal-case text-xl">
            <div className="flex items-center w-20" >
            <img
              className=" w-full "
              src="https://i.ibb.co/YP6R9H9/logo.png"
              alt="logo"
            />
            </div>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menmu}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
             <div className="flex items-center gap-10">
             <div className="avatar">
                <div className="w-12 rounded">
                  <img
                    src={user?.photoURL}
                    alt="Profile"
                  />
                </div>
              </div>
             <button className="btn btn-outline btn-warning"> <Link  onClick={handleLogOut}>Log Out</Link></button>
             </div>
            </>
          ) : (
            <button  className="btn btn-outline btn-primary "> <Link to={"/login"}>Login</Link></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
