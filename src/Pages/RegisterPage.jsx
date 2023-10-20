import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const RegisterPage = () => {

    const {createUser , loginWithGoogle } = useContext(AuthContext)


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        // const user = {name , email , password}
        // console.log(user);

        if(!name || !email || !password){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All fields are required !',
            })
        }
        if(password.length < 6){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be 6 characters or longer !',
            })
        }
        // Password must be Have a capital letter 
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be Have a capital letter !',
            })
        }

        // password have must be a special character
        if(!/(?=.*[!@#$%^&*])/.test(password)){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be Have a special character !',
            })
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user
            console.log(createdUser);
            Swal.fire(
                'Thanks!',
                'Register is Successful !',
                'success'
              )
            form.reset()

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
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="Name" name="name" placeholder="Name" className="input input-bordered"  />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <p>Already have an account? <Link to="/login" className="link link-hover">Login</Link> </p>
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-primary">Login with Google</button>

          </div>
        </div>
      </div>
    );
};

export default RegisterPage;