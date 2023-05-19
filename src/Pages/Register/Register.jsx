import React, { useContext } from "react";
import { Link } from "react-router-dom";
import reg from "../../assets/Gallery/undraw_my_password_re_ydq7 (1).svg";
import useTitle from "../../CustomHook/useTitle";
import { useForm } from "react-hook-form";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const {createUser} = useContext(authContext)
  useTitle('Register')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const photo = data.photo;
    console.log(email, password);
    createUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        updateUser(result.user,name,photo)
        if (user) {
         Swal.fire(
           "Registration successful Done!",
           "Good Job!",
           "success"
         );
        }

      })
    .catch(err => console.log(err))
  };
  const updateUser = (user,name,photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL : photo
    })
      .then(() => {
      console.log('userUpdate');
      })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <h1 className="text-5xl text-center font-bold text-[#181d4e] ">
        Register
      </h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={reg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="space-y-4 py-11 px-10" onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <input
                placeholder="Name"
                type="text"
                className="input input-bordered font-semibold w-full"
                {...register("name")}
              />
              {/* include validation with required or other standard HTML validation rules */}
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered font-semibold w-full"
                {...register("email", { required: true })}
              />
              <input
                placeholder="Password"
                type="password"
                className="input input-bordered font-semibold w-full"
                {...register("password")}
              />
              <input
                placeholder="Photo URL"
                type="url"
                className="input input-bordered font-semibold w-full"
                {...register("photo")}
              />{" "}
              <br></br>
              <input type="submit" value="Register" className="button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
