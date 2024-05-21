import { FaBagShopping, FaUsers } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDashboard, MdDashboardCustomize, MdHome } from "react-icons/md";
import { TiEdit, TiUser } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../component/hooks/useAdmin";
import { useContext } from "react";
import { Authcontext } from "../component/provider/AuthProvider";
import SignUp from "../component/pages/SignUp";
import Loading from "../component/sheard/Loading";

const DashboardLayout = () => {
  const {  loading }= useContext(Authcontext)
  const [isAdmine , isadmineLoading] = useAdmin()
  // console.log(isAdmine);

  return (
    <div>

      {
        isadmineLoading? (<div><Loading/> </div>)
       : isAdmine ? (<div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
          {/* Page content here */}

          <div className=" flex items-center justify-between mx-4 mt-3">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button md:hidden"
            >
              <MdDashboardCustomize />
            </label>
            <button className="btn flex justify-center md:hidden btn-primary rounded-full px-4 ">
              <TiUser className="text-xl" />
              logout
            </button>
          </div>

         <div className=" mt-5 md:mt-2 mx-4">  
         <Outlet />
         </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link className="flex justify-start gap-10" to={"/dashboard"}>
                <img
                  src="https://i.ibb.co/2v9bdVg/food-logo-food-point-background-vector-image-644408-2018.jpg"
                  className="w-10"
                  alt=""
                />
                <span className="badge badge-secondary badge-outline">
                  admin
                </span>
              </Link>
            </li>
            <hr className="mb-2 mt-1" />
            <li>
              <Link to={"/dashboard"}>
                <MdDashboard /> Dashboard{" "}
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/alluser"}>
                {" "}
                <FaUsers /> All Users
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/managebooking"}>
                {" "}
                <FaBagShopping /> Manage Booking
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/addMenu"}>
                {" "}
                <IoMdAddCircleOutline /> Add Menu
              </Link>
            </li>
            <li>
              <Link to={"/dashboard/manageItem"}>
                {" "}
                <TiEdit /> Manage Items
              </Link>
            </li>
            
            <li className=" mt-16">
            <hr />
              <Link to={"/"}>
                {" "}
                <MdHome /> Home
              </Link>
            </li>
            {/* <li><Link to={'dashboard/alluser'} >Manage Items</Link ></li>      */}
          </ul>
        </div>
      </div> ): (<SignUp/>)
      }
      
    </div>
  );
};

export default DashboardLayout;
