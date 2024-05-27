import React from "react";
// import bannerImg from "../../../public/images/banner.png";
import Lottie from "react-lottie";
import okay from "../../../public/images/logo.json"
import { Link } from "react-router-dom";
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: okay,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/* img */}
        <div className="md:w-1/2">
          <div className="flex-1 ">
        <Lottie options={defaultOptions} width={400} height={450} />
      </div>   
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable <span className="text-orange-500 ">Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Where Each Plate Weaves a Story of Culinary Mastery and Passionate
            Craftsmanship
          </p>
          <button className="bg-orange-500  font-semibold btn text-white px-8 py-3 rounded-full">
            <Link to={"/menu"}>Order Now</Link>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
