import React from "react";
import reg from "../../assets/Gallery/undraw_my_password_re_ydq7 (1).svg";
const Register = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold text-[#181d4e] ">Register</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={reg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered font-semibold"
                  name="name"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered font-semibold"
                  name="email"
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered font-semibold"
                  name="password"
                />
              </div>
              <div className="form-control">
                <input
                  type="url"
                  placeholder="Photo URL"
                  className="input input-bordered font-semibold"
                  name="photo"
                />
              </div>
              <div className="form-control mt-6">
                <button className="button">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
