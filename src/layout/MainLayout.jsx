import { Outlet } from "react-router-dom";
import Navbar from "../component/sheard/Navbar";
import Footer from "../component/sheard/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="bg-[#FCFCFC] ">
            <Navbar/>
           
           <div className="min-h-screen">
           <Outlet></Outlet>
           </div>
           <Toaster/>
            <Footer/>
        </div>
    );
};

export default MainLayout;