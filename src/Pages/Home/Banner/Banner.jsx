import React from 'react';
import Img from '../../../assets/Banner/creative-image-1-copyright.webp'

const Banner = () => {
    return (
      <div className="my_container mb-14">
        <div className='lg:flex lg:justify-between lg:items-center'>
          {/* Text Area */}
          <div className='lg:space-y-6 text-center  lg:text-start space-y-5  '>
            <h1 className="font-bold text-5xl lg:text-6xl text-[#181d4e] lg:leading-[1.14]">
              Find your best<br className="hidden lg:block"></br> Toys for your
              <br className="hidden lg:block"></br> Children
            </h1>
            <p className="text-xl text-gray-500 ">
              We deliver best of fantastic,hand-piched,age
              <br className="hidden lg:block"></br> appropriate toys doll to
              your door.
            </p>
            <button className="button ">All Toys </button>
          </div>
          {/* Image Area */}
          <div className='lg:w-1/2 mx-auto lg:mx-0 mt-5 lg:mt-0  '>
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Banner;