import React from 'react';
import Lottie from "lottie-react";
import animation from "../../assets/Lotte/error.json";
import { Link } from 'react-router-dom';
import useTitle from '../../CustomHook/useTitle';

const Error = () => {
  useTitle('404')
    return (
      <div className="my_container">
        <p className="text-center mt-10">
          <Link to={"/"} className="button">
            Back to Home
          </Link>
        </p>
        <div className='lg:w-1/2 mx-auto'>
          <Lottie animationData={animation}></Lottie>
        </div>
      </div>
    );
};

export default Error;