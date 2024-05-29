import { BsCashCoin } from "react-icons/bs";
import { FaRegTimesCircle } from "react-icons/fa";
import { GrDeliver, GrLocation } from "react-icons/gr";
import Review from "../MenuCarts/Review";
import ReviewView from "../MenuCarts/ReviewView";
import TotalReview from "../MenuCarts/TotalReview";

const MenuDeltes = () => {
  return (
    <div className="max-w-screen-2xl ontainer mx-auto xl:px-24 px-4 ">
      <div className="flex flex-col lg:flex-row items-start gap-5  justify-between">
        <div className="lg:w-[670px] xl:w-[870px] border-2  w-full">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <div className="lg:w-[260px] xl:w-[470px] w-full lg:h-[300px] xl:h-[400px] border">
                <img
                  src="https://i.ibb.co/nD8Dcxb/pizza-5179939-640.jpg"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="lg:w-[330px] w-full mt-5 lg:mt-0 lg:ml-5">
                <h1 className="text-xl font-bold">No Girls Half Sleeve</h1>
                <p>reating</p>
                <p>Brand : No Brand | More Foods From No Brand</p>
                <p className="text-2xl mt-5 mb-4 text-orange-500 font-semibold">
                  $ 79
                </p>
                {/* Size section */}
                <div className="mb-6 w-[320px] text-gray-600">
                  <div className="flex gap-2 mt-5">
                    <div className="border-orange-500 p-1 py-1 px-3 font-mono text-black">
                      <img
                        src="https://i.ibb.co/nD8Dcxb/pizza-5179939-640.jpg"
                        alt=""
                      />
                    </div>
                    <div className="border-orange-500 p-1 py-1 px-3 font-mono text-black">
                      <img
                        src="https://i.ibb.co/nD8Dcxb/pizza-5179939-640.jpg"
                        alt=""
                      />
                    </div>
                    <div className="border-orange-500 p-1 py-1 px-3 font-mono text-black">
                      <img
                        src="https://i.ibb.co/nD8Dcxb/pizza-5179939-640.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex mt-7 mb-2 gap-10">
                    <p className="text-black">Quantity</p>
                    <div className="flex gap-8 text-xl">
                      {/* Decrease button */}
                      <button className="border-2 px-2 bg-gray-200">-</button>
                      {/* Total quantity */}
                      <button>2</button>
                      <button className="border-2 px-2 bg-gray-200">+</button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start gap-5 items-center">
                  <button className="border-2 p-2 rounded-sm text-white lg:w-[150px] w-full md:w-[220px] bg-[#1ed5f5]">
                    Buy Now
                  </button>
                  <button className="border-2 p-2 rounded-sm text-white lg:w-[150px] w-full md:w-[220px] bg-orange-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second div */}
        <div className="2 px-3  md:w-full py-24 lg:mt-0  bg-gray-100">
          <h1>Delivery</h1>
          <p className="flex gap-3 mt-2 items-center">
            <GrLocation className="text-xl" />
            <span>
              Dhaka, Dhaka North, Banani <br />
              Road No. 12 - 19
            </span>
          </p>
          <p className="flex gap-3 mt-2 items-center">
            <GrDeliver /> Standard Delivery 1 Jun - 6 Jun 5 - 10 day(s)
          </p>
          <p className="flex gap-3 mt-2 items-center">
            <BsCashCoin /> Cash on Delivery Available
          </p>
          {/* Service */}
          <div className="mt-5">
            <hr />
            <h4 className="mt-2 mb-2">Service</h4>
            <p className="flex gap-3 mt-2 items-center">
              <FaRegTimesCircle /> No Return
            </p>
          </div>
        </div>
      </div>
      {/* review page */}
      <div className="mb-5 mt-5">
        <p>Ratings & Reviews</p>

        <Review />
        <TotalReview />
      </div>
      <div className=" flex gap-4 mb-2">
        <ReviewView />
        <ReviewView />
        <ReviewView />
      </div>
    </div>
  );
};

export default MenuDeltes;
