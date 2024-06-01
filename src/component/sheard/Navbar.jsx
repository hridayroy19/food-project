import React, { useContext, useEffect, useState } from "react";
import Login from "../pages/Login";
import { Authcontext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import UseCart from "../hooks/UseCart";
import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  const [cart, refetch] = UseCart();
  const [isSticky, setSticky] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handelSignout = () => {
    logOut().then().catch();
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
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
        <Link to="/offer"> Gallery </Link>
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
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="">
                contact
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="menu text-center p-4 w-80 py-24 min-h-full bg-white font-mono  text-base-content">
                <h1
                  className=" text-center text-2xl text-orange-600 mb-7
                "
                >
                  {" "}
                  NEW HOURS{" "}
                </h1>

                <div>
                  <h4 className="text-xl"> MONDAY - TUESDAY</h4>
                  <p className="font-bold mt-1">12:00PM to 10:00PM</p>
                </div>
                <div className=" mt-6">
                  <h4 className="text-xl"> WEDNESDAY - SUNDAY</h4>
                  <p className="font-bold mt-1">12:00PM to 10:00PM</p>
                </div>
                <div className=" mt-6">
                  <button className=" text-[24px] ">
                    {" "}
                    <MdCall />
                  </button>
                  <p className="font-bold mb-1 "> Call Now</p>
                  <p> +088 01738211936</p>
                  <p>+088 01789019093</p>
                </div>
                {/* location */}
                <div className=" mt-6">
                  <button className=" text-[24px] ">
                    {" "}
                    <FaLocationDot />
                  </button>
                  <p className="text-orange-600 mb-1 text-xl">
                    {" "}
                    Dicrections Hero
                  </p>
                  <p> Dinajpur pti Mor</p>
                </div>
                {/* email code */}
                <div className=" mt-6">
                  <button className=" text-[24px] ">
                    {" "}
                    <MdEmail />
                  </button>
                  <p className="text-orange-600  mb-1 text-xl"> Message Here</p>
                  <p className="text-[22px]"> hrhridoyroy503@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
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
                  {cart?.length || 0}
                </span>
              </div>
            </label>
          </Link>

          {/* <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-primary"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 py-24 min-h-full bg-base-200 text-base-content">
                <li>
                  <a>Sidebar Item 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio perferendis quos aliquam facilis. Nam perspiciatis rerum, odio veniam, pariatur ullam non corporis iste consequuntur odit a est velit officia culpa!</a>
                </li>
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
          </div> */}

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img alt="User avatar" src={user?.photoURL} />
                  ) : (
                    <img
                      src="https://i.ibb.co/4Y2KSb9/istockphoto-1300845620-612x612.jpg"
                      alt="Default avatar"
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
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <Link to={"/order"}>Order</Link>
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
                onClick={() => setShowLoginModal(true)}
                className="bg-orange-500 px-6 py-2 rounded-full"
              >
                Login
              </button>
              {showLoginModal && (
                <Login onClose={() => setShowLoginModal(false)} />
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
