import { Outlet } from "react-router-dom";
import Navbar from "../component/sheard/Navbar";
import Footer from "../component/sheard/Footer";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { Authcontext } from "../component/provider/AuthProvider";
import Loading from "../component/sheard/Loading";


const MainLayout = () => {

    const { loading } = useContext(Authcontext)
    return (
        <>

        {
          loading? <Loading></Loading> : <div className="bg-[#FCFCFC] ">
          <Navbar/>
         <div className="min-h-screen">
         <Outlet></Outlet>
         </div>
         <Toaster/>
          <Footer/>
      </div>

        }


        </>
    );
};

export default MainLayout;