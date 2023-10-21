import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const LoginPage = () => {
    const { login, loginWithGoogle} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Reset error message
    setErrorMessage(null);

    // Validate email and password
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    // Login
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Thanks!", "Login is Successful!", "success");
      })
      .catch((error) => {
        console.log(error);

        // Display error message
        setErrorMessage("Invalid email or password. Please try again.");

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });

  };

  const handleGoogleLogin = () =>{
    // LOgin with Google 
loginWithGoogle()
.then(result => {
    const loggedUser = result.user
    console.log(loggedUser);
    Swal.fire(
        'Thanks!',
        'Login is Successful !',
        'success'
    )
})
.catch(error => {
    console.log(error);
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
    })
})
}

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {errorMessage && (
              <div className="text-red-600">{errorMessage}</div>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary mb-5">Login</button>
              <button onClick={handleGoogleLogin} className="btn btn-primary">Login with google</button>
            </div>
            <p>
              Do not have an account?{" "}
              <Link to="/register" className="link link-hover">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
