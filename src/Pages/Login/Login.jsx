import React from "react";
import Lottie from "lottie-react";
import animation from '../../assets/Lotte/lotte.json'
import { Link } from "react-router-dom";
import useTitle from "../../CustomHook/useTitle";

const Login = () => {
  useTitle('Login')
  console.log("login user", import.meta.env.VITE_authDomain);
  return (
    <div>
      <h1 className="text-5xl text-center font-bold text-[#181d4e] ">LogIn</h1>
      <div className="hero lg:my-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                  <Link to='/register' className="font-semibold">Or register </Link>
                </label>
              </div>
              <div className="form-control mt-6">
               <input type="submit" value="Login" className="button" />
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
