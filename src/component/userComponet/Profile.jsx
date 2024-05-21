// import { useContext, useEffect, useState } from "react";
import {  FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { MdOutlineLocalPhone } from "react-icons/md";
// import { IoCloseSharp } from "react-icons/io5";
// import useAxiosPublic from "../hooks/useAxiosPublic";


const Profile = () => {
  const { user } = useContext(Authcontext);
  console.log(user);

  // const [user, setuser] = useState([]);
  // // console.log(user);
  // const axiosPublic = useAxiosPublic()


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (user?.email) {
  //         const response = await axiosPublic.get(`/profile?email=${user.email}`);
  //         console.log(response.data);
  //         setuser(response.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [user?.email]);

  return (
    <>
      {/* stactic card section  */}

      <div className="py-16 ">
        <div className="flex py-5 justify-center items-center">
          <h1 className=" lg:text-3xl text-xl my-5 lg:ml-8 ml-4 md:ml-7 font-semibold">
            Personal Information
          </h1>  
        </div>

<div className=" flex justify-center items-center  ">
  <div className="card xl:w-[400px] border-2 lg:w-[320px] md:w-[400px] w-[380px] font-poppins   shadow-lg">
    {/* imgaes */}
    <div className="avatar ">
      <div className="w-32 mt-10 mx-auto rounded-full">
        <img src={user?.photoURL} />
      </div>
    </div>
    <div className="card-body items-center text">
      <h2 className="card-title capitalize ">{user?.displayName}</h2>
      <p className="text-[17px] ">{user?.email} </p>
      <p> {user?.description} </p>
      <div>
        <p className="capitalize text-center text-[15px] mt-5">
         
          get contact
        </p>
        <div className=" flex gap-5 text-2xl  mt-5 mb-4">
          <FaFacebook className="hover:text-green"></FaFacebook>{" "}
          <FaLinkedinIn className="hover:text-green"></FaLinkedinIn>{" "}
          <FaTwitter className="hover:text-green"></FaTwitter>{" "}
          <FaInstagramSquare className="hover:text-green"></FaInstagramSquare>
        </div>
      </div>
    </div>
  </div>
</div> 


      

      </div>
    </>
  );
};

export default Profile;

// end
