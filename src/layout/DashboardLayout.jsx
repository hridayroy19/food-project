import { FaBagShopping, FaUsers } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet/>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link to={'/dashboard'} ><MdDashboard /> Dashboard </Link ></li>
      <li><Link to={'/dashboard/alluser'} > <FaUsers /> All Users</Link ></li>
      <li><Link to={'/dashboard/managebooking'} > <FaBagShopping /> Manage Booking</Link ></li>     
      <li><Link to={'/dashboard/addMenu'} > <IoMdAddCircleOutline /> Add Menu</Link ></li>     
      <li><Link to={'/dashboard/manageItem'} > <TiEdit /> Manage Items</Link ></li>     
      {/* <li><Link to={'dashboard/alluser'} >Manage Items</Link ></li>      */}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;