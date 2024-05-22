import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { GiConfirmed } from "react-icons/gi";

const Managebooking = () => {
  const axiosPublic = useAxiosPublic();
  const { data: orders = [],refetch,} = useQuery({
    queryKey: [" orders"],
    queryFn: async () => {
      const res = await axiosPublic.get("/payment/all");
      return res.data;
    },
  });
console.log(orders);

  return (
    <div className=" w-full md:w-[870px] px-4 mx-auto">
      <h1 className="text-xl">
        Management All <span className="text-green">Items Menu</span>
      </h1>
      <div className=" mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-400 text-black text-[15px] ">
              <tr>
                <th>#</th>
                <th>user</th>
                <th> Transiteation Id</th>
                <th>Price</th>
                <th> Status </th>
                <th>Confarm Order </th>
                <th> Order Date </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {orders.map((item, index) => (
                <tr key={index} className="border-2 ">
                  <th>{index + 1}</th>
                  <td>
                    <h1> {item.email} </h1>
                    
                  </td>
                  <td> {item?.transitionId}</td>
                  <td>
                   {item.price}
                  </td>
                  <th>
                   {item.status}
                  </th>
                  <th>
                  <button className=" btn btn-xl ml-6 bg-orange-500"><GiConfirmed /></button>
                  </th>
                  <th>
                   12/26/2025
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Managebooking;
