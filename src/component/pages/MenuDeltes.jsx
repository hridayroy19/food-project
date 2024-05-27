const MenuDeltes = () => {
  return (
    <div className="max-w-screen-2xl border-2 container mx-auto xl:px-24 px-4  bg-gray-100">
      <div className="flex items-center justify-between py-5 ">
        <div className="w-[870px]  ">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  border-2 flex-col lg:flex-row">
              <div className="w-[280px] h-[400px] border ">
                <img
                  src="https://i.ibb.co/nD8Dcxb/pizza-5179939-640.jpg"
                  className="w-full h-full object-cover  rounded-lg shadow-2xl"
                />
              </div>
              <div className=" w-[500px] ">
                <h1 className="text-xl font-bold">
                  No Girls Half Sleeve Chinese Microfiber Printed T-Shirts for
                  boy's Girl's man woman- Trendy and Comfortable Casual Wear
                  Ends in
                </h1>
                <p className="">
                  reating
                </p>
                <p className="">
                 Brand : No Brand | More Foods From No Brand
                </p>
                <p className=" text-2xl  mt-5 mb-4 text-orange-500 font-semibold ">
                  $ 79 
                </p>
                {/*  size section */}
                <div className=" mb-6 text-gray-600">
                  <div className="flex gap-10"> <p>Size</p>
                  <p> M</p> </div>
                  <div className="w-[50px] mt-5 flex gap-5">
                    <p className="border-2 border-orange-500 p-1 py-1 px-3 font-mono text-black"> M </p>
                    <p className="border-2 hover:border-orange-500 p-1 py-1 px-3  font-mono text-black"> X </p>
                    <p className="border-2 hover:border-orange-500 p-1 py-1 px-3  font-mono text-black"> XL </p>
                  </div>
                </div>
               <div className=" flex justify-center gap-5 items-center">
               <button className="border-2 p-2 rounded-sm  text-white  w-[220px] bg-[#1ed5f5] ">By Now</button>
                <button className="border-2 p-2 rounded-sm  text-white  w-[220px] bg-orange-500">Add to Cart</button>
               </div>
              </div>
            </div>
          </div>
        </div>
        {/* secound diev */}
        <div className="border-2">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            corrupti odit quos culpa pariatur laboriosam explicabo beatae,
            repudiandae velit inventore rem, veritatis exercitationem
            dignissimos dicta voluptates officiis asperiores nesciunt minus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuDeltes;
