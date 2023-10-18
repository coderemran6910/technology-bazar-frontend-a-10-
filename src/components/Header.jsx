import { NavLink } from "react-router-dom";
// import logo from "https://i.ibb.co/3ss3566/avnet-inc-business-electronics-internet-of-things-business.jpg"
const Header = () => {
  const menmu = (
    <>
      <span className="text-xl uppercase font-bold mr-6">
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </span>
      <span className="text-xl uppercase font-bold mr-6">
        {" "}
        <NavLink to="/add-product">Add Product</NavLink>{" "}
      </span>
      <span className="text-xl uppercase font-bold mr-6">
        {" "}
        <NavLink to="/my-cart">My Cart</NavLink>{" "}
      </span>
      <span className="text-xl uppercase font-bold mr-6">
        {" "}
        <NavLink to="/Login">Login</NavLink>{" "}
      </span>
    </>
  );

  return (
    <div>


      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menmu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className=" w-32 " src="https://i.ibb.co/t2KY0Sw/bg-remove.png" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menmu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;

