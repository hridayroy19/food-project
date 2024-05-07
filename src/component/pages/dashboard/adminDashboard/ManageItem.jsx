import React from "react";
import useMenu from "../../../hooks/useMenu";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const ManageItem = () => {
  const [menu, loading, refetch] = useMenu();
  console.log(menu);

  return (
    <div className=" w-full md:w-[870px] px-4 mx-auto">
      <h1 className="text-xl">
        {" "}
        Management All <span className="text-green">Items Menu</span>
      </h1>
      <div className=" mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-400 text-black lg:text-xl">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th> Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {menu?.map((item, index) => (
                <tr key={index} className="border-2 ">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={menu.image} alt="img" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{menu?.price}</td>
                  <td>
                    {" "}
                    <button className="  border px-5 rounded-full p-1 hover:bg-red  text-xl">
                      <MdDelete />
                    </button>{" "}
                  </td>
                  <th>
                    <button className=" hover:bg-green border px-5 rounded-full p-1 text-xl ">
                      {" "}
                      <FaEdit />{" "}
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

export default ManageItem;
