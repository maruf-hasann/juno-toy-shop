import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/Logo/logo.webp'
import { XMarkIcon, Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import './Header.css'
import { authContext } from '../../../AuthProvider/AuthProvider';
import Swal from "sweetalert2";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { user, logOut } = useContext(authContext);
  // console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
      Swal.fire("LogOut successful Done!", "Good Job!", "success");
      })
    .catch(err => console.log(err))
  }
    return (
      <nav className="my_container">
        <div className="flex justify-between items-center mt-4 lg:mt-0">
          {/* Logo Area */}
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <ul className=" lg:flex font-bold space-x-6 hidden text-gray-600">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-toys">All Toys</NavLink>
            </li>
            {user ? (
              <li>
                {" "}
                <NavLink to="/my-toys">My Toys</NavLink>
              </li>
            ) : (
              ""
            )}{" "}
            {user ? (
              <li>
                <NavLink to="/add-toys">Add A Toys</NavLink>
              </li>
            ) : (
              ""
            )}
            <li>
              <NavLink to="/all-toys">Best Selling</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>

          {user ? (
            <div className="hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="tooltip" data-tip={user?.displayName}>
                  <img src={user?.photoURL} className=" w-14 block " />
                </div>
                <Link to="/login">
                  <button className="button" onClick={handleLogout}>
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="hidden lg:block">
              <Link to="/login">
                <button className="button">Login</button>
              </Link>
            </div>
          )}

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              aria-label="Open menu"
              title="open Menu"
              onClick={() => setOpenMenu(true)}
            >
              <Bars3CenterLeftIcon className="w-11 text-gray-600"></Bars3CenterLeftIcon>
            </button>

            {openMenu && (
              <div className="absolute top-0 left-0 w-full z-20">
                <div className="p-5 bg-white border rounded shadow-lg">
                  {/* Logo and Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <img src={Logo} alt="" />
                      </Link>
                    </div>
                    {/*  close  */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setOpenMenu(false)}
                      >
                        <XMarkIcon className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <nav>
                    <ul className="space-y-3">
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/all-toys">All Toys</NavLink>
                      </li>
                      {user ? (
                        <li>
                          <NavLink to="/my-toys">My Toys</NavLink>
                        </li>
                      ) : (
                        ""
                      )}
                      {user ? (
                        <li>
                          <NavLink to="/add-toys">Add A Toys</NavLink>
                        </li>
                      ) : (
                        ""
                      )}
                      <li>
                        <NavLink to="/all-toys">Best Selling</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                      </li>
                      
                    </ul>
                  </nav>
                  
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
};

export default Header;