import React from "react";

const OnlineBooking = () => {
  return (
    <div className="max-w-screen-2xl py-20 container mx-auto bg-gray-100">
      <div className="">
        <img
          src="https://i.ibb.co/yNM5xvs/pexels-cottonbro-6466288.jpg"
          className="w-full object-cover h-[450px] "
          alt=""
        />
      </div>
      {/* card div */}
      {/* https://i.ibb.co/s2bmsZv/images-6.jpg
https://i.ibb.co/JsTWL87/images-5.jpg
https://i.ibb.co/cX7VTvx/images-4.jpg
https://i.ibb.co/Y0BnhFF/dum-pukht-i.jpg */}
      <div className=" py-10 px-28 ">
        <div className="card bg-base-100 w-72 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/JsTWL87/images-5.jpg"
              className="w-full"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vip site </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Booking Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineBooking;
