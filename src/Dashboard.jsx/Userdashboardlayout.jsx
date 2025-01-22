import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="flex w-screen ">
        <div className="w-[500px] hidden md:block  h-screen">
          <Sidebar />
        </div>
        
        <div className="w-full px-7 py-10 h-screen bg-[rgba(250,_250,_250,_1)]  overflow-y-scroll">
          <Outlet />
        </div>
      </div>
          
    </div>
  );
};

export default UserDashboardLayout;
