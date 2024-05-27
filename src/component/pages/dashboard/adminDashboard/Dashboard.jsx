import React, { useContext } from "react";
import useAxiosPrivet from "../../../hooks/useAxiosPrivet";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
// import DashboardNavbar from "./DashboardNavbar";
import Calender from "./Calender";

const Dashboard = () => {
  // console.log(user);

  const axiosPrivet = useAxiosPrivet();
  const { data: stat = [], refetch } = useQuery({
    queryKey: [" stat"],
    queryFn: async () => {
      const res = await axiosPrivet.get("/deshbord");
      return res.data;
    },
  });

  // console.log(stat);

  return (
    <div className=" my-7 px-3 ">
      {/* navbar */}
      {/* <DashboardNavbar /> */}
      <h1 className="text-xl mb-10 text-orange-500 font-semibold">Overview</h1>
      <div>
        {/* ?stat use deisui */}
        <div className="stats  shadow">
          <div className="flex  lg:flex-row gap-3  flex-col">
            {/* fast dive */}
            <div className=" flex ">
              <div className="stat  place-items-center">
                <div className="stat-figure text-2xl text-secondary">
                  <FaDollarSign />
                </div>
                <div className="stat-title">Total Revenue</div>
                <div className="stat-value text-primary">
                  {stat?.totalRevenue}
                </div>
                <div className="stat-desc">
                  From January 1st to February 1st
                </div>
              </div>

              <div className="stat  place-items-center">
                <div className="stat-figure text-2xl text-secondary">
                  <FaUser />
                </div>
                <div className="stat-title">Users</div>
                <div className="stat-value text-orange-500">{stat?.users}</div>
                <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
              </div>
            </div>
            {/* secound div */}
            <div className="flex gap-5">
              <div className="stat   place-items-center">
                <div className="stat-figure text-2xl text-secondary">
                  <FaBook />
                </div>
                <div className="stat-title">All Payments</div>
                <div className="stat-value text-[#3cbe97]">
                  {stat?.payments}
                </div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
              <div className="stat  place-items-center">
                <div className="stat-figure text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Menu Items</div>
                <div className="stat-value text-[#bf4aee]">
                  {stat?.menuItems}
                </div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-8 flex justify-center ">
        <Calender />
      </div>
    </div>
  );
};

export default Dashboard;
