import React from "react";
import Logo from "../../../assets/Logo/logo.webp";
import Google from '../../../assets/Logo/icons8-google.svg'
import Fb from '../../../assets/Logo/icons8-facebook.svg'
import Insta from '../../../assets/Logo/icons8-instagram.svg'
import Twitter from '../../../assets/Logo/icons8-twitter.svg'

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
            <p>- jono@gmail.com</p>
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
            <div className="mt-5">
              <ul className="flex">
                <li>
                  <img src={Google} alt="" className="w-10" />
                </li>
                <li>
                  <img src={Fb} alt="" className="w-10" />
                </li>
                <li>
                  <img src={Insta} alt="" className="w-10" />
                </li>
                <li>
                  <img src={Twitter} alt="" className="w-10" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-5 font-semibold text-gray-400"> &copy;2023 Juno . All rights reserved</h3>
    </footer>
  );
};

export default Footer;
