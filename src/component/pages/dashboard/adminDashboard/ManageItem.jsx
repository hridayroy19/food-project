import React from "react";
import useMenu from "../../../hooks/useMenu";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosPrivet from "../../../hooks/useAxiosPrivet";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const axioPublic = useAxiosPrivet();
  const [menu, loading, refetch] = useMenu();

  const deletMenuItes = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axioPublic.delete(`/menu/${item._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className=" w-full md:w-[870px] px-4 mx-auto">
      <h1 className="text-xl">
        Management All <span className="text-orange-500">Items Menu</span>
      </h1>
      <div className=" mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-500 text-black lg:text-xl">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th> Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 dymanice maping  */}

              {menu?.map((item, index) => (
                <tr key={index} className="border-2 ">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.image} alt="img" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold"> {item?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td> {item?.price}</td>
                  <td>
                    <button
                      onClick={() => deletMenuItes(item)}
                      className=" border px-5 rounded-full p-1 hover:bg-red  text-xl"
                    >
                      <MdDelete />
                    </button>
                  </td>
                  <th>
                    <button className=" hover:bg-green border px-5 rounded-full p-1 text-xl ">
                      {/* <Link to={`/dashboard/updateMenuItems/${item._id}`}>
                        <FaEdit />
                      </Link> */}
                      {item._id && (
                        <Link to={`/dashboard/updateMenuItems/${item._id}`}>
                          <FaEdit />
                        </Link>
                      )}
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
