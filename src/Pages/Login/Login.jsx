import React from "react";
import img from "../../assets/Form/undraw_sign_up_n6im.svg";

const Login = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold text-[#181d4e] ">LogIn</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Email
                  </span>
                </label>
                <input
                  type="text"
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
                  <a href="#" className="label-text-alt link link-hover font-semibold">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="button">Login</button>
              </div>
            </div>
          </div>
          <div className="text-center lg:text-left mt-10 lg:mt-0">
            <img src={img} alt="" className="mx-auto block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
