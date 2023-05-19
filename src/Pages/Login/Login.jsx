import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import animation from '../../assets/Lotte/lotte.json'
import { Link } from "react-router-dom";
import useTitle from "../../CustomHook/useTitle";
import Swal from "sweetalert2";
import { authContext } from "../../AuthProvider/AuthProvider";
import Google from '../../assets/Logo/icons8-google.svg'

const Login = () => {
  const { loginUser, googleLogin } = useContext(authContext);
 
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        if (user) {
           Swal.fire("Login successful Done!", "Good Job!", "success");
        }
      })
    .catch(err => console.log(err))
  }
  // Google login
  const googleUserCreate = () => {
    googleLogin()
      .then(result => {
      const user = result.user
      })
      .then(err => console.log(err.message))
  }

  return (
    <div>
      <h1 className="text-5xl text-center font-bold text-[#181d4e] ">LogIn</h1>
      <div className="hero lg:my-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered font-semibold"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered font-semibold"
                  name="password"
                />
                <label className="label">
                  <Link to="/register" className="font-semibold">
                    Or register{" "}
                  </Link>
                </label>
                
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login" className="button" />
              </div>
              <div className="text-center mt-4" >
                <button className="" onClick={googleUserCreate}>
                <img src={Google} alt="" className="w-1/2" />
                </button>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left mt-10 lg:mt-0 lg:mr-20">
            <Lottie animationData={animation}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
