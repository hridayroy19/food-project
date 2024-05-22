import React from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { GiConfirmed } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosPrivet from "../../../hooks/useAxiosPrivet";

const Managebooking = () => {
  const axiosPublic = useAxiosPublic();
  const axiosPrivet = useAxiosPrivet();
  const { data: orders = [], refetch } = useQuery({
    queryKey: [" orders"],
    queryFn: async () => {
      const res = await axiosPublic.get("/payment/all");
      return res.data;
    },
  });
  console.log(orders);

  const handelConfirmed = async (item) => {
    console.log(item);
    await axiosPrivet.patch(`/paypment/${item._id}`).then((res) => {
      console.log(res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    });
  };

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
                <th> Delete </th>
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
                  <td>{item.price}</td>
                  <th>{item.status}</th>
                  <th>
                    {item.status === "confirmed" ? (
                      "Done"
                    ) : (
                      <button
                        onClick={() => handelConfirmed(item)}
                        className=" btn btn-xl ml-6 bg-orange-500"
                      >
                        <GiConfirmed />
                      </button>
                    )}
                  </th>
                  <th>
                    <button className=" btn btn-xl  bg-red">
                      <RiDeleteBin6Line />
                    </button>
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
