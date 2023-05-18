import React from "react";
import Logo from "../../../assets/Logo/logo.webp";

const Footer = () => {
  return (
    <footer className=" p-10 text-base-content my_container">
      <div className="lg:flex lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <img src={Logo} alt="" className="mb-4" />
          <div className="  space-y-3 font-semibold text-gray-500">
            <p>
              - London Regent Street 188-196 Regent <br></br> Street London W1B
              5BT United Kingdom
            </p>
           
          </div>
        </div>
        <div className="font-semibold text-gray-500">
          <span className="footer-title text-xl">Shop</span>
          <ul className="mt-4">
            <li className="link link-hover">Shop All</li>
            <li className="link link-hover">Best Sellers</li>
            <li className="link link-hover">New Arrivals</li>
          </ul>
        </div>
        <div className="font-semibold text-gray-500 mb-3 lg:mb-0 ">
          <span className="footer-title text-xl">Legal</span>
          <ul className="mt-4">
            <li className="link link-hover">Terms and Condition</li>
            <li className="link link-hover">Privacy policy</li>
            <li className="link link-hover">Cookie policy</li>
          </ul>
        </div>
        <div>
          <span className="footer-title text-xl mb-4">Newsletter</span>
          <div className="form-control  font-semibold mt-5">
            <div className="relative flex gap-4">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered border-[#7eac29] w-full max-w-xs"
              />
              <button className="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
