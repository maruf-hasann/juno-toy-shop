import React, { useEffect } from 'react';
import client from '../../../assets/Clinet/Rectangle-21.jpg'
import client2 from '../../../assets/Clinet/Rectangle-20.jpg'
import client3 from '../../../assets/Clinet/Rectangle-18.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

const Review = () => {
   useEffect(() => {
     Aos.init({ duration: 3000 });
   }, []);
    return (
      <div className=" my-10" data-aos="fade-down">
        <h1 className="text-5xl text-center font-bold text-[#181d4e] mb-13 ">
          Review
        </h1>
        <div className="my_container lg:flex gap-3 my-4 lg:my-0 space-y-5 lg:space-y-0">
          <div className="space-y-3 text-center">
            <p className=" text-gray-500 font-semibold">
              The toy is very cute, I like it. My baby loves it, I also feel
              more secure when I let him play with toys
            </p>
            <img src={client} alt="" className="rounded-full block mx-auto" />
            <h3 className="text-xl font-semibold ">-Linda-</h3>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
          </div>{" "}
          <div className="space-y-3 text-center">
            <p className=" text-gray-500 font-semibold">
              My Bf loves it! Did not smell and was in a big enough box.
            </p>
            <img src={client2} alt="" className="rounded-full block mx-auto" />
            <h3 className="text-xl font-semibold ">-Jui kanni-</h3>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
          </div>{" "}
          <div className="space-y-3 text-center">
            <p className=" text-gray-500 font-semibold">
              I love my big soft teddy! Possible improvements could be better
              seaming of the fur.
            </p>
            <img src={client} alt="" className="rounded-full block mx-auto" />
            <h3 className="text-xl font-semibold ">-Ann Smith-</h3>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
          </div>{" "}
          <div className="space-y-3 text-center">
            <p className=" text-gray-500 font-semibold">
              I bought this for my 14 year old daughter for xmas and she loves
              it. I was surprised of how good the quality seems.
            </p>
            <img src={client3} alt="" className="rounded-full block mx-auto" />
            <h3 className="text-xl font-semibold ">-Neely-</h3>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;