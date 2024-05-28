import React, { useContext, useEffect, useState } from "react";

import Login from "../pages/Login";
import { Authcontext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import UseCart from "../hooks/UseCart";

const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  // console.log(user?.email);

  const [cart, refetch] = UseCart();
  // console.log(cart);

  const handelSignout = () => {
    logOut().then().catch();
  };
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
  <li>
    <Link to="/" className="text-orange-500">
      Home
    </Link>
  </li>
  <li tabIndex={0}>
    <details>
      <summary>Menu</summary>
      <ul className="p-2">
        <li>
          <Link to="/menu">All</Link>
        </li>
        <li>
          <Link to="/menu/salad">Salad</Link>
        </li>
        <li>
          <Link to="/menu/pizza">Pizza</Link>
        </li>
      </ul>
    </details>
  </li>
  <li tabIndex={0}>
    <details>
      <summary>Services</summary>
      <ul className="p-2">
        <li>
          <Link to="/services/online-order">Online Order</Link>
        </li>
        <li>
          <Link to="/services/table-booking">Table Booking</Link>
        </li>
        <li>
          <Link to="/services/order-tracking">Order Tracking</Link>
        </li>
      </ul>
    </details>
  </li>
  <li>
    <Link to="/offer">Offers</Link>
  </li>
</>
  );

  return (
    <header
      className={`max-w-screen-2xl mb-10 bg-slate-100 z-[10001] container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown justify-between">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <a
            className="text-orange-500 font-bold text-xl flex flex-row-reverse items-center font-mono"
            href="/"
          >
            <p className="font-bold">
              {" "}
              <span className="text-black">Flavor</span> Foods
            </p>
            <img
              src="https://i.ibb.co/yQGXDnS/d791df8772bb48c765f076aaab5cfdc2-removebg-preview.png"
              className="w-28"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end ">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* card item added */}
          <Link to={"/cartPage"}>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle hidden lg:flex items-center justify-center mr-3"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {" "}
                  {cart?.length || 0}{" "}
                </span>
              </div>
            </label>
          </Link>

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  ) : (
                    <img
                      src="https://i.ibb.co/4Y2KSb9/istockphoto-1300845620-612x612.jpg"
                      alt=""
                    />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>
                    {" "}
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <Link to={"/order"}>Order</Link>
                  </a>
                </li>

                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handelSignout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="bg-orange-500  px-6 py-2 rounded-full"
              >
                Login
              </button>
              <Login></Login>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
