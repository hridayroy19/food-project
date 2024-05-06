import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { LuUserCircle2 } from "react-icons/lu";
import useAxiosPrivet from "../../../hooks/useAxiosPrivet";

const User = () => {
const axiosPrivate = useAxiosPrivet()

// all user get api
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/users`);
      return response.data;
    },
  });

  // console.log(users);
// user make admine patch api
  const makeAdime = user =>{
    axiosPrivate.patch(`/users/admin/${user._id}`).then((res)=>{
      alert(`$(user.name) is  a admine`)
      refetch()
    })
  }

  // user delet api 
 const deletuser = user =>{
  axiosPrivate.delete(`/users/${user._id}`).then((res)=>{
    alert(`$(user.name) is remove from database`);
    refetch()
  })
 }


  return (
    <div className=" xl:ml-7 ml-4">
      <div className="flex  text-xl   items-center justify-between m-4">
        <h1 className=" "> All Users</h1>
        <h1> Total Users:{users.length}</h1>
      </div>
      {/* tabil crate  */}
      <div>
        <div className="overflow-x-auto">
          <table className="table  xl:w-[800px] lg:w-[600px] md:w-[400px] mx-auto table-zebra cursor-pointer">
            {/* head */}
            <thead className=" bg-green text-xl p-2 px-2 rounded-md  text-black ">
              <tr>
                <th># </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=" bg-slate-300">
              {/* row 1 */}

              {users?.map((user, index) => (
                <tr key={users._id}>
                  <th>{index + 1}</th>
                  <td> {user?.name} </td>
                  <td>{user?.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button onClick={()=> makeAdime(user)} className="text-xl ml-3">
                      
                        <LuUserCircle2 />
                      </button>
                    )}{" "}
                  </td>
                  <td>
                    <button onClick={()=> deletuser(user)} className="btn btn-xs bg-orange-600 ml-4">
                      <AiTwotoneDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
