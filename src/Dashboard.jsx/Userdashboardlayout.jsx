import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const UserDashboardLayout = () => {
  const [togglesidebar, Settogglesidebar] = useState(false);
  const handlesidebarclosing =() =>{
    Settogglesidebar(false);
  }
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar Settogglesidebar={Settogglesidebar} togglesidebar={togglesidebar} />
      <div className="flex w-screen">
        <Sidebar togglesidebar={togglesidebar} Settogglesidebar={Settogglesidebar} handlesidebarclosing={handlesidebarclosing}/>
        <div className="w-full md:px-8 px-4 py-10 h-screen bg-[#fafafa9a] overflow-y-auto scrollbar-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
