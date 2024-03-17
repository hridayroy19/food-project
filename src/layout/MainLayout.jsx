import { Outlet } from "react-router-dom";
import Navbar from "../component/sheard/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-[#FCFCFC] ">
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;