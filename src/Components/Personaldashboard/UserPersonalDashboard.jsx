import React from "react";
import NavbarPersonal from "./NavbarPersonal";
import SidebarPersonal from "./SidebarPersonal";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const UserPersonalDashboard = () => {
  const [togglesidebar, Settogglesidebar] = useState(false);
  const handlesidebarclosing = () => {
    Settogglesidebar(false);
  };
  return (
    <div className="w-screen h-screen overflow-hidden">
      <NavbarPersonal
        Settogglesidebar={Settogglesidebar}
        togglesidebar={togglesidebar}
        companyName="Praise Dominic"
        companyTagline="dominic@nestlypay.co"
        logo="/COMPANY LOGO.png"
      />
      <div className="flex w-screen">
        <SidebarPersonal
          togglesidebar={togglesidebar}
          Settogglesidebar={Settogglesidebar}
          handlesidebarclosing={handlesidebarclosing}
        />
        <div className="w-full md:px-8 px-4 py-10 h-screen bg-[#fafafa9a] overflow-y-auto scrollbar-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserPersonalDashboard;
