import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Authcontext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const OrderPage = () => {
  const axiosprivet = useAxiosPublic();

  const { user } = useContext(Authcontext);
  //   console.log(user.email);
  const token = localStorage.getItem("access-token");

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:6001/order?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer${token}`,
          },
        }
      );
      return response.json();
    },
  });
  console.log(orders);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 ">
      <div className="py-32 flex flex-col items-center justify-center">
        {/* content */}
        <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
          Track All Your <span className="text-green">Order</span>
        </h2>
      </div>
      {/* tabil section */}

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className=" bg-green text-xl text-black">
              <tr>
                <th>#</th>
                <th>Order Date</th>
                <th> TransiteationId</th>
                <th>Price </th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((item, index) => (
                <tr className="text-xl" key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <p> data</p>
                  </td>
                  <td>{item.transitionId}</td>
                  <td>{item.price}</td>
                  <th> {item.status} </th>
                  <th>
      
                    <button className="btn btn-ghost text-xl ">
        
                      cancel
                    </button>{" "}
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

export default OrderPage;
